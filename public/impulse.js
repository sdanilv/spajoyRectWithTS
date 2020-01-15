!function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, n.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
            return e[t]
        }.bind(null, i));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function (e, t, n) {


    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    n.r(t);
    var i = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this._events = {}
        }

        var t, n, i;
        return t = e, (n = [{
            key: "emit", value: function (e, t) {
                var n = this._events[e];
                n && n.forEach(function (e) {
                    e.call(null, t)
                })
            }
        }, {
            key: "subscribe", value: function (e, t) {
                var n = this;
                return n._events[e] || (n._events[e] = []), n._events[e].push(t), function () {
                    n._events[e] = n._events[e].filter(function (e) {
                        return t !== e
                    })
                }
            }
        }]) && r(t.prototype, n), i && r(t, i), e
    }(), o = {
        linear: function (e, t, n, r) {
            return n * e / r + t
        }, easeInQuad: function (e, t, n, r) {
            return n * (e /= r) * e + t
        }
    };
    var a = function (e, t, n, r, i, a) {
        if ("number" === typeof e && "number" === typeof t && "number" === typeof n && "function" === typeof r) {
            "string" === typeof i && o[i] && (i = o[i]), "function" !== typeof i && (i = o.linear), "function" !== typeof a && (a = function () {
            });
            var s = window.requestAnimationFrame || function (e) {
                window.setTimeout(e, 1e3 / 60)
            }, c = !1, u = t - e;
            r(e);
            var l = window.performance && window.performance.now ? window.performance.now() : +new Date();
            return s(function o(f) {
                if (!c) {
                    var d = (f || +new Date()) - l;
                    d >= 0 && r(i(d, e, u, n)), d >= 0 && d >= n ? (r(t), a()) : s(o)
                }
            }), {
                cancel: function () {
                    c = !0
                }
            }
        }
    };

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var c = function () {
        function e(t, n) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this._element = t, this._iframe = n, this._container = null, this._preloader = null, this._styleIframe(), this._introduceContainer(), this._introducePreloader()
        }

        var t, n, r;
        return t = e, (n = [{
            key: "_stretchHeight", value: function (e) {
                var t = this;
                a(parseInt(t._iframe.height, 10), parseInt(e, 10), 300, function (e) {
                    t._iframe.height = e
                }, null, null)
            }
        }, {
            key: "_stretchWidth", value: function () {
                var e = this;
                a(parseInt(e._iframe.width, 10), e._container.clientWidth, 300, function (t) {
                    e._iframe.width = t
                }, null, null)
            }
        }, {
            key: "_styleIframe", value: function () {
                this._iframe.setAttribute("frameborder", "0"), this._iframe.setAttribute("scrolling", "no"), this._iframe.setAttribute("width", "0px"), this._iframe.setAttribute("height", "0px"), this._iframe.setAttribute("overflow", "hidden")
            }
        }, {
            key: "_introduceContainer", value: function () {
                this._container = document.createElement("div"), this._container.setAttribute("style", "position: relative;min-height: 57px;min-width: 78px;"), this._element.appendChild(this._container)
            }
        }, {
            key: "_introducePreloader", value: function () {
                this._preloader = document.createElement("div"), this._preloader.setAttribute("style", "position: absolute; top: 16px; left: 57px; font-family: Monospaced Number,Chinese Quote,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;font-size: 14px;line-height: 1.5;color: rgba(0,0,0,.65);"), this._preloader.innerHTML = "Loading...", this._container.appendChild(this._preloader)
            }
        }, {
            key: "render", value: function (e, t) {
                var n = this;
                ({
                    showService: function () {
                        n._container.appendChild(n._iframe)
                    }, stretchHeight: function () {
                        n._stretchHeight(t)
                    }, stretchWidth: function () {
                        n._stretchWidth()
                    }, showPreloader: function () {
                        n._preloader.style.display = ""
                    }, hidePreloader: function () {
                        n._preloader.style.display = "none"
                    }
                })[e]()
            }
        }]) && s(t.prototype, n), r && s(t, r), e
    }();

    function u() {
        function e() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        }

        return (e() + e() + "-" + e() + "-4" + e().substr(0, 3) + "-" + e() + "-" + e() + e() + e()).toLowerCase()
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e, t) {
        if (null == e) return {};
        var n, r, i = function (e, t) {
            if (null == e) return {};
            var n, r, i = {}, o = Object.keys(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
    }

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var p = "https://application0.impulse.ottry.com:443", h = "~";

    function _(e, t, n, r) {
        e.addEventListener(t, n, !!r)
    }

    function v(e) {
        var t = /(auto|scroll)/, n = function (e, t) {
            return getComputedStyle(e, null).getPropertyValue(t)
        }, r = function (e) {
            return t.test(function (e) {
                return n(e, "overflow") + n(e, "overflow-y") + n(e, "overflow-x")
            }(e))
        };
        if (!(e instanceof HTMLElement)) throw new Error("Expected node of HTMLElement in scrollParent().");
        for (var i = function e(t, n) {
            return null === t.parentNode ? n : e(t.parentNode, n.concat([t]))
        }(e.parentNode, []), o = 0; o < i.length && i[o] !== document.body; o += 1) if (r(i[o])) return i[o];
        return document.scrollingElement || document.documentElement
    }

    function m(e, t, n) {
        return [e, t, n].join(h)
    }

    var w = function () {
        function e(t, n, r, i, o) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this._view = t, this._iframe = n, this._options = r, this._GUID = i, this._eventEmitter = o, this._wayforpay = new Wayforpay(), this._isServiceLoading = !1, this._dispatch = {}
        }

        var t, n, r;
        return t = e, (n = [{
            key: "render", value: function () {
                var e = this;
                _(window, "message", function (t) {
                    if (0 === p.indexOf(t.origin) && "string" === typeof t.data) {
                        var n, r = t.data.match((n = e._GUID, new RegExp("^" + [n, "(\\S+)", "(.*)"].join(h) + "$")));
                        if (!r || 3 !== r.length) return !1;
                        var i = r[1], o = r[2];
                        switch (i) {
                            case "serviceLoading":
                                e._view.render("stretchHeight", e._isServiceLoadingHeight), e._view.render("hidePreloader"), e._isServiceLoading = !0, window.setTimeout(e._eventEmitter.emit("serviceLoading"), 0);
                                break;
                            case "stretchHeight":
                                e._isServiceLoading ? e._view.render("stretchHeight", o) : e._isServiceLoadingHeight = o;
                                break;
                            case "buyImpulse":
                                e._wayforpay && e._wayforpay.run(JSON.parse(o), function (t) {
                                    e._iframe.contentWindow.postMessage(m(e._GUID, "buyImpulseApproved", t), p)
                                }, function (t) {
                                    e._iframe.contentWindow.postMessage(m(e._GUID, "buyImpulseDeclined", t), p)
                                }, function (t) {
                                    e._iframe.contentWindow.postMessage(m(e._GUID, "buyImpulsePending", t), p)
                                }, function (t) {
                                    e._iframe.contentWindow.postMessage(m(e._GUID, "buyImpulseUnknown", t), p)
                                });
                                break;
                            case "closeit":
                                document.getElementById("wfp-container") && e._wayforpay && e._wayforpay.closeit();
                                break;
                            case "localeSet":
                                e._view.render("hidePreloader");
                                break;
                            case "dispatched":
                                var s = JSON.parse(o), c = s.GUID, u = s.status, l = f(s, ["GUID", "status"]);
                                if (e._dispatch[c]) {
                                    var d = e._dispatch[c], _ = d.resolve, w = d.reject;
                                    200 == u ? _(l) : w(l), delete e._dispatch[c]
                                }
                                break;
                            case "notify":
                                var y = JSON.parse(o);
                                window.setTimeout(e._eventEmitter.emit(y.type, y), 0);
                                break;
                            case "impulse/start-scrollIntoView":
                                var b = v(e._iframe), g = function (e, t) {
                                        for (var n = 0, r = t; r.offsetParent && r !== e;) n += r.offsetTop, r = r.offsetParent;
                                        return n
                                    }(b, e._iframe),
                                    I = e._options.scrollOffset ? parseInt(e._options.scrollOffset, 10) : 0;
                                a(parseInt(b.scrollTop, 10), g + parseInt(o, 10) + I, 300, function (e) {
                                    b.scrollTop = e
                                }, null, function () {
                                    e._iframe.contentWindow.postMessage(m(e._GUID, "impulse/scrolledIntoView", null), p)
                                })
                        }
                    }
                }), _(window, "resize", function () {
                    e._view.render("stretchWidth")
                }), _(e._iframe, "load", function () {
                    e._view.render("stretchWidth")
                }), e._view.render("showPreloader"), e._view.render("showService")
            }
        }, {
            key: "setLocale", value: function (e) {
                this._view.render("showPreloader"), this._iframe.contentWindow.postMessage(m(this._GUID, "setLocale", e), p)
            }
        }, {
            key: "getIsServiceLoading", value: function () {
                return this._isServiceLoading
            }
        }, {
            key: "dispatch", value: function (e) {
                var t = this, n = this, r = u(), i = function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function (t) {
                            l(e, t, n[t])
                        })
                    }
                    return e
                }({GUID: r}, e);
                return new Promise(function (e, o) {
                    n._dispatch[r] = {
                        resolve: e,
                        reject: o
                    }, t._iframe.contentWindow.postMessage(m(t._GUID, "dispatch", JSON.stringify(i)), p), setTimeout(function () {
                        n._dispatch[r] && ((0, n._dispatch[r].reject)(), delete n._dispatch[r])
                    }, 500)
                })
            }
        }]) && d(t.prototype, n), r && d(t, r), e
    }();

    function y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var b = "https://application0.impulse.ottry.com:443", g = function () {
        function e(t, n) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var r = this, o = u();
            r._eventEmitter = new i();
            var a = document.createElement("iframe");

            function s() {
                r._view = new c(t, a), r._presenter = new w(r._view, a, n, o, r._eventEmitter), r._presenter.render()
            }

            if (a.setAttribute("src", b + "/api/html?GUID=" + o + "&sid=" + n.sid + (n.locale ? "&locale=" + n.locale : "") + (n.mode ? "&mode=" + n.mode : "")), a.setAttribute("id", o), a.setAttribute("name", o), "undefined" == typeof Wayforpay) {
                var l = document.getElementsByTagName("head")[0], f = document.createElement("script");
                f.type = "text/javascript", f.src = "https://secure.wayforpay.com/server/pay-widget.js", f.onload = s, l.appendChild(f)
            } else s()
        }

        var t, n, r;
        return t = e, (n = [{
            key: "setLocale", value: function (e) {
                this._presenter.setLocale(e)
            }
        }, {
            key: "subscribe", value: function (e, t) {
                var n = this._eventEmitter.subscribe(e, t);
                return "serviceLoading" === e && this._presenter && this._presenter.getIsServiceLoading() && window.setTimeout(this._eventEmitter.emit("serviceLoading"), 0), n
            }
        }, {
            key: "dispatch", value: function (e) {
                return this._presenter.dispatch(e)
            }
        }]) && y(t.prototype, n), r && y(t, r), e
    }(), I = "https://application0.impulse.ottry.com:443", O = "/service";
    !Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)) && navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") && (document.cookie.match(/^(.*;)?\s*ttr_mpls_srvc\s*=\s*[^;]+(.*)?$/) || (document.cookie = "ttr_mpls_srvc=1; max-age=86400; path=/", window.location.replace(I + (O ? "/" + O : "") + "/safari-introduce.html" + window.location.hash))), window.ottry = window.ottry || {}, window.ottry.impulse = window.ottry.impulse || {}, window.ottry.impulse.ServiceFacade = g
}]);
//# sourceMappingURL=main.js.map