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
if( localStorage.product != null){
    data_product = JSON.parse(localStorage.product);
}else{
    data_product = [];
}
show_data()

//-------------------The CREATE Function---------------//

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

    clear_data()
    show_data()
} //end of creating product function

//-------------------CLEAR Inputs---------------//

function clear_data(){
    title.value = "";
    price.value = "";
    taxes.value = "";
    ads.value = "";
    discount.value = "";
    count.value = "";
    category.value = "";
    total.innerHTML = "";
}

//-------------------READ Function---------------//

function show_data()
{
    let table = "";
    
    for (let i = 0 ; i < data_product.length ; i++){
        table += `
        <tr>
            <td>${i}</td>
            <td>${data_product[i].title}</td>
            <td>${data_product[i].price}</td>
            <td>${data_product[i].taxes}</td>
            <td>${data_product[i].ads}</td>
            <td>${data_product[i].discount}</td>
            <td>${data_product[i].total}</td>
            <td>${data_product[i].category}</td>
            <td> <button id="update">update</button> </td>
            <td> <button onclick ="delete_data(${i})" id="delete">delete</button> </td>
        </tr>
        `
    }
    document.getElementById('tbody').innerHTML = table;

} //end of READING product function
show_data()

function delete_data(i){
    data_product.splice(i,1);
    localStorage.product = JSON.stringify(data_product) // update the local storage
    show_data() //to redraw the html table afer deleting 
}


