
function sortItems(value){
    var activeFilters=document.getElementsByClassName("active-filter");
    var rating = value;
    if (activeFilters.length > 0){
        if (activeFilters[0].name == 'dietary'){
            var restriction = activeFilters[0].value;
            if (restriction == 0){
                rating = 'vrating';
            } 
            else if (restriction == 1){
                rating = 'vegrating';
            }
            else{
                rating = 'prating';
            }
        }
    }
    filterItems.sort(function(a,b){
        if (value == 'rating'){
            return 1 / (b[rating] - a[rating]);
        }else{
            return a[rating] - b[rating];
        }
    });
    if(filterItems==restaurants)
        loadRestaurants();
    else
        loadMenu();
    // think about when first apply sort then apply filter 
    applyFilters();

}
function search(searchString,locationString){
    resetFilters();
    //show only vegan restaurants

    var output="";
    if(searchString)
        output+=searchString;
    if(locationString)
        output+=" near "+locationString;
    document.getElementById("searchQuery").innerHTML=output;

    filterRandomly();
    /*
    var words=searchString.toLowerCase().split(" ");
    for(var i=0;i<words.length;i++){
        filterOnWord(words[i]);
    }
    */
}
function filterOnWord(word){
    var index;
    for(var n=0;n<filters.length;n++)
        if((index=filters[n].filters.indexOf(word))>=0){
            document.getElementById(filters[n].name+index).onclick(true);
            document.getElementById(filters[n].name+index).checked=true;
            return;
        }
}
