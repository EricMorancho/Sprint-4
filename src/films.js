// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 let result = array.filter(person => person.director === director);
 console.log("EXERCICE 2 ->", result);
 return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let arrayDirector = getMoviesFromDirector(array, director);
  let arrayScore = arrayDirector.map(movie => movie.score);
  let scoreSum = arrayScore.reduce((previous, current) => previous + current);
  let average = parseFloat((scoreSum / arrayScore.length).toFixed(2));
  console.log("EXERCICE 3 ->", average);
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let films = array.map(titulo => titulo.title);
  let namesOrder = films.sort();
  let result = namesOrder.slice(0, 20);
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let year = array.map(films => films);
  let sortedMovies = year.sort((movie1, movie2) => {
    if (movie1.year === movie2.year){
      if (movie1.title < movie2.title){
        return -1;
      } else {
      return 1;
      }
    } else {
      return movie1.year - movie2.year;
    }
  });
  console.log("EXERCICE 4 ->", sortedMovies);
  return sortedMovies;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}

