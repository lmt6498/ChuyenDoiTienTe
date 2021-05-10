function convert() {
    var nhapSo = document.getElementById("soTien").value;
    var num = parseFloat(nhapSo);
    var country = document.getElementById("kv").value;
    var unit = document.getElementById("donvi").value;
    if ((country == "Vietnam") && (unit == "VND") || (country == "America") && (unit == "USD") || (country == "Japan") && (unit == "YEN")) {
        document.getElementById("showResult").innerHTML = "Result: " + num;
    }
    if ((country == "Vietnam") && (unit == "USD")) {
        var kq = num / 23000;
        document.getElementById("showResult").innerHTML = "Result: " + kq + " USD";
    }
    if ((country == "Vietnam") && (unit == "YEN")) {
        var kq = num / 210;
        document.getElementById("showResult").innerHTML = "Result: " + kq + " YEN";
    }
    if ((country == "America") && (unit == "VND")) {
        var kq = num * 23000;
        document.getElementById("showResult").innerHTML = "Result: " + kq + " VND";
    }
    if ((country == "America") && (unit == "YEN")) {
        var kq = num * 108;
        document.getElementById("showResult").innerHTML = "Result: " + kq + " YEN";
    }
    if ((country == "Japan") && (unit == "VND")) {
        var kq = num * 210;
        document.getElementById("showResult").innerHTML = "Result: " + kq + " VND";
    }
    if ((country == "Japan") && (unit == "USD")) {
        var kq = num / 108;
        document.getElementById("showResult").innerHTML = "Result: " + kq + " USD";
    }
}