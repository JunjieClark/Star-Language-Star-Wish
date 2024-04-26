# 使用说明

使用方法：

```
<template>
	<view class="content">
		<view class="icon">
		  <view class="title">
		    基础使用:
		  </view>
      <view class="data">
        <tn-icon icon="logo-tuniao"></tn-icon>
      </view>
		</view>
    <view class="icon">
      <view class="title">
        加粗使用:
      </view>
      <view class="data">
        <tn-icon icon="logo-tuniao" bold></tn-icon>
      </view>
    </view>
    <view class="icon">
      <view class="title">
        使用公共类:
      </view>
      <view class="data">
        <tn-icon icon="logo-tuniao" class-name="tuniao-color"></tn-icon>
      </view>
    </view>
    <view class="icon">
      <view class="title">
        显示图片:
      </view>
      <view class="data">
        <tn-icon icon="/static/logo108.png"></tn-icon>
      </view>
    </view>
    <view class="icon">
      <view class="title">
        默认尺寸:
      </view>
      <view class="data">
        <tn-icon icon="logo-tuniao" size="sm"></tn-icon>
        <tn-icon icon="logo-tuniao"></tn-icon>
        <tn-icon icon="logo-tuniao" size="lg"></tn-icon>
        <tn-icon icon="logo-tuniao" size="xl"></tn-icon>
        <tn-icon icon="logo-tuniao" size="80"></tn-icon>
      </view>
    </view>
    <view class="icon">
      <view class="title">
        默认尺寸:
      </view>
      <view class="data">
        <tn-icon icon="/static/logo108.png" size="sm"></tn-icon>
        <tn-icon icon="/static/logo108.png"></tn-icon>
        <tn-icon icon="/static/logo108.png" size="lg"></tn-icon>
        <tn-icon icon="/static/logo108.png" size="xl"></tn-icon>
        <tn-icon icon="/static/logo108.png" size="80"></tn-icon>
      </view>
    </view>
	</view>
</template>

<script>
  import TnIcon from '@/uni_modules/tuniaoui-icon/components/tuniaoui-icon/tuniaoui-icon.vue'
	export default {
    components: {
      TnIcon
    },
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.content {
    position: relative;
    padding: 30rpx;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .icon {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .data {
        margin-left: 20rpx;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .icon + .icon {
      margin-top: 20rpx;
    }
  }
</style>


```

参数说明：

| 参数      | 说明                                                                                                                             | 类型    | 默认值      | 可选值             |
|:----------|----------------------------------------------------------------------------------------------------------------------------------|:--------|:------------|:-------------------|
| icon      | 图标名称，可以传入图片地址(支持jpg、jpeg、png, gif)                                                                                 | String  | -           | -                  |
| size      | 图标大小；如果是图标，可填写数字/字符串 数字默认单位rpx；如果是图片类型的图片则定义宽高(内置sm、lg、xl)                               | String  | sm          | sm/lg/xl/200/200px |
| bold      | 是否加粗图标                                                                                                                     | Boolean | false       | true               |
| imgMode   | 图片模式mode，当图片为图片时生效。图片裁剪、缩放的模式 参考uniapp img mode(https://uniapp.dcloud.net.cn/component/image.html#image) | String  | scaleToFill |                    |
| top       | 垂直方向的偏移量，单位rpx                                                                                                         | String  | -           | -                  |
| className | 公共class名称                                                                                                                    | String  | -           | -                  |
| color     | 图标颜色                                                                                                                         | String  | -           | -                  |

## 图标预览

![](https://oscimg.oschina.net/oscnet/up-4f4c100d9899ef24e4fccead9d351665360.jpg)

## [问题反馈/提出建议](https://vue2.tuniaokj.com/cooperation/about.html)
![](https://vue2.tuniaokj.com/index/index.jpg)
