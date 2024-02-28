document.getElementById('myForm').addEventListener('submit', saveData);

function fetchData() {
    let dataArray = JSON.parse(localStorage.getItem('data'));
    let dataView = document.getElementById('myTable').getElementsByTagName('tbody')[0];

    dataView.innerHTML = '';

    for(let i = 0; i < dataArray.length; i++) {
        let name = dataArray[i].name;
        let description = dataArray[i].description;

        dataView.innerHTML += `<tr>
            <td>${name}</td>
            <td>${description}</td>
            <td>
                <a href="#" onclick="deleteData('${name}')">Delete</a> | 
                <a href="#" onclick="editData('${name}')">Edit</a>
            </td>
            </tr>`;
    }
}

function saveData(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let description = document.getElementById('description').value;

    let data = {
        name,
        description
    };

    if(localStorage.getItem('data') === null) {
        let dataArray = [];
        dataArray.push(data);
        localStorage.setItem('data', JSON.stringify(dataArray));
    } else {
        let dataArray = JSON.parse(localStorage.getItem('data'));
        dataArray.push(data);
        localStorage.setItem('data', JSON.stringify(dataArray));
    }

    document.getElementById('myForm').reset();

    fetchData();
}


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

function updateData(index) {
    let dataArray = JSON.parse(localStorage.getItem('data'));
    let name = document.getElementById('name').value;
    let description = document.getElementById('description').value;
    console.log(name);
    console.log(dataArray[index]);
    dataArray[index].name = name;
    dataArray[index].description = description;
    console.log(dataArray[index]);
    localStorage.setItem('data', JSON.stringify(dataArray));

    document.getElementById('myForm').reset();

    fetchData();
}

function editData(name) {
    let dataArray = JSON.parse(localStorage.getItem('data'));
    for(let i = 0; i < dataArray.length; i++) {
        if(dataArray[i].name == name) {
            document.getElementById('name').value = dataArray[i].name;
            document.getElementById('description').value = dataArray[i].description;
            document.getElementById('myForm').onsubmit = function(e) {
                e.preventDefault();
                updateData(i);
            }
        }
    }
}


fetchData();