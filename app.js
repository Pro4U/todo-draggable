let inp = document.querySelector("#inp");
let btn = document.querySelector("#btnSubmit");
let ul = document.querySelector("#container");

btn.addEventListener("click",function(){
    let li = document.createElement("li");
    if(inp.value!=""){
        var InpVal = inp.value;
        li.innerHTML = `
        <span>${InpVal}</span>
        <button id='editBtn'>Edit</button>
        <button id='deleteBtn'>Delete</button>
        `;
        ul.appendChild(li);
        inp.value = "";

        let editBtn = li.querySelector("#editBtn");
        let deleteBtn = li.querySelector("#deleteBtn");

        editBtn.addEventListener("click", function () {
            let getText = prompt("Update your task");
            if(getText!=""){
                let span = li.querySelector("span");
                span.innerHTML = getText;
            }
        });

        deleteBtn.addEventListener("click", function () {
            li.remove();
        });
    
    }
    else{
        alert("please enter task!")
    }
});


