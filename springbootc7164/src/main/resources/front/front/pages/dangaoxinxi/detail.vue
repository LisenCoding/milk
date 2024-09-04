
<template>
<view>
<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
	<view class="content">
		<view class="container" :style='{"minHeight":"100vh","width":"100%","padding":"0px 0 132rpx","position":"relative","background":"#fff","height":"auto"}'>
						<swiper :style='{"border":"0px dotted #f7de91","boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"40rpx 0 80rpx ","margin":"0px auto","borderColor":"#fb9a40","borderRadius":"0px","background":"#fff","borderWidth":"0 0 0px","width":"calc(100% - 0px)","borderStyle":"solid","height":"640rpx"}' class="swiper" :indicator-dots='false' :autoplay='true' :circular='false' indicator-active-color='#000000' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='5000' :vertical='false'>
				<swiper-item :style='{"width":"100%","borderRadius":"0","background":"none","height":"640rpx"}' v-for="(swiper,index) in swiperList" :key="index">
					<image :style='{"width":"calc(100% - 40rpx)","margin":"0px auto","objectFit":"cover","borderRadius":"0px","display":"block","height":"640rpx"}' mode="aspectFill" v-if="swiper.substring(0,4)=='http'" :src="swiper"></image>
					<image :style='{"width":"calc(100% - 40rpx)","margin":"0px auto","objectFit":"cover","borderRadius":"0px","display":"block","height":"640rpx"}' mode="aspectFill" v-else :src="baseUrl+swiper"></image>
				</swiper-item>
			</swiper>
									            <view :style='{"padding":"0px 24rpx 24rpx","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}' class="detail-content">
				<view :style='{"padding":"0px 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"40rpx 0 24rpx 0","borderColor":"#e9be70","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"space-between","height":"88rpx"}' class="detail-list-item price priceFavor">
					<view :style='{"margin":"0","display":"flex"}' class="text">
						<view :style='{"color":"#f00","fontSize":"48rpx","lineHeight":"88rpx"}'>￥</view>
						<view :style='{"margin":"0px 0 0","fontSize":"32rpx","lineHeight":"88rpx","color":"#f00"}'>{{detail.price}}</view>
					</view>
					<view :style='{"border":"2rpx solid #e9be70","boxShadow":"0px 0px 0px #ccc","margin":"12rpx 12rpx 0","color":"#fec55d","textAlign":"center","display":"block","borderRadius":"100%","background":"none","width":"64rpx","lineHeight":"56rpx","fontSize":"48rpx","textShadow":"0px 0px 0px #ccc","height":"64rpx"}' v-if="storeupFlag==1" class="cuIcon-favorfill" @click="shoucang"></view>
					<view :style='{"border":"2rpx solid #e9be70","boxShadow":"0px 0px 0px #ccc","margin":"12rpx 12rpx 0","color":"#fec55d","textAlign":"center","display":"block","borderRadius":"100%","background":"none","width":"64rpx","lineHeight":"56rpx","fontSize":"48rpx","textShadow":"0px 0px 0px #ccc","height":"64rpx"}' v-if="storeupFlag==0" class="cuIcon-favor" @click="shoucang"></view>
				</view>
				<view :style='{"padding":"0px 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"40rpx 0 24rpx 0","borderColor":"#e9be70","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"space-between","height":"88rpx"}' class="detail-list-item price priceFavor">
					<view :style='{"margin":"0","display":"flex"}' class="text">
						<view :style='{"margin":"0px 0 0","fontSize":"32rpx","lineHeight":"88rpx","color":"#f00"}'>{{Number(detail.jf)}}积分</view>
					</view>
				</view>

				<view :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"12rpx 20rpx 12rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"padding":"0 20rpx 0 0","borderColor":"#ebc7ab","color":"#844819","textAlign":"left","borderWidth":"0 0 2rpx","width":"100%","lineHeight":"68rpx","fontSize":"32rpx","borderStyle":"dashed","fontWeight":"500"}' class="lable">牛奶名称：</view>
					<view :style='{"width":"100%","padding":"12rpx 20rpx 20rpx 0","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}' class="text">{{detail.dangaomingcheng}}</view>
				</view>
				<view :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"12rpx 20rpx 12rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"padding":"0 20rpx 0 0","borderColor":"#ebc7ab","color":"#844819","textAlign":"left","borderWidth":"0 0 2rpx","width":"100%","lineHeight":"68rpx","fontSize":"32rpx","borderStyle":"dashed","fontWeight":"500"}' class="lable">牛奶分类：</view>
					<view :style='{"width":"100%","padding":"12rpx 20rpx 20rpx 0","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}' class="text">{{detail.dangaofenlei}}</view>
				</view>
				<view :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"12rpx 20rpx 12rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"padding":"0 20rpx 0 0","borderColor":"#ebc7ab","color":"#844819","textAlign":"left","borderWidth":"0 0 2rpx","width":"100%","lineHeight":"68rpx","fontSize":"32rpx","borderStyle":"dashed","fontWeight":"500"}' class="lable">口味：</view>
					<view :style='{"width":"100%","padding":"12rpx 20rpx 20rpx 0","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}' class="text">{{detail.kouwei}}</view>
				</view>

				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"12rpx 20rpx 12rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","borderColor":"#ebc7ab","color":"#844819","textAlign":"left","borderWidth":"0 0 2rpx","width":"100%","lineHeight":"68rpx","fontSize":"32rpx","borderStyle":"dashed","fontWeight":"500"}'>颜色：</view>
					<view  class="text" :style='{"width":"100%","padding":"12rpx 20rpx 20rpx 0","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.yanse}}</view>
				</view>
				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"12rpx 20rpx 12rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","borderColor":"#ebc7ab","color":"#844819","textAlign":"left","borderWidth":"0 0 2rpx","width":"100%","lineHeight":"68rpx","fontSize":"32rpx","borderStyle":"dashed","fontWeight":"500"}'>牛奶容量：</view>
					<view  class="text" :style='{"width":"100%","padding":"12rpx 20rpx 20rpx 0","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.dangaochicun}}</view>
				</view>
				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"12rpx 20rpx 12rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","borderColor":"#ebc7ab","color":"#844819","textAlign":"left","borderWidth":"0 0 2rpx","width":"100%","lineHeight":"68rpx","fontSize":"32rpx","borderStyle":"dashed","fontWeight":"500"}'>上架日期：</view>
					<view  class="text" :style='{"width":"100%","padding":"12rpx 20rpx 20rpx 0","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.shangjiariqi}}</view>
				</view>
				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"12rpx 20rpx 12rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","borderColor":"#ebc7ab","color":"#844819","textAlign":"left","borderWidth":"0 0 2rpx","width":"100%","lineHeight":"68rpx","fontSize":"32rpx","borderStyle":"dashed","fontWeight":"500"}'>点击次数：</view>
					<view  class="text" :style='{"width":"100%","padding":"12rpx 20rpx 20rpx 0","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.clicknum}}</view>
				</view>



				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"12rpx 20rpx 12rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","borderColor":"#ebc7ab","color":"#844819","textAlign":"left","borderWidth":"0 0 2rpx","width":"100%","lineHeight":"68rpx","fontSize":"32rpx","borderStyle":"dashed","fontWeight":"500"}'>装饰品</view>
					<view class="text" :style='{"width":"100%","padding":"12rpx 20rpx 20rpx 0","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.zhuangshipin}}</view>
				</view>


				<view class="detail-list-item rich" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"24rpx 24rpx","margin":"0 0 24rpx 0","borderColor":"#e9be70","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","color":"#844819","textAlign":"left","width":"100%","lineHeight":"1.5","fontSize":"32rpx","fontWeight":"500"}'>牛奶详情</view>
					<view class="rich-text" :style='{"minHeight":"240rpx","border":"0px solid #f7de91","padding":"8rpx 20rpx 0 0","boxShadow":"0 0px 0px rgba(182,158,18,.4),inset 0px 0px 0px 0px #fcf6d6","margin":"0","borderRadius":"0px","background":"none","width":"calc(100% - 8rpx)","lineHeight":"1.5","textIndent":"2em"}'>
						<rich-text :nodes="detail.dangaoxiangqing"></rich-text>
					</view>
				</view>


				<view class="time-content" :style='{"width":"100%","margin":"0 0 24rpx 0","height":"auto"}'>
					<view class="comoment-header" :style='{"border":"0px solid #fdd802","boxShadow":"inset 0px 0px 0px 0px #fcf3bf","padding":"0px 0 64rpx","margin":"0px","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20230302/770771c71a4846599594589b613f6ff3.png) no-repeat center bottom","display":"flex","width":"calc(100% + 0px)","justifyContent":"space-between","height":"auto"}'>
						<view :style='{"padding":"0px 20rpx","lineHeight":"104rpx","fontSize":"32rpx","color":"#333","fontWeight":"600"}'>评论</view>
						<view :style='{"border":"0px solid #64b7ea","padding":"0 0px 0 0px","margin":"24rpx 12rpx 12rpx ","borderRadius":"0px","background":"rgba(255,255,255,.0)","display":"flex"}' @click="onCommentTap" class="btn-comment-content" style="display: flex;align-items: center;">
							<view :style='{"margin":"0px 8rpx 0","lineHeight":"60rpx","fontSize":"32rpx","color":"#333"}' class="cuIcon-add"></view>
							<view :style='{"margin":"0px 0 0","lineHeight":"60rpx","fontSize":"30rpx","color":"#333"}'>添加评论</view>
						</view>
					</view>
				
					<view :style='{"padding":"24rpx 24rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"32rpx 0 32rpx","borderColor":"#e9be70","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3","borderWidth":"0px","width":"100%","borderStyle":"solid","height":"auto"}' v-for="(item,index) in commentList" v-bind:key="index" class="cu-item comment-item">
						<view :style='{"width":"100%","display":"flex","height":"auto"}'>
							<image :style='{"width":"60rpx","margin":"0 8rpx 0 0","borderRadius":"100%","display":"block","height":"60rpx"}' v-if="item.avatarurl" mode="aspectFill" :src="baseUrl+item.avatarurl"></image>
							<view :style='{"color":"#333","lineHeight":"60rpx","fontSize":"28rpx"}' class="text-grey">{{item.nickname}}</view>
						</view>
						<view :style='{"margin":"8rpx 0","lineHeight":"1.5","fontSize":"28rpx","color":"#666","textIndent":"2em"}' class="text-gray text-content text-df">
							{{item.content}}
						</view>
						<view :style='{"lineHeight":"24rpx","fontSize":"24rpx","color":"#666","textAlign":"right"}' class="margin-top-sm text-gray text-df">{{item.addtime}}</view>
						<view v-if="item.reply" :style='{"margin":"8rpx 0","lineHeight":"1.5","fontSize":"28rpx","color":"#666","textIndent":"2em"}' class="text-gray text-content text-df">
							回复:{{item.reply}}
						</view>
					</view>
				</view>

				<view class="bottom-content bg-white tabbar border shop" :style='{"width":"100%","padding":"20rpx 0px","flexWrap":"wrap","background":"none","display":"flex","height":"auto"}'>

					<button :style='{"border":"0","padding":"0 20rpx","margin":"0","color":"rgb(255, 255, 255)","background":"rgb(255, 170, 51)","width":"auto","fontSize":"28rpx","height":"80rpx"}'  @tap="onCartTap" class="cu-btn bg-orange round shadow-blur" >加入购物车</button>
					<button :style='{"border":"0","padding":"0 20rpx","margin":"0","color":"rgb(255, 255, 255)","background":"rgb(255, 170, 51)","width":"auto","fontSize":"28rpx","height":"80rpx"}'  @tap="onBuyTap">立即购买</button>
					<button :style='{"border":"0","padding":"0 20rpx","margin":"0","color":"rgb(255, 255, 255)","background":"rgb(255, 170, 51)","width":"auto","fontSize":"28rpx","height":"80rpx"}'  @tap="onJifenTap">积分兑换</button>
				</view>
			</view>

		</view>
	</view>
