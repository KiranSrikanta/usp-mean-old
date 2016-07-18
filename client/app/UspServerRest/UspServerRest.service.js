'use strict';

angular.module('uspappApp')
  .factory('UspServerRest', ['$resource', function ($resource) {
    // Service logic
    // ...

    //var meaningOfLife = 42;

    // Public API here
    return {
      Navigations: function () {
        return $resource('http://localhost:9000/api/navigations/:id');
      },

      Carousels: function(){
        return $resource('http://localhost:9000/api/CarouselItems/:id');
      },

      Products: function(){
        return $resource('http://localhost:9000/api/Products/:id');
      },

      Cart: function(){
        return $resource('http://localhost:9000/api/Carts/:id', {id:'@_id'}, {'update': { method:'PUT' }});
      },

      Order: function(){
        return $resource('http://localhost:9000/api/Orders/:id', {id:'@_id'}, {'update': { method:'PUT' }});
      },

      User: function(){
        return $resource('http:/localhost:9000/api/UserProfiles/:id', {id:'@_id'});
      }
    };

  }]);
