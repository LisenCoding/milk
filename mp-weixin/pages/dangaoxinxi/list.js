(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dangaoxinxi/list"],{"277d":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e,i,n,a,s,r){try{var o=t[s](r),c=o.value}catch(u){return void i(u)}o.done?e(c):Promise.resolve(c).then(n,a)}function r(t){return function(){var e=this,i=arguments;return new Promise((function(n,a){var r=t.apply(e,i);function o(t){s(r,n,a,o,c,"next",t)}function c(t){s(r,n,a,o,c,"throw",t)}o(void 0)}))}}var o={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"牛奶名称"},{queryName:"口味"},{queryName:"牛奶容量"}],queryIndex:0,list:[],lists:[],userid:"",mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},categoryList:[],categoryName:"全部",CustomBar:"0"}},computed:{baseUrl:function(){return this.$base.url}},onShow:function(){var e=r(n.default.mark((function e(){var i;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(1==t.getStorageSync("useridTag")?(this.userid=t.getStorageSync("useridTag"),t.removeStorageSync("useridTag")):this.userid="",this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),i={},!this.userid){e.next=9;break}return e.next=6,this.$api.page("dangaofenlei",{page:1,limit:100});case 6:i=e.sent,e.next=12;break;case 9:return e.next=11,this.$api.list("dangaofenlei",{page:1,limit:100});case 11:i=e.sent;case 12:i.data.list.splice(0,0,{id:0,dangaofenlei:"全部"}),this.categoryList=i.data.list,this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll();case 16:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),onLoad:function(e){1==t.getStorageSync("useridTag")?(this.userid=t.getStorageSync("useridTag"),t.removeStorageSync("useridTag")):this.userid="",this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},methods:{priceChange:function(t){return Number(t).toFixed(2)},preHttp:function(t){return t&&"http"==t.substr(0,4)},queryChange:function(t){this.queryIndex=t.detail.value,this.searchForm.dangaomingcheng="",this.searchForm.kouwei="",this.searchForm.dangaochicun=""},categoryClick:function(t){this.categoryName=t,this.mescroll.resetUpScroll()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=r(n.default.mark((function t(e){var i,a,s,r,o;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i={page:e.num,limit:e.size},i["sort"]="shangjiariqi",i["order"]="desc","全部"!=this.categoryName&&(i.dangaofenlei="%"+this.categoryName+"%"),this.searchForm.dangaomingcheng&&(i["dangaomingcheng"]="%"+this.searchForm.dangaomingcheng+"%"),this.searchForm.kouwei&&(i["kouwei"]="%"+this.searchForm.kouwei+"%"),this.searchForm.dangaochicun&&(i["dangaochicun"]="%"+this.searchForm.dangaochicun+"%"),a={},!this.userid){t.next=14;break}return t.next=11,this.$api.page("dangaoxinxi",i);case 11:a=t.sent,t.next=17;break;case 14:return t.next=16,this.$api.list("dangaoxinxi",i);case 16:a=t.sent;case 17:for(1==e.num&&(this.list=[]),this.list=this.list.concat(a.data.list),s=Math.ceil(this.list.length/6),r=[],o=0;o<s;o++)r[o]=this.list.slice(6*o,6*(o+1));this.lists=r,0==a.data.list.length&&(this.hasNext=!1),e.endSuccess(e.size,this.hasNext);case 25:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onDetailTap:function(e){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(e.id,"&userid=")+this.userid)},onUpdateTap:function(e){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update?id=".concat(e))},onAddTap:function(){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update")},onDeleteTap:function(e){var i=this;t.showModal({title:"提示",content:"是否确认删除",success:function(){var t=r(n.default.mark((function t(a){return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a.confirm){t.next=5;break}return t.next=3,i.$api.del("dangaoxinxi",JSON.stringify([e]));case 3:i.hasNext=!0,i.mescroll.resetUpScroll();case 5:case"end":return t.stop()}}),t)})));function a(e){return t.apply(this,arguments)}return a}()})},search:function(){var t=r(n.default.mark((function t(){var e,i,a,s,r;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.mescroll.num=1,e={page:this.mescroll.num,limit:this.mescroll.size},this.searchForm.dangaomingcheng&&(e["dangaomingcheng"]="%"+this.searchForm.dangaomingcheng+"%"),this.searchForm.kouwei&&(e["kouwei"]="%"+this.searchForm.kouwei+"%"),this.searchForm.dangaochicun&&(e["dangaochicun"]="%"+this.searchForm.dangaochicun+"%"),i={},!this.userid){t.next=12;break}return t.next=9,this.$api.page("dangaoxinxi",e);case 9:i=t.sent,t.next=15;break;case 12:return t.next=14,this.$api.list("dangaoxinxi",e);case 14:i=t.sent;case 15:for(1==this.mescroll.num&&(this.list=[]),this.list=this.list.concat(i.data.list),a=Math.ceil(this.list.length/6),s=[],r=0;r<a;r++)s[r]=this.list.slice(6*r,6*(r+1));this.lists=s,0==i.data.list.length&&(this.hasNext=!1),this.mescroll.endSuccess(this.mescroll.size,this.hasNext);case 23:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=o}).call(this,i("543d")["default"])},"57af":function(t,e,i){"use strict";var n={"mescroll-uni":()=>Promise.all([i.e("common/vendor"),i.e("components/mescroll-uni/mescroll-uni")]).then(i.bind(null,"f05e"))},a=function(){var t=this,e=t.$createElement,i=(t._self._c,t.isAuth("dangaoxinxi","修改")),n=t.isAuthFront("dangaoxinxi","修改"),a=t.isAuth("dangaoxinxi","删除"),s=t.isAuthFront("dangaoxinxi","删除"),r=t.__map(t.list,(function(e,i){var n=t.preHttp(e.fengmian),a=e.fengmian.split(","),s=e.fengmian.split(",");return{$orig:t.__get_orig(e),m0:n,g0:a,g1:s}})),o=t.isAuth("dangaoxinxi","新增"),c=t.isAuthFront("dangaoxinxi","新增");t.$mp.data=Object.assign({},{$root:{m1:i,m2:n,m3:a,m4:s,l0:r,m5:o,m6:c}})},s=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}))},6776:function(t,e,i){"use strict";(function(t){i("6cdc"),i("921b");n(i("66fd"));var e=n(i("ed1e"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},a69b:function(t,e,i){"use strict";i.r(e);var n=i("277d"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},c0f6:function(t,e,i){"use strict";var n=i("f34d"),a=i.n(n);a.a},ed1e:function(t,e,i){"use strict";i.r(e);var n=i("57af"),a=i("a69b");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("c0f6");var r,o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"8c375888",null,!1,n["a"],r);e["default"]=c.exports},f34d:function(t,e,i){}},[["6776","common/runtime","common/vendor"]]]);