const myform = document.querySelector(".form1");
const output = document.querySelector("#row1");

myform.addEventListener("submit", order);

function order(e){
    e.preventDefault();
    const pizzaErr =  document.querySelector("#sizePizza");
    const pizzaSize = pizzaErr.value;
    
    const pSize = document.querySelector("#pSize");
    const sizeQua = document.querySelector("#sizeQua");
    var sizeTotal = document.querySelector("#sizeTotal");
    const sizePrice = document.querySelector("#price");
    
    const pizzaTopping = document.querySelector("#topping").value;

    const topName = document.querySelector("#topName");
    const topPrice = document.querySelector("#topPrice");
    const topQua = document.querySelector("#topQua")
    var topTotal = document.querySelector("#topTotal");
    
    const pizzaCrest = document.querySelector("#crest").value;
    const crestName = document.querySelector("#crestName");
    const crestPrice = document.querySelector("#crestPrice");
    const crestQua = document.querySelector("#crestQua")
    var crestTotal = document.querySelector("#crestTotal");

    const grandTotal = document.querySelector("#grandTotal");
    var newTot ,topTot, crestTot;   

    function Pizza(pizzaSize, price){
        this.pizzaSize = pizzaSize;
        this.price = price;
    }
    function Topping(name, price,){
        this.name = name;
        this.price = price;
    }
    function Crest(name, price,){
        this.name = name;
        this.price = price;
    }

    const small = new Pizza("Small", "800");
    const medium = new Pizza("Medium", "1500");
    const large = new Pizza("Large", "2000");
    
    const mushroom = new Topping("mushroom","300");
    const pepperoni = new Topping("Pepperoni","500");
    const extraCheese = new Topping("Extra Cheese","350");
    const sausage = new Topping("Black-Olives","250");
    const onion = new Topping("Green-Pepper","300");

    const cheeseStuffedCrust = new Crest("Cheese-Stuffed-Crust","200");
    const pizzaBagels = new Crest("Pizza Bagels","350");
    const flatBread = new Crest("Flatbread","650");
    const thinCrust = new Crest("Thin Crust","450");
    const sicilianStyle = new Crest("Sicilian Style","400");

    if(pizzaSize === "1"){
        pSize.innerHTML = small.pizzaSize;
        sizePrice.innerHTML = small.price;
        sizeTotal.value = small.price;

    }else if(pizzaSize === "2"){
        pSize.innerHTML = medium.pizzaSize;
        sizePrice.innerHTML = medium.price;
        sizeTotal.value = medium.price;

    }else if(pizzaSize === "3"){
        pSize.innerHTML = large.pizzaSize;
        sizePrice.innerHTML = large.price;
        sizeTotal.value = large.price;
    }else{
       return alert("Please Select Pizza Size")
    }

    if(pizzaTopping === "1"){
        topName.innerHTML = pepperoni.name;
        topPrice.innerHTML = pepperoni.price;
        topTotal.value = topPrice.innerHTML;
    }else if(pizzaTopping === "2"){
        topName.innerHTML = mushroom.name;
        topPrice.innerHTML = mushroom.price;
        topTotal.value = topPrice.innerHTML;
    }else if(pizzaTopping === "3"){
        topName.innerHTML = extraCheese.name;
        topPrice.innerHTML = extraCheese.price;
        topTotal.value = topPrice.innerHTML;
    }else if(pizzaTopping === "4"){
        topName.innerHTML = sausage.name;
        topPrice.innerHTML = sausage.price;
        topTotal.value = topPrice.innerHTML;
    }else if(pizzaTopping === "5"){
        topName.innerHTML = onion.name;
        topPrice.innerHTML = onion.price;
        topTotal.value = topPrice.innerHTML;
    }

    if(pizzaCrest === "6"){
        crestName.innerHTML = cheeseStuffedCrust.name;
        crestPrice.innerHTML = cheeseStuffedCrust.price;
        crestTotal.value = crestPrice.innerHTML;

    }else if(pizzaCrest === "7"){
        crestName.innerHTML = pizzaBagels.name;
        crestPrice.innerHTML = pizzaBagels.price;
        crestTotal.value = crestPrice.innerHTML;

    }else if(pizzaCrest === "8"){
        crestName.innerHTML = flatBread.name;
        crestPrice.innerHTML = flatBread.price;
        crestTotal.value = crestPrice.innerHTML;
    }else if(pizzaCrest === "9"){
        crestName.innerHTML = thinCrust.name;
        crestPrice.innerHTML = thinCrust.price;
        crestTotal.value = crestPrice.innerHTML;
    }else if(pizzaCrest === "10"){
        crestName.innerHTML = sicilianStyle.name;
        crestPrice.innerHTML = sicilianStyle.price;
        crestTotal.value = crestPrice.innerHTML;
    }

    const save1 = document.querySelector("#save1");
    const save2 = document.querySelector("#save2");
    const save3 = document.querySelector("#save3");

    save1.onclick = function(){
        newTot = sizeQua.value * sizePrice.innerHTML;
        sizeTotal.value = newTot;

        topTot = topQua.value * topPrice.innerHTML;
        topTotal.value = topTot;

        crestTot = crestQua.value * crestPrice.innerHTML
        crestTotal = crestTot ;
        
        if((pizzaCrest === "Select crest ...") && (pizzaTopping === "Select topping...")){
            return grandTotal.value = newTot;
        }else if((pizzaCrest == "Select crest ...") && (pizzaTopping !== "Select topping...")){
            return grandTotal.value = newTot + topTot;
        }else if((pizzaCrest !== "Select crest ...") && (pizzaTopping == "Select topping...")){
            return grandTotal.value = newTot + crestTot;
        }else{
          return  grandTotal.value = newTot + crestTot + topTot;

        }
        
    }
    
    save2.onclick = function(){
        newTot = sizeQua.value * sizePrice.innerHTML;
        sizeTotal.value = newTot;

        topTot = topQua.value * topPrice.innerHTML;
        topTotal.value = topTot;

        crestTot = crestQua.value * crestPrice.innerHTML
        crestTotal.value = crestTot ;

        if(pizzaCrest == "Select crest ..."){
           return grandTotal.value = topTot + newTot;
        }else{
           return grandTotal.value = newTot + crestTot + topTot;

        }
    }
    save3.onclick = function(){
        newTot = sizeQua.value * sizePrice.innerHTML;
        sizeTotal.value = newTot;

        topTot = topQua.value * topPrice.innerHTML;
        topTotal.value = topTot;

        crestTot = crestQua.value * crestPrice.innerHTML
        crestTotal.value = crestTot ;

        if(pizzaTopping == "Select crest ..."){
         return   grandTotal.value = newTot + crestTot;
        }else{
          return  grandTotal.value = newTot + topTot + crestTot;
        }
    }
   
    
    output.style.display = "flex";   
}  


const out = document.querySelector("#out").onclick = function(){
    output.style.display = "none"; 

}
const out2 = document.querySelector(".out2").onclick = function(){
    output.style.display = "none"; 

}
const out1 = document.querySelector(".out1").onclick = function(){
    output.style.display = "none"; 

}

const submit1 = document.querySelector("#sub").onclick = function(){
    const userNumber = document.querySelector("#contact").value;
    const userLocation = document.querySelector("#location").value;
    const output = document.querySelector("#output");

    if((userNumber === "") && (userLocation === "")){
        alert("please fill in the form")
    }else{
        output.innerHTML = "Dear user your order will be delivered at" + " " + userLocation+ " " + "We will call you immediately";

    }

    

};