import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

import {
  DEFAULT_ADAPTIVE_STATE,
  buildAdaptiveState,
  type AdaptiveExperienceState,
} from "@/lib/adaptive";

interface NetworkInformationLike extends EventTarget {
  downlink?: number;
  effectiveType?: string;
  saveData?: boolean;
}

const AdaptiveExperienceContext =
  createContext<AdaptiveExperienceState>(DEFAULT_ADAPTIVE_STATE);

const getSnapshot = (): AdaptiveExperienceState => {
  if (typeof window === "undefined") {
    return DEFAULT_ADAPTIVE_STATE;
  }

  const connection = (
    navigator as Navigator & { connection?: NetworkInformationLike }
  ).connection;
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return buildAdaptiveState({
    downlink: connection?.downlink,
    effectiveType: connection?.effectiveType,
    online: navigator.onLine,
    reducedMotion,
    saveData: connection?.saveData,
  });
};

export const AdaptiveExperienceProvider = ({
  children,
}: PropsWithChildren) => {
  const [state, setState] = useState<AdaptiveExperienceState>(() => getSnapshot());

  useEffect(() => {
    const connection = (
      navigator as Navigator & { connection?: NetworkInformationLike }
    ).connection;
    const reducedMotionMedia = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const sync = () => setState(getSnapshot());

    window.addEventListener("online", sync);
    window.addEventListener("offline", sync);
    reducedMotionMedia.addEventListener("change", sync);
    connection?.addEventListener("change", sync);

    sync();

    return () => {
      window.removeEventListener("online", sync);
      window.removeEventListener("offline", sync);
      reducedMotionMedia.removeEventListener("change", sync);
      connection?.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.networkTier = state.networkTier;
    document.documentElement.dataset.motion =
      state.shouldReduceMotion ? "reduced" : "full";
  }, [state.networkTier, state.shouldReduceMotion]);

  return (
    <AdaptiveExperienceContext.Provider value={state}>
      {children}
    </AdaptiveExperienceContext.Provider>
  );
};

export const useAdaptiveExperience = () =>
  useContext(AdaptiveExperienceContext);

