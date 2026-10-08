import { domain } from "./constents/const";

export const DEFAULT_IMAGE = "no-photo-available-icon-20.jpg";

// URL of an image stored in MinIO, served by the backend at /uplouds/<name>.
// Accepts old values like "uplouds/x.jpg" and falls back to the default image.
export const imageUrl = (name) => {
  const file = String(name || "").split("/").pop() || DEFAULT_IMAGE;
  return `${domain}/uplouds/${encodeURIComponent(file)}`;
};

// <img onError={onImageError}>: show the default image instead of a broken icon
export const onImageError = (e) => {
  const fallback = imageUrl(DEFAULT_IMAGE);
  if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
};
