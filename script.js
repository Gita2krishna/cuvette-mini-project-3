const food = require('./food.json')

food.forEach(elements=>{
    console.log(elements);
})

let vegetables = food.filter(elements=>{
    return elements.category == 'Vegetable'
})
console.log('\nVegetables : \n', vegetables)


let fruits = food.filter(elements=>{
    return elements.category == 'Fruit'
})
console.log('\nFruits : \n', fruits)


let protien = food.filter(elements=>{
    return elements.category == 'Protein'
})
console.log('\nProtiens : \n', protien)


let nuts = food.filter(elements=>{
    return elements.category == 'Nuts'
})
console.log('\nNuts : \n', nuts)


let grains = food.filter(elements=>{
    return elements.category == 'Grain'
})
console.log('\nGrains : \n', grains)


let dairy = food.filter(elements=>{
    return elements.category == 'Dairy'
})
console.log('\nDairy : \n', dairy)


let calorie_filter_1 = food.filter(elements=>{
    return elements.calorie > 100;
})
console.log('\nFood with more than 100 calories : \n', calorie_filter_1)


let calorie_filter_2 = food.filter(elements=>{
    return elements.calorie < 100;
})
console.log('\nFood with less than 100 calories : : \n', calorie_filter_2)


let sort_by_protien = food.sort((element1, element2) => {
    return element2.protiens - element1.protiens;
});
console.log('\nSorted list by protien content : \n', sort_by_protien)


let sort_by_cab_content = food.sort((element1, element2) => {
    return element1.cab - element2.cab;
});
console.log('\nSorted list by cab content : \n', sort_by_cab_content)