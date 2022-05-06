// How to request data from an API using javascript and jQuery ...

// There are many ways to do this! EX: ...
// 1. jQuerys $.ajax() function ...
// 2. The Browsers fetch() function ...
// 3. Using the Axios http client library ...

// Variables   //This refrences the data where to pull into a small variable
const url = 'http://www.omdbapi.com/?apikey=c3ff07d0&t=Die+Hard';

// Element Refrences
const $title = $('#title');
const $year = $('#year');       // These variables were created for easier target
const $rating = $('#rated');

// Event Listeners


// Functions

function handleGetData() {      // This function tells 
$.ajax(url).then(function(data) {
    console.log('Movie data is ready')
    // console.log(data)
    $title.text(data.Title);  //Used variable created and called the 'Title'
    $year.text(data.Year);      // Same but called 'Year'
    $rating.text(data.Rated);   
    $('main').append(`<img src="${data.Poster}"/>`)
}), function(error) {
    console.log('Something is wrong')
    console.log(error)    // This is error handling
}

}