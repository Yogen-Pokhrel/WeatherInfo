
        function GetLocation() {
            console.log(address);
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();
                    pos={
                        lat:latitude,
                        lng:longitude
                    };
                    console.log("yeha ni aayo");
                    var latlng = new google.maps.LatLng(latitude.toFixed(6), longitude.toFixed());
                    geocoder.geocode({'latLng': latlng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
          console.log("check ma ");
         address= (results[1].formatted_address);
         console.log(address);
        } else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }

      });   

                setTimeout(myFunction1, 500);
                    function myFunction1(){
                    infoWindow.setPosition(pos);
                    infoWindow.setContent(address);
                    if(value==1)
                     infoWindow.open(map);
                   else
                    infoWindow.open(map1);
                     map.setCenter(pos);
                    map1.setCenter(pos);
                }
                } else {
                    alert("Request failed.")
                }
            });
        };
    