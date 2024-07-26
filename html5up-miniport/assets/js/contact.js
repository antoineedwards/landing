const name = document.getElementById("name")
const email = document.getElementById("email")
const subject = document.getElementById("subject")
const message = document.getElementById("message")

function sendEmail() {
    Email.send({
        Host : "smtp.mailslurp.com",
        Username : "<mailslurp username>",
        Password : "<mailslurp password>",
        To : 'recipient@example.com',
        From : "sender@example.com",
        Subject : "Test email",
        Body : "<html><h2>Header</h2><strong>Bold text</strong><br/></br><em>Italic</em></html>"
    }).then(message => alert(message)
    );
    }