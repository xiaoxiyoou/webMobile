var app = new Vue({
    el: "#app",
    data: {
        dataList: ""



    },
    methods: {

        //   获取所有文章列表
        getlist(cate) {
            var that = this;
            axios.get('http://www.api.s.xiaozibl.com/api/news/getlist', {
                    params: {
                        page: 1,
                        limit: 100,
                        cate,
                    }
                })
                .then(function (res) {
                    that.dataList = res.data.data.item
                    console.log('新殡葬人', that.dataList);
                })
                .catch(function (error) {
                    console.log(error);

                })
        },

    },
    mounted() {
        this.getlist(10006)

    }

})