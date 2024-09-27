import "./css/bootstrap.min.css"
import "./js/bootstrap.bundle.min"

const container = document.getElementById('container');

console.log(container);



const URL = "https://jsonplaceholder.typicode.com/users"
fetch(URL)
	.then((res) => {
		if (!res.ok) {
			return (container.textContent = "no user found with this data")
        }
        res.json()
        .then((json) => {
            return console.log(json)
            handleData(json)
        })
	})

    function handleData(json) {
        console.log("data available !!!")
    
    
    
    const dynamicDataContainer = document.querySelector('.dynamic_data');

    if (!dynamicDataContainer) {
        console.error("No .dynamic_data container found in the HTML");
        return;
      }

      users.forEach((user) => {
        const userCard = `
          <div class="col">
            <article class="card">
              <div class="card-body">
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>Email:</strong> ${user.email}</p>
              </div>
            </article>
          </div>
        `;
        
        dynamicDataContainer.innerHTML += userCard;
  });
}
    

