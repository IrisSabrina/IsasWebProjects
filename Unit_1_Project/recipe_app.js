$(() => {
  // FORM BUTTON EVENT LISTENER
  $('form').on('submit', (event) => {
    event.preventDefault();
    const userInput = $('input[type="text"]').val();

  // API CALL
  $.ajax({
    url: 'http://cors.io/?http://www.recipepuppy.com/api/?i=' + userInput,
    dataType: "jsonp",
    jsonpCallback: "logResults",
    // success: (data) => {
    // console.log(data);
    // }
    }
    )
    // DATA RETURN
    .then(
      (data) => {
        $('.container').show();
        for (let i = 0; i < data.results.length; i++){
          const $recipe = $('<div>');
          const $image = $('<img>').attr('src', data.results[i].thumbnail);
          const $link = $('<a>').attr('href', data.results[i].href);
          const $title = $('<h2>').text(data.results[i].title).appendTo($link);
          $recipe.append($image).append($link).appendTo('#results');

          // console.log(data.results[i].title);
          // console.log(data.results[i].href);
          // console.log(data.results[i].thumbnail);
        }
        // console.log(data.results);

        // DATA RETURN VARIABLES
        let currentResultIndex = 0;
        let numOfResults = $('#results').children().length - 1;
        let $currentResult = $('#results').children();

        // NEXT BUTTON
        $('.next').on('click', () => {
          console.log(numOfResults);
          // HIDE CURRENT IMAGE
          $currentResult.eq(currentResultIndex).hide();
          // INCREMENT THE currentResultIndex
          if(currentResultIndex < numOfResults) {
            currentResultIndex++;
          } else {
            currentResultIndex = 0;
          }
          // SHOW NEXT IMAGE
          $currentResult.eq(currentResultIndex).show();

        // PREVIOUS BUTTON
        $('.previous').on('click', () => {
          console.log('previousbuttonclicked');
          // HIDE CURRENT IMAGE
          $('#results').children().eq(currentResultIndex).hide();
          // DECREMENT THE currentResultIndex
          if(currentResultIndex > 0) {
              currentResultIndex--;
          } else {
            currentResultIndex = numOfResults;
          }
          // SHOW PREVIOUS IMAGE
          $('#results').children().eq(currentResultIndex).show();
        })
        })
      },
      () => {
        console.log('bad request');
      }
    );
  });
});


// Form for ingredient entry and submit button needed <-- DONE
// When ingredients are entered a carousel should pop up with the recipes <-- DONE

// Design needs to be responsive <-- PARTLY DONE
