

$('.section1 .banner_zi img,.sec3_left .sec3_left_top,.sec3_left .sec3_left_bot,.sec3_right img,.sec4_top img.sec4_p1').css('opacity','0');

var screenw = $(window).width();

$('#fullpage').fullpage({
        /*配置参数*/

        verticalCentered: false,
        navigation: true,
        fixedElements:"#scroll,.header,.m-nav",
        afterLoad: function(anchorLink, index,slideIndex){
            if(index==1){
                 $('.section1 .banner_zi img').addClass('animated fadeInLeft slower').css('opacity','1');
            }
            if(index==2){
                //加背景动画

            }
            if(index==3){
            //加背景动画


                $('.sec3_left .sec3_left_top').addClass('animated fadeInDown slower').css('opacity','1');

                $('.sec3_left .sec3_left_bot').addClass('animated fadeInUp slower').css('opacity','1');

                $('.sec3_right img').addClass('animated fadeInRight slower').css('opacity','1');
            }


            if(index==4){
                //加背景动画

                $('.sec4_top img.sec4_p1').addClass('animated fadeInUp slower').css('opacity','1');
            }
        },
        onLeave: function(index, nextIndex, direction){

           if(index==1){
                 setTimeout(function(){
                    $('.section1 .banner_zi img').removeClass('animated fadeInLeft slower').css('opacity','0');
                 },500)
            }
            if(index==2){
                //加背景动画

            }
            if(index==3){
            //加背景动画

                setTimeout(function(){
                    $('.sec3_left .sec3_left_top').removeClass('animated fadeInDown slower').css('opacity','0');

                    $('.sec3_left .sec3_left_bot').removeClass('animated fadeInUp slower').css('opacity','0');

                    $('.sec3_right img').removeClass('animated fadeInRight slower').css('opacity','0');
                 },500)


            }


            if(index==4){
                //加背景动画

                setTimeout(function(){
                    $('.sec4_top img.sec4_p1').removeClass('animated fadeInUp slower').css('opacity','0');
                 },500)


            }


        },
    });


    var mySwiper1 = new Swiper('#swiper1', {
    pagination:'.swiper-pagination',
    paginationClickable :true,
    autoplay:5000,
})

    $('.header button.navbar-toggle').on('click',function(){
          $(this).toggleClass('active');
        })
    var actForm = function(){
              $('.dom_1').on('focus',function(event) {

                  /* Act on the event */
                 $(this).siblings('span').hide()
              }).on('blur',function(){
                  if($(this).val()==''){
                       $(this).siblings('span').show()
                  }

              });
              $('.dom_2').on('focus',function(event) {

                  /* Act on the event */
                 $(this).siblings('span').hide()
              }).on('blur',function(){
                  if($(this).val()==''){
                       $(this).siblings('span').show()
                  }

              });
            }

          actForm()

$('.inner_banner.about_banner img:first-child,.inner_banner.join_banner img,.inner_banner.ppnh_banner img:first-child,.master_banner img,.news_banner img,.products_banner img,.products_canju_banner img,.products_yishu_banner img,.master_banner img,.contact_banner img,.inner_banner.about_culture_banner img').addClass('animated fadeInLeft slow')

$('.inner_banner.about_banner img:last-child,.inner_banner.ppnh_banner img:last-child').addClass('animated fadeInRight slow')


