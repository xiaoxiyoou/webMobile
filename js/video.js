var app = new Vue({
    el: "#app",
    data: {
        dataList: "",
        courseList: "",
        freeList: "",
        navList:[
            {name:'公司名称',limit:50,cate:10007},
            {name:'开课暖场',limit:50,cate:10000},
            {name:'宣传片课程',limit:50,cate:10009},
        ],
        isActive:0


    },
    methods: {
      
        //   获取所有文章列表
        getlist(limit, cate,index) {
            this.isActive = index
            var that = this;
            axios.get('http://www.api.s.xiaozibl.com/api/news/getlist', {
                    params: {
                        page: 1,
                        limit: limit,
                        cate: cate,
                    }
                })
                .then(function (res) {
                    that.dataList = res.data.data.item
               
                })
                .catch(function (error) {
                    console.log(error);

                })
        },

    },
    mounted() {
        this.getlist(6, 10007,0)
       

    }

})