
const fs = require('fs');

const save = (updatedArr) => {
    let stringyObj = JSON.stringify(updatedArr)
    fs.writeFileSync('./movies.json', stringyObj)
}

exports.add = (movieListArr, input) => {
    let movieObj = {movie: input};
    movieListArr.push(movieObj);
    save (movieListArr)
}


exports.deleteMovie = (movieListArr, input) => {
    let spliceIndex;
    movieListArr.map((movie, index) => {
        if (movie.movie === input) {
            spliceIndex = index
        }
    })
if (spliceIndex >= 0) {
    movieListArr.splice(spliceIndex, 1);
    save(movieListArr)
} else {
        console.log('Movie not found');
    }
}

    exports.updateMovie = (movieListArr, updateInput, newInput) => {
        let spliceIndex;
        movieListArr.map((movie, index) => {
            if (movie.movie === updateInput) {
                spliceIndex = index;
              
            }
        })
        try {
            movieListArr[spliceIndex].movie = newInput
            save(movieListArr);
        } catch (error) {
            console.log("Movie doesn't exist");
        }
    }  
    
   