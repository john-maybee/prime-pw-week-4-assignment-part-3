console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(n) {
    let addItem = basket.push(n);
    console.log(basket);
    return true;
}
addItem('cheese');
addItem('corn');
addItem('croissant');
addItem('coffee');
console.log(basket);

function listItems() {
    for (let i=0; i < basket.length; i++){
        if (i<basket.length){
            console.log(basket[i]);
        }
    }
}
listItems();

function empty() {
    while (basket.length > 0){
        basket.pop();
    }
}
empty();
console.log(basket);

addItem('apples');
console.log(basket);
listItems();




// function empty() {
//     for (let i=basket.length-1; i<basket.length; i++);
//         if (i>=0){
//             return basket.pop;
//         }
// }
// console.log(empty());



empty();
addItem('pop');
// function empty(){
//     let basket = basket();
// }
// console.log(empty());