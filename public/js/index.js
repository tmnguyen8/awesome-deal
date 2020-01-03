// API calls in the Client Side
const indexAPI = {
    scrapeSite: function (){
        return $.ajax({
            url: "scrape/",
            method: "GET"
        })
    },
    postDeal: function(deal){
        return $.ajax({
            url: "api/deals",
            method: "POST",
            data: deal
        })
    }
}


// Get Scrape Data
$(document).on("click", "#scrape-submit", function(event){
    event.preventDefault();
    
    indexAPI.scrapeSite().then(function(data){
        $('#index-img').hide();

        console.log(data)
        data.forEach(deal=> {
            if(!deal.imageURL){
                deal.imageURL="https://raw.githubusercontent.com/tmnguyen8/awesome-deal/master/public/images/sad.jpg"
            }

            $("#deal-list").append(`
                <li class="deal-item list-group-item list-group-item-action">
                    <script type="text/x-handlebars-template"></script>
                        <img class="image" src="${deal.imageURL}">
                        <h5 class="title">Title: ${deal.title}</h5>
                        <a class="btn btn-primary" href="${deal.link}" role="button">Deal Link</a>
                        <button class="btn btn-secondary" id="save-deal" data-title="${deal.title}" data-image-url="${deal.imageURL}" data-link="${deal.link}">Save Deal</button>
                    </script>
                </li>
            `)
        });
    })
})
// Save deal to database
$(document).on('click', '#save-deal', function(){
    var deal = {
        // Value taken from title input
        title: $(this).data('title'),
        link: $(this).data('link'),
        imageURL: $(this).data('image-url')
    }
    // Post the change to deal based on the form
    indexAPI.postDeal(deal).then(function(){

    });
})

