
function createImage(clazz,fileName){
    var img=document.createElement("img");
    img.src='graphics/' + fileName;
    img.classList.add("image");
    if(clazz)
        img.classList.add(clazz);
    return img;
}
function createRatingImage(label){
    var img=document.createElement("img");
    img.classList.add(label);
    img.classList.add("rating");
    img.src = "graphics/"+label+".png";
    return img;
}
function createTextDiv(innerHTML,className,id){
    var e = document.createElement("div");
    if(className)
        e.classList.add(className);
    if(id)
        e.setAttribute("id",id);
    e.innerHTML = innerHTML;
    return e;
}
function createRatingDiv(rating, vrating,cost,literal){
    var container=document.createElement("div");
    container.classList.add("rating");
    var starRating = document.createElement('div');
    starRating.classList.add('starRating');
    starRating.setAttribute('title', 'General Rating');
    var i=0;
    for(;i<rating;i++)
        starRating.appendChild(createRatingImage("full-star"));
    for(; i< 5; i++)
        starRating.appendChild(createRatingImage("gray-star"));

    container.appendChild(starRating);
    var restrictionRating = document.createElement('div');
    restrictionRating.classList.add('restrictionRating');
    container.appendChild(restrictionRating);
    container.appendChild(getCostDiv(cost,literal));

    return container;
}
function getCostDiv(cost,literal){
    if(literal)
        return createTextDiv("$"+cost,"item-cost");
    else{
        var costValue="";
        for(var n=0;n<cost;n++)
            costValue+="$";
        return createTextDiv(costValue,"item-cost");
    }

}
function getFilename(str){
    return str.toLowerCase().replace(/\s+/g,"_").replace(/\W/g,"");
}
