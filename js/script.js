const myform = document.querySelector(".form1");

myform.addEventListener("submit", order);

function order(e){
    e.preventDefault();
    const pizzaErr =  document.querySelector("#sizePizza");
    const pizzaSize = pizzaErr.value;
    const output = document.querySelector("#row1");
    const pSize = document.querySelector("#pSize");
    const sizeQua = document.querySelector("#sizeQua");
    const sizeTotal = document.querySelector("#sizeTotal");
    const sizePrice = document.querySelector("#price");
    
    const pizzaTopping = document.querySelector("#topping").value;

    const topName = document.querySelector("#topName");
    const topPrice = document.querySelector("#topPrice");
    const topQUa = document.querySelector("#topQua")
    const topTotal = document.querySelector("#topTotal");
    
    const pizzaCrest = document.querySelector("#crest").value;
    const crestName = document.querySelector("#crestName");
    const crestPrice = document.querySelector("#crestPrice");
    const crestQUa = document.querySelector("#crestQua")
    const crestTotal = document.querySelector("#crestTotal");

    const grandTotal = document.querySelector("#grandTotal");  

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

    // const save1 = document.querySelector("#save1")

    // if((pizzaCrest === "Select crest ...") && (pizzaTopping === "Select topping...")){
    //     grandTotal.value = ;
    // }else if(pizzaCrest === "Select crest ..."){
    //     grandTotal.value = sizePrice.innerHTML + topPrice.innerHTML;
    // }
    // grandTotal.value = sizePrice.innerHTML;
    // console.log(grandTotal.value);
    
    output.style.display = "flex";

    
}