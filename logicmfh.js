

$("#factButton").on("click", function() {
	var number = Math.floor((Math.random() * MoreInfo.length));
    $("#factText").text(MoreInfo[number])
})

var MoreInfo = ["Founded: July 1961, Paris, France"]

function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello Dolly!";
    document.getElementById("demo2").innerHTML = "How are you?";
  }
  