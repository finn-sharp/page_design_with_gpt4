function openPopup(title, content) {
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-content').textContent = content;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function navigateTo(page) {
    if (page=='home') {
        let url = 'index.html'
        window.location.href = url;
    } else {
        let url = page + '.html';
        window.location.href = url;
    }
}


let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // 이미지가 넘어가는 시간 (3초)
}