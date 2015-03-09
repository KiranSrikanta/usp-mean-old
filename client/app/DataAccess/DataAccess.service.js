'use strict';

angular.module('uspappApp')
  .factory('DataAccess', ['UspServerRest', function (ServerEndPoints) {
    // Service logic
    // ...

    //var meaningOfLife = 42;

    // Public API here
    return {
      getAllNavigations: function () {
        return ServerEndPoints.Navigations().query().$promise;
      },

      getAllCarouselItems: function(){
        return ServerEndPoints.Carousels().query().$promise;
      },

      getTopProducts: function(){
        return ServerEndPoints.Products().query({TopProduct: true}).$promise;
      },

      getProductsFromCategory: function(Category){
        return ServerEndPoints.Products().query({ItemCategory: Category}).$promise;
      },

      getProductByName: function(Name){
        return ServerEndPoints.Products().get({id: Name}).$promise;
      },

      addToCart: function(Item){
        return ServerEndPoints.Cart().save(Item).$promise;
      },

      createOrder: function(Order){
        return ServerEndPoints.Order().save(Order).$promise;
      },

      getMyCart: function(){
        return ServerEndPoints.Cart().query().$promise;
      },

      getCartItem: function(ItemId){
        return ServerEndPoints.Cart().get({id: ItemId}).$promise;
      },

      removeFromCart: function(ItemId){
        return ServerEndPoints.Cart().remove({id: ItemId}).$promise;
      },

      updateCart: function(Item){
        return ServerEndPoints.Cart().update(Item).$promise;
      },

      getOrderByID: function(OrderID){
        return ServerEndPoints.Order().get({id: OrderID}).$promise;
      },

      updateOrder: function(Item){
        return ServerEndPoints.Order().update(Item).$promise;
      },

      getUserByID: function(OrderID){
        return ServerEndPoints.User().get({id: OrderID}).$promise;
      }
    };
  }]);