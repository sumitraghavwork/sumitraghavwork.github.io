const scriptURL = 'https://script.google.com/macros/s/AKfycbxikQI-lHaHmDgM8jOrq1aXC-9aLdMrGUPqWZeuw1GshvdLAZfz294EJZxsi0MuG3_H/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message Sent Successfully";
        setTimeout(()=>{
            msg.innerHTML="";
        },5000);
        form.reset();
    })
      .catch(error => console.error('Error!', error.message))
  })



