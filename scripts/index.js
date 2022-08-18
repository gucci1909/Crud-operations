let display = async() =>
{
    let res = await fetch(`https://cryptic-sands-31036.herokuapp.com/api/menu`);
    let data = await res.json();
    display2(data);
    return data;

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
        let btn = document.createElement("button");
        btn.innerText = "ADD TO CART";
        btn.addEventListener("click" , ()=>{
            addtocart(el);
        })
        btn.style.cursor= "pointer"
        div.append(img,h1,h2,btn);
        container.append(div);
    })

}
function addtocart(el)
{
    let data = JSON.parse(localStorage.getItem("cartitems")) || [];
    data.push(el);
    localStorage.setItem("cartitems" , JSON.stringify(data));
    alert("added to cart");

}

document.getElementById("sorting").addEventListener("change" , clc);

async function clc()
{
    let data = document.getElementById("sorting").value;
    if(data == "HTL")
    {
        let data1 = await display();
        data1.sort(function (a,b)
    {
      return b.price - a.price;

    })
    display2(data1)

    }
    else if(data == "LTH")
    {
        let data1 = await display();
        data1.sort(function (a,b)
    {
      return a.price - b.price;

    })
    display2(data1)

    }

}
document.getElementById("filter").addEventListener("change" , clK);

async function clK()
{
    let data = document.getElementById("filter").value;
    if(data == "veg")
    {
        let data1 = await display();
        var filterrole = data1.filter((ele) =>{
            return ele.type == data;
        })
            
        console.log(filterrole);
        display2(filterrole);


    }
    else if(data == "Non-veg")
    {
        let data1 = await display();

        var filterrole = data1.filter((ele) =>{
            return ele.type == data;
        })
            
            console.log(filterrole);
            display2(filterrole);

    }

}



