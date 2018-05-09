 var indexFilters = [
    {name:"dietary",
     label:"Dietary Restrictions",
     filters:["vegan","vegetarian","pescatarian"],
     filterFunction:dietaryRestrictionsFilterFunction,
     button:0,
     mutuallyExclusive:1,
     images:['full-carrot','broc','fish']},
    {name:"meal",
     label:"Meal",
     filters:["breakfast","lunch","dinner","snack"],
     filterFunction:mealRestrictionsFilterFunction,
     button:0,
     mutuallyExclusive:1},
    {name:"cost",
     label:"Cost",
     filters:["$","$$","$$$","$$$$"],
     description:["Very Cheap","Cheap","Average","Expensive"],
     filterFunction:costRestrictionsFilterFunction,
     button:1,
     mutuallyExclusive:1}
]
var menuFilters = [
    {name:"dietary",
     label:"Dietary Restrictions",
     filters:["vegan","vegetarian","pescatarian"],
     filterFunction:dietaryRestrictionsFilterFunction,
     button:0,
     mutuallyExclusive:1,
     images:['full-carrot','broc','fish']},
    {name:"meal",
     label:"Meal",
     filters:["breakfast","lunch","dinner","snack"],
     filterFunction:mealRestrictionsFilterFunction,
     button:0,
     mutuallyExclusive:1},
    {name:"allergy",
     label:"Does not contain",
     filters:["peanuts","tree nuts","gluten","egg","soy"],
     filterFunction:allergyRestrictionsFilterFunction,
     button:0,
     mutuallyExclusive:0}
]
var filterItems;
var remove = false;
function dietaryRestrictionsFilterFunction(filterValue,item){
    return filterValue<=item.restrictionLevel-1;
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

    return item.cost>filterValue;
}
function ratingRestrictionsFilterFunction(filterValue,item){
    return filterValue>=item.rating;
}
function loadIndexFilters(data){
    filterItems=data;
    var container=document.getElementById("filtersDiv");
    var filterByHeader = document.createElement('a');
    filterByHeader.classList.add("filterHeader");
    filterByHeader.innerHTML = "Filter By:";
    container.appendChild(filterByHeader);
    container.appendChild(createTextDiv("","filter_list","filters"));
    for(var i=0;i<indexFilters.length;i++){
        var filter=indexFilters[i];
        var filterDiv=document.createElement("div");
        filterDiv.setAttribute("id",filter.name);
        filterDiv.appendChild(createTextDiv(filter.label,'filterTitle'));
        var filterGroup=document.createElement(filters.button?"div":"div");
        if(! filter.description)
            filter.description=filter.filters;
            filterDiv.appendChild(filterGroup);
            container.appendChild(filterDiv);
        filterGroup.setAttribute("id",filter.name+"Filters");
        loadFilterHelper(filter,filterGroup)

    }
}
function loadMenuFilters(data){
    filterItems=data;
    var container=document.getElementById("filtersDiv");
    var filterByHeader = document.createElement('a');
    filterByHeader.classList.add("filterHeader");
    filterByHeader.innerHTML = "Filter By:";
    container.appendChild(filterByHeader);
    container.appendChild(createTextDiv("","filter_list","filters"));
    for(var i=0;i<menuFilters.length;i++){
        var filter=menuFilters[i];
        var filterDiv=document.createElement("div");
        filterDiv.setAttribute("id",filter.name);
        filterDiv.appendChild(createTextDiv(filter.label,'filterTitle'));
        var filterGroup=document.createElement(filters.button?"div":"form");
        if(! filter.description)
            filter.description=filter.filters;
            filterDiv.appendChild(filterGroup);
            container.appendChild(filterDiv);
        filterGroup.setAttribute("id",filter.name+"Filters");
        loadFilterHelper(filter,filterGroup)

    }
}
function resetFilters(){
    var allFilters=document.getElementsByClassName("filter")
    for(var i=0;i<allFilters.length;i++)
        if(allFilters.checked){
            allFilters[i].checked=false;
            removeFilter(allFilters[i],true);
        }

}
function addFilters(forceAdd){
    var activeFilters=document.getElementById("filters");
    if(!this.checked && this.type=="checkbox"){
        if(forceAdd===true)
            return;
        removeFilter(document.getElementsByClassName(this.name)[0],true);
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
function removeFilter(element, apply){
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
    if (title == 'peanuts' || title == 'eggs' || title == 'soy' || title =='gluten' || title == 'tree nuts'){
        removeFilterButton.innerHTML="X no "+title;
    }
    else{
        removeFilterButton.innerHTML="X "+title;
    }
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
            form.appendChild(filterElement);
        }
        else{
            filterElement = document.createElement("input");
            filterElement.setAttribute("type",filterGroup.mutuallyExclusive==1?"radio":"checkbox");
            var label=document.createElement("span");
            label.classList.add("filter-label");
            label.textContent = filterGroup.filters[i] + ' ';
            if(filterGroup.images){
                var image = createRatingImage(filterGroup.images[i]);
                label.appendChild(image);
            }
            label.setAttribute("title",filterGroup.description[i]);
            var div=createTextDiv(false,"filter-item");
            div.appendChild(filterElement);
            div.appendChild(label);
            form.appendChild(div);
        }
        filterElement.classList.add("filter");
        filterElement.setAttribute("id",filterGroup.name+i);
        filterElement.setAttribute("name",filterGroup.name+(filterGroup.mutuallyExclusive?"":i));
        filterElement.setAttribute("value",i);
        filterElement.setAttribute("data-label",filterGroup.filters[i]);
        filterElement.filter=filterGroup.filterFunction;
        filterElement.onclick=addFilters;


    }

}

