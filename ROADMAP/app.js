document.getElementById('jsonFile').addEventListener('change', function(e) {
    let file = e.target.files[0];

    if (file) {
        let reader = new FileReader();

        reader.onload = function(e) {
            let contents = e.target.result;
            let json = JSON.parse(contents);
            generateLayout(json);
        };

        reader.readAsText(file);
    }
});

/**
 * Generates the layout for the given data.
 * 
 * @param {Array} data - The data used to generate the layout.
 */
function generateLayout(data) {
    let container = document.getElementById('container');
    let i = 0;
    data.forEach(function(item) {
        let row = document.createElement('div');
        row.className = 'row justify-content-evenly align-items-center mb-5';
        col_left = document.createElement('div');
        col_right = document.createElement('div');
        if (i % 2 == 0) {
            col_left.className = 'col-4';
            col_right.className = 'col-8';

        } else {
            col_left.className = 'col-8';
            col_right.className = 'col-4';
        }
        let card = document.createElement('div');
        card.className = 'card text-dark bg-light border-dark';
        let content = generateCard(item);
        let module = document.createElement('div');
        module.className = 'display-4 text-center';
        module.textContent = item.name;
        let img = document.createElement('img');
        img.className = 'img-fluid';
        img.alt = 'elearning-icon';
        img.width = 250;
        img.style.paddingLeft = "90px";
        img.src = 'elearning-icon.svg';
        card.appendChild(content);
        if (i % 2 == 0) {
            col_left.appendChild(module);
            col_left.appendChild(img);
            col_right.appendChild(card);
        } else {
            col_left.appendChild(card);
            col_right.appendChild(module);
            col_right.appendChild(img);
        }
        row.appendChild(col_left);
        row.appendChild(col_right);
        container.appendChild(row);
        i++;
    });
}

/**
 * Generates a card element based on the provided item.
 * @param {Object} item - The item object containing title, description, and url properties.
 * @returns {HTMLElement} - The generated card element.
 */
function generateCard(item) {
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    let h1 = document.createElement('h1');
    h1.className = 'card-title';
    h1.textContent = item.title;
    cardBody.appendChild(h1);
    let p = document.createElement('p');
    p.className = 'card-text text-justify';
    p.textContent = item.description;
    cardBody.appendChild(p);
    let a = document.createElement('a');
    a.className = 'card-link btn btn-primary';
    a.target = '_blank';
    a.textContent = 'Lien vers le module';
    a.href = item.url;
    cardBody.appendChild(a);    
    return cardBody;
}