(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabbar-want-want"],{"609e":function(t,a,e){var n=e("6f2a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("1b41a4d4",n,!0,{sourceMap:!1,shadowMode:!1})},"6b12":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var n={tnIcon:e("2dde").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("v-uni-view",{staticClass:"fixed-container"},[e("v-uni-view",{staticClass:"nav-bar"},[e("v-uni-view",{staticClass:"title"},[t._v("Star Language Star Wish")]),e("v-uni-view",{staticClass:"nav-icon",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onSettingsClick.apply(void 0,arguments)}}},[e("tn-icon",{attrs:{icon:"set",size:"lg"}})],1)],1),e("v-uni-canvas",{attrs:{"canvas-id":"myCanvas"}}),e("v-uni-view",{staticClass:"button-container"},[e("v-uni-button",{staticStyle:{"background-color":"#FAD791","border-radius":"50%",border:"2rpx solid dimgray"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clearCanvas.apply(void 0,arguments)}}},[e("tn-icon",{attrs:{icon:"delete"}})],1),e("v-uni-button",{staticStyle:{"background-color":"#FAD791",width:"300rpx","border-radius":"50rpx",border:"2rpx solid dimgray"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.startPlayingAudios()}}},[e("tn-icon",{attrs:{icon:"video-fill",size:"lg"}})],1)],1)],1),e("v-uni-view",{staticClass:"content-container"},[e("v-uni-view",{staticClass:"container"},t._l(t.images,(function(a,n){return e("v-uni-view",{key:n,staticClass:"card",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onCardClick(a)}}},[e("v-uni-image",{staticClass:"card-image",attrs:{src:a.url}}),e("v-uni-text",{staticClass:"card-text"},[t._v(t._s(a.text))]),e("v-uni-audio",{attrs:{src:a.audio}})],1)})),1)],1)],1)},o=[]},"6f2a":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".fixed-container[data-v-47608d2e]{position:fixed; /* 固定定位 */top:0; /* 定位到页面顶部 */left:0;width:100%; /* 容器宽度为100% */z-index:999; /* 确保它在页面其他内容之上 */background-color:#fad791}.nav-bar[data-v-47608d2e]{display:flex;justify-content:space-between;align-items:center;padding:10px;background-color:#fad791}.title[data-v-47608d2e]{font-size:%?30?%;font-weight:700;text-align:center}.nav-icon[data-v-47608d2e]{display:flex;align-items:center;justify-content:flex-end}uni-canvas[data-v-47608d2e]{width:100%;height:%?300?%;background-color:#fad791;border-radius:%?50?%;box-shadow:inset 0 0 20px rgba(0,0,0,.2) /* 内部阴影 */}.button-container[data-v-47608d2e]{display:flex;justify-content:center; /* 水平居中 */align-items:center; /* 垂直居中 */background-color:#fad791;height:55px}.content-container[data-v-47608d2e]{margin-top:%?505?% /* 留出足够空间，避免内容被遮挡，根据实际高度调整 */}.container[data-v-47608d2e]{display:flex;flex-wrap:wrap;justify-content:space-around;padding:10px 0}.card[data-v-47608d2e]{display:flex;flex-direction:column;align-items:center;width:48%; /* 两列布局 */margin-bottom:10px;background-color:#fff;border-radius:8px;overflow:hidden}.card-image[data-v-47608d2e]{width:100%; /* 图片宽度自适应 */height:125px /* 固定图片高度 */}.card-text[data-v-47608d2e]{margin:10px}uni-button[data-v-47608d2e]{margin:0 10px /* 为按钮添加一些外边距 */}",""]),t.exports=a},"878b":function(t,a,e){"use strict";var n=e("609e"),i=e.n(n);i.a},"9bb8":function(t,a,e){"use strict";e.r(a);var n=e("6b12"),i=e("b996");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("878b");var r=e("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"47608d2e",null,!1,n["a"],void 0);a["default"]=s.exports},b996:function(t,a,e){"use strict";e.r(a);var n=e("d8ed"),i=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},d8ed:function(t,a,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("d3b7"),e("159b"),e("14d9"),e("a434");n(e("2dde"));var i={data:function(){return{images:[{url:"../../../static/want/wanttoeat.jpg",text:"Want to eat",audio:"../../../static/wantaudio/wanttoeat.mp3"},{url:"../../../static/want/wanttodrink.jpg",text:"Want to drink",audio:"../../../static/wantaudio/wanttodrink.mp3"},{url:"../../../static/want/wanttogo.jpg",text:"Want to go",audio:"../../../static/wantaudio/wanttogo.mp3"}],nextImageX:20,nextImageY:20}},onShow:function(){this.redrawCanvas()},mounted:function(){var t=uni.getSystemInfoSync();this.screenWidth=t.windowWidth,this.redrawCanvas()},methods:{redrawCanvas:function(){var t=uni.createCanvasContext("myCanvas",this);t.clearRect(0,0,this.screenWidth,400),this.$selectedImages.forEach((function(a,e){var n=e%3*110+20,i=100*Math.floor(e/3)+20;t.drawImage(a.url,n,i,100,100)})),t.draw()},pushImage:function(t){this.$selectedImages.push(t),uni.setStorageSync("selectedImages",this.$selectedImages)},onCardClick:function(t){this.pushImage(t),this.drawSelectedImages(),this.playAudio(t.audio)},drawSelectedImages:function(){var t=uni.createCanvasContext("myCanvas",this);this.$selectedImages.forEach((function(a,e){var n=e%3*110+20,i=100*Math.floor(e/3)+20;t.drawImage(a.url,n,i,100,100)})),t.draw(!0)},drawSelectedText:function(){var t=uni.createCanvasContext("myCanvas",this);this.$selectedImages.forEach((function(a,e){var n=e%3*110+50,i=100*Math.floor(e/3)+130;t.fillText(a.text,n,i)})),t.draw(!0)},playAudio:function(t){var a=uni.createInnerAudioContext();a.src=t,a.play(),a.onPlay((function(){console.log("开始播放")})),a.onError((function(t){console.error("播放音频失败:",t.errMsg)}))},playAudioSequentially:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(a<this.$selectedImages.length){var e=this.$selectedImages[a].audio;if(e){var n=uni.createInnerAudioContext();n.src=e,n.play(),n.onPlay((function(){console.log("开始播放:",e)})),n.onEnded((function(){console.log("音频播放结束:",e),t.playAudioSequentially(a+1)})),n.onError((function(e){console.error("播放音频失败:",e.errMsg),t.playAudioSequentially(a+1)}))}else this.playAudioSequentially(a+1)}else console.log("所有音频播放完毕")},startPlayingAudios:function(){this.playAudioSequentially(),this.drawSelectedText()},clearCanvas:function(){var t=uni.createCanvasContext("myCanvas",this);t.clearRect(0,0,this.screenWidth,400),t.draw(),this.$selectedImages.splice(0)}}};a.default=i}}]);