function applyFilters(){
    var count=1;
    var activeFilters=document.getElementsByClassName("active-filter");
    var addRestrictionRating=false;
    for(var i=0;i<activeFilters.length;i++)
        if (activeFilters[i].name == 'dietary'){
            addRestrictionRating=activeFilters[i].value;
            break;
        }

    NEXT_ITEM:for(var n=0;n<filterItems.length;n++){
        var item=filterItems[n];

        var restaurantItem=document.getElementById(item.id);
        for(var i=0;i<activeFilters.length;i++){
            if (activeFilters[i].filter(+activeFilters[i].value,item)){
                count+=show(false,restaurantItem,count);
                var newRestrictionRating = document.createElement('div');
                newRestrictionRating.classList.add("restrictionRating");
                restaurantItem.getElementsByClassName("rating")[0].replaceChild(newRestrictionRating, restaurantItem.getElementsByClassName("restrictionRating")[0]);
                continue NEXT_ITEM;
            }
        }
        count+=show(true,restaurantItem,count);
        if (addRestrictionRating===false) {
            var newRestrictionRating = document.createElement('div');
            newRestrictionRating.classList.add("restrictionRating");
            restaurantItem.getElementsByClassName("rating")[0].replaceChild(newRestrictionRating, restaurantItem.getElementsByClassName("restrictionRating")[0]);
        } else {
            var value=addRestrictionRating;
            var ratingDiv = restaurantItem.getElementsByClassName("rating")[0];
            var j=0;
            var restrictionRating = document.createElement('div');
            restrictionRating.classList.add("restrictionRating");
            restrictionRating.setAttribute('title', 'Restriction Rating');
            if (value == 0){
                if (item.vrating == 0){
                    show(false, restaurantItem, 0);
                }else{
                    for(;j<item.vrating;j++)
                        restrictionRating.appendChild(createRatingImage("full-carrot"));
                    for(; j< 5; j++)
                        restrictionRating.appendChild(createRatingImage("gray-carrot"));
                }
            }
            else if (value == 1){
                if (item.vegrating == 0){
                    show(false, restaurantItem, 0);
                }else{
                    for(;j<item.vegrating;j++)
                        restrictionRating.appendChild(createRatingImage("broc"));
                    for(;j< 5; j++)
                        restrictionRating.appendChild(createRatingImage("gray-broc"));
                }
            }
            else{
                if (item.prating == 0){
                    show(false, restaurantItem, 0);
                }else{
                    for(;j<item.prating;j++)
                        restrictionRating.appendChild(createRatingImage("fish"));
                    for(; j< 5; j++)
                        restrictionRating.appendChild(createRatingImage("gray-fish"));
                }
            }
            ratingDiv.replaceChild(restrictionRating, ratingDiv.childNodes[1]);
        }

    }
    if(document.getElementById("numberOfResults"))
        document.getElementById("numberOfResults").innerHTML=count-1;
}

function filterRandomly(){
    var count=1;
    for(var i=0;i<filterItems.length;i++){
            var restaurantItem=document.getElementById(filterItems[i].id);
            count+=show(Math.random()>.5,restaurantItem,count);
    }
    if(document.getElementById("numberOfResults"))
        document.getElementById("numberOfResults").innerHTML=count-1;
}

function show(show,restaurantItem,index){
    if(show){
        restaurantItem.classList.remove("hidden");
        if (restaurantItem.className != 'menu-item')
            document.getElementById("indexFor"+restaurantItem.id).innerHTML=index + '.';
        return 1;
    }
    else
        restaurantItem.classList.add("hidden");
    return 0;
}
