
var buttonEle = document.getElementById("btn");
var rowsEle = document.getElementById("rows");
var columnEle = document.getElementById("columns");


var rowsValue = rowsEle.value ;
var columnValue = columnEle.value ;

buttonEle.addEventListener("click",create_table);

function create_table(){
    
    let body = document.body;
    let table = document.createElement("table")  // <table></table>
    

    for(var i = 0 ; i < 2; i++){
        let tr = document.createElement("tr")
        table.appendChild(tr);  // <table> <tr> </tr> </table>  

        for(var j = 0 ; j < 2; j++){
            let td = document.createElement("td")
            tr.appendChild(td);  //  <tr> <td></td> </tr>  
        }
    }

    body.appendChild(table) // put the table element inside the body 
}

create_table();