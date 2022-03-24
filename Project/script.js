//alert("Hello World!");


//alert(a);


function guess() {
    var a = prompt("Введите число:");
    if (a > 5) {
        alert("Число должно быть <-меньше")
        return guess();
    } else if (a == 5) {
        return alert("Вы гений")
    } else {
        alert("Число должно быть >-больше")
        return guess();
    }
}

guess();