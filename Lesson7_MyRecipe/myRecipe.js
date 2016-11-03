/*
    Program Name: Recipe Display Application
    Author: Nancy Dames
    Date: November 2 2016
    Filename: myRecipe.js
    
*/
//displays the next element after the current target
function display(event){
    $(event.currentTarget).next().slideToggle("fast");
    
}//end of display

//attach event listener to h3 elements to invoke display function when clicked 
$("h3").click(display);

//change the background color h3 element when mouse hovers over it
$("h3").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "orange");
});