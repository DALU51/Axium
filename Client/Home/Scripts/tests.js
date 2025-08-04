const get = document.querySelectorAll('.Car_container a')



function doSomething() {
  console.info("DOM loaded");
  console.log(document.readyState)
}

if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", doSomething);
  
} else {
  // `DOMContentLoaded` has already fired
  console.log("nothing")
}

// document.addEventListener("DOMContentLoaded", (event) => {
//   console.log("DOM fully loaded and parsed");
// });