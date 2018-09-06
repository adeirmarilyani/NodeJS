var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
  $routeProvider.when('/', {
    controller: 'MahasiswaController',
    templateUrl: 'views/mahasiswa.html'
  })
  .when('/mahasiswa', {
    controller: 'MahasiswaController',
    templateUrl: 'views/mahasiswa.html'
  })
  .when('/mahasiswa/detail/:id', {
    controller: 'MahasiswaController',
    templateUrl: 'views/detail_mahasiswa.html'
  })
  .when('/mahasiswa/add', {
    controller: 'MahasiswaController',
    templateUrl: 'views/add_mahasiswa.html'
  })
  .when('/mahasiswa/edit/:id', {
    controller: 'MahasiswaController',
    templateUrl: 'views/edit_mahasiswa.html'
  })
});
