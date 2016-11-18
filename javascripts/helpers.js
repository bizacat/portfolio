$(document).ready(function() {

// navbar

    // Get array of navbar links (text)
    var pageLinkArray = [];
    $('.page-link').each(function() {
        pageLinkArray.push($(this).text().toLowerCase())
    });

    // Loop through navbar array and find match with current url
    var arrayLength = pageLinkArray.length;
    for (var i = 0; i < arrayLength; i++) {

        var pageUrl = window.location.href.indexOf(pageLinkArray[i]) > -1 ;

        // If page url matches navbar item's text, add active class
        if ( pageUrl ) {
            $('.' + pageLinkArray[i]).addClass('active');
        }
    }

// work filters

    var workFilterList = $('.work-filter');
    var workFilterItem = $('.work-filter li');
    var workFilterItemClassname = $('.work-filter li');

    workFilterItem.click(function() {
        var selectedTag = $(this).attr('id');

        // if not yet selected then
        if ( $(this).attr('class') !== 'active' ) {
            workFilterItem.removeClass('active');
            $(this).addClass('active');

            $('section a').hide();
            $('.' + selectedTag).show();
        } else {
            workFilterItem.removeClass('active');
            $('#all').addClass('active');

            $('section a').show();
        }
    });

    $('#all').click(function() {
        workFilterItem.removeClass('active');
        $(this).addClass('active');
        $('section a').show();
    });


});