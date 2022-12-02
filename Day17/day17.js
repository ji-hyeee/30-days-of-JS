const colorInput = document.getElementById("color");

colorInput.addEventListener("input", () => {
    const colorCode = document.getElementById("color").value;
    document.getElementsByTagName("body")[0].style.backgroundColor = colorCode;
    document.getElementsByTagName("label")[0].style.backgroundColor = colorCode;
})