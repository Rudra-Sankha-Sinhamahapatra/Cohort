import { atom } from "recoil";

export const inputAtom = atom({
  key: "inputAtom",
  default: null,
});

export const wordAtom = atom({
  key: "wordAtom",
  default: "",
});
