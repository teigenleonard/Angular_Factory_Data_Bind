var myApp = angular.module( 'myApp', []);

myApp.controller( 'InputController', ['$scope','MovieService', function($scope, MovieService){
  // console.log('InputController');
  $scope.newMovie = MovieService.movie;
  console.log(MovieService.movie);
  $scope.addMovie = MovieService.addMovie;
}]);

myApp.controller( 'DisplayController', ['$scope', 'MovieService', function($scope, MovieService){
  // console.log('DisplayController');
  $scope.allTheMoviesObject = MovieService.allTheMoviesObject;
  console.log($scope.allTheMoviesObject.length);
}]);


myApp.factory('MovieService', [function(){

  var movie = {
    title : '',
    description : '',
    director : '',
    runTime : ''
  };

  var movieArray = [];
  var allTheMoviesObject = {
    movieArray : movieArray
  };

function addMovie(movie){
  // console.log('addMovie');
  var savedMovie = angular.copy(movie);
  movieArray.push(savedMovie);
  console.log(movieArray);
  movie.title = '';
  movie.director = '';
  movie.description = '';
  movie.runTime = '';
}


return {
  movie : movie,
  addMovie : addMovie,
  allTheMoviesObject : allTheMoviesObject
};

}]);
