const name = document.getElementById("name")
const email = document.getElementById("email")
const subject = document.getElementById("subject")
const message = document.getElementById("message")

emailjs.send('service_id', 'template_id', {
    to_email: 'edwardsantoine333@gmail.com',
    from_name: email,
    subject: 'Test email',
    message_html: '<html><h2>Header</h2><strong>Bold text</strong><br><em>Italic</em></html>'
}, 'user_id')
.then(response => alert('Email sent successfully'))
.catch(error => alert('Failed to send email'));
