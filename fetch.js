
let data=[];


async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();
    data = json;
    console.log(data);
    displayData()
}
function displayData() {
  
    const container = document.createElement('div'); 
    document.body.appendChild(container);

    
    data.map(item => {
        const p = document.createElement('p');
        p.textContent = `ID: ${item.id}, Title: ${item.title}`; // Displaying ID and Title
        container.appendChild(p); // Append each paragraph to the container
    });
}


fetchData(); // Call the async function