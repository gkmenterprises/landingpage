function sendEmail(e) {
  var email = "sales@gkmenterprises.in"; // Updated email address
  var name = e.parameter.name;
  var phone = e.parameter.phone;
  var userEmail = e.parameter.email;
  var location = e.parameter.location; // Properly handling the location field
  var requirement = e.parameter.requirement;
  var message = e.parameter.message;

  // Build the email body
  var subject = 'New Form Submission';
  var emailBody = `Name: ${name}\nPhone: ${phone}\nEmail: ${userEmail}\nLocation: ${location}\nRequirement: ${requirement}\nMessage: ${message}`;

  // Send email
  MailApp.sendEmail(email, subject, emailBody);
}