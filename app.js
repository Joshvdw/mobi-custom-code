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

// const currentPage = window.location.pathname;
// const homePage = currentPage == "/";
// const integrationsPage = currentPage == "/integrations";
// const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

// gsap.registerPlugin(ScrollTrigger);

// document.addEventListener("DOMContentLoaded", function () {
//   // alert("we local baby");

//   // NAVBAR OVERLAY FIX
//   const overlay = document.querySelector(".navbar_dropdown-overlay");
//   const targetElements = document.querySelectorAll(".dropdown-list");
//   const initialDisplayValues = new Map();
//   const config = { attributes: true };
//   const observer = new MutationObserver(handleStyleChange);

//   targetElements.forEach((element) => {
//     initialDisplayValues.set(element, element.style.display);
//     observer.observe(element, config);
//   });

//   function handleStyleChange(mutationsList, observer) {
//     mutationsList.forEach((mutation) => {
//       if (
//         mutation.type === "attributes" &&
//         mutation.attributeName === "style" &&
//         mutation.target.style &&
//         !tabletChecker()
//       ) {
//         const currentDisplayStyle = mutation.target.style.display;

//         if (initialDisplayValues.get(mutation.target) !== currentDisplayStyle) {
//           const isOpen = currentDisplayStyle == "block";

//           if (isOpen) {
//             overlay.style.display = "block";
//           } else {
//             overlay.style.display = "none";
//           }
//           initialDisplayValues.set(mutation.target, currentDisplayStyle);
//         }
//       }
//     });
//   }

//   // GSAP SCROLL CODE
//   if (homePage && !tabletChecker()) loadAndInitCanvas("canvas");
//   // if (!tabletChecker()) loadAndInitCanvas("footer_canvas");

//   function loadAndInitCanvas(canvasID) {
//     const isFooter = canvasID === "footer_canvas";
//     const images = [];
//     const frameCount = isFooter ? 200 : 300;
//     let imagesLoaded = 0;

//     function handleImageLoad(img) {
//       imagesLoaded++;
//       if (imagesLoaded === frameCount) {
//         initCanvas(canvasID, images);
//         console.log("All images are loaded for canvasID: " + canvasID);
//       }
//     }

//     for (let i = 0; i < frameCount; i++) {
//       const img = new Image();
//       img.src = currentFrame(i, canvasID);
//       img.onload = handleImageLoad.bind(null, img);
//       img.onerror = function () {
//         console.error("Failed to load image:", img.src);
//         imagesLoaded++;
//         if (imagesLoaded === frameCount) {
//           initCanvas(canvasID, images);
//           console.log("All images are loaded for canvasID: " + canvasID);
//         } else {
//           setTimeout(function () {
//             img.src = currentFrame(i, canvasID);
//           }, 1000);
//         }
//       };
//       images.push(img);
//     }
//   }

//   function currentFrame(index, canvasID) {
//     let baseUrl;
//     const isFooter = canvasID === "footer_canvas";

//     if (isFooter) {
//       baseUrl =
//         "https://general-client-assets.sfo3.digitaloceanspaces.com/MOBI/Home/Footer/v02/desktop";
//     } else {
//       baseUrl =
//         "https://general-client-assets.sfo3.digitaloceanspaces.com/MOBI/Home/Rolling_Ball/v06";
//     }
//     const frameUrl = `${baseUrl}/MOBI_${
//       isFooter ? "Footer" : "RollingBall_viewport"
//     }_16-9_${index.toString().padStart(5, "0")}.jpg`;

//     return frameUrl;
//   }

