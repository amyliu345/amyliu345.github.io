/**
The image displayed with the restaurant is its index +".png". For example
Green Garden's image would be 2.png
**/
restaurants=[
    {title:"Tom's Bistro",rating:4,vrating:3,prating:4, vegrating: 4,cost:0,street:"683 Massachusetts Ave",cityState:"Cambridge, Ma 02139",phoneNumber:"(617)-235-7126",restrictionLevel:0,mealLevel:1,distance: .1,allergy:2},
    {title:"Veggie Place",rating:2,vrating:1,prating:2, vegrating: 3,cost:1,street:"683 Massachusetts Ave",cityState:"Cambridge, Ma 02139",phoneNumber:"(617)-235-7126",restrictionLevel:1,mealLevel:2,distance: .3,allergy:0},
    {title:"Green Garden",rating:3,vrating:2,prating:3, vegrating: 5,cost:0,street:"683 Massachusetts Ave",cityState:"Cambridge, Ma 02139",phoneNumber:"(617)-235-7126",restrictionLevel:0,mealLevel:1,distance: 1.1,allergy:0},
    {title:"Life Alive",rating:2,vrating:5, prating:3, vegrating: 4,cost:2,street:"683 Massachusetts Ave",cityState:"Cambridge, Ma 02139",phoneNumber:"(617)-235-7126",restrictionLevel:0,mealLevel:4,distance: .1,allergy:0},
    {title:"Santiago's Kitchen",rating:5,vrating:4, prating:3, vegrating: 3,cost:3,street:"683 Massachusetts Ave",cityState:"Cambridge, Ma 02139",phoneNumber:"(617)-235-7126",restrictionLevel:1,mealLevel:5,distance: .6,allergy:0},
    {title:"Steak House",rating:4,vrating:1, prating:1, vegrating: 4,cost:3,street:"683 Massachusetts Ave",cityState:"Cambridge, Ma 02139",phoneNumber:"(617)-235-7126",restrictionLevel:100,mealLevel:6,distance: 2.1,allergy:7},
    {title:"Seafood Palace",rating:3,vrating:2, prating:5, vegrating: 3, cost:3,street:"683 Massachusetts Ave",cityState:"Cambridge, Ma 02139",phoneNumber:"(617)-235-7126",restrictionLevel:2,mealLevel:7,distance: 3.3,allergy:0},
    {title:"Fresh Fish",rating:3,vrating:2,prating:5, vegrating: 3,cost:2,street:"283 Massachusetts Ave",cityState:"Cambridge, Ma 02139",phoneNumber:"(617)-237-7126",restrictionLevel:2,mealLevel:0,distance: .4,allergy:1}
];


restaurantMenu=[
    [
        {title:"Vegan Tamales",rating:3,vrating:3, prating:3, vegrating:3, cost:12.95,restrictionLevel:0,mealLevel:8,allergy:11},
        {title:"Clam Chowder",rating:4,vrating:0, prating:5, vegrating:0, cost:8.95,restrictionLevel:0,mealLevel:9,allergy:16},
        {title:"BLT",rating:2,vrating:0, prating:0, vegrating:0, cost:10.99,restrictionLevel:0,mealLevel:3,allergy:3},
        {title:"Spinach Salad",rating:2,vrating:4,prating:3, vegrating:3,cost:10.75,restrictionLevel:0,mealLevel:4,allergy:4},
        {title:"Portobello Burger",rating:4,vrating:0,prating:3, vegrating:3,cost:15.95,restrictionLevel:2,mealLevel:5,allergy:14},
        {title:"Kale Burrito",rating:3,vrating:2,prating:3, vegrating:3,cost:11.95,restrictionLevel:2,mealLevel:6,allergy:15},
        {title:"Cheese Pizza",rating:5,vrating:0,prating:5, vegrating:5,cost:8.25,restrictionLevel:0,mealLevel:7,allergy:7}
    ]

];

for(var i=0;i<restaurants.length;i++){
    restaurants[i].id="restaurant"+i;
    restaurants[i].index=i;
}
for(var n=0;n<restaurantMenu.length;n++){
    for(var i=0;i<restaurantMenu[n].length;i++){
        restaurantMenu[n][i].id="menu"+i;
        restaurantMenu[n][i].index=i;
    }
}
