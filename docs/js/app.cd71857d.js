;(function (e) {
  function t (t) {
    for (var n, l, u = t[0], s = t[1], i = t[2], c = 0, v = []; c < u.length; c++) { (l = u[c]), Object.prototype.hasOwnProperty.call(o, l) && o[l] && v.push(o[l][0]), (o[l] = 0) }
    for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
    p && p(t)
    while (v.length) v.shift()()
    return a.push.apply(a, i || []), r()
  }
  function r () {
    for (var e, t = 0; t < a.length; t++) {
      for (var r = a[t], n = !0, l = 1; l < r.length; l++) {
        var s = r[l]
        o[s] !== 0 && (n = !1)
      }
      n && (a.splice(t--, 1), (e = u((u.s = r[0]))))
    }
    return e
  }
  var n = {}
  var o = { app: 0 }
  var a = []
  function l (e) {
    return u.p + 'js/' + ({ about: 'about' }[e] || e) + '.' + { about: 'bd78171b' }[e] + '.js'
  }
  function u (t) {
    if (n[t]) return n[t].exports
    var r = (n[t] = { i: t, l: !1, exports: {} })
    return e[t].call(r.exports, r, r.exports, u), (r.l = !0), r.exports
  }
  ;(u.e = function (e) {
    var t = []
    var r = o[e]
    if (r !== 0) {
      if (r) t.push(r[2])
      else {
        var n = new Promise(function (t, n) {
          r = o[e] = [t, n]
        })
        t.push((r[2] = n))
        var a
        var s = document.createElement('script')
        ;(s.charset = 'utf-8'),
        (s.timeout = 120),
        u.nc && s.setAttribute('nonce', u.nc),
        (s.src = l(e))
        var i = new Error()
        a = function (t) {
          ;(s.onerror = s.onload = null), clearTimeout(c)
          var r = o[e]
          if (r !== 0) {
            if (r) {
              var n = t && (t.type === 'load' ? 'missing' : t.type)
              var a = t && t.target && t.target.src
              ;(i.message = 'Loading chunk ' + e + ' failed.\n(' + n + ': ' + a + ')'),
              (i.name = 'ChunkLoadError'),
              (i.type = n),
              (i.request = a),
              r[1](i)
            }
            o[e] = void 0
          }
        }
        var c = setTimeout(function () {
          a({ type: 'timeout', target: s })
        }, 12e4)
        ;(s.onerror = s.onload = a), document.head.appendChild(s)
      }
    }
    return Promise.all(t)
  }),
  (u.m = e),
  (u.c = n),
  (u.d = function (e, t, r) {
    u.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
  }),
  (u.r = function (e) {
    typeof Symbol !== 'undefined' &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
    Object.defineProperty(e, '__esModule', { value: !0 })
  }),
  (u.t = function (e, t) {
    if ((1 & t && (e = u(e)), 8 & t)) return e
    if (4 & t && typeof e === 'object' && e && e.__esModule) return e
    var r = Object.create(null)
    if (
      (u.r(r),
      Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
      2 & t && typeof e !== 'string')
    ) {
      for (var n in e) {
        u.d(
          r,
          n,
          function (t) {
            return e[t]
          }.bind(null, n)
        )
      }
    }
    return r
  }),
  (u.n = function (e) {
    var t =
        e && e.__esModule
          ? function () {
            return e.default
          }
          : function () {
            return e
          }
    return u.d(t, 'a', t), t
  }),
  (u.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }),
  (u.p = '/vue-storyboard/'),
  (u.oe = function (e) {
    throw (console.error(e), e)
  })
  var s = (window.webpackJsonp = window.webpackJsonp || [])
  var i = s.push.bind(s)
  ;(s.push = t), (s = s.slice())
  for (var c = 0; c < s.length; c++) t(s[c])
  var p = i
  a.push([0, 'chunk-vendors']), r()
})({
  0: function (e, t, r) {
    e.exports = r('56d7')
  },
  '0851': function (e, t, r) {
    'use strict'
    r('f185')
  },
  '56d7': function (e, t, r) {
    'use strict'
    r.r(t)
    r('e260'), r('e6cf'), r('cca6'), r('a79d')
    var n = r('2b0e')
    var o = function () {
      var e = this
      var t = e.$createElement
      var r = e._self._c || t
      return r(
        'div',
        { attrs: { id: 'app' } },
        [
          r(
            'div',
            { attrs: { id: 'nav' } },
            [
              r('router-link', { attrs: { to: '/' } }, [e._v('Home')]),
              e._v(' | '),
              r('router-link', { attrs: { to: '/about' } }, [e._v('About')])
            ],
            1
          ),
          r('router-view')
        ],
        1
      )
    }
    var a = []
    var l = (r('5c0b'), r('0c7c'))
    var u = {}
    var s = Object(l.a)(u, o, a, !1, null, null, null)
    var i = s.exports
    var c = (r('d3b7'), r('3ca3'), r('ddb0'), r('8c4f'))
    var p = function () {
      var e = this
      var t = e.$createElement
      var n = e._self._c || t
      return n(
        'div',
        { staticClass: 'home' },
        [
          n('img', { attrs: { alt: 'Vue logo', src: r('cf05') } }),
          n('HelloWorld', { attrs: { msg: 'Welcome to Your Vue.js App' } })
        ],
        1
      )
    }
    var v = []
    var f = function () {
      var e = this
      var t = e.$createElement
      var r = e._self._c || t
      return r('div', { staticClass: 'hello' }, [
        r('h1', [e._v(e._s(e.msg))]),
        e._m(0),
        r('h3', [e._v('Installed CLI Plugins')]),
        e._m(1),
        r('h3', [e._v('Essential Links')]),
        e._m(2),
        r('h3', [e._v('Ecosystem')]),
        e._m(3)
      ])
    }
    var h = [
      function () {
        var e = this
        var t = e.$createElement
        var r = e._self._c || t
        return r('p', [
          e._v(' For a guide and recipes on how to configure / customize this project,'),
          r('br'),
          e._v(' check out the '),
          r('a', { attrs: { href: 'https://cli.vuejs.org', target: '_blank', rel: 'noopener' } }, [
            e._v('vue-cli documentation')
          ]),
          e._v('. ')
        ])
      },
      function () {
        var e = this
        var t = e.$createElement
        var r = e._self._c || t
        return r('ul', [
          r('li', [
            r(
              'a',
              {
                attrs: {
                  href:
                    'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                  target: '_blank',
                  rel: 'noopener'
                }
              },
              [e._v('babel')]
            )
          ]),
          r('li', [
            r(
              'a',
              {
                attrs: {
                  href:
                    'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router',
                  target: '_blank',
                  rel: 'noopener'
                }
              },
              [e._v('router')]
            )
          ]),
          r('li', [
            r(
              'a',
              {
                attrs: {
                  href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex',
                  target: '_blank',
                  rel: 'noopener'
                }
              },
              [e._v('vuex')]
            )
          ]),
          r('li', [
            r(
              'a',
              {
                attrs: {
                  href:
                    'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint',
                  target: '_blank',
                  rel: 'noopener'
                }
              },
              [e._v('eslint')]
            )
          ]),
          r('li', [
            r(
              'a',
              {
                attrs: {
                  href:
                    'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest',
                  target: '_blank',
                  rel: 'noopener'
                }
              },
              [e._v('unit-jest')]
            )
          ])
        ])
      },
      function () {
        var e = this
        var t = e.$createElement
        var r = e._self._c || t
        return r('ul', [
          r('li', [
            r('a', { attrs: { href: 'https://vuejs.org', target: '_blank', rel: 'noopener' } }, [
              e._v('Core Docs')
            ])
          ]),
          r('li', [
            r(
              'a',
              { attrs: { href: 'https://forum.vuejs.org', target: '_blank', rel: 'noopener' } },
              [e._v('Forum')]
            )
          ]),
          r('li', [
            r(
              'a',
              { attrs: { href: 'https://chat.vuejs.org', target: '_blank', rel: 'noopener' } },
              [e._v('Community Chat')]
            )
          ]),
          r('li', [
            r(
              'a',
              { attrs: { href: 'https://twitter.com/vuejs', target: '_blank', rel: 'noopener' } },
              [e._v('Twitter')]
            )
          ]),
          r('li', [
            r(
              'a',
              { attrs: { href: 'https://news.vuejs.org', target: '_blank', rel: 'noopener' } },
              [e._v('News')]
            )
          ])
        ])
      },
      function () {
        var e = this
        var t = e.$createElement
        var r = e._self._c || t
        return r('ul', [
          r('li', [
            r(
              'a',
              { attrs: { href: 'https://router.vuejs.org', target: '_blank', rel: 'noopener' } },
              [e._v('vue-router')]
            )
          ]),
          r('li', [
            r(
              'a',
              { attrs: { href: 'https://vuex.vuejs.org', target: '_blank', rel: 'noopener' } },
              [e._v('vuex')]
            )
          ]),
          r('li', [
            r(
              'a',
              {
                attrs: {
                  href: 'https://github.com/vuejs/vue-devtools#vue-devtools',
                  target: '_blank',
                  rel: 'noopener'
                }
              },
              [e._v('vue-devtools')]
            )
          ]),
          r('li', [
            r(
              'a',
              {
                attrs: { href: 'https://vue-loader.vuejs.org', target: '_blank', rel: 'noopener' }
              },
              [e._v('vue-loader')]
            )
          ]),
          r('li', [
            r(
              'a',
              {
                attrs: {
                  href: 'https://github.com/vuejs/awesome-vue',
                  target: '_blank',
                  rel: 'noopener'
                }
              },
              [e._v('awesome-vue')]
            )
          ])
        ])
      }
    ]
    var d = { name: 'HelloWorld', props: { msg: String } }
    var g = d
    var b = (r('0851'), Object(l.a)(g, f, h, !1, null, '03398d37', null))
    var m = b.exports
    var _ = { name: 'Home', components: { HelloWorld: m } }
    var j = _
    var k = Object(l.a)(j, p, v, !1, null, null, null)
    var y = k.exports
    n.a.use(c.a)
    var w = [
      { path: '/', name: 'Home', component: y },
      {
        path: '/about',
        name: 'About',
        component: function () {
          return r.e('about').then(r.bind(null, 'f820'))
        }
      }
    ]
    var x = new c.a({ mode: 'history', base: '/vue-storyboard/', routes: w })
    var O = x
    var E = r('2f62')
    n.a.use(E.a)
    var P = new E.a.Store({ state: {}, mutations: {}, actions: {}, modules: {} })
    ;(n.a.config.productionTip = !1),
    new n.a({
      router: O,
      store: P,
      render: function (e) {
        return e(i)
      }
    }).$mount('#app')
  },
  '5c0b': function (e, t, r) {
    'use strict'
    r('8f8f')
  },
  '83a3': function (e, t, r) {
    var n = r('24fb')
    ;(t = n(!1)),
    t.push([
      e.i,
      'h3[data-v-03398d37]{margin:40px 0 0}ul[data-v-03398d37]{list-style-type:none;padding:0}li[data-v-03398d37]{display:inline-block;margin:0 10px}a[data-v-03398d37]{color:#42b983}',
      ''
    ]),
    (e.exports = t)
  },
  8740: function (e, t, r) {
    var n = r('24fb')
    ;(t = n(!1)),
    t.push([
      e.i,
      '#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50}#nav{padding:30px}#nav a{font-weight:700;color:#2c3e50}#nav a.router-link-exact-active{color:#42b983}',
      ''
    ]),
    (e.exports = t)
  },
  '8f8f': function (e, t, r) {
    var n = r('8740')
    typeof n === 'string' && (n = [[e.i, n, '']]), n.locals && (e.exports = n.locals)
    var o = r('499e').default
    o('59751f50', n, !0, { sourceMap: !1, shadowMode: !1 })
  },
  cf05: function (e, t, r) {
    e.exports = r.p + 'img/logo.82b9c7a5.png'
  },
  f185: function (e, t, r) {
    var n = r('83a3')
    typeof n === 'string' && (n = [[e.i, n, '']]), n.locals && (e.exports = n.locals)
    var o = r('499e').default
    o('495240b0', n, !0, { sourceMap: !1, shadowMode: !1 })
  }
})
