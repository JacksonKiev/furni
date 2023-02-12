const formsSubmit = () => {
    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const postData = async (url, data) => {
        console.log('...Загрузка');
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

    forms.forEach(form => {

        const formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
        const formData = new FormData(form);
        console.log(formData);

        postData(formAction, formData)
            .then(res => {
                console.log(res);

            })
            .catch(() => {
                console.log("Что-то пошло не так");

            })
            .finally(() => {
                clearInputs();

            })


    })

};

export default formsSubmit;