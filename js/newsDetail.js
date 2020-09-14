var app = new Vue({
    el: "#app",
    data: {
        id: '',
        info:''



    },
    methods: {
        // 取到问号后面的参数
        getUrlParam: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURI(r[2]);
            return null;
        },
        //   获取新闻详情数据
        getDetail(id) {
            var that = this;
            axios.get('http://www.api.s.xiaozibl.com/api/news/getdetail', {
                    params: {
                        id,

                    }
                })
                .then(function (res) {
                    that.info = res.data.data.info
                    console.log('新闻详情', that.info);
                })
                .catch(function (error) {
                    console.log(error);

                })
        },

    },
    mounted() {
        this.id = this.getUrlParam("id")
        this.getDetail(this.id)

    }

})