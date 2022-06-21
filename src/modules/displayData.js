const displayData = (data) => {
  const div = document.querySelector('.display');
  data.forEach((dat) => {
    div.innerHTML += `
  <div class="card text-center">
  <div class="card-title text-light mt-3">
  <h5>${dat.name}</h5>
  </div>
  <div class="card-body">
  <img class="show-img" src="${dat.image.medium}">
  </div>
  <div class="card-footer m">
  <div class="love-div mt-3">
  <div class="likes">
  <ion-icon name="heart" class="love mt-1 "></ion-icon>
  <p class="text-light">20</p>
  </div>
  
  <ion-icon name="chatbubble" class="message"></ion-icon>
  </div>
  
 
  </div>
</div>
  `;
  });
};
export default displayData;
