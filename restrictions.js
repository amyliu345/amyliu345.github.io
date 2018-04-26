var filters = [
    {name:"dietary",label:"Dietary Restrictions", filters:["Vegan","Vegetarian","Pescatarian"],filterFunction:dietaryRestrictionsFilterFunction,button:0,mutuallyExclusive:1},
    {name:"meal",label:"Meal", filters:["Breakfast","Lunch","Dinner","Snack"],filterFunction:mealRestrictionsFilterFunction,button:0,mutuallyExclusive:1},
    {name:"allergy",label:"Does not contain", filters:["Peanuts","Tree Nuts","Gluten"],filterFunction:allergyRestrictionsFilterFunction,button:0,mutuallyExclusive:0},
    {name:"cost",label:"Cost", filters:["$","$$","$$$","$$$$"],description:["Very Cheap","Cheap","Average","Expensive"],filterFunction:costRestrictionsFilterFunction,button:1,mutuallyExclusive:1},
    {name:"rating",label:"Avg. Customer Rating", filters:["<img class='filterRating' src='graphics/full-star.png' />","<img src='graphics/full-star.png' class='filterRating' />",
        "<img src='graphics/full-star.png' class='filterRating' />","<img src='graphics/full-star.png'  class='filterRating'/>",
        "<img src='graphics/full-star.png'  class='filterRating'/>"],description:["1 star","2 star","3 star","4 star"],filterFunction:ratingRestrictionsFilterFunction,button:1,mutuallyExclusive:1}
]
var filterItems;
function dietaryRestrictionsFilterFunction(filterValue,item){
    return filterValue<item.restrictionLevel;
}
function allergyRestrictionsFilterFunction(filterValue,item){
    return (Math.pow(2,filterValue)&item.allergy)!=0;
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
function loadFilters(data){
    filterItems=data;
    var container=document.getElementById("filtersDiv");
    container.appendChild(createTextDiv("","filter_list","filters"));
    for(var i=0;i<filters.length;i++){
        var filter=filters[i];
        var filterDiv=document.createElement("div");
        filterDiv.setAttribute("id",filter.name);
        filterDiv.appendChild(createTextDiv(filter.label,'filterTitle'));
        var filterGroup=document.createElement(filters.button?"div":"form");
        if(! filter.description)
            filter.description=filter.filters;
            console.log(filterGroup);
            filterDiv.appendChild(filterGroup);
            container.appendChild(filterDiv);
        filterGroup.setAttribute("id",filter.name+"Filters");
        loadFilterHelper(filter,filterGroup)

    }
}
function addFilters(){
    var activeFilters=document.getElementById("filters");
    console.log(this.checked,!this.checked,this.type,!this.checked, this.checked,);
    if(!this.checked && this.type=="checkbox"){
        removeFilter(document.getElementsByClassName(this.name)[0],true);
        console.log("removing");
        return;
    }
    var mutuallyExclusiveFilters=document.getElementsByClassName(this.name);
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
    removeFilterButton.setAttribute("data-group",group);
    removeFilterButton.setAttribute("data-filter-id",element.getAttribute("id"));
    removeFilterButton.onclick=function(){removeFilter(removeFilterButton,true);};
    return removeFilterButton;

}

function loadFilterHelper(filterGroup,form){
    for(var i=0;i<filterGroup.filters.length;i++){
        var filterElement,label;
        if(filterGroup.button){
            filterElement = document.createElement("button");
            filterElement.innerHTML=filterGroup.filters[i];
            filterElement.setAttribute("title",filterGroup.description[i]);
        }
        else{
            filterElement = document.createElement("input");
            filterElement.setAttribute("type",filterGroup.mutuallyExclusive==1?"radio":"checkbox");
            var label=document.createElement("span");
            label.innerHTML=filterGroup.filters[i]+"<br/>";
            label.setAttribute("title",filterGroup.description[i]);
        }
        filterElement.classList.add("filter");
        filterElement.setAttribute("id",filterGroup.name+i);
        filterElement.setAttribute("name",filterGroup.name+(filterGroup.mutuallyExclusive?"":i));
        filterElement.setAttribute("value",i);
        filterElement.setAttribute("data-label",filterGroup.filters[i]);
        filterElement.filter=filterGroup.filterFunction;
        filterElement.onclick=addFilters;
        form.appendChild(filterElement);

        if(label)
            form.appendChild(label);
    }
}

function applyFilters(){
    filterItems.forEach(filter)
}

function filter(item){
    console.log(item);
    var activeFilters=document.getElementsByClassName("active-filter");
    var restaurantItem=document.getElementById(item.id);  
    for(var i=0;i<activeFilters.length;i++){
        if (i == 0){
            var ratingDiv = restaurantItem.childNodes[2]; 
            var value = activeFilters[i].value;
            var j=0;
            var restrictionRating = document.createElement('div');
            if (value == 0){
                for(;j<item.vrating;j++)
                    restrictionRating.appendChild(createRatingImage("full-carrot"));
                for(; j< 5; j++)
                    restrictionRating.appendChild(createRatingImage("gray-carrot"));
            }
            else if (value == 1){
                for(;j<item.vegrating;j++)
                    restrictionRating.appendChild(createRatingImage("broc"));
                for(;j< 5; j++)
                    restrictionRating.appendChild(createRatingImage("gray-broc"));
            }
            else{
                for(;j<item.prating;j++)
                    restrictionRating.appendChild(createRatingImage("fish"));
                for(; j< 5; j++)
                    restrictionRating.appendChild(createRatingImage("gray-fish"));
            }
            ratingDiv.replaceChild(restrictionRating, ratingDiv.childNodes[1]);
        }
        if (activeFilters[i].filter(+activeFilters[i].value,item)){
            restaurantItem.classList.add("hidden");
            return;
        }
    }
    restaurantItem.classList.remove("hidden");
}
