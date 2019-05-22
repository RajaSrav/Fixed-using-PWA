(function() {
  function loadJSON(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    }
    rawFile.send(null);
  }
  //usage:
  loadJSON("data.json", function(text){
    let data = JSON.parse(text);
    console.log(data);
    raja(data.raja);
    profile(data.profile);
  });
  var main = document.getElementById("main");
  var left = document.createElement("div");
  left.classList.add("left");
  function raja(raja) {
    var imag = document.createElement("img");
    imag.src=raja.img;
    left.appendChild(imag);

    for (i in raja.name) {
    var p = document.createElement("p");
    p.textContent=raja.name[i];
    left.appendChild(p);
    }

  }
  var right = document.createElement("div");
  right.classList.add("right");
  function profile(profile) {

  for (i in profile) {
  var flex1 = document.createElement("div");
  flex1.classList.add("cardview");
  var container = document.createElement("div");
  container.classList.add("container");
  for (j in profile[i].number) {
    var p= document.createElement("p");
  var li = document.createElement("li");
  li.textContent=profile[i].number[j];
  p.appendChild(li);
  container.appendChild(p);
  }
  var h1 = document.createElement("h2");
  h1.textContent=profile[i].picture;
  flex1.appendChild(h1);
  flex1.appendChild(container);
  right.appendChild(flex1);
   }
 }
  main.appendChild(left);
  main.appendChild(right);
})();
