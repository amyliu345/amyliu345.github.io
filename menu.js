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

    for(var i=0;i<menu.length;i++){
        menu[i].id="menu"+i;
        var menuItem=menu[i];
        var item=document.createElement("div");
        item.setAttribute("id",menu[i].id);
        item.setAttribute("data-index",i);
        item.classList.add("menu-item");
        item.appendChild(createImage("menu-image",getFilename(menuItem.title)+".png"));
        var info=document.createElement("div");
        info.classList.add("menu-item-info");
        info.appendChild(createTextDiv(menuItem.title,"item-title"));
        info.append(createRatingDiv(menuItem.rating,menuItem.vrating,menuItem.cost,true));
        item.appendChild(info);
        container.appendChild(item);
    }
    return menu;
}
