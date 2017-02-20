/**
 * Created by 鹏 on 2017/1/26.
 */



$(function () {
    //群成员图片 start
    (function abc(){
        for (var k=1;k<=77;k++){
            $('.bg').append('<div class="bg-part">'+'<img src="images/fcc/members/m-'+k+'.jpg"></div>');
        }
    }());
    //end

    //图片高度自适应 start
    var pic_mems=function(){
        var w=$(window).width() / 11;
        $(".members .bg .bg-part>img").css('width',w);
        $(".members .bg .bg-part>img").css('height',w);
    }
    pic_mems();
    $(window).on('resize',pic_mems);
    //end

    //nav导航栏跳转 start
    var position=[0,1000,2200,3700,6100],timer,currentposition,position_i;
    console.log($("#nav_ul>a:nth-child(1)"),200);

    $(window).on('scroll', function () {
        var h=$(window).scrollTop();
        $("#nav_ul li").removeClass('li_current');
        if(h>=0&&h<500){
            $("#nav_ul>a:nth-child(1) li").addClass('li_current');
        }
        else if(h>500&&h<2000){
            $("#nav_ul>a:nth-child(2) li").addClass('li_current');
        }
        else if(h>2000&&h<2700){
            $("#nav_ul>a:nth-child(3) li").addClass('li_current');
        }
        else if(h>2700&&h<5100){
            $("#nav_ul>a:nth-child(4) li").addClass('li_current');
        }
        else if(h>5100&&h<6200){
            $("#nav_ul>a:nth-child(5) li").addClass('li_current');
        }
    });
    function nav(){
        //如果用户在滚动条滚动时点击
        clearInterval(timer);
        //设置函数调用间距为1ms
        timer=setInterval(togo,1);
        //获取点击a标签的序号
        position_i=$(this).index();
    }
    function togo(){
        currentposition=$(window).scrollTop();
        if (currentposition>position[position_i]){
            currentposition-=30;
            window.scrollTo(0,currentposition);
            if (currentposition<=position[position_i]){
                clearInterval(timer);
                console.log(403);
                //从下到上
            }
        }
        else if (currentposition<=position[position_i]){
            currentposition+=30;
            window.scrollTo(0,currentposition);
            if (currentposition>=position[position_i]){
                clearInterval(timer);
                console.log(404);
                //从上到下
            }
        }
    }
    $("#nav_ul>a").on('click',nav);
    console.log($(window).scrollTop(),1);
    console.log($('body').scrollTop(),2);
    //end

    //导航栏 start
    $(".logo,#nav_ul").on({
        'mouseover click': function () {
            $('#nav_ul').css('display','block');
        },
        'mouseout': function () {
            $('#nav_ul').css('display','none');
        }
    })
    //end

    //chrome活动图片展示 start
    var activities_n= 0,pic=$('.pic'),activities_k= 0,activities_timer;
    console.log(pic[0]);
    function activities() {
        //遍历开始前n的初始值重置
        activities_n=activities_k++;
        pic.each(function (i,j) {
            console.log($(this));
            console.log(i);
            console.log(activities_n,100);
            //每次遍历n自加1，遍历开始前n的初始值重置
            $(this).css('transform','rotateY('+(++activities_n*72)+'deg) translateZ(480px)');
        });
    }
    //activities_timer = setInterval(activities,1500);

    $('#activities').on({
        'click':activities,
        //'mouseover':function () {
        //    clearInterval(activities_timer)
        //},
        //'mouseout': function () {
        //    activities_timer = setInterval(activities,2500);
        //}
    });
    //end

    //ie活动图片展示 start
    //end

    //检测ie start
    (function (){
        var userAgent = navigator.userAgent,
            rMsie = /(msie\s|trident.*rv:)([\w.]+)/;
        var ua = userAgent.toLowerCase();
        function uaMatch(ua){
            var match = rMsie.exec(ua);
            if(match != null){
                console.log('ie');
            }
            else{
                console.log('other');
            }
        }
        var browserMatch = uaMatch(ua);
    }());


    //end
})




//成员图片随机出现start
//var mems=$('.bg').find('.bg-part'),i=1,n=0;
//var abc=$('.bg');
//$(window).on('scroll', function () {
//    if($(window).scrollTop()>3500&&$(window).scrollTop()<4400){
//        var n=($(window).scrollTop()-3500)*0.0011;
//        $('.bg-part:even').css('opacity',n);
//    }
//    else{
//        $('.bg-part:even').css('display','');
//    }
//})
//end

//标题旋转 start
//var title_n= 0,head=$('.header'),title_k= 0;
//console.log(head[0]);
//function header() {
//    //遍历开始前n的初始值重置
//    title_n=title_k++;
//    head.each(function (i,j) {
//        console.log($(this));
//        console.log(i);
//        console.log(title_n,100);
//        //每次遍历n自加1，遍历开始前n的初始值重置
//        $(this).css('transform','rotateX('+(++title_n*120)+'deg) translateZ(14.43375px)');
//    });
//}
//$('.title').on('click',header);
//end