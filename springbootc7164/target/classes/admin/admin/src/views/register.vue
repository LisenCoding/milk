<template>
	<div>
		<div class="container" :style='{"minHeight":"100vh","padding":"120px 0","alignItems":"center","background":"url(http://codegen.caihongy.cn/20230220/fe8de165616e4a958fb1e289132234fa.jpg) no-repeat center bottom / 100% auto","display":"block","width":"100%","position":"relative","justifyContent":"center"}'>
			<el-form v-if="pageFlag=='register'" :style='{"padding":"40px 40px 40px","margin":"0 auto","borderColor":"#849acf","borderRadius":"10px","flexWrap":"wrap","background":"rgba(255,255,255,1)","borderWidth":"10px","display":"flex","width":"800px","borderStyle":"outset","justifyContent":"center","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm">
				<div v-if="true" :style='{"padding":"0 40px","margin":"0 0 30px 0","color":"#fff","textAlign":"center","overflow":"hidden","top":"0","left":"0","background":"url(http://codegen.caihongy.cn/20230220/93da8688dea64d828ade3cf330fa6af5.png) no-repeat left bottom / auto 100%,url(http://codegen.caihongy.cn/20230220/567a2d3b7488444c893461a5b89e87e8.png) no-repeat right bottom / auto 100%,#0d3084","width":"100%","lineHeight":"64px","fontSize":"24px","position":"absolute","height":"64px"}' class="title"> 牛奶订购小程序  注册</div>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"color":"#0d3084","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">用户名</div>
					<el-input  v-model="ruleForm.yonghuming"  autocomplete="off" placeholder="用户名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"color":"#0d3084","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">姓名</div>
					<el-input  v-model="ruleForm.xingming"  autocomplete="off" placeholder="姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"color":"#0d3084","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">头像</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="yonghutouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"color":"#0d3084","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">密码</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"color":"#0d3084","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">确认密码</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"color":"#0d3084","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">性别</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in yonghuxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"color":"#0d3084","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">手机</div>
					<el-input  v-model="ruleForm.shouji"  autocomplete="off" placeholder="手机"  type="text"  />
				</el-form-item>
				<button :style='{"border":"0px solid #f4ca93","cursor":"pointer","padding":"0","margin":"0 auto","borderColor":"#fff","color":"#fff","bottom":"0","display":"block","letterSpacing":"4px","minWidth":"150px","right":"0","outline":"none","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20230220/58c97d1b7dcd474d8bb0e0aaf358fc33.png) no-repeat left bottom / auto 100%,url(http://codegen.caihongy.cn/20230220/593adc3e479e4050bf3aaf94529768f8.png) no-repeat right bottom / auto 100%,#0d3084","borderWidth":"1px 0 0","width":"100%","fontSize":"24px","position":"absolute","borderStyle":"solid","height":"64px"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","padding":"0","margin":"20px auto 0","color":"#666","display":"block","width":"100%","lineHeight":"1","fontSize":"12px","textDecoration":"underline"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			ruleForm: {
                xingbie: '',
			},

            pageFlag : '',
			tableName:"",
			rules: {},
            yonghuxingbieOptions: [],
		};
	},
	mounted(){
        this.pageFlag = this.$storage.get("pageFlag");
		let table = this.$storage.get("loginTable");
		this.tableName = table;
        this.yonghuxingbieOptions = "男,女".split(',')
	},
	created() {
    
	},
	destroyed() {
		  	},
	methods: {
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
        yonghutouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.yonghuming) && `yonghu` == this.tableName){
						this.$message.error(`用户名不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.xingming) && `yonghu` == this.tableName){
						this.$message.error(`姓名不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.mima) && `yonghu` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `yonghu` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`yonghu` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
						this.$message.error(`手机应输入手机格式`);
						return
					}
					
					
					
					
					
					
					
					
					if(`yonghu` == this.tableName && this.ruleForm.jf&&(!this.$validate.isNumber(this.ruleForm.jf))){
						this.$message.error(`积分应输入数字`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if(`yonghu` == this.tableName && this.ruleForm.money&&(!this.$validate.isNumber(this.ruleForm.money))){
						this.$message.error(`余额应输入数字`);
						return
					}
					
					
					
					
					
					
				
			
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
						}
					});
				} else {
					this.$message.error(data.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.container {
	  position: relative;
	  background: url(http://codegen.caihongy.cn/20230220/fe8de165616e4a958fb1e289132234fa.jpg) no-repeat center bottom / 100% auto;

		.el-date-editor.el-input {
		  width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border-radius: 4px;
						padding: 0 10px;
						margin: 0;
						color: #666;
						background: linear-gradient(30deg, rgba(227,231,242,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, rgba(227,231,242,1) 100%);
						width: 100%;
						font-size: 14px;
						border-color: #eee;
						border-width: 3px;
						border-style: ridge;
						height: 40px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 0px solid #333;
						border-radius: 4px;
						padding: 0 10px;
						outline: none;
						color: #999;
						background: linear-gradient(30deg, rgba(227,231,242,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, rgba(227,231,242,1) 100%);
						width: 100%;
						font-size: 14px;
						border-color: #eee;
						border-width: 3px;
						border-style: ridge;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 4px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #999;
						background: linear-gradient(30deg, rgba(227,231,242,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, rgba(227,231,242,1) 100%);
						width: 100%;
						font-size: 14px;
						border-color: #eee;
						border-width: 3px;
						border-style: ridge;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 4px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #999;
						background: linear-gradient(30deg, rgba(227,231,242,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, rgba(227,231,242,1) 100%);
						width: 100%;
						font-size: 14px;
						border-color: #eee;
						border-width: 3px;
						border-style: ridge;
						height: 40px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 3px ridge #eee;
		  		  cursor: pointer;
		  		  border-radius: 4px;
		  		  margin: 10px 0;
		  		  color: #999;
		  		  background: linear-gradient(30deg, rgba(227,231,242,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, rgba(227,231,242,1) 100%);
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 3px ridge #eee;
		  		  cursor: pointer;
		  		  border-radius: 4px;
		  		  margin: 10px 0;
		  		  color: #999;
		  		  background: linear-gradient(30deg, rgba(227,231,242,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, rgba(227,231,242,1) 100%);
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 3px ridge #eee;
		  		  cursor: pointer;
		  		  border-radius: 4px;
		  		  margin: 10px 0;
		  		  color: #999;
		  		  background: linear-gradient(30deg, rgba(227,231,242,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, rgba(227,231,242,1) 100%);
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
	}
</style>
