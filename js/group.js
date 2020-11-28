var app = new Vue({
    el: "#app",
    data: {
        courseList: "",
        meetList: "",
        dynamicList: "",
        navList: [{
                name: '开课信息',
                limit: 50,
                cate: 10010
            },
            {
                name: '公司会议',
                limit: 50,
                cate: 10001
            },
            {
                name: '公司动态',
                limit: 50,
                cate: 10002
            },
        ],
        isActive: 0,
        swiper: true,
        meet: false,
        news: false,



    },
    methods: {
        // 数字不到10的用0补齐
        sun: function (s) {
            return s < 10 ? '0' + s : s;
        },
        //   获取所有文章列表
        getlist(limit, cate, index) {
            document.body.scrollTop = document.documentElement.scrollTop = 0
            var that = this;
            this.isActive = index
            axios.get('http://www.api.s.xiaozibl.com/api/news/getlist', {
                    params: {
                        page: 1,
                        limit: limit,
                        cate: cate,
                    }
                })
                .then(function (res) {
                    if (cate == 10010) {
                        that.courseList = res.data.data.item
                        console.log('开课信息', that.courseList);
                        that.swiper = true
                        that.meet = false
                        that.news = false
                        if (that.courseList.length < 3) {
                            $(".bar").css("display", "block")
                        } else {
                            $(".bar").css("display", "none")
                        }
                    } else if (cate == 10001) {
                        that.meetList = res.data.data.item
                        console.log('公司会议', that.meetList);
                        that.swiper = false
                        that.meet = true
                        that.news = false
                        if (that.meetList.length < 3) {
                            $(".bar").css("display", "block")
                        } else {
                            $(".bar").css("display", "none")
                        }
                    } else if (cate == 10002) {
                        that.dynamicList = res.data.data.item
                        console.log('公司动态', that.dynamicList);
                        that.swiper = false
                        that.meet = false
                        that.news = true
                        console.log(that.dynamicList.length)
                        if (that.dynamicList.length < 3) {
                            $(".bar").css("display", "block")
                        } else {
                            $(".bar").css("display", "none")
                        }
                    }

                })
                .catch(function (error) {
                    console.log(error);

                })
        },

    },
    mounted() {
        this.getlist(10, 10010, 0)


    }

})