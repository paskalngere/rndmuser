//Get Btn And Create Function
document.getElementById('myBtn').addEventListener('click', getData);

function getData() {
    // console.log('test');

    //Get API
    fetch('https://randomuser.me/api/?results=100')
        .then(res => res.json())
        .then(data => {
            // console.log(data);

            let author = data.results;
            // console.log(author);

            //Get Data Value
            let output = "<h2><center>Get User Data</center></h2>";

            //Get Data Loop Through
            author.forEach(function (lists) {
                output += `<div class="container col d-flex justify-content-center" style="margin-top: 20px">
        <ul style="list-style: none">
          <li>
            <div class="card mb-2 text-center shadow-sm justify-content-center" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="${lists.picture.large}" class="img-fluid" style="width: 300px" alt="paskal" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h6 class="card-title">Hi, My name is</h6>
                    <h3 class="card-text">${lists.name.first}</h3>
                    <p class="card-text"><small class="text-muted">${lists.email}</small></p>
                    <p class="card-text"><small class="text-muted">${lists.location.country}</small></p>
                  </div>
                </div>
              </div>
              </ul>
            </div> `;
            });

            //Show On Our Screen All Data
            document.getElementById('output').innerHTML = output;

        });
};
