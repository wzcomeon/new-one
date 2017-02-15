window.onload=function () {
    /*定义控制类型的全局变量*/
    var dateType=null;
    var pro=null;
  $(".j-hlink a").on("click",function () {
      var $this=$(this);
      $(".j-hlink a").each(function () {
          $(this).removeClass("link-current");
      });
      $this.addClass("link-current");
      $("#mian").html("");
    dateType=$this.data("type");
      var page=1;
      pro=new Product(dateType,page);

      pro.blindDom("main");
      pro=null;
  });
    $(".j-hlink a").eq(0).trigger("click");
    /*页面的跳转*/



    $(".num").on("click",function () {
        $("#main").html("");
        pro=null;
        var page=$(this).html();

        pro=new Product(dateType,page);
        pro.blindDom("main");

        /*跳转之后需要处理数据*/
        var n=parseInt(page);
        var m=n-2;
        if(n<3){
            $(".num").each(function () {
                $(this).removeClass("num-current");
            });
            $(this).addClass("num-current");
            return;
        }else if(n>=3){
            $(".num").each(function () {
                $(this).html(m);
                $(this).removeClass("num-current");
                m++;
            });
            $(".num:eq(2)").addClass("num-current");
        }
    });




    $(".page-next").on("click",function () {
        var index=$(".num-current").index();
        $(".num").eq(index+1).trigger("click");
    });
    $(".current-p").on("click",function () {
        var val=parseInt($("#val").val());
        var n=val-2;
        if(val>=3){
            $(".num").each(function () {
                $(this).removeClass("num-current");
                $(this).html(n);
                n++;
            });
            $(".num:eq(2)").trigger("click");
        }else if(val==1||val==2){
            $(".num").eq(val-1).trigger("click");
        }
    });





    var mm;
    window.onresize=function () {
      $(window).scroll();

    };

    /*右边侧边栏的监听事件*/
        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            /*底部的home按钮*/
            if(scrollTop<5){
                $(".go-back").animate({bottom:"-300px"},300);
            }
            else if(scrollTop>=5){
                $(".go-back").animate({bottom: "20px"}, 1000)
            }



            var mm = ($(window).width() - 960) / 2 + 650;
            if($(window).width<=960){
                mm=660;
            }
             console.log(mm+"-----------------")
            var fl_height = $(".j-main-l").height();
           if(scrollTop<1200){
                $(".j-main-r").css({position:"relative",bottom:0,left:0});
            }else if(scrollTop>1200&&scrollTop<fl_height-1000){
                $(".j-main-r").css({position:"fixed",bottom:"100px",left:mm+"px"});
                console.log("执行")
            }else if(scrollTop>=fl_height-1000){
               $(".j-main-r").css({position:"fixed",bottom:"300px",left:mm+"px"});
           }
        });
//
    $(".go-back").on("click",function () {
        
        window.scrollTo(0,0);
        $(window).scroll();
    })



};

