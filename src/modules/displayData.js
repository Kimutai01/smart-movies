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
    <div class="comments">
    <ion-icon name="chatbubble" class="message" id="${dat.id}"></ion-icon>
    </div>
    </div>
    </div>
  </div>
    `;
  });
};
export default displayData;
const popupModal = document.querySelector('.popup-overly');
const modal = document.querySelector('.modal1');
const close = document.querySelector('.btn-close');

document.querySelector('.display').addEventListener('click', (e) => {
  if (e.target.classList.contains('message')) {
    popupModal.style.display = 'block';
    modal.style.display = 'block';
  }
});

document.querySelector('.modal1').addEventListener('click', (e) => {
  const comments = document.querySelector('.comment-section');
  if (e.target.classList.contains('show')) {
    comments.style.display = 'block';
  } else {
    comments.style.display = 'none';
  }
});

close.addEventListener('click', () => {
  popupModal.style.display = 'none';
  modal.style.display = 'none';
});
