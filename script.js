
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


$(document).ready(function () {
    
    $(".buttons").on("click", function() {
        var cityChoice = $(".list-group-item").val();
        console.log(cityChoice);

        if (cityChoice === "boston") {
            console.log("boston");
            ajaxtranslate("https://elvish.p.rapidapi.com/sindarin.json?text=", cityChoice, "elvish.p.rapidapi.com");
        }
        else if (cityChoice === "los angeles") {
            console.log("los angeles");
            ajaxtranslate("https://valspeak.p.rapidapi.com/valspeak.json?text=", cityChoice, "valspeak.p.rapidapi.com");
        }
        else if (cityChoice === "seattle"){
            console.log("seattle");
            ajaxtranslateSith("https://sith.p.rapidapi.com/sith.json?text=", cityChoice, "sith.p.rapidapi.com");
        
        }
        else if (cityChoice === "chicago"){
            console.log("chicago");
            ajaxtranslateSith("https://sith.p.rapidapi.com/sith.json?text=", cityChoice, "sith.p.rapidapi.com");

        }
        else if (cityChoice === "detroit"){
            console.log("detroit");
            ajaxtranslateSith("https://sith.p.rapidapi.com/sith.json?text=", cityChoice, "sith.p.rapidapi.com");
        
        }
        else if (cityChoice === "saint louis") {
            console.log("saint louis");
            ajaxtranslateSith("https://sith.p.rapidapi.com/sith.json?text=", cityChoice, "sith.p.rapidapi.com");

        }
        else if (cityChoice === "miami"){
            console.log("miami");
            ajaxtranslateSith("https://sith.p.rapidapi.com/sith.json?text=", cityChoice, "sith.p.rapidapi.com");

        }
        else if (cityChoice === "lincoln"){
            console.log("lincoln");
            ajaxtranslateSith("https://sith.p.rapidapi.com/sith.json?text=", cityChoice, "sith.p.rapidapi.com");

        }

        });
    });


