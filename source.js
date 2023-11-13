const clock = document.querySelector('#clock');
setInterval(
    function(){
    let now = new Date().toLocaleString([], { hour12: true});
    clock.innerHTML =  now;   

},1000
);

if ("geolocation" in navigator) {
    // Prompt user for permission to access their location
    navigator.geolocation.getCurrentPosition(
      // Success callback function
      (position) => {
        // Get the user's latitude and longitude coordinates
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
  
        // Do something with the location data, e.g. display on a map
       
        document.querySelector('.location').innerHTML = `Latitude: ${lat}, longitude: ${lng}`;

      },
      // Error callback function
      (error) => {
        // Handle errors, e.g. user denied location sharing permissions
        document.querySelector('.location').innerHTML = ("Error getting user location:", error);
      }
    );
  }
  else {
    // Geolocation is not supported by the browser
    document.querySelector('.location').innerHTML  = ("Geolocation is not supported by this browser");
}
