var myPassword = "myPassword";
var temp = 5;
var tempo = 5;
var tempoo = 5;

localStorage.amre;

function setup() {
  mailInput = select("#input-1");
  passInput = select("#input-2");
  webInput = select("#input-3");

  company = select(".o0");
  Cnum = select(".o");
  holdar = select(".o1");
  expr = select(".o2");
  cvs = select(".o3");

  nteInput = select(".bara");
  container = select(".passwords");
  containerTwo = select(".notes");
  containerThree = select(".cards");

  var firebaseConfig = {
    apiKey: "AIzaSyCpnmd8ciNf8nQDo-bI6jrlCpUXQX7FS9w",
    authDomain: "mindless-5df97.firebaseapp.com",
    databaseURL: "https://mindless-5df97-default-rtdb.firebaseio.com",
    projectId: "mindless-5df97",
    storageBucket: "mindless-5df97.appspot.com",
    messagingSenderId: "1022734712146",
    appId: "1:1022734712146:web:d116ed9ab7336cae914e8b",
  };
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);
  database = firebase.database();

  var ref = database.ref(localStorage.amre);
  ref.on("value", gotData, errData);

  if (localStorage.arme == null) {
    document.querySelector("login").style = "display : block";
    document.querySelector("home").style = "display : none";
  } else {
    document.querySelector("home").style = "display : block";
    document.querySelector("login").style = "display : none";
  }
}

function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log("Full Name: " + profile.getName());
  console.log("Given Name: " + profile.getGivenName());
  console.log("Family Name: " + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());

  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);

  localStorage.amre = profile.getGivenName();
  window.location.reload();
}

function addCard() {
  pr = company.value();
  pra = Cnum.value();
  prat = holdar.value();
  praty = expr.value();
  pratyu = cvs.value();
  pratyush = "https://api.faviconkit.com/" + company.value() + ".com/144";

  var userData = {
    company: pr,
    number: pra,
    cardholder: prat,
    erpiry: praty,
    cvv: pratyu,
    icon: pratyush,
    type: "cc",
  };

  database.ref(localStorage.amre).push(userData, khatam);
}

function addNote() {
  document.designMode = "OFF";
  tit = select(".titdle");
  miit = select(".page-note");
  tit2 = str(tit.elt.innerHTML);
  miit2 = str(miit.elt.innerHTML);
  console.log(tit2);
  var userData = {
    title: tit2,
    notes: miit2,
    date: "23/21/2021",
    type: "nte",
  };

  database.ref(localStorage.amre).push(userData, over);
}

function over(error) {
  if (error) {
  } else {
    console.log("jh");
    document.querySelector(".note-editor").style = "display : none";
  }
}

function khatam(error) {
  if (error) {
  } else {
    console.log("jh");
    document.querySelector(".naya-card").style = "display : none";
    document.querySelector(".card-show").style = "display : none";
    if (window.innerWidth < 600) {
      console.log("Ss");
      document.querySelector(".navigation").style = "display : block";
      document.querySelector(".add-pssword").style = "display : block";
      qq = document.querySelector(".part-four").style = "display : none";
      document.querySelector(".naya-card").style = "display : none";
      document.querySelector(".card-show").style = "display : none";
    }
  }
}

function addAccount() {
  console.log("lbjk");
  uno = mailInput.value();
  pip = passInput.value();
  var encrypted = CryptoJS.AES.encrypt(pip, myPassword);
  console.log(encrypted);
  lol = str(encrypted);
  website = webInput.value();
  icn = "https://api.faviconkit.com/" + website + "/144";
  note = nteInput.value();

  var userData = {
    username: uno,
    password: lol,
    website: website,
    icon: icn,
    note: note,
    type: "pass",
  };

  database.ref(localStorage.amre).push(userData, finished);
}

