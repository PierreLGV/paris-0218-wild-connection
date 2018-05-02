const form = document.getElementById('avatar-form')

form.addEventListener('submit', e => {
  e.preventDefault()

  const formData = new FormData(form)
  console.log(formData)

  fetch(`http://localhost:3456/upload`, {
    method: 'post',
    body: formData
  })
  .then(res => res.json())
  .then(res => document.getElementById('imagePath').src = `/css/img/${res.filename}`)
})