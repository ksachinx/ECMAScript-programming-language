const corona = () => {
    $.ajax({
        method: "GET",
        url: "https://disease.sh/v3/covid-19/all",
        success: function (data) {
            console.log(data);

            // Format the 'updated' timestamp to a readable format
            const updatedDate = new Date(data.updated);
            const formattedDate = updatedDate.toLocaleString();

            let tbl = `
                <tr>
                    <td>${formattedDate}</td>
                    <td>${data.cases}</td>
                    <td>${data.todayCases}</td>
                    <td>${data.deaths}</td>
                    <td>${data.active}</td>
                    <td>${data.critical}</td>
                    <td>${data.recovered}</td>
                    <td>${data.population}</td>
                </tr>`;

            // Update the table body with the fetched data
            document.getElementById('cg').innerHTML = tbl;
        },
        error: function () {
            // Handle error if the data fails to load
            document.getElementById('cg').innerHTML = `
                <tr>
                    <td colspan="8">Failed to load data. Please try again later.</td>
                </tr>`;
        }
    });
};

// Fetch data when the page loads
corona();
