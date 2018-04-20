/**
The image displayed with the restaurant is its index +".png". For example
Green Garden's image would be 2.png
**/
restaurants=[
    {name:"Tom's Bistro",rating:4,vrating:3,cost:1,street:"683 Massachusetts Ave",city:"Cambridge, Ma 02139",number:"(617)-235-7126",restrictionLevel:0,mealLevel:1,distance: .1},
    {name:"Veggie Place",rating:2,vrating:1,cost:2,street:"683 Massachusetts Ave",city:"Cambridge, Ma 02139",number:"(617)-235-7126",restrictionLevel:1,mealLevel:2,distance: .3},
    {name:"Green Garden",rating:3,vrating:2,cost:4,street:"683 Massachusetts Ave",city:"Cambridge, Ma 02139",number:"(617)-235-7126",restrictionLevel:0,mealLevel:1,distance: 1.1},
    {name:"Life Alive",rating:2,vrating:5,cost:2,street:"683 Massachusetts Ave",city:"Cambridge, Ma 02139",number:"(617)-235-7126",restrictionLevel:0,mealLevel:4,distance: .1},
    {name:"Santiago's Kitchen",rating:5,vrating:3,cost:3,street:"683 Massachusetts Ave",city:"Cambridge, Ma 02139",number:"(617)-235-7126",restrictionLevel:1,mealLevel:5,distance: .6},
    {name:"Steak House",rating:4,vrating:1,cost:3,street:"683 Massachusetts Ave",city:"Cambridge, Ma 02139",number:"(617)-235-7126",restrictionLevel:100,mealLevel:6,distance: 2.1},
    {name:"Seafood Palace",rating:3,vrating:2,cost:3,street:"683 Massachusetts Ave",city:"Cambridge, Ma 02139",number:"(617)-235-7126",restrictionLevel:2,mealLevel:7,distance: 3.3},
    {name:"Fresh Fish",rating:3,vrating:2,cost:2,street:"283 Massachusetts Ave",city:"Cambridge, Ma 02139",number:"(617)-237-7126",restrictionLevel:2,mealLevel:0,distance: .4}
]

function loadRestaurants(){
    var list=document.getElementById("restaurantList");
    for(var i=0;i<restaurants.length;i++){
        restaurants[i].id="restaurant"+i;
        var restaurant=document.createElement("div");
        restaurant.setAttribute("id",restaurants[i].id);
        restaurant.setAttribute("data-index",i);
        restaurant.classList.add("restaurant-item");
        var title=document.createElement("div");
        title.classList.add("title");
        title.innerHTML=(i + 1) + '. ' + restaurants[i].name;
        restaurant.appendChild(title);
        var image = document.createElement('div');
        image.setAttribute('id', 'imageContainer');
        restaurant.appendChild(image);
        var img=document.createElement("img");
        img.src='graphics/' + i + ".png";
        img.classList.add("image");
        image.appendChild(img);
        restaurant.appendChild(createRatingDiv(restaurants[i].rating, restaurants[i].vrating));
        // restaurant.appendChild(createRatingDiv(restaurants[i].vrating,false));

        // var costValue="";
        // for(var n=0;n<restaurants[i].cost;n++)
        //     costValue+="$";
        var restaurantDetails = document.createElement('div');
        restaurantDetails.setAttribute('id', 'restaurantDetails');
        restaurant.appendChild(restaurantDetails);
        // restaurantDetails.appendChild(createDiv("cost", costValue));

        restaurantDetails.appendChild(createDiv("street", restaurants[i].street));

        restaurantDetails.appendChild(createDiv("city", restaurants[i].city));

        restaurantDetails.appendChild(createDiv("phone-number", restaurants[i].number));

        restaurantDetails.appendChild(createDiv('distance', restaurants[i].distance + ' miles away'));
        list.appendChild(restaurant);
    }
}
function createDiv(className, innerHTML){
    var e = document.createElement("div");
    e.classList.add(className);
    e.innerHTML = innerHTML;
    return e;
}
// function createRatingDiv(rating,normal){
//     var i=0;
//     var container=document.createElement("div");
//     type = normal?"star":"carrot";
//     // container.classList.add(type+"-rating");
//     container.classList.add("rating");
//     for(;i<rating;i++){
//         var img=document.createElement("img");
//         var label="full-"+type;
//         img.classList.add(label);
//         img.classList.add("rating");
//         img.src = "graphics/"+label+".png";
//         container.appendChild(img);
//     }
//     for(;i<5;i++){
//         var img=document.createElement("img");
//         // var label="empty-"+type;
//         // img.src = "graphics/"+label+".png";
//         // img.classList.add("rating");
//         // img.classList.add(label);
//         container.appendChild(img);
//     }
//     return container;

// }
function createRatingDiv(rating, vrating){
    var container=document.createElement("div");
    container.classList.add("rating");
    var starRating = document.createElement('div');
    starRating.classList.add('starRating');
    for(var i = 0;i<rating;i++){
        type = 'star';
        var img=document.createElement("img");
        var label="full-"+type;
        img.classList.add(label);
        img.classList.add("rating");
        img.src = "graphics/"+label+".png";
        starRating.appendChild(img);
    }
    for(var i = 0; i< 5 - rating; i++){
        type = 'star';
        var img=document.createElement("img");
        var label="gray-"+type;
        img.classList.add(label);
        img.classList.add("rating");
        img.src = "graphics/"+label+".png";
        starRating.appendChild(img);
    }
    container.appendChild(starRating);
    var vegRating = document.createElement('div');
    vegRating.classList.add('vegRating');
    for(var i = 0; i < vrating; i++){
        console.log('ya');
        type = 'carrot';
        var img=document.createElement("img");
        var label="full-"+type;
        img.classList.add(label);
        img.classList.add("rating");
        img.src = "graphics/"+label+".png";
        vegRating.appendChild(img);
    }
    for(var i = 0; i < 5 - vrating; i++){
        console.log('ya');
        type = 'carrot';
        var img=document.createElement("img");
        var label="gray-"+type;
        img.classList.add(label);
        img.classList.add("rating");
        img.src = "graphics/"+label+".png";
        vegRating.appendChild(img);
    }
    container.appendChild(vegRating);
    var costValue="";
    for(var n=0;n<restaurants[i].cost;n++)
        costValue+="$";
    container.appendChild(createDiv("cost", costValue));
    return container;

}
