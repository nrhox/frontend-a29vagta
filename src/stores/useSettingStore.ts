import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type tTheme = "light" | "dark";

interface SettingState {
  theme: tTheme;
  setTheme: (theme: tTheme) => void;
}
export const useSettingStore = create<SettingState>()(
  persist(
    (set) => ({
      theme: "light",

      setTheme: (theme) => set(() => ({ theme: theme })),
    }),
    {
      name: "settings",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
