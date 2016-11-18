(function () {

    angular.module('app')
        .factory('dataService', ['$http', '$q', '$log', dataService]);

    function dataService($http, $q, $log) {
        return {
                getAllhouses:getAllhouses,
        };
        function getAllhouses() {
          return $http({
            method: 'GET',
            headers : {'Accept' : 'application/json'},
            url: 'http://re4les.cpgoods.com/api/listings/search.json'})
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving projects for the keyword (): ' + response.statusText);
                    return $q.reject('Error retrieving data.');
                })
        }
  }

}());
