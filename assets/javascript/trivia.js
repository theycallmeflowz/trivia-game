$(document).ready(function() {

var time = 10;
var total = 5;
var score = 0;
var results = $("#results").html(results);
// correct answers
var answers = ["c","c","b","a","b"];

$("#timer").text("00:60");
$("#startBtn").on("click", start);
$("#submitBtn").on("click", stop);


function count() {
  $("#timer").text("00:"+time);
  time--;

if (time === 0){
    stop();
   }
}

start();

function start() {
    console.log("started");
    count();
    intervalId = setInterval(count, 1000);
}

function stop() {

    clearInterval(intervalId); 
    console.log(score);
    alert("You scored "+score+" out of " +total);

}


    $("input[type=radio][name=q1]").change(function() {
        if (this.value == 'c') {
          score++;
        }
        else {
            
        }
    });

     $("input[type=radio][name=q2]").change(function() {
        if (this.value == 'c') {
          score++;
        }
        else {
            
        }
    });

     $("input[type=radio][name=q3]").change(function() {
        if (this.value == 'b') {
          score++;
        }
        else {
            
        }
    });

      $("input[type=radio][name=q4]").change(function() {
        if (this.value == 'a') {
          score++;
        }
        else {
            
        }
    });

       $("input[type=radio][name=q5]").change(function() {
        if (this.value == 'b') {
          score++;
          console.log(score);
        }
        else {
            

        }
    });


});
