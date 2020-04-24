
function get_age()
{
    today_date = new Date();
    today_year = today_date.getFullYear();
    today_month = today_date.getMonth();
    today_day = today_date.getDate();
    age = today_year - 1987;

    if ( today_month < 11)
    {
        age--;
    }
    if (((12 - 1) == today_month) && (today_day < 1))
    {
        age--;
    }
    return age;
}



function myFunction() {
  location.href = "#sidebar";
}


function goToTop() {
  location.href = "#top";
}