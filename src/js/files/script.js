// Підключення функціоналу "Чертоги Фрілансера"
import {
    isMobile
} from "./functions.js";
// Підключення списку активних модулів
import {
    flsModules
} from "./modules.js";

import showMoreStyles from "./showMoreStyles.js"
import {
    formSubmit
} from "./forms/forms.js";
import formsSubmit from "./formsSubmit.js";
import animation from "./animation.js";


function formValidationAndSubmit(check) {
    const form = document.querySelector(check);
    const itemsValidate = form.querySelectorAll('[data-val]');
    const itemAddError = (item, classAdd) => {
        item.classList.add(classAdd);
        item.parentElement.classList.add(classAdd);
        return 1;

        //             itemValidate.parentElement.insertAdjacentHTML('beforeend', `
        // <div class="error_message">${itemValidate.dataset.message}</div>
        // `);
    }

    form.addEventListener("submit", function (e) {

        let error = 0;
        e.preventDefault();

        if (form.querySelectorAll('.error_message').length > 0) {
            form.querySelectorAll('.error_message').forEach(item => {
                item.remove();
            })
        };

        itemsValidate.forEach(itemValidate => {
            if (itemValidate.dataset.val === 'email') {
                if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(itemValidate.value))) {
                    error = itemAddError(itemValidate, '_form-error');
                }
            } else
            if (!/^[A-Za-z]+$/.test(itemValidate.value)) {
                error = itemAddError(itemValidate, '_form-error');
            }
        })

        if (error === 0) {

            // e.target.submit();

            formsSubmit();
            form.reset();
            itemsValidate.forEach(itemValidate => {
                itemValidate.classList.remove('_form-error');
            })
            console.log('formSubmit');

        }
        /*
        const itemAddError = (item, classAdd) => {
            item.classList.add(classAdd);
            item.parentElement.classList.add(classAdd);

            //             itemValidate.parentElement.insertAdjacentHTML('beforeend', `
            // <div class="error_message">${itemValidate.dataset.message}</div>
            // `);
        }
        */


    });
}


function scrollToTop(elem, button) {
    const elemTo = document.querySelector(elem),
        buttonTrigger = document.querySelector(button);

    buttonTrigger.addEventListener("click", function (e) {
        elemTo.scrollIntoView({
            behavior: 'smooth'
        });
    });
}

formValidationAndSubmit('.section-8__form');
showMoreStyles('.section-7__link', '.section-7__cards');
animation();
const atr = document.querySelector('.buttons-section-1__button');

scrollToTop('.section-1', '.topToButton');