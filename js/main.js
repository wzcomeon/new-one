/**
 * Created by FengChao on 2017/2/6.
 */
/*需要使用的函数*/
function formatterDateTime() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var datetime = date.getFullYear() + "" +
        (month >= 10 ? month : "0" + month) + "" +
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + "" +
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + "" +
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + "" +
        (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
    return datetime;
}
function askData(url,fn) {
    var self=this;
    $.ajax({
        url:url,
        type:'post',
        dateType:'json',
        async:true,
        jsonp:"jsoncallback",
        success:function (data) {
            console.log(data);
            var contains=data.showapi_res_body.pagebean.contentlist;
            console.log(contains);
            fn(contains);
        }

    })
}
function list(contains,id) {
    var str="";
    str+=' <div class="j-l-nav">' +
        '<ul><li><a href="#" class="j-l-navcur">精华</a> </li>' +
        ' <li><a href="#">最新</a> </li>' +
        ' <li><a href="#">穿越</a></li> ' +
        '</ul></div>';
    for(var i=0;i<contains.length;i++){
        str+='<li class="j-list clearfix">';
        /*用户的基本信息*/
        str+='<div class="j-list-user">';
        str+='<div class="u-img fl">';
        str+='<a href="/" target="_blank">';
        str+='<img src="'+contains[i].profile_image+'">';
        str+='</a>';
        str+='</div>';
        str+='<div class="u-text fl">';
        str+='<a href="/" class="u-username">'+contains[i].name+'</a>';
        str+='<span class="u-time">'+contains[i].create_time+'</span>';
        str+='</div>';
        str+='</div>';
        /*用户展示部分*/
        str+='<div class="j-show">';
        str+='<div class="j-show-header">'+contains[i].text+'</div>'
        /*视频或者图片，这里需要用到判断语句。*/
        if(contains[i].type=="41"||contains[i].type=="31"){
            str+='<div class="j-video">';
            str+='<video width="566" height="360" controls src="'+contains[i].video_uri+'"></video>';
            str+='</div>'
        }else if(contains[i].type=='10'&&contains[i].image0!=''){
            str+='<div class="j-show-imag">';
            str+='<img src="'+contains[i].image0+'">';
            str+="</div>"
        }
        str+='</div>';
        /*尾部*/
        str+='<div class="j-list-bottom">';

        str+='<div class="j-lh">';
        str+='<ul>';
        str+='<li>';
        str+='<i class="icon-love">';
        str+='</i>';
        str+='<span class="love-count">'+contains[i].love+'</span>';
        str+='</li>';
        str+='<li>';
        str+='<i class="icon-hate">';
        str+='</i>';
        str+='<span class="hate-count">'+contains[i].hate+'</span>';
        str+='</li>';
        str+='</ul>';
        str+='</div>';


        str+='<div class="j-fx">';
        str+='<div class="fx fl">';
        str+='<span>'+'分享&nbsp;&nbsp;&nbsp;51&nbsp;&nbsp;|'+'</span>';
        str+='</div>';
        str+='<div class="fx-to fl">';
        str+='<a href="/" class="kongjian"></a>';
        str+='<a href="/" class="weixin"></a>';
        str+='<a href="/" class="qq"></a>';
        str+='<a href="/" class="weibo"></a>';
        str+='<a href="/" class="renren"></a>';
        str+='</div>';
        str+='</div>';

        str+='<div class="j-xsp">';
        str+='<ul>';
        str+='<li class="xiazai">';
        str+='<i></i>';
        str+='</li>';
        str+='<li class="shoucang">';
        str+='<i></i>';
        str+='</li>';
        str+='<li class="pinglun">';
        str+='<i></i>';
        str+='<span>'+10+'</span>';
        str+='</li>';
        str+='</ul>';
        str+='</div>';

        str+='</div>';
        str+='</li>';
        $("#"+id).html(str);
    }
}
function show(typeDate,pageDate) {
    var typeD='';
    var pageD=pageDate?pageDate:1;
    if(typeDate=="all"){
        typeD="";
    }else if(typeDate=="video"){
        typeD=41;
    }else if(typeDate=="pic"){
        typeD=10;
    }else if(typeDate=="text"){
        typeD=29;
    }else if(typeDate=="audio"){
        typeD=31;
    }
    var dateUrl='https://route.showapi.com/255-1?page='+pageD+'&showapi_appid=31841&showapi_timestamp='+formatterDateTime()+'&title=&type='+typeD+'&showapi_sign=204820f591b34eabbc9554f37a4eb564';
    askData(dateUrl,function (data) {
        list(data,"main");
})
}


    var Product=function (typeDate,pageDate) {
        var typeD='';
        var pageD=pageDate?pageDate:1;
        if(typeDate=="all"){
            typeD="";
        }else if(typeDate=="video"){
            typeD=41;
        }else if(typeDate=="pic"){
            typeD=10;
        }else if(typeDate=="text"){
            typeD=29;
        }else if(typeDate=="audio"){
            typeD=31;
        }
        this.dateUrl='https://route.showapi.com/255-1?page='+pageD+'&showapi_appid=31841&showapi_timestamp='+formatterDateTime()+'&title=&type='+typeD+'&showapi_sign=204820f591b34eabbc9554f37a4eb564';


    };
    Product.prototype={
      /*  formatterDateTime:function () {
            var date=new Date();
            var month=date.getMonth()+1;
            var datetime=date.getFullYear()+""+
                (month>=10?month:"0"+month)+""+
                (date.getDate()<10?"0"+date.getDate():date.getDate())+""+
                (date.getHours()<10?"0"+date.getHours():date.getHours())+""+
                (date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes())+""+
                (date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds());
            return datetime;
        },*/
       /* askData:function (url,fn) {
            var self=this;
            $.ajax({
                url:url,
                type:'post',
                dateType:'json',
                async:true,
                jsonp:"jsoncallback",
                success:function (data) {
                    console.log(data);
                 var contains=data.showapi_res_body.pagebean.contentlist;
                    console.log(contains);
                    fn(contains);
                }

            })
        },*/
        /*list:function (contains,id) {
            var str="";
           str+=' <div class="j-l-nav">' +
               '<ul><li><a href="#" class="j-l-navcur">精华</a> </li>' +
               ' <li><a href="#">最新</a> </li>' +
               ' <li><a href="#">穿越</a></li> ' +
               '</ul></div>';
            for(var i=0;i<contains.length;i++){
                str+='<li class="j-list clearfix">';
                /!*用户的基本信息*!/
                str+='<div class="j-list-user">';
                str+='<div class="u-img fl">';
                str+='<a href="/" target="_blank">';
                str+='<img src="'+contains[i].profile_image+'">';
                str+='</a>';
                str+='</div>';
                str+='<div class="u-text fl">';
                str+='<a href="/" class="u-username">'+contains[i].name+'</a>';
                str+='<span class="u-time">'+contains[i].create_time+'</span>';
                str+='</div>';
                str+='</div>';
                /!*用户展示部分*!/
                str+='<div class="j-show">';
                str+='<div class="j-show-header">'+contains[i].text+'</div>'
                     /!*视频或者图片，这里需要用到判断语句。*!/
                if(contains[i].type=="41"||contains[i].type=="31"){
                    str+='<div class="j-video">';
                    str+='<video width="566" height="360" controls src="'+contains[i].video_uri+'"></video>';
                    str+='</div>'
                }else if(contains[i].type=='10'&&contains[i].image0!=''){
                    str+='<div class="j-show-imag">';
                    str+='<img src="'+contains[i].image0+'">';
                    str+="</div>"
                }
                str+='</div>';
              /!*尾部*!/
                str+='<div class="j-list-bottom">';

                str+='<div class="j-lh">';
                str+='<ul>';
                str+='<li>';
                str+='<i class="icon-love">';
                str+='</i>';
                str+='<span class="love-count">'+contains[i].love+'</span>';
                str+='</li>';
                str+='<li>';
                str+='<i class="icon-hate">';
                str+='</i>';
                str+='<span class="hate-count">'+contains[i].hate+'</span>';
                str+='</li>';
                str+='</ul>';
                str+='</div>';


                str+='<div class="j-fx">';
                str+='<div class="fx fl">';
                str+='<span>'+'分享&nbsp;&nbsp;&nbsp;51&nbsp;&nbsp;|'+'</span>';
                str+='</div>';
                str+='<div class="fx-to fl">';
                str+='<a href="/" class="kongjian"></a>';
                str+='<a href="/" class="weixin"></a>';
                str+='<a href="/" class="qq"></a>';
                str+='<a href="/" class="weibo"></a>';
                str+='<a href="/" class="renren"></a>';
                str+='</div>';
                str+='</div>';

                str+='<div class="j-xsp">';
                str+='<ul>';
                str+='<li class="xiazai">';
                str+='<i></i>';
                str+='</li>';
                str+='<li class="shoucang">';
                str+='<i></i>';
                str+='</li>';
                str+='<li class="pinglun">';
                str+='<i></i>';
                str+='<span>'+10+'</span>';
                str+='</li>';
                str+='</ul>';
                str+='</div>';

                str+='</div>';
                str+='</li>';
                $("#"+id).html(str);
            }
        },*/

        blindDom:function (id) {
            var self=this;
           askData(this.dateUrl,function (data) {
               list(data,id);
           });
        }
    };



