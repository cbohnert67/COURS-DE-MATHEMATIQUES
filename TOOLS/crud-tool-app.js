document.getElementById('myForm').addEventListener('submit', saveData);

/**
 * Récupère les données depuis le stockage local et les affiche dans un tableau HTML.
 */
function fetchData() {
    let dataArray = JSON.parse(localStorage.getItem('data'));
    let dataView = document.getElementById('myTable').getElementsByTagName('tbody')[0];

    dataView.innerHTML = '';

    dataArray.sort((a, b) => a.name.localeCompare(b.name));    
    
    for(let i = 0; i < dataArray.length; i++) {
        let name = dataArray[i].name;
        let title = dataArray[i].title;
        let description = dataArray[i].description;
        let url = dataArray[i].url;

        dataView.innerHTML += `<tr>
            <td>${name}</td>
            <td>${title}</td>
            <td>${description}</td>
            <td>${url}</td>
            <td>
                <a href="#" onclick="deleteData('${name}')">Delete</a> | 
                <a href="#" onclick="editData('${name}')">Edit</a>
            </td>
            </tr>`;
    }
}

/**
 * Saves the data entered in the form to the local storage.
 * @param {Event} e - The event object.
 */
function saveData(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let url = document.getElementById('url').value;

    let data = {
        name,
        title,
        description,
        url
    };

    if(localStorage.getItem('data') === null) {
        let dataArray = [];
        dataArray.push(data);
        localStorage.setItem('data', JSON.stringify(dataArray));
    } else {
        let dataArray = JSON.parse(localStorage.getItem('data'));
        if (dataArray.find(item => item.name === name)) {
            dataArray = dataArray.filter(item => item.name !== name);
        }

        dataArray.push(data);
        localStorage.setItem('data', JSON.stringify(dataArray));
    }

    document.getElementById('myForm').reset();

    fetchData();
}


/**
 * Deletes data from local storage based on the provided name.
 * @param {string} name - The name of the item to be deleted.
 */
function deleteData(name) {
    if (confirm("Confirmez-vous la suppression de cet item ?")) {
        let dataArray = JSON.parse(localStorage.getItem('data'));

        for(let i = 0; i < dataArray.length; i++) {
            if(dataArray[i].name == name) {
                dataArray.splice(i, 1);
            }
        }

        localStorage.setItem('data', JSON.stringify(dataArray));

        fetchData();
    }
}

/**
 * Edits the data with the specified name.
 * @param {string} name - The name of the data to be edited.
 */
function editData(name) {
    let dataArray = JSON.parse(localStorage.getItem('data'));
    for(let i = 0; i < dataArray.length; i++) {
        if(dataArray[i].name == name) {
            document.getElementById('name').value = dataArray[i].name;
            document.getElementById('title').value = dataArray[i].title;
            document.getElementById('description').value = dataArray[i].description;
            document.getElementById('url').value = dataArray[i].url;
        }
    }
}


fetchData();