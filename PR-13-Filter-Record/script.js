const records = [
    { id: 1, name: "John", email: "johan@gmail.com", gender: "male", hobby: ["cricket", "reading"], city: "surat", salary: 55000, designation: "junior" },
    { id: 2, name: "Rahul", email: "rahul@gmail.com", gender: "male", hobby: ["football", "reading"], city: "mumbai", salary: 66000, designation: "senior" },
    { id: 3, name: "Rohan", email: "rohan@gmail.com", gender: "male", hobby: ["cricket", "reading"], city: "pune", salary: 70000, designation: "senior" },
    { id: 4, name: "Ajay", email: "ajay@gmail.com", gender: "male", hobby: ["travelling", "reels"], city: "delhi", salary: 8000, designation: "junior" },
    { id: 5, name: "Rasik", email: "rasik@gmail.com", gender: "male", hobby: ["volleyball", "music"], city: "ahmedabad", salary: 9000, designation: "senior" },
    { id: 6, name: "Simran", email: "simran@gmail.com", gender: "female", hobby: ["reading", "cooking"], city: "surat", salary: 4000, designation: "junior" },
    { id: 7, name: "Neha", email: "neha@gmail.com", gender: "female", hobby: ["music", "travelling"], city: "mumbai", salary: 75000, designation: "senior" },
    { id: 8, name: "Amit", email: "amit@gmail.com", gender: "male", hobby: ["cricket", "gaming"], city: "pune", salary: 5600, designation: "junior" },
    { id: 9, name: "Pooja", email: "pooja@gmail.com", gender: "female", hobby: ["reading", "cooking"], city: "delhi", salary: 6500, designation: "senior" },
    { id: 10, name: "Vijay", email: "vijay@gmail.com", gender: "male", hobby: ["travelling", "sports"], city: "ahmedabad", salary: 85000, designation: "junior" },
    { id: 11, name: "Tina", email: "tina@gmail.com", gender: "female", hobby: ["music", "reading"], city: "mumbai", salary: 70000, designation: "senior" },
    { id: 12, name: "Priya", email: "priya@gmail.com", gender: "female", hobby: ["travelling", "dancing"], city: "surat", salary: 5000, designation: "junior" },
    { id: 13, name: "Suresh", email: "suresh@gmail.com", gender: "male", hobby: ["cricket", "reading"], city: "pune", salary: 9000, designation: "senior" },
    { id: 14, name: "Anjali", email: "anjali@gmail.com", gender: "female", hobby: ["music", "dancing"], city: "delhi", salary: 60000, designation: "junior" },
    { id: 15, name: "Manish", email: "manish@gmail.com", gender: "male", hobby: ["football", "reading"], city: "ahmedabad", salary: 8500, designation: "senior" },
    { id: 16, name: "Kiran", email: "kiran@gmail.com", gender: "female", hobby: ["travelling", "music"], city: "mumbai", salary: 72000, designation: "junior" },
    { id: 17, name: "Shivani", email: "shivani@gmail.com", gender: "female", hobby: ["cooking", "photography"], city: "surat", salary: 6300, designation: "senior" },
    { id: 18, name: "Deepak", email: "deepak@gmail.com", gender: "male", hobby: ["volleyball", "football"], city: "pune", salary: 76000, designation: "junior" },
    { id: 19, name: "Maya", email: "maya@gmail.com", gender: "female", hobby: ["music", "reading"], city: "delhi", salary: 9500, designation: "senior" },
    { id: 20, name: "Gaurav", email: "gaurav@gmail.com", gender: "male", hobby: ["reading", "travelling"], city: "ahmedabad", salary: 7800, designation: "junior" },
    { id: 21, name: "Alok", email: "alok@gmail.com", gender: "male", hobby: ["cricket", "travelling"], city: "surat", salary: 55500, designation: "senior" },
    { id: 22, name: "Ritika", email: "ritika@gmail.com", gender: "female", hobby: ["gaming", "cooking"], city: "mumbai", salary: 88200, designation: "junior" },
    { id: 23, name: "Sahil", email: "sahil@gmail.com", gender: "male", hobby: ["football", "music"], city: "pune", salary: 7000, designation: "senior" },
    { id: 24, name: "Ravina", email: "ravina@gmail.com", gender: "female", hobby: ["reading", "photography"], city: "delhi", salary: 8500, designation: "junior" },
    { id: 25, name: "Arjun", email: "arjun@gmail.com", gender: "male", hobby: ["sports", "travelling"], city: "ahmedabad", salary: 99100, designation: "senior" },
    { id: 26, name: "Harsh", email: "harsh@gmail.com", gender: "male", hobby: ["football", "reading"], city: "surat", salary: 100000, designation: "junior" },
    { id: 27, name: "Kavita", email: "kavita@gmail.com", gender: "female", hobby: ["cooking", "travelling"], city: "mumbai", salary: 6900, designation: "senior" },
    { id: 28, name: "Rohit", email: "rohit@gmail.com", gender: "male", hobby: ["cricket", "music"], city: "pune", salary: 8000, designation: "junior" },
    { id: 29, name: "Pallavi", email: "pallavi@gmail.com", gender: "female", hobby: ["dancing", "travelling"], city: "delhi", salary: 7200, designation: "senior" },
    { id: 30, name: "Vishal", email: "vishal@gmail.com", gender: "male", hobby: ["sports", "gaming"], city: "ahmedabad", salary: 700000, designation: "junior" },
];

