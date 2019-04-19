$(() => {

  // EVENT LISTENERS

  // form button
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
        $('.container').show();
        for (let i = 0; i < data.results.length; i++){
          // $('#title').html(data.title)
          // $('#title').append(data[i].href);
          // const $results = $('<dt>').text('title');
          // const $recipeTitle = $('<dd>').text(data.results[i].title);
          //
          // const $address = $('<dt>').text('href');
          // const $webAddress = $('<dd>').text(data.results[i].href);
          //
          // const $image = $('<dt>').text('thumbnail');
          // const $thumbnail = $('<dd>').text(data.results[i].thumbnail);

          const $recipe = $('<div>');
          const $image = $('<img>').attr('src', data.results[i].thumbnail);
          const $link = $('<a>').attr('href', data.results[i].href);
          const $title = $('<h2>').text(data.results[i].title).appendTo($link);
          $recipe.append($image).append($link).appendTo('#results');



          // $('#results').append($results).append($recipeTitle).append($address).append($webAddress).append($image).append($thumbnail);

          console.log(data.results[i].title);
          console.log(data.results[i].href);
          console.log(data.results[i].thumbnail);
        }
        // console.log(data.results);
        // VARIABLES
        let currentResultIndex = 0;
        let numOfResults = $('#results').children().length - 1;
        let $currentResult = $('#results').children();

        // next button
        $('.next').on('click', () => {
          console.log(numOfResults);
          // hide the current image
          $currentResult.eq(currentResultIndex).hide();
          // increment the currentImgIndex
          if(currentResultIndex < numOfResults) {
            currentResultIndex++;
          } else {
            currentResultIndex = 0;
          }
          // show the next image
          $currentResult.eq(currentResultIndex).show();

        // previous button
        $('.previous').on('click', () => {
            console.log('previousbuttonclicked');
            // hide the current image
            $('#results').children().eq(currentResultIndex).hide();
            // decrement the currentImgIndex
            if(currentResultIndex > 0) {
              currentResultIndex--;
            } else {
              currentResultIndex = numOfResults;
            }
            // show the previous image
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
// When ingredients are entered a carousel should pop up with the recipes <-- Partly done

// Design needs to be responsive
// Note: Phone and tablet designs will need a different main font
