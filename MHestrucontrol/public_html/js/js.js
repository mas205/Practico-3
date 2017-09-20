$().ready(iniciar);
function iniciar() {
    $("#btnE1").click(procesarE1);
    $("#btnE2").click(procesarE2);
    $("#btnE3").click(procesarE3);
    $("#btnE4").click(procesarE4);
    $("#btnE5").click(procesarE5);
    $("#btnE6").click(procesarE6);
    $("#btnE7").click(procesarE7);
    $("#btnE8").click(procesarE8);
    $("#btnE9").click(procesarE9);
    $("#btnE10").click(procesarE10);
    $("#btnE11").click(procesarE11);
    $("#btnE12").click(procesarE12);
    $("#btnE13").click(procesarE13);
    $("#btnE14").click(procesarE14);
    $("#btnE15").click(procesarE15);
    $("#btnE16").click(procesarE16);
    $("#btnE17").click(procesarE17);
    $("#btnE18").click(procesarE18);
}
function procesarE1() {
    for (i = 0; i < 1001; i++) {
        $("#resp1").append(i + "<br>");
    }
}
function procesarE2() {
    for (i = -100; i < 11; i++) {
        $("#resp2").append(i + "<br>");
    }
}
function procesarE3() {
    for (i = 40; i > 9; i--) {
        $("#resp3").append(i + "<br>");
    }
}
function procesarE4() {
    for (i = 20; i > -31; i--) {
        $("#resp4").append(i + "<br>");
    }
}
function procesarE5() {
    for (i = 1; i < 451; i++) {
        if (i % 5 === 0) {
            $("#resp5").append(i + "<br>");
        }
    }
}
function procesarE6() {
    for (i = -33; i < 231; i++) {
        if (i % 4 === 0) {
            if (i !== 0) {
                $("#resp6").append(i + "<br>");
            }
        }
    }
}
function procesarE7() {
    $("#resp7").html("");
    num1 = $("#txt1").val();
    if (!(isNaN(num1))) {
        nnum1 = parseInt(num1);
        if (nnum1 > 1 && nnum1 < 51) {
            for (i = 1; i <= nnum1; i++) {
                $("#resp7").append("-");
            }
        } else {
            $("#resp7").html("Intente nuevamente con un nùmero entre 2 y 50");
        }
    } else {
        $("#resp7").html("Intente nuevamente con un número");
    }
}
function procesarE8() {
    $("#resp8").html("");
    num1 = $("#txt2").val();
    num2 = $("#txt3").val();
    if (!isNaN(num1) && !isNaN(num2)) {
        nnum1 = parseInt(num1);
        nnum2 = parseInt(num2);
        if (nnum2 < nnum1) {
            nom1 = nnum2;
            nom2 = nnum1;
        } else {
            nom1 = nnum1;
            nom2 = nnum2;
        }
        for (i = nom1; i <= nom2; i++) {
            $("#resp8").append(i + "<br>");
        }
    } else {
        $("#resp8").html("Intente nuevamente con números");
    }
}
function procesarE9() {
    $("#resp9").html("");
    num1 = $("#txt4").val();
    num2 = $("#txt5").val();
    if (!isNaN(num1) && !isNaN(num2)) {
        nnum1 = parseInt(num1);
        nnum2 = parseInt(num2);
        sum = 0;
        for (i = 1; i <= nnum2; i++) {
            sum += nnum1;
        }
        $("#resp9").html(sum);
    } else {
        $("#resp9").html("Intente nuevamente con números");
    }

}
function procesarE10() {
    $("#resp10").html("");
    num1 = $("#txt6").val();
    num2 = $("#txt7").val();
    if (!isNaN(num1) && !isNaN(num2)) {
        nnum1 = parseInt(num1);
        nnum2 = parseInt(num2);
        prod = 1;
        for (i = nnum1; i <= nnum2; i++) {
            prod *= i;
        }
        $("#resp10").html(prod);
    } else {
        $("#resp10").html("Intente nuevamente con números");
    }
}
function procesarE11() {
    $("#resp11").html("");
    num1 = $("#txt8").val();
    num2 = $("#txt9").val();
    num3 = $("#txt10").val();
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        nnum1 = parseInt(num1);
        nnum2 = parseInt(num2);
        nnum3 = parseInt(num3);
        if (nnum1 > nnum2) {
            nom1 = nnum2;
            nom2 = nnum1;
        } else {
            nom1 = nnum1;
            nom2 = nnum2;
        }
        for (i = nom1; i <= nom2; i++) {
            if (i % nnum3 === 0) {
                $("#resp11").append(i + "<br>");
            }
        }
    } else {
        $("#resp11").html("Intente nuevamente con números");
    }
}
function procesarE12() {
    $("#resp11").html("");
    num1 = $("#txt11").val();
    if (!isNaN(num1)) {
        nnum1 = parseInt(num1);
        prod = 1;
        for (i = 1; i <= nnum1; i++) {
            prod *= i;
        }
        $("#resp12").html(prod);
    } else {
        $("#resp12").html("Intente nuevamente con números");
    }
}
function procesarE13() {
    $("#resp13").html("");
    num1 = $("#txt12").val();
    num2 = $("#txt13").val();
    if (!isNaN(num1)) {
        nnum1 = parseInt(num1);
        nnum2 = parseInt(num2);
        for (i = 1; i < (nnum1 * nnum2) + 1; i++) {
            if (i % nnum2 === 0) {
                $("#resp13").append("O" + "<br>");
            } else {
                $("#resp13").append("O");
            }
        }
    } else {
        $("#resp13").html("Intente nuevamente con números");
    }
}
function procesarE14() {
    $("#resp14").html("");
    num1 = $("#txt14").val();
    if (!isNaN(num1)) {
        nnum1 = parseInt(num1);
        num = 1;
        for (i = 1; i <= nnum1; i++) {
            if ((nnum1 / 10) > 1) {
                nnum1 = nnum1 / 10;
                num++;
            } else {
                break;
            }
        }
        $("#resp14").html(num);
    } else {
        $("#resp14").html("Intente nuevamente con números");
    }
}
function procesarE15() {
    $("#resp15").html("");
    num1 = $("#txt15").val();
    if (!isNaN(num1)) {
        nnum1 = parseInt(num1);
        if (nnum1 >= 2000) {
            x = 101;
            while (x > 100) {
                x = nnum1 / 20;
                nnum1 = x;
            }
            $("#resp15").html(x);
        } else {
            $("#resp15").html("Intente nuevamente con un número mayor a 1999");
        }
    } else {
        $("#resp15").html("Intente nuevamente con números");
    }
}
function procesarE16() {
    $("#resp16").html("");
    num1 = $("#txt16").val();
    num2 = $("#txt17").val();
    if (!isNaN(num1) && !isNaN(num2)) {
        nnum1 = parseInt(num1);
        nnum2 = parseInt(num2);
        if (nnum1 > nnum2) {
            nom1 = nnum2;
            nom2 = nnum1;
        } else {
            nom1 = nnum1;
            nom2 = nnum2;
        }
        for (i = nom1; i <= nom2; i++) {
            if (i % 4 === 0 && i % 6 === 0) {
                $("#resp16").html(i);
                break;
            }
        }
    } else {
        $("#resp16").html("Intente nuevamente con números");
    }
}
function procesarE17() {
    $("#resp17").html("");
    var num1 = $("#txt18").val();
    var num2 = $("#txt19").val();
    if (!isNaN(num1) && !isNaN(num2)) {
        dividendo = parseInt(num1);
        divisor = parseInt(num2);
        coc = 0;
        resto = 0;
        //dividendo=divisor;
        while (dividendo >= divisor) {
            dividendo -= divisor;
            coc++;
            resto = dividendo;
        }
        $("#resp17").html("cociente: " + coc + " resto: " + resto);
    } else {
        $("#resp17").html("Intente nuevamente con números");
    }
}
function procesarE18() {
    $("#resp18").html("");
    num1 = $("#txt20").val();
    if (!isNaN(num1)) {
        nnum1 = parseInt(num1);
        for (i=31;i<200;i++){
            if(i%nnum1===0 && i%2===0){
                $("#resp18").append(i + "<br>");
            }
        }
    } else {
        $("#resp18").html("Intente nuevamente con números");
    }
}