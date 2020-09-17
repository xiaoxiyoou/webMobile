var app = new Vue({
    el: "#app",
    data: {
        show: false,
        conferenceList: "",
        funeralList:"",
        cultureList:"",
        swiper: true,
        meet: false,
        news: false,
        isActive: 0,
        navList: [{
            name: '行业大会',
            limit: 50,
            cate: 10003
        },
        {
            name: '殡葬新闻',
            limit: 50,
            cate: 10004
        },
        {
            name: '传统文化',
            limit: 50,
            cate: 10005
        },
    ],


    },
    computed:{
      
    },
    methods: {
        // 数字不到10的用0补齐
        sun:function (s) {
            return s < 10 ? '0' + s: s;
        },
        getcate: function () {
            var that = this;
            axios.post('http://www.api.s.xiaozibl.com/api/news/getcate', {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                })
                .then(function (res) {
                    that.classItem = res.data.data
                    console.log('文章分类', that.classItem)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        //   获取行业大会数据
        getlist(limit,cate,index) {
            var that = this;
            this.isActive = index
            axios.get('http://www.api.s.xiaozibl.com/api/news/getlist', {
                    params: {
                        page: 1,
                        limit: limit,
                        cate,

                    }
                })
                .then(function (res) {
                    if (cate == 10003) {
                        that.conferenceList = res.data.data.item
                        console.log('行业大会', that.conferenceList);
                        that.swiper = true
                        that.meet = false
                        that.news = false
                    } else if(cate == 10004){
                        that.funeralList = res.data.data.item
                        console.log('殡葬新闻', that.funeralList);
                        that.swiper = false
                        that.meet = true
                        that.news = false

                    }else if(cate == 10005){
                        that.cultureList = res.data.data.item
                        console.log('传统文化', that.cultureList);
                        that.swiper = false
                        that.meet = false
                        that.news = true

                    }
                })
                .catch(function (error) {
                    console.log(error);

                })
        },

    },
    mounted() {
        this.getcate()
        this.getlist(10,10003,0)
        // this.getlist(3,10004,1)
        // this.getlist(4,10005,2)
    }

})