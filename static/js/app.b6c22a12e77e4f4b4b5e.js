webpackJsonp([0],{0:function(t,e){},"9TIs":function(t,e){},"9wd/":function(t,e){},DXeV:function(t,e,a){t.exports=a.p+"static/img/play.4e1df3e.png"},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=a("VU/8")({name:"App"},n,!1,function(t){a("ieVt")},null,null).exports,o=a("/ocq"),r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("span",[this._v("Sing")])])}]};var c=a("VU/8")({name:"Header"},r,!1,function(t){a("w8jT")},"data-v-17b0df20",null).exports,l={name:"Index",data:function(){return{listData:[]}},components:{headerBox:c},mounted:function(){this.getData()},methods:{getData:function(){var t=this;this.$http.get("../../static/data/xzq.json").then(function(e){console.log(e),t.listData=e.body.data})}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header-box"),t._v(" "),t._l(t.listData,function(e,i){return a("div",{staticClass:"list"},[a("router-link",{attrs:{to:{name:"play",params:{data:e}}}},[a("div",{staticClass:"left-img"},[a("img",{attrs:{src:e.coverUrl,alt:""}})]),t._v(" "),a("div",{staticClass:"right-text"},[a("p",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("p",{staticClass:"text"},[t._v(t._s(e.description))])])])],1)})],2)},staticRenderFns:[]};var d=a("VU/8")(l,u,!1,function(t){a("9wd/")},"data-v-b2bf5b5e",null).exports,p={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"box"})},staticRenderFns:[]};var v={name:"play",data:function(){return{song:this.$route.params.data,audio:null,isPlay:!1,opacity:1,rotate:"rotate(0deg)",imgRotate:null,rotateNum:0,timeWidth:0}},components:{headerBox:c,audioBox:a("VU/8")({name:"audiotem"},p,!1,function(t){a("TVPN")},"data-v-e0c9bab2",null).exports},computed:{texts:function(){return this.song.description.replace(/\n/g,"<br/>")}},mounted:function(){console.log(this.audio),this.audio=document.createElement("audio"),this.audio.src=this.song.fileOptions[1].url},methods:{playSong:function(){this.isPlay=!this.isPlay,this.isPlay?(this.audio.play(),this.playBtnHide(),this.imgRotateStart(),this.timeRangeStart()):(this.audio.pause(),this.playBtnShow(),this.imgRotateStop(),this.timeRangeStop())},playBtnHide:function(){var t=this,e=setInterval(function(){t.opacity-=.1,t.opacity<=0&&clearInterval(e)},20)},playBtnShow:function(){var t=this,e=setInterval(function(){t.opacity+=.1,t.opacity>=1&&clearInterval(e)},20)},imgRotateStart:function(){var t=this;this.imgRotate=setInterval(function(){t.rotateNum+=.1,t.rotate="rotate("+t.rotateNum+"deg)"},10)},imgRotateStop:function(){clearInterval(this.imgRotate)},timeRangeStart:function(){var t=this;this.times=setInterval(function(){t.timeWidth=Math.ceil(t.audio.currentTime/t.audio.duration*100)+"%"},10)},timeRangeStop:function(){clearInterval(this.times)}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("header-box"),t._v(" "),i("div",{staticClass:"song-title"},[t._v(t._s(t.song.title))]),t._v(" "),i("div",{staticClass:"center",on:{click:t.playSong}},[i("div",{staticClass:"bor837F7D"},[i("img",{staticClass:"cover",style:{transform:t.rotate},attrs:{src:t.song.coverUrl,alt:""}}),t._v(" "),i("img",{staticClass:"play",style:{opacity:t.opacity},attrs:{src:a("DXeV"),alt:""}})])]),t._v(" "),i("div",{staticClass:"range"},[i("div",{staticClass:"had-line",style:{width:t.timeWidth}})]),t._v(" "),i("div",{staticClass:"text"},[i("p",{domProps:{innerHTML:t._s(t.texts)}})])],1)},staticRenderFns:[]};var m=a("VU/8")(v,h,!1,function(t){a("9TIs")},"data-v-0c8414cb",null).exports;i.a.use(o.a);var f=new o.a({routes:[{path:"/",name:"index",component:d},{path:"/play",name:"play",component:m}]}),g=a("8+8L"),_=a("7QTg"),y=a.n(_);a("Qbok");i.a.use(g.a),i.a.use(y.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:f,components:{App:s},template:"<App/>"})},Qbok:function(t,e){},TVPN:function(t,e){},ieVt:function(t,e){},w8jT:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b6c22a12e77e4f4b4b5e.js.map