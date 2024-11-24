export function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof url !== "undefined") {
      window.location = url;
    }
  };
  gtag("event", "conversion", {
    send_to: "AW-11157688895/l9EkCJD7oqoYEL-ks8gp",
    event_callback: callback,
  });
  return false;
}
