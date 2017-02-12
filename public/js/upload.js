$(document).ready(() => {
    const input = document.querySelector('input[type="file"]')

    const data = new FormData()
    data.append('file', input.files[0])
    data.append('subject', $('#subject').val())
    data.append('class', $('#class').val())
    data.append('lecture', $('#lecture').val())
    data.append('university', $('#university').val())
    data.append('professor', $('#professor').val())
    data.append('date', $('#date').val())

    console.log($('#professor').val())
    console.log(input.files[0])
    fetch('/upload', {
      method: 'POST',
      body: data
    })
})
