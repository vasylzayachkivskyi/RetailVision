
$(document).ready(function () {

    //  --------------------------------------------- HEADER (NOTIFICATION, SEARCH) ------------------------------------------------------------------- //

    // open notification -------- //
    $('.header__notification').on('click', function () {
        $('.notification').toggleClass('active');
        $('.header').toggleClass('darkened');
        $('.mainsect').toggleClass('darkened');
    });

    // close notification -------- //
    $(document).on('click', function (event) {
        var target = $(event.target);

        if (!target.closest('.notification, .header__notification, .header__search, .notification-close, .delete-list').length) {
            fkt();
        }
    });
    function fkt() {
        $('.header').removeClass('darkened');
        $('.mainsect').removeClass('darkened');
        $('.notification').removeClass('active');
        $('.header__search-dropdown').slideUp();
        $('.header__search').removeClass('active');
    }

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
        $(elementTarget).find('.notification-item__wrapper').slideDown();
        $(elementTarget).addClass('active');
        $(this).closest('.notification__col').addClass('active');
    });

    // notification items collapsing less ----------- //
    $(".less-list").on('click', function () {
        var elementTarget = $(this).closest('.notification__col').find('.notification-box__wrapper').find('.notification-box__item:not(:first-child)');
        $(elementTarget).find('.notification-item__wrapper').slideToggle();
        $(elementTarget).toggleClass('active');
        $(this).closest('.notification__col').toggleClass('active');
    });

    // delete notification col----------- //
    $(".delete-list").click(function () {
        var closestNotificationBox = $(this).closest('.notification-box');
        $(this).closest(".notification__col").remove();
        if (closestNotificationBox.find('.notification__col').length === 0) {
            closestNotificationBox.find('.notification-box__divider').remove();
        }
    });

    // delete notification ----------- //
    $(".notification-close").click(function () {
        var closestNotificationCol = $(this).closest('.notification__col');
        $(this).closest(".notification-box__item").remove();
        if (closestNotificationCol.find('.notification-box__item').length === 0) {
            closestNotificationCol.remove();
        }
    });





    //  header search open ----------------- //
    $('.hsbtn').on('click', function () {
        $('.header__search-dropdown').slideDown();
        $('.header__search').addClass('active');
        $('.submenu__inner').removeClass('active');
    });

    $('.header__search .close, .search-inner__wrapper a').on('click', function () {
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

    //  ------------------------------------------------------ SIDEBAR --------------------------------------------------------- //

    // sidebar category swither -------- //
    $('.tab-sidebar').on('click', function () {
        var dataClass = $(this).attr('data-tab');
        $('.sidebar-box').removeClass('active-box').hide();
        $('.tab-sidebar').removeClass('active');
        $(this).addClass('active');
        $('.' + dataClass).addClass('active-box').fadeIn(500);
        $('.submenu__inner').removeClass('active');
        $('.sidebar__agreements').removeClass('active');
        $('.sidebar__contacts').removeClass('active');
        $('.sidebar__settings').removeClass('active');
        $('.sidebar__estate').removeClass('active');
        $('.personal__card ').removeClass('show');
        $('.user__card-breadcrumbs').removeClass('active');
        return false;
    });

    //  sidebar agreements open ----------------- //
    $('.sidebar__agreements').on('click', function () {
        $('.contacts').removeClass('active');
        $('.settings').removeClass('active');
        $('.sidebar__contacts').removeClass('active');
        $('.sidebar__settings').removeClass('active');
        $('.sidebar__estate').removeClass('active');
        $('.agreements').toggleClass('active');
        $(this).toggleClass('active');
    });

    //  sidebar contacts open ----------------- //
    $('.sidebar__contacts').on('click', function () {
        $('.agreements').removeClass('active');
        $('.settings').removeClass('active');
        $('.sidebar__agreements').removeClass('active');
        $('.sidebar__estate').removeClass('active');
        $('.sidebar__settings').removeClass('active');
        $('.contacts').toggleClass('active');
        $(this).toggleClass('active');
    });

    //  sidebar settings open ----------------- //
    $('.sidebar__settings').on('click', function () {
        $('.agreements').removeClass('active');
        $('.contacts').removeClass('active');
        $('.sidebar__agreements').removeClass('active');
        $('.sidebar__contacts').removeClass('active');
        $('.sidebar__estate').removeClass('active');
        $('.settings').toggleClass('active');
        $(this).toggleClass('active');
    });

    //  sidebar estate open ----------------- //
    $('.sidebar__estate').on('click', function () {
        $('.agreements').removeClass('active');
        $('.contacts').removeClass('active');
        $('.sidebar__agreements').removeClass('active');
        $('.sidebar__contacts').removeClass('active');
        $('.sidebar__settings').removeClass('active');
        $('.subestate').toggleClass('active');
        $(this).toggleClass('active');
    });


    // active sidebar icon when open own sub menu
    $('.agreements .submenu__inner-item, .sidebar__agreements').on('click', function () {
        $('.sidebar__agreements').addClass('active');
        $('.sidebar .tab-sidebar').removeClass('active');
    });

    $('.contacts .submenu__inner-item, .sidebar__contacts').on('click', function () {
        $('.sidebar__contacts').addClass('active');
        $('.sidebar>.tab-sidebar').removeClass('active');
    });

    $('.settings .submenu__inner-item, .sidebar__settings').on('click', function () {
        $('.sidebar__settings').addClass('active');
        $('.sidebar>.tab-sidebar').removeClass('active');
    });

    $('.subestate .submenu__inner-item, .sidebar__estate').on('click', function () {
        $('.sidebar__estate').addClass('active');
        $('.sidebar>.tab-sidebar').removeClass('active');
    });


    // close sidebar when click not submenu -------- //
    $(document).on('click', function (event) {
        var target = $(event.target);

        if (!target.closest('.submenu__inner, .sidebar__settings, .sidebar__contacts, .sidebar__agreements, .sidebar__estate, .submenu__header').length) {
            $('.submenu__inner').removeClass('active');
        }
    });






    // -------------------------------------------- DROPDOWN, CHECKBOX, RUDIOBUTTON ---------------------------------------------------------------------- //

    // click label
    $('label').click(function () {
        $('label').removeClass('active');
        $(this).addClass('active');
    });


    //  checkbox form select menu ----------------- //
    $('.select input[type="text"]').on('click', function () {
        $(this).closest('.select').find('.dropdown-response').slideToggle();

        // close dropdown-element if click not this element-------- //
        $(document).on('click', function (event) {
            var target = $(event.target);
            var selectElements = $('.select');

            selectElements.each(function () {
                var selectElement = $(this);
                var dropdownResponse = selectElement.find('.dropdown-response');

                if (!target.closest(selectElement).length) {
                    dropdownResponse.slideUp();

                }
            });
        });

    });

    // click on select dropdown item
    $('.dropdown-row').on('click', function () {
        var $select = $(this).closest('.select ').find('.commoninput');
        var $checkboxes = $(this).closest('.dropdown-response').find('.customcheck');

        // Отримати значення першого активного чекбокса
        var firstValue = $checkboxes.filter(':checked').first().val();

        // Передати значення в commoninput
        $select.val(firstValue);

        // Кількість активних чекбоксів, крім першого
        var activeCount = $checkboxes.filter(':checked').not(':first').length;

        // Додати +n до значення першого активного чекбокса
        if (activeCount > 0) {
            $select.val($select.val() + ' +' + activeCount);
        }
    });


    //   slice input placeholder 
    $(".short-field").each(function () {
        var input = $(this);
        var placeholder = input.attr("placeholder");
        if (placeholder) { // Перевіряємо, чи існує атрибут "placeholder"
            var placeholderLength = placeholder.length;
            if (placeholderLength > 8) {
                var shortenedPlaceholder = placeholder.substring(0, 8) + "...";
                input.attr("placeholder", shortenedPlaceholder);
            }
        }
    });



    // analytics dropdown ---------------------------------------------- //
    $('.analytics__select-btn .analytics__input').on('click', function () {
        $('.analytics__select-btn').find('ul').slideToggle();
    });

    $(document).on('click', function (event) {
        var target = $(event.target);

        if (!target.closest('.analytics__select-btn, .flatpickr-calendar').length) {
            $('.analytics__select-btn').find('ul').slideUp();
        }
    });

    // period 
    $('.analytics__select-btn li').on('click', function () {
        const $select = $(this).closest('.analytics__select-btn');
        const selectedValue = $(this).find('.analytics__field input').val();
        const selectedLength = selectedValue.length;
        $select.find('.analytics__input').val(selectedValue);
        var maxLength = 12;

        if (selectedLength > maxLength) {
            var shortText = selectedValue.substring(0, maxLength) + '...';
            $select.find('.analytics__input').val(shortText);
        } else {
            $select.find('.analytics__input').val(selectedValue);
        }
    });

    // date picker
    const calendarInputs = $('.analytics__select-btn .calendar input.onlydatepicker');
    // const analyticsInput = $('.analytics__select-btn .analytics__input');
    const maxLength = 18;


    calendarInputs.on('change', function () {

        // const firstDate = calendarInputs.eq(0).val();
        // const secondDate = calendarInputs.eq(1).val();

        const firstDate = $(this).closest('.analytics__select-btn').find('.onlydatepicker').eq(0).val();
        const secondDate = $(this).closest('.analytics__select-btn').find('.onlydatepicker').eq(1).val();

        const periodValue = `${firstDate} - ${secondDate}`;
        const shortText = periodValue.length > maxLength ? periodValue.substring(0, maxLength) + '...' : periodValue;
        $(this).closest('.analytics__select-btn').find('.analytics__input').val(shortText);
    });






    // select dropdown ---------------------------------------------- //
    $('.select').on('click', function () {
        $(this).find('ul').slideToggle();
    });

    $('.select li').on('click', function () {
        const $select = $(this).closest('.select');
        const selectedValue = $(this).find('input[type=radio]').val();
        const selectedLength = selectedValue.length;
        $select.find('input[type=text]').val(selectedValue);
        var maxLength = 23; // Максимальна довжина для скороченого тексту

        if (selectedLength > maxLength) {
            var shortText = selectedValue.substring(0, maxLength) + '...'; // Скорочений текст з трикрапкою
            $select.find('input[type=text]').val(shortText);
        } else {
            $select.find('input[type=text]').val(selectedValue);
        }
    });

    // close dropdown if click not this element-------- //
    $(document).on('click', function (event) {
        var target = $(event.target);
        var selectElements = $('.select');

        selectElements.each(function () {
            var selectElement = $(this);
            var dropdownResponse = selectElement.find('ul');


            if (!target.closest(selectElement).length) {
                dropdownResponse.slideUp();

            }
        });
    });

    // submenu select dropdown

    $('.has-submenu>label').each(function () {
        var $parent = $(this).parent('.has-submenu');
        var $checkboxes = $parent.find('.submenu-dropdown input[type="checkbox"]');
        var fakeCheckbox = $parent.find('.fake-checkbox');
        var isClicked = false;
    
        $(this).on('click', function () {
            if (!isClicked) {
                fakeCheckbox.addClass('active');
                $checkboxes.prop('checked', true);
                $parent.find('.submenu-dropdown').find('.jq-checkbox').addClass('checked');
                $parent.find('.submenu-dropdown').slideDown();
                isClicked = true;
            } else {
                fakeCheckbox.removeClass('active');
                $checkboxes.prop('checked', false);
                $parent.find('.submenu-dropdown').find('.jq-checkbox').removeClass('checked');
                $parent.find('.submenu-dropdown').slideUp();
                isClicked = false;
            }
        });
    });

    $('.submenu-dropdown input[type="checkbox"]').on('change', function () {
        var $parent = $(this).closest('.has-submenu');
        var $checkboxes = $parent.find('.submenu-dropdown input[type="checkbox"]');
        var fakeCheckbox = $parent.find('.fake-checkbox');

        if ($checkboxes.is(':checked')) {
            fakeCheckbox.addClass('active');
        } else {
            fakeCheckbox.removeClass('active');
        }
    });






    // --------------- //

    // ----------- DROPDOWN ELEMENT -------- //
    $('.dropdown-element p').on('click', function () {
        $(this).parent('.dropdown-element').find('.dropdownwrap').slideToggle('fast');
    });
    $('.dropdown-element li').on('click', function () {
        $(this).closest('.dropdownwrap').slideUp('fast');
        const select = $(this).closest('.dropdownwrap');
        const selectedValue = $(this).text();
        select.prev('.dropdown-element p').text(selectedValue);
        select.closest('.dropdown-element').addClass('filled');
    });

    $(document).on('click', function (event) {
        var target = $(event.target);
        var selectElements = $('.dropdown-element');

        selectElements.each(function () {
            var selectElement = $(this);
            var dropdownResponse = selectElement.find('.dropdownwrap');

            if (!target.closest(selectElement).length) {
                dropdownResponse.slideUp('fast');

            }
        });
    });



    // -----------MULTISELECT-------- //
    $('.multiselect input').on('click', function () {
        $(this).closest('.multiselect').find('.dropdownwrap').slideToggle('fast');
        $(this).closest('.multiselect').find('input[type="text"]').val('')
        $(this).closest('.multiselect').find('.loading').toggleClass('active');
        $('.dropdownwrap-bottom').removeClass('active');
        $('.dropdownwrap-bottom span').text('');
    });


    // multiselect-edit -------------
    $('.multiselect-edit').on('click', function () {
        $(this).closest('dl').find('.dropdownwrap').slideToggle('fast');
        $(this).closest('dl').find('input[type="text"]').focus();
        $(this).closest('dl').find('input[type="text"]').val('')
        $(this).closest('dl').find('.loading').toggleClass('active');
        $('.dropdownwrap-bottom').removeClass('active');
        $('.dropdownwrap-bottom span').text('');
    });
    // -------------

    $('.dropdownwrap-bottom').on('click', function () {
        $(this).closest('.multiselect').find('.dropdownwrap').slideToggle('fast');
        $(this).closest('.multiselect').find('.loading').removeClass('active');
    });

    $('.multiselect li').on('click', function () {
        $(this).closest('.multiselect').find('.loading').removeClass('active');
        const select = $(this).closest('.dropdownwrap');
        const selectedValue = $(this).text();
        select.slideUp('fast');
        select.closest('.multiselect').find('input[type="text"]').val(selectedValue);
        select.closest('.multiselect').addClass('filled');
    });

    $('.multiselect input[type="text"]').on('input', function () {
        var text = $(this).val();
        $('.dropdownwrap-bottom').addClass('active');
        $('.dropdownwrap-bottom span').text(text);
    });

    $(document).on('click', function (event) {
        var target = $(event.target);
        if (!target.closest('.multiselect').length) {
            $('.loading').removeClass('active');
        }
    });


    $(document).on('click', function (event) {
        var target = $(event.target);
        var selectElements = $('dl');
        selectElements.each(function () {
            var selectThis = $(this);
            var dropdownResponse = selectThis.find('.dropdownwrap');
            if (!target.closest(selectThis).length) {
                dropdownResponse.slideUp('fast');
            }
        });
    })

    // $(document).on('click', function (event) {
    //     var target = $(event.target);
    //     var selectElements = $('.multiselect');
    //     selectElements.each(function () {
    //         var selectThis = $(this);
    //         var dropdownResponse = selectThis.find('.dropdownwrap');
    //         if (!target.closest(selectThis).length) {
    //             dropdownResponse.slideUp('fast');
    //         }
    //     });
    // })


    // ------------------  NEWSFEED TAB ---------------------- //

    // newsfeed slider --------------------- // 
    var swiper = new Swiper(".newsfeed-slider", {
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // more/less
    $('.newsfeed__morebtn').on('click', function () {
        $(this).toggleClass('active');
        // $('.newsfeed__rating-table ').toggleClass('active');
        $('.newsfeed__rating-table ').find('.hidden').slideToggle('fast');
    });


    // sort tooltip 
    $('.sort-btn').on('click', function () {
        $(this).toggleClass('active');
    });

    // newsfeed dropdown ---------------------------------------------- //
    $('.newsfeed__select-btn .analytics__input').on('click', function () {
        $('.newsfeed__select-btn').find('ul').slideToggle();
    });

    $(document).on('click', function (event) {
        var target = $(event.target);

        if (!target.closest('.newsfeed__select-btn, .flatpickr-calendar').length) {
            $('.newsfeed__select-btn').find('ul').slideUp();
        }
    });

    $('.newsfeed__select-btn li').on('click', function () {
        const $select = $(this).closest('.newsfeed__select-btn');
        const selectedValue = $(this).find('.analytics__field input').val();
        const selectedLength = selectedValue.length;
        $select.find('.analytics__input').val(selectedValue);
        var maxLength = 18;

        if (selectedLength > maxLength) {
            var shortText = selectedValue.substring(0, maxLength) + '...';
            $select.find('.analytics__input').val(shortText);
        } else {
            $select.find('.analytics__input').val(selectedValue);
        }
    });

    const calendar = $('.newsfeed__select-btn .calendar input.onlydatepicker');
    const newsfeedInput = $('.newsfeed__select-btn .analytics__input');
    const maxL = 20;

    calendar.on('change', function () {
        const firstDate = calendar.eq(0).val();
        const secondDate = calendar.eq(1).val();

        const periodValue = `${firstDate} - ${secondDate}`;
        const shortText = periodValue.length > maxL ? periodValue.substring(0, maxL) + '...' : periodValue;
        newsfeedInput.val(shortText);
    });


    // ------------------------  TASKS TAB ------------------------------------- //

    // show buttons on field tasks table row
    $('.table__row-field textarea').on('input', function () {
        if ($(this).val() !== '') {
            $(this).closest('.table__row-field').addClass('active');
        } else {
            $(this).closest('.table__row-field').removeClass('active');
        }
    });

    // action cancel button on field tasks row
    $('.table__row .cancel').on('click', function (event) {
        event.preventDefault();
        var $tableRow = $(this).closest('.table__row');
        $tableRow.find('.table__row-field textarea').val('');
        $tableRow.find('.table__row-input').prop('checked', false);
        $tableRow.find('.table__row-field').removeClass('active');
        $tableRow.removeClass('active');
    });

    // action perform button

    $('.table__row .perform').on('click', function (event) {
        event.preventDefault();
        var $tableRow = $(this).closest('.table__row');
        var $tasksCompletedTable = $('.tasks-completed table');
        if ($tasksCompletedTable.length === 0) {
            $tasksCompletedTable = $('<table class="tasks-completed"></table>');
            $('.tasks-not-completed').after($tasksCompletedTable);
        }
        $tableRow.appendTo($tasksCompletedTable);
        $tableRow.find('.table__row-input').prop('checked', false);
        $tableRow.find('.table__row-field').removeClass('active');
        $tableRow.addClass('done');

    });





    // ------------------ ESTATE TAB -------------------------- //
    $('.estate__head-tab').on('click', function () {
        var dataClass = $(this).attr('data-tab');
        $('.estate__window').removeClass('show').hide();
        $('.estate__head-tab').removeClass('active');
        $(this).addClass('active');
        $('.' + dataClass).addClass('show').fadeIn(500);
        return false;
    });

    // click on burger submenu
    $('.burger-estate').on('click', function () {
        $('.subestate').toggleClass('active');
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

    // estate header ----------------- //
    $('.estfltr-btn').on('click', function () {
        $(this).closest('.estate__header').toggleClass('active');
    });




    // estate card show/hide -------------- //
    // sell
    $('.open-estcard-sell').on('click', function () {
        $('.estcard-sell').addClass('show');
        $('.estbuttons-sell').addClass('show');
        $('.estcard-breadcrumbs').addClass('active');
        $('body').addClass('hidden');
    });
    $('.close-estcard-sell').on('click', function () {
        $('.estcard-sell').removeClass('show');
        $('.estbuttons-sell').removeClass('show');
        $('.estcard-breadcrumbs').removeClass('active');
        $('body').removeClass('hidden');
    });

    // rent
    $('.open-estcard-rent').on('click', function () {
        $('.estcard-rent').addClass('show');
        $('.estbuttons-rent').addClass('show');
        $('.estcard-breadcrumbs').addClass('active');
    });
    $('.close-estcard-rent').on('click', function () {
        $('.estcard-rent').removeClass('show');
        $('.estbuttons-rent').removeClass('show');
        $('.estcard-breadcrumbs').removeClass('active');
    });


    // estate card slider -------------------------------------- //
    var swiper = new Swiper(".estcard__slider", {
        slidesPerView: "auto",
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        keyboard: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },

            768: {
                slidesPerView: "auto",
            },
        },
    });

    // estate page slider -------------------------------------- //
    var swiper = new Swiper(".estpage__slider", {
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        keyboard: true,

    });

    //  gallery ----------- //
    $('[data-fancybox^="images"]').each(function () {
        var galleryType = $(this).data('fancybox');

        $(`[data-fancybox="${galleryType}"]`).fancybox({
            thumbs: {
                autoStart: true
            },
        });
    });

    // estate page card buttons
    $('.estcard__buttons a').on('click', function () {
        $(this).toggleClass('active');
    });



    // more/less text
    $('.more-btn').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest('.estcard__box').find('.estcard__box-moretext').slideToggle('active');
    });


    // estpage header buttons
    $('.estheader__info-btn').on('click', function () {
        $(this).toggleClass('active');
    });

    // estpage slider buttons
    $('.estpage__slider-btns a').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });


    // estpage open objects
    $('.estheader__info-btn.like').on('click', function () {
        $('.objcard.deleted').removeClass('active');
        $('.estheader__info-btn.delete').removeClass('active');
        $('.objcard.saved').toggleClass('active');
    });

    $('.estheader__info-btn.delete').on('click', function () {
        $('.estheader__info-btn.like').removeClass('active');
        $('.objcard.saved').removeClass('active');
        $('.objcard.deleted').toggleClass('active');
    });

    $('.estheader__info-btn.list').on('click', function () {
        $('.estheader__info-btn.like').removeClass('active');
        $('.estheader__info-btn.delete').removeClass('active');
        $('.objcard.saved').removeClass('active');
        $('.objcard.deleted').removeClass('active');
    });









    // ------------------------  LEADS TAB ------------------------------------- //

    // lead saved -------- //
    $('.leads-agreement').on('click', function () {
        $(this).closest('.leads__info-agreement').addClass('saved-card');
    });
    //  table__row active
    $('.table__row .table__row-input').on('click', function () {
        $(this).toggleClass('active');
    });

    // table unite button
    function checkCheckboxes(e) {
        var activeCheckboxes = $(e).closest('.table-wrapper').find('.table__row-checkbox input:checked').not('.head_table_check');
        var uniteBtn = $(e).closest('.table-wrapper').find('.unite-btn');

        if (activeCheckboxes.length >= 2) {
            uniteBtn.addClass('active');
        } else {
            uniteBtn.removeClass('active');
        }
    }
    $('.table__row-checkbox input').on('change', function () {
        checkCheckboxes(this);
    });


    // lead row settings -------- //
    $('.lead-block-dropdown').on('click', function () {
        $(this).slideUp();
    });

    // lead info open/close-------- //
    $('.open-leadinfo').on('click', function () {
        $('.leads__info').addClass('show');
    });
    $('.close-leadinfo').on('click', function () {
        $('.leads__info').removeClass('show');
    });

    // lead rightblock settings -------- //
    $('.leads__rightblock-settings').on('click', function () {
        $(this).next('.lead-block-dropdown').slideToggle();
    });


    // lead rightblock edit note -------- //
    $('.cancel-edit, .done-edit').on('click', function () {
        $(this).closest('.note-edit').slideUp();
    })

    $('.lead__rightblock_edit').on('click', function () {
        $(this).closest('.leads__info-rightblock').addClass('active');
        $(this).closest('.leads__info-rightblock').find('.note-edit').slideToggle();

        var leadElement = $(this).closest('.leads__info-rightblock').find('.leads__rightblock-content p');
        var currentValue = leadElement.text();

        // Замінюємо елемент на textarea для редагування
        leadElement.replaceWith('<textarea>' + currentValue + '</textarea>');

        // Встановлюємо фокус на новоствореному textarea
        $('.leads__rightblock-note textarea').focus();

        $('.done-edit').on('click', function (e) {
            e.preventDefault();
            var textEl = $(this).closest('.leads__rightblock-content').find('.leads__rightblock-note textarea');
            var editedValue = textEl.val().trim();
            // Замінюємо textarea на оновлене значення
            textEl.replaceWith('<p>' + editedValue + '</p>');
        });

        $('.cancel-edit').on('click', function (e) {
            e.preventDefault();
            var textarea = $(this).closest('.leads__rightblock-content').find('textarea');

            // Замінюємо textarea на початковий елемент p з оригінальним значенням
            textarea.replaceWith('<p>' + currentValue + '</p>');
        });
    });


    // lead rightblock edit result-------- //
    $('.lead__rightblock_done').on('click', function () {
        $(this).closest('.leads__info-rightblock').find('.result').slideDown();
    });
    $('.cancel-result').on('click', function () {
        $(this).closest('.result').slideUp();
    });
    $('.done-result').on('click', function (event) {
        event.preventDefault();
        var textareaValue = $(this).closest('.leads__info-rightblock').find('.result-text').val();
        var resultInfo = $('<h3 class="result-info"></h3>').text('Результат: ' + textareaValue);
        $(this).closest('.leads__info-rightblock').addClass('done');
        $(this).closest('.result').html(resultInfo);
    });

    // lead rightblock delete -------- //
    $('.lead__rightblock_delete').on('click', function () {
        $(this).closest('.leads__info-rightblock').hide();
    });


    // lead task name -------- //
    $('.leads__task-name').on('click', function () {
        $(this).next('.task-name__list').slideToggle('fast');
    });
    $('.task-name__list li').on('click', function () {
        $(this).closest('.task-name__list').slideUp('fast');
        const select = $(this).parent('.task-name__list');
        const selectedValue = $(this).text();
        select.prev('.leads__task-name').val(selectedValue);
    });

    // lead task type -------- //
    $('.tasktype').on('click', function () {
        $(this).find('ul').slideToggle('fast');
    });
    $('.tasktype li').on('click', function () {
        const selectedValue = $(this).html();
        $(this).closest('.tasktype').find('p').html(selectedValue);
        var color = $(this).attr('data-color');
        $(this).closest('.tasktype').removeClass('blue grey green');
        $(this).closest('.tasktype').addClass(color);
    });

    // lead task/note choise
    $('.lead-note').on('click', function () {
        $('.leads__task-headinfo').hide();
    });
    $('.lead-task').on('click', function () {
        $('.leads__task-headinfo').show();
    });


    // action to element on lead left block
    $('.hover-element li').on('click', function () {
        var action = $(this).text().trim();
        var leadElement = $(this).closest('.leads__leftblock-action').find('.lead-element');

        if (action === 'Перейти') {
            window.open(leadElement.text(), '_blank');
        } else if (action === 'Скопіювати') {
            copyToClipboard(leadElement.text());
        } else if (action === 'Редагувати') {
            var currentValue = leadElement.text();

            // Замінюємо елемент на textarea для редагування
            leadElement.replaceWith('<input type="text" class="lead-element-edit" value="' + currentValue + '">');

            // Встановлюємо фокус на новоствореному textarea
            $('.lead-element-edit').focus();

            // Обробник події для збереження змін при натисканні клавіші Enter
            $('.lead-element-edit').on('keydown', function (e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    var editedValue = $(this).val().trim();

                    // Замінюємо textarea на оновлене значення
                    $(this).replaceWith('<p class="lead-element">' + editedValue + '</p>');
                }
            });
        }
    });

    // Copy text 
    function copyToClipboard(text) {
        var tempInput = $('<input>');
        $('body').append(tempInput);
        tempInput.val(text).select();
        document.execCommand('copy');
        tempInput.remove();
    }

    // edit element on click ------------------ //
    $('.edit-element').on('click', function () {
        var leadElement = $(this).find('p');
        $(this).addClass('filled');

        // Замінюємо елемент на input для редагування
        leadElement.replaceWith('<input type="text" class="lead-element-edit">');

        // Встановлюємо фокус на новоствореному input
        $('.lead-element-edit').focus();

        // Обробник події для введення тільки цифрових символів та обмеження до 4 символів
        $('.lead-element-edit').on('input', function () {
            var editedValue = $(this).val().trim();

            if ($(this).closest('.edit-element').hasClass('price')) {
                // Видаляємо всі символи, крім цифр
                editedValue = editedValue.replace(/\D/g, '');

                // Обмежуємо значення до 4 символів
                editedValue = editedValue.slice(0, 4);

                // Додаємо знак долара на останнє місце
                editedValue = '$' + editedValue;
            } else if ($(this).closest('.edit-element').hasClass('number')) {
                // Видаляємо всі символи, крім цифр
                editedValue = editedValue.replace(/[^0-9+]/g, '');
            }

            // Оновлюємо значення input
            $(this).val(editedValue);
        });

        // Обробник події для збереження змін при натисканні клавіші Enter
        $('.lead-element-edit').on('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                var editedValue = $(this).val().trim();

                // Замінюємо input на оновлене значення
                $(this).replaceWith('<p class="lead-element">' + editedValue + '</p>');
            }
        });
    });


    // dropdown choise comunication
    $('.dropdown-response .dropdown-check').on('click', function () {
        var $checkbox = $(this); // Поточний чекбокс, який ми клікнули
        var $dropdownElement = $checkbox.closest('.dropdown-element'); // Батьківський елемент блоку dropdown-element
        var selectedValues = []; // Масив для збереження обраних значень

        // Знаходимо всі чекбокси в батьківському блоку і обробляємо їх
        $dropdownElement.find('.dropdown-check:checked').each(function () {
            selectedValues.push($(this).val()); // Додаємо значення до масиву
        });

        // Перевіряємо, чи є обрані значення, і відповідно додаємо або забираємо клас "not-filled"
        if (selectedValues.length > 0) {
            $dropdownElement.removeClass('not-filled');
            // Записуємо обрані значення у відповідний елемент <p> блоку dropdown-element
            $dropdownElement.find('p').text(selectedValues.join(', '));
        } else {
            $dropdownElement.addClass('not-filled');
            // Якщо нічого не обрано, показуємо початковий текст у відповідному елементі <p>
            $dropdownElement.find('p').text('Оберіть варіант');
        }
    });



    // lead row checkbox ------------ //
    $('.head_table_check').click(function () {
        var name = $(this).attr('name');
        var checkboxes = $('input[type="checkbox"][name="' + name + '"]');

        if ($(this).prop('checked')) {
            checkboxes.prop('checked', true);
            checkboxes.closest('.table__row').addClass('active');
        } else {
            checkboxes.prop('checked', false);
            checkboxes.closest('.table__row').removeClass('active');
        }
    });
    $('.table__row input[type="checkbox"]').click(function () {
        $(this).closest('.table__row').toggleClass('active');
    });




    //  ------------------------ AGREEMENTS TAB ---------------------------------- //

    // click on burger submenu
    $('.burger-agreements').on('click', function () {
        $('.agreements').toggleClass('active');
    });

    // show saleowner table instruments
    $('.table-with-menu .table__row-input').on('change', function () {
        var checkedCount = $('.table__row-input:checked').length;

        if (checkedCount >= 1) {
            $(this).closest('.commontable').addClass('active-instruments');
        } else {
            $('.commontable').removeClass('active-instruments');
        }
    });

    // hide saleowner table instruments
    $('.table__instruments-check').on('click', function () {
        $('.table__row-input').prop('checked', false);
        $('.commontable').removeClass('active-instruments');
        $('.table__row').removeClass('active');
    });

    // table/kanban switcher
    $('.saleowner__head-tabs p').on('click', function () {
        $(this).closest('.saleowner__head-tabs').find('p').removeClass('active')
        $(this).addClass('active');

        if ($(this).hasClass('kanban-tab')) {
            $(this).closest('.sidebar-box').find('.table-wrapper').hide();
            $(this).closest('.sidebar-box').find('.saleowner__kanban').show();
            $(this).closest('.sidebar-box').find('.kanban-tab').addClass('active');

        } else if ($(this).hasClass('table-tab')) {
            $(this).closest('.sidebar-box').find('.saleowner__kanban').hide();
            $(this).closest('.sidebar-box').find('.table-wrapper').show();
            $(this).closest('.sidebar-box').find('.table-tab').addClass('active');
        }
    });

    // saleowner head filter
    $('.saleowner__head-filterbtn').on('click', function () {
        var parrentBox = $(this).closest('.sidebar-box');
        $(this).toggleClass('active');
        parrentBox.find('.form__filter').slideToggle();
        parrentBox.find('.estate__window').toggleClass('active');
        parrentBox.find('.saleowner__table').toggleClass('active');
        parrentBox.find('.contact__table').toggleClass('active');
        parrentBox.find('.company__table').toggleClass('active');
        parrentBox.find('.saleowner__kanban').toggleClass('active');
    });

    // saleowner info open/close-------- //
    $('.open-saleownerinfo').on('click', function () {
        $('.saleowner__info').addClass('show');
        $('.saleowner__info-breadcrumbs').addClass('active');
    });
    $('.close-saleownerinfo').on('click', function () {
        $('.saleowner__info').removeClass('show');
        $('.saleowner__info-breadcrumbs').removeClass('active');
    });

    // info category swither -------- //
    $('.info-righthead__tab').on('click', function () {
        var dataClass = $(this).attr('data-tab');
        $('.info-righthead__box').removeClass('active-box').hide();
        $('.info-righthead__tab').removeClass('active');
        $(this).addClass('active');
        $('.' + dataClass).addClass('active-box').fadeIn(500);
        return false;
    });


    // KANBAN instruments show/hide
    $('.btn-bottom-instruments').on('click', function () {
        $('.saleowner__bottom').toggleClass('active');
    });


    // info search tabs swither -------- //
    $('.tab-infosearch').on('click', function () {
        var dataClass = $(this).attr('data-tab');
        $('.infosearch-box').removeClass('active-box').hide();
        $('.tab-infosearch').removeClass('active');
        $(this).addClass('active');
        $('.' + dataClass).addClass('active-box').fadeIn(500);
        return false;
    });

    // info search tabs swither -------- //
    $('.tab-infolisting').on('click', function () {
        var dataClass = $(this).attr('data-tab');
        $('.infolisting-box').removeClass('active-box').hide();
        $('.tab-infolisting').removeClass('active');
        $(this).addClass('active');
        $('.' + dataClass).addClass('active-box').fadeIn(500);
        return false;
    });

    // open/hide map ------
    $('.map_btn').on('click', function (e) {
        e.preventDefault();
        $('.info-specifications__map').slideToggle();
    });

    // active bottom block buttons
    $('.leads__info-leftblock').on('click', function () {
        $('.leads__info-agreement').removeClass('inactive');
    });

    // show textarea when source client is other
    $('.source-client ul li').click(function () {
        var parentElement = $(this).closest('.source-client');
        if ($(this).hasClass('open-area')) {
            parentElement.next('.dropdown-area').addClass('active');
        } else {
            parentElement.next('.dropdown-area').removeClass('active');
        }
    });

    // open/hide map popup form
    $('.dynamic-map').on('click', function () {
        $('.map__form').toggleClass('active');
    });

    // show buttons on map popup form
    $('.commoninput').on('input', function () {
        var inputValue = $(this).val().trim();
        var formBottom = $('.map__form-bottom');

        if (inputValue !== '') {
            formBottom.removeClass('disabled');
        } else {
            formBottom.addClass('disabled');
        }
    });

    //   click copy on client listing block 
    $('.copyblock').on('click', function () {
        $(this).addClass('active');
        var copiedText = $(this).find('span');
        copiedText.fadeIn(0).fadeOut(600);
    });




    // ------------------ BASE TAB -------------------------- //

    $('.base__tab').on('click', function () {
        var dataClass = $(this).attr('data-tab');
        $('.base__window').removeClass('show').hide();
        $('.base__tab').removeClass('active');
        $(this).addClass('active');
        $('.' + dataClass).addClass('show').fadeIn(500);
        return false;
    });

    // ------------------ PARSER TAB -------------------------- //

    $('.parser__tab').on('click', function () {
        var dataClass = $(this).attr('data-tab');
        $('.parser__window').removeClass('show').hide();
        $('.parser__tab').removeClass('active');
        $(this).addClass('active');
        $('.' + dataClass).addClass('show').fadeIn(500);
        return false;
    });


    //  ------------------- PARSER FILTER BTN ----------------- //
    $('.parser-filterbtn').on('click', function () {
        $('.parser__window').toggleClass('active');
    });

    $('.parser__tab').on('click', function () {
        console.log('df');
        if ($(this).attr('data-tab') == 'parser-my') {
            $('.parser-filterbtn').hide();
            $('.parser-filterbtn').next('.clearfilter').hide();
        } else {
            $('.parser-filterbtn').show();
            $('.parser-filterbtn').next('.clearfilter').show();
        }
    });


    // ------------------ CONTACT TAB ---------------------- //



    // contacts head dropdown
    $('.contact__head-btn').on('click', function () {
        $(this).find('ul').slideToggle();
    });

    // burger contacts
    $('.burger-contacts').on('click', function () {
        $('.contacts').toggleClass('active');
    });

    // contact agreements show more
    $('.contact__agreements-more').on('click', function () {
        $(this).toggleClass('active');
        $(this).prev('.contact__agreements-wrap').slideToggle();
    });

    // upload image
    $('.imageUpload').change(function () {
        var input = this;
        $(this).closest('.avatar-container').addClass('uploaded');

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $(input).closest('.avatar-container').find('img').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    });

    // delete uploaded img
    $('.delete-button').click(function () {
        var image = $(this).closest('.avatar-container').find('img');
        $('.avatar-container').removeClass('uploaded');

        // Очищаємо значення атрибута "src" зображення
        // image.attr('src', '');

        // Якщо потрібно встановити пустий шлях до зображення:
        // image.prop('src', '');

        // Якщо потрібно встановити альтернативний шлях до зображення після видалення:
        image.attr('src', 'img/user_avatar_choise.png');
    });





    // --------------------------- SETTINGS TAB ------------------------------ //
    // click on burger submenu
    $('.burger-settings').on('click', function () {
        $('.settings').toggleClass('active');
    });
    // checks fields are filled
    $('.user__popup-right input').on('input', function () {
        $('.user__popup-bottom').removeClass('inactive');
        $('.user__inner-bottom').removeClass('inactive');
    });

    // user info open/close-------- //
    $('.open-usercard').on('click', function () {
        $('.personal__card').addClass('show');
        $('.user__card-breadcrumbs').addClass('active');
    });
    $('.close-usercard').on('click', function () {
        $('.personal__card').removeClass('show');
        $('.user__card-breadcrumbs').removeClass('active');
    });


    // show/hide password ------------------ //
    $('.inputfield.password .showpass').on('click', function () {
        $(this).toggleClass('hide');

        var inputField = $(this).siblings('input');
        var inputType = inputField.attr('type');
        if (inputType === 'password') {
            inputField.attr('type', 'text');
        } else {
            inputField.attr('type', 'password');
        }
    });






    // -------------------- POPUP ------------------------ //
    $('.popup__btn').on('click', function () {
        var indexPopup = $(this).attr('data-popup');
        $('.popup__window').removeClass('active');
        $('.' + indexPopup).addClass('active');
        return false;
    });

    $('.popup__close').on('click', function () {
        $('.popup__window').removeClass('active');
    });

    // close popup -------- //
    $(document).on('click', function (event) {
        var target = $(event.target);

        if (!target.closest('.popup__window').length) {
            $('.popup__window').removeClass('active');
        }
    });

    // popup from popup
    $('.popup__wrapper input[type="radio"]').click(function () {
        var selectedValue = $(this).data('value');
        $(this).closest('.popup__wrapper').find('.popup__btn').attr('data-popup', selectedValue);
    });

    // popup hide area
    $('.hide-area textarea').hide();

    $('.hide-area label').click(function () {
        var textarea = $(this).siblings('textarea');

        if (textarea.is(':hidden')) {
            textarea.show();
        }
    });

    $('label:not(.hide-area label)').click(function () {
        $('.hide-area textarea').hide();
    });


    // ---------------- DATE TIME PICKER ------------------------- //
    $('.datepicker').on('click', function () {
        $('.datepicker').addClass('width-active');
    });
    $('.datepicker').flatpickr({
        time_24hr: true,
        dateFormat: "d.m.Y H:i",
        ariaDateFormat: "d.m.Y G:i",
        altFormat: "d.m.Y G:i",
        enableTime: true,
        minDate: "Завтра",
        minuteIncrement: 30,
        disableMobile: "true",
        locale: {
            firstDayOfWeek: 1, // Встановлюємо перший день тижня на понеділок
            months: {
                shorthand: ['Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Гру'],
                longhand: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']
            },
            weekdays: {
                shorthand: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                longhand: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"]
            }
        }
    });

    $('.onlydatepicker').flatpickr({
        time_24hr: true,
        dateFormat: "d.m.y",
        ariaDateFormat: "d.m.y",
        altFormat: "d.m.y",
        enableTime: false,
        minDate: "Завтра",
        minuteIncrement: 30,
        disableMobile: "true",
        locale: {
            firstDayOfWeek: 1,
            months: {
                shorthand: ['Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Гру'],
                longhand: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']
            },
            weekdays: {
                shorthand: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                longhand: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"]
            }
        }
    });



    // ----------  INIT CUSTOM INPUTS ------------------- //
    // formstyler
    $(function () {
        $('.customradio, .customcheck, .downloadinput').styler();
    });

    // select 2
    $('.customselect').select2();

    // ---------- SHOW UPLOAD IMAGE ------------------- //
    $('.downloadinput').on('change', function (e) {
        var file = e.target.files[0];
        var reader = new FileReader();
        var $downloadfield = $(this).closest('.downloadfield');
        var $col3 = $downloadfield.closest('.uploadblock');
        var $row = $col3.closest('.row');
        var imageName = $downloadfield.find('span').text().trim();
        var imageId = $downloadfield.attr('data-block');
        var imageContainerId = 'image-container-' + imageId;
        var $imageContainer = $('#' + imageContainerId);

        if ($imageContainer.length === 0) {
            $imageContainer = $('<div>').addClass('image-container row').attr('id', imageContainerId);
            $row.after($imageContainer);
            var $heading = $('<h3>').text(imageName);
            $imageContainer.append($heading);
        }

        reader.onload = function (e) {
            var image = $('<img>').attr('src', e.target.result);
            var buttonl = $('<button>').addClass('imagebtnl')
            var buttonr = $('<button>').addClass('imagebtnr')
            var imagewrap = $('<div>').addClass('imagewrapper').append(image, buttonr, buttonl);
            var $imageCol = $('<div>').addClass('col-xl-3 col-6').append(imagewrap);
            $imageContainer.append($imageCol);
        };

        reader.readAsDataURL(file);
    });


    // buttons on upload image ---------- //
    $(document).on('click', '.imagebtnr', function () {
        var col3 = $(this).closest('.col-xl-3');
        var imageContainer = $(this).closest('.image-container');
        var col3Count = imageContainer.find('.col-xl-3').length;
        col3.remove(); // Видалення col-3, що містить кнопку
        if (col3Count <= 1) {
            imageContainer.remove(); // Видалення image-container, якщо в ньому немає col-3
        }
    });

    $(document).on('click', '.imagebtnl', function () {
        var block = $(this).closest('.col-xl-3').find('img');
        var currentRotation = block.data('rotation') || 0;
        var newRotation = currentRotation - 90;
        var wrapper = $(this).closest('.col-xl-3').find('.imagewrapper');
        wrapper.toggleClass('high');
        block.css('transform', 'rotate(' + newRotation + 'deg)');
        block.data('rotation', newRotation);
    });






    //  tooltip -------- //
    $('.tooltip-common').hover(
        function () {
            var tooltipText = $(this).find('.tooltip-text');
            tooltipText.css({
                top: event.clientY + 'px',
                left: event.clientX + 12 + 'px',
                visibility: 'visible',
                opacity: 1
            });
        },
        function () {
            var tooltipText = $(this).find('.tooltip-text');
            tooltipText.css({
                visibility: 'hidden',
                opacity: 0
            });
        }
    );

    $(document).mousemove(function (event) {
        var tooltipText = $('.tooltip-common:hover .tooltip-text');
        tooltipText.css({
            top: event.clientY + 'px',
            left: event.clientX + 12 + 'px'
        });
    });


    //  enter numbers ------------- //
    $('.numberonly').on('input', function () {
        // Отримуємо значення введеного числа
        let value = $(this).val();

        // Замінюємо всі символи, крім цифр, на порожній рядок
        value = value.replace(/[^\d]/g, '');

        // Форматуємо число, додаючи пробіли між тисячними
        value = Number(value).toLocaleString();

        // Оновлюємо значення в полі вводу
        $(this).val(value);
    });

    // phone mask------------------ //
    $('.phonemask input[type="text"]').on('input', function (e) {
        var inputValue = $(this).val();
        var numericValue = inputValue.replace(/\D/g, '');

        if (numericValue.startsWith('38')) {
            numericValue = '+38' + numericValue.substring(2);
        } else {
            numericValue = '+38' + numericValue;
        }

        $(this).val(numericValue);
    });



    // LOGIN ----------------------------------- //

    // login-registration tabs -------------- //
    $('.log-tab').on('click', function () {
        var dataClass = $(this).attr('data-tab');
        $('.log-tab').removeClass('active');
        $(this).addClass('active');
        $('.log-box').removeClass('active-box').hide();
        $('.' + dataClass).addClass('active-box').fadeIn(500);
        return false;
    });

    $('.forgot-password').on('click', function () {
        $('.login__head-tabs').hide();
    });

    $('.restore-tabs .log-tab').on('click', function () {
        $('.login__head-tabs').show();
        if ($(this).attr('data-tab') == 'login-window') {
            $('.login__head-tabs').find('[data-tab="login-window"]').addClass('active');
        } else {
            $('.login__head-tabs').find('[data-tab="registration-window"]').addClass('active');
        }
    });


    // check fields 
    $('.log-box input').on('input', function () {
        var $parentLogBox = $(this).closest('.log-box');
        var allFieldsFilled = true;

        $parentLogBox.find('input').each(function () {
            if ($(this).val() === '') {
                allFieldsFilled = false;
                return false; // Перервати цикл, якщо знайдено незаповнене поле
            }
        });

        if (allFieldsFilled) {
            $parentLogBox.find('button').prop('disabled', false);
        } else {
            $parentLogBox.find('button').prop('disabled', true);
        }
    });


    // 2.10.23 change ---- //

    // limit symbol on input  ------------ //
    $('.limit-counter').each(function () {
        var maxCharacters = parseInt($(this).attr('data-limit'), 10); // Перевірка на числове значення
        if (!isNaN(maxCharacters)) {
            $(this).text(0 + '/' + maxCharacters);
            $('.limit input').on('input', function () {
                var textLength = $(this).val().length;
                var remainingCharacters = maxCharacters - textLength;

                if (remainingCharacters < 0) {
                    $(this).val($(this).val().substr(0, maxCharacters));
                    remainingCharacters = 0;
                }
                $(this).closest('.limit').find('.limit-counter').text(textLength - (textLength > maxCharacters ? 1 : 0) + '/' + maxCharacters);
            });
        }
    });

    // click on dots buton settings ---------- //
    $('.with-dropdown .leads__leftblock-settings').on('click', function () {
        $(this).closest('.with-dropdown').find('ul').slideToggle();
    });
    $(document).on('click', function (event) {
        var target = $(event.target);

        if (!target.closest('.with-dropdown .leads__leftblock-settings').length) {
            $('.with-dropdown').find('ul').slideUp();
        }
    });














});

