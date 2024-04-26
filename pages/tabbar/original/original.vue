<template>
  <view>
    <view class="fixed-container">
      <view class="nav-bar">
            <view class="title">Star Language Star Wish</view>
            <view class="nav-icon" @click="onSettingsClick">
              <tn-icon icon="set" size="lg"></tn-icon> <!-- 假设有一个名为settings的图标 -->
            </view>
          </view>
		  <canvas canvas-id="myCanvas"></canvas>
      <view class="button-container">
        <button style="background-color: #FAD791; border-radius: 50%; border: 2rpx solid dimgray;" @click="clearCanvas"><tn-icon icon="delete"></tn-icon></button>
        <button style="background-color: #FAD791; width: 300rpx; border-radius: 50rpx; border: 2rpx solid dimgray;" @click="startPlayingAudios()"><tn-icon icon="video-fill" size="lg"></tn-icon></button>
		<button style="background-color: #FAD791; width: 300rpx; border-radius: 50rpx; border: 2rpx solid dimgray;" @click="goToAnotherPage()"><tn-icon icon="add" size="lg"></tn-icon></button>
      </view>
    </view>
    <view class="content-container">
      <!-- 其他内容 -->
      <view class="container">
        <view class="card" v-for="(image, index) in images" :key="index" @click="onCardClick(image)">
          <image :src="image.url" class="card-image"></image>
          <text class="card-text">{{ image.text }}</text>
		  <audio :src="image.audio"></audio>
        </view>
      </view>
    </view>
  </view>
</template>



<script>
	import tnIcon from '@/uni_modules/tn-icon/components/tn-icon/tn-icon.vue'
	import {EventBus} from '../../../main.js';
