(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-yonghu-add-or-update"],{"04b3":function(e,t,r){"use strict";r.r(t);var i=r("825a"),n=r.n(i);for(var o in i)"default"!==o&&function(e){r.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},"58df":function(e,t,r){"use strict";var i,n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{style:{minHeight:"100vh",padding:"0px 0 80rpx",borderColor:"#21d5ae",background:"#fff",borderWidth:"0px 0 0",width:"100%",position:"relative",borderStyle:"dashed",height:"auto"}},[r("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"60rpx 40rpx",background:"none",height:"auto"}},[r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3",display:"flex",width:"100%",lineHeight:"88rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#844819",textAlign:"right"}},[e._v("用户名")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.yonghuming,placeholder:"用户名"},model:{value:e.ruleForm.yonghuming,callback:function(t){e.$set(e.ruleForm,"yonghuming",t)},expression:"ruleForm.yonghuming"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3",display:"flex",width:"100%",lineHeight:"88rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#844819",textAlign:"right"}},[e._v("姓名")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.xingming,placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(t){e.$set(e.ruleForm,"xingming",t)},expression:"ruleForm.xingming"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3",display:"flex",width:"100%",lineHeight:"88rpx",borderStyle:"solid",height:"auto"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.touxiangTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#844819",textAlign:"right"}},[e._v("头像")]),e.ruleForm.touxiang?r("v-uni-image",{staticClass:"avator",style:{width:"72rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"72rpx"},attrs:{src:e.baseUrl+e.ruleForm.touxiang.split(",")[0],mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"72rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"72rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3",display:"flex",width:"100%",lineHeight:"88rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#844819",textAlign:"right"}},[e._v("密码")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.mima,placeholder:"密码"},model:{value:e.ruleForm.mima,callback:function(t){e.$set(e.ruleForm,"mima",t)},expression:"ruleForm.mima"}})],1),r("v-uni-view",{staticClass:" select",style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3",display:"flex",width:"100%",lineHeight:"88rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#844819",textAlign:"right"}},[e._v("性别")]),r("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.xingbieIndex,range:e.xingbieOptions},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.xingbieChange.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#666"}},[e._v(e._s(e.ruleForm.xingbie?e.ruleForm.xingbie:"请选择性别"))])],1)],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3",display:"flex",width:"100%",lineHeight:"88rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#844819",textAlign:"right"}},[e._v("手机")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.shouji,placeholder:"手机"},model:{value:e.ruleForm.shouji,callback:function(t){e.$set(e.ruleForm,"shouji",t)},expression:"ruleForm.shouji"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3",display:"flex",width:"100%",lineHeight:"88rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#844819",textAlign:"right"}},[e._v("积分")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.jf,placeholder:"积分"},model:{value:e.ruleForm.jf,callback:function(t){e.$set(e.ruleForm,"jf",t)},expression:"ruleForm.jf"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3",display:"flex",width:"100%",lineHeight:"88rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#844819",textAlign:"right"}},[e._v("余额")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.money,placeholder:"余额"},model:{value:e.ruleForm.money,callback:function(t){e.$set(e.ruleForm,"money",t)},expression:"ruleForm.money"}})],1),r("v-uni-view",{staticClass:"btn",style:{padding:"0px",margin:"40rpx 0 0 0",background:"none",display:"flex",width:"100%",justifyContent:"center",height:"auto"}},[r("v-uni-button",{staticClass:"bg-red",style:{padding:"0 40rpx",boxShadow:"0px 0px 0px #ccc",margin:"0 40rpx 0 0",borderColor:"#6dd5cb",color:"#fff",display:"inline",minWidth:"220rpx",borderRadius:"0px",background:"#ec9e69",borderWidth:"0px",width:"auto",lineHeight:"72rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)],1)},o=[];r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return i}))},"5ed8":function(e,t,r){"use strict";var i=r("e630"),n=r.n(i);n.a},"6e35":function(e,t,r){"use strict";r.r(t);var i=r("58df"),n=r("04b3");for(var o in n)"default"!==o&&function(e){r.d(t,e,(function(){return n[e]}))}(o);r("5ed8");var a,s=r("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"10c183a6",null,!1,i["a"],a);t["default"]=u.exports},7056:function(e,t,r){var i=r("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-10c183a6]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=t},"825a":function(e,t,r){"use strict";var i=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("a481"),r("c5f6"),r("f559"),r("ac6a"),r("28a5"),r("96cf");var n=i(r("3b8d")),o=i(r("e2b1")),a=i(r("064f")),s={data:function(){return{cross:"",ruleForm:{yonghuming:"",xingming:"",touxiang:"",mima:"",xingbie:"",shouji:"",jf:"",money:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{yonghuming:!1,xingming:!1,touxiang:!1,mima:!1,xingbie:!1,shouji:!1,jf:!1,money:!1}}},components:{wPicker:o.default,xiaEditor:a.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var r,i,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(i=e.sent,this.user=i.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=14;break}return this.ruleForm.id=t.id,e.next=12,this.$api.info("yonghu",this.ruleForm.id);case 12:i=e.sent,this.ruleForm=i.data;case 14:if(this.cross=t.cross,!t.cross){e.next=54;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 18:if((e.t1=e.t0()).done){e.next=54;break}if(o=e.t1.value,"yonghuming"!=o){e.next=24;break}return this.ruleForm.yonghuming=n[o],this.ro.yonghuming=!0,e.abrupt("continue",18);case 24:if("xingming"!=o){e.next=28;break}return this.ruleForm.xingming=n[o],this.ro.xingming=!0,e.abrupt("continue",18);case 28:if("touxiang"!=o){e.next=32;break}return this.ruleForm.touxiang=n[o].split(",")[0],this.ro.touxiang=!0,e.abrupt("continue",18);case 32:if("mima"!=o){e.next=36;break}return this.ruleForm.mima=n[o],this.ro.mima=!0,e.abrupt("continue",18);case 36:if("xingbie"!=o){e.next=40;break}return this.ruleForm.xingbie=n[o],this.ro.xingbie=!0,e.abrupt("continue",18);case 40:if("shouji"!=o){e.next=44;break}return this.ruleForm.shouji=n[o],this.ro.shouji=!0,e.abrupt("continue",18);case 44:if("jf"!=o){e.next=48;break}return this.ruleForm.jf=n[o],this.ro.jf=!0,e.abrupt("continue",18);case 48:if("money"!=o){e.next=52;break}return this.ruleForm.money=n[o],this.ro.money=!0,e.abrupt("continue",18);case 52:e.next=18;break;case 54:this.styleChange();case 55:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.touxiang="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,r,i,n,o,a,s,u,d,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.yonghuming){e.next=3;break}return this.$utils.msg("用户名不能为空"),e.abrupt("return");case 3:if(this.ruleForm.xingming){e.next=6;break}return this.$utils.msg("姓名不能为空"),e.abrupt("return");case 6:if(this.ruleForm.mima){e.next=9;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 9:if(!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){e.next=12;break}return this.$utils.msg("手机应输入手机格式"),e.abrupt("return");case 12:if(!this.ruleForm.jf||this.$validate.isNumber(this.ruleForm.jf)){e.next=15;break}return this.$utils.msg("积分应输入数字"),e.abrupt("return");case 15:if(!this.ruleForm.money||this.$validate.isNumber(this.ruleForm.money)){e.next=18;break}return this.$utils.msg("余额应输入数字"),e.abrupt("return");case 18:if(!this.cross){e.next=34;break}if(o=uni.getStorageSync("statusColumnName"),a=uni.getStorageSync("statusColumnValue"),""==o){e.next=34;break}if(t||(t=uni.getStorageSync("crossObj")),o.startsWith("[")){e.next=30;break}for(s in t)s==o&&(t[s]=a);return u=uni.getStorageSync("crossTable"),e.next=28,this.$api.update("".concat(u),t);case 28:e.next=34;break;case 30:r=Number(uni.getStorageSync("userid")),i=t["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 34:if(!i||!r){e.next=56;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=i,d={page:1,limit:10,crossuserid:r,crossrefid:i},e.next=40,this.$api.list("yonghu",d);case 40:if(p=e.sent,!(p.data.total>=n)){e.next=46;break}return this.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 46:if(!this.ruleForm.id){e.next=51;break}return e.next=49,this.$api.update("yonghu",this.ruleForm);case 49:e.next=53;break;case 51:return e.next=53,this.$api.add("yonghu",this.ruleForm);case 53:this.$utils.msgBack("提交成功");case 54:e.next=64;break;case 56:if(!this.ruleForm.id){e.next=61;break}return e.next=59,this.$api.update("yonghu",this.ruleForm);case 59:e.next=63;break;case 61:return e.next=63,this.$api.add("yonghu",this.ruleForm);case 63:this.$utils.msgBack("提交成功");case 64:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),i=t.getMonth()+1,n=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(r,"-").concat(i,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};t.default=s},e630:function(e,t,r){var i=r("7056");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=r("4f06").default;n("5092dff8",i,!0,{sourceMap:!1,shadowMode:!1})}}]);