</mescroll-uni>
</view>
</template>

<script>
	export default {
		data() {
			return {
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				id: '',
                userid: '',
				detail: {},
				swiperList: [],
				commentList: [],
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 3, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				user: {},
				storeupFlag: 0,
				count: 0,
				timer: null
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
		async onLoad(options) {
			this.id = options.id;
            if(options.userid) {
                this.userid = options.userid;
            }
		},
        onUnload() {
            if(this.timer!=null) {
                clearInterval(this.timer);
            }
        },
		async onShow(options) {
			// 渲染数据
			this.init();
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			this.btnColor = this.btnColor.sort(()=> {
				return (0.5-Math.random());
			});
			this.getStoreup();
			let cleanType = uni.getStorageSync('discussdangaoxinxiCleanType')
			if(cleanType){
				uni.removeStorageSync('discussdangaoxinxiCleanType')
				this.mescroll.num = 1
				this.upCallback(this.mescroll)
			}
		},
		destroyed: function() {
			//window.clearInterval(this.inter);
		},
		methods: {
			// 支付
			onPayTap(){
				uni.setStorageSync('paytable','dangaoxinxi');
				uni.setStorageSync('payObject',this.detail);
				this.$utils.jump('../pay-confirm/pay-confirm?type=1')
			},
            onDetailTap(item) {
                uni.setStorageSync("useridTag",this.userid);
                this.$utils.jump(`./detail?id=${item.id}&userid=`+this.userid)
            },
			// 收藏
			async getStoreup() {
				let params = {
					page: 1,
					limit: 1,
					refid : this.id,
					tablename : 'dangaoxinxi',
					userid: this.user.id,
					type: 1,
				}
				let res = await this.$api.list(`storeup`, params);
				this.storeupFlag = res.data.list.length;
			},
			async shoucang(){
				let _this = this;
				let params = {
					page: 1,
					limit: 1,
					refid : _this.detail.id,
					tablename : 'dangaoxinxi',
					userid: _this.user.id,
					type: 1,
				}
				let res = await _this.$api.list(`storeup`, params);
				if (res.data.list.length == 1) {
					let storeupId = res.data.list[0].id;
					uni.showModal({
						title: '提示',
						content: '是否取消',
						success: async function(res) {
							if (res.confirm) {
								await _this.$api.del('storeup', JSON.stringify([storeupId]));
								_this.$utils.msg('取消成功');
								_this.getStoreup();
							}
						}
					});
					return;
				}
				uni.showModal({
					title: '提示',
					content: '是否收藏',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.add('storeup', {
								userid: _this.user.id,
								name: _this.detail.dangaomingcheng,
								picture: _this.swiperList[0],
								refid: _this.detail.id,
								tablename: 'dangaoxinxi',
                                type: 1
							});
							_this.$utils.msg('收藏成功');
							_this.getStoreup();
						}
					}
				});
			},
			// 跨表
			onAcrossTap(tableName,crossOptAudit,statusColumnName,tips,statusColumnValue){
				uni.setStorageSync('crossTable','dangaoxinxi');
				uni.setStorageSync(`crossObj`, this.detail);
				uni.setStorageSync(`statusColumnName`, statusColumnName);
				uni.setStorageSync(`statusColumnValue`, statusColumnValue);
				uni.setStorageSync(`tips`, tips);
				if(statusColumnName!=''&&!statusColumnName.startsWith("[")) {
					var obj = uni.getStorageSync('crossObj');
					for (var o in obj){
						if(o==statusColumnName && obj[o]==statusColumnValue){
							this.$utils.msg(tips);
							return
						}
					}
				}
				this.$utils.jump(`../${tableName}/add-or-update?cross=true`);
			},
			// 获取详情
			async init(){
				let res = await this.$api.info('dangaoxinxi', this.id);
				this.detail = res.data;
				// 轮播图片
				this.swiperList = this.detail.fengmian ? this.detail.fengmian.split(",") : [];
				//修改富文本的图片样式
				this.detail.dangaoxiangqing = this.detail.dangaoxiangqing.replace(/img src/gi,"img style=\"width:100%;\" src");
			},

			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},

			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				mescroll.resetUpScroll()
			},

			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
                let res = await this.$api.list('discussdangaoxinxi', {
					page: mescroll.num,
					limit: 10,
					refid: this.id
				});
				// 如果是第一页数据置空
				if (mescroll.num == 1) this.commentList = [];
				this.commentList = this.commentList.concat(res.data.list);
				if (res.data.list.length == 0) this.hasNext = false;
				mescroll.endSuccess(mescroll.size, this.hasNext);

            },

            async onCartTap() {
				if (uni.getStorageSync(`cart${this.detail.id}${this.user.id}`)) {
					this.$utils.msg('该商品已添加到购物车')
					return
				}
				await this.$api.add('cart', {
					tablename: 'dangaoxinxi',
					goodid: this.detail.id,
					goodname: this.detail.dangaomingcheng,
					picture: this.swiperList[0],
					buynumber: 1,
					userid: this.user.id,
					price: this.detail.price,
					discountprice: this.detail.vipprice
				});
				uni.setStorageSync(`cart${this.detail.id}${this.user.id}`, true);
				this.$utils.msg('添加到购物车成功')
			},
            onBuyTap() {
				uni.setStorageSync('orderGoods', [{
					tablename: 'dangaoxinxi',
					goodid: this.detail.id,
					goodname: this.detail.dangaomingcheng,
					picture: this.swiperList[0],
					buynumber: 1,
					price: this.detail.price,
					discountprice: this.detail.vipprice
				}])
				this.$utils.jump('../shop-order-confirm/shop-order-confirm?type=1');
			},


			// 积分兑换
			onJifenTap(){
				uni.setStorageSync('orderGoods', [{
					tablename: 'dangaoxinxi',
					goodid: this.detail.id,
					goodname: this.detail.dangaomingcheng,
					picture: this.swiperList[0],
					buynumber: 1,
					price: this.detail.jf,
					discountprice: this.detail.vipprice
				}])
				this.$utils.jump('../shop-order-confirm/shop-order-confirm?type=2');
			},
			onChatTap() {
				this.$utils.jump('../chat/chat')
			},
			// 下载
			download(url){
				let _this = this;
				url=_this.$base.url +  url;
				uni.downloadFile({
					url: url,
					success: (res) => {
						if (res.statusCode === 200) {
							_this.$utils.msg('下载成功');
							 window.open(url);
						}
					}
				});
			},
			//
			onCartTabTap() {
				this.$utils.tab('../shop-cart/shop-cart')
			},
			// 添加评论
			async onCommentTap() {
                let params = {
                    page: 1,
                    limit: 1,
					status: '已完成',
					goodid: this.detail.id
                }
                let res = await this.$api.page('orders', params);
                if (res.data.list.length == 0) {
                this.$utils.msg('请完成订单后再评论');
					return;
				}
				this.$utils.jump(`../discussdangaoxinxi/add-or-update?refid=${this.id}`)
			},
			onSHTap() {
				this.$refs.popup.open()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	
	.seat-list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		background: #FFFFFF;
		margin: 20upx;
		border-radius: 20upx;
		padding: 20upx;
		font-size: 30upx;
		.seat-item {
			width: 33.33%;
			display: flex;
			align-items: center;
			flex-direction: column;
			margin-bottom: 20upx;
	
			.seat-icon {
				width: 50upx;
				height: 50upx;
				margin-bottom: 10upx;
			}
		}
	}
	
	audio {
		display: flex;
		flex-direction: column;
	}
	
	.audio /deep/ .uni-audio-default {
		width: inherit;
	}
</style>
