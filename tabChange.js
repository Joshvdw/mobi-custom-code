var Webflow = Webflow || [];
Webflow.push(function () {
  var tabTimeout;
  clearTimeout(tabTimeout);
  tabLoop();

  // define loop - cycle through all tabs
  function tabLoop() {
    tabTimeout = setTimeout(function () {
      var $next = $(".tabs-features_features-container-second")
        .children(".w--current:first")
        .next();

      if ($next.length) {
        $next.click(); // click resets timeout, so no need for interval
      } else {
        $(".tabs-features_tab-link-second:first").click();
      }
    }, 8000);
  }

  // reset timeout if a tab is clicked
  $(".tabs-features_tab-link-second").click(function () {
    clearTimeout(tabTimeout);
    tabLoop();
  });
});

  var Webflow = Webflow || [];
  Webflow.push(function () {
    var tabTimeout;
    clearTimeout(tabTimeout);
    tabLoop();

    // define loop - cycle through all tabs
    function tabLoop() {
      tabTimeout = setTimeout(function () {
        var $next = $(".tabs-features_features-container-third")
          .children(".w--current:first")
          .next();

        if ($next.length) {
          $next.click(); // click resets timeout, so no need for interval
        } else {
          $(".tabs-features_tab-link-third:first").click();
        }
      }, 8000);
    }

    // reset timeout if a tab is clicked
    $(".tabs-features_tab-link-third").click(function () {
      clearTimeout(tabTimeout);
      tabLoop();
    });
  });