function add_user(){
    uname=document.getElementById("user_name").value;
    localStorage.setItem("uname",uname);
    window.location="kwitter_room.html";}