import { describe, expect, it } from "vitest";

import { buildAdaptiveState, classifyNetworkTier } from "@/lib/adaptive";

describe("adaptive network classification", () => {
  it("treats save-data users as slow tier", () => {
    expect(classifyNetworkTier({ saveData: true, effectiveType: "4g", downlink: 20 })).toBe("slow");
  });

  it("classifies low-bandwidth connections as slow", () => {
    expect(classifyNetworkTier({ effectiveType: "3g", downlink: 0.8 })).toBe("slow");
  });

  it("classifies typical 3g as medium", () => {
    expect(classifyNetworkTier({ effectiveType: "3g", downlink: 2 })).toBe("medium");
  });

  it("classifies stronger connections as fast", () => {
    expect(classifyNetworkTier({ effectiveType: "4g", downlink: 8 })).toBe("fast");
  });
});

describe("adaptive state builder", () => {
  it("reduces motion and rich media on slow or reduced-motion contexts", () => {
    const state = buildAdaptiveState({
      effectiveType: "4g",
      downlink: 10,
      online: true,
      reducedMotion: true,
      saveData: false,
    });

    expect(state.shouldReduceMotion).toBe(true);
    expect(state.allowRichMedia).toBe(false);
  });
});
