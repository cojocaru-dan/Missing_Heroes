import {toExport as movies} from "./data.js";

// You can use the `movies` array here
// Please write every correction and modification of the data to this file by updating the `movies` array
// using for loops, conditionals and bracket and dot notation
for (const movie of movies) {
    if (movie.director === "") {
        movie.director = "Martin Scorsese";
    }
}
console.log(movies);

for (const movie of movies) {
    if (movie.title === "Beetlejuice") {
        movie.year += 1000;
    } else if (movie.title === "Apocalypto") {
        movie.year += 2000;
    } else if (movie.title === "Planet 51") {
        movie.year += 2000;
    } else if (movie.title === "The Deer Hunter") {
        movie.year += 1000;
    } else if (movie.title === "Shutter Island") {
        movie.year += 2000;
    }
}

console.log(movies);

for (const movie of movies) {
    for (let i = 0; i < movie["actors"].length; i++) {
        if (movie.actors[i] === "Leonardo da Vinci") {
            movie.actors[i] = "Leonardo DiCaprio";
        }
    }
}

console.log(movies);

for (const movie of movies) {
    for (let i = 0; i < movie["genres"].length; i++) {
        if (movie.genres[i] === "") {
            movie.genres[i] = "Drama";
        }
    }
}

console.log(movies);

let allActors = [];

for (const movie of movies) {
  allActors = allActors.concat(movie.actors);
}

allActors = Array.from(new Set(allActors));
let allTheActors = allActors.length;
console.log(allTheActors);

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

toExport = [...movies];

export {toExport}
