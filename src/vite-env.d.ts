/// <reference types="vite/client" />

interface NetworkInformation {
  downlink?: number;
  effectiveType?: string;
  saveData?: boolean;
  addEventListener?: (type: "change", listener: () => void) => void;
  removeEventListener?: (type: "change", listener: () => void) => void;
}

interface Navigator {
  connection?: NetworkInformation;
}