const genderFun = () => {
    let gender = document.querySelector('#gender').value;
    let filteredRecords = records.filter((val) => val.gender.toLowerCase() === gender.toLowerCase());
    displayFilteredRecords(filteredRecords);
}


// Display records in table
const viewRecord = (recordsToDisplay) => {
    let tbl = "";
    recordsToDisplay.map((val) => {
        tbl += `
                    <tr>
                        <td>${val.id}</td>
                        <td>${val.name}</td>
                        <td>${val.email}</td>
                        <td>${val.gender}</td>
                        <td>${val.hobby.join(", ")}</td>
                        <td>${val.city}</td>
                        <td>${val.salary}</td>
                        <td>${val.designation}</td>
                    </tr>
                `;
    })
    document.getElementById('record').innerHTML = tbl;
}

// Display all records initially
viewRecord(records);

// Filter by City
const cityFun = () => {
    let city = document.querySelector('#city').value;
    let filteredRecords = records.filter((val) => val.city.toLowerCase() === city.toLowerCase());
    document.getElementById('city').value = "";
    displayFilteredRecords(filteredRecords);
}

// Filter by Salary
const salaryFun = () => {
    let minSalary = document.querySelector('#minSalary').value;
    let maxSalary = document.querySelector('#maxSalary').value;
    let filteredRecords = records.filter((val) => {
        return val.salary >= minSalary && val.salary <= maxSalary;
    });
    document.getElementById('minSalary').value = "";
    document.getElementById('maxSalary').value = "";
    displayFilteredRecords(filteredRecords);
}

// Filter by Designation
const designationFun = () => {
    let designation = document.querySelector('#designation').value;
    let filteredRecords = records.filter((val) => val.designation.toLowerCase().includes(designation.toLowerCase()));
    document.getElementById('designation').value = "";
    displayFilteredRecords(filteredRecords);
}

// Filter by Hobby
const hobbyFun = () => {
    let hobby = document.querySelector('#hobby').value;
    let filteredRecords = records.filter((val) => val.hobby.some(h => h.toLowerCase().includes(hobby.toLowerCase())));
    document.getElementById('hobby').value = "";
    displayFilteredRecords(filteredRecords);
}

// Display filtered records and handle error message
const displayFilteredRecords = (filteredRecords) => {
    let err = document.getElementById('error');

    if (filteredRecords.length === 0) {
        err.style.display = 'block';
    } else {
        err.style.display = 'none';
    }

    viewRecord(filteredRecords);
}

// Reset the filters
const reset = () => {
    viewRecord(records);
    document.getElementById('city').value = "";
    document.getElementById('minSalary').value = "";
    document.getElementById('maxSalary').value = "";
    document.getElementById('designation').value = "";
    document.getElementById('hobby').value = "";
    document.getElementById('error').style.display = 'none';
}
