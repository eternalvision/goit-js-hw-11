parcelRequire = (function (e, r, t, n) {
    var i,
        o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw ((c.code = "MODULE_NOT_FOUND"), c);
            }
            (p.resolve = function (r) {
                return e[t][1][r] || r;
            }),
                (p.cache = {});
            var l = (r[t] = new f.Module(t));
            e[t][0].call(l.exports, p, l, l.exports, this);
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e));
        }
    }
    (f.isParcelRequire = !0),
        (f.Module = function (e) {
            (this.id = e), (this.bundle = f), (this.exports = {});
        }),
        (f.modules = e),
        (f.cache = r),
        (f.parent = o),
        (f.register = function (r, t) {
            e[r] = [
                function (e, r) {
                    r.exports = t;
                },
                {},
            ];
        });
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c]);
        } catch (e) {
            i || (i = e);
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = l)
            : "function" == typeof define && define.amd
            ? define(function () {
                  return l;
              })
            : n && (this[n] = l);
    }
    if (((parcelRequire = f), i)) throw i;
    return f;
})(
    {
        h9NW: [function (require, module, exports) {}, {}],
        FrnU: [
            function (require, module, exports) {
                "use strict";
                require("../../css/colorpicker.css");
                const e = document.querySelector("[data-start]"),
                    t = document.querySelector("[data-stop]");
                t.disabled = !0;
                const o = () =>
                        `#${Math.floor(16777215 * Math.random()).toString(16)}`,
                    l = () => {
                        console.log("changeBodyBgColor"),
                            (document.body.style.backgroundColor = o());
                    };
                let s = null;
                const r = () => {
                        console.log("startInterval"),
                            (e.disabled = !0),
                            (t.disabled = !1),
                            (s = setInterval(l, 1e3));
                    },
                    a = () => {
                        console.log("stopInterval"),
                            clearInterval(s),
                            (t.disabled = !0),
                            (e.disabled = !1);
                    };
                e.addEventListener("click", r), t.addEventListener("click", a);
            },
            { "../../css/colorpicker.css": "h9NW" },
        ],
    },
    {},
    ["FrnU"],
    null
);
//# sourceMappingURL=./switcher.43712f9a.js.map
