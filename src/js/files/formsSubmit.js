const formsSubmit = (form) => {
    const inputs = form.querySelectorAll('input');
    const messageBlock = document.createElement('div');
    const statusImg = document.createElement('img');
    statusImg.setAttribute('src', "../img/spinner.gif");


    const postData = async (url, data) => {

        console.log('...Загрузка');
        messageBlock.appendChild(statusImg);



        let res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.text();
    }

    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = '';
            input.classList.remove('_form-error');
        });


    }
    let keys = 0;

    messageBlock.appendChild(statusImg);
    form.appendChild(messageBlock);

    const formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
    const formData = new FormData(form);
    console.log(messageBlock);
    postData(formAction, formData)
        .then(res => {
            statusImg.remove();
            messageBlock.textContent = 'Ваше сообщение отправлено, мы с Вами свяжемся...';
            messageBlock.style.fontWeight = 'Bold';
            setTimeout(() => {
                messageBlock.remove();
            }, 2000)
        })
        .catch(() => {
            statusImg.remove();
            messageBlock.textContent = 'Что-то пошло не так....';
            setTimeout(() => {
                messageBlock.remove();
            }, 2000)
            console.log("Что-то пошло не так");

        })
        .finally(() => {
            clearInputs();

        })




};

export default formsSubmit;