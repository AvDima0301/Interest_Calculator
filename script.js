function setPercent() {
    console.log(document.getElementById("input_percent").value);
    document.getElementById("percent_interest_rate").innerText = `${document.getElementById("input_percent").value}%`;
}

function getResult() {
    var amount = document.getElementById("input_amount").value;
    if(amount <= 0 || amount == null) {
        alert("Enter a positive number");
    } else {
        var percent = document.getElementById("input_percent").value;
        var years = document.getElementById("input_year").value;
        console.log(percent/100);
        var res = amount*((percent/100)*years);

        var date = new Date();

        document.getElementById("div_result").style.visibility = "visible";
        document.getElementById("res_amount").innerText = amount;
        document.getElementById("res_percent").innerText = `${percent}%`
        document.getElementById("res_result").innerText = res.toFixed(2);
        document.getElementById("res_year").innerHTML = parseInt(date.getFullYear()) + parseInt(years);
    }
}