$(() => {
   $('form').on('submit', (event) => {
     event.preventDefault();
     const userInput = $('input[type="text"]').val();

   $.ajax({
      url: 'http://www.recipepuppy.com/api/?i=' + userInput,
      dataType: "jsonp",
      jsonpCallback: "logResults",
      // success: (data) => {
        // console.log(data);
      // }
    }
    )
    .then(
      (data) => {

        for (let i = 0; i < data.results.length; i++){
          // $('#title').html(data.title)
          // $('#title').append(data[i].href);
          const $results = $('<dt>').text('title');
          const $recipeTitle = $('<dd>').text(data.results[i].title);
          $('#results').append($results).append($recipeTitle);
          console.log(data.results[i].title);
          console.log(data.results[i].href);
          console.log(data.results[i].thumbnail);
        }
        // console.log(data.results);
      },
      () => {
        console.log('bad request');
      }
    );
  });
});


// Form for ingredient entry and submit button needed
// When ingredients are entered a modal should pop up with the recipes
    // modal will need a close button and a scroll bar

// Design needs to be responsive
// Note: Phone and tablet designs will need a different main font