function finished(error) {
  if (error) {
    console.log(error);
  } else {
    // document.querySelector(".new-pssword").style = "display : none";
    document.querySelector(".new-password").style = "display : none";
    document.querySelector(".new-passwor").style = "display : none";
    if (window.innerWidth < 600) {
      console.log("Ss");
      document.querySelector(".navigation").style = "display : block";
      document.querySelector(".add-pssword").style = "display : block";
      qq = document.querySelector(".part-two").style = "display : none";
      document.querySelector(".new-password").style = "display : none";
      document.querySelector(".new-passwor").style = "display : none";
    }
  }
}

function gotData(data) {
  document.querySelector(".preloader").style = "display  : none";

  var listings = selectAll(".password");
  for (var i = 0; i < listings.length; i++) {
    listings[i].remove();
  }

  var hellListings = selectAll(".notep");
  for (var i = 0; i < hellListings.length; i++) {
    hellListings[i].remove();
  }
  var fruits = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(fruits);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    fruit = fruits[key];

    if (fruit.type == "pass") {
      wxpt = str(fruit.icon);
      aha = fruit.website[0].toUpperCase();
      aha2 = fruit.website.substr(1).toLowerCase();
      jadoo = aha + aha2;
      gajab = jadoo.split(".");
      main = createDiv("").addClass("password").parent(container);
      ssixxer = createDiv(key).addClass("thanks").parent(main);
      second = createDiv("").addClass("favicon").parent(main);
      ssixxer.mousePressed(showFull);
      third = createImg(wxpt).parent(second);
      fourth = createDiv("").addClass("content").parent(main);
      fifth = createP(gajab[0]).addClass("title").parent(fourth);
      sixth = createP(fruit.username).addClass("user-mail").parent(fourth);
      temp = temp + 1;
    }

    if (fruit.type == "nte") {
      // wxpt = str(fruit.icon);
      // aha = fruit.website[0].toUpperCase();
      // console.log(aha);
      // aha2 = fruit.website.substr(1).toLowerCase();
      // jadoo = aha + aha2;
      // gajab = jadoo.split(".");
      main = createDiv("").addClass("notep").parent(containerTwo);
      ssixxer = createDiv(key).addClass("thanks").parent(main);
      ssixxer.mousePressed(showFullNote);
      // third = createImg(wxpt).parent(second);
      fourth = createDiv("").addClass("content").parent(main);
      fifth = createP(fruit.title).addClass("title").parent(fourth);
      sixth = createP(fruit.notes).addClass("daad").parent(fourth);
      console.log(fruit.notes);
      tempo = tempo + 1;
    }

    if (fruit.type == "cc") {
      wxpt = str(fruit.icon);
      aha = fruit.company[0].toUpperCase();
      console.log(aha);
      aha2 = fruit.company.substr(1).toLowerCase();
      jadoo = aha + aha2;
      main = createDiv("").addClass("notep").parent(containerThree);
      ssixxer = createDiv(key).addClass("thanks").parent(main);
      second = createDiv("").addClass("favicon").parent(main);
      ssixxer.mousePressed(showFullCard);
      third = createImg(wxpt).parent(second);
      fourth = createDiv("").addClass("content").parent(main);
      fifth = createP(jadoo).addClass("title").parent(fourth);
      sixth = createP(fruit.cardholder).addClass("user-mail").parent(fourth);
      console.log(fruit.notes);
      tempoo = tempoo + 1;
    }
  }
}

function errData(error) {
  if (error) {
    //console.log("ooops");
  } else {
    if (window.innerWidth < 600) {
      console.log("Ss");
      qq = document.querySelector(".part-two").style = "display : none";
      document.querySelector(".new-password").style = "display : none";
    }
    //console.log("Wow");
  }
}

function openNew() {
  document.querySelector(".new-password").style = "display : block";
  console.log("ss");
  if (window.innerWidth < 600) {
    console.log("www");
    document.querySelector(".add-pssword").style = "display : none";
    document.querySelector(".navigation").style = "display : none";
    qq = document.querySelector(".part-two").style = "display : block";
    qq = document.querySelector(".new-password").style = "display : block";
    console.log(qq);
  }
}

