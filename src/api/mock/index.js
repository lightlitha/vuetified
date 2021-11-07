import IYA from "@/contract";

import { navbar } from "./data/navigation";

const fetch = (mockData, time = 0) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, time);
  });

export default {
  /// ////////////////////////
  /// Navigation Routes
  /// ////////////////////////
  [IYA.ACTION.APPBARNAV_FETCH]() {
    return fetch(navbar, 1000);
  },
};
