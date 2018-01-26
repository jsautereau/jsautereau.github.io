/**
 * JS de Maintenance
 * @author Julien SAUTEREAU
 */

/**
 * Function Heure Courante
 */

function heureCourante() {

  var date = new Date();
  var jour = "Il est : " + date.getTime();

  var timeNow = document.getElementById('timeNow');

  var str = "";

    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()

    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    str += hours + ":" + minutes + ":" + seconds + " ";

    timeNow.innerHTML = str;
}

function afficheHeure() {

  setInterval(heureCourante, 1000);

}

function readICSFile() {


}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    var allText = '';
    rawFile.open("GET", file, false);
    rawFile.overrideMimeType("data:text/calendar;charset=utf8");
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;

            }
        }
    }
    rawFile.send();
    return allText;
}

console.log(readTextFile("basic.ics"));

afficheHeure();
heureCourante();
