 <script>
   
    function addTabIndex() {
      console.log("addTabIndex triggered — adding tabindex to all thumbnail images");
 
      var images = document.querySelectorAll("#thumbnails img");
 
      for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", i + 1);
      }
    }
 
  
    function upDate(previewPic) {
      console.log("upDate triggered");
      console.log("alt:", previewPic.alt);
      console.log("src:", previewPic.src);
 
      
      document.querySelector("#image").textContent = previewPic.alt;
 
      
      document.querySelector("#image").style.backgroundImage = "url('" + previewPic.src + "')";
    }
 
   
    function undo() {
      
      document.getElementById("image").style.backgroundImage = "url('')";
 
      
      document.getElementById("image").textContent = "Hover over an image below to display here.";
    }
 
    
    window.onload = addTabIndex;
  </script>
 
