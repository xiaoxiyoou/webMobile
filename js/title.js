// 显示导航栏
$(".nav-more").click(function(){
    $(".nav-cont").css("display","block")
})
// 关闭导航栏
$(".nav-mask").click(function(){
    $(".nav-cont").css("display","none")
})
$(".nav-close").click(function(){
    $(".nav-cont").css("display","none")
})

$('.nav-list').click(function () {
    // 当处于收缩状态
    if ($(this).find(".nav-right").attr("src") == "img/title/right.png") {
        // 所有栏目隐藏
        $(".nav-item").css("display", "none");
        // 所有箭头向右
        $(".nav-right").attr("src", "img/title/right.png");
        $(this).find(".nav-item").css("display", "block");
        $(this).find(".nav-right").attr("src", "img/title/down.png");

    } else {
        $(this).find(".nav-item").css("display", "none");
        $(this).find(".nav-right").attr("src", "img/title/right.png");

    }
})
$(".nav-logo").click(function () {
    window.location.href="./index.html"
  });