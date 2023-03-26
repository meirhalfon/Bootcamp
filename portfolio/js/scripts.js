
// Facebook button
$(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
      fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
// Twitter button
$(function(d, s, id) {
	var js,fjs=d.getElementsByTagName(s)[0],
	  p=/^http:/.test(d.location)?'http':'https';
	    if(!d.getElementById(id)){js=d.createElement(s);
	      js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
	      fjs.parentNode.insertBefore(js,fjs);
  }}(document, 'script', 'twitter-wjs'));
// Google Maps
var map;
  function initMap () {
  	map = new google.maps.Map (document.getElementById('map'),{
  		center: {lat: 62.0056475, lng: -6.7888961},
  		zoom: 15
  	});

    var marker = new google.maps.Marker({
    position: {lat: 62.0056475, lng: -6.7888961},
    map: map,
    title: 'Hello World!'
  });
 };
$(document).ready(function() {
//Smooth scrolling
  var $root = $('html, body');
    $('.navbar-nav a').click(function() {
      var href = $.attr(this, 'href');
        $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
        return false;
    });
//Contact-form Formatting
  $(".message-box").css("background-color", "#fff1d1").
    css("opacity", "0.8");  
  $(".form-control").css("background-color", "#fff1d1").
    css("opacity", "0.8");
//Listeners
  $("#button").on("click", function() {
    var comment = $(".message-box").val();
      if (comment === "") {
        $(".message-box").css("border", "2px solid #CC0000");
      } else {
        var comment = $(".message-box").val();
          $("#visible-comment").html(comment);
          $(".message-box").hide("slow");
          alert("Message received! We'll get back to you.");
      }
    var comment = $(".form-control").val();
      if (comment === "") {
        $(".form-control").css("border", "2px solid #CC0000");
      } else {
        var comment = $(".form-control").val();
        $(".form-control").hide();
      }
    });
//Character count
  $(".message-box").on("keyup", function(){
    var charCount = $(".message-box").val().length;
    console.log(charCount);
      $("#char-count").html(charCount).css("float", "right");
        if(charCount > 50) {
          $("#char-count").css("color", "red");
        } else {
          $("#char-count").css("color", "white");
      };
    });
  // Stellar parallax effect
  $("#about").stellar();
  $("#contact").stellar();
  // Tootltips
  $(function () {
    $("#item").tooltip();
  });
  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });
//work section
  for(var i = 0; i < works.length; ++ i) {
    $("#portfolio-work").append("\
    	<div class = 'col-lg-4 col-md-4 col-xs-6'>\
    	  <a href=' "+ works[i].url +" ' class='work-img'>\
    	    <img class='img-responsive' src=' "+ works[i].pic +" '>\
    	    <span class='work-info'><p class='proj-title'>Title:</p> "+ works[i].title +" </span>\
    	  </a>\
    	</div>\
    	");
    var images = $("#portfolio-work .img-responsive");
      if(i%2 === 0){
        $(images[i]).css("border", "2px solid DodgerBlue");
      } else {
        $(images[i]).css("border", "2px solid salmon");
      };
       $(".work-img").mouseenter(function(){
       $(".work-info", this).show();
      }).mouseleave(function(){
        $(".work-info", this).hide();
      });
    };
//About section
  for(var i = 0; i < abouts.length; ++ i) {
    $("#about-work").append("\
    	<div class = 'col-lg-6 col-md-6 col-xs-12'>\
    	  <a href=' "+ abouts[i].url +" ' class='work-img'>\
    	    <img class='img-responsive' src=' "+ abouts[i].pic +" '>\
    	    <span class='info-about'><p class='proj-title'></p> "+ abouts[i].title +" </span>\
    	  </a>\
    	</div>\
    	");
    var images = $("#about-work .img-responsive");
      if(i%2 === 0){
        $(images[i]).css("border", "2px solid DodgerBlue");
      } else {
        $(images[i]).css("border", "2px solid salmon");
      };
        $(".work-img").mouseenter(function(){
        $(".info-about", this).show();
      }).mouseleave(function(){
        $(".info-about", this).hide();
      });
    };
  });
