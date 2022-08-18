let login = async (e) =>
 {
    e.preventDefault();
    let user_data = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };

   var user_data1 = JSON.stringify(user_data);

    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: user_data1,

      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    console.log(data.error);
    let username = document.getElementById('username').value;
    let password = document.getElementById("password").value;
    getUserDetail(username, data.token);
    if(!data.error)
    {
      alert("Login successfull!");
      let login_data = [];
    login_data.push(username,password);
    localStorage.setItem("mainlogin" , JSON.stringify(login_data));

    }
    else if(data.error)
    {
      alert("Login Not Successfull!");
    }
    document.getElementById("username").value = null;
    document.getElementById("password").value = null;
  };
  let getUserDetail = async (username, token) => {
    let res = await fetch(
      `https://masai-api-mocker.herokuapp.com/user/${username}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    let data = await res.json();
    console.log("user data: ", data);
  };