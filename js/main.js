
$(document).ready(function () {

    // open notification -------- //
    $('.header__notification').on('click', function () {
        $('.notification').toggleClass('active');
        $('.header').toggleClass('darkened');
        $('.mainsect').toggleClass('darkened');
    });

    // close notification -------- //
    $(document).on('click', function (event) {
        var target = $(event.target);

        if (!target.closest('.notification, .header__notification, .open-leadinfo, .leads__info, .header__search, .lead__popup').length) {
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

    //  header search open ----------------- //
    $('.hsbtn').on('click', function () {
        $('.header__search-dropdown').slideDown();
        $('.header').addClass('darkened');
        $('.mainsect').addClass('darkened');
        $('.header__search').addClass('active');
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
        var maxLength = 10; // Максимальна довжина для скороченого тексту

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



    //  leads__row active
    $('.leads__row .lead_row_input').on('click', function () {
        $(this).toggleClass('active');
    });


    // lead row settings -------- //
    $('.lead-row-dropdown').on('click', function () {
        $(this).slideUp();
        $(this).closest('.leads__row').removeClass('active');
    });

    $('.leads__rightblock-settings').on('click', function () {
        $(this).next('.lead-row-dropdown').slideToggle();
    });


    // lead info -------- //
    $('.open-leadinfo').on('click', function () {
        $('.leads__info').addClass('show');
        $('.header').addClass('darkened');
        $('.mainsect').addClass('darkened');
    });
    $('.close-leadinfo').on('click', function () {
        $('.leads__info').removeClass('show');
        $('.header').removeClass('darkened');
        $('.mainsect').removeClass('darkened');
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
        var textareaValue = $(this).closest('.leads__info-rightblock').find('textarea').val();
        var resultInfo = $('<h3 class="result-info"></h3>').text('Результат: ' + textareaValue);
        $(this).closest('.leads__info-rightblock').addClass('done');
        $(this).closest('.result').html(resultInfo);
    });

    // lead rightblock edit note -------- //
    $('.cancel-edit, .done-edit').on('click', function () {
        $(this).closest('.note-edit').slideUp();
    })

    $('.lead__rightblock_edit').on('click', function () {
        $(this).closest('.leads__info-rightblock').addClass('active');
        $(this).closest('.leads__info-rightblock').find('.note-edit').slideToggle();

        var leadElement = $(this).closest('.leads__info-rightblock').find('.leads__rightblock-content p');
        console.log(leadElement)
        var currentValue = leadElement.text();

        // Замінюємо елемент на textarea для редагування
        leadElement.replaceWith('<textarea>' + currentValue + '</textarea>');

        // Встановлюємо фокус на новоствореному textarea
        $('.leads__rightblock-content textarea').focus();

        $('.done-edit').on('click', function (e) {
                e.preventDefault();
                var textEl = $(this).closest('.leads__rightblock-content').find('textarea');
                var editedValue = textEl.val().trim();
                // Замінюємо textarea на оновлене значення
                textEl.replaceWith('<p>' + editedValue + '</p>');
        });
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
    $('.leads__task-type').on('click', function () {
        $(this).find('ul').slideToggle('fast');
    });
    $('.leads__task-type li').on('click', function () {
        const selectedValue = $(this).html();
        console.log(selectedValue);
        $(this).closest('.leads__task-type').find('p').html(selectedValue);
    });

    // lead-note choise
    $('.lead-note').on('click', function () {
        $('.leads__task-headinfo').hide();
    });
    $('.lead-task').on('click', function () {
        $('.leads__task-headinfo').show();
    });

    // dropdown-element -------- //
    $('.dropdown-element p').on('click', function () {
        $(this).parent('.dropdown-element').find('ul').slideToggle('fast');
    });
    $('.dropdown-element li').on('click', function () {
        $(this).closest('ul').slideUp('fast');
        const select = $(this).parent('ul');
        const selectedValue = $(this).text();
        select.prev('.dropdown-element p').text(selectedValue);
    });


    // POPUP ---------------------------------------------- //
    $('.popup__btn').on('click', function () {
        var indexPopup = $(this).attr('data-popup');
        $('.popup__window').removeClass('active');
        $('.' + indexPopup).addClass('active');
        return false;
    });

    $('.popup__close').on('click', function () {
        $('.popup__window').removeClass('active');
    });


    // lead form select ---------------------------------------------- //
    $('.select').on('click', function () {
        $(this).find('ul').slideToggle();
    });

    $('.select li').on('click', function () {
        const $select = $(this).closest('.select');
        const selectedValue = $(this).find('input[type=radio]').val();
        $select.find('input[type=text]').val(selectedValue);
        var maxLength = 15; // Максимальна довжина для скороченого тексту

        if (selectedValue.length > maxLength) {
            var shortText = selectedValue.substring(0, maxLength) + '...'; // Скорочений текст з трикрапкою
            $select.find('input[type=text]').val(shortText);
        } else {
            $select.find('input[type=text]').val(selectedValue);
        }
    });

    // action to element on lead left block
    $('.hover-elevent li').on('click', function () {
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



    // copy input element ---------------------------------------------- //
    $('.addinput-btn').click(function () {
        var inputField = $(this).prev('.inputfield').clone();
        $(this).before(inputField);
    });

    // edit element on click ------------------ //
    $('.edit-element').on('click', function () {
        var leadElement = $(this).find('p');
        var currentValue = leadElement.text();

        // Замінюємо елемент на input для редагування
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


    //datepicker
    $('.datepicker').on('click', function () {
        console.log('click')
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

    // init select style
    $(function () {
        $('.customselect, .customradio').styler();
    });



    // lead row checkbox -------- //
    $('.head_lead_check').click(function () {
        var name = $(this).attr('name');
        var checkboxes = $('input[type="checkbox"][name="' + name + '"]');

        if ($(this).prop('checked')) {
            checkboxes.prop('checked', true);
            checkboxes.closest('.leads__row').addClass('active');
        } else {
            checkboxes.prop('checked', false);
            checkboxes.closest('.leads__row').removeClass('active');
        }
    });


    $('.leads__row input[type="checkbox"]').click(function () {
        $(this).closest('.leads__row').toggleClass('active');
    });




});