function menu () {
    let menu = document.getElementById("menu");
    if (menu.style.display === "none" ){

        menu.style.display =  "block"
    
    } else {
        menu.display.display = "none"
    }

} 

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
