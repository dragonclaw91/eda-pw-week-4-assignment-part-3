console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];



function addItem(item){
    basket.push(item)
 if(basket.indexOf(item) !== -1){
        return true}
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




