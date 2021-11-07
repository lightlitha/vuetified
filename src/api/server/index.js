import Request from "@/core/api/request";
import IYA from "@/core/contract";

export default {
  /// ////////////////////////
  /// Navigation Routes
  [IYA.ACTION.APPBARNAV_FETCH]() {
    return Request.get(IYA.URI.APPBARNAV__FETCH).then(
      (response) => response.data
    );
  },
};
