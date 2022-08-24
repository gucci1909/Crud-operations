// Create Read Update(Push,Patch) Delete

let display = async()=>{
    //read
    let res = await fetch(`https://cryptic-sands-31036.herokuapp.com/api/menu`);
    let data = await res.json();
    display2(data);
    console.log(data);
}
display();
function display2(data)
{
    let container = document.getElementById("container");
    container.innerHTML = null;
    data.forEach(function(el)
    {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.image;
        let h1 = document.createElement("h1");
        h1.innerText = el.title
        let h2 = document.createElement("h3");
        h2.innerText = `Price : ${el.price}`;
        let id = document.createElement("h3");
        id.innerText = `id : ${el.id}`;
        let btn = document.createElement("button");
        btn.innerText = "Remove";
        btn.addEventListener("click" , ()=>{
            remove(el.id);
        })
        div.append(img,h1,h2,id,btn);
        container.append(div);
    })

}
var data = JSON.parse(localStorage.getItem("mainlogin"))
if(!data)
{
    alert("Login first");
    window.location.href = "./login.html";

}
//delete
let remove = async(id)=>
{
    if(data[0] == "jestisbestfortesting" && data[1] == "JSOnserverapi_npm")
    {
        let res = await fetch(`https://cryptic-sands-31036.herokuapp.com/api/menu/${id}`,{
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json"
            }

        })
        res = res.json();
        display();

       

    }
    else
    {
        alert("Login with correct credentials")

    }

}
//create
let create= async(e)=>
{
    if(data[0] == "jestisbestfortesting" && data[1] == "JSOnserverapi_npm")
    {
       e.preventDefault();
       let image = document.getElementById("image").value;
       let id = document.getElementById("id").value;
       let title = document.getElementById("title").value;
       let type = document.getElementById("type").value;
       let price = document.getElementById("price").value;
       if(!image)
       {
        alert("Give url to image")
        return; 
       }
       else{
        let data1 = 
       {
        id : id,
        title : title,
        image : image,
        type : type,
        price : price

       }

       let res = await fetch(`https://cryptic-sands-31036.herokuapp.com/api/menu`, {
        method: "POST",
        body: JSON.stringify(data1),
        // mode: "no-cors"
        headers:
        {
          "Content-Type": "application/json",
        }
       })
       res = await res.json();
       console.log(res);
       display();
       }
       document.getElementById("image").value = null;
       document.getElementById("id").value = null;
       document.getElementById("title").value = null;
       document.getElementById("type").value = null;
       document.getElementById("price").value = null;
     }
    else
    {
        alert("Login with correct credentials");
    }
}
//Update
//patch
let clc = ()=>
{
    if(data[0] == "jestisbestfortesting" && data[1] == "JSOnserverapi_npm")
    {
        let new_title = prompt("New Title");
        let id12 = prompt("id");

        setTimeout(function(){
            Main(new_title,id12)

        },5000)
    }
    else
    {
        alert("Login with correct credentials")

    }
}
async function Main(new_title,id12){
    let data1 = {title:new_title}
    let res = await fetch(`https://cryptic-sands-31036.herokuapp.com/api/menu/${id12}`, {
        method : "PATCH" , 
        body : JSON.stringify(data1),
        // mode: "no-cors",
        headers : {
            "Content-Type" : "application/json"
        }
    })
    res = await res.json();
    console.log(res);
    display();
}
