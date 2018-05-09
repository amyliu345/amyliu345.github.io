var menu;
var sub = false;
function loadMenu(){
    var id=+Util.getURLParam("id");
    restaurant=restaurants[id];
    document.getElementById("restaurant-title").innerHTML=restaurant.title;
    document.getElementById("street-address").innerHTML=restaurant.street + "<br>" + restaurant.cityState;
    document.getElementById("phone-number").innerHTML=restaurant.phoneNumber;
    if(id >= restaurantMenu.length)
        id=0;
    menu=restaurantMenu[id];
    var container=document.getElementById("menu-list");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    for(var i=0;i<menu.length;i++){
        var menuItem=menu[i];
        
        var item=document.createElement("div");
        item.setAttribute("id",menu[i].id);
        item.setAttribute("data-index",menu[i].index);
        item.classList.add("menu-item");
        item.appendChild(createImage("menu-image",getFilename(menuItem.title)+".png"));
        var info=document.createElement("div");
        info.classList.add("menu-item-info");
        //var numberLabel=createTextDiv(i+1,"index","indexFor"+menu[i].id);
        //info.appendChild(numberLabel);
        info.appendChild(createTextDiv(menuItem.title,"item-title"));
        info.appendChild(createRatingDiv(menuItem.rating,menuItem.vrating,menuItem.cost,true));

        item.appendChild(info);
        item.appendChild(createTextDiv("See More...","menu-see-more", "maximizer"+menu[i].index));


        var expansionDiv = document.createElement("div");
        expansionDiv.setAttribute("class", "expansion");
        expansionDiv.setAttribute("id", "expansion"+menu[i].index);

        ingredientDiv = document.createElement("div");
        ingredientDiv.setAttribute("class", "ingredients-expansion");
        ingredientDiv.appendChild(createTextDiv("Ingredients", "ingredients-exp-title", "ingredients-exp-title"));
        ingredientDiv.appendChild(createTextDiv("<div id='bruh'> Corn Flour <img src='graphics/s.png' id='sub' title='Substitutions Available' onclick='subClick()'></div><div id='subs'><ul><li>Wheat Flour</li><li>White Flour</li></ul></div> Water <br> Salt <br> Onion <br> Black Beans <br> Vegetable Broth"))

        expansionDiv.appendChild(ingredientDiv);

        reviewsDiv = document.createElement("div");
        reviewsDiv.setAttribute("class", "reviews-expansion");
        reviewsDiv.appendChild(createTextDiv("Reviews", "reviews-exp-title", "reviews-exp-title"));
        reviewsDiv.appendChild(createTextDiv("\"Tastes great and is a very filling dinner! The tamales weren't"
                                             +"spicy enough for my taste but there were chili flakes at the table"
                                             +"for me to add! Love!\"<br><br> The black beans in this dish really give"
                                             +"it a satisfying flavor. Would order again.\""))

        expansionDiv.appendChild(reviewsDiv);
        item.appendChild(expansionDiv);
        item.appendChild(createTextDiv("See Less","menu-see-less", "minimizer"+menu[i].index));


        container.appendChild(item);
    }


    var see_more_items = document.getElementsByClassName("menu-see-more");

    for (var i = 0; i < see_more_items.length; i++) {
        see_more_items[i].addEventListener("click", seeMoreHandler, false);
    }

    function seeMoreHandler(){
        var menuItemNumber = parseInt(this.id[this.id.length-1]);
        var expansionDiv = document.getElementById("expansion"+menuItemNumber);
        expansionDiv.style.display = "flex";
        this.style.display = "none";

        var minDiv = document.getElementById("minimizer"+menuItemNumber);
        minDiv.style.display = "block";
    }


    var see_less_items = document.getElementsByClassName("menu-see-less");

    for (var i = 0; i < see_less_items.length; i++) {
        see_less_items[i].addEventListener("click", seeLessHandler, false);
    }

    function seeLessHandler(){
        var menuItemNumber = parseInt(this.id[this.id.length-1]);
        var expansionDiv = document.getElementById("expansion"+menuItemNumber);
        expansionDiv.style.display = "none";
        this.style.display = "none";

        var maxDiv = document.getElementById("maximizer"+menuItemNumber);
        maxDiv.style.display = "block";
    }

    return menu;


}

function showFullHours(){
    var display = document.getElementById('full-hours').style.display;
    if (display == 'none'){
        document.getElementById('full-hours').style.display = 'inherit';
        document.getElementById('top-review-section').style.display = 'none';
    }
    else{
        document.getElementById('full-hours').style.display = 'none';
        document.getElementById('top-review-section').style.display = 'inherit';
    }
}

function subClick(){
    if (!sub){
        document.getElementById('subs').style.display = 'inherit';
        sub = true;
    }
    else{
        document.getElementById('subs').style.display = 'none';  
        sub = false;   
    }
}