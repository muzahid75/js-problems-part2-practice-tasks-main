// const heights2 = [167, 190, 120, 165, 137];

// let result = heights2.sort(function(a,b){
//     return a - b;
// })
// console.log(result[0]);

// const heights2 = [167, 190, 120, 165, 137];

// let result = heights2.sort(function(a,b){
//     return b - a;
// })
// console.log(result[0]);
const heights2 = [167, 190, 120, 165, 137];

function bigNumber(num){
    let big = num[0];
    for(let number of num){
        if(number>big){
            big = number;
        }
    }
    return big;
}
let result = bigNumber(heights2);
console.log(result);
// const heights2 = [167, 190, 120, 165, 137];

// function smallNumber(num){
//     let small = num[0];
//     for(let number of num){
//         if(number<small){
//             small = number;
//         }
//     }
//     return small;
// }
// let result = smallNumber(heights2);
// console.log(result);
{
const heights2 = [167, 190, 120, 165, 137];

function bigNumber(num){
    let total = 0;
    for(let number of num){
        total +=number
    }
    return total;
}
let result = bigNumber(heights2);
console.log(result);
}

{
    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

    function lowPrice(price){
        small = price[0];
        for(let number of price){
            if(number.price<small.price){
                small=number;
            }
        }
        return small;
    }

    let result = lowPrice(phones);
    console.log(result);
}
{
    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

    function lowPrice(price){
        small = price[0];
        for(let number of price){
            if(number.price>small.price){
                small=number;
            }
        }
        return small;
    }

    let result = lowPrice(phones);
    console.log(result);
}
{
    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

    function lowPrice(price){
        sum = 0;
        for(let number of price){
            sum +=number.price
        }
        return sum;
    }

    let result = lowPrice(phones);
    console.log(result);
}
