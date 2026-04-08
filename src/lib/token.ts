const toBase64Url = (buf: Uint8Array): string => {
  const binary = Array.from(buf)
    .map((b) => String.fromCharCode(b))
    .join("");
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
};

const fromBase64Url = (encoded: string): Uint8Array => {
  const base64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
};

function numberToBase64Url(num: number): string {
  const encoder = new TextEncoder();
  return toBase64Url(encoder.encode(num.toString()));
}

export function base64UrlToNumber(encoded: string): number | null {
  try {
    const bytes = fromBase64Url(encoded);
    const str = new TextDecoder().decode(bytes);
    const num = parseInt(str, 10);
    return isNaN(num) ? null : num;
  } catch {
    return null;
  }
}

export async function generateDynamicToken(secretKey: string): Promise<string> {
  const timestamp = Math.floor(Date.now() / 1000);
  const encoder = new TextEncoder();
  const keyData = encoder.encode(secretKey);
  const msgData = encoder.encode(timestamp.toString());

  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const signature = await crypto.subtle.sign("HMAC", cryptoKey, msgData);
  const token = toBase64Url(new Uint8Array(signature));

  return token + "." + numberToBase64Url(timestamp);
}

export function encodeFixedToken(data: string, secretKey: string): string {
  const timestamp = Math.floor(Date.now() / 1000);
  const salt = Math.floor(Math.random() * 255) + 1;
  const encoder = new TextEncoder();

  const rawPayload = `${timestamp}:${data}`;
  const payloadBytes = encoder.encode(rawPayload);
  const encryptedBytes = new Uint8Array(payloadBytes.length + 1);

  encryptedBytes[0] = salt;

  const keySum =
    secretKey.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    255;

  for (let i = 0; i < payloadBytes.length; i++) {
    encryptedBytes[i + 1] = payloadBytes[i] ^ salt ^ keySum;
  }

  return toBase64Url(encryptedBytes);
}