export default {
  data() {
    return {
      // 示例图片数据，应包含图片URL和文本
      images: [
      			{url:'../../../static/want/wanttoeat.jpg', text: 'Want to eat', audio: '../../../static/wantaudio/wanttoeat.mp3' },
                {url:'../../../static/want/wanttodrink.jpg', text: 'Want to drink', audio: '../../../static/wantaudio/wanttodrink.mp3' },
				{url:'../../../static/want/wanttogo.jpg', text: 'Want to go', audio: '../../../static/wantaudio/wanttogo.mp3' },
                                // 添加更多图片
        ],
	  nextImageX: 20, // 下一张图片在Canvas上的x坐标
	  nextImageY: 20, // 下一张图片在Canvas上的y坐标
    };
  },
  onShow(){
  	this.redrawCanvas();
  },
mounted() {
     // 获取系统信息
     const systemInfo = uni.getSystemInfoSync();
     // 设置屏幕宽度
     this.screenWidth = systemInfo.windowWidth;
 	  // 绘制页面加载时已选中的图片
	 this.redrawCanvas(); 
	 EventBus.$on('update-data', this.handleUpdateData);
	 },
methods: {
	handleUpdateData(data) {
	      // 将接收到的数据添加到images数组
	      this.images.push({
	        url: data.imagePath,
	        text: data.imageDescription,
	        audio: data.audioPath
	      });
	    },
	  beforeDestroy() {
	    // 移除事件监听
	    EventBus.$off('update-data', this.handleUpdateData);
	  },
	 goToAnotherPage() {
	      uni.navigateTo({
	        url: '/pages/tabbar/add/add'  // 确保路径正确
	      });
	    },
   redrawCanvas() {
         const ctx = uni.createCanvasContext('myCanvas', this);
         ctx.clearRect(0, 0, this.screenWidth, 400); // 清除Canvas内容
   
         // 根据全局状态中的图片信息重新绘制Canvas
         this.$selectedImages.forEach((image, index) => {
           // 假设布局和绘图逻辑
           const x = (index % 3) * 110 +20; // 示例布局
           const y = Math.floor(index / 3) * 100 +20;
           ctx.drawImage(image.url, x, y, 100, 100);
         });
   
         ctx.draw();
       },
   pushImage(image) {
     this.$selectedImages.push(image);
     uni.setStorageSync('selectedImages', this.$selectedImages); // 可选：使用本地存储持久化选中的图片信息
   },
   onCardClick(image) {
     this.pushImage(image); // 调用pushImage来处理图片选中逻辑
     this.drawSelectedImages(); // 绘制选中的图片到Canvas
	 this.playAudio(image.audio); // 播放点击图片对应的音频
   },
   drawSelectedImages() {
     const ctx = uni.createCanvasContext('myCanvas', this);
     this.$selectedImages.forEach((img, index) => {
       const x = (index % 3) * 110 +20; // 简单布局：每行两张图片
       const y = Math.floor(index / 3) * 100 +20;
       ctx.drawImage(img.url, x, y, 100, 100); // 假设每张图片大小为100x100
     });
     ctx.draw(true);
   },
   drawSelectedText() {
     const ctx = uni.createCanvasContext('myCanvas', this);
     this.$selectedImages.forEach((img, index) => {
       const x = (index % 3) * 110 +50; // 简单布局：每行两张图片
       const y = Math.floor(index / 3) * 100 +130;
       ctx.fillText(img.text,x,y) // 假设每张图片大小为100x100
     });
     ctx.draw(true);
	 },
   playAudio(audioPath) {
         var audio = uni.createInnerAudioContext();
         audio.src = audioPath; // 设置音频文件的路径
         audio.play(); // 播放音频
   
         audio.onPlay(() => {
           console.log('开始播放');
         });
         
         audio.onError((res) => {
           console.error('播放音频失败:', res.errMsg);
         });
       },
	playAudioSequentially(index = 0) {
	    if (index < this.$selectedImages.length) {
	      const audioPath = this.$selectedImages[index].audio;
	      if (audioPath) {
	        const audio = uni.createInnerAudioContext();
	        audio.src = audioPath; // 设置音频文件的路径
	        audio.play(); // 播放音频
	
	        audio.onPlay(() => {
	          console.log('开始播放:', audioPath);
	        });
	
	        audio.onEnded(() => {
	          console.log('音频播放结束:', audioPath);
	          this.playAudioSequentially(index + 1); // 播放下一个音频
	        });
	
	        audio.onError((res) => {
	          console.error('播放音频失败:', res.errMsg);
	          // 即便当前音频播放失败，也尝试播放下一个音频
	          this.playAudioSequentially(index + 1);
	        });
	      } else {
	        // 如果当前索引音频路径不存在，跳到下一个
	        this.playAudioSequentially(index + 1);
	      }
	    } else {
	      console.log('所有音频播放完毕');
	      // 这里可以执行所有音频播放结束后的逻辑
	    }
	  },
	
	  // 当你想开始播放全局状态中的音频时调用这个方法
	  startPlayingAudios() {
	    this.playAudioSequentially(); // 从第一个音频开始播放
		this.drawSelectedText();
	  },
   clearCanvas() {
     const ctx = uni.createCanvasContext('myCanvas', this);
     ctx.clearRect(0, 0, this.screenWidth, 400);
     ctx.draw();
   
     // 设置本地存储标记为true
   	  this.$selectedImages.splice(0);
   },
 },
 }
</script>


<style>
.fixed-container {
  position: fixed; /* 固定定位 */
  top: 0; /* 定位到页面顶部 */
  left: 0;
  width: 100%; /* 容器宽度为100% */
  z-index: 999; /* 确保它在页面其他内容之上 */
  background-color: #FAD791;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #FAD791;
}

.title {
  font-size: 30rpx;
  font-weight: bold;
  text-align: center;
}

.nav-icon {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}


canvas{
	width: 100%;
	height: 300rpx; 
	background-color: #FAD791;
	border-radius: 50rpx;
	box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2) ; /* 内部阴影 */
}

.button-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  background-color: #FAD791;
  height: 55px;
}

.content-container {
  margin-top: 505rpx; /* 留出足够空间，避免内容被遮挡，根据实际高度调整 */
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px 0;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48%; /* 两列布局 */
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
}

.card-image {
  width: 100%; /* 图片宽度自适应 */
  height: 125px; /* 固定图片高度 */
}

.card-text {
  margin: 10px;
}

button {
  margin: 0 10px; /* 为按钮添加一些外边距 */
}
</style>

