var objPeople=[
    {
        username:'v1kkstagram',
        password:"bossman"
    }
]


let getInfo=function()
{
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;

    for(let i=0;i<objPeople.length;i++)
    {
        if(username===objPeople[i].username && password===objPeople[i].password)
        window.location.href = "http://127.0.0.1:5500/instagram.html";
        else 
        {
            alert("You have entered a wrong username/password. Please try again.");
            document.getElementById("password").value="";
            document.getElementById("username").value="";
        }
        

    }
}

const visibility= document.getElementById("visibility");
visibility.addEventListener('click',function(e)
{
    const passWord= document.getElementById("password")
    const icon=document.getElementById("icon")
    if(passWord.type==="password")
    {
        passWord.type="text";
        icon.innerText="visibility"
        
    }
    else 
    {
        passWord.type="password";
        icon.innerText="visibility_off"
        

    }
    

})