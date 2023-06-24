function convertCelsiusToFahrenheit() {
    var celsius = parseFloat(document.getElementById("celsiusInput").value);
    if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("fahrenheitInput").value = removeTrailingZeros(fahrenheit.toFixed(2));
        var rumusText = "°F = (" + celsius + " × 9/5) + 32";
        rumusText = rumusText.replace("°F", fahrenheit.toFixed(2).replace(/\.?0+$/, "") + " °F");
        document.getElementById("hasilText").innerText = rumusText;
    } else {
        document.getElementById("fahrenheitInput").value = "";
        document.getElementById("hasilText").innerText = "";
    }
}

function convertFahrenheitToCelsius() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
    if (!isNaN(fahrenheit)) {
        var celsius = (fahrenheit - 32) * 5/9;
        document.getElementById("celsiusInput").value = removeTrailingZeros(celsius.toFixed(2));
        var rumusText = "°C = (" + fahrenheit + " - 32) × 5/9";
        rumusText = rumusText.replace("°C", celsius.toFixed(2).replace(/\.?0+$/, "") + " °C");
        document.getElementById("hasilText").innerText = rumusText;
    } else {
        document.getElementById("celsiusInput").value = "";
        document.getElementById("hasilText").innerText = "";
    }
}

// Fungsi untuk menghapus angka 00 di belakang koma
function removeTrailingZeros(value) {
    return value.replace(/\.?0+$/, "");
}

ScrollReveal({
    //reset: true,
    distance: "200px",
    duration: 2000,
  });

  ScrollReveal().reveal(".title-wrapper, .sweet-title", {
    delay: 500,
    origin: "left",
  });
  ScrollReveal().reveal(".card", {
    delay: 600,
    origin: "right",
  });
