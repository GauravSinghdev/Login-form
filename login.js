function valid(user,pass)
{
    if(user == "" || pass == "")
    {
        alert("Invalid input");
        return false;
    }
    return true;
}

function userPresent(info, user, pass)
{
    const result = info.find((e)=> e.username == user && e.password == pass);
    return result;
}

function userP(info, user)
{
    const result = info.find((e)=> e.username == user);
    return result;
}


function redirect(val)
{
    if(val == "Login")
    window.location.href = "https://codewithkara-todoapp-js-localstorage.vercel.app/";
}

function login()
{
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(valid(user,pass) == true)
    {
        let info;

        if(localStorage.getItem("info") == null)
        {
            info = [];
        }
        else{
            info = JSON.parse(localStorage.getItem("info"));
        }
        console.log(info)
        if(userPresent(info,user,pass))
        {
            document.getElementById("below").innerHTML = `Logged in successfully!`;
            setTimeout(redirect("Login"), 1000);
        }
        else{
            alert("Wrong username or password!");
        }
    }
}

function signup()
{
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(valid(user,pass) == true)
    {
        let info;

        if(localStorage.getItem("info") == null)
        {
            info = [];
        }
        else{
            info = JSON.parse(localStorage.getItem("info"));
        }

        if(userP(info,user))
        {
            alert("User is already present!");
            return;
        }
        info.push({
            username: user,
            password: pass
        });

        document.getElementById("btn-div").innerHTML = `<p class="new-P">Signed up successfully!</p>`;
        localStorage.setItem("info", JSON.stringify(info));


        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
}