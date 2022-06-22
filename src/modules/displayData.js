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
    <ion-icon name="chatbubble" class="message" id="btn-${dat.id}"></ion-icon>
    </div>
    </div>
    </div>
  </div>
    `;
  });
};

export const displayPopup = (data) => {
  const pop = document.querySelector('.modal1');
  data.forEach((dat) => {
    const showModalBtn = document.querySelectorAll(`[id=btn-${dat.id}]`);
    showModalBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        showPop();
        pop.innerHTML = `
         <div class="modal-content ">
               <div class="modal-header">
                 <h3 class="modal-title" id="movie-title">${dat.name}</h3>
                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                <div class="content-section">
                 <div class="content-div">
                   <div class="img-div">
                   <img src="${dat.image.medium}" alt="image" class="images">
                   </div>
                  <div class ="content-items">
                  <div class="sub-title">
                  <div class="header1">
                  <p class="name"><span class = "mr-4">Name:</span>${dat.name}</p>
                  <p class="year"><span class = "mr-4">Year:</span>${dat.ended}</p>
                  </div>
                  <div class="header2">
                  <p class="language"><span class = "mr-4">Language:</span>${dat.language}</p>
                  <p class="genres"><span class = "mr-4">Genres:</span>${dat.genres}</p>
                  </div>
                  <div class="header3">
                    <p class="type"><span class = "mr-4">Type:</span>${dat.type}</p>
                  <p class="rating"><span class = "mr-4">Rating:</span>${dat.rating.average}<ion-icon name="star" class="rating1"></ion-icon></p>
                  </div>
                 </div>
                 <div class="paragraph">
                  <p>
                  ${dat.summary}
                  </p>
                  <div class="show-msg">
                    <ion-icon name="chevron-up-circle-outline" class="show"></ion-icon>
                    <p>Show comments</p>
                  </div>
                 </div>
                 <div class="comment-section">
                   <div class="comment-div">
                     <div class="comment-header">
                       <p class="comment-title">Comments</p>
                       <p class="comment-count">3</p>
                     </div>
                     <div class="scroll-div">
                       <ul class="scroll">
                         <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, consequuntur.</li>
                         <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, consequuntur.</li>
                         <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, consequuntur.</li>
                         <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, consequuntur.</li>
                         <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, consequuntur.</li>
                         <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, consequuntur.</li>
                       </ul>
                     </div>
                   </div>
                  </div>
                </div>
               </div>
                  </div>
                 </div>  
                 <div class="form container">
                   <div class="comment-form">
                       <input type="hidden" class="id" value ="${dat.id}">
                       <input type="text" class="userName" placeholder="Enter your name">
                       <input class="CommentMsg" placeholder="Write a comment">
                       <ion-icon name="arrow-back-outline" class="send-data"></ion-icon>
                    </div>
                  </div>
               </div>
         `;
      });
    });
  });
};

const showPop = () => {
  document.querySelector('.display').addEventListener('click', (e) => {
    if (e.target.classList.contains('message')) {
      popupModal.style.display = 'block';
      modal.style.display = 'block';
    }
  });
};
export default displayData;
const popupModal = document.querySelector('.popup-overly');
const modal = document.querySelector('.modal1');

document.querySelector('.modal1').addEventListener('click', (e) => {
  const comments = document.querySelector('.comment-section');
  if (e.target.classList.contains('show')) {
    comments.style.display = 'block';
  } else {
    comments.style.display = 'none';
  }
  if (e.target.classList.contains('btn-close')) {
    popupModal.style.display = 'none';
    modal.style.display = 'none';
  }
});
