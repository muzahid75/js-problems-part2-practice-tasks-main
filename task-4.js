const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

let avg = 6;

function lowPrice(price,average){
    sum = 0;
    let result;
    for(let number of price){
        sum += number.price;
        result = sum/average;
    }
    return result;
}

let result = lowPrice(phones,avg);
console.log(result);
