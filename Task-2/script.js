const photoData = {
    birthday: {
        image: 'https://img.freepik.com/free-vector/happy-birthday-colorful-tree_23-2147494914.jpg',
        caption: 'Happy Birthday celebration'
    },
    pets: {
        image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800',
        caption: 'Adorable pets'
    },
    cars: {
        image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800',
        caption: 'Cars collection'
    }
};

const categoryButtons = document.querySelectorAll('.category-btn');
const photoDisplay = document.getElementById('photoDisplay');

function displayPhotos(category) {
    const data = photoData[category];
    
    photoDisplay.innerHTML = `
        <img src="${data.image}" alt="${category} photo">
        <p>${data.caption}</p>
        <div class="watermark">www.shutterstock.com 1202540914</div>
    `;
}

categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        displayPhotos(category);
    });
});

displayPhotos('birthday');
