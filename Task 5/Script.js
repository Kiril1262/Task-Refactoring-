let images = document.querySelectorAll('#gallery img');
images.forEach(img =>{
    img.addEventListener('click', () =>{
        img.classList.toggle('active');
        img.classList.toggle('inactive');
    })
})