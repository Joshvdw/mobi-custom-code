// TAB START AT START FIX
const tabs1Trigger = document.querySelector("#tabs1");
const tabs2Trigger = document.querySelector("#tabs2");
const tabs3Trigger = document.querySelector("#tabs3");
const tabs4Trigger = document.querySelector("#tabs4");

let tab1HasBeenInView = false;
let tab2HasBeenInView = false;
let tab3HasBeenInView = false;
let tab4HasBeenInView = false;

function debounce(func, delay) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

document.addEventListener(
  "scroll",
  debounce(function () {
    // tab 1
    if (!tab1HasBeenInView && isInViewport(tabs1Trigger)) {
      $(".tabs-features_tab-link:first").click();
      tab1HasBeenInView = true;
    }
    // tab 2
    if (!tab2HasBeenInView && isInViewport(tabs2Trigger)) {
      $(".tabs-features_tab-link-second:first").click();
      tab2HasBeenInView = true;
    }
    // tab 3
    if (!tab3HasBeenInView && isInViewport(tabs3Trigger)) {
      $(".tabs-features_tab-link-third:first").click();
      tab3HasBeenInView = true;
    }
    // tab 4
    if (!tab4HasBeenInView && isInViewport(tabs4Trigger)) {
      $(".tabs-features_tab-link-fourth:first").click();
      tab4HasBeenInView = true;
    }
  }, 100),
  { passive: true }
);

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