function showFull() {
  document.querySelector(".new-passwor").style = "display : block";
  document.querySelector(".new-password").style = "display : none";
  if (window.innerWidth < 600) {
    document.querySelector(".new-passwor").style = "display : block";
    document.querySelector(".part-two").style = "display : block";
    document.querySelector(".new-password").style = "display : none";
    document.querySelector(".navigation").style = "display : none";
    document.querySelector(".dfgs").style = "display : none";
  }
  var listings = selectAll(".aapa");
  for (var i = 0; i < listings.length; i++) {
    listings[i].remove();
    console.log("ww");
  }
  msgTo = localStorage.amre + "/" + this.html();
  var ref = database.ref(msgTo);
  ref.on("value", gotTotal, errData);
  console.log("ldf");
}

function showFullNote() {
  document.querySelector(".note-editor").style = "display : block";
  if (window.innerWidth < 600) {
    document.querySelector(".part-six").style = "display : block";
    document.querySelector(".navigation").style = "display : none";
    document.querySelector(".ffd").style = "display : none";
  }
  msgTo = localStorage.amre + "/" + this.html();
  var ref = database.ref(msgTo);
  ref.on("value", gotTotalNote, errData);
  console.log("lddSf");
}

function showFullCard() {
  document.querySelector(".card-show").style = "display : block";
  document.querySelector(".naya-card").style = "display : none";
  if (window.innerWidth < 600) {
    document.querySelector(".card-show").style = "display : block";
    document.querySelector(".part-four").style = "display : block";
    document.querySelector(".navigation").style = "display : none";
    document.querySelector(".llskd").style = "display : none";
    document.querySelector(".naya-card").style = "display : none";
  }

  msgTo = localStorage.amre + "/" + this.html();
  var ref = database.ref(msgTo);
  ref.on("value", gotTotalCard, errData);
  console.log("lddSf");
}

gotTotal = function (data) {
  var listings = selectAll(".aapa");
  for (var i = 0; i < listings.length; i++) {
    listings[i].remove();
    console.log("ww");
  }

  extract = data.val();
  // console.log(extract.password);
  var decrypted = CryptoJS.AES.decrypt(extract.password, myPassword);
  console.log(decrypted);
  aha = extract.website[0].toUpperCase();
  aha2 = extract.website.substr(1).toLowerCase();
  jadoo = aha + aha2;
  gajab = jadoo.split(".");

  pixp = str(extract.icon);
  paren = document.querySelector(".favs");

  createImg(pixp).parent(paren).addClass("aapa");

  document.getElementById("cname").innerHTML = gajab[0];

  document.getElementById("uname").value = extract.username;
  document.getElementById("upsd").value = decrypted.toString(CryptoJS.enc.Utf8);
  document.getElementById("input-30").value = extract.website;
  document.getElementById("input-40").innerHTML = extract.note;
};

gotTotalNote = function (data) {
  var listings = selectAll(".note");
  for (var i = 0; i < listings.length; i++) {
    listings[i].remove();
    console.log("ww");
  }

  extract = data.val();
  console.log(extract);

  document.querySelector(".titdle").innerHTML = extract.title;
  document.querySelector(".page-note").innerHTML = extract.notes;
};

gotTotalCard = function (data) {
  var listings = selectAll(".card");
  for (var i = 0; i < listings.length; i++) {
    listings[i].remove();
    console.log("ww");
  }

  extract = data.val();
  console.log(extract);

  sdjd = str(extract.icon);
  document.querySelector(".card-show").style = " display :block";

  document.querySelector(".on-on").src = sdjd;
  document.querySelector(".a").value = extract.number;
  document.querySelector(".a1").value = extract.cardholder;
  document.querySelector(".a2").value = extract.erpiry;
  document.querySelector(".a3").value = extract.cvv;
};

function removeit() {
  database.ref(msgTo).remove(finished);
}

