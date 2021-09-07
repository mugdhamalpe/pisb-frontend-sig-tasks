var finalday = new Date("dec 4, 2021 11:30:00").getTime();

        var x = setInterval(function(){

            var currentime = new Date().getTime();

            //diff between current and final day
            var difference = finalday - currentime; //will give time in millisecond

            var days = Math.floor(difference / (1000*60*60*24)); //to convert millisecond to days
            //Math.floor --> To round a number downward to its nearest integer
            console.log(days);

            var hours = Math.floor((difference % (1000*60*60*24)) / (1000*60*60)); //to convert the decimal part of days to hours
            console.log(hours);

            var minutes = Math.floor((difference % (1000*60*60)) / (1000*60)); //to minutes
            console.log(minutes);

            var seconds = Math.floor((difference % (1000*60)) / 1000); //to seconds
            console.log(seconds);

            document.getElementById("demo").innerHTML = days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s"

        }, 1000 );