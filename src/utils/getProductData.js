import { products } from "../data/data"


export function getProductData(id) {
    let productData = products.find(product => product.id === id)

    if (productData == undefined) {
        console.log("Product data doesn't exist for ID: ", id);
        return undefined
    }

    return productData
}