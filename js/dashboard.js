$(document).ready(function () {

    //first time page load to set toggle class on page wrapper
    $(".page-wrapper").addClass("toggled");



    //tooltip added on hover menu 
    $('[data-toggle="tooltip"]').tooltip();
    //  if ($(".page-wrapper").hasClass("toggled")) {
    $('#menu-item ul li a').tooltip({
        position: {
            my: 'right center',
            at: 'left-10 center'
        }
    });


    // }else{
    //$('[data-toggle="tooltip"]').tooltip('hide');
    //  $(".tooltip").tooltip("hide");
    // $('[data-toggle="tooltip"], .tooltip').tooltip("hide");
    //}

    /*  $("#menu-item ul ul").addClass('displayNone'); */

    $('#menu-item a').on('click', function () {
        $(this).closest('#menu-item').find('li').removeClass('active');
        $(this).closest('li').addClass('active');
    })






    $('#pin-menu').click(function () {


        $(this).closest('#pin-menu').toggleClass("fa fa-bars fa fa-times");


        if ($(".page-wrapper").hasClass("pinned")) {



            setTimeout(function () {
                $(".page-wrapper .menu-text").css("display", "none");
            }, 100);
            $(".page-wrapper").removeClass("pinned");
            $(".page-wrapper").addClass("toggled");
            $("#menu-item").find("ul").find("ul").hide();
            $("#menu-item ul li").removeClass('active');
            $('#menu-item > ul > li:has(ul)').removeClass("has-sub");




        } else {

            setTimeout(function () {
                $(".page-wrapper .menu-text").css("display", "inline");
            }, 100);
            $(".page-wrapper").addClass("pinned");
            $(".page-wrapper").removeClass("toggled");
            $('#menu-item > ul > li:has(ul)').addClass("has-sub");

        }



    });
    //end of pin-menu click function







    // when list is clicked

    $('#menu-item > ul > li > a').click(function () {
        if ($(".page-wrapper").hasClass("toggled")) {
            return;
        }
        var checkElement = $(this).next();
        $('#menu-item li').removeClass('active');
        $(this).closest('li').addClass('active');


        if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {

            $(this).closest('li').removeClass('active');

            checkElement.slideUp('normal');
        }

        if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {

            $('#menu-item ul ul:visible').slideUp('normal');

            checkElement.slideDown('normal');
        }

        if (checkElement.is('ul')) {
            return false;
        } else {
            return true;
        }
    });



    $('#menu-item ul ul > li:has(ul)').addClass("has-sub");

    $('#menu-item ul ul > li > a').click(function () {
        var checkElement = $(this).next();

        $('#menu-item li').removeClass('active');
        $(this).closest('li').addClass('active');


        if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {

            $(this).closest('ul li').removeClass('active');
            checkElement.slideUp('normal');
        }

        if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {

            $('#menu-item ul ul ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }

        if (checkElement.is('ul')) {
            return false;
        } else {
            return true;
        }
    });

    $('#menu-item ul ul li a').click(function () {
        $(this).closest('ul').parents().addClass('active');


    });


    //click outside of main menu to hide
    $(".main-container").click(function () {

        $('#pin-menu').removeClass("fa fa-times");
        $('#pin-menu').addClass("fa fa-bars");

        if ($(".page-wrapper").hasClass("pinned")) {
            setTimeout(function () {
                $(".page-wrapper .menu-text").css("display", "none");
            }, 100);
            $(".page-wrapper").removeClass("pinned");
            $(".page-wrapper").addClass("toggled");
            $("#menu-item").find("ul").find("ul").hide();
            $("#menu-item ul li").removeClass('active');
            $('#menu-item > ul > li:has(ul)').removeClass("has-sub");

        }
    });


    //click on main menu item to open menu


    $("#menu-item").click(function () {

        //close tooltip after click menu-item
        $('[data-toggle="tooltip"]').tooltip('close');
        $('#pin-menu').toggleClass("fa fa-times fa fa-bars");
        //$('#pin-menu').addClass("fa fa-times");





        if ($(".page-wrapper").hasClass("pinned")) {
            setTimeout(function () {
                $(".page-wrapper .menu-text").css("display", "none");
            }, 100);
            $(".page-wrapper").removeClass("pinned");
            $(".page-wrapper").addClass("toggled");
            $("#menu-item").find("ul").find("ul").hide();
            $("#menu-item ul li").removeClass('active');
            $('#menu-item > ul > li:has(ul)').removeClass("has-sub");

        } else {

            $('#pin-menu').removeClass("fa fa-bars");
            $('#pin-menu').addClass("fa fa-times");



            setTimeout(function () {
                $(".page-wrapper .menu-text").css("display", "inline");
            }, 100);
            $(".page-wrapper").addClass("pinned");
            $('#menu-item > ul > li:has(ul)').addClass("has-sub");
            $(".page-wrapper").removeClass("toggled");
        }
    });

});
//end of document function