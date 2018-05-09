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
