document.addEventListener('DOMContentLoaded', function() {
   
    const form = document.querySelector('.newsletter form');  // Get form element from newsletter class
    const userInput = document.getElementById('email'); //get email field from form group
    const message = document.querySelector('.message'); //get message class, that will display message

    //attach event listener to form
    form.addEventListener('submit', submitEmail);

    //Submiting the form (email)
    function submitEmail(event) {

        event.preventDefault();  //prevent default action

        const email = userInput.value;  // get user's email input from the form 

        //check if valid email was entered
        if (!email) {
            message.textContent = "Please enter a valid email address.";
        }
        else {
            message.textContent = "Thank you! Your email address "+ email+ " has been added to our mailing list!" ;
            
            //Clear the input field
            userInput.value = " ";
        }
    };
})
