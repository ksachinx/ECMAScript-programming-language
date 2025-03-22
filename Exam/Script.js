// Select elements
const nameInput = document.getElementById('nameInput');
const nameForm = document.getElementById('nameForm');
const nameList = document.getElementById('nameList');

let names = [];
let isEditing = false;
let editingIndex = -1;

// Function to render name list
function renderNameList() {
    nameList.innerHTML = ''; // Clear current list

    names.forEach((name, index) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerHTML = `
            <span>${name}</span>
            <span>
                <button class="btn btn-edit btn-sm" onclick="editName(${index})">Edit</button>
                <button class="btn btn-delete btn-sm" onclick="deleteName(${index})">Delete</button>
            </span>
        `;
        nameList.appendChild(li);
    });
}

// Function to add or update a name
function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = nameInput.value.trim();

    // Check if the name is already in the list
    if (names.includes(name)) {
        alert('This name already exists.');
        return;
    }

    if (isEditing) {
        names[editingIndex] = name; // Update name
        isEditing = false;
        editingIndex = -1;
        nameForm.querySelector('button').textContent = 'Add Name';
    } else {
        names.push(name); // Add new name
    }

    nameInput.value = '';
    renderNameList();
}

// Function to edit a name
function editName(index) {
    nameInput.value = names[index];
    isEditing = true;
    editingIndex = index;
    nameForm.querySelector('button').textContent = 'Update Name';
}

// Function to delete a name
function deleteName(index) {
    if (confirm('Are you sure you want to delete this name?')) {
        names.splice(index, 1);
        renderNameList();
    }
}

// Initialize the app
nameForm.addEventListener('submit', handleFormSubmit);
renderNameList();
