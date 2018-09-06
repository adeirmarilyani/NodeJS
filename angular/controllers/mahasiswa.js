var myApp = angular.module('myApp');
myApp.controller('MahasiswaController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){

	$scope.getMahasiswa = function(){
		$http.get('/mahasiswa').then(function(data){
			$scope.mahasiswa = data;
		});
	}

  $scope.getMahasiswaById = function(){
    var id = $routeParams.id;
		$http.get('/mahasiswa/detail/'+id).then(function(data){
			$scope.mahasiswa = data;
			console.log(data);
		});
	}
  //
  $scope.addMahasiswa = function(){
		$http.post('/mahasiswa/add', $scope.mahasiswa).then(function(){
			window.location.href='#';
		});
	}
  //
  $scope.editMahasiswa = function(){
    var id = $routeParams.id;
		$http.put('/mahasiswa/edit/'+id, $scope.mahasiswa).then(function(data){
			$scope.mahasiswa = data;
			window.location.href='#';
		});
	}
  //
	$scope.removeMahasiswa = function(id){
		$http.delete('/mahasiswa/delete/'+id, $scope.mahasiswa).then(function(data){
			window.location.href='#';
		});
	}

}]);
