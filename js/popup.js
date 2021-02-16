$(function(){
    $('.btn button').click(function(){
      $('#pop_up').fadeOut(); //slideUp, fadeOut, hide >> 3개 다 사용가능. 하지만 팝업창 닫기는 페이드 아웃이 제일 적절함//
    });
    $('.modal').click(function(){
      $('#pop_up').fadeIn();
    });
    $('.modal_select a').each(function(){
      $(this).click(function(){
        var a_href=$(this).attr('href');
        $('.pop').hide();
        $(a_href).show();
        $('.modal_select a').removeClass('select_btn');
        $(this).addClass('select_btn');
      }) //click
    }) // each
  });

  function winOpen(url, win_name){
    window.open(url, win_name, 'http://naver.com','child','toolbar=no, location=no, status=no, menubar=no, resizable=no, scrollbars=no, width=1000, height=500');
  };