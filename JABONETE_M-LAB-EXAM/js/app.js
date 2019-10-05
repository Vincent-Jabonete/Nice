$(function(){
    var country = '';
    var totalRes = $('.myRes');
    var resText = $('.resText');
    var newsContainer = $('.news-container');
    var list = $('.list');
    var count = 0;

    $('select').on('change', function(e) {
        e.preventDefault();
        // alert( this.value );
        count = 0;
        country = this.value;
        NEWS_API_COUNTRY = NEWS_API + country;
        GetNews();
    });

    const GetNews = async() => {
        try {
            const getNews = await getMyNews();
            const news_list = getNews.articles;
            var getNewsTotalResult = getNews.totalResults;

            NewsTotalResults(getNews.totalResults);

            news_list.forEach(function(res){
                console.log(res);
                NewsItem(res.urlToImage, res.title, res.author, res.url)
            });
            
        }
        catch(err){
            console.log(err);
        }
    }

    function getMyNews(){
      return NEWS_SERVICE.getAllNews();
    }

    function NewsTotalResults(res) {
        resText.text(`You have ${res} results`);
    }

    function NewsItem(image, title, author, description, url){
        var item = `<li>
                    <img src="${image}" alt="">
                    <p>${title}</p>
                    <p>${author}</p>
                    <a href="${url}">${url}</a>
                    </li>`;
   
            list.append(item);
        
    }
})