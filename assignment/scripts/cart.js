console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

let maxItems = 5;


function addItem(item){
    basket.push(item)
    if(basket.indexOf(item) !== -1){
        console.log(true)
    }
    function isFull(basket){
        if (basket.length < 5){
            console.log(false)
        }else if(basket.length >= 5){
            console.log(true)
        }
    }isFull(basket);
}

   
    

addItem("apples");
addItem("plums");
addItem("oranges");



function listItems(basket){
    for(let i = 0; i < basket.length; i++){
        console.log(basket[i])
    }
}


 
function empty(basket){
 if(basket !== []){
   return  basket = [];
 }
}

function removeItem(item){
    if(basket.indexOf(item) !== -1){
        basket.splice(item,1)
    }else if (basket.indexOf(item) === -1){
        console.log(null);
    }
}
removeItem("aples");





