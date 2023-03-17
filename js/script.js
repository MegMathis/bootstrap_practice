// $("h1").html("<span>This is a span tag that is inserted into the h1</>");

// $("h1")
//   .text("Changed!")
//   .css({
//     color: "red",
//     backgroundColor: "#444",
//     padding: "25px 30px",
//   })
//   .append("<span>This is added to the end</span>");

// var btn = $("<button>");

// btn.text("Click Me");

// $(".wrapper").append(btn);

// var lis = document.querySelectorAll("li");

// for (var li of lis) {
//   li.innerText = "Changed";
// }

// var lis = $("li");

// lis.text("something else").css("color", "red");

$.get("https://swapi.dev/api/people").then(function (data) {
  //   console.log(data);
  var characters = data.results;
  //   console.log(characters);

  for (var char of characters) {
    $("#char-output").append("<li>" + char.name + "</li>");
  }
});
