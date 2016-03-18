var app = angular.module("MoviesApp", []);

app.controller("MovieController", function($scope, $http){





    var movies=[
    			{title:"Avatar", rating: 5, year: 2009, plot: "tis is plot" },
    			{title:"Star wars",rating: 8, year: 2015, plot: "some flying saucers" },
    			{title:"Deadpool",rating: 6,  year: 2016, plot: "Guy with tight red suit" },
    			{title:"pasupati prasad",rating: 9, year: 2016, plot: "at pasupati... some thing something in movie" }
    		   ];

    $scope.movies = movies;

    $scope.removeMovie = function(index){
    	movies.splice(index, 1);

    }

	var newMovie;
    $scope.addMovie = function(movie){

    	var newMovie = {
			    		title: movie.title, 
			    		rating: movie.rating, 
			    		year: movie.year, 
			    		plot: movie.plot
    	} 	

    	movies.push(newMovie);
    }

    $scope.selectMovie = function(movie){
    	$scope.movie = movie;
    }

    $scope.updateMovie= function(){
    	alert($scope.movie.title);
    }

})