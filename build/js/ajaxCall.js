$(document).ready(function(){function a(){$("header > div.second nav ul li div.active").removeClass("active")}$.ajax({url:"pages/home.html",success:function(a){$("#myajaxcont").html(a).fadeIn("fast"),$("header > div.second nav ul li:nth(4)").mouseenter(function(){$("#aj-events").show(),$("#aj-sales").show()}),$("header > div.second nav ul li:nth(4)").mouseleave(function(){$("#aj-events").fadeOut("slow"),$("#aj-sales").fadeOut("slow")}),$("#first-product").css("display","block").addClass("visibleProduct")}}),$("#aj-home").click(function(){$.ajax({url:"pages/home.html",success:function(s){a(),$("#aj-home > div").addClass("active"),$("#myajaxcont").css("display","none"),$("#myajaxcont").html(s).fadeIn("fast"),$("#first-product").css("display","block").addClass("visibleProduct")}})}),$("#aj-about").click(function(){$.ajax({url:"pages/about.html",success:function(s){a(),$("#aj-about > div").addClass("active"),$("#myajaxcont").css("display","none"),$("#myajaxcont").html(s).fadeIn("fast")}})}),$("#aj-brands").click(function(){$.ajax({url:"pages/brands.html",success:function(s){a(),$("#aj-brands > div").addClass("active"),$("#myajaxcont").css("display","none"),$("#myajaxcont").html(s).fadeIn("fast")}})}),$("#aj-gallery").click(function(){$.ajax({url:"pages/gallery.html",success:function(s){a(),$("#aj-gallery > div").addClass("active"),$("#myajaxcont").css("display","none"),$("#myajaxcont").html(s).fadeIn("fast")}})}),$("#aj-events").click(function(){$.ajax({url:"pages/events.html",success:function(s){a(),$("#aj-news > div").addClass("active"),$("#myajaxcont").css("display","none"),$("#myajaxcont").html(s).fadeIn("fast")}})}),$("#aj-sales").click(function(){$.ajax({url:"pages/sales.html",success:function(s){a(),$("#aj-news > div").addClass("active"),$("#myajaxcont").css("display","none"),$("#myajaxcont").html(s).fadeIn("fast")}})}),$("#aj-contacts").click(function(){$.ajax({url:"pages/contacts.html",success:function(s){a(),$("#aj-contacts > div").addClass("active"),$("#myajaxcont").css("display","none"),$("#myajaxcont").html(s).fadeIn("fast")}})})});