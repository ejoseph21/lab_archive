let imageIndex = 1; 
    let totalImages = 5; 
    let imageFigure = document.getElementById("imageFigure");
    let image = document.getElementById("image");
    let figcaption = imageFigure.getElementsByTagName("figcaption")[0];

    function changeImage() {
      imageIndex++;
      if (imageIndex > totalImages) {
        imageIndex = 1;
      }
      image.src = "image" + imageIndex + ".jpg";
      image.alt = "Image " + imageIndex;
      figcaption.textContent = "Изображение " + imageIndex;
    }

    imageFigure.addEventListener("click", changeImage);