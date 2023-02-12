import {
    getResource
} from "./requests.js";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    btn.addEventListener("click", function (e) {
        e.preventDefault();
        getResource('https://furni.jacksonkiev.com/db.json')
            // getResource('/src/db.json')
            .then(res => {
                console.log(res);
                createCards(res);
            })
            .catch(error => console.log(error));
        this.remove();
    });

    function createCards(response) {
        console.log(response);
        response.forEach(({
            src,
            title,
            info
        }) => {
            console.log(src)
            let card = document.createElement('div');

            card.classList.add('section-7__card', 'card-section-7');
            card.innerHTML = `
 							<div class="card-section-7__img">
								<img src=${src} alt="">
							</div>
							<div class="card-section-7__content">
								<div class="card-section-7__title">${title}
								</div>
								<div class="card-section-7__info">${info}</div>
							</div>
							<a href="#" class="card-section-7__link"></a>
						</div>       
              `;
            console.log(card);
            document.querySelector(wrapper).appendChild(card);
        });
    }
    // <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
    //       <div class=styles-block>
    //           <img src=assets/img/styles-5.jpg alt>
    //           <h4>Пастелью</h4>
    //           <a href="#">Подробнее</a>
    //       </div>
    //    </div>

};
export default showMoreStyles;