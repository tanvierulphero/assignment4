function seerToMon(seer) {
    return (seer / 40);
}


var mon = seerToMon(200);
console.log(mon);






function totalSales(products) {
    let totalSales = 0;
    for (const product of products) {
        const totalProduct = product.price * product.quantity;
        totalSales = totalSales + totalProduct;
    }
    return totalSales;
}

const products = totalSales(
    [
        { name: 'shirt', price: 100, quantity: 5 },
        { name: 'pant', price: 200, quantity: 4 },
        { name: 'show', price: 500, quantity: 2 }
    ]
);

console.log(products)


function deliveryCost(product) {
    var perProduct = 0;
    if (product <= 100) {
        totalProductCost = product * 100;
    } else if (product <= 200) {
        var first100Product = 100 * 100;
        var remainingProduct = product - 100;
        var secon200ProductCost = remainingProduct * 80;
        totalProductCost = first100Product + secon200ProductCost;
    } else {
        var first100Product = 100 * 100;
        secon200ProductCost = 100 * 80;
        var remainingProduct = product - 200;
        var third200OverCost = remainingProduct * 50;
        totalProductCost = first100Product + secon200ProductCost + third200OverCost;
    }
    return totalProductCost;

}
const procost = deliveryCost(200);
console.log(procost);