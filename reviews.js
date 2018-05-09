var recentOrder = [0, 1, 2, 3, 4, 5];
var helpfulOrder = [4, 1, 5, 3, 2, 0];
var ratingsHighOrder = [0, 2, 3, 4, 1, 5];
var ratingsLowOrder = [5, 1, 4, 3, 2, 0];
var veganClicked;
var vegetarianClicked;
var pescCLicked;
var generalClicked;
var mapping = {
  'vegan': veganClicked,
  'vegetarian' : vegetarianClicked,
  'pescetarian' : pescCLicked,
  'general' : generalClicked
}

var orders = {"recent" : recentOrder,
          "helpful" : helpfulOrder,
          "rating-high" : ratingsHighOrder,
          "rating-low" : ratingsLowOrder};

function sortItems(value) {
    var reviews = [];

    for (var i = 0; i < recentOrder.length; i++) {
        var id = "review-entry".concat(i.toString());
        
        reviews = reviews.concat(document.getElementById(id));
    }

    for (var i = reviews.length - 1; i > -1; i--){
        var elem = reviews[orders[value][i]];
        var parent = elem.parentNode;
        parent.insertBefore(elem, parent.firstChild);
    }
}

function filterItems(value){
    var reviews = [];
      for (var i = 0; i < recentOrder.length; i++) {
          var id = "review-entry".concat(i.toString());
          
          reviews = reviews.concat(document.getElementById(id));
      }
    var toCheck = mapping[value];
    if (toCheck == this){
      document.getElementById(value).checked = false;
        reviews.forEach(elem =>{
        elem.style.display = 'flex';
      })
        toCheck = null;
        mapping[value] = toCheck;
    }
    else{
      toCheck = this;
      mapping[value] = toCheck;
      reviews.forEach(elem =>{
        elem.style.display = 'flex';
      })
      for (var i = 0; i < reviews.length; i++){
        if (!reviews[i].className.includes(value)){
          reviews[i].style.display = 'none';
        }
      }      
    }

  return;
}

function showFullHours(){
    var display = document.getElementById('full-hours').style.display;
    if (display == 'none'){
        document.getElementById('full-hours').style.display = 'inherit';
    }
    else{
        document.getElementById('full-hours').style.display = 'none';

    }
}

function expandReview(){

    var see_more = document.getElementById("review-see-more");
    see_more.addEventListener("click", seeMoreHandler, false);

    function seeMoreHandler(){
      console.log("see more");
        var expansionDiv = document.getElementById("review-expanded");
        expansionDiv.style.display = "flex";
        this.style.display = "none";

        var minDiv = document.getElementById("review-see-less");
        minDiv.style.display = "block";

        var reviewDiv = document.getElementById("review-entry4");

        reviewDiv.style.height = "340px";
    }


    var see_less = document.getElementById("review-see-less");
    see_less.addEventListener("click", seeLessHandler, false);

    function seeLessHandler(){
        var expansionDiv = document.getElementById("review-expanded");
        expansionDiv.style.display = "none";
        this.style.display = "none";

        var maxDiv = document.getElementById("review-see-more");
        maxDiv.style.display = "block";
        var reviewDiv = document.getElementById("review-entry4");

        reviewDiv.style.height = "180px";

    }
}
