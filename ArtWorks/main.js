document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".dropdown-trigger");
  var instances = M.Dropdown.init(elems, {});
});

const dropdownContent = document.querySelectorAll(".dropdown-content");
const dropdownTrigger = document.querySelectorAll(".dropdown-trigger");
// console.log(dropdownContent[1].children);
// console.log(dropdownTrigger[3].children[0].children[0].textContent);

for (let a of dropdownContent[1].children) {
  a.onclick = () => {
    console.log("clicked");
    dropdownTrigger[2].children[0].children[0].textContent =
      a.children[0].textContent;

    for (let ar of dropdownContent[1].children) {
      ar.children[0].className = "";
    }
    a.children[0].className = "selected";
  };
}

for (let a of dropdownContent[2].children) {
  a.onclick = () => {
    console.log("clicked");
    dropdownTrigger[3].children[0].children[0].textContent =
      a.children[0].textContent;

    for (let ar of dropdownContent[2].children) {
      ar.children[0].className = "";
    }
    a.children[0].className = "selected";
  };
}
// dropdownTrigger[0].onclick
// console.log(document.querySelectorAll(".pagination")[0].children);
// document.querySelectorAll(".pagination")[0].children.forEach((li) => {
//   console.log(li);
// });

for (let li of document.querySelectorAll(".pagination")[0].children) {
  // console.log(li);
  li.onclick = () => {
    for (let l of document.querySelectorAll(".pagination")[0].children) {
      l.className = "waves-effect";
    }
    li.className = "waves-effect active";
  };
}

/// NAVBAR JAVASCRIPT STARTS HERE

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
function toggleAuthentication(userLoggedIn, authUsername) {
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

  document.querySelector("#authUsername").textContent = authUsername;
}

toggleAuthentication(userLoggedIn);
/// NAVBAR JAVASCRIPT ENDS HERE

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
        toggleAuthentication(true, data.username);
        console.log(data.msg);
      } else {
        semail.focus();
      }
    });
};
