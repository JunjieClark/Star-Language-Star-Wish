(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabbar-add-add"],{2247:function(t,e,i){"use strict";var a=i("fbc6"),n=i.n(a);n.a},2967:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".container[data-v-75376f21]{display:flex;flex-direction:column;align-items:center;padding:20px}.upload-section[data-v-75376f21], .record-section[data-v-75376f21], .submit-section[data-v-75376f21]{margin:10px 0}.preview-image[data-v-75376f21]{width:100px;height:100px;margin-top:10px}.input-description[data-v-75376f21]{margin-top:10px;border:1px solid #ccc;border-radius:4px;padding:5px}",""]),t.exports=e},"352b":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"upload-section"},[i("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImage.apply(void 0,arguments)}}},[t._v("Choose Picture")]),t.imagePath?i("v-uni-image",{staticClass:"preview-image",attrs:{src:t.imagePath}}):t._e(),t.imagePath?i("v-uni-input",{staticClass:"input-description",attrs:{type:"text",placeholder:"Put the Text"},model:{value:t.imageDescription,callback:function(e){t.imageDescription=e},expression:"imageDescription"}}):t._e()],1),i("v-uni-view",{staticClass:"record-section"},[i("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.startRecord.apply(void 0,arguments)}}},[t._v("Start Recording")]),i("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.stopRecord.apply(void 0,arguments)}}},[t._v("Stop Recording")]),t.audioPath?i("v-uni-audio",{attrs:{src:t.audioPath,controls:!0}}):t._e()],1),i("v-uni-view",{staticClass:"submit-section"},[i("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submitData.apply(void 0,arguments)}}},[t._v("Submit")])],1)],1)},n=[]},"43a7":function(t,e,i){"use strict";i.r(e);var a=i("627f"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"627f":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("2546"),n={data:function(){return{imagePath:"",imageDescription:"",audioPath:"",recorder:null}},methods:{chooseImage:function(){var t=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){t.imagePath=e.tempFilePaths[0]}})},startRecord:function(){var t=this;this.recorder||(this.recorder=uni.getRecorderManager(),this.recorder.onStart((function(){console.log("录音开始")})),this.recorder.onStop((function(e){console.log("录音停止",e.tempFilePaths[0]),t.audioPath=e.tempFilePath})),this.recorder.onError((function(t){console.error("录音错误:",t.errMsg)})),this.recorder.start({format:"mp3"}))},stopRecord:function(){this.recorder&&(this.recorder.stop(),this.recorder=null)},submitData:function(){var t={imagePath:this.imagePath,imageDescription:this.imageDescription,audioPath:this.audioPath};a.EventBus.$emit("update-data",t),uni.navigateBack(),console.log("提交的图片:",this.imagePath),console.log("提交的音频:",this.audioPath),console.log("图片描述:",this.imageDescription)}}};e.default=n},bf6b:function(t,e,i){"use strict";i.r(e);var a=i("352b"),n=i("43a7");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("2247");var r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"75376f21",null,!1,a["a"],void 0);e["default"]=c.exports},fbc6:function(t,e,i){var a=i("2967");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("62fc92b8",a,!0,{sourceMap:!1,shadowMode:!1})}}]);