let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");


//-------------------Getting the Total---------------//

function get_total(){

    if(price.value !=""){
        let result = (+price.value + +taxes.value + +ads.value)  
        - +discount.value;
        total.innerHTML= result; // print the result
        total.style.background = "#040"; // turn green 

    }else {
        total.innerHTML = "";
        total.style.background = "#d14339";

    } // end of the if state

} //end of total function



//---Local Storage Check---//
let data_product;
if( localStorage.data_product != null){
    data_product = JSON.parse(localStorage.data_product);
}else{
    data_product = [];
}

//-------------------The Create Function---------------//
submit.onclick = function create_product(){
    let newProduct = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        count:count.value,
        category:category.value,
        total:total.innerHTML,
    }
    // adding the data to our array
    data_product.push(newProduct);
    // storing the data local & converting it to strings  
    localStorage.setItem("product",JSON.stringify(data_product));

    clear_data();
} //end of creating product function


//-------------------Clear Inputs---------------//

function clear_data(){
    title.value = "";
    price.value = "";
    taxes.value = "";
    ads.value = "";
    discount.value = "";
    count.value = "";
    category.value = "";
    total.innerHTML = "";
};