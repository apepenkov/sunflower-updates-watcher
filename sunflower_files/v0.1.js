/**
 * FingerprintJS Botd v0.1.24 - Copyright (c) FingerprintJS, Inc, 2022 (https://fingerprintjs.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
function t(t, n, e, r) {
    return new(e || (e = Promise))((function(o, i) {
        function a(t) {
            try {
                f(r.next(t))
            } catch (n) {
                i(n)
            }
        }

        function u(t) {
            try {
                f(r.throw(t))
            } catch (n) {
                i(n)
            }
        }

        function f(t) {
            var n;
            t.done ? o(t.value) : (n = t.value, n instanceof e ? n : new e((function(t) {
                t(n)
            }))).then(a, u)
        }
        f((r = r.apply(t, n || [])).next())
    }))
}
class n extends Error {
    constructor(t, n) {
        super(n), this.state = t, this.name = "BotdError"
    }
}

function e() {
    return navigator.userAgent
}

function r() {
    return void 0 !== navigator.userAgentData
}

function o() {
    return navigator.appVersion
}

function i() {
    if (void 0 === navigator.connection) throw new n(-1, "navigator.connection is undefined");
    return navigator.connection.rtt
}

function a() {
    return [window.outerWidth, window.outerHeight]
}

function u() {
    return t(this, void 0, void 0, (function*() {
        if (void 0 === window.Notification) throw new n(-1, "window.Notification is undefined");
        if (void 0 === navigator.permissions) throw new n(-1, "navigator.permissions is undefined");
        const {
            permissions: t
        } = navigator;
        if ("function" != typeof t.query) throw new n(104, "navigator.permissions.query is not a function");
        const e = yield t.query({
            name: "notifications"
        });
        return "denied" === window.Notification.permission && "prompt" === e.state
    }))
}

function f() {
    return void 0 !== window.InstallTrigger
}

function c() {
    const t = document.createElement("canvas");
    if ("function" != typeof t.getContext) throw new n(104, "HTMLCanvasElement.getContext is not a function");
    const e = t.getContext("webgl");
    if (null === e) throw new n(101, "WebGLRenderingContext is null"); {
        if ("function" != typeof e.getParameter) throw new n(104, "WebGLRenderingContext.getParameter is not a function");
        const t = e.getParameter(e.VENDOR),
            r = e.getParameter(e.RENDERER),
            o = e.getParameter(e.VERSION);
        if (f()) return [t, r, o]; {
            const i = e.getExtension("WEBGL_debug_renderer_info");
            if (null === i) throw new n(101, "WEBGL_debug_renderer_info extension is null");
            return [e.getParameter(i.UNMASKED_VENDOR_WEBGL), e.getParameter(i.UNMASKED_RENDERER_WEBGL), t, r, o]
        }
    }
}

function s() {
    return [screen.width, screen.height]
}

function d() {
    if (void 0 === navigator.deviceMemory) throw new n(-1, "navigator.deviceMemory is undefined");
    return navigator.deviceMemory
}

function l() {
    const t = new ArrayBuffer(4);
    return new Uint32Array(t)[0] = 2852126720, 170 === new Uint8Array(t)[0]
}

function h() {
    try {
        const t = navigator.hardwareConcurrency;
        if ("string" == typeof t) {
            const n = parseInt(t);
            return isNaN(n) ? 1 : n
        }
        return t
    } catch (t) {
        throw new n(103, "navigator.hardwareConcurrency wrong type")
    }
}

function w() {
    return eval.toString().length
}

function v() {
    if (void 0 === navigator.plugins) throw new n(-1, "navigator.plugins is undefined");
    return navigator.plugins.length
}

function g() {
    return t(this, void 0, void 0, (function*() {
        if (void 0 === navigator.plugins) return !1;
        const {
            plugins: t
        } = navigator;
        let n = Object.getPrototypeOf(t) === PluginArray.prototype;
        for (let e = 0; e < t.length; e++) n && (n = Object.getPrototypeOf(t[e]) === Plugin.prototype);
        return n
    }))
}

function p() {
    try {
        null[0]()
    } catch (t) {
        return t.stack.toString()
    }
    throw new n(102, "errorTrace signal unexpected behaviour")
}

function m() {
    try {
        throw "a"
    } catch (t) {
        try {
            return t.toSource(), !0
        } catch (n) {
            return !1
        }
    }
}

function y() {
    if (void 0 === navigator.oscpu) throw new n(-1, "navigator.oscpu is undefined");
    return navigator.oscpu
}

function b() {
    return navigator.platform
}

function E() {
    return navigator.productSub
}

function x() {
    return navigator.vendor
}

function S() {
    if (null == navigator.webdriver) throw new n(-1, "navigator.webdriver is undefined");
    return navigator.webdriver
}

function M() {
    function t() {
        return performance.now() / 1e3
    }

    function n(t, e) {
        return t < 1e-8 ? e : t < e ? n(e - Math.floor(e / t) * t, t) : t === e ? t : n(e, t)
    }
    const e = t();
    let r = t() - e;
    for (let o = 0; o < 10; o++) r = n(r, t() - e);
    return Math.round(1 / r)
}

function A(t, n = []) {
    return null == Object.getPrototypeOf(t) ? n : A(Object.getPrototypeOf(t), n.concat(Object.getOwnPropertyNames(t)))
}
const P = /(^(.{0,5})$)|(^.*(-|_|\$|[jJ][sS]|[uU]ser|[sS]cript|[iI]nit|[dD]river|[aA]uto|[aA]gent|[sS]end|[lL]oad|[dD]ev|[cC]all|[bB]..f|[pP]rint|[kK]it|ium|[aA]rray|[pP]romise|[sS]ymbol|[cC]reate|[cC]onst).*$)|(^([A-Z_])*$)|(^([a-z-]){0,9}$)/;

function O() {
    let t = A(window);
    const n = t.indexOf("chrome"),
        e = t.indexOf("safari");
    return t = t.filter(((t, r) => null != t.match(P) || -1 != n && (r > n - 5 && r < n + 5) || -1 != e && (r > e - 5 && r < e + 5))), t
}

function R() {
    return A(window.document).filter((t => null != t.match(P)))
}

function C() {
    return A(window.navigator)
}

function T() {
    return [navigator.maxTouchPoints, navigator.msMaxTouchPoints]
}

function B() {
    return [typeof SourceBuffer, typeof SourceBufferList]
}

function L() {
    if (void 0 === document.documentElement) throw new n(-1, "document.documentElement is undefined");
    const {
        documentElement: t
    } = document;
    if ("function" != typeof t.getAttributeNames) throw new n(104, "document.documentElement.getAttributeNames is not a function");
    return t.getAttributeNames()
}

function N() {
    if (void 0 === window.close) throw new n(-1, "window.close is undefined");
    return window.close.toString()
}

function _() {
    if (void 0 === window.external) throw new n(-1, "window.external is undefined");
    const {
        external: t
    } = window;
    if ("function" != typeof t.toString) throw new n(104, "window.external.toString is not a function");
    return t.toString()
}

function D() {
    return Object.assign([], navigator.languages)
}

function U() {
    if (void 0 === navigator.mimeTypes) throw new n(-1, "navigator.mimeTypes is undefined");
    return navigator.mimeTypes.length
}

function I() {
    return t(this, void 0, void 0, (function*() {
        if (void 0 === navigator.mimeTypes) return !1;
        const {
            mimeTypes: t
        } = navigator;
        let n = Object.getPrototypeOf(t) === MimeTypeArray.prototype;
        for (let e = 0; e < t.length; e++) n && (n = Object.getPrototypeOf(t[e]) === MimeType.prototype);
        return n
    }))
}

function q() {
    return "undefined" != typeof DeviceMotionEvent && "function" == typeof DeviceMotionEvent.requestPermission
}

function W() {
    return Date.now()
}

function j() {
    return CSS.supports("backdrop-filter", "blur(2px)")
}

function k() {
    const t = document.createElement("canvas");
    if ("function" != typeof t.getContext) throw new n(104, "HTMLCanvasElement.getContext is not a function");
    const e = t.getContext("webgl");
    if (null == e) throw new n(101, "WebGLRenderingContext is null"); {
        const t = e.getExtension("WEBGL_compressed_texture_astc");
        if (null === t) return "";
        if ("function" != typeof t.getSupportedProfiles) throw new n(104, "WEBGL_compressed_texture_astc.getSupportedProfiles is not a function");
        return t.getSupportedProfiles().toString()
    }
}

function K() {
    if (void 0 === window.devicePixelRatio) throw new n(-1, "window.devicePixelRatio is undefined");
    const t = document.createElement("div");
    t.style.border = ".5px dotted transparent", document.body.appendChild(t);
    const e = t.offsetHeight;
    return document.body.removeChild(t), [window.devicePixelRatio, e]
}

function G() {
    if ("function" != typeof window.matchMedia) throw new n(104, "window.matchMedia is not a function");
    const t = window.matchMedia("(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)");
    if (void 0 === t.matches) throw new n(-1, "MediaQueryList.matches is undefined");
    return t.matches
}

function $() {
    if ("function" != typeof window.matchMedia) throw new n(104, "window.matchMedia is not a function");
    const t = window.matchMedia("(prefers-color-scheme: dark)");
    if (void 0 === t.matches) throw new n(-1, "MediaQueryList.matches is undefined");
    return t.matches
}

function z() {
    if ("function" != typeof window.SharedArrayBuffer) throw new n(104, "window.SharedArrayBuffer is not a function");
    const t = new window.SharedArrayBuffer(1);
    if (void 0 === t.byteLength) throw new n(-1, "SharedArrayBuffer.byteLength is undefined");
    return t.byteLength
}

function H(e) {
    return t(this, void 0, void 0, (function*() {
        try {
            return {
                state: 1,
                value: yield e()
            }
        } catch (t) {
            return t instanceof n ? {
                state: t.state,
                value: t.toString()
            } : {
                state: -100,
                value: t.toString()
            }
        }
    }))
}

function J() {
    return t(this, void 0, void 0, (function*() {
        return function(n) {
            return t(this, void 0, void 0, (function*() {
                const t = {};
                for (const e of n) t[`s${n.indexOf(e)+1}`] = yield H(e);
                return t
            }))
        }([e, r, o, i, a, u, c, s, d, l, h, f, S, w, v, g, p, m, y, b, E, x, M, O, R, C, T, B, L, N, _, D, U, I, q, W, j, k, K, G, $, z])
    }))
}
var V = Uint8Array,
    Q = Uint16Array,
    Y = Uint32Array,
    F = new V([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
    Z = new V([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
    X = new V([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
    tt = function(t, n) {
        for (var e = new Q(31), r = 0; r < 31; ++r) e[r] = n += 1 << t[r - 1];
        var o = new Y(e[30]);
        for (r = 1; r < 30; ++r)
            for (var i = e[r]; i < e[r + 1]; ++i) o[i] = i - e[r] << 5 | r;
        return [e, o]
    },
    nt = tt(F, 2),
    et = nt[0],
    rt = nt[1];
et[28] = 258, rt[258] = 28;
for (var ot = tt(Z, 0)[1], it = new Q(32768), at = 0; at < 32768; ++at) {
    var ut = (43690 & at) >>> 1 | (21845 & at) << 1;
    ut = (61680 & (ut = (52428 & ut) >>> 2 | (13107 & ut) << 2)) >>> 4 | (3855 & ut) << 4, it[at] = ((65280 & ut) >>> 8 | (255 & ut) << 8) >>> 1
}
var ft = function(t, n, e) {
        for (var r = t.length, o = 0, i = new Q(n); o < r; ++o) t[o] && ++i[t[o] - 1];
        var a, u = new Q(n);
        for (o = 0; o < n; ++o) u[o] = u[o - 1] + i[o - 1] << 1;
        if (e) {
            a = new Q(1 << n);
            var f = 15 - n;
            for (o = 0; o < r; ++o)
                if (t[o])
                    for (var c = o << 4 | t[o], s = n - t[o], d = u[t[o] - 1]++ << s, l = d | (1 << s) - 1; d <= l; ++d) a[it[d] >>> f] = c
        } else
            for (a = new Q(r), o = 0; o < r; ++o) t[o] && (a[o] = it[u[t[o] - 1]++] >>> 15 - t[o]);
        return a
    },
    ct = new V(288);
for (at = 0; at < 144; ++at) ct[at] = 8;
for (at = 144; at < 256; ++at) ct[at] = 9;
for (at = 256; at < 280; ++at) ct[at] = 7;
for (at = 280; at < 288; ++at) ct[at] = 8;
var st = new V(32);
for (at = 0; at < 32; ++at) st[at] = 5;
var dt = ft(ct, 9, 0),
    lt = ft(st, 5, 0),
    ht = function(t) {
        return (t + 7) / 8 | 0
    },
    wt = function(t, n, e) {
        e <<= 7 & n;
        var r = n / 8 | 0;
        t[r] |= e, t[r + 1] |= e >>> 8
    },
    vt = function(t, n, e) {
        e <<= 7 & n;
        var r = n / 8 | 0;
        t[r] |= e, t[r + 1] |= e >>> 8, t[r + 2] |= e >>> 16
    },
    gt = function(t, n) {
        for (var e = [], r = 0; r < t.length; ++r) t[r] && e.push({
            s: r,
            f: t[r]
        });
        var o = e.length,
            i = e.slice();
        if (!o) return [St, 0];
        if (1 == o) {
            var a = new V(e[0].s + 1);
            return a[e[0].s] = 1, [a, 1]
        }
        e.sort((function(t, n) {
            return t.f - n.f
        })), e.push({
            s: -1,
            f: 25001
        });
        var u = e[0],
            f = e[1],
            c = 0,
            s = 1,
            d = 2;
        for (e[0] = {
                s: -1,
                f: u.f + f.f,
                l: u,
                r: f
            }; s != o - 1;) u = e[e[c].f < e[d].f ? c++ : d++], f = e[c != s && e[c].f < e[d].f ? c++ : d++], e[s++] = {
            s: -1,
            f: u.f + f.f,
            l: u,
            r: f
        };
        var l = i[0].s;
        for (r = 1; r < o; ++r) i[r].s > l && (l = i[r].s);
        var h = new Q(l + 1),
            w = pt(e[s - 1], h, 0);
        if (w > n) {
            r = 0;
            var v = 0,
                g = w - n,
                p = 1 << g;
            for (i.sort((function(t, n) {
                    return h[n.s] - h[t.s] || t.f - n.f
                })); r < o; ++r) {
                var m = i[r].s;
                if (!(h[m] > n)) break;
                v += p - (1 << w - h[m]), h[m] = n
            }
            for (v >>>= g; v > 0;) {
                var y = i[r].s;
                h[y] < n ? v -= 1 << n - h[y]++ - 1 : ++r
            }
            for (; r >= 0 && v; --r) {
                var b = i[r].s;
                h[b] == n && (--h[b], ++v)
            }
            w = n
        }
        return [new V(h), w]
    },
    pt = function(t, n, e) {
        return -1 == t.s ? Math.max(pt(t.l, n, e + 1), pt(t.r, n, e + 1)) : n[t.s] = e
    },
    mt = function(t) {
        for (var n = t.length; n && !t[--n];);
        for (var e = new Q(++n), r = 0, o = t[0], i = 1, a = function(t) {
                e[r++] = t
            }, u = 1; u <= n; ++u)
            if (t[u] == o && u != n) ++i;
            else {
                if (!o && i > 2) {
                    for (; i > 138; i -= 138) a(32754);
                    i > 2 && (a(i > 10 ? i - 11 << 5 | 28690 : i - 3 << 5 | 12305), i = 0)
                } else if (i > 3) {
                    for (a(o), --i; i > 6; i -= 6) a(8304);
                    i > 2 && (a(i - 3 << 5 | 8208), i = 0)
                }
                for (; i--;) a(o);
                i = 1, o = t[u]
            } return [e.subarray(0, r), n]
    },
    yt = function(t, n) {
        for (var e = 0, r = 0; r < n.length; ++r) e += t[r] * n[r];
        return e
    },
    bt = function(t, n, e) {
        var r = e.length,
            o = ht(n + 2);
        t[o] = 255 & r, t[o + 1] = r >>> 8, t[o + 2] = 255 ^ t[o], t[o + 3] = 255 ^ t[o + 1];
        for (var i = 0; i < r; ++i) t[o + i + 4] = e[i];
        return 8 * (o + 4 + r)
    },
    Et = function(t, n, e, r, o, i, a, u, f, c, s) {
        wt(n, s++, e), ++o[256];
        for (var d = gt(o, 15), l = d[0], h = d[1], w = gt(i, 15), v = w[0], g = w[1], p = mt(l), m = p[0], y = p[1], b = mt(v), E = b[0], x = b[1], S = new Q(19), M = 0; M < m.length; ++M) S[31 & m[M]]++;
        for (M = 0; M < E.length; ++M) S[31 & E[M]]++;
        for (var A = gt(S, 7), P = A[0], O = A[1], R = 19; R > 4 && !P[X[R - 1]]; --R);
        var C, T, B, L, N = c + 5 << 3,
            _ = yt(o, ct) + yt(i, st) + a,
            D = yt(o, l) + yt(i, v) + a + 14 + 3 * R + yt(S, P) + (2 * S[16] + 3 * S[17] + 7 * S[18]);
        if (N <= _ && N <= D) return bt(n, s, t.subarray(f, f + c));
        if (wt(n, s, 1 + (D < _)), s += 2, D < _) {
            C = ft(l, h, 0), T = l, B = ft(v, g, 0), L = v;
            var U = ft(P, O, 0);
            wt(n, s, y - 257), wt(n, s + 5, x - 1), wt(n, s + 10, R - 4), s += 14;
            for (M = 0; M < R; ++M) wt(n, s + 3 * M, P[X[M]]);
            s += 3 * R;
            for (var I = [m, E], q = 0; q < 2; ++q) {
                var W = I[q];
                for (M = 0; M < W.length; ++M) {
                    var j = 31 & W[M];
                    wt(n, s, U[j]), s += P[j], j > 15 && (wt(n, s, W[M] >>> 5 & 127), s += W[M] >>> 12)
                }
            }
        } else C = dt, T = ct, B = lt, L = st;
        for (M = 0; M < u; ++M)
            if (r[M] > 255) {
                j = r[M] >>> 18 & 31;
                vt(n, s, C[j + 257]), s += T[j + 257], j > 7 && (wt(n, s, r[M] >>> 23 & 31), s += F[j]);
                var k = 31 & r[M];
                vt(n, s, B[k]), s += L[k], k > 3 && (vt(n, s, r[M] >>> 5 & 8191), s += Z[k])
            } else vt(n, s, C[r[M]]), s += T[r[M]];
        return vt(n, s, C[256]), s + T[256]
    },
    xt = new Y([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
    St = new V(0),
    Mt = function(t, n, e, r, o, i) {
        var a = t.length,
            u = new V(r + a + 5 * (1 + Math.ceil(a / 7e3)) + o),
            f = u.subarray(r, u.length - o),
            c = 0;
        if (!n || a < 8)
            for (var s = 0; s <= a; s += 65535) {
                var d = s + 65535;
                d >= a && (f[c >> 3] = i), c = bt(f, c + 1, t.subarray(s, d))
            } else {
                for (var l = xt[n - 1], h = l >>> 13, w = 8191 & l, v = (1 << e) - 1, g = new Q(32768), p = new Q(v + 1), m = Math.ceil(e / 3), y = 2 * m, b = function(n) {
                        return (t[n] ^ t[n + 1] << m ^ t[n + 2] << y) & v
                    }, E = new Y(25e3), x = new Q(288), S = new Q(32), M = 0, A = 0, P = (s = 0, 0), O = 0, R = 0; s < a; ++s) {
                    var C = b(s),
                        T = 32767 & s,
                        B = p[C];
                    if (g[T] = B, p[C] = T, O <= s) {
                        var L = a - s;
                        if ((M > 7e3 || P > 24576) && L > 423) {
                            c = Et(t, f, 0, E, x, S, A, P, R, s - R, c), P = M = A = 0, R = s;
                            for (var N = 0; N < 286; ++N) x[N] = 0;
                            for (N = 0; N < 30; ++N) S[N] = 0
                        }
                        var _ = 2,
                            D = 0,
                            U = w,
                            I = T - B & 32767;
                        if (L > 2 && C == b(s - I))
                            for (var q = Math.min(h, L) - 1, W = Math.min(32767, s), j = Math.min(258, L); I <= W && --U && T != B;) {
                                if (t[s + _] == t[s + _ - I]) {
                                    for (var k = 0; k < j && t[s + k] == t[s + k - I]; ++k);
                                    if (k > _) {
                                        if (_ = k, D = I, k > q) break;
                                        var K = Math.min(I, k - 2),
                                            G = 0;
                                        for (N = 0; N < K; ++N) {
                                            var $ = s - I + N + 32768 & 32767,
                                                z = $ - g[$] + 32768 & 32767;
                                            z > G && (G = z, B = $)
                                        }
                                    }
                                }
                                I += (T = B) - (B = g[T]) + 32768 & 32767
                            }
                        if (D) {
                            E[P++] = 268435456 | rt[_] << 18 | ot[D];
                            var H = 31 & rt[_],
                                J = 31 & ot[D];
                            A += F[H] + Z[J], ++x[257 + H], ++S[J], O = s + _, ++M
                        } else E[P++] = t[s], ++x[t[s]]
                    }
                }
                c = Et(t, f, i, E, x, S, A, P, R, s - R, c), !i && 7 & c && (c = bt(f, c + 1, St))
            }
        return function(t, n, e) {
            (null == n || n < 0) && (n = 0), (null == e || e > t.length) && (e = t.length);
            var r = new(2 == t.BYTES_PER_ELEMENT ? Q : 4 == t.BYTES_PER_ELEMENT ? Y : V)(e - n);
            return r.set(t.subarray(n, e)), r
        }(u, 0, r + ht(c) + o)
    },
    At = function() {
        for (var t = new Int32Array(256), n = 0; n < 256; ++n) {
            for (var e = n, r = 9; --r;) e = (1 & e && -306674912) ^ e >>> 1;
            t[n] = e
        }
        return t
    }(),
    Pt = function(t, n, e) {
        for (; e; ++n) t[n] = e, e >>>= 8
    };

function Ot(t, n) {
    n || (n = {});
    var e = function() {
            var t = -1;
            return {
                p: function(n) {
                    for (var e = t, r = 0; r < n.length; ++r) e = At[255 & e ^ n[r]] ^ e >>> 8;
                    t = e
                },
                d: function() {
                    return ~t
                }
            }
        }(),
        r = t.length;
    e.p(t);
    var o, i, a, u, f, c, s = (o = t, i = n, a = 10 + ((c = n).filename && c.filename.length + 1 || 0), u = 8, Mt(o, null == i.level ? 6 : i.level, null == i.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(o.length)))) : 12 + i.mem, a, u, !f)),
        d = s.length;
    return function(t, n) {
        var e = n.filename;
        if (t[0] = 31, t[1] = 139, t[2] = 8, t[8] = n.level < 2 ? 4 : 9 == n.level ? 2 : 0, t[9] = 3, 0 != n.mtime && Pt(t, 4, Math.floor(new Date(n.mtime || Date.now()) / 1e3)), e) {
            t[3] = 8;
            for (var r = 0; r <= e.length; ++r) t[r + 10] = e.charCodeAt(r)
        }
    }(s, n), Pt(s, d - 8, e.d()), Pt(s, d - 4, r), s
}
var Rt = "undefined" != typeof TextDecoder && new TextDecoder;
try {
    Rt.decode(St, {
        stream: !0
    }), 1
} catch (_t) {}

function Ct(t) {
    return t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
}
class Tt {
    constructor() {
        this.type = 2, this.paddingSize = 0
    }
    obfuscate(t) {
        const n = function(t) {
                if ("function" == typeof TextEncoder) return (new TextEncoder).encode(t);
                const n = unescape(encodeURI(t)),
                    e = new Uint8Array(n.length);
                for (let r = 0; r < n.length; ++r) e[r] = n.charCodeAt(r);
                return e
            }(JSON.stringify(t)),
            e = Ot(n),
            r = 2 + e.length,
            o = new ArrayBuffer(r),
            i = new Uint8Array(o);
        let a = 0;
        i[a++] = this.type, i[a++] = this.paddingSize;
        for (let u = 0; u < e.length; ++u) i[a++] = e[u] ^ u;
        return i
    }
    deobfuscate(t) {
        const e = Ct(t),
            r = e[0],
            o = e[1];
        if (r !== this.type || o !== this.paddingSize) throw new n(105, "Wrong type or padding size");
        const i = new Uint8Array(e.length - 2);
        for (let n = 0; n < i.length; ++n) i[n] = e[n + 2] ^ n;
        return JSON.parse(function(t) {
            if ("function" == typeof TextDecoder) {
                const n = (new TextDecoder).decode(t);
                if (n) return n
            }
            const n = Ct(t);
            return decodeURIComponent(escape(String.fromCharCode.apply(null, n)))
        }(i))
    }
}
class Bt {
    constructor(t) {
        this.tag = "", this.endpoint = null == t.endpoint ? "https://botd.fpapi.io/api/v1/" : t.endpoint, this.endpoint += this.endpoint.endsWith("/") ? "" : "/", -1 === this.endpoint.indexOf("://") && (this.endpoint = new URL(this.endpoint, document.baseURI).href);
        const n = null == t.token ? "" : t.token,
            e = null == t.publicKey ? "" : t.publicKey;
        if ("" === e && "" === n) throw Bt.createError("publicKeyRequired", "publicKey required");
        this.publicKey = "" === e ? n : e, this.integration = "integration" === t.mode, this.mode = null == t.mode || this.integration ? "requestId" : t.mode, this.obfuscator = new Tt, this.obfuscationMode = null == t.obfuscationMode ? this.integration ? "requestOnly" : "all" : t.obfuscationMode
    }
    collect() {
        return t(this, void 0, void 0, (function*() {
            const t = Date.now();
            return this.components = yield J(), this.performance = Date.now() - t, this.components
        }))
    }
    static throwIfError(t) {
        if ("error" in t) throw t
    }
    static createError(t, n) {
        return {
            error: {
                code: t,
                message: n
            }
        }
    }
    createRequestBody() {
        return {
            mode: this.mode,
            performance: this.performance,
            signals: this.components,
            publicKey: this.publicKey,
            tag: this.tag
        }
    }
    detect(n = {
        tag: ""
    }) {
        return t(this, void 0, void 0, (function*() {
            this.tag = n.tag;
            try {
                const n = this.integration ? "include" : void 0,
                    r = new URL(this.endpoint);
                r.pathname += "detect", r.searchParams.append("version", "0.1.24"), r.search += "all" !== this.obfuscationMode ? "&deobfuscate" : "";
                const o = "none" === this.obfuscationMode ? JSON.stringify(this.createRequestBody()) : this.obfuscator.obfuscate(this.createRequestBody()),
                    i = yield fetch(r.href, {
                        method: "POST",
                        headers: {
                            "Content-Type": "text/plain"
                        },
                        body: o,
                        credentials: n
                    }), a = "all" !== this.obfuscationMode ? yield i.json(): this.obfuscator.deobfuscate(yield i.arrayBuffer());
                return Bt.throwIfError(a), "requestId" in a && !this.integration && (t = "botd-request-id", e = a.requestId, e = encodeURIComponent(e), document.cookie = `${t}=${e};SameSite=None;Secure`), a
            } catch (r) {
                throw Bt.throwIfError(r), Bt.createError("botdFailed", r.toString())
            }
            var t, e
        }))
    }
}

function Lt(n) {
    return t(this, void 0, void 0, (function*() {
        const t = new Bt(n);
        return yield t.collect(), t
    }))
}
var Nt = {
    load: Lt
};
export {
    Nt as
    default, Lt as load
};