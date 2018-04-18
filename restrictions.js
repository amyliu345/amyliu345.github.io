dietaryRestrictions=["Vegan","Vegetarian","Pescatarian"];
dietaryRestrictionsDescription=["Vegan","Vegetarian","Pescatarian"];
mealRestrictions=["Breakfast","Lunch","Dinner","Snack"];
mealRestrictionsDescription=["Breakfast","Lunch","Dinner","Snack"];



function loadFilters(){
    loadFilterHelper(dietaryRestrictions,dietaryRestrictionsDescription,"dietaryRestriction",addFilters);
    loadFilterHelper(mealRestrictions,mealRestrictionsDescription,"mealRestriction",addFilters);
}
function addFilters(){
    console.log("change");
    if(this.checked){

        var activeFilters=document.getElementById("filters");
        var mutuallyExclusiveFilters=document.getElementsByClassName(this.name);
        console.log(this.name,mutuallyExclusiveFilters);
        if(mutuallyExclusiveFilters.length==1)
            if(mutuallyExclusiveFilters[0].value==this.value)
                return;
            else
                removeFilter(mutuallyExclusiveFilters[0]);
        activeFilters.appendChild(createRemoveFilterButton(this));
    }
    else{

        removeFilter(document.getElementById("remove"+this.title));
    }
}
function removeFilter(element){
    console.log(element);
    activeFilters=document.getElementById("filters");
    activeFilters.removeChild(element);
}
function createRemoveFilterButton(element){
    var title=element.getAttribute("data-label");
    var group=element.getAttribute("name");
    var removeFilterButton=document.createElement("button");
    removeFilterButton.innerHTML="X "+title;
    removeFilterButton.setAttribute("id","remove"+title);
    removeFilterButton.classList.add(group);
    removeFilterButton.setAttribute("value",element.value);
    removeFilterButton.onclick=function(){removeFilter(removeFilterButton);};
    return removeFilterButton;

}
function applyFilters(){

}
function loadFilterHelper(restrictions,title,name,callback){
    var form = document.getElementById(name+"Filters");
    for(var i=0;i<restrictions.length;i++){
        var checkbox=document.createElement("input");
        checkbox.setAttribute("name",name);
        checkbox.setAttribute("type","radio");
        checkbox.setAttribute("value",i);
        checkbox.setAttribute("data-label",restrictions[i]);

        checkbox.onchange=callback;
        form.appendChild(checkbox);
        var label=document.createElement("span");
        label.innerHTML=restrictions[i]+"<br/>";
        label.setAttribute("title",title[i]);
        form.appendChild(label);
    }
}
