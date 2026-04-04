export interface IFriend {
  _id: string;
  serial: number;
  full_name: string;
  class_room: string;
  role: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface IImage {
  _id: string;
  image_download_url: string;
  image_original_url: string;
  image_url: string;
  img_gid: string;
  title: string;
  description: string;
  is_private: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface IVideo {
  video_url: string;
  video_download_url: string;
  video_original_url: string;
  thumbnail_url: string;
  _id: string;
  vid_gid: string;
  thumb_gid: string;
  title: string;
  description: string;
  is_private: boolean;
  ip_user: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}
