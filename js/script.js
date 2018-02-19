window.onload = function(){

  // get all image containers
  var images = document.querySelectorAll(".images");

  // for each image container
  for (image of images){

    // set the current index to 0 ie. show the first image
    image.setAttribute("index",0);

    // grab all images within container
    var imgs = image.querySelectorAll("img");

    // hide all except the first image
    for (var i = 0; i < imgs.length; i++){
      var img = imgs[i];
      if (i != 0){
        img.style.display = "none";
      }
    }

    // if the visitor clicks the image container
    image.addEventListener("click",function(e){

      // grab the image container as a variable
      var el = e.currentTarget;

      // grab the current index
      var index = el.getAttribute("index");

      // grab all the images within the container
      var imgs = el.querySelectorAll("img");

      // if we are not at the end, lets move forward
      if (index < imgs.length - 1){
        index++;
      // otherwise start from the beginning
      } else {
        index = 0;
      }

      // set the new attribute to the image container
      el.setAttribute("index",index);

      // hide all except the current index
      for (var i = 0; i < imgs.length; i++){
        var img = imgs[i];
        if (i != index){
          img.style.display = "none";
        } else {
          img.style.display = "block";
        }
      }
    });
  }
}