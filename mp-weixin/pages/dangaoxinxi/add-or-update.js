(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dangaoxinxi/add-or-update"],{"4b7d":function(e,n,t){"use strict";t.r(n);var i=t("761b"),r=t("ab3a");for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t("bb33");var u,s=t("f0c5"),o=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"a0d95794",null,!1,i["a"],u);n["default"]=o.exports},"4d75":function(e,n,t){},"5f53":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,i,r,a,u){try{var s=e[a](u),o=s.value}catch(c){return void t(c)}s.done?n(o):Promise.resolve(o).then(i,r)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var u=e.apply(n,t);function s(e){a(u,i,r,s,o,"next",e)}function o(e){a(u,i,r,s,o,"throw",e)}s(void 0)}))}}var s=function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"e2b1"))},o=function(){return t.e("components/xia-editor/xia-editor").then(t.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{dangaomingcheng:"",dangaofenlei:"",kouwei:"",fengmian:"",yanse:"",zhuangshipin:"",dangaochicun:"",shangjiariqi:"",dangaoxiangqing:"",jf:"",price:""},dangaofenleiOptions:[],dangaofenleiIndex:0,kouweiOptions:[],kouweiIndex:0,user:{},ro:{dangaomingcheng:!1,dangaofenlei:!1,kouwei:!1,fengmian:!1,yanse:!1,zhuangshipin:!1,dangaochicun:!1,shangjiariqi:!1,dangaoxiangqing:!1,clicktime:!1,clicknum:!1,jf:!1,price:!1}}},components:{wPicker:s,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var n=u(i.default.mark((function n(t){var r,a,u,s;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.ruleForm.shangjiariqi=this.$utils.getCurDate(),r=e.getStorageSync("nowTable"),n.next=4,this.$api.session(r);case 4:return a=n.sent,this.user=a.data,n.next=8,this.$api.option("dangaofenlei","dangaofenlei",{});case 8:return a=n.sent,this.dangaofenleiOptions=a.data,this.dangaofenleiOptions.unshift("请选择牛奶分类"),n.next=13,this.$api.option("kouwei","kouwei",{});case 13:if(a=n.sent,this.kouweiOptions=a.data,this.kouweiOptions.unshift("请选择口味"),this.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){n.next=24;break}return this.ruleForm.id=t.id,n.next=22,this.$api.info("dangaoxinxi",this.ruleForm.id);case 22:a=n.sent,this.ruleForm=a.data;case 24:if(this.cross=t.cross,!t.cross){n.next=84;break}u=e.getStorageSync("crossObj"),n.t0=i.default.keys(u);case 28:if((n.t1=n.t0()).done){n.next=84;break}if(s=n.t1.value,"dangaomingcheng"!=s){n.next=34;break}return this.ruleForm.dangaomingcheng=u[s],this.ro.dangaomingcheng=!0,n.abrupt("continue",28);case 34:if("dangaofenlei"!=s){n.next=38;break}return this.ruleForm.dangaofenlei=u[s],this.ro.dangaofenlei=!0,n.abrupt("continue",28);case 38:if("kouwei"!=s){n.next=42;break}return this.ruleForm.kouwei=u[s],this.ro.kouwei=!0,n.abrupt("continue",28);case 42:if("fengmian"!=s){n.next=46;break}return this.ruleForm.fengmian=u[s].split(",")[0],this.ro.fengmian=!0,n.abrupt("continue",28);case 46:if("yanse"!=s){n.next=50;break}return this.ruleForm.yanse=u[s],this.ro.yanse=!0,n.abrupt("continue",28);case 50:if("zhuangshipin"!=s){n.next=54;break}return this.ruleForm.zhuangshipin=u[s],this.ro.zhuangshipin=!0,n.abrupt("continue",28);case 54:if("dangaochicun"!=s){n.next=58;break}return this.ruleForm.dangaochicun=u[s],this.ro.dangaochicun=!0,n.abrupt("continue",28);case 58:if("shangjiariqi"!=s){n.next=62;break}return this.ruleForm.shangjiariqi=u[s],this.ro.shangjiariqi=!0,n.abrupt("continue",28);case 62:if("dangaoxiangqing"!=s){n.next=66;break}return this.ruleForm.dangaoxiangqing=u[s],this.ro.dangaoxiangqing=!0,n.abrupt("continue",28);case 66:if("clicktime"!=s){n.next=70;break}return this.ruleForm.clicktime=u[s],this.ro.clicktime=!0,n.abrupt("continue",28);case 70:if("clicknum"!=s){n.next=74;break}return this.ruleForm.clicknum=u[s],this.ro.clicknum=!0,n.abrupt("continue",28);case 74:if("jf"!=s){n.next=78;break}return this.ruleForm.jf=u[s],this.ro.jf=!0,n.abrupt("continue",28);case 78:if("price"!=s){n.next=82;break}return this.ruleForm.price=u[s],this.ro.price=!0,n.abrupt("continue",28);case 82:n.next=28;break;case 84:this.styleChange();case 85:case"end":return n.stop()}}),n,this)})));function t(e){return n.apply(this,arguments)}return t}(),methods:{dangaoxiangqingChange:function(e){this.ruleForm.dangaoxiangqing=e},styleChange:function(){this.$nextTick((function(){}))},shangjiariqiChange:function(e){this.ruleForm.shangjiariqi=e.target.value,this.$forceUpdate()},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},dangaofenleiChange:function(e){this.dangaofenleiIndex=e.target.value,this.ruleForm.dangaofenlei=this.dangaofenleiOptions[this.dangaofenleiIndex]},kouweiChange:function(e){this.kouweiIndex=e.target.value,this.ruleForm.kouwei=this.kouweiOptions[this.kouweiIndex]},fengmianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.fengmian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(i.default.mark((function n(){var t,r,a,u,s,o,c,l,h,f;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.dangaomingcheng){n.next=3;break}return this.$utils.msg("牛奶名称不能为空"),n.abrupt("return");case 3:if(this.ruleForm.dangaofenlei){n.next=6;break}return this.$utils.msg("牛奶分类不能为空"),n.abrupt("return");case 6:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){n.next=9;break}return this.$utils.msg("点击次数应输入整数"),n.abrupt("return");case 9:if(!this.ruleForm.jf||this.$validate.isIntNumer(this.ruleForm.jf)){n.next=12;break}return this.$utils.msg("积分应输入整数"),n.abrupt("return");case 12:if(this.ruleForm.price){n.next=15;break}return this.$utils.msg("价格不能为空"),n.abrupt("return");case 15:if(!this.ruleForm.price||this.$validate.isNumber(this.ruleForm.price)){n.next=18;break}return this.$utils.msg("价格应输入数字"),n.abrupt("return");case 18:if(!this.cross){n.next=34;break}if(s=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==s){n.next=34;break}if(t||(t=e.getStorageSync("crossObj")),s.startsWith("[")){n.next=30;break}for(c in t)c==s&&(t[c]=o);return l=e.getStorageSync("crossTable"),n.next=28,this.$api.update("".concat(l),t);case 28:n.next=34;break;case 30:r=Number(e.getStorageSync("userid")),a=t["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 34:if(!a||!r){n.next=56;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=a,h={page:1,limit:10,crossuserid:r,crossrefid:a},n.next=40,this.$api.list("dangaoxinxi",h);case 40:if(f=n.sent,!(f.data.total>=u)){n.next=46;break}return this.$utils.msg(e.getStorageSync("tips")),n.abrupt("return",!1);case 46:if(!this.ruleForm.id){n.next=51;break}return n.next=49,this.$api.update("dangaoxinxi",this.ruleForm);case 49:n.next=53;break;case 51:return n.next=53,this.$api.add("dangaoxinxi",this.ruleForm);case 53:this.$utils.msgBack("提交成功");case 54:n.next=64;break;case 56:if(!this.ruleForm.id){n.next=61;break}return n.next=59,this.$api.update("dangaoxinxi",this.ruleForm);case 59:n.next=63;break;case 61:return n.next=63,this.$api.add("dangaoxinxi",this.ruleForm);case 63:this.$utils.msgBack("提交成功");case 64:case"end":return n.stop()}}),n,this)})));function t(){return n.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),i=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},"761b":function(e,n,t){"use strict";var i={"xia-editor":()=>t.e("components/xia-editor/xia-editor").then(t.bind(null,"064f")),"w-picker":()=>Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"e2b1"))},r=function(){var e=this,n=e.$createElement,t=(e._self._c,e.ruleForm.fengmian.split(","));e.$mp.data=Object.assign({},{$root:{g0:t}})},a=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}))},ab3a:function(e,n,t){"use strict";t.r(n);var i=t("5f53"),r=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=r.a},bb33:function(e,n,t){"use strict";var i=t("4d75"),r=t.n(i);r.a},ee12:function(e,n,t){"use strict";(function(e){t("6cdc"),t("921b");i(t("66fd"));var n=i(t("4b7d"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["ee12","common/runtime","common/vendor"]]]);