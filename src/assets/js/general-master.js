// Height JS For Style View

$(document).ready(function(){
  $('.activities-card-height').css({'height': $('.card-container-height').innerHeight()});
});

//  Height JS For Style View

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


// Filter JS Starts here
$(document).ready(function(){
   $('.click-me').click(function(){
     $(".customer-filter").toggle("slow");
  });

  $('.click-me').click(function(){
    $(".supplier-filter").toggle("slow");
  });
});

// Dynamic Change On Customer-Edit, Supplier-Edit, Manage-Fabric-Edit, Manage-Trims-Edit JS Starts Here
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

	$(".dept-add").click(function(){
			$(".add-dept").fadeIn('fast');
			$('.hide-customer-dept').hide();
			return false;
	});

	$(".dept-add-go-back").click(function(){
			$(".add-dept").hide();
			$('.hide-customer-dept').fadeIn('fast');
			return false;
	});

	// Image Edit JS Starts Here
	$(".edit-img").click(function(){
		$(this).parent().parent().parent().parent().parent().parent().parent().parent().find(".edit-site").fadeIn('fast');
			$(this).parent().parent().parent().parent().parent().parent().parent().parent().find('.hide-customer-site').hide();
			return false;
	});

	$(".site-add-go-back").click(function(){
			$(".edit-site").hide();
			$('.hide-customer-site').fadeIn('fast');
			return false;
	});
	// Image Edit JS Ends Here
});

// Material Selector on ADD Materials JS Starts Here
$(function() {
    $('#material-selector').change(function(){
        $('.materials').hide();
        $('#' + $(this).val()).show();
    });
	$(".site-add-go-back").click(function(){
		$(".materials").hide();
		$('.hide-customer-site').fadeIn('fast');
		return false;
	});
});



// $(document).ready(function(){
// 	$(".add-fab").click(function(){
// 			$(".fab-con").fadeIn('fast');
// 			// $('.hide-customer-site').hide();
// 			return false;
// 	});
// 	$(".add-fab2").click(function(){
// 		console.log("clicked");
// 			$(".fab-con").fadeIn('fast');
// 			// $('.hide-customer-site').hide();
// 			return false;
// 	});
// });
