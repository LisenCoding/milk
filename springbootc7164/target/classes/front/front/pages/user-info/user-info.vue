<template>
<view class="content">
	<view class="box" :style='{"minHeight":"100vh","padding":"0px 0 0px","borderColor":"#21d5ae","background":"url() fixed,#fff","borderWidth":"0px 0 0","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
		<view :style='{"width":"100%","padding":"60rpx 40rpx","background":"none","display":"block","height":"auto"}'>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","alignItems":"center","display":"flex","minHeight":"88rpx","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"padding":"0 20rpx 0 0","color":"#844819","textAlign":"right","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","fontWeight":"600"}'>用户名</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' disabled="true"  v-model="ruleForm.yonghuming" placeholder="用户名"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","alignItems":"center","display":"flex","minHeight":"88rpx","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"padding":"0 20rpx 0 0","color":"#844819","textAlign":"right","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","fontWeight":"600"}'>姓名</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.xingming" placeholder="姓名"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","alignItems":"center","display":"flex","minHeight":"88rpx","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" @tap="yonghutouxiangTap" class="">
				<view class="title" :style='{"padding":"0 20rpx 0 0","color":"#844819","textAlign":"right","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","fontWeight":"600"}'>头像</view>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-if="ruleForm.touxiang" style="margin: 0;" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-else class="avator" style="margin: 0;" src="../../static/gen/upload.png" mode=""></image>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","alignItems":"center","display":"flex","minHeight":"88rpx","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"padding":"0 20rpx 0 0","color":"#844819","textAlign":"right","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","fontWeight":"600"}'>密码</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'  type="password" v-model="ruleForm.mima" placeholder="密码"></input>
			</view>
			<view v-if="tableName=='yonghu'" :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","alignItems":"center","display":"flex","minHeight":"88rpx","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"padding":"0 20rpx 0 0","color":"#844819","textAlign":"right","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","fontWeight":"600"}' class="title">性别</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}'  @change="yonghuxingbieChange" :value="yonghuxingbieIndex" :range="yonghuxingbieOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#666"}' class="uni-input picker-select-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","alignItems":"center","display":"flex","minHeight":"88rpx","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"padding":"0 20rpx 0 0","color":"#844819","textAlign":"right","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","fontWeight":"600"}'>手机</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.shouji" placeholder="手机"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","alignItems":"center","display":"flex","minHeight":"88rpx","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230303/adcda4c7311148a1913eb708c6fdebf0.png) no-repeat left top,url(http://codegen.caihongy.cn/20230303/41517a62f11849869c71aed71b75484e.png) no-repeat right bottom,#fffcf3","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"padding":"0 20rpx 0 0","color":"#844819","textAlign":"right","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","fontWeight":"600"}'>积分</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' disabled="true"  v-model="ruleForm.jf" placeholder="积分"></input>
			</view>
			<view :style='{"padding":"0px","margin":"48rpx 0 0","background":"none","display":"flex","width":"100%","justifyContent":"center","height":"auto"}' class="btn">
				<button @tap="update()" class="cu-btn lg" :style='{"padding":"0 40rpx","boxShadow":"0px 0px 0px #ccc","margin":"0 20rpx","borderColor":"#6dd5cb","color":"#fff","minWidth":"220rpx","borderRadius":"0px","background":"#ec9e69","borderWidth":"0px","width":"auto","lineHeight":"72rpx","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'>保存</button>
				<button @tap="logout()" class="cu-btn lg" :style='{"padding":"0 40rpx","boxShadow":"0px 0px 0px #ccc","margin":"0 20rpx","borderColor":"#ccc","color":"#fff","minWidth":"220rpx","borderRadius":"0px","background":"#999","borderWidth":"0px","width":"auto","lineHeight":"72rpx","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'>退出登录</button>
			</view>
		</view>
	</view>
</view>
</template>

<script>
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
				ruleForm: {
				},
				tableName:"",
				yonghuxingbieOptions: [],
				yonghuxingbieIndex: 0,
			}
		},
        components: {
            multipleSelect
        },
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad() {
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.ruleForm = res.data;
			this.tableName = table;
			// 自定义下拉框值
			if(this.tableName=='yonghu'){
				this.yonghuxingbieOptions = "男,女".split(',');
				this.yonghuxingbieOptions.forEach((item, index) => {
					if(item==this.ruleForm.xingbie) {
						this.yonghuxingbieIndex = index;
					}
				});
			}
			this.styleChange()
            this.$forceUpdate()
		},
		methods: {
			yonghutouxiangTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.touxiang = 'upload/' + res.file;
					_this.$forceUpdate();
				});
			},
            // 下拉变化
            yonghuxingbieChange(e) {
                    this.yonghuxingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.yonghuxingbieOptions[this.yonghuxingbieIndex]
            },

            toggleTab(str) {
                this.$refs[str].show();
            },

			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('. .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.userInfoForm.list.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			logout() {
				uni.setStorageSync('token', '');
				this.$utils.jump('../login/login');
			},
			// 注册
			async update() {
				if((!this.ruleForm.yonghuming) && `yonghu` == this.tableName){
					this.$utils.msg(`用户名不能为空`);
					return
				}
				if((!this.ruleForm.xingming) && `yonghu` == this.tableName){
					this.$utils.msg(`姓名不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `yonghu` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
				if(`yonghu` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
					this.$utils.msg(`手机应输入手机格式`);
					return
				}
				if(`yonghu` == this.tableName && this.ruleForm.jf&&(!this.$validate.isNumber(this.ruleForm.jf))){
					this.$utils.msg(`积分应输入数字`);
					return
				}
				if(`yonghu` == this.tableName && this.ruleForm.money&&(!this.$validate.isNumber(this.ruleForm.money))){
					this.$utils.msg(`余额应输入数字`);
					return
				}
				let table = uni.getStorageSync("nowTable");
				await this.$api.update(table, this.ruleForm);
				this.$utils.msgBack('修改成功');;
			},

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
