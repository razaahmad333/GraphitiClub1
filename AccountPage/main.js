/// NAVBAR JAVASCRIPT STARTS HERE

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".dropdown-trigger");
  var instances = M.Dropdown.init(elems, {});
});

var modalInstance, sidenavInstance;

var selems = document.querySelectorAll(".sidenav");
var sinstances = M.Sidenav.init(selems, {});
sidenavInstance = M.Sidenav.getInstance(selems[0]);

let modal1 = false,
  modal2 = false;

const moptions = {
  onOpenEnd: () => {
    sidenavInstance.close();
  },
};

var melems = document.querySelectorAll(".modal");
var minstances = M.Modal.init(melems, moptions);
var modalInstancesu = M.Modal.getInstance(melems[0]);
var modalInstancel = M.Modal.getInstance(melems[1]);

const lmos = document.querySelectorAll(".loginModalOpener");

lmos.forEach((lmo) => {
  lmo.onclick = () => {
    console.log("login modal opener clicked");
    modalInstancesu.close();
  };
});

const smos = document.querySelectorAll(".signUpModalOpener");

smos.forEach((smo) => {
  smo.onclick = () => {
    console.log("signUp modal opener clicked");
    modalInstancel.close();
  };
});

let userLoggedIn = !false;
const accountBtns = document.querySelectorAll(".accountBtn");
const loginBtns = document.querySelectorAll(".loginBtns");
console.log(accountBtns, loginBtns);
if (userLoggedIn) {
  for (let a of accountBtns) {
    a.className = "displayit";
  }

  for (let l of loginBtns) {
    l.className = "displaynone";
  }
}
if (!userLoggedIn) {
  for (let a of accountBtns) {
    a.className = "displaynone";
  }

  for (let l of loginBtns) {
    l.className = "displayit";
  }
}

/// NAVBAR JAVASCRIPT ENDS HERE
