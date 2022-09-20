export function currentPage(pageID) { //receive page id from app
    $.get(`pages/${pageID}.html`, (data) => { //get the page from the pages directory using the "get" function
        $("#app").html(data) //pass the html data into the app div
    }).fail((error) => { //if there is no page found, route to the error page
        if(error.status == "404") {
            $.get(`pages/error.html`, (data) => {
                $("#app").html(data)
            })
        }
    })
}