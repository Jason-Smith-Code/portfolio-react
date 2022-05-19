/* CALCULATE BIRTHDAY */

const birthday = new Date("02/20/1984");
const today = new Date();
const diffInMs = Math.abs(today - birthday);
var result = parseInt(diffInMs / (1000 * 60 * 60 * 24 * 365));
document.getElementById("myAge").innerHTML = result;

//Cache reference to window and animation items
var $animation_elements = $(".hidden");
var $stat_container = $("#statContainer");
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = window_top_position + window_height;

  $.each($animation_elements, function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;
    //check to see if this current container is within viewport
    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      $element.removeClass("hidden");
      $element.addClass("fade-in-element");
    } else {
      $element.addClass("hidden");
      $element.removeClass("fade-in-element");
    }
  });

  $.each($stat_container, function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;
    //check to see if this current container is within viewport

    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      const cssElements = document.getElementsByClassName("css");
      const htmlElements = document.getElementsByClassName("html");
      const javascriptElements = document.getElementsByClassName("javascript");
      const reactElements = document.getElementsByClassName("react");
      const reduxToolkitElements =
        document.getElementsByClassName("redux-toolkit");
      const nodeElements = document.getElementsByClassName("node");
      const gitElements = document.getElementsByClassName("git");
      const jestElements = document.getElementsByClassName("jest");

      let cssStatMax = 15;
      var cssCounter = 0;
      var cssInterval = setInterval(function () {
        cssElements[cssCounter].style.opacity = "1";
        cssCounter++;
        if (cssCounter === cssStatMax) {
          clearInterval(cssInterval);
        }
      }, 100);

      let htmlStatMax = 14;
      var htmlCounter = 0;
      var htmlInterval = setInterval(function () {
        htmlElements[htmlCounter].style.opacity = "1";
        htmlCounter++;
        if (htmlCounter === htmlStatMax) {
          clearInterval(htmlInterval);
        }
      }, 100);

      let javascriptStatMax = 12;
      var javascriptCounter = 0;
      var javascriptInterval = setInterval(function () {
        javascriptElements[javascriptCounter].style.opacity = "1";
        javascriptCounter++;
        if (javascriptCounter === javascriptStatMax) {
          clearInterval(javascriptInterval);
        }
      }, 100);

      let reactStatMax = 11;
      var reactCounter = 0;
      var reactInterval = setInterval(function () {
        reactElements[reactCounter].style.opacity = "1";
        reactCounter++;
        if (reactCounter === reactStatMax) {
          clearInterval(reactInterval);
        }
      }, 100);

      let reduxToolkitStatMax = 9;
      var reduxToolkitCounter = 0;
      var reduxToolkitInterval = setInterval(function () {
        reduxToolkitElements[reduxToolkitCounter].style.opacity = "1";
        reduxToolkitCounter++;
        if (reduxToolkitCounter === reduxToolkitStatMax) {
          clearInterval(reduxToolkitInterval);
        }
      }, 100);

      let nodeStatMax = 4;
      var nodeCounter = 0;
      var nodeInterval = setInterval(function () {
        nodeElements[nodeCounter].style.opacity = "1";
        nodeCounter++;
        if (nodeCounter === nodeStatMax) {
          clearInterval(nodeInterval);
        }
      }, 100);

      let gitStatMax = 10;
      var gitCounter = 0;
      var gitInterval = setInterval(function () {
        gitElements[gitCounter].style.opacity = "1";
        gitCounter++;
        if (gitCounter === gitStatMax) {
          clearInterval(gitInterval);
        }
      }, 100);

      let jestStatMax = 12;
      var jestCounter = 0;
      var jestInterval = setInterval(function () {
        jestElements[jestCounter].style.opacity = "1";
        jestCounter++;
        if (jestCounter === jestStatMax) {
          clearInterval(jestInterval);
        }
      }, 100);
    }
  });
}

$window.on("scroll resize", check_if_in_view);
$window.trigger("scroll");