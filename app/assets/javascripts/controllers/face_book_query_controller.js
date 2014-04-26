angular.module('csv').controller('faceBookQueryController', ['$scope', 'facebookQueryService', function(scope, facebookQueryService){
  scope.submitSearch = function(){
    facebookQueryService.query(scope.fbToken, scope.businessType, scope.location, scope.file);
  }
}]);
