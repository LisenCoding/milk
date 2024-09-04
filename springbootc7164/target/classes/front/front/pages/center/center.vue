<template>
	<view class="content">
		<view :style='{"minHeight":"100vh","padding":"0px 0 80rpx","borderColor":"#21d5ae","flexWrap":"wrap","background":"url() fixed,#fff","borderWidth":"0px 0 0","display":"block","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
			<view :style='{"padding":"40rpx 40rpx 120rpx","boxShadow":"inset 0px 0px 0px 0px #f7dcab","margin":"0px auto 60rpx","borderColor":"#ebcbb0","display":"flex","justifyContent":"space-between","borderRadius":"0","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230303/33a4ba93b8034fa0ab358f17dbb48557.png) no-repeat left bottom / 100% auto","borderWidth":"0px 0px 12rpx","width":"calc(100% - 0px)","position":"relative","borderStyle":"solid","height":"auto"}' @tap="onPageTap('../user-info/user-info')" class="header" v-bind:class="{'status':isH5Plus}">
				<view :style='{"padding":"0","margin":"0","alignItems":"flex-start","flexWrap":"wrap","background":"none","display":"flex","width":"calc(100% - 200rpx)","position":"static","height":"auto"}' v-if="tableName=='yonghu'" class="userinfo">
					<view :style='{"padding":"20rpx 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 auto","borderColor":"#fbd341","flexDirection":"column","display":"flex","float":"left","justifyContent":"center","minHeight":"344rpx","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20230303/59b9cbaed4324ba591b52fba2010039c.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/78c965ad97b64e039aea5b91ed84582b.png) no-repeat right bottom,#fffcf3","borderWidth":"0px","width":"100%","borderStyle":"solid","height":"auto"}' class="info">
						<view :style='{"padding":"4rpx 8rpx","borderColor":"#ccc","margin":"0 0 0px","color":"#333","borderWidth":"0 0 2rpx","width":"90%","lineHeight":"60rpx","fontSize":"28rpx","borderStyle":"dashed","fontWeight":"600"}'>{{user.yonghuming}}<text v-if="user.vip&& user.vip=='是'">(VIP)</text></view>
						<view :style='{"padding":"4rpx 8rpx","borderColor":"#ccc","margin":"0 0 0px","color":"#333","borderWidth":"0 0 2rpx","width":"90%","lineHeight":"60rpx","fontSize":"28rpx","borderStyle":"dashed"}' v-if="user.money">余额：{{user.money}}</view>
						<view :style='{"padding":"4rpx 8rpx","borderColor":"#ccc","margin":"0 0 0px","color":"#333","borderWidth":"0 0 2rpx","width":"90%","lineHeight":"60rpx","fontSize":"28rpx","borderStyle":"dashed"}' v-if="user.jf||user.jf==0">积分：{{user.jf}}</view>
					</view>
				</view>
				<view :style='{"padding":"20rpx 0 0","margin":"200rpx 0 0","borderColor":"#1bd0a9","alignItems":"flex-start","background":"none","borderWidth":"0px","display":"flex","width":"160rpx","borderStyle":"solid","justifyContent":"center","height":"auto"}' class="setting">
					<view :style='{"border":"0","width":"72rpx","lineHeight":"72rpx","fontSize":"72rpx","color":"#333","borderRadius":"0"}' class="cuIcon-settings"></view>
				</view>
			</view>
		
		
			<view :style='{"padding":"0px 2% 0 0","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0px","borderColor":"#1bd0a9","display":"block","justifyContent":"space-between","borderRadius":"0px","flexWrap":"wrap","background":"none","borderWidth":"0px 0px 0px 0px","width":"calc(100% - 0px)","borderStyle":"solid","height":"auto"}' class="list">

				<block v-for="item in menuList" v-bind:key="item.roleName">
					<block v-if="role==item.roleName" v-bind:key="index" v-for=" (menu,index) in item.backMenu">
						<block v-bind:key="sort" v-for=" (child,sort) in menu.child">
							<view :style='{"padding":"0 24rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","borderColor":"#e9be70","margin":"0 auto 40rpx","alignItems":"center","display":"flex","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3","width":"90%","lineHeight":"100rpx","borderStyle":"solid","height":"100rpx"}' v-if="child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' && child.tableName!='exampaper' && child.tableName!='examquestion' " @tap="onPageTap('../'+child.tableName+'/list?userid='+user.id)" class="li" hover-class="hover">
								<view v-if="true" :style='{"width":"64rpx","lineHeight":"64rpx","fontSize":"56rpx","color":"#844819"}' :class="child.appFrontIcon"></view>
								<view :style='{"width":"100%","padding":"0 8rpx","lineHeight":"88rpx","fontSize":"28rpx","color":"#333","flex":"1"}' class="text">{{child.menu}}</view>
								<view v-if="true" :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#844819"}' class="cuIcon-right"></view>
							</view>
						</block>
					</block>
				</block>

				<view @tap="onPageTap('../shop-recharge/pay-confirm')" :style='{"padding":"0 24rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","borderColor":"#e9be70","margin":"0 auto 40rpx","alignItems":"center","display":"flex","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3","width":"90%","lineHeight":"100rpx","borderStyle":"solid","height":"100rpx"}' class="li" hover-class="hover">
					<view v-if="true" :style='{"width":"64rpx","lineHeight":"64rpx","fontSize":"56rpx","color":"#844819"}' class="cuIcon-moneybag"></view>
					<view class="text" :style='{"width":"100%","padding":"0 8rpx","lineHeight":"88rpx","fontSize":"28rpx","color":"#333","flex":"1"}'>用户充值</view>
					<view v-if="true" :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#844819"}' class="cuIcon-right"></view>
				</view>
				<view @tap="onPageTap('../shop-cart/shop-cart')" :style='{"padding":"0 24rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","borderColor":"#e9be70","margin":"0 auto 40rpx","alignItems":"center","display":"flex","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3","width":"90%","lineHeight":"100rpx","borderStyle":"solid","height":"100rpx"}' class="li" hover-class="hover">
					<view v-if="true" :style='{"width":"64rpx","lineHeight":"64rpx","fontSize":"56rpx","color":"#844819"}' class="cuIcon-cart"></view>
					<view class="text" :style='{"width":"100%","padding":"0 8rpx","lineHeight":"88rpx","fontSize":"28rpx","color":"#333","flex":"1"}'>购物车</view>
					<view v-if="true" :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#844819"}' class="cuIcon-right"></view>
				</view>
				<view @tap="onPageTap('../shop-order/shop-order')" :style='{"padding":"0 24rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","borderColor":"#e9be70","margin":"0 auto 40rpx","alignItems":"center","display":"flex","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3","width":"90%","lineHeight":"100rpx","borderStyle":"solid","height":"100rpx"}' class="li" hover-class="hover">
					<view v-if="true" :style='{"width":"64rpx","lineHeight":"64rpx","fontSize":"56rpx","color":"#844819"}' class="cuIcon-order"></view>
					<view class="text" :style='{"width":"100%","padding":"0 8rpx","lineHeight":"88rpx","fontSize":"28rpx","color":"#333","flex":"1"}'>我的订单</view>
					<view v-if="true" :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#844819"}' class="cuIcon-right"></view>
				</view>

			</view>
		</view>
	</view>
