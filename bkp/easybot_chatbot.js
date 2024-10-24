!(function () {
    var t = {
        99: function (t, e, o) {
          'use strict'
          Object.defineProperty(e, '__esModule', { value: true })
          Object.defineProperty(e, 'createChatButton', {
            enumerable: true,
            get: function () {
              return n
            },
          })
          var i = o('378')
          function n(t) {
            let e = document.createElement('div'),
              o = e.style
            o.display = 'block'
            o.position = 'fixed'
            let n = t.getAttribute('data-widget-icon'),
              r = t.getAttribute('data-btn-position'),
              d = t.getAttribute('data-widget-btn-color') || '#6366f1'
            'bottom-left' === r
              ? ((o.bottom = '20px'), (o.left = '20px'))
              : 'bottom-right' === r
              ? ((o.bottom = '20px'), (o.right = '20px'))
              : 'top-left' === r
              ? ((o.top = '20px'), (o.left = '20px'))
              : 'top-right' === r
              ? ((o.top = '20px'), (o.right = '20px'))
              : ((o.bottom = '20px'), (o.right = '20px'))
            o.zIndex = '999999'
            let a = document.createElement('button')
            a.setAttribute('id', 'dialoq-btn')
            a.innerHTML = n
              ? `<img src="${n}" style="width: 30px; height: 30px; margin: 0 auto;" />`
              : i.OPEN_SVG
            a.onclick = function () {
              p.style.display = 'none'
              let t = document.querySelector('#dialoq')
              t
                ? 'none' === t.style.display
                  ? ((t.style.display = 'block'), (a.innerHTML = i.CLOSE_SVG))
                  : ((t.style.display = 'none'),
                    (a.innerHTML = n
                      ? `<img src="${n}" style="width: 40px; height: 40px; margin: 0 auto;" />`
                      : i.OPEN_SVG))
                : console.log('widgetContainer not found')
            }
            let l = a.style
            l.backgroundColor = d
            l.color = 'white'
            l.width = '60px'
            l.height = '60px'
            l.padding = '0px'
            l.lineHeight = '24px'
            l.fontSize = '16px'
            l.borderRadius = '50%'
            l.borderWidth = '0px'
            e.appendChild(a)
            let p = document.createElement('div')
            p.id = 'dialoq-message-bubbles'
            let s = p.style
            s.position = 'fixed'
            s.borderRadius = '10px'
            s.fontFamily = 'sans-serif'
            s.fontSize = '16px'
            s.zIndex = '2147483644'
            s.cursor = 'pointer'
            s.flexDirection = 'column'
            s.gap = '50px'
            s.maxWidth = '70vw'
            s.display = 'block'
            'bottom-left' === r
              ? ((s.bottom = '85px'), (s.left = '20px'))
              : 'bottom-right' === r
              ? ((s.bottom = '85px'), (s.right = '20px'))
              : 'top-left' === r
              ? ((s.top = '85px'), (s.left = '18px'))
              : 'top-right' === r
              ? ((s.top = '85px'), (s.right = '20px'))
              : ((s.bottom = '85px'), (s.right = '20px'))
            let c = document.createElement('div'),
              x = c.style
            x.position = 'absolute'
            x.top = '-7px'
            x.right = '-7px'
            x.fontWeight = 'bold'
            x.display = 'none'
            x.justifyContent = 'center'
            x.alignItems = 'center'
            x.zIndex = '2147483643'
            x.width = '22px'
            x.height = '22px'
            x.borderRadius = '50%'
            x.textAlign = 'center'
            x.fontSize = '12px'
            x.cursor = 'pointer'
            x.backgroundColor = 'rgb(224, 224, 224)'
            x.color = 'black'
            x.boxShadow =
              'rgba(150, 150, 150, 0.15) 0px 6px 24px 0px, rgba(150, 150, 150, 0.15) 0px 0px 0px 1px'
            c.textContent = '\u2715'
            p.appendChild(c)
            window.addEventListener('message', function (t) {
              if ('FIRST_MESSAGE' === t.data.type) {
                let e = document.querySelector('#dialoq-message-bubbles')
                if (e) {
                  let o = document.createElement('div')
                  o.style.display = 'flex'
                  o.style.justifyContent = 'flex-end'
                  let i = document.createElement('div')
                  i.textContent = t.data.message
                  i.style.backgroundColor = 'white'
                  i.style.color = 'black'
                  i.style.boxShadow =
                    'rgba(150, 150, 150, 0.2) 0px 10px 30px 0px, rgba(150, 150, 150, 0.2) 0px 0px 0px 1px'
                  i.style.borderRadius = '10px'
                  i.style.padding = '20px'
                  i.style.margin = '8px'
                  i.style.fontSize = '14px'
                  i.style.opacity = '1'
                  i.style.transform = 'scale(1)'
                  i.style.transition = 'opacity 0.5s, transform 0.5s'
                  o.appendChild(i)
                  e.appendChild(o)
                }
              }
            })
            e.appendChild(p)
            p.addEventListener('mouseenter', function () {
              c.style.display = 'flex'
            })
            p.addEventListener('mouseleave', function () {
              c.style.display = 'none'
            })
            c.addEventListener('click', function (t) {
              t.stopPropagation()
              p.style.display = 'none'
            })
            p.addEventListener('click', function (t) {
              t.stopPropagation()
              p.style.display = 'none'
              let e = document.querySelector('#dialoq')
              e
                ? 'none' === e.style.display
                  ? ((e.style.display = 'block'), (a.innerHTML = i.CLOSE_SVG))
                  : ((e.style.display = 'none'),
                    (a.innerHTML = n
                      ? `<img src="${n}" style="width: 40px; height: 40px; margin: 0 auto;" />`
                      : i.OPEN_SVG))
                : console.log('widgetContainer not found')
            })
            document.body.appendChild(e)
          }
        },
        955: function (t, e, o) {
          'use strict'
          Object.defineProperty(e, '__esModule', { value: true })
          var i = o('99'),
            n = o('378'),
            r = o('117')
          !(function () {
            let t = document.currentScript,
              e = t.getAttribute('data-widget-icon')
            'complete' === document.readyState
              ? ((0, i.createChatButton)(t), (0, r.createChatWidget)(t))
              : document.addEventListener('readystatechange', function () {
                  'complete' === document.readyState &&
                    ((0, i.createChatButton)(t), (0, r.createChatWidget)(t))
                })
            window.addEventListener('message', function (t) {
              if ('db-iframe-close' === t.data) {
                let t = document.querySelector('#dialoq'),
                  o = document.querySelector('#dialoq-btn')
                t && (t.style.display = 'none')
                o &&
                  (o.innerHTML = e
                    ? `<img src="${e}" style="width: 30px; height: 30px; margin: 0 auto;" />`
                    : n.OPEN_SVG)
              }
            })
          })()
        },
        378: function (t, e, o) {
          'use strict'
          Object.defineProperty(e, '__esModule', { value: true })
          !(function (t, e) {
            for (var o in e)
              Object.defineProperty(t, o, {
                enumerable: true,
                get: e[o],
              })
          })(e, {
            OPEN_SVG: function () {
              return i
            },
            CLOSE_SVG: function () {
              return n
            },
          })
          let i = `<svg xmlns="http://www.w3.org/2000/svg" style='margin: 0 auto;display:block' width='40px' height='40px' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="lucide lucide-bot">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
  </svg>
  `,
            n = `<svg xmlns="http://www.w3.org/2000/svg" style='margin: 0 auto;display:block' width='30px' height='30px' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
  `
        },
        117: function (t, e, o) {
          'use strict'
          function i(t) {
            let e = window.matchMedia('(min-width: 768px)'),
              o = document.createElement('div')
            o.setAttribute('id', 'dialoq')
            let i = o.style
            i.boxSizing = 'border-box'
            i.height = '80vh'
            i.maxWidth = '90vw'
            i.maxHeight = '78vh'
            i.position = 'fixed'
            i.display = 'none'
            i.zIndex = '99999999'
            i.opacity = '0'
            i.transition = 'opacity 0.5s ease-in-out'
            let n = t.getAttribute('data-btn-position')
            'bottom-left' === n
              ? ((i.bottom = '80px'), (i.left = '20px'))
              : 'bottom-right' === n
              ? ((i.bottom = '80px'), (i.right = '20px'))
              : 'top-left' === n
              ? ((i.top = '80px'), (i.left = '20px'))
              : 'top-right' === n
              ? ((i.top = '80px'), (i.right = '20px'))
              : ((i.bottom = '80px'), (i.right = '20px'))
            let r = document.createElement('iframe'),
              d = r.style
            d.right = '0'
            d.top = '0'
            d.boxSizing = 'border-box'
            d.position = 'absolute'
            d.width = '100%'
            d.height = '100%'
            d.border = '1px solid #e5e5e5'
            d.margin = '0'
            d.padding = '0'
            d.backgroundColor = 'white'
            d.borderWidth = '1px'
            d.boxShadow =
              'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px'
            d.borderRadius = '8px'
            d.opacity = '0'
            d.transition = 'opacity 0.3s ease-in-out'
            setTimeout(() => {
              i.opacity = '1'
              d.opacity = '1'
            }, 100)
            e.matches
              ? (i.width = '400px')
              : ((i.width = '100%'),
                (i.height = '100%'),
                (d.borderRadius = '0'),
                (d.border = '0'),
                (d.position = 'fixed'),
                (d.top = '0'),
                (d.left = '0'),
                (d.right = '0'),
                (d.bottom = '0'),
                (d.width = '100%'),
                (d.height = '100%'))
            o.appendChild(r)
            let a = `${t.getAttribute('data-chat-url')}?mode=iframe`
            r.src = a
            document.body.appendChild(o)
            e.addEventListener('change', (t) => {
              t.matches
                ? ((i.width = '400px'),
                  (d.position = 'absolute'),
                  (d.right = '0'),
                  (d.top = '0'),
                  (d.width = '100%'),
                  (d.height = '100%'))
                : ((i.width = '100%'),
                  (i.height = '100%'),
                  (d.borderRadius = '0'),
                  (d.border = '0'),
                  (d.position = 'fixed'),
                  (d.top = '0'),
                  (d.left = '0'),
                  (d.right = '0'),
                  (d.bottom = '0'),
                  (d.width = '100%'),
                  (d.height = '100%'))
            })
          }
          Object.defineProperty(e, '__esModule', { value: true })
          Object.defineProperty(e, 'createChatWidget', {
            enumerable: true,
            get: function () {
              return i
            },
          })
        },
      },
      e = {}
    !(function o(i) {
      var n = e[i]
      if (void 0 !== n) {
        return n.exports
      }
      var r = (e[i] = { exports: {} })
      return t[i](r, r.exports, o), r.exports
    })('955')
  })()
  