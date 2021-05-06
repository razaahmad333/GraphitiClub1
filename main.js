document.addEventListener("DOMContentLoaded", function (options) {
  var elems = document.querySelectorAll(".carousel");
  options = {
    fullWidth: true,
    indicators: true,
  };
  var instances = M.Carousel.init(elems, options);
  var instance = M.Carousel.getInstance(elems[0]);
  let count = 0;
  setInterval(() => {
    count++;
    instance.set(count % 4);
  }, 3000);
});

//Navbar javascript //////----------------------------------------------------------------------/////////////////////

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

let userLoggedIn = false;
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

///////////////------------------------------------------------------------///////////////////////////

// s suffix means all these are for sign up
const susername = document.querySelector("#susername");
const semail = document.querySelector("#semail");
const spassword = document.querySelector("#spassword");

const signupbtn = document.querySelector("#signupbtn");

signupbtn.onclick = () => {
  let newUser = {
    username: susername.value,
    email: semail.value,
    password: spassword.value,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  };

  fetch("/signup", options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.msg == "success") {
        modalInstancesu.close();
      }
    });
};
