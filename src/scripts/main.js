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
})