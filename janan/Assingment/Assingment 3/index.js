function login() {
    var name=document.getElementById("eaddress").value;
    var pwd=document.getElementById("epassword").value;
    let details = {username: name,
    password: pwd
}
    if(name=='')
    {
        alert("Please enter user name")
    }
    else if(pwd=='')
    {
        alert("Enter the password")
    }
    else
    {
        // alert('Thank you for login')
        document.write(JSON.stringify(details))

    }
}
