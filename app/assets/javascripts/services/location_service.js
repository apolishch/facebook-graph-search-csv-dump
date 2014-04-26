angular.module('csv').service('locationService', ['$http', function(http){
  var service = {};
  service.query = function(name){
    var request = http.get('http://maps.googleapis.com/maps/api/geocode/json?address='+name+'&sensor=false');
    return(request);
  }
  return(service);
}]);
