const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        body: data
    });
    return await res.json();
};

const getResource = async (url) => {
    let res = await fetch(url, {
        method: 'GET',
        // crossorigin: true,
        // mode: 'no-cors'
    });
    if (!res.ok) {
        throw new Error(`could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
};


export {
    postData,
    getResource
};