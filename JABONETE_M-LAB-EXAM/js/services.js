const NEWS_SERVICE = {
    getAllNews : (function () {
        return $.ajax({
            type : 'get',
            url : NEWS_API_COUNTRY
        })
    }),
}