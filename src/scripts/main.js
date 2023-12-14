$(function () {
    $(window).on('hashchange', function() {
        const page = window.location.hash.slice(1);
        loadPage(page);
    });

    const defaultPage = window.location.hash.slice(1)
    loadPage(defaultPage)

    function loadPage(page){
        const viewsPath = 'src/views'
        $('#content').load(`${viewsPath}/${page}.html`)
    }

    $('#toggle').change(function (e) { 
        
        const body = $('body')

        if ($(this).prop('checked')) {
            body.addClass('dark-theme')
        } else {
            body.removeClass('dark-theme')
        }
    });
})