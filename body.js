  nLazy();

$('.dropdown-el').click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).toggleClass('expanded');
      $('#'+$(e.target).attr('for')).prop('checked',true);
    });
    $(document).click(function() {
      $('.dropdown-el').removeClass('expanded');
    });

      $(".connect-alert").hide();

    $("#skip_connect").click(function() {
      $(".connect-alert").slideDown();
    });

    // $("#signup").addClass("hovered");

    $(".menu li").hover(function() {
      $(this).siblings().find(".right-pagelink").removeClass("hovered");
      $(this).find(".right-pagelink").addClass("hovered");
    },
    function() {
      $(this).find(".right-pagelink").removeClass("hovered");
    });

    function initMenu() {
        $('#menu ul').hide();
        $('#menu ul').children('.current').parent().show();
        //$('#menu ul:first').show();
        $('#menu li a').click(
            function() {
                var checkElement = $(this).next();
                if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
                    return false;
                }
                if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
                    $('#menu ul:visible').slideUp('normal');
                    checkElement.slideDown('normal');
                    return false;
                }
            }
        );
    }
    $(document).ready(function() {
        initMenu();
    });

    $('.bmc-open-btn').click(function() {
$('.bmc-collapse').fadeToggle(500);
});

    function myFunction(x) {
    x.classList.toggle("change");
}