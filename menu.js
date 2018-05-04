var menu;
function loadMenu(){
    var id=+Util.getURLParam("id");
    restaurant=restaurants[id];
    document.getElementById("restaurant-title").innerHTML=restaurant.title;
    document.getElementById("street-address").innerHTML=restaurant.street;
    document.getElementById("city-state").innerHTML=restaurant.cityState;
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
        var numberLabel=createTextDiv(i+1,"index","indexFor"+menu[i].id);
        info.appendChild(numberLabel);
        info.appendChild(createTextDiv(menuItem.title,"item-title"));
        info.append(createRatingDiv(menuItem.rating,menuItem.vrating,menuItem.cost,true));
        item.appendChild(info);

        var expansionDiv = document.createElement("div");
        expansionDiv.setAttribute("class", "expansion");
        expansionDiv.setAttribute("id", "expansion-menu"+menu[i].index);

        ingredientDiv = document.createElement("div");
        ingredientDiv.setAttribute("class", "ingredients-expansion");
        ingredientDiv.appendChild(createTextDiv("Ingredients", "ingredients-exp-title", "ingredients-exp-title"));
        ingredientDiv.appendChild(createTextDiv("Corn Flour <br> Water <br> Salt <br> Onion <br> Black Beans <br> Vegetable Broth"))

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

        container.appendChild(item);
    }


    var menu_items = document.getElementsByClassName("menu-item");

    for (var i = 0; i < menu_items.length; i++) {
        menu_items[i].addEventListener("click", menuItemHandler, false);
    }

    function menuItemHandler(){
        var expansionDiv = document.getElementById("expansion-"+this.id);
        if (expansionDiv.style.display === "flex"){
            expansionDiv.style.display = "none";
        }
        else {
            expansionDiv.style.display = "flex";
        }
    }

    return menu;


}