</template>
<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				isH5Plus: true,
				user: {},
				tableName:'',
				role: '',
				menuList: [],
        iconArr: [
          'cuIcon-same',
          'cuIcon-deliver',
          'cuIcon-evaluate',
          'cuIcon-shop',
          'cuIcon-ticket',
          'cuIcon-cascades',
          'cuIcon-discover',
          'cuIcon-question',
          'cuIcon-pic',
          'cuIcon-filter',
          'cuIcon-footprint',
          'cuIcon-pulldown',
          'cuIcon-pullup',
          'cuIcon-moreandroid',
          'cuIcon-refund',
          'cuIcon-qrcode',
          'cuIcon-remind',
          'cuIcon-profile',
          'cuIcon-home',
          'cuIcon-message',
          'cuIcon-link',
          'cuIcon-lock',
          'cuIcon-unlock',
          'cuIcon-vip',
          'cuIcon-weibo',
          'cuIcon-activity',
          'cuIcon-friendadd',
          'cuIcon-friendfamous',
          'cuIcon-friend',
          'cuIcon-goods',
          'cuIcon-selection'
        ],
			};
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad(){
			this.role = uni.getStorageSync("role");
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			this.tableName = table;
			let menus = menu.list();
			this.menuList = menus;
		},
		async onShow(){
            uni.removeStorageSync("useridTag");
			this.role = uni.getStorageSync("role");
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			this.tableName = table;
			let menus = menu.list();
			this.menuList = menus;
		},
		methods: {
			onPageTap(url) {
                uni.setStorageSync("useridTag",1);
				uni.navigateTo({
					url: url,
					fail: function() {
						uni.switchTab({
							url: url
						});
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: calc(100vh - 94px);
		box-sizing: border-box;
	}
</style>
