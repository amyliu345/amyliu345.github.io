

function loadRestaurants(){
    var list=document.getElementById("restaurantList");
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
    for(var i=0;i<restaurants.length;i++){
        var restaurant=document.createElement("div");
        restaurant.setAttribute("id",restaurants[i].id);
        restaurant.setAttribute("data-index",restaurants[i].index);
        restaurant.classList.add("restaurant-item");

        var anchor = document.createElement('a');
        var numberLabel=createTextDiv(i+1,"index","indexFor"+restaurants[i].id);
        anchor.appendChild(numberLabel);
        var title=createTextDiv(restaurants[i].title,"title");
        anchor.appendChild(title);
        anchor.setAttribute('href', './menu.html?id='+restaurants[i].index);
        anchor.classList.add('link');
        restaurant.appendChild(anchor);

        var image = document.createElement('div');
        image.setAttribute('id', 'imageContainer');
        restaurant.appendChild(image);
        image.appendChild(createImage("image",restaurants[i].index+".png"));
        restaurant.appendChild(createRatingDiv(restaurants[i].rating, restaurants[i].vrating,restaurants[i].cost));
        // restaurant.appendChild(createRatingDiv(restaurants[i].vrating,false));

        // var costValue="";
        // for(var n=0;n<restaurants[i].cost;n++)
        //     costValue+="$";
        var restaurantDetails = document.createElement('div');
        restaurantDetails.setAttribute('id', 'restaurantDetails');
        restaurant.appendChild(restaurantDetails);
        // restaurantDetails.appendChild(createTextDiv("cost", costValue));

        restaurantDetails.appendChild(createTextDiv(restaurants[i].street,"street"));

        restaurantDetails.appendChild(createTextDiv(restaurants[i].cityState,"city"));

        restaurantDetails.appendChild(createTextDiv(restaurants[i].phoneNumber,"phone-number"));

        restaurantDetails.appendChild(createTextDiv(restaurants[i].distance + ' miles away','distance'));
        list.appendChild(restaurant);
    }
}
