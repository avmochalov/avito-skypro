import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const adminStore = create(devtools((set) => ({
  isModalWindowOpen: false,
  setIsModalWindowOpen: (value) => set(({ isModalWindowOpen: value})),
})));
