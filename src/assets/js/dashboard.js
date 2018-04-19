// Height JS For Style View

$(document).ready(function() {
    $('.activities-card-height').css({
        'height': $('.card-container-height').innerHeight()
    });
});

// JS for Side Navigation Slide

$(document).ready(function() {
    $("a.prod").click(function() {
        $(".product-sub-nav").slideToggle();
        return false;
    });

    $("a.system").click(function() {
        $(".system-sub-nav").slideToggle();
        return false;
    });

    $("a.development").click(function() {
        $(".development-sub-nav").slideToggle();
        return false;
    });

    $("a.fabric_dev").click(function() {
        $(".fabric-sub-nav").slideToggle();
        return false;
    });

    $("a.sampReq").click(function() {
        $(".sample-req-sub-nav").slideToggle();
        return false;
    });
});

// JS for Filter Click
$(document).ready(function() {
    $('.click-me').click(function() {
        $(".customer-filter").toggle("slow");
    });

    $('.click-me').click(function() {
        $(".supplier-filter").toggle("slow");
    });
});

// JS For Reference Add Image
$(document).ready(function() {
    $('.clickme').click(
        function() {
            $('.upload-box').toggle(500);
            return false;
        }
    );
    $('.clickme1').click(
        function() {
            $('.upload-box1').toggle(500);
            return false;
        }
    );

});

// Dynamic Change On Customer-Edit, Supplier-Edit, Manage-Fabric-Edit, Manage-Trims-Edit JS Starts Here
$(document).ready(function() {
    $(".site-add").click(function() {
        $(this).parent().parent().parent().parent().parent().find(".add-site").fadeIn('fast');
        $(this).parent().parent().parent().parent().parent().find('.hide-customer-site').hide();
        return false;
    });

    $(".site-add-go-back").click(function() {
        $(".add-site").hide();
        $('.hide-customer-site').fadeIn('fast');
        return false;
    });

    $(".dept-add").click(function() {
        $(".add-dept").fadeIn('fast');
        $('.hide-customer-dept').hide();
        return false;
    });

    $(".dept-add-go-back").click(function() {
        $(".add-dept").hide();
        $('.hide-customer-dept').fadeIn('fast');
        return false;
    });

    // Image Edit JS Starts Here
    $(".edit-img").click(function() {
        $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().find(".edit-site").fadeIn('fast');
        $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().find('.hide-customer-site').hide();
        return false;
    });

    $(".site-add-go-back").click(function() {
        $(".edit-site").hide();
        $('.hide-customer-site').fadeIn('fast');
        return false;
    });

    $(".edit-img1").click(function() {
        $(".edit-site1").fadeIn('fast');
        $('.hide-customer-site1').hide();
        return false;
    });

    $(".site-add-go-back1").click(function() {
        $(".edit-site1").hide();
        $('.hide-customer-site1').fadeIn('fast');
        return false;
    });

});

// Material Selector on ADD Materials JS Starts Here
$(function() {
    $('#material-selector').change(function() {
        $('.materials').hide();
        $('#' + $(this).val()).show();
    });
    $(".site-add-go-back").click(function() {
        $(".materials").hide();
        $('.hide-customer-site').fadeIn('fast');
        return false;
    });

    $('#attribute-selector').change(function() {
        $('#' + $(this).val()).show();
    });

    $('#dye-selector').change(function() {
        $('#' + $(this).val()).show();
    });

    $('#style-selector').change(function() {
        $('.materials').hide();
        $('#' + $(this).val()).show();
    });

    $('#fabric-ib').change(function() {
        $('.fabric').hide();
        $('#' + $(this).val()).show();
    });

    $('#devType-selec').change(function() {
        $('.development').hide();
        $('#' + $(this).val()).show();
    });

    $('#sealer-selec').change(function() {
        $('.sealer-yard').hide();
        $('#' + $(this).val()).show();
    });

});

// DIV Toggle on Clicking Radio Button JS STARTS HERE
$(document).ready(function() {
    //   $(".ib, .order").click(function() {
    //       var test = $(this).val();
    //       $("div.ib-select").hide();
    //       $(".hidden-ib-order").fadeToggle(500);
    //   }
    // );
    // $('input[type="radio"]').click(function(){
    //    var inputValue = $(this).attr("value");
    //    var targetBox = $("." + inputValue);
    //    $(".ib-select").not(targetBox).hide();
    //    $(targetBox).show();
    //  });
});

$(document).ready(function() {
    $(".option-open").click(function() {
        $(".option-con").toggle(100);
        return false;
    });
    $(".add-options").click(function() {
        $(".options-con-open").show();
        return false;
    });
});

$(document).ready(function() {
    $(".addIB_Order").click(function() {
        $(this).parent().parent().parent().parent().find(".ib-order").show();
        return false;
    });
});

$(document).ready(function() {
    $(".addIB_Shipment").click(function() {
        $(this).parent().parent().parent().parent().find(".ib-shipment").show();
        return false;
    });
});

$(document).ready(function() {
    $(".address-click-btn").click(function() {
        $(this).parent().parent().parent().find(".second-address-con").show();
        return false;
    });
    $(".sec-close-btn").click(function() {
        $(this).parent().parent().parent().parent().find(".second-address-con").hide();
        return false;
    });

    $(".row-add-btn").click(function() {
        $(".row-address-con").show();
        return false;
    });
    $(".row-close-btn").click(function() {
        $(".row-address-con").hide();
        return false;
    });

    $(".wash-add-btn").click(function() {
        $(".wash-address-con").show();
        return false;
    });
    $(".-close-btn").click(function() {
        $(".row-address-con").hide();
        return false;
    });

});

// Department radio on click Change JS Starts here
$(document).ready(function() {
    $(':radio').change(function(event) {
        var id = $(this).data('id');
        $('#' + id).addClass('none').siblings().removeClass('none');
    });
});

//Rights JS STARTS HERE
$(document).ready(function() {
    // Custom Check-Box
    $('#check-all').click(function(event) {
        if (this.checked) {
            $(':checkbox').each(function() {
                this.checked = true;
            });
        } else {
            $(':checkbox').each(function() {
                this.checked = false;
            });
        }
    });

    // Pattern JS

    $(".open-box").click(function () {
      $(this).parent().parent().find(".show-box").toggle(200);
    });


    $(".clones").click(function (){
      $(".comparison-con").css("display","block");
      $(".clear-close").click(function(){
        $(".comparison-con").css("display","none");
      });
    });
});

// 
// var $orderQty = $("input[name='orderQty']"),
//     $smv80 = $("input[name='smv80']").on("input", calculatePrice),
//     $discount = $("input[name='discount']").on("input", calculatePerc)
//
//     function calculatePrice() {
//       var smv80 = $(this).val();
//       var orderQty = $orderQty.val();
//       var calcPrice  = (price / smv80 * 100).toFixed(80);
//       $discount.val( calcPrice );
//     }
//
//     function calculatePerc() {
//       var discount = $(this).val();
//       var orderQty    = $orderQty.val();
//       var calcPerc = 100 - (discount * 100 / orderQty);
//       $smv80.val( calcPerc );
//     }
