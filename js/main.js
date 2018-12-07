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
                <div class="box-img"><img src="${element.img}"/></div>
                <span>${element.name}</span>
                <span>${element.price} <span>KZT</span></span>
                <button class="add-cart" data-id="${element.id}" onclick="addCart(this)"><i class="fas fa-shopping-cart"></i></button>
            </div>`;
            document.querySelector(".menu").innerHTML = block;

         });           
    });

function addCart(clicked_btn){
    if (localStorage.getItem("basket") === null) {
        localStorage.setItem("basket", JSON.stringify({}));
    }

    var basket = JSON.parse(localStorage.getItem("basket"));
    var itemId = clicked_btn.getAttribute('data-id');

    if (typeof basket[itemId] === 'undefined') {
        basket[itemId] = {'num': 0};
    }
    basket[itemId].num = ++basket[itemId].num;
    localStorage.setItem("basket", JSON.stringify(basket));
    countBasket();
}

function countBasket() {
    if(localStorage.length!=0 && localStorage.getItem("basket") != null) {
        var lenObj = Object.keys(JSON.parse(localStorage.getItem("basket"))).length;
        $('.badge').text(lenObj);
    }
}
countBasket();