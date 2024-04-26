<!-- 添加界面的页面代码 -->
<template>
  <view class="container">
    <view class="upload-section">
      <button @click="chooseImage">Choose Picture</button>
      <image v-if="imagePath" :src="imagePath" class="preview-image"></image>
      <!-- 文本输入框用于输入图片的文字解释 -->
      <input v-if="imagePath" v-model="imageDescription" type="text" placeholder="Put the Text" class="input-description"/>
    </view>
    <view class="record-section">
      <button @click="startRecord">Start Recording</button>
      <button @click="stopRecord">Stop Recording</button>
      <audio v-if="audioPath" :src="audioPath" controls></audio>
    </view>
    <view class="submit-section">
      <button @click="submitData">Submit</button>
    </view>
  </view>
</template>

<script>
import {EventBus} from '../../../main.js';

export default {
  data() {
    return {
      imagePath: '', // 存储选择的图片路径
      imageDescription: '', // 存储图片的文字解释
      audioPath: '', // 存储录制的音频路径
      recorder: null, // 录音管理器
    };
	uni.authorize({
	  scope: 'scope.record',
	  success() {
	    console.log('授权成功');
	  },
	  fail() {
	    console.log('用户拒绝授权');
	  }
	});
  },
  methods: {
    chooseImage() {
      uni.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: res => {
          this.imagePath = res.tempFilePaths[0];
        }
      });
    },
    startRecord() {
          if (!this.recorder) {
            this.recorder = uni.getRecorderManager();
            
            this.recorder.onStart(() => {
              console.log('录音开始');
            });
    
            this.recorder.onStop((res) => {
              console.log('录音停止', res.tempFilePaths[0]);
              this.audioPath = res.tempFilePath; // 保存录音文件的路径
            });
    
            this.recorder.onError((res) => {
              console.error('录音错误:', res.errMsg);
            });
    
            // 开始录音
            this.recorder.start({
              format: 'mp3' // 设置录音格式
            });
          }
        },
    stopRecord() {
      if (this.recorder) {
        this.recorder.stop();
        this.recorder = null;
      }
    },
	submitData() {
	    const data = {
	      imagePath: this.imagePath,
	      imageDescription: this.imageDescription,
	      audioPath: this.audioPath
	    };
	    EventBus.$emit('update-data', data);
	    uni.navigateBack();
		console.log('提交的图片:', this.imagePath);
		console.log('提交的音频:', this.audioPath);
		console.log('图片描述:', this.imageDescription);
	  },
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.upload-section, .record-section, .submit-section {
  margin: 10px 0;
}

.preview-image {
  width: 100px;
  height: 100px;
  margin-top: 10px;
}

.input-description {
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
}
</style>
