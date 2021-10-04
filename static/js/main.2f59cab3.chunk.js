(this.webpackJsonpignite = this.webpackJsonpignite || []).push([
  [0],
  {
    139: function (e, n, t) {
      "use strict";
      t.r(n);
      var a,
        c,
        r,
        i,
        s,
        o,
        d,
        b,
        l,
        m,
        j,
        g,
        u,
        p = t(0),
        h = t.n(p),
        O = t(67),
        A = t.n(O),
        f = t(7),
        x = t(11),
        w = t(12),
        v = Object(w.a)(
          a ||
            (a = Object(x.a)([
              "\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box\n    }\n    html {\n        &::-webkit-scrollbar {\n            width: .5rem;\n        }\n        &::-webkit-scrollbar-thumb{\n            background: darkgray;\n        }\n        &::-webkit-scrollbar-track {\n    background: white;\n  }\n    }\n    body{\n        font-family: 'Montserrat', sans-serif;\n        width: 100%;\n    }\n    h2 {\n        font-size: 3rem;\n        font-family: \"Abril Fatface\", cursive;\n        font-weight: lighter;\n        color: #333;\n    }\n    h3 {\n        font-size: 1.3rem;\n        padding: 1.5rem 0rem;\n\n        color: #333 ;\n    }\n    p {\n        font-size: 1.2rem;\n        line-height: 200%;\n        color: #696969;\n    }\n    a {\n        text-decoration: none;\n        color: #333;\n    }\n    img {\n        display: block;\n    }\ninput {\n    font-weight: bold;\n    font-family: 'Montserrat', sans-serif;\n}\n",
            ]))
        ),
        y = t(28),
        E = t(40),
        k = t.n(E),
        I = t(60),
        C = t(41),
        S = t.n(C),
        R = "https://api.rawg.io/api/",
        D = "96e84ecacf1f477b8a087dc1889e6766",
        U = new Date().getFullYear(),
        N = (function () {
          var e = new Date().getMonth() + 1;
          return e < 10 ? "0".concat(e) : e;
        })(),
        G = (function () {
          var e = new Date().getDate();
          return e < 10 ? "0".concat(e) : e;
        })(),
        B = "".concat(U, "-").concat(N, "-").concat(G),
        z = ""
          .concat(U - 1, "-")
          .concat(N, "-")
          .concat(G),
        T = ""
          .concat(U + 1, "-")
          .concat(N, "-")
          .concat(G),
        H = "games?dates="
          .concat(z, ",")
          .concat(U, "&ordering=-rating&page_size=10"),
        L = "games?dates="
          .concat(B, ",")
          .concat(T, "&ordering=-added&page_size=10"),
        _ = "games?dates="
          .concat(z, ",")
          .concat(B, "&ordering=-released&page_size=10"),
        Z = function (e) {
          return "".concat(R, "games/").concat(e, "?key=").concat(D);
        },
        V = function (e) {
          return ""
            .concat(R, "games/")
            .concat(e, "/screenshots?key=")
            .concat(D);
        },
        X = function (e) {
          return ""
            .concat(R, "games?search=")
            .concat(e, "&page_size=9&key=")
            .concat(D);
        },
        J = t(141),
        M = t(142),
        F = t(140),
        P = {
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { duration: 0.75 } },
          exit: { opacity: 0, transition: { duration: 0.75 } },
        },
        W = {
          hidden: { opacity: 0, scale: 0.5 },
          show: { scale: 1, opacity: 1, transition: { duration: 0.75 } },
          exit: { opacity: 0, transition: { duration: 0.75 } },
        },
        Q = t(44),
        Y = function (e, n) {
          return e.match(/media\/screenshots/)
            ? e.replace(
                "media/screenshots",
                "media/resize/".concat(n, "/-/screenshots")
              )
            : e.replace(
                "/media/games/",
                "/media/resize/".concat(n, "/-/games/")
              );
        },
        K = t(2),
        q = Object(w.b)(F.a.div)(
          c ||
            (c = Object(x.a)([
              "\n  min-height: 30vh;\n  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  border-radius: 1rem;\n  overflow: hidden;\n  img {\n    width: 100%;\n    height: 40vh;\n    object-fit: cover;\n  }\n  cursor: pointer;\n",
            ]))
        ),
        $ = function (e) {
          var n = e.name,
            t = e.released,
            a = e.id,
            c = e.image,
            r = "" + a,
            i = Object(y.b)();
          return Object(K.jsx)(q, {
            variants: W,
            initial: "hidden",
            animate: "show",
            layoutId: r,
            onClick: function () {
              (document.body.style.overflow = "hidden"),
                i(
                  (function (e) {
                    return (function () {
                      var n = Object(I.a)(
                        k.a.mark(function n(t) {
                          var a, c;
                          return k.a.wrap(function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  return (
                                    t({ type: "LOADING" }),
                                    (n.next = 3),
                                    S.a.get(Z(e))
                                  );
                                case 3:
                                  return (
                                    (a = n.sent), (n.next = 6), S.a.get(V(e))
                                  );
                                case 6:
                                  (c = n.sent),
                                    t({
                                      type: "GET_DETAIL",
                                      payload: { game: a.data, screen: c.data },
                                    });
                                case 8:
                                case "end":
                                  return n.stop();
                              }
                          }, n);
                        })
                      );
                      return function (e) {
                        return n.apply(this, arguments);
                      };
                    })();
                  })(a)
                ),
                console.log("id:", r);
            },
            children: Object(K.jsxs)(Q.b, {
              to: "game/".concat(a),
              children: [
                Object(K.jsx)(F.a.h3, {
                  layoutId: "title ".concat(r),
                  children: n,
                }),
                Object(K.jsx)("p", { children: t }),
                Object(K.jsx)(F.a.img, {
                  layoutId: "image ".concat(r),
                  src: Y(null !== c && void 0 !== c ? c : "", 640),
                  alt: n,
                }),
              ],
            }),
          });
        },
        ee = t.p + "/ignite-build/static/media/xbox.3e7db735.svg",
        ne = t.p + "/ignite-build/static/media/apple.5757c37e.svg",
        te = t.p + "/ignite-build/static/media/gamepad.c9269ef5.svg",
        ae = t.p + "/ignite-build/static/media/nintendo.f579be04.svg",
        ce = t.p + "/ignite-build/static/media/playstation.18cc4b9c.svg",
        re = t.p + "/ignite-build/static/media/steam.d7b8819f.svg",
        ie = Object(w.b)(F.a.div)(
          r ||
            (r = Object(x.a)([
              "\n  width: 100%;\n  min-height: 100vh;\n  overflow-y: scroll;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  &::-webkit-scrollbar {\n    width: 0.5rem;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: #ff7171;\n  }\n\n  &::-webkit-scrollbar-track {\n    background: white;\n  }\n",
            ]))
        ),
        se = Object(w.b)(F.a.div)(
          i ||
            (i = Object(x.a)([
              "\n  width: 80%;\n  border-radius: 1rem;\n  padding: 2rem 5rem;\n  background: white;\n  color: black;\n  position: absolute;\n  left: 10%;\n  z-index: 10;\n\n  img {\n    width: 100%;\n  }\n",
            ]))
        ),
        oe = Object(w.b)(F.a.div)(
          s ||
            (s = Object(x.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  img {\n    width: 2rem;\n    height: 2rem;\n    display: inline;\n  }\n",
            ]))
        ),
        de = Object(w.b)(F.a.div)(
          o || (o = Object(x.a)(["\n  text-align: center;\n"]))
        ),
        be = Object(w.b)(F.a.div)(
          d ||
            (d = Object(x.a)([
              "\n  display: flex;\n  justify-content: space-evenly;\n  img {\n    margin-left: 3rem;\n  }\n",
            ]))
        ),
        le = Object(w.b)(F.a.div)(
          b ||
            (b = Object(x.a)([
              "\n  margin-top: 5rem;\n\n  img {\n    width: 100%;\n    /* height: 60vh;\n    object-fit: cover; */\n  }\n",
            ]))
        ),
        me = Object(w.b)(F.a.div)(
          l || (l = Object(x.a)(["\n  margin: 5rem 0rem;\n"]))
        ),
        je = function (e) {
          var n = e.pathId,
            t = Object(f.e)(),
            a = function (e) {
              switch (e) {
                case "PlayStation 4":
                  return ce;
                case "IOS":
                  return ne;
                case "Xbox One":
                  return ee;
                case "PC":
                  return re;
                case "Nintendo Switch":
                  return ae;
                default:
                  return te;
              }
            },
            c = Object(y.c)(function (e) {
              return e.detail;
            }),
            r = c.game,
            i = c.screen,
            s = c.isLoading;
          Object(y.c)(function (e) {
            return e.detail;
          });
          return Object(K.jsx)(K.Fragment, {
            children:
              !s &&
              Object(K.jsx)(ie, {
                className: "shadow",
                onClick: function (e) {
                  e.target.classList.contains("shadow") &&
                    ((document.body.style.overflow = "auto"), t.push("/"));
                },
                children: Object(K.jsxs)(se, {
                  layoutId: n,
                  children: [
                    Object(K.jsxs)(oe, {
                      children: [
                        Object(K.jsxs)("div", {
                          className: "rating",
                          children: [
                            Object(K.jsx)(F.a.h3, {
                              layoutId: "title ".concat(n),
                              children: r.name,
                            }),
                            Object(K.jsxs)("p", {
                              children: ["Rating: ", r.rating],
                            }),
                            (function () {
                              for (
                                var e = [], n = 0 | r.rating, t = 1;
                                t <= 5;
                                t++
                              )
                                t <= n
                                  ? e.push(
                                      Object(K.jsx)(
                                        "img",
                                        {
                                          alt: "star_".concat(t),
                                          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZbbbcIwFIZ/o4pnNqiZAEbICO0EpRM0ErcHHkgfIaCGDWCStiN0A0bgmUDc4yQkAYziEyWfZCW2bH858RWogHLdDpi0wESNxwO02x9gwhZBiDmUcsGEJYqjASTJOmoyeeO05UWko8nxwMBalEWTIzlR2Ud0Hc0F67GyEhmiudBXw6EDC0RZBTWdSppl3w9EVEH9IAxfRRAcUCZKO+uj1eoginp6VsX5pHPbxalF+ywJoZ9/+l0sFnuhRqM5CTw0SRR5SURNyrRktfrMxqgRWSrRr1eToVZZQXInqk12IzGKUplLsi9U4XweiPV6d1tsXLD0NQE9AvAJTJKHohQJLnr9PaBeUbLI2aI++CIJjog2Ub5Eow/E2ezZWkQNJMzs6asdSu9I9rR7wtAxFT/BTO8mf6DOPeH7mzT/S2kbHx/JOSULdfXfsJve1NjJBLT4cDx2C5K8mu9vxXLZjevkEUpTl+aIokgPrIfTaVN2zsRC2gXorrdLr2EvsKXKBbHQVprK/wF34p3gYzo6rAAAAABJRU5ErkJggg==",
                                        },
                                        t
                                      )
                                    )
                                  : e.push(
                                      Object(K.jsx)(
                                        "img",
                                        {
                                          alt: "star_".concat(t),
                                          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgBtZZLbsIwEIYnD7HODWpOAEIsukJZdtkbNEWAkFi0NwCW3ZUdAkTDEXoEdtmA1BvkCHQXiVdnaFK5wQFPRH7Jsj3E83lsjzFADnme5wBTJjDVbrc927ZfgCk2yDCMPpZXYIoFomiOx6PAptPpdJ44Y1kgikbqDoAhbZAUzUnU5kSlDUpFk8C090oLlI5GUrXVarmgIevaB91uV2D1gSUrd0Sj0fgMgiC65MdInG232yrO2sEcqVBNsyUnFwBpbbCEODY0TfNUY/lCf+F4PA4N3NA+GgZQoMi/tVqtlvV6nfouFCCCzGaz4WmPioIlEGr/HYZbw2TIP9AtYWnIGSiB1Wq1b0zQB8ghHOdNp9NR2q7Mo/V6HWBkdKzvgQd5n0wmb6rfLt0MApiK8w9YoIwr5xqoygbB783AEi6dAA4IL1E2JJbT6/XutEGHw0GAWiEWd7/fP8ftM0VR5KrstsqIS1CR+7j2G7QNpGO7xOI3m03Psiz6nxLJt9in1VikfZoZIDcBUPLtdruyKjfm87mP9jJNAuIIs1ZDGVEMIcDI9/0NXBHmzhDfeotSqUTPsEfQVZ4HojRWqOw/3aTMvdEfx5AAAAAASUVORK5CYII=",
                                        },
                                        t
                                      )
                                    );
                              return e;
                            })(),
                          ],
                        }),
                        Object(K.jsxs)(de, {
                          children: [
                            Object(K.jsx)("h3", { children: "Platforms" }),
                            Object(K.jsx)(be, {
                              children: r.platforms.map(function (e) {
                                return Object(K.jsx)(
                                  "img",
                                  {
                                    alt: e.platform.name,
                                    src: a(e.platform.name),
                                  },
                                  e.platform.id
                                );
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(K.jsx)(le, {
                      children: Object(K.jsx)(F.a.img, {
                        layoutId: "image ".concat(n),
                        src: Y(r.background_image, 1280),
                        alt: "image",
                      }),
                    }),
                    Object(K.jsx)(me, {
                      children: Object(K.jsx)("p", {
                        children: r.description_raw,
                      }),
                    }),
                    Object(K.jsx)("div", {
                      className: "gallery",
                      children: i.results.map(function (e) {
                        return Object(K.jsx)(
                          "img",
                          { src: Y(e.image, 1280), alt: "game" },
                          e.id
                        );
                      }),
                    }),
                  ],
                }),
              }),
          });
        },
        ge = Object(w.b)(F.a.div)(
          m ||
            (m = Object(x.a)([
              "\n  padding: 0rem 5rem;\n  h2 {\n    padding: 5rem 0rem;\n  }\n",
            ]))
        ),
        ue = Object(w.b)(F.a.div)(
          j ||
            (j = Object(x.a)([
              "\n  min-height: 80vh;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n  grid-column-gap: 3rem;\n  grid-row-gap: 5rem;\n",
            ]))
        ),
        pe = function () {
          var e = Object(f.f)().pathname.split("/")[2],
            n = Object(y.b)();
          Object(p.useEffect)(
            function () {
              n(
                (function () {
                  var e = Object(I.a)(
                    k.a.mark(function e(n) {
                      var t, a, c;
                      return k.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                S.a.get(
                                  "".concat(R).concat(H, "&key=").concat(D)
                                )
                              );
                            case 2:
                              return (
                                (t = e.sent),
                                (e.next = 5),
                                S.a.get(
                                  "".concat(R).concat(L, "&key=").concat(D)
                                )
                              );
                            case 5:
                              return (
                                (a = e.sent),
                                (e.next = 8),
                                S.a.get(
                                  "".concat(R).concat(_, "&key=").concat(D)
                                )
                              );
                            case 8:
                              (c = e.sent),
                                n({
                                  type: "FETCH_GAMES",
                                  payload: {
                                    popular: t.data.results,
                                    upcoming: a.data.results,
                                    newGames: c.data.results,
                                  },
                                });
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (n) {
                    return e.apply(this, arguments);
                  };
                })()
              );
            },
            [n]
          );
          var t = Object(y.c)(function (e) {
              return e.games;
            }),
            a = t.popular,
            c = t.newGames,
            r = t.upcoming,
            i = t.searched;
          return Object(K.jsx)(ge, {
            variants: P,
            initial: "hidden",
            animate: "show",
            children: Object(K.jsxs)(J.a, {
              type: "crossfade",
              children: [
                Object(K.jsx)(M.a, {
                  children: e && Object(K.jsx)(je, { pathId: e }),
                }),
                i.length
                  ? Object(K.jsxs)("div", {
                      className: "searched",
                      children: [
                        Object(K.jsx)("h2", { children: "Seached Games" }),
                        Object(K.jsx)(ue, {
                          children: i.map(function (e) {
                            return Object(K.jsx)(
                              $,
                              {
                                name: e.name,
                                id: e.id,
                                released: e.released,
                                image: e.background_image,
                              },
                              e.id
                            );
                          }),
                        }),
                      ],
                    })
                  : "",
                Object(K.jsx)("h2", { children: "Upcoming Games" }),
                Object(K.jsx)(ue, {
                  children: r.map(function (e) {
                    return Object(K.jsx)(
                      $,
                      {
                        name: e.name,
                        id: e.id,
                        released: e.released,
                        image: e.background_image,
                      },
                      e.id
                    );
                  }),
                }),
                Object(K.jsx)("h2", { children: "Popular Games" }),
                Object(K.jsx)(ue, {
                  children: a.map(function (e) {
                    return Object(K.jsx)(
                      $,
                      {
                        name: e.name,
                        id: e.id,
                        released: e.released,
                        image: e.background_image,
                      },
                      e.id
                    );
                  }),
                }),
                Object(K.jsx)("h2", { children: "New Games" }),
                Object(K.jsx)(ue, {
                  children: c.map(function (e) {
                    return Object(K.jsx)(
                      $,
                      {
                        name: e.name,
                        id: e.id,
                        released: e.released,
                        image: e.background_image,
                      },
                      e.id
                    );
                  }),
                }),
              ],
            }),
          });
        },
        he = t(103),
        Oe = t.p + "./static/media/logo.9b6b8655.svg",
        Ae = Object(w.b)(F.a.nav)(
          g ||
            (g = Object(x.a)([
              "\n  padding: 2rem 5rem;\n  text-align: center;\n  input {\n    width: 30%;\n    padding: 0.5rem;\n    font-size: 1.5rem;\n    margin-top: 1rem;\n    border: none;\n    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);\n  }\n  button {\n    font-size: 1.5rem;\n    cursor: pointer;\n    padding: 0.5rem 2rem;\n    border: none;\n    color: white;\n    background: #ff6767;\n  }\n",
            ]))
        ),
        fe = Object(w.b)(F.a.div)(
          u ||
            (u = Object(x.a)([
              "\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  img {\n    width: 2rem;\n    height: 2rem;\n  }\n  cursor: pointer;\n",
            ]))
        ),
        xe = function () {
          var e = Object(y.b)(),
            n = Object(p.useState)(""),
            t = Object(he.a)(n, 2),
            a = t[0],
            c = t[1];
          return Object(K.jsxs)(Ae, {
            variants: P,
            initial: "hidden",
            animate: "show",
            children: [
              Object(K.jsxs)(fe, {
                onClick: function () {
                  e({ type: "CLEAR_SEARCHED" });
                },
                children: [
                  Object(K.jsx)("img", { src: Oe, alt: "logo" }),
                  Object(K.jsx)("h1", { children: "Ignite" }),
                ],
              }),
              Object(K.jsxs)("form", {
                onSubmit: function (n) {
                  var t;
                  n.preventDefault(),
                    e(
                      ((t = a),
                      (function () {
                        var e = Object(I.a)(
                          k.a.mark(function e(n) {
                            var a;
                            return k.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (e.next = 2), S.a.get(X(t));
                                  case 2:
                                    (a = e.sent),
                                      n({
                                        type: "FETCH_SEARCHED",
                                        payload: { searched: a.data.results },
                                      });
                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function (n) {
                          return e.apply(this, arguments);
                        };
                      })())
                    ),
                    c("");
                },
                className: "search",
                children: [
                  Object(K.jsx)("input", {
                    value: a,
                    onChange: function (e) {
                      c(e.target.value);
                    },
                    type: "text",
                  }),
                  Object(K.jsx)("button", {
                    type: "submit",
                    children: "Search",
                  }),
                ],
              }),
            ],
          });
        },
        we = function () {
          return Object(K.jsxs)("div", {
            className: "App",
            children: [
              Object(K.jsx)(v, {}),
              Object(K.jsx)(xe, {}),
              Object(K.jsx)(f.a, {
                path: ["game/:id", "/"],
                children: Object(K.jsx)(pe, {}),
              }),
            ],
          });
        },
        ve = t(59),
        ye = t(14),
        Ee = { popular: [], newGames: [], upcoming: [], searched: [] },
        ke = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Ee,
            n = arguments.length > 1 ? arguments[1] : void 0;
          switch (n.type) {
            case "FETCH_GAMES":
              return Object(ye.a)(
                Object(ye.a)({}, e),
                {},
                {
                  popular: n.payload.popular,
                  newGames: n.payload.newGames,
                  upcoming: n.payload.upcoming,
                }
              );
            case "FETCH_SEARCHED":
              return Object(ye.a)(
                Object(ye.a)({}, e),
                {},
                { searched: n.payload.searched }
              );
            case "CLEAR_SEARCHED":
              return Object(ye.a)(Object(ye.a)({}, e), {}, { searched: [] });
            default:
              return Object(ye.a)({}, e);
          }
        },
        Ie = {
          game: { platforms: [] },
          screen: { results: [] },
          isLoading: !0,
        },
        Ce = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Ie,
            n = arguments.length > 1 ? arguments[1] : void 0;
          switch (n.type) {
            case "GET_DETAIL":
              return Object(ye.a)(
                Object(ye.a)({}, e),
                {},
                {
                  game: n.payload.game,
                  screen: n.payload.screen,
                  isLoading: !1,
                }
              );
            case "LOADING":
              return Object(ye.a)(Object(ye.a)({}, e), {}, { isLoading: !0 });
            default:
              return Object(ye.a)({}, e);
          }
        },
        Se = Object(ve.b)({ games: ke, detail: Ce }),
        Re = t(102),
        De = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || ve.c,
        Ue = Object(ve.d)(Se, De(Object(ve.a)(Re.a)));
      A.a.render(
        Object(K.jsx)(h.a.StrictMode, {
          children: Object(K.jsx)(Q.a, {
            children: Object(K.jsx)(y.a, {
              store: Ue,
              children: Object(K.jsx)(we, {}),
            }),
          }),
        }),
        document.getElementById("root")
      );
    },
  },
  [[139, 1, 2]],
]);
//# sourceMappingURL=main.2f59cab3.chunk.js.map
