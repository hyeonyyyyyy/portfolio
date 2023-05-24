$(function(){
    AOS.init({
        duration:1300,
      });


    //   스킬
    skillAni();
    var cnt1 = $("#count1");
    var water1 = $("#water1");
    var percent1 = 0;
    var interval1;
    function skillWater1(){
        percent1++;
        cnt1.text(percent1);  
        water1.css({'transform':'translate(0'+','+(100-percent1)+'%'});
        //percent값을 수정하기
        if (percent1 == 80) {
            clearInterval(interval1);
        }
    }
    var cnt2 = $("#count2");
    var water2 = $("#water2");
    var percent2 = 0;
    var interval2;
    function skillWater2(){
        percent2++;
        cnt2.text(percent2);  
        water2.css({'transform':'translate(0'+','+(100-percent2)+'%'});
        //percent값을 수정하기
        if (percent2 == 80) {
            clearInterval(interval2);
        }
    }
    var cnt3 = $("#count3");
    var water3 = $("#water3");
    var percent3 = 0;
    var interval3;
    function skillWater3(){
        percent3++;
        cnt3.text(percent3);  
        water3.css({'transform':'translate(0'+','+(100-percent3)+'%'});
        //percent값을 수정하기
        if (percent3 == 50) {
            clearInterval(interval3);
        }
    }
    var cnt4 = $("#count4");
    var water4 = $("#water4");
    var percent4 = 0;
    var interval4;
    function skillWater4(){
        percent4++;
        cnt4.text(percent4);  
        water4.css({'transform':'translate(0'+','+(100-percent4)+'%'});
        //percent값을 수정하기
        if (percent4 == 60) {
            clearInterval(interval4);
        }
    }
    var cnt5 = $("#count5");
    var water5 = $("#water5");
    var percent5 = 0;
    var interval5;
    function skillWater5(){
        percent5++;
        cnt5.text(percent5);  
        water5.css({'transform':'translate(0'+','+(100-percent5)+'%'});
        //percent값을 수정하기
        if (percent5 == 50) {
            clearInterval(interval5);
        }
    }
    var cnt6 = $("#count6");
    var water6 = $("#water6");
    var percent6 = 0;
    var interval6;
    function skillWater6(){
        percent6++;
        cnt6.text(percent6);  
        water6.css({'transform':'translate(0'+','+(100-percent6)+'%'});
        //percent값을 수정하기
        if (percent6 == 40) {
            clearInterval(interval6);
        }
    }
    function skillZero1(){
        percent1=0;
        cnt1.text(percent1);  
        water1.css({'transform':'translate(0,100%)'});
    }
    function skillZero2(){
        percent2=0;
        //cnt2.text(percent2);  
        water2.css({'transform':'translate(0,100%)'});
    }
    function skillZero3(){
        percent3=0;
        //cnt3.text(percent3);  
        water3.css({'transform':'translate(0,100%)'});
    }
    function skillZero4(){
        percent4=0;
        //cnt4.text(percent4);  
        water4.css({'transform':'translate(0,100%)'});
    }
    function skillZero5(){
        percent5=0;
        //cnt5.text(percent5);  
        water5.css({'transform':'translate(0,100%)'});
    }
    function skillZero6(){
        percent6=0;
        //cnt6.text(percent6);  
        water6.css({'transform':'translate(0,100%)'});
    }

    function skillAni(){   
        interval1=setInterval(skillWater1,60);
        interval2=setInterval(skillWater2,60);
        interval3=setInterval(skillWater3,60);
        interval4=setInterval(skillWater4,60);
        interval5=setInterval(skillWater5,60);
        interval6=setInterval(skillWater6,60);
     }
     function skillStop(){
        skillZero1();
        skillZero2();
        skillZero3();
        skillZero4();
        skillZero5();
        skillZero6();
     }


     //re 탭메뉴

     $('.tab-cont01 > div').hide();
        //첫번째 탭내용만 보임
        $('.tab-cont01 > div:first').show();

     var $tablink = $(".project01 .tabTitle01 li").click(function(){
        var idx=$tablink.index(this);
        $(".tabTitle01 li").removeClass("on active")
        $(".tabTitle01 li").eq(idx).addClass("on active");
        $(".tabCont01 > div").hide();
        $(".tabCont01 > div").eq(idx).show();

      })
      $(".project01 .tab-title01 li").click(function(){
        var idx = $(this).index();
        $(".tab-title01 li").removeClass("on active");
        $(".tab-title01 li").eq(idx).addClass("on active");
        $(".tab-cont01 > div").hide();
        $(".tab-cont01 > div").eq(idx).show();
      });

    // clone 탭메뉴

    $('.tab-cont02 > div').hide();
        //첫번째 탭내용만 보임
        $('.tab-cont02 > div:first').show();

     var $tablink = $(".project02 .tabTitle02 li").click(function(){
        var idx=$tablink.index(this);
        $(".tabTitle02 li").removeClass("on active")
        $(".tabTitle02 li").eq(idx).addClass("on active");
        $(".tabCont02 > div").hide();
        $(".tabCont02 > div").eq(idx).show();

      })
      $(".project02 .tab-title02 li").click(function(){
        var idx = $(this).index();
        $(".tab-title02 li").removeClass("on active");
        $(".tab-title02 li").eq(idx).addClass("on active");
        $(".tab-cont02 > div").hide();
        $(".tab-cont02 > div").eq(idx).show();
      });

    //   design 탭메뉴
        $('.tab-cont03 > div').hide();
        //첫번째 탭내용만 보임
        $('.tab-cont03 > div:first').show();

     var $tablink = $(".project03 .tabTitle03 li").click(function(){
        var idx=$tablink.index(this);
        $(".tabTitle03 li").removeClass("on active")
        $(".tabTitle03 li").eq(idx).addClass("on active");
        $(".tabCont03 > div").hide();
        $(".tabCont03 > div").eq(idx).show();

      })
      $(".project03 .tab-title03 li").click(function(){
        var idx = $(this).index();
        $(".tab-title03 li").removeClass("on active");
        $(".tab-title03 li").eq(idx).addClass("on active");
        $(".tab-cont03 > div").hide();
        $(".tab-cont03 > div").eq(idx).show();
      });
    

    //  art work 
    $(".art .art-box ul li").on("click", function(){
        var src = $(this).find("img").attr("src");
        $("div.popup-wrap").find("img").attr("src", src);
        $("div.popup-wrap").fadeIn(500)
        scrollEvent = true;
    });

    $("div.popup-wrap button.closed").on("click", function(){
        $("div.popup-wrap").fadeOut(300);
        scrollEvent = false;
    });

      

      consoleText(['아직 부족한 실력이지만', '항상 적극적인 자세로 노력하겠습니다.','제 포트폴리오에 방문해주셔서 감사합니다!'], 'text',['white','white','white']);

      function consoleText(words, id, colors) {
        if (colors === undefined) colors = ['#fff'];
        var visible = true;
        var con = document.getElementById('console');
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id)
        target.setAttribute('style', 'color:' + colors[0])
        window.setInterval(function() {
      
          if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function() {
              var usedColor = colors.shift();
              colors.push(usedColor);
              var usedWord = words.shift();
              words.push(usedWord);
              x = 1;
              target.setAttribute('style', 'color:' + colors[0])
              letterCount += x;
              waiting = false;
            }, 1000)
          } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function() {
              x = -1;
              letterCount += x;
              waiting = false;
            }, 1000)
          } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
          }
        }, 120)
        window.setInterval(function() {
          if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;
      
          } else {
            con.className = 'console-underscore'
      
            visible = true;
          }
        }, 400)
      }

      // top
      $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });
    
      $("#top").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 300);
        return false;
    });
});
