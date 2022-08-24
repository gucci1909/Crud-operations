// Use deployed URL.
let get = async () => {
  let res = await fetch(`https://quiet-fortress-89747.herokuapp.com/api/Product`);
  let data = await res.json();
  display(data);
  return data;
};
document.getElementById("add_product").addEventListener("click", Post_data);
async function Post_data(event) {
  event.preventDefault();
  let Name = document.getElementById("name").value;
  let Price = Number(document.getElementById("price").value);
  let Description = document.getElementById("description").value;
  let Date1 = document.getElementById("delivery").value;
  let Image = document.getElementById("image").value;

  let data = {
    name: Name,
    price: Price,
    description: Description,
    date: Date1,
    image: Image,
    id: Date.now(),
  };
  let res = await fetch(
    `https://quiet-fortress-89747.herokuapp.com/api/Product`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  res = await res.json();
  console.log(res);
  get();

  document.getElementById("name").value = null;
  document.getElementById("price").value = null;
  document.getElementById("description").value = null;
  document.getElementById("delivery").value = null;
  document.getElementById("image").value = null;
}
window.addEventListener("load", async () => {
  get();
});

function display(data) {
  let container = document.getElementById("container");
  container.innerHTML = null;
  data.forEach(function ({ image, name, price, date, description, id }) {
    let div = document.createElement("div");
    div.setAttribute("class", "item");
    let img = document.createElement("img");
    img.src = image;
    let h3 = document.createElement("h3");
    h3.innerText = name;
    let p1 = document.createElement("p");
    p1.innerText = price;
    p1.setAttribute("class", "product_price");
    let p2 = document.createElement("p");
    p2.innerText = `Delivery by: ${date}`;
    p2.setAttribute("class", "product_delivery");
    let p3 = document.createElement("p");
    p3.innerText = description;
    let remove_btn = document.createElement("button");
    remove_btn.innerText = "Remove";
    remove_btn.setAttribute("class", "remove_item");
    remove_btn.addEventListener("click", () => {
      remove_product(id);
    });
    let update_btn = document.createElement("button");
    update_btn.innerText = "Update Price";
    update_btn.setAttribute("class", "update_price");
    update_btn.addEventListener("click", () => {
      update_product(id);
    });

    div.append(img, h3, p1, p2, p3, remove_btn, update_btn);
    container.append(div);
  });
}
let remove_product = async (id) => {
  let res = await fetch(
    `https://quiet-fortress-89747.herokuapp.com/api/Product/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  res = await res.json();
  console.log(res);
  get();
};
let update_product = async (id) => {
  let new_price = window.prompt("Enter new Price");
  let data = {
    price: Number(new_price),
  };
  let res = await fetch(
    `https://quiet-fortress-89747.herokuapp.com/api/Product/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  res = await res.json();
  console.log(res);
  get();
};
let sl_th = async () => {
  let res = await fetch(
    `https://quiet-fortress-89747.herokuapp.com/api/Product?_sort=price&_order=asc`
  );
  let data = await res.json();
  display(data);
};
let sh_tl = async () => {
  let res = await fetch(
    `https://quiet-fortress-89747.herokuapp.com/api/Product?_sort=price&_order=desc`
  );
  let data = await res.json();
  display(data);
};
document.getElementById("sort-low-to-high").addEventListener("click", sl_th);
document.getElementById("sort-high-to-low").addEventListener("click", sh_tl);
let filter_greater = async () => {
  let data = await get();
  let data1 = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].price > 4000) {
      var res = await fetch(
        `https://quiet-fortress-89747.herokuapp.com/api/Product?price=${data[i].price}`
      );
      res = await res.json();
      for (var j = 0; j < res.length; j++) {
        data1.push(res[j]);
      }
    }
  }
  display(data1);
};
document
  .getElementById("greater-than")
  .addEventListener("click", filter_greater);
let filter_lesser = async () => {
  let data = await get();
  let data1 = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].price <= 4000) {
      var res = await fetch(
        `https://quiet-fortress-89747.herokuapp.com/api/Product?price=${data[i].price}`
      );
      res = await res.json();
      for (var j = 0; j < res.length; j++) {
        data1.push(res[j]);
      }
    }
  }
  display(data1);
};
document.getElementById("less-than").addEventListener("click", filter_lesser);
