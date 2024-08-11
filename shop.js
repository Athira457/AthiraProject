document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault(); 


    const restaurant = document.getElementById('restaurant').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const guests = document.getElementById('guests').value;


    const confirmationMessage = `Thank you, ${name}! Your seat at ${restaurant} for ${guests} guest on ${date} at ${time} has been successfully booked. Check mail.`;
    document.getElementById('confirmationMessage').innerText = confirmationMessage;

 
    document.getElementById('bookingForm').reset();
});

