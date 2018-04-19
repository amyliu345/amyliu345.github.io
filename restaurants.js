/**
The image displayed with the restaurant is its index +".png". For example
Green Garden's image would be 2.png
**/
restaurants=[
    {name:"Tom's Bistro",rating:4,vrating:3,cost:1,street:"683 Massachusetts Ave",city:"Cambridge, Ma 02139",number:"(617)-235-7126",restrictionLevel:0,mealLevel:1},
    {name:"Veggie Place",rating:2,vrating:1,cost:2,street:"683 Massachusetts Ave",city:"Cambridge, Ma 02139",number:"(617)-235-7126",restrictionLevel:1,mealLevel:2},
    {name:"Green Garden",rating:3,vrating:2,cost:4,street:"683 Massachusetts Ave",city:"Cambridge, Ma 02139",number:"(617)-235-7126",restrictionLevel:0,mealLevel:3},
    {name:"Life Alive",rating:1,vrating:5,cost:2,street:"683 Massachusetts Ave",city:"Cambridge, Ma 02139",number:"(617)-235-7126",restrictionLevel:0,mealLevel:4},
    {name:"Santiago's Kitchen",rating:5,vrating:3,cost:3,street:"683 Massachusetts Ave",city:"Cambridge, Ma 02139",number:"(617)-235-7126",restrictionLevel:1,mealLevel:5},
    {name:"Steak House",rating:2,vrating:4,cost:1,street:"683 Massachusetts Ave",city:"Cambridge, Ma 02139",number:"(617)-235-7126",restrictionLevel:100,mealLevel:6},
    {name:"Seafood Palace",rating:3,vrating:2,cost:2,street:"683 Massachusetts Ave",city:"Cambridge, Ma 02139",number:"(617)-235-7126",restrictionLevel:2,mealLevel:7},
    {name:"Fresh Fish",rating:3,vrating:2,cost:2,street:"283 Massachusetts Ave",city:"Cambridge, Ma 02139",number:"(617)-237-7126",restrictionLevel:2,mealLevel:0}
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
        title.innerHTML=restaurants[i].name;
        restaurant.appendChild(title);
        var img=document.createElement("img");
        img.src='graphics/' + i + ".png";
        img.classList.add("image");
        restaurant.appendChild(img);
        restaurant.appendChild(createRatingDiv(restaurants[i].rating, restaurants[i].vrating));
        // restaurant.appendChild(createRatingDiv(restaurants[i].vrating,false));

        var costValue="";
        for(var n=0;n<restaurants[i].cost;n++)
            costValue+="$";
        restaurant.appendChild(createDiv("cost",costValue));

        restaurant.appendChild(createDiv("street",restaurants[i].street));

        restaurant.appendChild(createDiv("city",restaurants[i].city));

        restaurant.appendChild(createDiv("phone-number",restaurants[i].number));
        list.appendChild(restaurant);
    }
}
function createDiv(className, innerHTML){
    var e = document.createElement("div");
    e.classList.add(className);
    e.innerHTML=innerHTML;
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
    var i=0;
    var container=document.createElement("div");
    // type = normal?"star":"carrot";
    // container.classList.add(type+"-rating");
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
    container.appendChild(starRating);
    var vegRating = document.createElement('div');
    vegRating.classList.add('vegRating');
    console.log(vrating);
    for(var i = 0;i<vrating;i++){
        console.log('ya');
        type = 'carrot';
        var img=document.createElement("img");
        var label="full-"+type;
        img.classList.add(label);
        img.classList.add("rating");
        img.src = "graphics/"+label+".png";
        console.log(img);
        vegRating.appendChild(img);
    }
    container.appendChild(vegRating);
    // for(;i<5;i++){
    //     var img=document.createElement("img");
    //     // var label="empty-"+type;
    //     // img.src = "graphics/"+label+".png";
    //     // img.classList.add("rating");
    //     // img.classList.add(label);
    //     container.appendChild(img);
    // }
    return container;

}
