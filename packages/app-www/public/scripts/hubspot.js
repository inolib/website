!(function (e) {
  if (!document.querySelector(`#${e}`)) {
    const c = document.createElement("script");
    c.id = e;
    c.src = "https://js-eu1.hs-analytics.net/analytics/1729772700000/26728987.js";

    const n = document.querySelectorAll("script")[0];
    n.parentNode.insertBefore(c, n);
  }
})("hs-analytics");
