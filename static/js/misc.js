/**
 * Created by Rohan on 7/9/2016.
 */
var j=0;

$(document).ready(function() {

    client_view();
    assoc_view();

    $('#intro').css('height', $(window).innerHeight()+"px");

    $('#fullpage').fullpage(
        {
            slidesNavigation:true,
            controlArrows:true,
            responsiveWidth:600,
            fitToSection:false,
            onLeave:function(cur,next,direction){
                if(cur==1 && direction=="down")
                    $('.navbar-custom').css('transform','translateY(0)');
                else if(cur==2 && direction=="up")
                    $('.navbar-custom').css('transform','translateY(-60px)');
            }

    });

    control=setInterval(function(){reveal()},700);

    //setInterval(function(){$.fn.fullpage.moveSlideRight()},2000);


});

function hide()
{
    $('.services-overlay').css('display','none');
    $('#ser-cont').html("");
}

function reveal(){
    text=$('.welcome-text');
    if(j<text.length) {
        text.eq(j).css('opacity','1');
        j++;
    }
    else {
        clearInterval(control);
        $('.welcome-text-container').css('opacity','0');
        setTimeout(function(){$('.welcome-text-container').css('display','none');},400);
        setTimeout(function(){$('.quote').css('display','block')},300);
        setTimeout(function(){$('.btn-container').css('display','block')},300);
        setTimeout(function(){$('.logo-big').css('display','inline-block')},400);
        setTimeout(function(){$('.logo-big').css('opacity','1')},500);
        setTimeout(function(){$('.logo-big').css('margin-top','-20px')},700);
        setTimeout(function(){$('.quote').css('opacity','1')},900);
        setTimeout(function(){$('.btn-custom').css('opacity','1')},900);
        setTimeout(function(){$('.intro-footer').css('opacity','1')},900);
    }
}

function service_view(type){
    $.ajax({
        url:"services?type="+type,
        success:function(response){
            if(response=="0")
            {
                $("<p class='center-align absolute-center'>"+
                    "<span class='font font-slg font-logo-color'>No Services</span></p>").appendTo("#ser-cont");
                $('.services-overlay').css('display','block');
                return;
            }
            obj=JSON.parse(response.trim());
            cur=1;
            for(i=0;i<obj.length;i++)
            {
                ser=obj[i];
                if(i==0 || (i%3==0))
                {
                    $("<div class='row match-parent shift-down-40' id='row_"+cur+"'></div>").appendTo('#ser-cont');
                    $("<div class='col-lg-4 center-align padded service-cols' id='col_"+cur+"_"+i+"''><div>").appendTo('#row_'+cur);
                    $("<img src='"+ser['url']+"' class='service-monikers-small'/><br>").appendTo('#col_'+cur+"_"+i);
                    $("<span class='font font-md font-logo-color service-titles'>"+ser['name']+"</span><br>").appendTo('#col_'+cur+"_"+i);
                    $("<p class='font-justify'><span class='font font-sm font-black thin-line'>"+ser['content']+
                        "</span></p>").appendTo('#col_'+cur+"_"+i);
                    cur++;


                }
                else{
                    $("<div class='col-lg-4 center-align padded service-cols' id='col_"+cur+"_"+i+"''><div>").appendTo('#row_'+(cur-1));
                    $("<img src='"+ser['url']+"' class='service-monikers-small'/><br>").appendTo('#col_'+cur+"_"+i);
                    $("<span class='font font-md font-logo-color service-titles'>"+ser['name']+"</span><br>").appendTo('#col_'+cur+"_"+i);
                    $("<p class='font-justify'><span class='font font-sm font-black thin-line'>"+ser['content']+
                        "</span></p>").appendTo('#col_'+cur+"_"+i);
                }
            }
            $('.services-overlay').css('display','block');
        }
    });
}


function notice_view(){
    $('#ser-cont').html("");
    $.ajax({
        url:"notices",
        success:function(response){
            if(response=="0")
            {
                $("<p class='center-align absolute-center'>"+
                    "<span class='font font-slg font-logo-color'>No Notices</span></p>").appendTo("#ser-cont");
                $('.services-overlay').css('display','block');
                return;
            }
            obj=JSON.parse(response.trim());
            cur=1;
            for(i=0;i<obj.length;i++)
            {
                ser=obj[i];
                $("<p class='thin-padded' id='para_"+i+"'></p>").appendTo('#ser-cont');
                if(ser['url']!="0")
                    $("<a href='"+ser['url']+"'><span class='font font-md font-logo-color'>"
                        +ser['head']+"</span></a><br>").appendTo('#para_'+i);
                else
                    $("<span class='font font-md font-logo-color'>"
                        +ser['head']+"</span><br>").appendTo('#para_'+i);
                $("<span class='font font-smd font-black font-justify'>"+ser['content']+"</span><br><hr>").appendTo('#para_'+i);
            }
            $('.services-overlay').css('display','block');
        }
    });
}


