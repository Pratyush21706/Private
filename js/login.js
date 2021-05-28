function setup() {
  mailInput = select("#input-1");
  passInput = select("#input-2");
  webInput = select("#input-3");
  nteInput = select(".bara");
  container = select(".passwords");

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

  var ref = database.ref("Pratyush");
  ref.on("value", gotData, errData);
}

function addAccount() {
  console.log("lbjk");
  uno = mailInput.value();
  pip = passInput.value();
  website = webInput.value();
  icn = "https://api.faviconkit.com/" + website + "/144";
  note = nteInput.value();

  var userData = {
    username: uno,
    password: pip,
    website: website,
    icon: icn,
    note: note,
  };

  database.ref("Pratyush").push(userData, finished);
}

function finished(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("wow");
  }
}

function gotData(data) {
  var listings = selectAll(".password");
  for (var i = 0; i < listings.length; i++) {
    listings[i].remove();
  }
  var fruits = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(fruits);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    fruit = fruits[key];

    wxpt = str(fruit.icon);
    aha = fruit.website[0].toUpperCase();
    aha2 = fruit.website.substr(1).toLowerCase();
    jadoo = aha + aha2;
    gajab = jadoo.split(".");
    main = createDiv("").addClass("password").parent(container);
    second = createDiv("").addClass("favicon").parent(main);
    third = createImg(wxpt).parent(second);
    fourth = createDiv("").addClass("content").parent(main);
    fifth = createP(gajab[0]).addClass("title").parent(fourth);
    sixth = createP(fruit.username).addClass("user-mail").parent(fourth);
  }
}

function errData(error) {
  if (error) {
    //console.log("ooops");
  } else {
    //console.log("Wow");
  }
}
