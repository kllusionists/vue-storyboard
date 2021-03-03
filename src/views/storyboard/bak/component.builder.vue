<script>
import { isNull } from '../../../utils/index'
export default {
  name: 'component-builder',
  props: {
    component: {
      type: Object,
      required: true
    },
    preview: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  render(h) {
    const attrs = {}
    if (this.component.attrs) {
      for (const property in this.component.attrs) {
        if (Object.hasOwnProperty.call(this.component.attrs, property)) {
          const attr = this.component.attrs[property]
          if (typeof attr !== 'boolean' && !!attr) {
            attrs[property] = attr
          }
        }
      }
    }

    const style = {}
    if (this.component.style) {
      const spHandle = ['width', 'height']
      for (const property in this.component.style) {
        if (Object.hasOwnProperty.call(this.component.style, property)) {
          const param = this.component.style[property]
          if (spHandle.includes(property) && !!param) {
            // 使用百分比作为长宽时，暂时还未实现长宽的变化
            style[property] = typeof param === 'string' ? param : `${param}px`
          } else {
            style[property] = param
          }
        }
      }
    }

    let classList = []
    if (isNull(this.component.class) || this.component.class.length <= 0) {
      classList = []
    } else {
      classList = this.component.class
    }

    let eventOn = {}
    if (this.preview) {
      eventOn = {
        click: (event) => {
          console.log(event)
          console.log(1234)
          console.log(this.attrs)
        }
      }
    } else {
      eventOn = {
        click: (event) => {
          event.stopPropagation()
          event.preventDefault()
          this.$store.commit('setChosenComponent', this.component)
        }
      }
    }

    return h(
      this.component.name,
      {
        attrs,
        style,
        class: classList,
        on: eventOn
      },
      this.component.children && this.component.children.length > 0
        ? this.component.children.map((child) => {
          const vnData = {
            attrs: {
              component: child
            }
          }
          if (child.slot) {
            vnData.slot = child.slot
          }
          return h('component-builder', vnData, child.value)
        })
        : this.$slots.default
    )
  }
}
</script>
