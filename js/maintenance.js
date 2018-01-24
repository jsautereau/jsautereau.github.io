/**
 * JS de Maintenance
 * @author Julien SAUTEREAU
 */

/**
 * Function Heure Courante
 */

function heureCourante {

  var date = new Date();
  var jour = "Il est : " + date.getDay();

  document.getElementsById('timeNow').innerHTML = jour;
}

heureCourante();
