function sendEnquiryForm() {
    var formData = {
        "name": document.getElementById('name').value,
        "email": document.getElementById('email').value,
        "message": document.getElementById('message').value,
        "location": document.getElementById('location').value
    };

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://example.com/send-enquiry', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // Handle response
            if (xhr.status === 200) {
                console.log('Enquiry sent successfully!');
            } else {
                console.error('Error sending enquiry.');
            }
        }
    };
    xhr.send(JSON.stringify(formData));
}