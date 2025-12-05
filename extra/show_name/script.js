function showname() {
    let input = document.getElementById("name").value;
    let result = document.getElementById("result");
    result.style.color = 'blue';
    result.style.fontSize = '20px';
    result.textContent = "Bonjour, " + input + " !";
}