function backit() {
  document.querySelector(".new-password").style = "display : none";
  document.querySelector(".new-passwor").style = "display : none";
  if (window.innerWidth < 600) {
    console.log("Ss");
    qq = document.querySelector(".part-two").style = "display : none";
    document.querySelector(".new-password").style = "display : none";
    document.querySelector(".new-passwor").style = "display : none";
    document.querySelector(".navigation").style = "display : block";
    document.querySelector(".dfgs").style = "display : block";
  }
}

function backit2() {
  document.querySelector(".note-editor").style = "display : none";
  document.querySelector(".part-six").style = "display : none";
  if (window.innerWidth < 600) {
    console.log("Ss");
    qq = document.querySelector(".part-six").style = "display : none";
    qq = document.querySelector(".part-five").style = "display : block";
    document.querySelector(".note-editor").style = "display : none";
    document.querySelector(".navigation").style = "display : block";
    document.querySelector(".ffd").style = "display : block";
  }
}

function backit3() {
  document.querySelector(".card-show").style = "display : none";
  document.querySelector(".part-four").style = "display : none";
  if (window.innerWidth < 600) {
    console.log("Ss");
    qq = document.querySelector(".part-four").style = "display : none";
    qq = document.querySelector(".part-five").style = "display : block";
    document.querySelector(".card-show").style = "display : none";
    document.querySelector(".navigation").style = "display : block";
    document.querySelector(".llskd").style = "display : block";
  }
}

function draw() {
  if (window.innerWidth < 600) {
    qq = document.querySelector(".deck").style = "display : block";
  } else {
    qq = document.querySelector(".deck").style = "display : none";
  }
}

function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("upsd");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

function openPassword() {
  document.querySelector(".page-1").style = "display : block";
  document.querySelector(".page-2").style = "display : none";
  document.querySelector(".page-3").style = "display : none";

  document.querySelector(".pbt").style = "color : #F6A960";
  document.querySelector(".lol").style = "color : white";
  document.querySelector(".nut").style = "color : white";
}

function openNote() {
  document.querySelector(".page-1").style = "display : none";
  document.querySelector(".page-2").style = "display : none";
  document.querySelector(".page-3").style = "display : block";
  // document.querySelector(".pag-3").style = "display : block";

  document.querySelector(".lol").style = "color : white";
  document.querySelector(".pbt").style = "color : white";
  document.querySelector(".nut").style = "color : #02D2C0";
}

function openCard() {
  document.querySelector(".page-1").style = "display : none";
  document.querySelector(".page-3").style = "display : none";
  document.querySelector(".page-2").style = "display : block";

  document.querySelector(".lol").style = "color : #B583F5";
  document.querySelector(".pbt").style = "color : white";
  document.querySelector(".nut").style = "color : white";
}

function newNote() {
  document.designMode = "off";
  document.querySelector(".titdle").innerHTML = "";
  document.querySelector(".page-note").innerHTML = "";
  document.querySelector(".note-editor").style = "display : block";
  if (window.innerWidth < 600) {
    document.querySelector(".navigation").style = "display : none";
    document.querySelector(".part-six").style = "display : block";
    document.querySelector(".ffd").style = "display : none";
    document.querySelector(".deck").style = "display : none";
  }
}

function openNewCard() {
  console.log("hdsg");
  document.querySelector(".naya-card").style = "display : block";
  document.querySelector(".card-show").style = "display : none";
  if (window.innerWidth < 600) {
    document.querySelector(".navigation").style = "display : none";
    document.querySelector(".part-four").style = "display : block";
    document.querySelector(".llskd").style = "display : none";
  }
}

function draw() {
  if (temp > 0) {
    document.getElementById("gate").style = "display : none";
    // console.log("asdh");
  } else {
    document.getElementById("gate").style = "display : block";
  }
  if (tempo > 0) {
    document.getElementById("wate").style = "display : none";
  } else {
    document.getElementById("wate").style = "display : block";
  }
  if (tempoo > 0) {
    document.getElementById("late").style = "display : none";
  } else {
    document.getElementById("late").style = "display : block";
  }
}
