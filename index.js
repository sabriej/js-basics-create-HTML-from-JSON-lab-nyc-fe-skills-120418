document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  
  // step 1: get the elements we need to interact with 
  const titanicButton = document.getElementById('Titanic');
  const terminatorButton = document.getElementById('Terminator 2');
  
  // step 2 - make the function that happens when we click
  const changeMovie = (movie) => {
    // top movie details
    const titleElement = document.getElementById('title');
    titleElement.innerHTML = movies[movie].title;
    const directorElement = document.getElementById('director');
    directorElement.innerHTML = movies[movie].director;
    const genreElement = document.getElementById('genre');
    genreElement.innerHTML = movies[movie].genre;
    const filmRating = document.getElementById('filmRating');
    filmRating.innerHTML = movies[movie].filmRating;
    
    // poster
    // change the <img src> to be equal to url in json
    const posterImg = document.getElementById('poster');
    posterImg.src = movies[movie].poster;
    
    // Description + score
    const descriptionElement = document.getElementById('description');
    descriptionElement.innerHTML = movies[movie].description;
    
    const scoreElement = document.getElementById('audienceScore');
    scoreElement.innerHTML = movies[movie].audienceScore;
    
    // cast (array of objects)
    const castUL = document.createElement('ul'); // <ul>
                                           // </ul>
    
    
    // the problem is we want to make an <li> FOR every cast member
    for (let person of movies[movie].cast) {
      const li = document.createElement('li'); // <li></li>
      li.innerHTML = person.role + ": " + person.actor; // Jack: Leonardo DiCaprio
      castUL.appendChild(li);
    }
    
    const castDiv = document.getElementById('cast');
    castDiv.appendChild(castUL);
    // <ul><li>asdfasf</li></li>asdfsad</li></ul>
    
    // reviews (array of objects)
    const reviewsUL = document.createElement('ul'); // <ul>
                                           // </ul>
    
    
    // the problem is we want to make an <li> FOR every cast member
    for (let review of movies[movie].reviews) {
      const li = document.createElement('li'); // <li></li>
      li.innerHTML = review.username + ": " + review.content; // Jack: Leonardo DiCaprio
      reviewsUL.appendChild(li);
    }
    
    const reviewsDiv = document.getElementById('reviews');
    reviewsDiv.appendChild(reviewsUL);
  };
  
  // step 3 - adding the event listener
  titanicButton.addEventListener('click', () => changeMovie('Titanic'));  
  terminatorButton.addEventListener('click', () => changeMovie('Terminator 2'));
});
