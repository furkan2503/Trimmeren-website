/*function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        to_name: document.getElementById("toName").value,
        message: document.getElementById("msg").value,
    };

    //emailjs.send('gmail', 'template_v5lpz1b', tempParams)
    emailjs.send("service_1jpdis6","template_v5lpz1b")
    .then(function(res){
        console.log("success", res.status);
    })
}*/

// //Second function
// const btn = document.getElementById('button');

// document.getElementById('form')
//   .addEventListener('submit', function(event) {
//     event.preventDefault();

//     btn.value = 'Sending...';

//     const serviceID = 'default_service';
//     const templateID = 'template_v5lpz1b';

//     emailjs.sendForm(serviceID, templateID, this)
//       .then(() => {
//         btn.value = 'Send Email';
//         alert('Sent!');
//       }, (err) => {
//         btn.value = 'Send Email';
//         alert(JSON.stringify(err));
//       });
//   });
