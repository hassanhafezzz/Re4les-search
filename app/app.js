'use strict';

(function() {
    var app = angular.module('app',  ['rzModule']);

    app.controller('mainController', ['$scope','$http', '$q', '$log','dataService',mainController]);

    function mainController($scope,$http, $q, $log,dataService){
      var vm = this;

      // get initial data when loading the page
      dataService.getAllhouses()
          .then(function(result) {
              vm.houses = result.results;
              $scope.count = result.count;
              console.log("count"+$scope.count);
              $scope.pageNumber = Math.ceil($scope.count/ 15);
              if ($scope.pageNumber <= 1) {
                $scope.reachMaxLimit = true;
                $scope.reachMinLimit = true;
              }else if($scope.pageNumber > 1){
                $scope.reachMaxLimit = false;
                $scope.reachMinLimit = true;
              }
          })
          .catch(function(message) {
              console.log(message);
          })


      // initalize the vaule of the slider
      $scope.query = {
         price__gte :  1000000,
         price__lt : 15000000,
      };
      // slider configuration
      $scope.slider = {
          options: {
              floor: 0,
              ceil: 25000000,
              step: 100000
          }
      };

      // autocomplete Address Code -upcoming feature-
      // note that you must include googleapis script

      // var autocomplete = new google.maps.places.Autocomplete(document.getElementById('nav-search'), {
      //   types: ['geocode']
      // });
      // google.maps.event.addListener(autocomplete, 'place_changed', function() {
      //   $scope.$evalAsync(fillInAddress);
      // });
      //
      // function fillInAddress() {
      //   var place = autocomplete.getPlace();
      //   var tempPlace= [place.geometry.location.lat(), place.geometry.location.lng()];
      //   $scope.query.coords =  tempPlace.toString();
      // }


      $scope.search = function () {
        $scope.counter = 1;
        $http({
          method: 'GET',
          headers : {'Accept' : 'application/json'},
          url: 'http://re4les.cpgoods.com/api/listings/search.json',
          params: $scope.query
        }).then(function(response) {
           vm.houses = response.data.results;
           $scope.count = response.data.count;
           $scope.pageNumber = Math.ceil($scope.count/ 15);
           if ($scope.pageNumber > 1) {
             $scope.reachMaxLimit = false;
             $scope.reachMinLimit = true;
           }else {
             $scope.reachMaxLimit = true;
             $scope.reachMinLimit = true;
           }
        })
        .catch(function(response) {
          $log.error('Error retrieving projects for the keyword (): ' + response.statusText);
          return $q.reject('Error retrieving data.');
        })

      }

    // pagination script

      //intialize  counter
      $scope.counter = 1;
      // next page function
      $scope.next = function () {
        if ($scope.counter < $scope.pageNumber) {
          window.scrollTo(0, 0);
          $scope.counter++;
          $scope.reachMaxLimit = false;
          $scope.reachMinLimit = false;
          $http({
            method: 'GET',
            headers : {'Accept' : 'application/json'},
            url: 'http://re4les.cpgoods.com/api/listings/search.json?page='+$scope.counter,
            params: $scope.query
          }).then(function(response) {
             vm.houses = response.data.results;
             if ($scope.counter == $scope.pageNumber) {
               $scope.reachMaxLimit = true;
             }
          })
          .catch(function(response) {
            $log.error('Error retrieving projects for the keyword (): ' + response.statusText);
            return $q.reject('Error retrieving data.');
          })
        } else {
          $scope.reachMaxLimit = true;
          return false;
        }
      }
      // prev page function
      $scope.prev = function () {
        if ($scope.counter > 1) {
          window.scrollTo(0, 0);
          $scope.counter--;
          $scope.reachMinLimit = false;
          $http({
            method: 'GET',
            headers : {'Accept' : 'application/json'},
            url: 'http://re4les.cpgoods.com/api/listings/search.json?page='+$scope.counter,
            params: $scope.query
          }).then(function(response) {
             vm.houses = response.data.results;
             $scope.reachMaxLimit = false;
             if ($scope.counter == 1 ) {
               $scope.reachMinLimit = true;
             }
          })
          .catch(function(response) {
            $log.error('Error retrieving projects for the keyword (): ' + response.statusText);
            return $q.reject('Error retrieving data.');
          })
        }else {
          $scope.reachMinLimit = true;
          return false;
        }
      }

  }
}());
