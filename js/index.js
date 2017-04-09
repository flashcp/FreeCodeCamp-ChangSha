/**
 * Created by 鹏 on 2017/1/26.
 */

//------------------------------------检测ie

isIe8 = function (){
    var appName = navigator.appName;
    var appVersion = navigator.appVersion;
    var flag = false;
    if (appName == 'Microsoft Internet Explorer' && appVersion.match(/8./i) == '8.'){
        flag = true;
        console.log('ie8');
        return flag;
    }
    else {
        console.log('other');
        return flag;
    }
}

$(function () {
    var head=$('head');

    if (isIe8()){

        $('html').addClass('IE8');
        //head.append('<link'+' '+'href="style/IE8.css"'+' '+'rel="stylesheet"'+' '+'type="text/css">');

    }
    else {
        //head.append('<link'+' '+'href="style/normal.css"'+' '+'rel="stylesheet"'+' '+'type="text/css">');
        //------------------------------nav导航栏跳转 start

        var position = [0, 1000, 2200, 3700, 6100], timer, currentPosition, position_i;
        $(window).on('scroll', function () {
            var h = $(window).scrollTop();
            $("#nav_ul li").removeClass('liCurrent');
            if (h >= 0 && h < 500) {
                $("#nav_ul>li:nth-child(1)").addClass('liCurrent');
            }
            else if (h > 500 && h < 2000) {
                $("#nav_ul>li:nth-child(2)").addClass('liCurrent');
            }
            else if (h > 2000 && h < 2700) {
                $("#nav_ul>li:nth-child(3)").addClass('liCurrent');
            }
            else if (h > 2700 && h < 5100) {
                $("#nav_ul>li:nth-child(4)").addClass('liCurrent');
            }
            else if (h > 5100 && h < 6200) {
                $("#nav_ul>li:nth-child(5)").addClass('liCurrent');
            }
        });
        function nav() {
            //如果用户在滚动条滚动时点击
            clearInterval(timer);
            //设置函数调用间距为1ms
            timer = setInterval(togo, 1);
            //获取点击a标签的序号
            position_i = $(this).index();
        }

        function togo() {
            currentPosition = $(window).scrollTop();
            if (currentPosition > position[position_i]) {
                currentPosition -= 30;
                window.scrollTo(0, currentPosition);
                if (currentPosition <= position[position_i]) {
                    clearInterval(timer);
                    //从下到上
                }
            }
            else if (currentPosition <= position[position_i]) {
                currentPosition += 30;
                window.scrollTo(0, currentPosition);
                if (currentPosition >= position[position_i]) {
                    clearInterval(timer);
                    //从上到下
                }
            }
        }

        $("#nav_ul>li").on('click', nav);


        //------------------------------------导航栏 start

        $(".logo,#nav_ul").on({
            'mouseover click': function () {
                $('#nav_ul').css('display', 'block');
            },
            'mouseout': function () {
                $('#nav_ul').css('display', 'none');
            }
        })


        //----------------------------活动图片

        var smPic = $('.activities li'), largePic = $('.activities .pic');
        smPic.on('click', function () {
            largePic.css('display', 'none').stop(true, true);
            var num = $(this).index();
            $(largePic[num]).css('display', 'block').hide().fadeIn('slow');
        })
    }
});
