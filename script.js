function convertTemp() {
    let celsius = Number(document.getElementById("temp").value);

    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;

    document.getElementById("result").innerHTML =
        "Fahrenheit: " + fahrenheit + "<br>Kelvin: " + kelvin;
}