/* Progression actuel : 
- Fonction permettant de crée un div où apparaitra les activés au quel l'adhérent est inscrit
- Syntaxe ou fonciton nécessaire pour le changement d'année n'affichant plus "undefined"
- Commentaire sur le fonctionnement du calendrier
*/

/* création variable lier à l'ID calendar */
let calendarNode = document.querySelector("#calendar");

/* création variable date, mois et année en cours */

let currDate = new Date();
let currYear = currDate.getFullYear();
let currMonth = currDate.getMonth() + 1;

/* création des variables pour les mois et jours */

let selectedYear = currYear;
let selectedMonth = currMonth;
let selectedMonthName = getMonthName(selectedYear, selectedMonth);
let selectedMonthDays = getDayCount(selectedYear, selectedMonth);

/* en déclanrant deux nouvelles variables égales aux deux premieres
 qui servirons pour les deux fonctions qui m'aiderons à afficher les mois suivants*/

renderDOM(selectedYear, selectedMonth);

/*  */

function getMonthName (year, month) {
    let selectedDate = new Date(year, month-1, 1);
    return selectedDate.toLocaleString('default', { month: 'long' });
}

function getMonthText () {
    if (selectedYear === currYear)
        return selectedMonthName;
    else
        return selectedMonthName + " ";
}
function getYearText () {
//    if (selectedYear === currYear) //
        return " " + selectedYear;
}

function getDayName (year, month, day) {
    let selectedDate = new Date(year, month-1, day);
    return selectedDate.toLocaleDateString('en-US',{weekday: 'long'});
}

function getDayCount (year, month) {
    return 32 - new Date(year, month-1, 32).getDate();
}

function getDaysArray () {
    let emptyFieldsCount = 0;
    let emptyFields = [];
    let days = [];

    switch(getDayName(selectedYear, selectedMonth, 1))
    {
        case "Tuesday":
            emptyFieldsCount = 1;
            break;
        case "Wednesday":
            emptyFieldsCount = 2;
            break;
        case "Thursday":
            emptyFieldsCount = 3;
            break;
        case "Friday":
            emptyFieldsCount = 4;
            break;
        case "Saturday":
            emptyFieldsCount = 5;
            break;
        case "Sunday":
            emptyFieldsCount = 6;
            break;
    }
  
    emptyFields = Array(emptyFieldsCount).fill("");
    days = Array.from(Array(selectedMonthDays + 1).keys());
    days.splice(0, 1);
    
    return emptyFields.concat(days);
}

function renderDOM (year, month) {
  let newCalendarNode = document.createElement("div");
  newCalendarNode.id = "calendar";
  newCalendarNode.className = "calendar";
  
  let dateText = document.createElement("div");
  dateText.append(getMonthText(), getYearText());
  dateText.className = "date-text";
  newCalendarNode.append(dateText);
  
  let leftArrow = document.createElement("div");
  leftArrow.append("«");
  leftArrow.className = "prev";
  leftArrow.addEventListener("click", goToPrevMonth);
  newCalendarNode.append(leftArrow);
  
  let rightArrow = document.createElement("div");
  rightArrow.append("»");
  rightArrow.className = "next";
  rightArrow.addEventListener("click", goToNextMonth);
  newCalendarNode.append(rightArrow);
  
  let dayNames = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"];
  
  dayNames.forEach((cellText) => {
    let cellNode = document.createElement("div");
    cellNode.className = "cell cell--unselectable";
    cellNode.append(cellText);
    newCalendarNode.append(cellNode);
  });
  
  let days = getDaysArray(year, month);
  
  days.forEach((cellText) => {
    let cellNode = document.createElement("div");
    cellNode.className = "cell";
    cellNode.append(cellText);
    newCalendarNode.append(cellNode);
  });
  
  calendarNode.replaceWith(newCalendarNode);
  calendarNode = document.querySelector("#calendar");
}
function goToPrevMonth () {
    selectedMonth--;
    if (selectedMonth === 0) {
        selectedMonth = 12;
        selectedYear--;
    }
    selectedMonthDays = getDayCount(selectedYear, selectedMonth);
    selectedMonthName = getMonthName(selectedYear, selectedMonth);
  /* checker état de la variable avec console.log */

    renderDOM(selectedYear, selectedMonth);
}

function goToNextMonth () {
    selectedMonth++;
    if (selectedMonth === 13) {
        selectedMonth = 1;
        selectedYear++;
    
    }
    selectedMonthDays = getDayCount(selectedYear, selectedMonth);
    selectedMonthName = getMonthName(selectedYear, selectedMonth);
  
    renderDOM(selectedYear, selectedMonth);
}

function goToCurrDate () {
    selectedYear = currYear;
    selectedMonth = currMonth;

    selectedMonthDays = getDayCount(selectedYear, selectedMonth);
    selectedMonthName = getMonthName(selectedYear, selectedMonth);
  
    renderDOM(selectedYear, selectedMonth);
}
/*
let cours = document.createElement("div");
cours.className = "cours";
document.querySelector("#monagenda").appendChild(cours);
*/
