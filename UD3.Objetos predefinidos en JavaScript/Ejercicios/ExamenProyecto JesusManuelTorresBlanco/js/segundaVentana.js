function validarFecha() {
    var dia = document.getElementById('diaNac').value;
    var mes = document.getElementById('mesNac').value;
    var ano = document.getElementById('anoNac').value;

    mes = mesToNumber(mes);

    var fecha = dia + "/" + mes + "/" + ano;
    console.log(isFechaDDMMAAAA(fecha));

}

function mesToNumber(valor) {
    valor = valor.toUpperCase;
    switch (valor) {
        case "ENERO":
            return 1;

        case "FEBRERO":
            return 2;

        case "MARZO":
            return 3;
        case "ABRIL":
            return 4;
        case "MAYO":
            return 5;

        case "JUNIO":
            return 6;
        case "JULIO":
            return 7;
        case "AGOSTO":
            return 8;
        case "SEPTIEMBRE":
            return 9;
        case "OCTUBRE":
            return 10;
        case "NOVIEMBRE":
            return 11;
        case "DICIEMBRE":
            return 12;
        default:
            return -1;
    }
}


function isFechaDDMMAAAA(fecha) {
    var dtCh = "/";
    var minYear = 1900;
    var maxYear = 2100;

    function isInteger(s) {
        var i;
        for (i = 0; i < s.length; i++) {
            var c = s.charAt(i);
            if (((c < "0") || (c > "9"))) return false;
        }
        return true;
    }

    function stripCharsInBag(s, bag) {
        var i;
        var returnString = "";
        for (i = 0; i < s.length; i++) {
            var c = s.charAt(i);
            if (bag.indexOf(c) == -1) returnString += c;
        }
        return returnString;
    }

    function daysInFebruary(year) {
        return (((year % 4 === 0) && (((year % 100 !== 0)) || (year % 400 === 0))) ? 29 : 28);
    }

    function DaysArray(n) {
        for (var i = 1; i <= n; i++) {
            this[i] = 31;
            if (i === 4 || i === 6 || i === 9 || i === 11) {
                this[i] = 30;
            }
            if (i === 2) {
                this[i] = 29;
            }
        }
        return this;
    }

    function isDate(dtStr) {
        var daysInMonth = DaysArray(12);
        var pos1 = dtStr.indexOf(dtCh);
        var pos2 = dtStr.indexOf(dtCh, pos1 + 1);
        var strDay = dtStr.substring(0, pos1);
        var strMonth = dtStr.substring(pos1 + 1, pos2);
        var strYear = dtStr.substring(pos2 + 1);
        strYr = strYear;
        if (strDay.charAt(0) == "0" && strDay.length > 1) strDay = strDay.substring(1);
        if (strMonth.charAt(0) == "0" && strMonth.length > 1) strMonth = strMonth.substring(1);
        for (var i = 1; i <= 3; i++) {
            if (strYr.charAt(0) == "0" && strYr.length > 1) strYr = strYr.substring(1);
        }
        month = parseInt(strMonth);
        day = parseInt(strDay);
        year = parseInt(strYr);
        if (pos1 == -1 || pos2 == -1) {
            return false;
        }
        if (strMonth.length < 1 || month < 1 || month > 12) {
            return false;
        }
        if (strDay.length < 1 || day < 1 || day > 31 || (month == 2 && day > daysInFebruary(year)) || day > daysInMonth[month]) {
            return false;
        }
        if (strYear.length != 4 || year === 0 || year < minYear || year > maxYear) {
            return false;
        }
        if (dtStr.indexOf(dtCh, pos2 + 1) != -1 || isInteger(stripCharsInBag(dtStr, dtCh)) === false) {
            return false;
        }
        return true;
    }
    if (isDate(fecha)) {
        return true;
    } else {
        return false;
    }
}
