function show() {
    document.getElementById('carimage').width = 150;
    var cn = cars.options[cars.selectedIndex].text;
    document.getElementById('carname').innerHTML = cn;
    document.getElementById('carimage').src = cn.toLowerCase() + ".png";
    document.getElementById('price').innerHTML = "Price: " + cars.value;
}
    /*  value+"png"use to src of carimage use*/