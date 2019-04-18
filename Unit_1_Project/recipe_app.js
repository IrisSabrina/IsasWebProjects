$(() => {
   // $('form').on('submit', (event) => {
   //   event.preventDefault();
   //   const userInput = $('input[type="text"]');

   $.ajax({
      url: 'http://www.recipepuppy.com/api/', //+ userInput,
      dataType: "jsonp",
      jsonpCallback: "logResults",
      // success: (data) => {
        // console.log(data);
      // }
    }
    )
    .then(
      (data) => {
        $('#title').html(data.title)
        for (let i = 0; i < data.length; i++){
          $('#title').append(data[i].href);
          console.log(data);
        }
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
