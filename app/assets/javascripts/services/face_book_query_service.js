angular.module('csv').service('facebookQueryService', ['$http','locationService', function(http, locationService){
  var service = {};
  service.query = function(fbToken, businessType, location, file){
    locationService.query(location).then(function(response){
      http({method: 'POST',url: '/api/facebook/', data: {
        token: fbToken,
        business: businessType,
        locale: response.data.results[0].geometry.location,
        path: file
      }, headers: {
        'Content-Type': 'application/json'
      }}).then(function(fbResponse){
        service.response = fbResponse;
      });  
    });
  }
  return(service);
}]);
