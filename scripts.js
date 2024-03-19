function changeItem(){
    let eatingItems = ['Apple','Mango','Banana','Watermelon','Grapes'];
    let randomItems = getShowRandomItems(0, eatingItems.length - 1);
    let itemsToChangeTo = eatingItems[randomItems];
    document.getElementById('header').innerHTML = itemsToChangeTo;

}

function getShowRandomItems(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);

}