$.ajax({
  url : "data/grammys.json",
  type : "GET",
  dataType : "json",
  success: function(data) {
    console.log(data)
    for(let i = 0; i < data.fields.length; i++) {
      var option = document.createElement('option')
      option.value = data.fields[i].field_id
      option.text = data.fields[i].field
      $('#category_types').append(option)
    }

    loadData(data, 1)

    $('#category_types').on('change', function(event) {
      let id = this.value
      loadData(data, id)
    })

  },
  error: function(error_msg) {
    console.log(error_msg);
  }
})

function loadData(data, id) {
  $('#nominees_section').empty();
  $('#category_section').empty();
  for(let i = 0; i < data.fields.length; i++) {
    if (data.fields[i].field_id == id) {
      var cat = document.createElement('h2')
      cat.textContent = data.fields[i].field
      var info = document.createElement('p')
      info.textContent = data.fields[i].description
      info.classList.add('description')
      $('#category_section').append(cat)
      $('#category_section').append(info)
      for (let j = 0; j < data.fields[i].categories.length; j++) {
        var ul = document.createElement('ul')
        var div = document.createElement('div')
        for (let k = 0; k < data.fields[i].categories[j].nominees.length; k++){
          var li = document.createElement('li')
          li.textContent = data.fields[i].categories[j].nominees[k].nominee
          if (k == data.fields[i].categories[j].winner_id){
            var span = document.createElement('span')
            span.textContent = 'WINNER'
            li.classList.add('winner')
            li.append(span)
          }
          ul.append(li)
          var artist = document.createElement('p')
          artist.textContent = data.fields[i].categories[j].nominees[k].artist
          ul.append(artist)
          var infoArtist = document.createElement('p')
          infoArtist.textContent = data.fields[i].categories[j].nominees[k].info
          ul.append(infoArtist)
        }
        var award = document.createElement('h3')
        award.textContent = data.fields[i].categories[j].category_name
        var aDescription = document.createElement('p')
        aDescription.textContent = data.fields[i].categories[j].description
        aDescription.classList.add('description')
        div.append(award)
        div.append(aDescription)
        div.append(ul)
        div.classList.add('container')
        $('#nominees_section').append(div)
        $('#nominees_section').append(document.createElement('hr'))
      }
    }
  }
}
