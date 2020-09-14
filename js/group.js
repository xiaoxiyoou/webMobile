var app = new Vue({
    el: "#app",
    data: {
        courseList: "",
        meetList: "",
        dynamicList: "",
        navList:[
            {name:'开课信息',limit:50,cate:10007},
            {name:'公司会议',limit:50,cate:10000},
            {name:'公司动态',limit:50,cate:10009},
        ],
        isActive:0



    },
    methods: {
         // 数字不到10的用0补齐
         sun:function (s) {
            return s < 10 ? '0' + s: s;
        },
        //   获取所有文章列表
        getlist(limit, cate,index) {
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
                    } else if (cate == 10001) {
                        that.meetList = res.data.data.item
                        console.log('公司会议', that.meetList);
                    } else if (cate == 10002) {
                        that.dynamicList = res.data.data.item
                        console.log('公司动态', that.dynamicList);
                    }
                })
                .catch(function (error) {
                    console.log(error);

                })
        },

    },
    mounted() {
        this.getlist(10, 10010,0)
        // this.getlist(3, 10001)
        // this.getlist(6, 10002)

    }

})