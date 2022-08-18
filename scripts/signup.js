let register = async (e) => {
    e.preventDefault();

    let form_data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      username: document.getElementById("username").value,
      mobile: document.getElementById("mobile").value,
      description: document.getElementById("description").value,
    };

    form_data = JSON.stringify(form_data);

    let res = await fetch(
      "https://masai-api-mocker.herokuapp.com/auth/register",
      {
        method: "POST",
        body: form_data,
        // mode: "no-cors"
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let data = await res.json();
    if(data.error == true){
      alert("username already exists");
    }
    else{
      alert("user registered successfully")
    }

    document.getElementById("username").value = null;
    document.getElementById("password").value = null;
    document.getElementById("name").value = null;
    document.getElementById("email").value = null;
    document.getElementById("mobile").value = null;

    document.getElementById("description").value = null;

  };

//   document.getElementById("submit").addEventListener("click", register);
