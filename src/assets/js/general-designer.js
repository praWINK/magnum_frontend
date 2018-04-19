// Height JS For Style View

$(document).ready(function(){
  $('.activities-card-height').css({'height': $('.card-container-height').innerHeight()});
});


// NEW JS FOR SUB SIDE NAVIGATIONS

$(document).ready(function(){
    $("a.prod").click(function () {
      $(".product-sub-nav").slideToggle();
      return false;
  });

   $("a.system").click(function () {
      $(".system-sub-nav").slideToggle();
      return false;
  });
});



// REFERENCE ADD IMAGE JS STARTS HERE
$(document).ready(function(){
	$('.clickme').click(
		function(){
				$('.upload-box').toggle(500);
				return false;
		}
	);
	$('.clickme1').click(
		function(){
				$('.upload-box1').toggle(500);
				return false;
		}
	);

});
// REFERENCE ADD IMAGE JS ENDS HERE

// STYLE ADD & VIEW ADD IMAGE JS STARTS HERE

$(document).ready(function(){
  	$(".site-add").click(function(){
		$(this).parent().parent().parent().parent().parent().find(".add-site").fadeIn('fast');
			$(this).parent().parent().parent().parent().parent().find('.hide-customer-site').hide();
			return false;
	});

	$(".site-add-go-back").click(function(){
		$(".add-site").hide();
		$('.hide-customer-site').fadeIn('fast');
		return false;
	});
});
// STYLE ADD & VIEW ADD IMAGE JS ENDS HERE


// EDIT IMAGE JS STARTS HERE
$(document).ready(function(){
	$(".edit-img").click(function(){
		$(".edit-site").fadeIn('fast');
		$('.hide-customer-site').hide();
		return false;
	});

	$(".site-add-go-back").click(function(){
		$(".edit-site").hide();
		$('.hide-customer-site').fadeIn('fast');
		return false;
	});

	$(".edit-img1").click(function(){
		$(".edit-site1").fadeIn('fast');
		$('.hide-customer-site1').hide();
		return false;
	});

	$(".site-add-go-back1").click(function(){
		$(".edit-site1").hide();
		$('.hide-customer-site1').fadeIn('fast');
		return false;
	});

});

// EDIT IMAGE JS ENDS HERE
