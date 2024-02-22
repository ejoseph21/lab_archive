let images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg"
  ];
  let currentImageIndex = 0;
  let slider = document.getElementById("slider");

  function changeImage() {
    slider.style.backgroundImage =
      "url('./" + images[currentImageIndex] + "')";
    currentImageIndex++;

    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }

    setTimeout(changeImage, 3000);
  }

  slider.style.backgroundImage =
    "url('./" + images[currentImageIndex] + "')";
  currentImageIndex++;

  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  setTimeout(changeImage, 3000);