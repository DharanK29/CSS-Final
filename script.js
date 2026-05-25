// Wait for the entire page to load before running anything
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded");
  addTabIndex();
});

function addTabIndex() {
  console.log("addTabIndex triggered — adding tabindex to all thumbnail images");

  var images = document.querySelectorAll("#thumbnails img");

  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", i + 1);

    // Attach mouseover and mouseout events via JavaScript (not inline HTML)
    images[i].addEventListener("mouseover", function() {
      upDate(this);
    });
    images[i].addEventListener("mouseout", function() {
      undo();
    });

    // Attach focus and blur events for keyboard accessibility
    images[i].addEventListener("focus", function() {
      upDate(this);
    });
    images[i].addEventListener("blur", function() {
      undo();
    });
  }
}

function upDate(previewPic) {
  console.log("upDate triggered");
  console.log("alt:", previewPic.alt);
  console.log("src:", previewPic.src);

  document.getElementById("image").textContent = previewPic.alt;
  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
  document.getElementById("image").style.backgroundImage = "url('')";
  document.getElementById("image").textContent = "Hover over an image below to display here.";
}
