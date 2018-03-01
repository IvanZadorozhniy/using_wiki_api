$("document").ready(function () {
//    alert("Dsa");
    var userQuery = "Kiev";
    $.getJSON('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrsearch=' + userQuery + '&callback=?') //used API from Forismatic - https://forismatic.com/ru/api/
        .done(update) //If the request succeeds, then the function is called - update
        .fail(errors);// else the function is called - errors


});

function update(response) {
  //  https://en.wikipedia.org/w/api.php?action=query&prop=info&pageids=18630637&inprop=url
    console.log(JSON.stringify(response.query.pages));
    var obj = response.query.pages;
    for (key in obj) {
        console.log(obj[key]);
    }
}

function errors() {
    alert("error");


}