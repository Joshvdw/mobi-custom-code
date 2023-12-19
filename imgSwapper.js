//  OUT OF VENUE FIX
document.addEventListener("DOMContentLoaded", function () {
  const triggers = document.querySelectorAll(".fade-trigger");
  const images = document.querySelectorAll(".product-features_image");
  const hasTriggerBeenInView = new Array(images.length).fill(false);

  let triggerIndex;
  let hasFirstImgTriggered = false;
  images[0].style.display = "inline-block"; // display first image by default

  swapImage();

  document.addEventListener("scroll", function () {
    swapImage();
  });

  function swapImage() {
    triggers.forEach((trigger, index) => {
      if (isInViewport(trigger)) {
        images.forEach((image) => {
          image.style.display = "none"; // hide all images
        });

        if (index != triggerIndex) {
          hasTriggerBeenInView[triggerIndex] = false;
        }

        if (!hasTriggerBeenInView[index] && hasFirstImgTriggered) {
          images[index].style.opacity = 0; // change  img opacity to 0
        }

        images[index].style.display = "inline-block"; // show img at current trigger index

        if (!hasTriggerBeenInView[index] && hasFirstImgTriggered) {
          fadeIn(images[index]); // fade in opacity of img
        }

        hasTriggerBeenInView[index] = true;
        triggerIndex = index;

        // catch to stop first img from fading
        if (!hasFirstImgTriggered && index == 0) {
          hasFirstImgTriggered = true;
        }
      }
    });
  }

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});

function fadeIn(el) {
  var opacity = 0;
  var fadeInInterval = setInterval(function () {
    if (opacity < 1) {
      opacity += 0.1;
      el.style.opacity = opacity;
    } else {
      clearInterval(fadeInInterval); // Stop the interval when opacity reaches 1
    }
  }, 50);
}
