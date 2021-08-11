  const yargs = require ("yargs/yargs");
  const {hideBin} = require("yargs/helpers");
  const argv = yargs(hideBin(process.argv)).argv;
  const fs =  require ("fs");
    const { add, updateMovie, deleteMovie } = require('./utils');
const { ADDRCONFIG } = require("dns");

  const app = () => {
      let movieListArr 
        try {
            movieListArr = JSON.parse(fs.readFileSync('./movies.json'));
        } catch (error) {
            movieListArr = [];
        }
      if (argv.add) {
          add(movieListArr, argv.add)
      } else if (argv.delete) {
          deleteMovie(movieListArr, argv.delete)
      } else if (argv.update && argv.new) {
          updateMovie(movieListArr,  argv.update, argv.new)
      } else if (argv.list) {
          console.log(movieListArr)
      }
    }

app();
