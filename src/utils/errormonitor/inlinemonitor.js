!(function () {
  var e = 0,
    t = !1,
    r = !1,
    n = window.__EXT_AUTOREPAIR_HOST_MAP__ || {
      "static.pddpic.com": ["static-1.pddpic.com", "static-2.pddpic.com"],
    };
  function o(e, t) {
    setTimeout(function () {
      var r = new Error();
      throw (
        ((r.extraInfo = {
          error_message: e,
          errorCode: 527,
          type: 501,
          url: t,
        }),
        r)
      );
    });
  }
  window.addEventListener(
    "error",
    function (a) {
      var i = a.target || {},
        c = i.src || i.href,
        d = (i.nodeName || "").toLowerCase(),
        s = document.createElement("a");
      s.href = c;
      var l = s.host,
        f = String(i.onerror),
        p =
          (f.indexOf("Loading chunk") > 0 && f.indexOf("failed") > 0) ||
          !(!i.dataset || !i.dataset.webpack),
        u = f.indexOf("CSS_CHUNK_LOAD_FAILED") > 0;
      if (
        ["link", "script"].indexOf(d) >= 0 &&
        ["preload", "prefetch"].indexOf(i.rel) < 0 &&
        !p &&
        !u &&
        n[l]
      ) {
        var y = "script" === d,
          m = Date.now() % 2,
          _ = 0 === m ? 1 : 0;
        !(function t(a) {
          var i = document.createElement(d);
          i.dataset.retryFlag = "_retry_".concat(a ? 1 : 2);
          var s = c.replace(l, n[l][a ? m : _]);
          y
            ? ((i.src = s), (i.crossOrigin = "anonymous"))
            : ((i.href = s), (i.rel = "stylesheet")),
            (i.onerror = function () {
              a
                ? t(!1)
                : y &&
                  (!(function () {
                    if (3 === (e += 1)) {
                      var t = document.createElement("div"),
                        r = window.screen.width / 375;
                      document.body.appendChild(t),
                        (t.style.position = "fixed"),
                        (t.style.top = "45%"),
                        (t.style.left = "50%"),
                        (t.style.webkitTransform = "translateX(-50%)"),
                        (t.style.transform = "translateX(-50%)"),
                        (t.style.padding = ""
                          .concat(14 * r, "px ")
                          .concat(16 * r, "px")),
                        (t.style.fontSize = "".concat(15 * r, "px")),
                        (t.style.background = "rgba(0, 0, 0, .8)"),
                        (t.style.borderRadius = "".concat(8 * r, "px")),
                        (t.style.color = "#fff"),
                        (t.style.textAlign = "center"),
                        (t.style.whiteSpace = "nowrap"),
                        (t.style.zIndex = "9999"),
                        (t.innerText = "资源加载异常, 请切换网络重试"),
                        setTimeout(function () {
                          t.remove();
                        }, 4e3);
                    }
                  })(),
                  r || ((r = !0), o("some_retry_fail", s)));
            }),
            (y ? document.body : document.head).appendChild(i);
        })(!0),
          y && !t && ((t = !0), o("trigger_retry", c));
      }
      return null;
    },
    !0
  );
})();
