dietaryRestrictions=["Vegan","Vegetarian","Pescatarian"];
dietaryRestrictionsDescription=["Vegan","Vegetarian","Pescatarian"];
mealRestrictions=["Breakfast","Lunch","Dinner","Snack"];
mealRestrictionsDescription=["Breakfast","Lunch","Dinner","Snack"];

costRestrictions=["$","$$","$$$","$$$$"];
costRestrictionsDescription=["Very Cheap","Cheap","Average","Expensive"];

ratingRestrictions=["<img class='filterRating' src='graphics/full-star.png' />","<img src='graphics/full-star.png' class='filterRating' />",
    "<img src='graphics/full-star.png' class='filterRating' />","<img src='graphics/full-star.png'  class='filterRating'/>",
    "<img src='graphics/full-star.png'  class='filterRating'/>"];
ratingRestrictionsDescription=["1 star","2 star","3 star","4 star"];

function dietaryRestrictionsFilterFunction(filterValue,item){
    return filterValue<item.restrictionLevel;
}
function mealRestrictionsFilterFunction(filterValue,item){

    return (Math.pow(2,filterValue)&item.mealLevel)!=0;
}
/**
If filter is less than item cost, hide it
*/
function costRestrictionsFilterFunction(filterValue,item){

    return item.cost>filterValue+1;
}
function ratingRestrictionsFilterFunction(filterValue,item){
    return filterValue>=item.rating;
}
function loadFilters(){
    loadFilterHelper(dietaryRestrictions,dietaryRestrictionsDescription,"dietaryRestriction",addFilters,dietaryRestrictionsFilterFunction);
    loadFilterHelper(mealRestrictions,mealRestrictionsDescription,"mealRestriction",addFilters,mealRestrictionsFilterFunction);
    loadFilterHelper(costRestrictions,costRestrictionsDescription,"costRestriction",addFilters,costRestrictionsFilterFunction,true);
    loadFilterHelper(ratingRestrictions,ratingRestrictionsDescription,"ratingRestriction",addFilters,ratingRestrictionsFilterFunction, true);
}
function addFilters(){
    var activeFilters=document.getElementById("filters");
    var mutuallyExclusiveFilters=document.getElementsByClassName(this.name);
    console.log(this.name,mutuallyExclusiveFilters);
    if(mutuallyExclusiveFilters.length==1)
        if(mutuallyExclusiveFilters[0].value==this.value)
            return;
        else
            removeFilter(mutuallyExclusiveFilters[0]);
    this.classList.add("active-filter");
    activeFilters.appendChild(createRemoveFilterButton(this));
    applyFilters();

}
function removeFilter(element,apply){
    console.log(element);
    activeFilters=document.getElementById("filters");
    activeFilters.removeChild(element);
    var filterElement=document.getElementById(element.getAttribute("data-filter-id"))
    filterElement.classList.remove("active-filter");
    filterElement.checked=false;
    if(apply)
        applyFilters();
}
function createRemoveFilterButton(element){
    var title=element.getAttribute("data-label");
    var group=element.getAttribute("name");
    var removeFilterButton=document.createElement("button");
    removeFilterButton.innerHTML="X "+title;
    removeFilterButton.setAttribute("id","remove"+title);
    removeFilterButton.classList.add(group);
    removeFilterButton.setAttribute("value",element.value);
    removeFilterButton.setAttribute("group",group);
    removeFilterButton.setAttribute("data-filter-id",group+element.value);
    removeFilterButton.onclick=function(){removeFilter(removeFilterButton,true);};
    return removeFilterButton;

}

function loadFilterHelper(restrictions,title,name,callback,filterFunction,toggleButtons){
    var form = document.getElementById(name+"Filters");
    for(var i=0;i<restrictions.length;i++){
        var filter,label;
        if(toggleButtons){
            filter = document.createElement("button");
            filter.innerHTML=restrictions[i];
            filter.setAttribute("title",title[i]);
        }
        else{
            filter = document.createElement("input");
            filter.setAttribute("type","radio");
            var label=document.createElement("span");
            label.innerHTML=restrictions[i]+"<br/>";
            label.setAttribute("title",title[i]);
        }
        filter.classList.add("filter");
        filter.setAttribute("id",name+i);
        filter.setAttribute("name",name);
        filter.setAttribute("value",i);
        filter.setAttribute("data-label",restrictions[i]);
        filter.filter=filterFunction;

        filter.onclick=callback;
        form.appendChild(filter);

        if(label)
            form.appendChild(label);
    }
}

function applyFilters(){
    restaurants.forEach(filter)
}

function filter(item){
    var activeFilters=document.getElementsByClassName("active-filter");

    var restaurantItem=document.getElementById(item.id);
    for(var i=0;i<activeFilters.length;i++){
        if (activeFilters[i].filter(+activeFilters[i].value,item)){
            restaurantItem.classList.add("hidden");
            return;
        }
    }
    restaurantItem.classList.remove("hidden");
}
