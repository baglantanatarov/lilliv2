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
             if(checker(element.id)){
                var basket = JSON.parse(localStorage.getItem("basket"));
                block += `
                <div class="shop" data-id="${element.id}">
                    <div class="box-img"><img src="${element.img}"/></div>
                    <span>${element.name}</span>
                    <span class="calk">${element.price}<span>KZT</span></span>
                    <p><button data-id="${element.id}" onclick="minus(${element.id})">-</button><p class="cnt" data-id="${element.id}">${basket[element.id].num}</p><button data-id="${element.id}" onclick="pluse(${element.id})">+</button></p>
                    <p><button data-id="${element.id}" onclick="delCart(${element.id})">DEL</button></p>
                </div>`;
                document.querySelector(".menu").innerHTML = block;
             }

         });           
    });

function checker (value) {
    basket = JSON.parse(localStorage.getItem("basket"));
    if(basket[""+value]!=undefined) {
        return true;
    }
    return false;
}
function countBasket() {
    if(localStorage.length!=0 && localStorage.getItem("basket") != null) {
        
        var lenObj = Object.keys(JSON.parse(localStorage.getItem("basket"))).length;
        $('.badge').text(lenObj);
    }
}
function countNum(id) {
    if(localStorage.length!=0 && localStorage.getItem("basket") != null) {
        var lenObj = JSON.parse(localStorage.getItem("basket"))[id].num;
        $('.cnt[data-id="' + id + '"]').text(lenObj);
    }
}
function pluse(id){
    var basket = JSON.parse(localStorage.getItem("basket"));
    basket[id].num = ++basket[id].num;
    localStorage.setItem("basket", JSON.stringify(basket));
    countNum(id);
}
function minus(id){
    var basket = JSON.parse(localStorage.getItem("basket"));
    if(basket[id].num > 0){
        basket[id].num = --basket[id].num;
        localStorage.setItem("basket", JSON.stringify(basket));
        countNum(id);
    }
}
function delCart(id){
    var basket = JSON.parse(localStorage.getItem("basket"));
    basket[id]= localStorage.removeItem(id);
    localStorage.setItem("basket", JSON.stringify(basket));
    $('.shop[data-id="' + id + '"]').remove();
    countBasket();
}
function calkCart(id){
    
}
countBasket();



