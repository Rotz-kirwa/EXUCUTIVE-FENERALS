export type NetworkTier = "slow" | "medium" | "fast";

export interface ConnectionSnapshot {
  downlink?: number;
  effectiveType?: string;
  online?: boolean;
  reducedMotion?: boolean;
  saveData?: boolean;
}

export interface AdaptiveExperienceState {
  networkTier: NetworkTier;
  downlink?: number;
  effectiveType?: string;
  online: boolean;
  reducedMotion: boolean;
  saveData: boolean;
  shouldReduceMotion: boolean;
  allowRichMedia: boolean;
  heroVideoDelayMs: number;
  galleryInitialCount: number;
  galleryStep: number;
  marketplaceInitialCount: number;
  marketplaceStep: number;
  deferredRootMargin: string;
}

export const DEFAULT_ADAPTIVE_STATE: AdaptiveExperienceState = {
  networkTier: "medium",
  downlink: undefined,
  effectiveType: undefined,
  online: true,
  reducedMotion: false,
  saveData: false,
  shouldReduceMotion: false,
  allowRichMedia: false,
  heroVideoDelayMs: 2800,
  galleryInitialCount: 8,
  galleryStep: 4,
  marketplaceInitialCount: 6,
  marketplaceStep: 6,
  deferredRootMargin: "700px 0px",
};

export const classifyNetworkTier = ({
  downlink,
  effectiveType,
  saveData,
}: ConnectionSnapshot): NetworkTier => {
  if (saveData) {
    return "slow";
  }

  if (effectiveType === "slow-2g" || effectiveType === "2g") {
    return "slow";
  }

  if (typeof downlink === "number" && downlink > 0 && downlink < 1.5) {
    return "slow";
  }

  if (effectiveType === "3g") {
    return "medium";
  }

  if (typeof downlink === "number" && downlink > 0 && downlink < 5) {
    return "medium";
  }

  return "fast";
};

export const buildAdaptiveState = (
  snapshot: ConnectionSnapshot = {}
): AdaptiveExperienceState => {
  const saveData = Boolean(snapshot.saveData);
  const reducedMotion = Boolean(snapshot.reducedMotion);
  const online = snapshot.online ?? true;
  const networkTier = classifyNetworkTier(snapshot);
  const shouldReduceMotion = reducedMotion || saveData || networkTier === "slow";

  const deferredRootMargin =
    networkTier === "fast"
      ? "1100px 0px"
      : networkTier === "medium"
        ? "750px 0px"
        : "360px 0px";

  return {
    networkTier,
    downlink: snapshot.downlink,
    effectiveType: snapshot.effectiveType,
    online,
    reducedMotion,
    saveData,
    shouldReduceMotion,
    allowRichMedia: online && !reducedMotion && !saveData && networkTier === "fast",
    heroVideoDelayMs: networkTier === "fast" ? 1600 : networkTier === "medium" ? 3200 : 0,
    galleryInitialCount: networkTier === "fast" ? 10 : networkTier === "medium" ? 8 : 6,
    galleryStep: networkTier === "fast" ? 6 : 4,
    marketplaceInitialCount:
      networkTier === "fast" ? 9 : networkTier === "medium" ? 6 : 4,
    marketplaceStep: networkTier === "fast" ? 6 : 4,
    deferredRootMargin,
  };
};

