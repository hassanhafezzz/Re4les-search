'use strict';

(function() {
    var app = angular.module('app',  ['rzModule']);

    app.controller('mainController', ['$scope','$http', '$q', '$log','dataService',mainController]);

    function mainController($scope,$http, $q, $log,dataService){
      var vm = this;

      dataService.getAllhouses()
          .then(function(result) {
              vm.houses = result.results;
              vm.next = result.next;
              vm.previous = result.previous;
          })
          .catch(function(message) {
              console.log(message);
          })

      $scope.query = {
         price__gte :  1000000,
         price__lt : 15000000,
      };
      $scope.slider = {
          options: {
              floor: 0,
              ceil: 25000000,
              step: 100000
          }
      };
      var autocomplete = new google.maps.places.Autocomplete(document.getElementById('nav-search'), {
        types: ['geocode']
      });
      google.maps.event.addListener(autocomplete, 'place_changed', function() {
        $scope.$evalAsync(fillInAddress);
      });

      function fillInAddress() {
        var place = autocomplete.getPlace();
        var tempPlace= [place.geometry.location.lat(), place.geometry.location.lng()];
        $scope.query.coords =  tempPlace.toString();
      }


      $scope.search = function () {

        $http({
          method: 'GET',
          headers : {'Accept' : 'application/json'},
          url: 'http://re4les.cpgoods.com/api/listings/search.json',
          params: $scope.query
        }).then(function(response) {
           vm.houses = response.data.results;
           console.log(response.data.results);
           console.log(vm.houses);
        })
        .catch(function(response) {
          $log.error('Error retrieving projects for the keyword (): ' + response.statusText);
          return $q.reject('Error retrieving data.');
        })

      }

      $scope.counter = 1;
      $scope.next = function () {
        window.scrollTo(0, 0);
        $scope.counter++;
        $http({
          method: 'GET',
          headers : {'Accept' : 'application/json'},
          url: 'http://re4les.cpgoods.com/api/listings/search.json?page='+$scope.counter,
          params: $scope.query
        }).then(function(response) {
           vm.houses = response.data.results;
           console.log(response.data.results);
           console.log(vm.houses);
        })
        .catch(function(response) {
          $log.error('Error retrieving projects for the keyword (): ' + response.statusText);
          return $q.reject('Error retrieving data.');
        })
      }
      $scope.prev = function () {
        window.scrollTo(0, 0);
        $scope.counter--;
        $http({
          method: 'GET',
          headers : {'Accept' : 'application/json'},
          url: 'http://re4les.cpgoods.com/api/listings/search.json?page='+$scope.counter,
          params: $scope.query
        }).then(function(response) {
           vm.houses = response.data.results;
           console.log(response.data.results);
           console.log(vm.houses);
        })
        .catch(function(response) {
          $log.error('Error retrieving projects for the keyword (): ' + response.statusText);
          return $q.reject('Error retrieving data.');
        })
      }
    }
}());
