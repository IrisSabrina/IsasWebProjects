$(() => {
   $('form').on('submit', (event) => {
     event.preventDefault();
     const userInput = $('input[type="text"]');

   $.ajax({
      url: 'http://www.recipepuppy.com/api/' + userInput,
      dataType: "jsonp",
      jsonpCallback: "logResults"
    }
    ).then(
      (data) => {
        $('#title').html(data.title)
        $('#href').html(data.href)
        $('#ingredients').html(data.ingredients)
        $('#thumbnail').html(data.thumbnail)
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
