var module = angular.module('trevligheten', [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('//');
    $interpolateProvider.endSymbol('//');
});

module.controller('insta', function ($scope, Instagram) {
  var user = '326924' // trevligheten

  Instagram.get(8, user).success(function(response){
    $scope.images = response.data
  })
});

module.factory('Instagram', ['$http',
  function($http) {
    var base = "https://api.instagram.com/v1";
    // get your own client id http://instagram.com/developer/
    var clientId = '8dff8e4d9107493486bc2c4fc136eb63';
    return {
      'get': function(count, user) {
        var request = '/users/' + user + '/media/recent';
        var url = base + request;
        // var url = "/v1/users/326924/media/recent?access_token=326924.1fb234f.f0cb30f9aa394f50bcd8c38f877726a4";

        var config = {
          'params': {
            'client_id': clientId,
            'count': count,
            'callback': 'JSON_CALLBACK'
          }
        };
        return $http.jsonp(url, config);
      }
    };
  }
]);
