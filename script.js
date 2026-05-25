document.addEventListener("DOMContentLoaded", function() {
  console.log("DOMContentLoaded fired");

  var images = document.querySelectorAll("#thumbnails img");
  console.log("Number of images found:", images.length);

  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", i + 1);

    images[i].addEventListener("mouseover", function() {
      console.log("mouseover on:", this.alt);
      document.getElementById("image").textContent = this.alt;
      document.getElementById("image").style.backgroundImage = "url('" + this.src + "')";
      document.getElementById("image").style.backgroundSize = "cover";
      document.getElementById("image").style.backgroundPosition = "center";
      document.getElementById("image").style.color = "white";
    });

    images[i].addEventListener("mouseout", function() {
      document.getElementById("image").style.backgroundImage = "";
      document.getElementById("image").textContent = "Hover over an image below to display here.";
      document.getElementById("image").style.color = "";
    });

    images[i].addEventListener("focus", function() {
      console.log("focus on:", this.alt);
      document.getElementById("image").textContent = this.alt;
      document.getElementById("image").style.backgroundImage = "url('" + this.src + "')";
      document.getElementById("image").style.backgroundSize = "cover";
      document.getElementById("image").style.backgroundPosition = "center";
      document.getElementById("image").style.color = "white";
    });

    images[i].addEventListener("blur", function() {
      document.getElementById("image").style.backgroundImage = "";
      document.getElementById("image").textContent = "Hover over an image below to display here.";
      document.getElementById("image").style.color = "";
    });
  }
});
