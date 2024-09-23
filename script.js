

const currentLocation = location.href;
const menuItem = document.querySelectorAll('nav ul li a');
const menuLength = menuItem.length;

for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].classList.add('active'); 
  }
}



function toggleMenu() {
    var menuList = document.getElementById("menuList");
    var menuIcon = document.getElementById("menu-icon");
    var navlist = document.querySelector(".navlist");

    menuList.classList.toggle("open");
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}


function sendEmail(){
    Email.send({
        Host : "smtp.warsha-dz.com",
        Username : "boudiafmouhammadachraf@gmail.com",
        Password : "957F8DEF067C6E746935B0A9C8E502B28346",
        To : 'boudiafmouhammadachraf@gmail.com',
        From : document.getElementById("mailfrom").value,
        Subject : "New contact form enquiry",
        Body : "Name" + document.getElementById("name").value +
        "From" + document.getElementById("mailfrom").value +
        "Subject" + document.getElementById("subject").value +
        "Message" + document.getElementById("message").value 
    }).then(
      message => alert("Message sent succesfully")
    );
    return true;
}