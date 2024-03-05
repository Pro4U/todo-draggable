let inp = document.querySelector("#inp");
let btn = document.querySelector("#btnSubmit");
let ul = document.querySelector("#container");

btn.addEventListener("click",function(){
    let li = document.createElement("li");
    // let editBtn = document.createElement("button");
    // let deleteBtn = document.createElement("button");
    if(inp.value!=""){
        li.innerHTML = `${inp.value}
        <button id='editBtn'>Edit</button>
        <button id='deleteBtn'>Delete</button>
        `;
        ul.appendChild(li);
        inp.value = "";
    
    }
    else{
        alert("please enter task!")
    }
});

