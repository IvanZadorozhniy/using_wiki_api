$("document").ready(function() {
    //    alert("Dsa");
    $("form").submit(function(event){
        console.log( event );

         var query = $("[name=q]").val();
         console.log(query);
        getArticles(query);
        event.preventDefault();
    });
});
function getArticles(usersQuery){
     var userQuery = usersQuery;
    $.getJSON('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrsearch=' + userQuery + '&callback=?') //used API from Forismatic - https://forismatic.com/ru/api/
        .done(update) //If the request succeeds, then the function is called - update
        .fail(errors); // else the function is called - errors

}
function update(response) {
  //  console.log(JSON.stringify(response.query.pages));
    var obj = response.query.pages;
    $("#content").html(''); //Clear content box;
    for (key in obj) {
        $.getJSON('https://en.wikipedia.org/w/api.php?action=query&prop=info&pageids=' + obj[key].pageid + '&inprop=url&format=json&callback=?')
            .done(editUpdate)
            .fail(errors);
    }
}

function editUpdate(response) {
    console.log(response);
    var objectOfPage = response.query.pages;
    for (key in objectOfPage) {
        $('#content').append("<a href = '" + objectOfPage[key].fullurl + "'>"+ "<div class='block-response'>" + objectOfPage[key].title +
            "</div></a>");
    }

}

function errors() {
    alert("error");


}