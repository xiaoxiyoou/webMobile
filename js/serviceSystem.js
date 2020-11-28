var app = new Vue({
    el: "#app",
    data: {
        cityShow: false,
        proShow: false,
        cityList: "",
        proList: "",
        dataList: "",
        key: "",
        proDefalut: "",
        cityDefalut: "",
        prov: 7,
        city: 71,
        noMsg: false,
        name: "",
        phone: "",
        address: "",
        count:0
    },
    methods: {
     
     
        // 点击查询
        getlistBtn() {
            if (!this.proDefalut) {
                vant.Toast('请选择省份');
                return false
            } else if (!this.cityDefalut) {
                vant.Toast('请选择城市');
                return false
            } else if (!this.name) {
                vant.Toast('请输入您的姓名')
                return false
            } else if (!this.phone) {
                vant.Toast('请输入您的电话')
                return false
            } else if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone))) {
                vant.Toast('请输入正确电话号码')
                return false;
            } else {
                this.getlist(this.prov, this.city)
            }

        },
        //   获取所有商家
        getlist(prov, city) {
      
            var that = this;
            axios.get('http://www.api.s.xiaozibl.com/api/store/getcount', {
                    params: {
                        name:this.name,
                        mobile:this.phone,
                        prov: prov,
                        city: city,


                    }
                })
                .then(function (res) {
                    that.count = res.data.data.count
                    console.log('count',res)
                    console.log('count',that.count)
               
                })
                .catch(function (error) {
                    console.log(error);

                })

        },
 
   

    },
    mounted() {
      
    }


})