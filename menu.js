function loadMenu(){
    var id=+Util.getURLParam("id");
    restaurant=restaurants[id];
    document.getElementById("restaurant-title").innerHTML=restaurant.title;
    document.getElementById("street-address").innerHTML=restaurant.address;
    document.getElementById("city-state").innerHTML=restaurant.CityState;
    document.getElementById("phone-number").innerHTML=restaurant.phoneNumber;
    if(id >= menu.length)
        id=0;
    var container=document.getElementById("menu-list");
    console.log(id,menu[id]);
    for(var i=0;i<menu[id].length;i++){
        var menuItem=menu[id][i];
        var item=document.createElement("div");
        item.classList.add("menu-item");
        item.appendChild(createImage("menu-image",getFilename(menuItem.title)+".png"));
        var info=document.createElement("div");
        info.classList.add("menu-item-info");
        info.appendChild(createTextDiv(menuItem.title,"item-title"));
        info.append(createRatingDiv(menuItem.rating,menuItem.vrating,menuItem.cost,true));
        item.appendChild(info);
        container.appendChild(item);
    }

}
