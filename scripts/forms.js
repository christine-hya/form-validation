function myValidation() {
let x = document.getElementById("newtask").value;

if (x === "<") 
 {          
    document.getElementById("hide").style.display = "block";          
    }  
   else if (x === ">") 
    {          
       document.getElementById("hide").style.display = "block";          
       }   
   
else {
    document.getElementById("hide").style.display = "none"; }

let newListItem = document.createElement("li");
let addListItem = document.createTextNode(x);
            newListItem.appendChild(addListItem);
            document.getElementById("myTaskList").appendChild(newListItem);
}

//let newListItem = document.createElement("li");
//let listContent = createTextNode(x);
//newListItem.appendChild("newtask");
//document.getElementByID("myTaskList").appendChild(newListItem);
//return listContent;