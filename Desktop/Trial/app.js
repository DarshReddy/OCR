const pixabay = new Pixabay;
const ui = new UI;

const searchPics = document.getElementById('searchPics');

searchPics.addEventListener('keyup', (e) => {
  const picText = e.target.value;
  
  if(picText !== '') {
    pixabay.getPics(picText)
      .then(data => {
        const hit = data.Data.totalHits;
        console.log(hit)
        if(hit == 0 ) {
          ui.showAlert('Pics not Found', 'alert alert-danger');
        } else {
          ui.clearPics();
          for(i=0;i<20 && i<hit ;i++)
            ui.showPics(data.Data, i);
        }
      })
  } else {
    ui.clearPics();
  }
})