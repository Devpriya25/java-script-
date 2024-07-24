 funtion call()
 {

 pizzaname.innerHTML=pizzas.value
 pizzaimage.width=135
 var cn = pizzas.options[pizzas.selectedIndex].text;
 document.getElementById('pizzaimage').src = cn.toLowerCase() + ".png";
 }