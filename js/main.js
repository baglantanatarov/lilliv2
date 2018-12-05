$(function(){
    $(".openMenu").click(function(){
        $(".nav").slideToggle();
    });
})
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

    var starCountRef = firebase.database().ref('lilli-baglan/');
        starCountRef.on('value', function(snapshot) {          
         var t = snapshot.val();
         let block = '';
         t.forEach(element => {
            block += `
            <div class="shop">
                <img src="${element.img}"/>
                <span>${element.name}</span>
                <span>${element.price} <span>KZT</span></span>
                <button class="add-cart"><i class="fas fa-shopping-cart"></i></button>
            </div>`;
            document.querySelector(".menu").innerHTML = block;

         });           
    });
