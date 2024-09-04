<template>
<view class="content">
	<view :style='{"minHeight":"100vh","width":"100%","padding":"0px","background":"url() fixed","height":"auto"}'>
		<swiper :style='{"padding":"0px ","boxShadow":"inset 0px 0px 0px 0px #f4ead8","borderColor":"#d7a37a","outline":"0px solid #bbb","margin":"0px","borderRadius":"0px","background":"#fff","borderWidth":"0px","width":"calc(100% - 0px)","borderStyle":"solid","height":"480rpx"}' class="swiper" :indicator-dots='false' :autoplay='true' :circular='false' indicator-active-color='#000000' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='5000' :vertical='false'>
			<swiper-item :style='{"width":"calc(100% - 40rpx)","margin":"0 auto","position":"relative","borderRadius":"0px","background":"none","height":"480rpx"}' v-for="(swiper,index) in swiperList" :key="index" @tap="onSwiperTap(swiper)">
				<image :style='{"width":"calc(100% - 40rpx)","margin":"16rpx auto","objectFit":"cover","borderRadius":"0px","display":"block","height":"480rpx"}' mode="aspectFill" :src="baseUrl+swiper.img"></image>
				<view v-if="false" :style='{"padding":"0 20rpx 32rpx","color":"#333","left":"20rpx","textAlign":"center","background":"rgba(255,255,255,.6)","bottom":"0px","width":"calc(100% - 40rpx)","lineHeight":"60rpx","fontSize":"28rpx","position":"absolute"}'>{{ swiper.title }}</view>
			</swiper-item>
		</swiper>


		<!-- menu -->
		<view v-if="true" class="menu" :style='{"padding":"40rpx 0","boxShadow":"inset 0px 0px 0px 0px #87acf1","margin":"48rpx auto","borderColor":"#21d5ae","display":"flex","outline":"0px solid #ccc","borderRadius":"0px","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230303/01fc5f3bf41b4368aa05e9891b5ca609.png) no-repeat right bottom,url(http://codegen.caihongy.cn/20230303/3ab221ecddcb412ca9e4958a389052cc.png) no-repeat left top","borderWidth":"0px","width":"calc(100% - 40rpx)","borderStyle":"dashed dashed dashed dashed","height":"auto"}'>
            <block v-for="item in menuList" v-bind:key="item.roleName">
                <block v-if="role==item.roleName" v-bind:key="index" v-for=" (menu,index) in item.frontMenu">
                    <block v-bind:key="sort" v-for=" (child,sort) in menu.child">
                        <block v-bind:key="sort2" v-for=" (button,sort2) in child.buttons">
                            <view :style='{"width":"25%","padding":"20rpx 0","margin":"0","borderRadius":"100%","background":"none","height":"auto"}' class="menu-list" v-if="button=='查看' && child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' " @tap="onPageTap2('../'+child.tableName+'/list')">
                                <view class="iconarr" :class="child.appFrontIcon" :style='{"padding":"0px","margin":"0px auto","color":"#844819","borderRadius":"100%","background":"none","display":"block","width":"64rpx","lineHeight":"64rpx","fontSize":"64rpx","height":"64rpx"}'></view>
                                <view :style='{"padding":"0","margin":"12rpx auto 0","color":"#b57a4c","textAlign":"center","width":"100%","lineHeight":"28rpx","fontSize":"28rpx"}'>{{child.menu.split("列表")[0]}}</view>
                            </view>
                        </block>
                    </block>
                </block>
            </block>
		</view>
		<!-- menu -->
		
		

		<!-- 商品推荐 -->
		<view class="listBox recommend">
			<view v-if="false && 1 == 1" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<view class="title" :style='{"padding":"0px 0 64rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.1)","margin":"80rpx auto 40rpx","overflow":"hidden","borderRadius":"0","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230302/770771c71a4846599594589b613f6ff3.png) no-repeat center bottom","width":"calc(90% - 0px)","lineHeight":"104rpx","height":"auto"}'>
				<view :style='{"padding":"0 100rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","margin":"0","color":"#333","textAlign":"center","display":"inline-block","borderRadius":"0","background":"none","width":"auto","fontSize":"32rpx","lineHeight":"80rpx","fontWeight":"600","height":"80rpx"}'>牛奶信息推荐</view>
			</view>
			
			<view v-if="false && 1 == 2" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			
			
			<!-- 样式3 -->
			<view class="list-box style3" :style='{"width":"100%","padding":"24rpx","margin":"0","background":"none","height":"auto"}'>
				<view @tap="onDetailTap('dangaoxinxi',product.id)" v-for="(product,index) in dangaoxinxilist" :key="index" class="list-item" :style='{"border":"2rpx solid #f5eae2","padding":"20rpx 20rpx","margin":"0 0 40rpx","borderRadius":"0px","alignItems":"center","flexWrap":"wrap","background":"#fffcf3","display":"flex","width":"100%","height":"auto"}'>
					<image :style='{"border":"0px solid #d7a37b","padding":"8rpx","objectFit":"cover","borderRadius":"16rpx","display":"block","width":"240rpx","height":"240rpx"}' class="list-item-image" mode="aspectFill" v-if="product.fengmian.substring(0,4)=='http'" :src="product.fengmian"></image>
					<image :style='{"border":"0px solid #d7a37b","padding":"8rpx","objectFit":"cover","borderRadius":"16rpx","display":"block","width":"240rpx","height":"240rpx"}' class="list-item-image" mode="aspectFill" v-else :src="product.fengmian?baseUrl+product.fengmian.split(',')[0]:''"></image>
					<view class="list-item-body" :style='{"padding":"0","margin":"0","borderColor":"#d7a37a","borderWidth":"0px","width":"calc(100% - 240rpx)","borderStyle":"solid","height":"auto"}'>
						<view :style='{"padding":"0 0 24rpx 20rpx","margin":"0 20rpx 20rpx","whiteSpace":"nowrap","overflow":"hidden","color":"#844819","background":"url(http://codegen.caihongy.cn/20230302/6ffcd3c987ab4547a30d111aa747acc7.png) no-repeat left bottom","width":"calc(100% - 40rpx)","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis","fontWeight":"600"}' class="list-item-title">牛奶名称:{{product.dangaomingcheng}}</view>
						<view :style='{"padding":"0 0 24rpx 20rpx","margin":"0 20rpx 20rpx","whiteSpace":"nowrap","overflow":"hidden","color":"#844819","background":"url(http://codegen.caihongy.cn/20230302/6ffcd3c987ab4547a30d111aa747acc7.png) no-repeat left bottom","width":"calc(100% - 40rpx)","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis","fontWeight":"600"}' class="list-item-title">牛奶分类:{{product.dangaofenlei}}</view>
						<view :style='{"padding":"0 0 24rpx 20rpx","margin":"0 20rpx 20rpx","whiteSpace":"nowrap","overflow":"hidden","color":"#844819","background":"url(http://codegen.caihongy.cn/20230302/6ffcd3c987ab4547a30d111aa747acc7.png) no-repeat left bottom","width":"calc(100% - 40rpx)","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis","fontWeight":"600"}' class="list-item-title">口味:{{product.kouwei}}</view>
						<view :style='{"padding":"0 20rpx","margin":"0","color":"red","textAlign":"right","width":"100%","lineHeight":"48rpx","fontSize":"28rpx"}' class="list-item-pirce">￥{{product.price}}</view>
					</view>
				</view>
			</view>
			
			  
			
			
			  
			
			  
			<view v-if="false && 1 == 3" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
		<!-- 商品推荐 -->
		

		<!-- 新闻资讯 -->
																																						<view class="listBox news">
			<view v-if="false && 1 == 1" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<view class="title" :style='{"padding":"0px 0 64rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.1)","margin":"0px auto 0px","overflow":"hidden","borderRadius":"0","background":"url(http://codegen.caihongy.cn/20230302/770771c71a4846599594589b613f6ff3.png) no-repeat center bottom","display":"flex","width":"calc(100% - 40rpx)","lineHeight":"104rpx","position":"relative","justifyContent":"space-between","height":"auto"}'>
				<view :style='{"padding":"0","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","margin":"0px auto 0","color":"#333","textAlign":"center","display":"inline-block","minWidth":"240rpx","borderRadius":"0px","background":"none","width":"calc(100% - 200rpx)","fontSize":"32rpx","lineHeight":"104rpx","fontWeight":"600","height":"104rpx"}'>反馈信息</view>
				<text :style='{"padding":"0 20rpx 0 0","margin":"0px 0px 0 0","color":"#555","background":"none","fontSize":"28rpx","position":"absolute","right":"20rpx"}' @tap="onPageTap('news')">查看更多</text>
			</view>
			
			<view v-if="false && 1 == 2" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
					  
						
						
		  <!-- 样式4 -->
		  		  
		  <!-- 样式5 -->
		  		  
		  <!-- 样式6 -->
		  		  
		  <!-- 样式7 -->
		  		  
		  <!-- 样式8 -->
		  		  
		  <!-- 样式9 -->
		  		  <view class="news-box6" :style='{"width":"100%","padding":"24rpx","margin":"20rpx 0 0","height":"auto"}'>
			<view @tap="onNewsDetailTap(item.id)" v-for="(item,index) in news" :key="index" class="list-item" :style='{"padding":"20rpx 20rpx 20rpx 100rpx","margin":"0 0 40rpx","borderColor":"#ebc7ab","background":"#fffcf3","borderWidth":"0 0 2rpx","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
			  <view :style='{"padding":"0","margin":"-36rpx 0 0 0","borderColor":"#d7a37a","color":"#d7a37a","textAlign":"center","borderRadius":"100%","top":"50%","left":"20rpx","borderWidth":"2rpx","width":"72rpx","lineHeight":"68rpx","fontSize":"28rpx","position":"absolute","borderStyle":"solid","height":"72rpx"}' class="num">
			    <view style="width: 100%;height: 100%;position: absolute;left: 0;top: 0;" :style="{transform: 'rotate('+(-index*60)+'deg)'}" class="dian">
			      <view :style='{"transform":"translateX(-50%)","borderRadius":"100%","top":"-8rpx","left":"50%","background":"red","display":"none","width":"16rpx","position":"absolute","height":"16rpx"}'></view>
			    </view>{{ index + 1 < 10 ? '0'+(index+1) : index+1 }}
			  </view>
			  <view class="item-list-body" :style='{"width":"100%","margin":"0","height":"auto"}'>
				<view :style='{"padding":"4rpx 20rpx","whiteSpace":"nowrap","overflow":"hidden","color":"#844819","width":"100%","lineHeight":"1.4","fontSize":"28rpx","textOverflow":"ellipsis","fontWeight":"600"}' class="title ">{{item.title}}</view>
				<view :style='{"padding":"4rpx 20rpx","overflow":"hidden","color":"#985f31","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textIndent":"2em","height":"96rpx"}' class="desc ">{{item.introduction}}</view>
			  </view>
			</view>
		  </view>
		  			
			<view v-if="false && 1 == 3" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
										<!-- 新闻资讯 -->
				

		<!-- 商品列表 -->
																																												<!-- 商品列表 -->
		
		

	</view>
