var map;
function GoogleMap() {
 
this.initialize = function(){
map = showMap();
}
 
 var showMap = function(){
var mapOptions = {
zoom: 10,
center: new google.maps.LatLng(-33, 151),
mapTypeId: google.maps.MapTypeId.ROADMAP
}
 
map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
 
return map;
 }

 this.getMapCenter = function () {
        console.log('addLocation');
        navigator.geolocation.getCurrentPosition(
            function (position) {
                map.setCenter({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
                map.setZoom(10);
            },
            function () {
                alert('Error getting location');
            });
        return false;
    }

}