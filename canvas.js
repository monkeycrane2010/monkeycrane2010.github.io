var colorPicker = new iro.ColorPicker('#picker');

var hex = colorPicker.color.hexString;
console.log(hex); // hex = "#ff0000"

headertitle = document.getElementsByTagName("h2");
headertitle.style.color = hex;