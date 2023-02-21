
// ======= FIXED NAV-BAR AT BANNER HEIGHT ========= 
document.addEventListener("DOMContentLoaded", function(){
      
    window.addEventListener('scroll', function() {

    let bannerHeight = document.querySelector('.banner').offsetHeight;
                //fixes navBar at banner height
    if (window.scrollY > bannerHeight) {
        document.getElementById('navBar').classList.add('fixed-top');
                // add padding top to show content behind navbar
        let navBarHeight = document.querySelector('.nav-bar').offsetHeight;
        document.body.style.paddingTop = (navBarHeight - 3) + 'px';
    } else {
          document.getElementById('navBar').classList.remove('fixed-top');
                // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
      });
    }); 
// ======= FIXED NAV-BAR  END// =============== 




// =============== MENU ICON ================== 

function iconSwap(x) {
    x.classList.toggle("change");
}

// ============= MENU ICON END// ============== 


/* ======= CONNECT WIDGET ========  */
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.addEventListener("click", function () {
  modal.style.display = "block";
});

span.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
/* ===== CONNECT WIDGET END/ =====  */


// ============== SIDENAV ============== 
function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}
// =========== SIDENAV END/ =============== 

// ============== MIDDLENAV ============== 
function openMiddle() {
  document.getElementById("middleNav").style.width = "400px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
}

function closeMiddle() {
  document.getElementById("middleNav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}
// =========== RIGHTNAV END/ =============== 


// ============== RIGHTNAV ============== 
function openRight() {
  document.getElementById("rightSidenav").style.width = "400px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
}

function closeRight() {
  document.getElementById("rightSidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}
// =========== RIGHTNAV END/ =============== 




