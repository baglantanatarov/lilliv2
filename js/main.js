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
            <div>
                <img src="${element.img}"/>
                <p>${element.name}</p>
                <p>${element.price}</p>
            </div>`;
            document.querySelector(".test").innerHTML = block;

         });


           
    });
