// Assuming each recipe card has a data-category attribute for filtering
// e.g., <div class="recipe-card" data-category="Italian">

// Function to filter recipe cards by category
function filterByCategory(category) {
    const cards = document.querySelectorAll('.recipe-card');
    cards.forEach(card => {
        if (category === 'All' || card.getAttribute('data-category') === category) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Attach event listeners to category buttons
const categoryButtons = document.querySelectorAll('.category-nav button');
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.querySelector('span').textContent;
        filterByCategory(category);
    });
});

// Function to search recipes
function searchRecipes() {
    const query = document.querySelector('input[type="search"]').value.toLowerCase();
    const cards = document.querySelectorAll('.recipe-card p');
    cards.forEach(card => {
        const recipeName = card.textContent.toLowerCase();
        if (recipeName.includes(query)) {
            card.parentElement.style.display = '';
        } else {
            card.parentElement.style.display = 'none';
        }
    });
}

// Attach event listener to search input
document.querySelector('input[type="search"]').addEventListener('input', searchRecipes);
