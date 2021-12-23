'use estrict';

const btnfoto = document.querySelector('#cloudy');
const campoUrl = document.querySelector('#url');

let widgetSubida = cloudinary.createUploadWidget({
    cloudName : 'divshop',
    uploadPreset: 'ayaya!1502'
}, (err, result) => {
    if(!err && result && result.event === 'success'){
        console.log('imagen subida con exito', result.info);
        /* alert(result.info.secure_url) */
        campoUrl.value = result.info.secure_url;
    }
});

btnfoto.addEventListener('click', () => {
    widgetSubida.open();
}, false)

/* btnfoto.addEventListener('click', () => {
    campoUrl.value = 'prueba';
}) */