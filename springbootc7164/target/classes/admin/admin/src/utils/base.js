const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootc7164/",
            name: "springbootc7164",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootc7164/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: " 牛奶订购小程序  "
        } 
    }
}
export default base
