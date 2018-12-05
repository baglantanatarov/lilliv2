
/* Initialize Firebase */
  var config = {
    apiKey: "AIzaSyAJN7LA0uA6pojtvIfPFJNgsU1ttkMYips",
    authDomain: "lilli-baglan.firebaseapp.com",
    databaseURL: "https://lilli-baglan.firebaseio.com",
    projectId: "lilli-baglan",
    storageBucket: "lilli-baglan.appspot.com",
    messagingSenderId: "760594885120"
  };
  firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}
function add(){
  var fd = new FormData();    
  fd.append( 'file', input.files[0] );
  
  $.ajax({
    url: '/upload.php',
    data: fd,
    processData: false,
    contentType: false,
    type: 'POST',
    success: function(data){
      alert(data);
    }
  });

  var tort = {
    id:document.menu.id.value,
    name:document.menu.name.value,
    price:document.menu.price.value,
    img:document.menu.img.value
  }
  writeUserData(tort);
}
function logout(){
  firebase.auth().signOut();
}

function writeUserData({id, name, price, img}) {
  firebase.database().ref('lilli-baglan/' + id).set({
    id,
    name,
    price,
    img
  })
  .then(function(){
      alert("OK OK");
  })
  .catch(function(){
    alert("Error");
  });
}