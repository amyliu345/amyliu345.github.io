/**
The image displayed with the restaurant is its index +".png". For example
Green Garden's image would be 2.png
**/
restaurants=[
    {name:"Tom's Bistro",rating:4,vrating:5,cost:2,street:"683 Massachusetts Ave",city:"Cambridge, Ma 02139",number:"(617)-235-7126",restrictionLevel:0},
    {name:"Veggie Place",rating:4,vrating:5,cost:2,street:"683 Massachusetts Ave",city:"Cambridge, Ma 02139",number:"(617)-235-7126",restrictionLevel:1},
    {name:"Green Garden",rating:4,vrating:5,cost:2,street:"683 Massachusetts Ave",city:"Cambridge, Ma 02139",number:"(617)-235-7126",restrictionLevel:0},
    {name:"Life Alive",rating:4,vrating:5,cost:2,street:"683 Massachusetts Ave",city:"Cambridge, Ma 02139",number:"(617)-235-7126",restrictionLevel:0},
    {name:"Santiago's Kitchen",rating:4,vrating:5,cost:2,street:"683 Massachusetts Ave",city:"Cambridge, Ma 02139",number:"(617)-235-7126",restrictionLevel:1},
    {name:"Steak House",rating:4,vrating:5,cost:2,street:"683 Massachusetts Ave",city:"Cambridge, Ma 02139",number:"(617)-235-7126",restrictionLevel:100},
    {name:"Seafood Palace",rating:4,vrating:5,cost:2,street:"683 Massachusetts Ave",city:"Cambridge, Ma 02139",number:"(617)-235-7126",restrictionLevel:2}
]


function loadRestaurants(){
    var list=document.getElementById("restaurantList");
    for(var i=0;i<restaurants.length;i++){
        var restaurant=document.createElement("div");
        restaurant.setAttribute("data-index",i);
        restaurant.classList.add("restaurant-item");
        var title=document.createElement("div");
        title.classList.add("title");
        title.innerHTML=restaurants[i].name;
        restaurant.appendChild(title);
        var img=document.createElement("img");
        img.src=i+".png";
        img.classList.add("image");
        restaurant.appendChild(img);
        restaurant.appendChild(createRatingDiv(restaurants[i].rating,true));
        restaurant.appendChild(createRatingDiv(restaurants[i].vrating,false));

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
function createDiv(clazz,innerHTML){
    var e=document.createElement("div");
    e.classList.add(clazz);
    e.innerHTML=innerHTML;
    return e;
}
function createRatingDiv(rating,normal){
    var i=0;
    var container=document.createElement("div");
    type=normal?"star":"carrot";
    container.classList.add(type+"-rating");
    for(;i<rating;i++){
        var img=document.createElement("img");
        var label="full-"+type;
        img.classList.add(label);
        img.classList.add("rating");
        img.src="Resources/"+label+".png";
        container.appendChild(img);
    }
    for(;i<5;i++){
        var img=document.createElement("img");
        var label="half-"+type;
        img.src="Resources/"+label+".png";
        img.classList.add("rating");
        img.classList.add(label);
        container.appendChild(img);
    }
    return container;

}