function downloads_view(){
    $('#ser-cont').html("");
    $.ajax({
        url:"download",
        success:function(response){
            if(response=="0")
            {
                $("<p class='center-align absolute-center'>"+
                    "<span class='font font-slg font-logo-color'>No Downloads</span></p>").appendTo("#ser-cont");
                $('.services-overlay').css('display','block');
                return;
            }
            obj=JSON.parse(response.trim());
            cur=1;
            for(i=0;i<obj.length;i++)
            {
                ser=obj[i];
                if(ser['type']==0)
                    path='/static/res/file/pdf.png';
                else if(ser['type']==1)
                    path='/static/res/file/doc.png';
                else
                    path='/static/res/file/xls.png';

                if(i==0 || (i%3==0))
                {
                    $("<div class='row match-parent shift-down-40' id='row_"+cur+"'></div>").appendTo('#ser-cont');
                    $("<div class='col-lg-4 center-align padded service-cols' id='col_"+cur+"_"+i+"''><div>").appendTo('#row_'+cur);
                    $("<a href='"+ser['url']+"'><img src='"
                        +path+"' class='service-monikers-small'/></a><br>").appendTo('#col_'+cur+"_"+i);
                    $("<a href='"+ser['url']+"'><span class='font font-md font-logo-color big-fat-line'>"
                        +ser['name']+"</span></a><br>").appendTo('#col_'+cur+"_"+i);
                    $("<p class='center-align'><span class='font font-sm font-black thin-line'>"+ser['content']+
                        "</span></p>").appendTo('#col_'+cur+"_"+i);
                    cur++;


                }
                else{
                    $("<div class='col-lg-4 center-align padded service-cols' id='col_"+cur+"_"+i+"''><div>").appendTo('#row_'+(cur-1));
                    $("<a href='"+ser['url']+"'><img src='"
                        +path+"' class='service-monikers-small'/></a><br>").appendTo('#col_'+cur+"_"+i);
                    $("<a href='"+ser['url']+"'><span class='font font-md font-logo-color big-fat-line'>"
                        +ser['name']+"</span></a><br>").appendTo('#col_'+cur+"_"+i);
                    $("<p class='center-align'><span class='font font-sm font-black thin-line'>"+ser['content']+
                        "</span></p>").appendTo('#col_'+cur+"_"+i);
                }
            }
            $('.services-overlay').css('display','block');
        }
    });
}



function client_view(){
    $.ajax({
        url:"clients",
        success:function(response){
            if(response=="0")
            {
                $("<p class='center-align absolute-center'>"+
                    "<span class='font font-slg font-logo-color'>No Downloads</span></p>").appendTo("#cli-cont");
                return;
            }
            obj=JSON.parse(response.trim());
            cur=1;
            for(i=0;i<obj.length;i++)
            {
                ser=obj[i];

                if(i==0 || (i%4==0))
                {
                    $("<div class='row fixed-height' id='row_"+cur+"'></div>").appendTo('#cli-cont');
                    $("<div class='col-lg-3 center-align' id='col_"+cur+"_"+i+"''><div>").appendTo('#row_'+cur);
                    $("#col_"+cur+"_"+i).css("background-color",ser['color']);
                    $("#col_"+cur+"_"+i).css("height","100%");
                    $("#col_"+cur+"_"+i).css("position","relative");
                    if(ser['url']!=0)
                        $("<a href='"+ser['url']+"'><img src='"
                        +ser['logo']+"' class='service-monikers center'/></a><br>").appendTo('#col_'+cur+"_"+i);
                    else
                        $("<img src='"
                        +ser['logo']+"' class='service-monikers center'/><br>").appendTo('#col_'+cur+"_"+i);
                    cur++;


                }
                else{
                    $("<div class='col-lg-3 center-align' id='col_"+cur+"_"+i+"''><div>").appendTo('#row_'+(cur-1));
                    $("#col_"+cur+"_"+i).css("background-color",ser['color']);
                    $("#col_"+cur+"_"+i).css("height","100%");
                    $("#col_"+cur+"_"+i).css("position","relative");
                    if(ser['url']!=0)
                        $("<a href='"+ser['url']+"'><img src='"
                        +ser['logo']+"' class='service-monikers center'/></a><br>").appendTo('#col_'+cur+"_"+i);
                    else
                        $("<img src='"
                        +ser['logo']+"' class='service-monikers center'/><br>").appendTo('#col_'+cur+"_"+i);
                }
            }
        }
    });
}


function assoc_view(){
    $.ajax({
        url:"associates",
        success:function(response){
            if(response=="0")
            {
                $('<p style="margin-top:80px;"><span class="font font-logo-color font-slg">No Associates at the moment</span></p>').appendTo('#assoc-cont');
                return;
            }
            obj=JSON.parse(response.trim());
            cur=1;
            for(i=0;i<obj.length;i++)
            {
                ser=obj[i];

                $('<div id="assoc_'+i+'" class="assoc-cols center-align"></div>').appendTo('#assoc-cont');
                $('<img src="'+ser['url']+'" class="img-circle assoc-monikers" /><br>').appendTo('#assoc_'+i);
                $('<p class="shift-down-5"><span class="font font-logo-color font-md">'
                    +ser['name']+'</span><br><span class="font font-black font-md">'
                    +ser['desig']+'</span></p>').appendTo('#assoc_'+i);
            }
        }
    });
}


function register_query(){
    $('.loader').show();
    name=$('#name').val();
    email=$('#email').val();
    service=$('#service').val();
    query=$('#query').val();
    subject=$('#subject').val();
    $.ajax({
        url:"contact/",
        type:"post",
        data:{name:name,email:email,service:service,query:query,subject:subject},
        success:function(response){
            $('.loader').hide();
            alert(response);
            
        },
        failure:function(response){
            $('.loader').hide();
            alert("There was an error. Please try again later.")
        }
    });
}
