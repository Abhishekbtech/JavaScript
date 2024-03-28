// Function to fetch ISRO centres from the API
async function fetchCentres() {
    try {
        const response = await fetch('https://isro.vercel.app/api/centres');
        const data = await response.json();
        return data.centres;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to render centre cards
function renderCentres(centres) {
    const centresContainer = document.getElementById('centresContainer');
    centresContainer.innerHTML = '';
    centres.forEach(centre => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${centre.name}</h3>
            <p>City: ${centre.Place}</p>
            <p>State: ${centre.State}</p>
        `;
        centresContainer.appendChild(card);
    });
}

// Function to filter centres by category
async function filterByCategory(category) {
    const centres = await fetchCentres();
    // console.log(centres);
    const inputValue = document.getElementById('searchInput').value.toLowerCase();
    let filteredCentres;
    if (category === 'all') {
        filteredCentres = centres;
    } else {
        // filteredCentres = centres.filter(centre => centre[category].toLowerCase().includes(inputValue));
        filteredCentres = centres.filter((item) => {
            for (key in item) {
                if ((item[key] && item[key].toString().toLowerCase().includes(inputValue)) || !inputValue)
                    return true;
            }
        });
    }
    renderCentres(filteredCentres);
}

// Function to initiate search
function searchCentres() {
    const categoryButtons = document.querySelectorAll('.category-buttons button');
    let selectedCategory;
    categoryButtons.forEach(button => {
        if (button.classList.contains('selected')) {
            selectedCategory = button.innerText.toLowerCase();
        }
    });
    filterByCategory(selectedCategory);
}

// Initialize by showing all centres
// filterByCategory('all');