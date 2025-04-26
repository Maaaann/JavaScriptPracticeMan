let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");

let mood = "create";
let tmp ;
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
        title:title.value.toLowerCase(),
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        count:count.value,
        category:category.value.toLowerCase(),
        total:total.innerHTML,
    }
    // adding the data to our array
    if (mood === "create"){
        if(newProduct.count > 1){   // to create products with the input count 
        for(let i = 0; i < newProduct.count; i++){
            data_product.push(newProduct);
            }
        }else{
            data_product.push(newProduct);
        }
    }else{
        data_product[tmp] = newProduct;
        mood = "create";
        submit.innerHTML ="Create";
        count.style.display = "block" 
    }
    
        


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

function show_data(){
    get_total()
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
            <td> <button onclick = "update_data(${i})" id="update">update</button> </td>
            <td> <button onclick ="delete_data(${i})" id="delete">delete</button> </td>
        </tr>
        `
    }
    document.getElementById('tbody').innerHTML = table;
    let button_delete = document.getElementById("delete_all");
    if(data_product.length > 0 ){
        button_delete.innerHTML = `
        <button onclick="delete_all()">Delete All (${data_product.length})</button>
        `
    }else{
        button_delete.innerHTML ="";
    }

} //end of READING product function

show_data()

//-------------------DELETE Function---------------//

function delete_data(i){
    data_product.splice(i,1);
    localStorage.product = JSON.stringify(data_product) // update the local storage
    show_data() //to redraw the html table afer deleting 
}

function delete_all(){
    localStorage.clear() // remove from local storage 
    data_product.splice(0) // remove from array
    show_data() // redrawing the table
}

//-------------------UPDATE Function---------------//

function update_data(i){
    title.value = data_product[i].title;
    price.value = data_product[i].price;
    taxes.value = data_product[i].taxes;
    ads.value = data_product[i].ads;
    discount.value = data_product[i].discount;
    get_total();
    count.style.display = "none";
    category.value = data_product[i].category;
    submit.innerHTML = "Update";
    mood = "update";
    tmp = i ;
    scroll ({
        top:0,
        behavior:"smooth",
    })
}


//-------------------SEARCH Function---------------//

let search_mood = "title";

function get_search_mood(id){

    let search = document.getElementById("search");

    if(id == "searchTitle"){
        search_mood = "title";

    }else{
        search_mood="category";
        
    }
    search.placeholder = "Search By "+ search_mood;
    search.focus()
    search.value="";
    show_data()
}

function searchData(value){
    let table ="";
    if (search_mood == "title"){

        for(let i =0 ; i <data_product.length; i++){
            if(data_product[i].title.includes(value.toLowerCase())){

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
                        <td> <button onclick = "update_data(${i})" id="update">update</button> </td>
                        <td> <button onclick ="delete_data(${i})" id="delete">delete</button> </td>
                    </tr>
                    `
            }
        } // end of the search by title loop

    }else{
        for(let i =0 ; i <data_product.length; i++){
            if(data_product[i].category.includes(value.toLowerCase())){

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
                        <td> <button onclick = "update_data(${i})" id="update">update</button> </td>
                        <td> <button onclick ="delete_data(${i})" id="delete">delete</button> </td>
                    </tr>
                    `
            }
        } // end of the search by category loop
    } 
        document.getElementById('tbody').innerHTML = table;
}