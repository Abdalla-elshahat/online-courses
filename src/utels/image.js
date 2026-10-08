import { domain } from "./constents/const";

export const DEFAULT_IMAGE = "no-photo-available-icon-20.jpg";

// MinIO object name -> served path. New files live in folders ("courses/<id>/cover/x.jpg");
// very old values carried a local folder ("uplouds/x.jpg", "coursesimg/x.jpg") that is dropped.
const objectPath = (name) => {
  const value = String(name || "").replace(/^\/+/, "").replace(/^(uplouds|coursesimg)\//, "");
  return value.split("/").map(encodeURIComponent).join("/");
};

// URL of an image stored in MinIO, served by the backend at /uplouds/<name>; falls back to the default image
export const imageUrl = (name) => `${domain}/uplouds/${objectPath(name) || DEFAULT_IMAGE}`;

// <img onError={onImageError}>: show the default image instead of a broken icon
export const onImageError = (e) => {
  const fallback = imageUrl(DEFAULT_IMAGE);
  if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
};

// URL of a course / lesson video (streamed from MinIO with seek support); null when there is none
export const videoUrl = (name) => {
  const path = objectPath(name);
  return path ? `${domain}/uplouds/${path}` : null;
};
