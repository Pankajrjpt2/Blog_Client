"use strict";
!(function () {
  const e = document.querySelector(".navbar__right"),
    i = e.children,
    t = e.childElementCount;
  e.addEventListener("click", function (e) {
    "navbar__right-link" == e.target.className &&
      ((function () {
        for (let e = 0; e < t; e++)
          i[e].children[0].classList.remove("navbar__right-link--active");
      })(),
      e.target.classList.add("navbar__right-link--active"));
  });
})();
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  direction: "horizontal",
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});





const container = document.getElementById('container');
let blog = [];

fetch("http://localhost:8001/v1/blog", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((result) => {
    return result.json();
  })
  .then((result) => {
      blog = result.data;
      console.log(result.data)
      blog.map(data => {
          addElement(data.title, data.thumbnail, data.content, data._id);
      })
  })
  .catch((err) => {
    console.log(err);
  });


  const addElement = (title, thumbnail, content) => {
      const item = `
        <div class="blog__card">
            <div class="blog__thumbnail">
              <img
                src="${thumbnail}"
                alt="${title}"
                class="blog__thumbnail-img"
              />
            </div>

            <div class="blog__details">
              <h2 class="blog__details-header">
                ${title}
              </h2>

              <p class="blog__details-desc">
                 ${content}
              </p>
              <div class="blog__button">
                <button class="blog__button-btn primary__btn" title="View" type="button">View</button>
              </div>
            </div>
      `;

    container.insertAdjacentHTML('beforeend', item)
  }




const button = document.querySelector('.newsletter__button');

button.addEventListener('click', function(){
    let emailId = document.getElementById('email').value;
    

    fetch('http://localhost:8001/v1/send', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({email:emailId})
    })
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err);
    })
})

