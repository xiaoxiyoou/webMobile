var app = new Vue({
    el: "#app",
    data: {
        dynamicList: [{imgurl:''}],



    },
    methods: {
        //   获取所有文章列表
        getlist(limit, cate) {
            var that = this;
            axios.get('http://www.api.s.xiaozibl.com/api/news/getlist', {
                    params: {
                        page: 1,
                        limit: limit,
                        cate: cate,
                    }
                })
                .then(function (res) {

                    that.dynamicList = res.data.data.item
                    console.log('公司动态', that.dynamicList);
                })
                .catch(function (error) {
                    console.log(error);

                })
        },

    },
    mounted() {
        this.getlist(3, 10002)

    }

})