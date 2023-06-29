
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

        if (!target.closest('.notification, .header__notification, .header__search').length) {
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
        $(elementTarget).find('.notification-item__wrapper').slideToggle();
        $(elementTarget).toggleClass('active');
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
        return false;
    });

    //  sidebar agreements open ----------------- //
    $('.sidebar__agreements').on('click', function () {
        $('.contacts').removeClass('active');
        $('.settings').removeClass('active');
        $('.sidebar__contacts').removeClass('active');
        $('.sidebar__settings').removeClass('active');
        $('.agreements').toggleClass('active');
        $(this).toggleClass('active');
    });

    //  sidebar contacts open ----------------- //
    $('.sidebar__contacts').on('click', function () {
        $('.agreements').removeClass('active');
        $('.settings').removeClass('active');
        $('.sidebar__agreements').removeClass('active');
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
        $('.settings').toggleClass('active');
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


    // close sidebar when click not submenu -------- //
    $(document).on('click', function (event) {
        var target = $(event.target);

        if (!target.closest('.submenu__inner, .sidebar__settings, .sidebar__contacts, .sidebar__agreements, .submenu__header').length) {
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
        // $(this).closest('.select').find('ul').slideToggle();

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




    // select dropdown ---------------------------------------------- //
    $('.select').on('click', function () {
        $(this).find('ul').slideToggle();
    });

    $('.select li').on('click', function () {
        const $select = $(this).closest('.select');
        const selectedValue = $(this).find('input[type=radio]').val();
        $select.find('input[type=text]').val(selectedValue);
        var maxLength = 12; // Максимальна довжина для скороченого тексту

        if (selectedValue.length > maxLength) {
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
        $(this).parent('.multiselect').find('.dropdownwrap').slideToggle('fast');
        $(this).parent('.multiselect').find('input[type="text"]').val('')
        $(this).closest('.multiselect').find('.loading').addClass('active');
        $('.dropdownwrap-bottom').removeClass('active');
        $('.dropdownwrap-bottom span').text('');
    });

    $('.dropdownwrap-bottom').on('click', function () {
        $(this).closest('.multiselect').find('.dropdownwrap').slideToggle('fast');
        $(this).closest('.multiselect').find('.loading').removeClass('active');
    });

    $('.multiselect li').on('click', function () {
        $(this).closest('.multiselect').find('.loading').removeClass('active');
        const select = $(this).closest('.dropdownwrap');
        const selectedValue = $(this).text();
        select.slideUp('fast');
        select.prev('.multiselect input').val(selectedValue);
        select.closest('.multiselect').addClass('filled');
    });

    $('.multiselect input[type="text"]').on('input', function () {
        var text = $(this).val();
        $('.dropdownwrap-bottom').addClass('active');
        $('.dropdownwrap-bottom span').text(text);
    });

    $(document).on('click', function (event) {
        var target = $(event.target);
        var selectElements = $('.multiselect');

        selectElements.each(function () {
            var selectElement = $(this);
            var dropdownResponse = selectElement.find('.dropdownwrap');


            if (!target.closest(selectElement).length) {
                dropdownResponse.slideUp('fast');

            }
        });
    })


    // ------------------------  ESTATE TAB ------------------------------------- //

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




    // ------------------------  LEADS TAB ------------------------------------- //
    //  table__row active
    $('.table__row .table__row-input').on('click', function () {
        $(this).toggleClass('active');
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
        $('.saleowner__head-tabs p').removeClass('active')
        $(this).addClass('active');

        if ($(this).hasClass('kanban-tab')) {
            $('.table-wrapper').hide();
            $('.saleowner__kanban').show();
            $('.kanban-tab').addClass('active');

        } else if ($(this).hasClass('table-tab')) {
            $('.saleowner__kanban').hide();
            $('.table-wrapper').show();
            $('.table-tab').addClass('active');
        }
    });

    // saleowner head filter
    $('.saleowner__head-filterbtn').on('click', function () {
        $(this).toggleClass('active');
        $('.form__filter').slideToggle();
        $('.saleowner__table').toggleClass('active');
        $('.saleowner__kanban').toggleClass('active');
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
        e.preventDefault;
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



    // ------------------ CONTACT TAB ---------------------- //

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
        $(this).closest('.uploaded-image').addClass('uploaded');

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $(input).closest('.uploaded-image').find('img').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    });

    // delete uploaded img

    $('.delete-button').click(function () {
        var image = $(this).siblings('.uploaded-image').find('img');

        // Очищаємо значення атрибута "src" зображення
        // image.attr('src', '');

        // Якщо потрібно встановити пустий шлях до зображення:
        // image.prop('src', '');

        // Якщо потрібно встановити альтернативний шлях до зображення після видалення:
        image.attr('src', 'img/user_avatar_choise.png');
    });




    // --------------------------- SETTINGS TAB ------------------------------ //
    // checks fields are filled
    $('.user__popup-right input').on('input', function () {
        $('.user__popup-bottom').removeClass('inactive');
        $('.user__inner-bottom').removeClass('inactive');
    });

    // user info open/close-------- //
    $('.open-usercard').on('click', function () {
        $('.user__card').addClass('show');
        $('.user__card-breadcrumbs').addClass('active');
    });
    $('.close-usercard').on('click', function () {
        $('.user__card').removeClass('show');
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

        if (!target.closest('.popup__inner ').length) {
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
        dateFormat: "d.m.Y",
        ariaDateFormat: "d.m.Y",
        altFormat: "d.m.Y",
        enableTime: false,
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














});

