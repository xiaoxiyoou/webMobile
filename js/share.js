function WeiXinShare(title, link, imgurl, sharedesc) {
    var data = {
        sid: 660,
        url: window.location.href,
        t: Math.random()
    };

    var _getWechatSignUrl = 'http://passport.fuyulove.com/action/jssdk';
    $.ajax({
        url: _getWechatSignUrl,
        data: data,
        dataType: 'json',
        success: function (res) {
            console.log("签名", res)
            if (res.code == 1) {
                wxConfig(res.data.data.appid, res.data.data.timestamp, res.data.data.nonceStr, res.data.data.signature);
            }
        }
    });

    function wxConfig(_appId, _timestamp, _nonceStr, _signature) {
        wx.config({
            debug: false,
            appId: _appId,
            timestamp: _timestamp,
            nonceStr: _nonceStr,
            signature: _signature,
            jsApiList: [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage', 'uploadImage', 'chooseImage', 'openLocation', 'getLocation',
                'previewImage',
                'downloadImage',
            ]
        });



    }
    // var link = location.href
    wx.ready(function () {
        wx.onMenuShareTimeline({
            title: title,
            link: link,
            imgUrl: imgurl,
            success: function () {

            }
        });
        wx.onMenuShareAppMessage({
            title: title,
            desc: sharedesc,
            link: link,
            imgUrl: imgurl,
            type: '',
            dataUrl: '',
            success: function () {

            }
        });

    });
}
WeiXinShare(document.title, window.location.href, "http://www.xiaozibl.com/wrap/img/title/share.png", "孝子部落集团定位新殡葬产业服务商，为殡葬企业一站式提能增效解决方案，为殡葬企业提供三大赋能服务：殡业培训教育、软件科技服务、优品采购服务。专注为殡葬商家提供一站式提能增效解决方案，规范殡葬市场、提升服务品质、增加顾客数量、改善管理效率、提升企业业绩。");