
import fetch from "node-fetch";
  export const getProducts = async ()=>{
    const url = 'https://d156c699edcc98186dae8e6f9562d838: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@devtestrecruitte.myshopify.com/admin/api/2021-10/products.json';        
    const resp = await fetch(url);
    const {products} = await resp.json();
    const productsStr = products.map(product =>{
        let productObj = {
            price: product.variants[0].price,
            status:product.status,
            //date to yyyy-mm-dd
            created_at : product.created_at.substr(0,10)
        }
        // consoloe log de string
        console.log( `${product.title} =>  ${
            JSON.stringify(productObj)
           }`);
        return (
           `${product.title} =>  ${
            JSON.stringify(productObj)
           }`
        ) 
    })
    // console.log(`${productsStr}`);
    //strng de los productos
    return productsStr;
}
getProducts();
