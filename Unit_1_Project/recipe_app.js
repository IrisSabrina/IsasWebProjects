$(() => {
  $('form').on('submit', (event) => {
    event.preventDefault();
    const userInput = $('input[type="text"]').val();
//     $.ajax(
//     {
//       url:'http://www.recipepuppy.com/api/',
//       data: {
//       "$limit" : userInput
//       }
//     }
//     ).then(
//       (data) => {
//         $('#police').html(data)
//         for (let i =0; i < data.length; i ++){
//           $('#complaint').append(data[i].complaint_type)
//           $('#res').append(data[i].resolution_action_updated_date)
//         }
//         console.log(data);
//       }
//     )
//   })
// })

// Form for ingredient entry and submit button needed
// When ingredients are entered a modal should pop up with the recipes
    // modal will need a close button and a scroll bar

// Design needs to be responsive
// Phone and tablet designs will need a different main font
