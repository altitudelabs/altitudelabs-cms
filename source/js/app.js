var NAV_MENU = '#nav-full',
    NAV_TOGGLE = '.nav-icon',
    INDEX_FULLPAGE = '#fullpage',
    MIN_HEIGHT_WARING = '.min-height-warning',
    INDEX_MIN_HEIGHT = 430
    ; //index fullpgae container

var Altitude = {
  init: function(){
    // extend jQuery
    this.jqueryHelpers();
    // adds scroll and animation features
    this.initModals();

    this.topNav();
    this.indexFullPageEffect();
    // starts mobile nav toggle
    this.animateHowWeWork();
    // starts contact form
    this.teamPage();
    this.projectPage();
    this.projectCountingAnimation();
    this.contactus();
  },
  indexFullPageEffect: function() {
    if($(INDEX_FULLPAGE).length >0) {

      //iOS touchmove handling
      $(NAV_MENU).on('touchmove', function(e){            e.preventDefault(); });
      $('.index-container').on('touchmove', function(e){  e.preventDefault(); });

      //Init fullpage
      $(INDEX_FULLPAGE).fullpage({
        menu:                 false,
        lockAnchors:          false,
        navigation:           true,
        navigationPosition:   'right',
        showActiveTooltip:    false
      });

      //when resize, trigger event
      $(window).on('resize load', function(){
        resizeTopNavBar();
        resizeFpSection();
        checkScreenSize();
      });
      $(document).on('load', function(){
        resizeTopNavBar();
        resizeFpSection();
        checkScreenSize();
      });

      //Section1 a tag to project section
      $('a[data-slide]').on( 'click', function(){
        var slideIndex = $(this).data('slide');
        $('#fullpage').fullpage.moveTo( slideIndex, 0 );
      });

      function resizeTopNavBar() {
        $(NAV_MENU).css({
          'width' : $(window).width(),
          'height': $(window).height()
        });
      }
      function resizeFpSection() {
        $('.fp-section').css({
          'height': $(window).height()
        });
        $('.fp-tableCell').css({
          'height': '100%'
        });
      }
      function checkScreenSize(){
        if($(window).height() < INDEX_MIN_HEIGHT ) {
          $(MIN_HEIGHT_WARING).css({ 'display' : 'block' });
        } else {
          $(MIN_HEIGHT_WARING).css({ 'display' : 'none' });
        }
      }
    }
  },
  projectPage: function() {
    var self = this;
    if( $('.project').length != 0 ) {
      var bodyContainer = '.body-container',
          btnLeftClass  = 'btn-left',
          btnRightClass = 'btn-right',
          leftClass     = 'left',
          rightClass    = 'right';

      //Swipe to next project event
      $('a[data-target]').on('click', function(){
        //Get target url;
        var url = $(this).data('target');
        //check Left or right btn is clicked
        if( $(this).hasClass(btnLeftClass) ) {
          replaceBodyContainer(leftClass, rightClass);
        } else if( $(this).hasClass(btnRightClass) ){
          replaceBodyContainer(rightClass, leftClass);
        }

        function replaceBodyContainer(targetContainer, uselessContainer){
          $( bodyContainer + '.' + targetContainer ).load(
            url + ' ' + bodyContainer + ':not(.' + targetContainer + '):not(.' + uselessContainer + ') >*',
            function(data){
              //Change title
              window.history.pushState('page2', 'Title', url);
              //Animate page transition with CSS3
              $( bodyContainer + ':not(.' + targetContainer + '):not(.' + uselessContainer + ')' ).addClass(uselessContainer);
              $( bodyContainer + '.' + targetContainer ).removeClass(targetContainer);
              $( bodyContainer + '.' + uselessContainer + ':empty').removeClass(uselessContainer ).addClass(targetContainer);
              //Clean up old container, restart projectPage()
              setTimeout( function() {
                $( bodyContainer + '.' + uselessContainer ).html('');
                self.projectPage();
              }, 500 );
            }
          );
        }
      });

      var sliderMobileEl  = '.pic-slider-mobile',
          sliderFullEl    = '.pic-slider-full',
          pagerEl         = '.bx-pager';

      //Init Project Full Width Slider
      var sliderFull =  $(".slider-full").bxSlider({
                          adaptiveHeight        : true,
                          touchEnabled          : true,
                          swipeThreshold        : 100,
                          auto                  : true,
                          preventDefaultSwipeX  : true,
                          oneToOneTouch         : true,
                          onSliderLoad          : function( currentIndex ) {
                            //custom pager style
                            var numNav = $( sliderFullEl + ' .bx-pager-item' ).length;
                            $(sliderFullEl + ' ' + pagerEl).css({
                              'padding-left': (numNav - 1) * 24,
                              'padding-right': currentIndex * 48
                            });
                          },
                          onSlideBefore         : function( slideElement, oldIndex, newIndex ) {
                            //custom pager style
                            $(sliderFullEl + ' ' + pagerEl).css({'padding-right': newIndex*48 });
                          }
                        });
      $( sliderFullEl ).on('click', function() {
        sliderFull.stopAuto();
        sliderFull.startAuto();
      });

      //Init Project Device Slider
      var sliderMobile =  $('.slider-mobile').bxSlider({
                            adaptiveHeight        : true,
                            touchEnabled          : true,
                            swipeThreshold        : 100,
                            auto                  : true,
                            preventDefaultSwipeX  : true,
                            oneToOneTouch         : true,
                            onSliderLoad          : function( currentIndex ){
                              //custom pager style
                              var numNav = $( sliderMobileEl + ' .bx-pager-item').length;
                              $(sliderMobileEl + ' ' + pagerEl).css({
                                'padding-left': (numNav - 1) * 24 ,
                                'padding-right': currentIndex * 48
                              });
                            },
                            onSlideBefore         : function( slideElement, oldIndex, newIndex ){
                              //custom pager style
                              $( sliderMobileEl + ' ' + pagerEl).css({
                                'padding-right': newIndex * 48
                              });
                            }
                          });

      $(sliderMobileEl).on('click', function(){
        sliderMobile.stopAuto();
        sliderMobile.startAuto();
      });
    }

    //toggle PC slider
    $( sliderMobileEl + '.pc:not(.open) .bx-wrapper' ).on('click', function(){
      $(this).closest( sliderMobileEl + '.pc' ).addClass('open');
      $('.solution-description').addClass('inactive');
    });

    $( sliderMobileEl + '.pc .close-btn' ).on('click', function(){
      $(this).closest( sliderMobileEl + '.pc' ).removeClass('open');
      $('.solution-description').removeClass('inactive');
    });
  },
  contactus: function() {
    if( $('.contact-container').length != 0 ) {
      this.contactForm();

      $('.location').on('click', function(){
        var location = $(this).attr('data-location');
        //Set Location Value
        $('.contact-form .location-title').html(location);
        $('.contact-form input[name="location"]').val(location);

        //transite form animation
        $('.select-location').addClass('inactive');
        $('.contact-form').addClass('active');

        //Set location background
        $('.section-bg').attr('data-location',location.trim());
      });

      $('.contact-form .btn-left').on('click', function(){
        //transite form animation
        $('.select-location').removeClass('inactive');
        $('.contact-form').removeClass('active');

        //Reset input value
        $('input').val('');
        //Reset background
        $('.section-bg').attr('data-location','');
      });
    }
  },
  teamPage: function() {
    if( $('.team-member').length != 0 ) {

      var width         = $('.team-member-list').width(),
          elementInRow  = Math.floor( width / $('.team-member').outerWidth(true) );

      //Create invisiable element to make last row align left
      $el = $('<div class="team-member placeholder empty"><div class="team-member-pic"></div><div class="team-member-name">placeholder</div><div class="team-member-job">placeholder</div></div></div></div>');
      addInvisiableMember();

      $(window).on('resize', function() {
        width         = $('.team-member-list').width();
        elementInRow  = Math.floor( width / $('.team-member').outerWidth(true) );

        $('.show-details').remove();
        addInvisiableMember();
      });

      function addInvisiableMember() {
        $('.team-member.placeholder.empty').remove();

        if( $('.team-member').length % elementInRow != 0 ) {
            var neededToBeAdd =  elementInRow - ( $('.team-member').length % elementInRow );
            while( neededToBeAdd != 0 ) {
              $('.team-member-list').append( $el.clone() );
              neededToBeAdd--;
            }
        }
      }

      //Hide bios for all team members #32
      /*$('.team-member:not(.placeholder)').on('click',function(){
        var name = $(this).attr('data-name');
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
          $('.team-member').not(this).removeClass('active');
          var index = $('.team-member').index( this );
          var indexOfShow = elementInRow *(Math.floor(index/elementInRow)+1)-1;
          if(indexOfShow >= $('.team-member').length) {
            indexOfShow = $('.team-member').length-1;
          }
          $('.show-details').remove();
          $('<div class="show-details"></div>').html($('.details-container.'+name).clone()).insertAfter($('.team-member')[indexOfShow]);
          $('.show-details .close').on('click', function(){
            $(this).closest('.show-details').remove();
          });
        } else {
          $('.show-details').remove();
        }

      });*/
    }
  },
  projectCountingAnimation:function() {
    if($('.anim-count').length != 0) {
      $('.anim-count').html('0');
      $(window).on('scroll',function(){
        var scrollTop = $(window).scrollTop();
        $('.anim-count:not(.active)').each(function() {
          var elementOffset = $(this).offset().top;
          if (elementOffset < scrollTop + $(window).height() ) {
            $(this).addClass('active');
            anime($(this),0,parseInt($(this).attr('data-num')));
          }
        });
      });
      function anime(obj, currentNum, targetNum) {
        if(currentNum == targetNum) return;
        if(targetNum - currentNum <= Math.round(targetNum / 18) || targetNum - currentNum <= 1) {
          currentNum = targetNum;
        }else if(currentNum + Math.round(targetNum / 18) > targetNum) {
          currentNum = targetNum;
        } else {
          if(Math.round(targetNum / 18) < 1){
            currentNum += 1;
          } else {
            currentNum +=Math.round(targetNum / 18);
          }
        }
        setTimeout(function(){ obj.html(currentNum); anime(obj,currentNum, targetNum);  },50);
      }
    }
  },
  animateHowWeWork:function(){
    if($('.how-we-work').length != 0) {
      //Get window height
      var _HEIGHT = $(window).height();
      $(window).on('resize', function() {  _HEIGHT = $(window).height(); });

      var timeOut,
          startCal  = false,
          scrollTop = $(window).scrollTop();

      $(window).on('scroll load',function(){
        scrollTop = $(window).scrollTop();
        var before;
        if(!startCal){
          startCal = true;
          clearTimeout(timeOut);
          activateStep(1);
        }
        $('.how-we-work .step').each(function() {
          var elementOffset = $(this).offset().top,
              distance      = (elementOffset - scrollTop);

           if (distance >_HEIGHT) {
            $(this).removeClass('active');
          }
        });
      });
      function activateStep(i) {
        //var i = i || 0;
        if( i >= $('.how-we-work .step').length ) {
            startCal = false;
            return;
        }
        var self          = $('.how-we-work .step')[i],
            elementOffset = $(self).offset().top,
            distance      = (elementOffset - scrollTop);

        if( distance < _HEIGHT / 3 * 2 ) {
            if( !$(self).hasClass('active') ) {
                $(self).addClass('active');
                timeOut = setTimeout( function() {
                  activateStep(i + 1);
                }, 2000);
            } else {
                activateStep(i + 1);
            }
        } else {
           activateStep(i + 1);
        }
      }
    }
  },
  topNav : function(){
    $(NAV_TOGGLE).on('click', function() {
      if( $(window).scrollTop() < $(window).height() ){ $(window).scrollTop(0); }

      $('body').toggleClass('show-menu').toggleClass('show-content');
      $(NAV_TOGGLE).toggleClass('active');

      if( $('body').hasClass('show-menu') ) {
        $(NAV_MENU).on( 'touchmove', function(e){ e.preventDefault(); });
        if( isIndexPage ) {
          $('html').css({

              'width'     : '100%'
            });
        }
      } else {
        $(NAV_MENU).off('touchmove');
        if( isIndexPage ) {
          $('html').css({

            'width'     : ''
          });
        }
      }

      function isIndexPage() {
        return $('#index').length === 0;
      }

    });
    var previousScroll = 0;

    $(window).scroll(function(){
      var currentScroll = $(this).scrollTop();
      if( currentScroll < $(window).height() ) {
        setTimeout(hideFloatNav,300);
        return;
      }
      if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){
        if (currentScroll > previousScroll){
          setTimeout( hideFloatNav, 300 );
        } else {
          setTimeout( showFloatNav, 300 );
        }
        previousScroll = currentScroll;
      }
      function hideFloatNav(){
        $('.nav-icon.float').removeClass('float-active');
        $('.nav-float').removeClass('float-active');
      }
      function showFloatNav() {
        $('.nav-icon.float').addClass('float-active');
        $('.nav-float').addClass('float-active');
      }
    });
  },
  jqueryHelpers: function(){
    // Detects if device is mobile
    $.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));

    // Checks if element is visible on viewport
    $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };
  },
  initModals: function(){
    $('.apply-button').leanModal();
  },
  contactForm: function(){
    $('#contact input, #contact textarea').each(function() {
      var placeholder = $(this).attr('data-placeholder');
      $(this).val(placeholder);
      $(this).data('placeholder', placeholder);

      $(this).focus(function() {
          if ($(this).val() == placeholder) { $(this).val(''); }
      });
      $(this).blur(function() {
          if (!$(this).val()) { $(this).val(placeholder); }
      });
    });

    /* Helper: Flashes validation messages on screen */
    var flash = (function(){
      var $val = $('.validation-message p');
      var $valWindow = $('.validation-message');

      var validationTimer;
      var flashMessage = function(msg){
        $val.html(msg);
        $valWindow.fadeIn(function() {
          clearTimeout(validationTimer);
          validationTimer = setTimeout(function() {
            $('.validation-message').fadeOut();
          }, 5000);
        });
      };

      return {
        flashMessage: flashMessage
      };

    })();

    $('.send-email').click(function(e) {
      e.preventDefault();

      // Form validation
      // name
      if (($('#contact_name').val() === '') || ($('#contact_name').val() === $('#contact_name').data('placeholder'))) {
        flash.flashMessage('Name is required *');
        return false;
      }

      // email
      if (($('#contact_email').val() === '') || ($('#contact_email').val() === $('#contact_email').data('placeholder'))) {
        flash.flashMessage('Your e-mail address is required *');
        return false;
      }
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test($('#contact_email').val())) {
        flash.flashMessage('Your e-mail address appears to be invalid *');
        return false;
      }
      // budget
      /*var budget = $('#contact_budget').val();
      if (!$.isNumeric(budget)){
        flash.flashMessage('Budget should be a number in US dollars.');
        return false;
      }*/

      // message
      if (($('#contact_message').val() === '') || ($('#contact_message').val() === $('#contact_message').data('placeholder'))) {
        flash.flashMessage('Please let us know how we can help *');
        return false;
      }
      // End of form validation

      var self = $(this);
      var prevText = self.html();

      var params = $('#contact-form').serialize();

      $.ajax({
        url: '/contact',
        type: 'POST',
        data: params,
        beforeSend: function (xhr) {
          $('#contact-form input, #contact-form textarea').attr('disabled', 'disabled');
          self.html('Sending...');
          $('.ajax-message').hide();
        },
        error: function() {
          $('.ajax-message.error').not('.validation-message').fadeIn();
        },
        complete: function(data) {
          var response = {};
          if (data.responseText) response = JSON.parse(data.responseText);
          if (response.status && response.status === 'OK') {
            $('.ajax-message.success').fadeIn();
          } else {
            $('.ajax-message.error').not('.validation-message').fadeIn();
          }
          setTimeout(function() {
            $('.ajax-message').fadeOut();
          }, 5000);
          $('#contact-form input, #contact-form textarea').removeAttr('disabled');
          self.html(prevText);
        }
      });
    });
  }
};
