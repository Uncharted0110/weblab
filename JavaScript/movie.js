function createMovie(title, duration, stars) {
    return {
        title: title,
        duration: duration,
        stars: stars
    };
}

function printMovieInfo(movie) {
    const starsList = movie.stars.join(", "); 
    console.log(`${movie.title} lasts for ${movie.duration} minutes. Stars: ${starsList}.`);
}

function askMovieDetails() {
    const title = prompt("Enter the movie title:");
    const duration = prompt("Enter the movie duration (in minutes):");
    const starsInput = prompt("Enter the movie stars (separated by commas):");

    const stars = starsInput.split(",").map(star => star.trim()); 
    const newMovie = createMovie(title, parseInt(duration), stars);
    return newMovie;
}

const moviesDatabase = [];

function addMovie() {
    const movie = askMovieDetails();
    moviesDatabase.push(movie);
    console.log(`Movie "${movie.title}" has been added to your database.`);
}

function fetchMovieDetails() {
    const title = prompt("Enter the title of the movie you want to fetch:");

    const movie = moviesDatabase.find(movie => movie.title.toLowerCase() === title.toLowerCase());

    if (movie) {
        printMovieInfo(movie);
    } else {
        console.log("Sorry, no movie found with that title.");
    }
}

function movieMenu() {
    let continueRunning = true;

    while (continueRunning) {
        const action = prompt("Choose an option:\n1. Add a movie\n2. Fetch movie details\n3. Exit");

        switch (action) {
            case "1":
                addMovie();
                break;
            case "2":
                fetchMovieDetails();
                break;
            case "3":
                console.log("Goodbye!");
                continueRunning = false;
                break;
            default:
                console.log("Invalid option. Please try again.");
        }
    }
}

movieMenu();
