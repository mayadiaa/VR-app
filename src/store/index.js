import { atom } from "recoil";

export const $Current_Width = atom({
  key: "$Current_Width",
  default: window.innerWidth,
});

 export  const cartArr = atom({
key:'cartArr',
default:[],
});