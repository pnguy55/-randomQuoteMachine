/*Random number generator1*/
function randomRange(myMin, myMax) {
  /*Math.floor rounds to <= the provided number to an integer*/
  return Math.floor(Math.random()*(myMax-myMin+1))+myMin;

}
/*Uses the randomRange function to select from a list of colors I found suitable for this environment.*/
function randomColor(){
  var randColor= randomRange(1,7);
  switch (randColor) {
    case 1:
      return "#9292FE";
      break;
    case 2:
      return "#BFBFFF";
      break;
    case 3:
      return "#FFF8B4";
      break;
    case 4:
      return "#FFF8B4";
      break;
    case 5:
      return "#D8BAFF";
      break;
    case 6:
      return "#BC8AFE";
      break;
    case 7:
      return "#FFDF80";
      break;
    case 8:
      return "#FFECB4";
      break;
  }
}

//Starts the page with a random quote
$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]="+randomRange(1, 25)+"&callback=", function(a) {
  
  $("#actual-quote").html("<h5>"+a[0].content+"</h5>")
  
  $("#author").html("<p>- " + a[0].title + "  </p>")
  
});


$('#twitter-button').click(function() {
    window.open('https://twitter.com/intent/tweet?text=' + $('#actual-quote').text() + " " + $('#author').text());
  
});






/*Begins a click event for q-button.*/
$("#q-button").on("click",function(){
    
  var colorChosen = randomColor();
  /*edits the css files each time, could be optimized and shortened*/
  $("#body").css("background-color", colorChosen);
  $(".twitter-button").css("background-color", colorChosen);
  $(".twitter-button").css("border-color", colorChosen);
  $("#q-button").css("border-color", colorChosen);
  $("#q-button").css("background-color", colorChosen);
  /*retrieves JSON file and randomizes the url to retrieve random quotes*/
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]="+randomRange(1, 25)+"&callback=", function(a) {
  
  $("#actual-quote").html("<h5>"+a[0].content+"</h5>")
    
  $("#author").html("<p>- " + a[0].title + "  </p>")
  
  });
});