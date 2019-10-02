class UI {
  constructor() {
    this.pics = document.getElementById('pics');
  }

  showPics(searchData, i) {
    const url = searchData.hits[i].previewURL;
    console.log(url + " " + i)
    const divi = document.createElement('div');
    divi.innerHTML = `
      <div class="col s3">
        <img class="img-fluid md-3" src="${url}">
      </div>
    `;
    this.pics.append(divi);
  }

  clearPics() {
    this.pics.innerHTML = ``;
  }

  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(div, search);
    setTimeout(() =>{
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert) {
      currentAlert.remove();
    }
  }
}