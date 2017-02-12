$(document).ready(() => {
  $('.upload').click(() => {

    const input = document.querySelector('input[type="file"]')

    const data = new FormData()
    data.append('file', input.files[0])
    data.append('subject', $('#subject').val())
    data.append('class', $('#class').val())
    data.append('lecture', $('#lecture').val())
    data.append('university', $('#university').val())
    data.append('professor', $('#professor').val())
    data.append('date', $('#date').val())

    console.log(input.files[0])

  const file = $('.file').get(0).files;

  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploads[]', file, file.name);
    }

    $.ajax({
      url: '/upload',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!' + data);
      },
      xhr: function() {
        var xhr = new XMLHttpRequest();


        return xhr;
      }
    });

  }
})
    $.ajax('/upload', {
      method: 'POST',
      cache: false,
      contentType: false,
      processData: false,
      body: data,
    })
  })
})
// accept="video/*"
