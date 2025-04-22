
var buttonEle = document.getElementById("btn");
var rowsEle = document.getElementById("rows");
var columnEle = document.getElementById("columns");

buttonEle.addEventListener("click",create_table);

function create_table(){
    
    let body = document.body;
    let table = document.createElement("table") ; // <table></table>
    

    for(var i = 0 ; i < +rowsEle.value ; i++){  // rows
        let tr = document.createElement("tr");
        table.appendChild(tr);  // <table> <tr> </tr> </table>  

        for(var j = 0 ; j < +columnEle.value ; j++){  // columns
            let td = document.createElement("td");
            let text = document.createTextNode("Test");
            td.appendChild(text);
            tr.appendChild(td);  //  <tr> <td></td> </tr>  
        }
    }

    body.appendChild(table) // put the table element inside the body 
}

 