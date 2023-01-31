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
        LBhp: [
            function (require, module, exports) {
                const e = (e) => {
                        return new Promise((n) => {
                            setTimeout(() => {
                                n(e);
                            }, e);
                        });
                    },
                    n = (e) => console.log(`Fulfilled after ${e}ms`);
                e(2e3).then(n), e(1e3).then(n), e(1500).then(n);
                const t = [
                        { name: "Mango", active: !0 },
                        { name: "Poly", active: !1 },
                        { name: "Ajax", active: !1 },
                    ],
                    a = (e, n) => {
                        return new Promise((t) => {
                            t(
                                e.map((e) =>
                                    e.name === n
                                        ? { ...e, active: !e.active }
                                        : e
                                )
                            );
                        });
                    };
                a(t, "Mango").then(console.table),
                    a(t, "Ajax").then(console.table);
                const o = (e, n) => Math.floor(Math.random() * (n - e + 1) + e),
                    i = (e) => {
                        const n = o(200, 500);
                        return new Promise((t, a) => {
                            setTimeout(() => {
                                Math.random() > 0.3
                                    ? t({ id: e.id, time: n })
                                    : a(e.id);
                            }, n);
                        });
                    },
                    r = ({ id: e, time: n }) => {
                        console.log(`Transaction ${e} processed in ${n}ms`);
                    },
                    s = (e) => {
                        console.warn(
                            `Error processing transaction ${e}. Please try again later.`
                        );
                    };
                i({ id: 70, amount: 150 }).then(r).catch(s),
                    i({ id: 71, amount: 230 }).then(r).catch(s);
            },
            {},
        ],
    },
    {},
    ["LBhp"],
    null
);
//# sourceMappingURL=./promis.464a6800.js.map
