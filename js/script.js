var module = angular.module('trevligheten', [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('/*/');
    $interpolateProvider.endSymbol('/*/');
});

module.controller('insta', function ($scope, Instagram) {
  var user = '326924' // trevligheten

  Instagram.get(8, user).success(function(response){
    $scope.images = response.data;
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

module.controller('flickr', function ($scope, Flickr) {
  Flickr.get().success(function (response){
    $scope.images = response.photos.photo;
  });
});

module.factory('Flickr', ['$http', function ($http) {
  // var url = "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=328531f8cc4cb07d65e1a4316c8c5a1d&user_id=48988818%40N08&format=json"
  var url = "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=328531f8cc4cb07d65e1a4316c8c5a1d&user_id=48988818%40N08&format=json&nojsoncallback=1";
  return{
    'get': function() {
      return $http.get(url);
    }
  };
}]);
