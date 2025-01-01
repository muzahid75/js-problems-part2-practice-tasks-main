function calculateElectronicsBudget(laptops, tablets, mobiles) {
    const laptopPrice = 35000;  // Price of a laptop
    const tabletPrice = 15000;  // Price of a tablet
    const mobilePrice = 20000;  // Price of a mobile

    // Calculate the total budget required
    const totalBudget = (laptops * laptopPrice) + (tablets * tabletPrice) + (mobiles * mobilePrice);

    return totalBudget;
}

// Example usage
const laptops = 2;
const tablets = 3;
const mobiles = 4;

const totalMoneyRequired = calculateElectronicsBudget(laptops, tablets, mobiles);
console.log(`Total money required: ${totalMoneyRequired} tk`);
