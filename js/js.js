/**
 * Created by Administrator on 2016/8/8.
 */
function FontAuto(width){
    var Winw=document.documentElement.clientWidth;//获取屏幕宽度
    if(Winw>=width){                             //若屏幕宽度大于最大宽度
        document.documentElement.style.fontSize="625%";
    }else{
        document.documentElement.style.fontSize=(Winw/width*625)+"%";
    }
}
window.onload= function () {
    FontAuto(750);
}

window.onresize=function(){     //当窗口大小发生变化时触发函数
    FontAuto(750);
};

//animate
$("button").click(function(){

/*
    exitBall
*/
   var exit1=setTimeout(function () {
        $('.exit_ball_1').animate({"top":"0.84rem"},200, function () {
            $('.exit_ball_1').css("z-index","99");
            $('.exit_ball_1').animate({"top":"-6.65rem","left":"-1.81rem"},200, function () {
                $('.exit_ball_2').animate({"top":"0.84rem"},200, function () {
                    $('.exit_ball_2').css("z-index","99");
                    $('.exit_ball_2').animate({"top":"-6.65rem","left":"-0.75rem"},200, function () {
                        $('.exit_ball_3').animate({"top":"0.84rem"},200, function () {
                            $('.exit_ball_3').css("z-index","99");
                            $('.exit_ball_3').animate({"top":"-6.65rem","left":"0.31rem"},200, function () {
                                $('.exit_ball_4').animate({"top":"0.84rem"},200, function () {
                                    $('.exit_ball_4').css("z-index","99");
                                    $('.exit_ball_4').animate({"top":"-6.65rem","left":"1.38rem"},200, function () {
                                        $('.exit_ball_5').animate({"top":"0.84rem"},200, function () {
                                            $('.exit_ball_5').css("z-index","99");
                                            $('.exit_ball_5').animate({"top":"-6.65rem","left":"2.44rem"},200,function () {
                                                $('.exit_ball_6').animate({"top":"0.84rem"},200, function () {
                                                    $('.exit_ball_6').css("z-index","99");
                                                    $('.exit_ball_6').animate({"top":"-6.65rem","left":"3.50rem"},200,function(){
                                                        $('.exit_ball_7').animate({"top":"0.84rem"},200, function () {
                                                            $('.exit_ball_7').css("z-index","99");
                                                            $('.exit_ball_7').animate({"top":"-6.65rem","left":"4.57rem"},200);
                                                            $("button").attr("disabled","disabled");
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    },2000);

    //glassBall_rotate
    $(this).attr("disabled","disabled");
    $(".glass").addClass("add");
    $(".allBall").addClass("add2");
    for(i=1;i<10;i++){
        $(".ball_"+i).addClass("shark_ball_"+i);
    }
    var demo=setTimeout(function () {
        $(".glass").removeClass("add");
        $(".allBall").removeClass("add2");
        /////////////////为什么不能用this
        for(i=1;i<10;i++){
            $(".ball_"+i).removeClass("shark_ball_"+i);
        }
    },3000);


})