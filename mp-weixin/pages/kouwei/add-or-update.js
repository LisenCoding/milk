(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/kouwei/add-or-update"],{1596:function(e,t,n){"use strict";var r,a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}))},"18ae":function(e,t,n){"use strict";n.r(t);var r=n("1596"),a=n("34e1");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("6bf4");var u,s=n("f0c5"),o=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"3b17dee8",null,!1,r["a"],u);t["default"]=o.exports},"2a04":function(e,t,n){},"34e1":function(e,t,n){"use strict";n.r(t);var r=n("926b"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},"6bf4":function(e,t,n){"use strict";var r=n("2a04"),a=n.n(r);a.a},"914b":function(e,t,n){"use strict";(function(e){n("6cdc"),n("921b");r(n("66fd"));var t=r(n("18ae"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"926b":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,r,a,i,u){try{var s=e[i](u),o=s.value}catch(c){return void n(c)}s.done?t(o):Promise.resolve(o).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function s(e){i(u,r,a,s,o,"next",e)}function o(e){i(u,r,a,s,o,"throw",e)}s(void 0)}))}}var s=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))},o=function(){return n.e("components/xia-editor/xia-editor").then(n.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{kouwei:""},user:{},ro:{kouwei:!1}}},components:{wPicker:s,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=u(r.default.mark((function t(n){var a,i,u,s;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.getStorageSync("nowTable"),t.next=3,this.$api.session(a);case 3:if(i=t.sent,this.user=i.data,this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=13;break}return this.ruleForm.id=n.id,t.next=11,this.$api.info("kouwei",this.ruleForm.id);case 11:i=t.sent,this.ruleForm=i.data;case 13:if(this.cross=n.cross,!n.cross){t.next=25;break}u=e.getStorageSync("crossObj"),t.t0=r.default.keys(u);case 17:if((t.t1=t.t0()).done){t.next=25;break}if(s=t.t1.value,"kouwei"!=s){t.next=23;break}return this.ruleForm.kouwei=u[s],this.ro.kouwei=!0,t.abrupt("continue",17);case 23:t.next=17;break;case 25:this.styleChange();case 26:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=u(r.default.mark((function t(){var n,a,i,u,s,o,c,f,l,d;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.cross){t.next=16;break}if(s=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==s){t.next=16;break}if(n||(n=e.getStorageSync("crossObj")),s.startsWith("[")){t.next=12;break}for(c in n)c==s&&(n[c]=o);return f=e.getStorageSync("crossTable"),t.next=10,this.$api.update("".concat(f),n);case 10:t.next=16;break;case 12:a=Number(e.getStorageSync("userid")),i=n["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 16:if(!i||!a){t.next=38;break}return this.ruleForm.crossuserid=a,this.ruleForm.crossrefid=i,l={page:1,limit:10,crossuserid:a,crossrefid:i},t.next=22,this.$api.list("kouwei",l);case 22:if(d=t.sent,!(d.data.total>=u)){t.next=28;break}return this.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 28:if(!this.ruleForm.id){t.next=33;break}return t.next=31,this.$api.update("kouwei",this.ruleForm);case 31:t.next=35;break;case 33:return t.next=35,this.$api.add("kouwei",this.ruleForm);case 35:this.$utils.msgBack("提交成功");case 36:t.next=46;break;case 38:if(!this.ruleForm.id){t.next=43;break}return t.next=41,this.$api.update("kouwei",this.ruleForm);case 41:t.next=45;break;case 43:return t.next=45,this.$api.add("kouwei",this.ruleForm);case 45:this.$utils.msgBack("提交成功");case 46:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,a=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(n,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,n("543d")["default"])}},[["914b","common/runtime","common/vendor"]]]);