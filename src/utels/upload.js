import { handleUnauthorized } from "../api/interceptor";

// sends FormData with XHR so large uploads (videos) can report progress;
// resolves to { ok, status, data } like a parsed fetch response
export const uploadWithProgress = (url, method, token, body, onProgress) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Authorization", `Bearer ${token}`);
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable && onProgress) onProgress(Math.round((e.loaded / e.total) * 100));
    };
    xhr.onload = () => {
      handleUnauthorized(url, xhr.status);
      let data = null;
      try {
        data = JSON.parse(xhr.responseText);
      } catch {}
      resolve({ ok: xhr.status >= 200 && xhr.status < 300, status: xhr.status, data });
    };
    xhr.onerror = () => reject(new Error("Network error"));
    xhr.send(body);
  });
