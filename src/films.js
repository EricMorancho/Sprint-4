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
  console.log("EXERCICE 5 ->", sortedMovies);
  return sortedMovies;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let moviesGenre = array.filter(filmGenre => filmGenre.genre.includes(genre) && filmGenre.score != 0);
  let ScoreGenre = moviesGenre.map(n => n.score);
  let scoreSum = ScoreGenre.reduce((previous, current) => previous + current);
  let average = parseFloat((scoreSum / ScoreGenre.length).toFixed(2));
  console.log("EXERCICE 5 ->", average);
  return average;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let hours = array.map(film => film.duration.split("h"));
  
  const minutes = [];
  hours.forEach(element => {
    const minDuration = [];
    if (element.length > 1 && element[1].includes("min")){
      minDuration.duration = Number(element[0]*60) + Number(element[1].replace("min", ""));
    } else if (element[1].includes("min")){
      minDuration.duration =  Number(element[0].replace("min", ""))
    } else {
      minDuration.duration = Number(element[0]*60)
    }
    minutes.push(minDuration.duration)
    //console.log(minutes)
  });
  console.log(minutes)
  return minutes;
  
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

//hoursToMinutes(movies)