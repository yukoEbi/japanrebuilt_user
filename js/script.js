$(function () {
  $('#modal_open').click(function(){
      $('#modal').fadeIn();
  });
  $('#modal_close , #modal_bg').click(function(){
    $('#modal').fadeOut();
  });
});