//   function initCanvas(canvasID, images) {
//     const isFooter = canvasID === "footer_canvas";
//     const canvas = document.querySelector(`#${canvasID}`);
//     const context = canvas.getContext("2d");
//     const triggerElement = isFooter
//       ? document.querySelector(".scrub-wrapper-footer")
//       : document.querySelector(".scrub-wrapper");
//     const frameCount = isFooter ? 200 : 300;
//     const airpods = {
//       frame: 0,
//     };

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     function resizeCanvas() {
//       canvas.width = window.innerWidth;
//       const aspectRatio =
//         images[airpods.frame].width / images[airpods.frame].height;
//       canvas.height = window.innerWidth / aspectRatio;
//       renderImage();
//       ScrollTrigger.refresh();
//     }

//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     gsap.to(canvas, {
//       width: "100%",
//       ease: "none",
//       onUpdate: resizeCanvas,
//       scrollTrigger: {
//         trigger: triggerElement,
//         start: isFooter ? "top bottom" : "top center",
//         end: isFooter ? "bottom bottom" : "bottom center",
//         scrub: 0.5,
//         normalizeScroll: true,
//       },
//     });

//     gsap.to(airpods, {
//       frame: frameCount - 1,
//       snap: "frame",
//       ease: "none",
//       scrollTrigger: {
//         trigger: triggerElement,
//         start: isFooter ? "top bottom" : "top center",
//         end: isFooter ? "bottom bottom" : "bottom center",
//         scrub: 2,
//         normalizeScroll: true,
//       },
//       onUpdate: renderImage,
//     });

//     images[0].onload = function () {
//       renderImage();
//     };

//     images[0].onerror = function () {
//       console.error(`Failed to load the initial image for ${canvasID}`);
//     };

//     function renderImage() {
//       if (isFooter) {
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         const currentImage = images[airpods.frame];
//         const aspectRatio = currentImage.width / currentImage.height;
//         const canvasWidth = window.innerWidth;
//         const canvasHeight = window.innerHeight;
//         let drawnWidth, drawnHeight;
//         if (canvasWidth / aspectRatio > canvasHeight) {
//           drawnWidth = canvasWidth;
//           drawnHeight = canvasWidth / aspectRatio;
//         } else {
//           drawnHeight = canvasHeight;
//           drawnWidth = canvasHeight * aspectRatio;
//         }
//         const x = (canvasWidth - drawnWidth) / 2;
//         const y = (canvasHeight - drawnHeight) / 2;

//         context.drawImage(currentImage, x, y, drawnWidth, drawnHeight);
//       } else {
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         const currentImage = images[airpods.frame];
//         const aspectRatio = currentImage.width / currentImage.height;
//         const canvasWidth = window.innerWidth;
//         const canvasHeight = window.innerHeight;
//         const desiredHeight = canvasHeight * 0.5;
//         let drawnWidth, drawnHeight;

//         drawnHeight = desiredHeight;
//         drawnWidth = drawnHeight * aspectRatio;

//         if (drawnWidth < canvasWidth) {
//           drawnWidth = canvasWidth;
//           drawnHeight = drawnWidth / aspectRatio;
//         }

//         const x = 0;
//         const y = 0;

//         context.drawImage(currentImage, x, y, drawnWidth, drawnHeight);
//       }
//     }
//   }

//   // INTEGRATION PAGE CATEGORY FILTER FIX
//   if (integrationsPage) {
//     let lastItem;
//     const filterLinks = document.querySelectorAll(".category-filter");
//     const defaultIntro = document.querySelector("#default-intro");

//     categorySwitcher();

//     filterLinks.forEach((link) => {
//       link.addEventListener("click", () => {
//         setTimeout(() => {
//           categorySwitcher();
//         }, 100);
//       });
//     });

//     function categorySwitcher() {
//       const url = window.location.href;
//       const urlParams = new URLSearchParams(url.split("?")[1]);
//       const integrationCategory = urlParams.get("integration-category");
//       const showDefault = integrationCategory == null;

//       if (showDefault) {
//         displaySwap(defaultIntro, "block", true);
//         if (lastItem != undefined) {
//           displaySwap(lastItem, "none");
//           lastItem = undefined;
//         }
//       } else {
//         const currentCategory = capitalizeFirstLetter(integrationCategory);
//         displaySwap(defaultIntro, "none", true);
//         displaySwap(currentCategory, "block");

//         if (lastItem != currentCategory) {
//           if (lastItem != undefined) {
//             displaySwap(lastItem, "none");
//           }
//           lastItem = currentCategory;
//         }
//       }
//     }

//     function capitalizeFirstLetter(string) {
//       if (string == "pos") {
//         return string.toUpperCase();
//       } else {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//       }
//     }

//     function displaySwap(id, displayState, isDefault) {
//       if (isDefault) {
//         defaultIntro.style.display = displayState;
//       } else {
//         document.querySelector(`#${id}`).style.display = displayState;
//       }
//     }
//   }

//   // PRELOADER VIDEO SWAP CODE
//   if (homePage) {
//     window.addEventListener("load", () => {
//       document.querySelector(".loader_v1").style.display = isiOS
//         ? "none"
//         : "flex";
//       document.querySelector(".loader_v2").style.display = isiOS
//         ? "flex"
//         : "none";
//       const video1 = document.getElementById("bgVideo1");
//       const video2 = document.getElementById("bgVideo2");
//       const vidSrc1 = document.getElementById("vidSrc1");
//       const vidSrc2 = document.getElementById("vidSrc2");

//       setTimeout(() => {
//         if (mobileChecker()) {
//           changeVidSrc(vidSrc1, vidSrc2);
//           video1.load();
//           video2.load();
//         }
//         if (!isiOS) {
//           video1.currentTime = 0;
//           video1.play();
//         }
//       }, 2500);

//       if (!isiOS) {
//         video1.addEventListener("ended", () => {
//           document.querySelector(".loader_v1").style.display = "none";
//           document.querySelector(".loader_v2").style.display = "flex";
//           video2.currentTime = 0;
//           video2.play();
//         });
//       }
//     });
//   }

//   // always load / refresh atop the page
//   window.onbeforeunload = function () {
//     if (homePage) scrollToTop();
//   };

//   // REMOVE LOTTIES FROM DOM ON MOBILE
//   const topLottie = document.querySelector("#top_lottie");
//   if (homePage && mobileChecker()) removeFromDom(topLottie);

//   const bottomLottie = document.querySelector("#bottom_lottie");
//   if (homePage && tabletChecker()) removeFromDom(bottomLottie);
// }); // DOM load event listener end

// // UTILITY FUNCTIONS
// function tabletChecker() {
//   const screenWidth = window.innerWidth;
//   const breakpoint = 991;
//   return screenWidth < breakpoint;
// }

// function mobileChecker() {
//   const screenWidth = window.innerWidth;
//   const breakpoint = 767;
//   return screenWidth < breakpoint;
// }

// function removeFromDom(element) {
//   element.remove();
// }

// function changeVidSrc(video1, video2) {
//   video1.setAttribute(
//     "src",
//     "https://general-client-assets.sfo3.cdn.digitaloceanspaces.com/MOBI/Home/Home_Hero_Video/mobile/MOBI_BG_9-16_v01.mp4"
//   );
//   video1.setAttribute("type", "video/mp4");
//   video2.setAttribute(
//     "src",
//     "https://general-client-assets.sfo3.cdn.digitaloceanspaces.com/MOBI/Home/Home_Hero_Video/mobile/MOBI_BG_LOOP_9-16_v01.mp4"
//   );
//   video2.setAttribute("type", "video/mp4");
// }

// function scrollToTop() {
//   const bodyTag = document.querySelector("body");
//   const allElements = bodyTag.childNodes;
//   bodyTag.style.backgroundColor = "#002e46";
//   allElements.forEach((element) => {
//     element.style.display = "none";
//   });
//   window.scrollTo(0, 0);
// }
