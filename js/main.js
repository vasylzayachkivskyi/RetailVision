
$(document).ready(function () {

    // open notification -------- //
    $('.header__notification').on('click', function () {
        $('.notification').toggleClass('active');
        $('.header').toggleClass('darkened');
        $('.mainsect').toggleClass('darkened');
    });
    
    // close notification -------- //
    $('.sidebar').on('click', function () {
        $('.header').removeClass('darkened');
        $('.mainsect').removeClass('darkened');
        $('.notification').removeClass('active');
        $('.header__search-dropdown').slideUp();
        $('.header__search').removeClass('active');
    });

    //  header search open ----------------- //
    $('.hsbtn').on('click', function () {
        $('.header__search-dropdown').slideDown();
        $('.header').addClass('darkened');
        $('.mainsect').addClass('darkened');
        $('.header__search').addClass('active');
    });

    $('.header__search .close').on('click', function () {
        $('.header__search-dropdown').slideUp();
        $('.header').removeClass('darkened');
        $('.mainsect').removeClass('darkened');
        $('.header__search').removeClass('active');
    });

    // notifications category swither -------- //
    $('.tab-notification').on('click', function () {
        var dataClass = $(this).attr('data-tab');
        $('.notification-box').removeClass('active-box').hide();
        $('.tab-notification').removeClass('active');
        $(this).addClass('active');
        $('.' + dataClass).addClass('active-box').fadeIn(500);
        return false;
    });

    // sidebar category swither -------- //
    $('.tab-sidebar').on('click', function () {
        var dataClass = $(this).attr('data-tab');
        $('.sidebar-box').removeClass('active-box').hide();
        $('.tab-sidebar').removeClass('active');
        $(this).addClass('active');
        $('.' + dataClass).addClass('active-box').fadeIn(500);
        return false;
    });

    //  sidebar agreements open ----------------- //
    $('.sidebar__agreements').on('click', function () {
        $('.contacts').removeClass('active');
        $('.sidebar__contacts').removeClass('active');
        $('.agreements').toggleClass('active');
        $(this).toggleClass('active');
    });

    //  sidebar contacts open ----------------- //
    $('.sidebar__contacts').on('click', function () {
        $('.agreements').removeClass('active');
        $('.sidebar__agreements').removeClass('active');
        $('.contacts').toggleClass('active');
        $(this).toggleClass('active');
    });

    //  radiobutton form select menu ----------------- //
    $('.select input').on('click', function () {
        $(this).next('.dropdown').slideDown();
    });
    $('.dropdown .dropdown-row').on('click', function () {
        $(this).parent('.dropdown').slideUp();
        const $select = $(this).closest('.select');
        const selectedValue = $(this).find('input[type=radio]').val();
        $select.find('input[type=text]').val(selectedValue);
    });

    //  checkbox form select menu ----------------- //
    $('.select input').on('click', function () {
        $(this).next('.dropdown-response').slideToggle();
    });
    $('.dropdown-btn').on('click', function (event) {
        event.preventDefault();
        $(this).parent('.dropdown-response').slideUp();
        const $select = $(this).closest('.select');
        const selectedValue = $(this).parent('.dropdown-response').find('input[type=checkbox]:checked,input[type=radio]:checked').val();
        var maxLength = 9; // Максимальна довжина для скороченого тексту

        if (selectedValue.length > maxLength) {
            var shortText = selectedValue.substring(0, maxLength) + '...'; // Скорочений текст з трикрапкою
            $select.find('input[type=text]').val(shortText);
        } else {
            $select.find('input[type=text]').val(selectedValue);
        }
    });


    // estate image slider --------------------- // 
    var swiper = new Swiper(".estate-slider", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // estate filter open/hide ----------------- //
    $('.filter').on('click', function () {
        $('.filter-dropdown').slideToggle();
    });



    // lead row settings -------- //
    $('.lead_settings').on('click', function () {
        $(this).next('.lead-row-dropdown').slideToggle();
        $(this).closest('.leads__row').toggleClass('active');
    });

    $('.lead-row-dropdown').on('click', function () {
        $(this).slideUp();
        $(this).closest('.leads__row').removeClass('active');
    });

    $('.leads__rightblock-settings').on('click', function () {
        $(this).next('.lead-row-dropdown').slideToggle();
    });


    // lead info -------- //
    $('.leads__head-btn').on('click', function () {
        $('.leads__info').addClass('show');
        $('.header').addClass('darkened');
        $('.mainsect').addClass('darkened');
    });
    $('.leads__info-close').on('click', function () {
        $('.leads__info').removeClass('show');
        $('.header').removeClass('darkened');
        $('.mainsect').removeClass('darkened');
    });


    // lead edit -------- //
    $('.leads__leftblock-edit').on('click', function () {
        $(this).closest('.leads__info-leftblock').toggleClass('active');
    });

    // lead task name -------- //
    $('.leads__task-name').on('click', function () {
        $(this).next('.task-name__list').slideToggle('fast');
    });
    $('.task-name__list').find('li').on('click', function () {
        $(this).closest('.task-name__list').slideUp('fast');
    });

    // lead task type -------- //
    $('.leads__task-type').on('click', function () {
        $(this).find('ul').slideToggle('fast');
    });





    // notification items z-index from last to first  -------- //
    function assignZIndex() {
        var items = $('.notification-box__item');
        var total = items.length;
        items.each(function (index) {
            var zIndex = total - index;
            $(this).css('z-index', zIndex);
        });
    }
    assignZIndex();


    // notification items collapsing  -------- //
    $('.notification-box__item').on('click', function () {
        var elementTarget = $(this).parent('.notification-box__wrapper').find('.notification-box__item:not(:first-child)');
        $(elementTarget).find('.notification-item__wrapper').slideToggle();
        $(elementTarget).toggleClass('active');
    });


    // init select style
    if ($('.lead_row_input').length > 0) {
        $(function () {
            $('.lead_row_input').styler();
        });
    }

    //datepicker
    $('.datepicker').flatpickr({ /* options here */ });

});