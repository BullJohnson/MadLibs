'use strict'

// William S. Johnson, Jr | 10-01-23 | DPR214 - madlibs

let goAgain = 0;
const $ = selector => document.querySelector(selector);  //function to retrieve a selected element

//start program after document has fully loaded
document.addEventListener("DOMContentLoaded", () => {
    $("#pluralNoun").focus();

    //upon click of reset button, clear each field
    $("#clear").addEventListener("click", () => {
        $("#pluralNoun").value = "";
        $("#aNoun").value = "";
        $("#anotherNoun").value = "";
        $("#aSong").value = "";
        $("#aVerb").value = "";
        $("#pluralNoun").focus();
    });

    //upon click of submit button, retrieve value from each field
    $("#submit").addEventListener("click", () => {
        const pluralNoun = $("#pluralNoun").value;
        const aNoun = $("#aNoun").value;
        const anotherNoun = $("#anotherNoun").value;
        const aSong = $("#aSong").value;
        const aVerb = $("#aVerb").value;

        //default error message
        let responseRequest = "The game works best, when all fields are populated.\n";

        //qualify each response and customize error message accordingly
        if (pluralNoun == "") {
            responseRequest += "Please enter a plural noun.\n";
            $("#pluralNoun").focus();
        }
        if (aNoun == "") {
            responseRequest += "Please enter a noun.\n";
            $("#aNoun").focus();
        }
        if (anotherNoun == "") {
            responseRequest += "Please enter another noun.\n";
            $("#anotherNoun").focus();
        }
        if (aSong == "") {
            responseRequest += "Please enter a song.\n";
            $("#aSong").focus();
        }
        if (aVerb == "") {
            responseRequest += "Please enter a verb.\n";
            $("#aVerb").focus();
        }

        //if needed, display error message, if not, display results
        if (responseRequest != "The game works best, when all fields are populated.\n") {
            alert(responseRequest);
        }

            else {
                document.write(`<h4 style="text-align:center;margin-top:100px;font-size:3em;">Learning To Drive Is a Tricky Process!</h4>`);
                document.write(`<p style="text-align:center;font-size:2em;">1. Keep two ${pluralNoun.toUpperCase()} on the steereing wheel at all times.,</p>`);
                document.write(`<p style="text-align:center;font-size:2em;">2. Step  on the ${aNoun.toUpperCase()} to speed up and the ${anotherNoun.toUpperCase()} to slow down.</p>`);
                document.write(`<p style="text-align:center;font-size:2em;">3. Sing ${aSong.toUpperCase()} and ${aVerb.toUpperCase()} when you see a street sign.</p>`);
                document.write(`<br><button style="margin-left:44%;font-size:2em;" type="button" id="goAgain">Go Again?</button>`);
                $("#goAgain").addEventListener("click", () => {
                    location.reload();
                });
            }
    });
});
