const scriptURL =
  'https://script.google.com/macros/s/AKfycbwElebV2ONtMTMvS2DiiEJxyFom5W5hXLc0R-bCNx6vCM1EFCP5CL8hc9Bn75mZa5S8/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = 'Message Sent Successfully'
      setTimeout(() => {
        msg.innerHTML = ''
      }, 5000)
      form.reset()
    })
    .catch((error) => console.error('Error!', error.message))
})

let open = false

function openmenu() {
  let menu = document.getElementById('burger_items')

  if (open) {
    menu.style.display = 'none'
    open = false
  } else {
    menu.style.display = 'block'
    open = true
  }
}
