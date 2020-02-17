$(document).ready(function(){
  var current_fs, next_fs, previous_fs;
  var left, opacity, scale;
  var animating;

  var count = 0;

  $(".submit").click(function(e){
    window.location.href=window.location.href;
    return false;
  })

  $( "#progressbar li" ).click(function() {
    $( "#progressbar li" ).removeClass('active');
    $(this).addClass('active');
    var index = $( "#progressbar li" ).index( this );
    next_fs = $('#msform fieldset').eq(index);
    $('#msform fieldset').hide();
    next_fs.fadeIn();
    count = index;
  });

  $(".next").click(function(){
    count++;
    current_fs = $('#msform fieldset').eq(count-1);
    next_fs = $('#msform fieldset').eq(count);
    $("#progressbar li").removeClass('active');
    $("#progressbar li").eq(count).addClass('active');
    current_fs.hide();
    next_fs.fadeIn(); 
  });

  $(function(){
    if($('.tag-friend-list-scroll').length != 0){
      $('.tag-friend-list-scroll').slimScroll({
        height: '220px'
      });
    }
  });
  $(".tag-friend-list-scroll ul").click(function(){
    ($(this).toggleClass("cstm-checks"));
  });
  // $('.veen-now').click(function(){
  //   $('.step-form.active').fadeIn();
  // });
//   $('#clickbox').click(function(e) {
//     if((e.target.id == 'clickbox') || (e.target.id == 'clickbox-container') || (e.target.id == 'clickbox-row')){
//       $('.step-form.active').fadeOut();
//     }
//   });
 })