</view>
</template>

<script>
    import menu from '@/utils/menu'
	import '@/assets/css/global-restaurant.css'
	import uniIcons from "@/components/uni-ui/lib/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				options2: {
					effect: 'flip',
					loop : true
				},
				options3: {
					effect: 'cube',
					loop : true,
					cubeEffect: {
						shadow: true,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.94,
					}
				},
				rows: 2,
				column: 4,
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
                role : '',
                menuList: [],
                swiperMenuList:[],
                user: {},
                tableName:'',

				//轮播
				swiperList: [],
				dangaoxinxilist: [],
				news: [],
			}
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
            this.menuList.forEach((item,key) => {
                if(this.role==item.roleName) {
                    item.frontMenu.forEach((item2,key2) => {
                        if(item2.child[0].buttons.indexOf("查看")>-1) {
                            this.swiperMenuList.push(item2);
                        }
                    })
                }
            })
        },
		async onShow() {
            let res;
			// 轮播图
			let swiperList = []
			res = await this.$api.page('config', {
				page: 1,
				limit: 5
			});
			for (let item of res.data.list) {
				if (item.name.indexOf('picture') >= 0 && item.value && item.value!="" && item.value!=null ) {
					swiperList.push({
						img: item.value,
                        title: item.name
					});
				}
			}
			if (swiperList) {
				this.swiperList = swiperList;
			}
			// 反馈信息
			res = await this.$api.list('news', {
				page: 1,
				limit: 6
			});
			this.news = res.data.list

			// 推荐信息
			res = await this.$api.recommend('dangaoxinxi', {                                              
                page: 1,
                limit: 4
            });
			this.dangaoxinxilist = res.data.list

		},

		methods: {

			//轮播图跳转
			onSwiperTap(e) {

			},
			// 新闻详情
			onNewsDetailTap(id) {
				this.$utils.jump(`../news-detail/news-detail?id=${id}`)
			},
			// 推荐列表点击详情
			onDetailTap(tableName, id) {
				this.$utils.jump(`../${tableName}/detail?id=${id}`)
			},
			onPageTap(tableName){

				uni.navigateTo({
					url: `../${tableName}/list`,
					fail: function(){
						uni.switchTab({
							url: `../${tableName}/list`
						});
					}
				});
				// this.$utils.jump(`../${tableName}/list`)
			},
            onPageTap2(url) {
                uni.setStorageSync("useridTag",0);
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
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
