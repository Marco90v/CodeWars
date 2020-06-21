/*
*John has invited some friends. His list is:
*
*s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
*Could you make a program that
*
*makes this string uppercase
*gives it sorted in alphabetical order by last name.
*When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.
*
*So the result of function meeting(s) will be:
*
*"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
*It can happen that in two distinct families with the same family name two people have the same first name too.
*/

function meeting(s) {
    let res="";
    let arr;
    s=s.toUpperCase();
    arr = s.split(";");
    arr = arr.map( e=> e.split(":").reverse() ).sort( (a,b) => {
        if (a[0] > b[0]) { return 1; }
        if (a[0] < b[0]) { return -1; }
        if (a[0] == b[0]) { 
            if (a[1] > b[1]) { return 1; }
            if (a[1] < b[1]) { return -1; }
        }
    });
    arr.forEach(e => { res += "("+e[0]+", "+e[1]+")"; });
    return res;
}


meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"); // Response "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)");
meeting("John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell") // Response"(BELL, MEGAN)(CORNWELL, AMBER)(DORNY, JAMES)(DORRIES, PAUL)(GATES, JOHN)(KERN, ANN)(KORN, ANNA)(META, ALEX)(RUSSEL, ELIZABETH)(STEVE, LEWIS)(WAHL, MICHAEL)");
meeting("Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern") // Response "(ARNO, ALEX)(ARNO, HALEY)(BELL, SARAH)(CORNWELL, ALISSA)(DORNY, PAUL)(DORRIES, ANDREW)(KERN, ANN)(KERN, MADISON)");
