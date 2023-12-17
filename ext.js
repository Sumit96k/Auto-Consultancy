
document.addEventListener("DOMContentLoaded", () => {
  // Your JavaScript code goes here
  const loginBtn = document.querySelector(".login-btn");
  const loginForm = document.getElementById("login-form");

  loginBtn.addEventListener("click", () => {
    loginForm.style.display = loginForm.style.display === "block" ? "none" : "block";
  });
});


//Simulated data stored in an array
var searchData = [
  { title: 'Maruti', description: 'swift Dzire GrandVitara',url: 'maruti.html' },
  { title: 'Tata', description: 'This is the second search result.',url:'tata.html' },
  { title: 'Hyundai', description: 'This is the third search result.',url:'hyundai.html '},
  { title: 'Mahindra', description: 'This is the third search result.',url:'mahindra.html' },
  { title: 'Skoda', description: 'This is the third search result.',url:'skoda.html' },
  { title: 'swift', description: 'This is the third search result.',url:'/maruti/swift.html' },
  { title: 'Dzire', description: 'This is the third search result.',url:'/maruti/dzire.html' },
  { title: 'alto 800', description: 'This is the third search result.',url:'/maruti/alto.html' },
  { title: 'alto k10', description: 'This is the third search result.',url:'/maruti/alto.html' },
  { title: 'XL6', description: 'This is the third search result.',url:'/maruti/xl6.html' },
  { title: 'Ertiga', description: 'This is the third search result.',url:'/maruti/ertiga.html' },
  { title: 'Grand Vitara', description: 'This is the third search result.',url:'/maruti/grandvitara.html' },
  { title: 'Baleno', description: 'This is the third search result.',url:'/maruti/baleno.html' },
  { title: 'Breeza', description: 'This is the third search result.',url:'/maruti/brezza.html' },
  { title: 'jimmy', description: 'This is the third search result.',url:'/maruti/jimmy.html' },
  
  // Add more data entries as needed
];


document.getElementById('searchButton').addEventListener('click', function () {
  resultsContainer.style.display = resultsContainer.style.display === "block" ? "none" : "block";
  var searchQuery = document.getElementById('searchInput').value;
  var searchResults = searchData.filter(function (item) {
    return item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  displayResults(searchResults);
});

function displayResults(results) {
  var resultsContainer = document.getElementById('resultsContainer');
  resultsContainer.innerHTML = '';

  if (results.length === 0) {
    var noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = 'No results found.';
    resultsContainer.appendChild(noResultsMessage);
  } else {
    results.forEach(function (result) {

      var resultItem = document.createElement('div');
      var titleLink = document.createElement('a');
      titleLink.href = result.url;
      titleLink.textContent = result.title;
      resultItem.appendChild(titleLink);
      var description = document.createElement('p');
      description.textContent = result.description;
      resultItem.appendChild(description);

      resultsContainer.appendChild(resultItem);

  
    });
  }
}

