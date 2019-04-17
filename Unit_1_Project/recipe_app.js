$(() => {
  // $('form').on('submit', (event) => {
  //   event.preventDefault();
  //
  //   const userInput = $('input[type="text"]');
  $.ajax({
    url: 'http://www.recipepuppy.com/api/',
    dataType: "jsonp",
    jsonpCallback: "logResults",
    success: (data) => {
      console.log(data);
    }
  });
})

// Form for ingredient entry and submit button needed
// When ingredients are entered a modal should pop up with the recipes
    // modal will need a close button and a scroll bar

// Design needs to be responsive
// Note: Phone and tablet designs will need a different main font
