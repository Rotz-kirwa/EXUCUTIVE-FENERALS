export const registerServiceWorker = () => {
  if (import.meta.env.DEV || !("serviceWorker" in navigator)) {
    return;
  }

  const register = () =>
    navigator.serviceWorker.register("/sw.js").catch((error) => {
      console.error("Service worker registration failed:", error);
    });

  if ("requestIdleCallback" in window) {
    (
      window as Window & {
        requestIdleCallback: (callback: () => void) => number;
      }
    ).requestIdleCallback(register);
    return;
  }

  window.addEventListener("load", register, { once: true });
};
