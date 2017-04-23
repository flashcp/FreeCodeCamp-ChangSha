/**
 * Created by 鹏 on 2017/1/26.
 */

//------------------------------------检测ie

isIe8 = function (){
    var appName = navigator.appName;
    var appVersion = navigator.appVersion;
    var flag = (appName == 'Microsoft Internet Explorer' && appVersion.match(/8./i))?true:false;
    console.log(flag);
    return flag;
};

$(function () {

//-----------------------------ie下不显示小标题
//    var ie = (!!window.ActiveXObject || "ActiveXObject" in window);
//    console.log(ie);
//    if (ie){
//        var title = $('.title');
//        title.remove();
//    }

    if (isIe8()){
        var imgDel = $('.img-del');
        var skillIcon = $('.skill-icon');
        var picIntro = $('.pic-intro');
        var nav = $('.nav');

        imgDel.remove();
        nav.remove();
        picIntro[0].style.color = '#000000';

        for (var i=0;i<skillIcon.length;i++){
            skillIcon[i].style.marginLeft = '60px';
            skillIcon[i].style.marginRight = '60px';
        }

        (function (){
            var buttonIe = $('.button-ie8');
            var picIe = $('.pic-ie img');
            var i = 1;
            buttonIe.on('click', function () {
                picIe.css('display','none');
                $(picIe[i]).css('display','block');
                if (i<picIe.length - 1){
                    i++;
                }
                else {
                    i = 0;
                }
            })
        })();
    }
    else {

        //------------------------------nav导航栏跳转

        var position = [0, 1000, 2700, 3700, 5200], timer, currentPosition, targetPosition;
        $(window).on('scroll', function () {
            var h = $(window).scrollTop();
            $("#nav_ul li").removeClass('liCurrent');
            if (h >= position[0] && h < position[1] - 500) {
                $("#nav_ul>li:nth-child(1)").addClass('liCurrent');
            }
            else if (h >= position[1] - 500 && h < position[2] - 500) {
                $("#nav_ul>li:nth-child(2)").addClass('liCurrent');
            }
            else if (h >= position[2] - 500 && h < position[3] - 500) {
                $("#nav_ul>li:nth-child(3)").addClass('liCurrent');
            }
            else if (h >= position[3] - 500 && h < position[4] - 500) {
                $("#nav_ul>li:nth-child(4)").addClass('liCurrent');
            }
            else if (h >= position[4] - 500 && h < 5300) {
                $("#nav_ul>li:nth-child(5)").addClass('liCurrent');
            }
        });
        function nav() {
            //如果用户在滚动条滚动时点击
            clearInterval(timer);
            //设置函数调用间距为1ms
            timer = setInterval(togo, 1);
            //获取点击a标签的序号
            targetPosition = $(this).index();
        }

        function togo() {
            currentPosition = $(window).scrollTop();
            if (currentPosition > position[targetPosition]) {
                currentPosition -= 20;
                window.scrollTo(0, currentPosition);
                if (currentPosition <= position[targetPosition]) {
                    clearInterval(timer);
                    //从下到上
                }
            }
            else if (currentPosition <= position[targetPosition]) {
                currentPosition += 20;
                window.scrollTo(0, currentPosition);
                if (currentPosition >= position[targetPosition]) {
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
        console.log(smPic);
        smPic.on('click', function () {
            largePic.css('display', 'none').stop(true, true);
            var num = $(this).index();
            console.log(num);
            $(largePic[num]).css('display', 'block').hide().fadeIn('slow');
        })
    }
});
