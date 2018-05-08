

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

        var image = document.createElement('div');
        image.setAttribute('id', 'imageContainer');
        restaurant.appendChild(image);
        image.appendChild(createImage("image",restaurants[i].index+".png"));
        
        
        // restaurant.appendChild(createRatingDiv(restaurants[i].vrating,false));
        
        var textContainer = document.createElement('div');
        textContainer.setAttribute('id', 'restaurant-info-container');
        restaurant.appendChild(textContainer);
        
        var leftTextContainer = document.createElement('div');
        leftTextContainer.setAttribute('id', 'restaurant-left-info-container');
        textContainer.appendChild(leftTextContainer);
        
        var anchor = document.createElement('a');
        var numberLabel=createTextDiv(i+1 + '.',"index","indexFor"+restaurants[i].id);
        anchor.appendChild(numberLabel);
        var title=createTextDiv(restaurants[i].title,"title");
        anchor.appendChild(title);
        anchor.setAttribute('href', './menu.html?id='+restaurants[i].index);
        anchor.classList.add('link');
        leftTextContainer.appendChild(anchor);
        
        var belowTitleContainer = document.createElement('div');
        belowTitleContainer.setAttribute('id', 'below-title-container');
        leftTextContainer.appendChild(belowTitleContainer);
        
        belowTitleContainer.appendChild(createRatingDiv(restaurants[i].rating, restaurants[i].vrating,restaurants[i].cost));

        // var costValue="";
        // for(var n=0;n<restaurants[i].cost;n++)
        //     costValue+="$";
        var rightTextContainer = document.createElement('div');
        rightTextContainer.setAttribute('id', 'restaurant-right-info-container');
        textContainer.appendChild(rightTextContainer);
        
        var restaurantDetails = document.createElement('div');
        restaurantDetails.setAttribute('id', 'restaurantDetails');
        // restaurantDetails.appendChild(createTextDiv("cost", costValue));
        restaurantDetails.appendChild(createTextDiv(restaurants[i].distance + ' miles away','distance'));
        rightTextContainer.appendChild(restaurantDetails);

        var additionalInfo = document.createElement('div');
        additionalInfo.setAttribute('class', 'additional-info');
        
        restaurantDetails.appendChild(additionalInfo);
        
        additionalInfo.appendChild(createTextDiv(restaurants[i].street,"street"));

        additionalInfo.appendChild(createTextDiv(restaurants[i].cityState,"city"));

        additionalInfo.appendChild(createTextDiv(restaurants[i].phoneNumber,"phone-number"));
        list.appendChild(restaurant);
    }
}
