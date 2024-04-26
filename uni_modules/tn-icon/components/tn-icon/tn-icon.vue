<template>
  <view
    class="tn-icon"
    :class="[iconClass]"
    :style="[iconStyle]"
  >
    <view
      v-if="isImg"
      class="tn-icon__image">
      <image
        class="image"
        :src="icon"
        :mode="imgMode"
      />
    </view>
    <text
      v-else
      class="tn-icon__icon"
      :class="[`tn-icon-${icon}`]"
    ></text>
  </view>
</template>

<script>
  export default {
	name:"tn-icon",
    props: {
      /** 图标名称，可以传入图片地址(支持jpg、jpeg、png, gif) */
      icon: {
        type: String,
        required: true
      },
      /** 图标大小，如果是图片类型的图片则定义宽高(内置sm、lg、xl) */
      size: {
        type: [String, Number],
        default: ''
      },
	  /** 图标颜色 */
	  color: {
	    type: String,
	    default: ''
	  },
      /** 是否加粗图标 */
      bold: {
        type: Boolean,
        default: false
      },
      /** 图片模式mode，当图片为图片时生效 */
      imgMode: {
        type: String,
        default: 'scaleToFill'
      },
      /** 垂直方向的偏移量，单位rpx */
      top: {
        type: [String, Number],
        default: 0
      },
      /** 公共class名称 */
      className: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        
      }
    },
    computed: {
      /** 判断是否为图片 */
      isImg() {
        return this.icon.indexOf('/') !== -1
      },
      /** 图标类值 */
      iconClass() {
        let clazz = []
        if (this.isImg) {
          clazz.push('tn-icon--image')
        }
        if (!!this.size && this.isDefaultSize) {
          clazz.push(`tn-icon--${this.size}`)
        }
        if (this.bold) {
          clazz.push('bold')
        }
        if (!!this.className) {
          clazz.push(this.className)
        }
        return clazz.join(' ')
      },
      /** 图标对应的样式 */
      iconStyle() {
        let style = {}
        if (!this.isDefaultSize) {
          const size = this._handleValueWithUnit(this.size)
          if (this.isImg) {
            style.width = size
            style.height = size
          } else {
            style.fontSize = size
			style.color = this.color
          }
        }
        if (!!this.top) {
          style.top = this._handleValueWithUnit(this.top)
        }
		
        return style
      },
      /** 判断size是否为sm、lg、xl的值 */
      isDefaultSize() {
        return ['sm', 'lg', 'xl'].includes(this.size)
      }
    },
    methods: {
      
      
      // 自动判断并处理单位
      _handleValueWithUnit(value, unit = 'rpx', returnEmpty = true) {
        if (!value) return returnEmpty ? '' : '0px'
        if (typeof value === 'string' && /(%|px|rpx|auto)$/.test(value)) return value
        return value + unit
      }
      
    }
  }
</script>

<style lang="scss" scoped>
  .tn-icon {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 28rpx;
    border-radius: inherit;
    
    &.bold {
      font-weight: bold;
    }
  
    &--image {
      width: 38rpx;
      height: 38rpx;
    }
  
    &__image {
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      .image {
        width: 100%;
        height: 100%;
        will-change: transform;
        border-radius: inherit;
      }
    }
  
    /* 内置尺寸 start */
    &--sm {
      font-size: 24rpx;
      &.tn-icon--image {
        width: 30rpx;
        height: 30rpx;
      }
    }
    &--lg {
      font-size: 34rpx;
      &.tn-icon--image {
        width: 42rpx;
        height: 42rpx;
      }
    }
    &--xl {
      font-size: 40rpx;
      &.tn-icon--image {
        width: 48rpx;
        height: 48rpx;
      }
    }
    /* 内置尺寸 end */
  }
</style>

<style>
@import '../../iconfont.css';

</style>
