var map,map1, infoWindow;
       var y=[2];
    var lat1,lng1;
    var geocoder;
    var address;
    var value=0;
      function check(name){
        console.log(name);
      if(name=="desktop")
        value=1;
      else if(name=="mobile")
        value=0;
      }



      function initMap() {
        geocoder = new google.maps.Geocoder();
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 12
        });
        
        map1 = new google.maps.Map(document.getElementById('map1'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 12
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            //yeha bata suru
             y[1]= position.coords.latitude;
             lat1=y[1].toFixed(6);
              y[2]= position.coords.longitude;
              lng1=y[2].toFixed(6);

  var latlng = new google.maps.LatLng(lat1, lng1);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
          console.log("Yeha1212");
         address= (results[1].formatted_address);
         console.log(address);
        } else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }

      });   


    setTimeout(myFunction, 500);
      function myFunction(){
             getWhether();
            console.log(address);
            infoWindow.setPosition(pos);
            infoWindow.setContent(address);
            if(value==1)
            infoWindow.open(map1);
            else
            infoWindow.open(map);
            map.setCenter(pos);
            map1.setCenter(pos);}
            }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }