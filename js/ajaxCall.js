$(document).ready(function(){

  $.ajax({url:"pages/home.html",success:function(result){
    $("#myajaxcont").html(result).fadeIn('fast');
  }});

  $("#aj-home").click(function(){
    $.ajax({url:"pages/home.html",success:function(result){
      removeActive();
      $("#aj-home > div").addClass("active");
      $("#myajaxcont").css( "display", "none");
      $("#myajaxcont").html(result).fadeIn('fast');
    }});
  });
  $("#aj-about").click(function(){
    $.ajax({url:"pages/about.html",success:function(result){
      removeActive();
      $("#aj-about > div").addClass("active");
      $("#myajaxcont").css( "display", "none");
      $("#myajaxcont").html(result).fadeIn('fast');
    }});
  });
  $("#aj-brands").click(function(){
    $.ajax({url:"pages/brands.html",success:function(result){
      removeActive();
      $("#aj-brands > div").addClass("active");
      $("#myajaxcont").css( "display", "none");
      $("#myajaxcont").html(result).fadeIn('fast');
    }});
  });
  $("#aj-gallery").click(function(){
    $.ajax({url:"pages/gallery.html",success:function(result){
      removeActive();
      $("#aj-gallery > div").addClass("active");
      $("#myajaxcont").css( "display", "none");
      $("#myajaxcont").html(result).fadeIn('fast');
    }});
  });
  $("#aj-news").click(function(){
    $.ajax({url:"pages/news.html",success:function(result){
      removeActive();
      $("#aj-news > div").addClass("active");
      $("#myajaxcont").css( "display", "none");
      $("#myajaxcont").html(result).fadeIn('fast');
    }});
  });
  $("#aj-contacts").click(function(){
    $.ajax({url:"pages/contacts.html",success:function(result){
      removeActive();
      $("#aj-contacts > div").addClass("active");
      $("#myajaxcont").css( "display", "none");
      $("#myajaxcont").html(result).fadeIn('fast');
    }});
  });

  function removeActive() {
      $('header > div.second nav ul li div.active').removeClass("active");
  }
});
