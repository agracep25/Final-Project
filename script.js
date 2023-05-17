document.getElementById("flightFinderForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var sourceAirport = document.getElementById("sourceAirport").value;
    var destinationAirport = document.getElementById("destinationAirport").value;

    if (sourceAirport !== destinationAirport) {
    // Calculate the shortest path, fares, and total travel time
    var result = findShortestPath(sourceAirport, destinationAirport);
    var shortestPath = result.path;
    var fares = calculateFares(shortestPath);
    var totalTravelTime = result.totalTime;
  
    displayResults(shortestPath, fares, totalTravelTime);
  } else {
    alert("Source Airport and Destination Airport cannot be the same.");
  }
  });
  
  function findShortestPath(source, destination) {
    // Modify or add your own code here to implement the shortest path algorithm
    // For simplicity, let's assume the shortest path is a direct flight
    var travelTime = calculateTravelTime(destination); // Assuming 2 hours for a direct flight
    return { path: [source, destination], totalTime: travelTime };
  }
  
  function calculateTravelTime(destination) {
    var travelTimes = {
      China: 8,
      Egypt: 10,
      "Hong Kong": 4,
      India: 6,
      Japan: 2,
      Indonesia: 12,
      Kuwait: 14,
      Malaysia: 5,
      Philippines: 9,
      Thailand: 7,
      "Saudi Arabia": 13,
      "United Arab Emirates": 15,
      Vietnam: 11
    };
  
    return travelTimes[destination];
  }
  
  function calculateFares(path) {
    var fares = [];
    for (var i = 1; i < path.length; i++) {
      var sourceAirport = path[i - 1];
      var destinationAirport = path[i];
      var fare = calculateFare(sourceAirport, destinationAirport);
      fares.push(fare);
    }
    return fares;
  }
  
  function calculateFare(sourceAirport, destinationAirport) {
    // Implement your own fare calculation logic based on the source and destination airports
    // For simplicity, let's assume the fares are predefined based on the source and destination airports.
    var fares = {
      China: 500,
      Egypt: 700,
      "Hong Kong": 400,
      India: 600,
      Japan: 300,
      Indonesia: 800,
      Kuwait: 900,
      Malaysia: 550,
      Philippines: 750,
      Thailand: 450,
      "Saudi Arabia": 850,
      "United Arab Emirates": 950,
      Vietnam: 650
    };
  
    return fares[destinationAirport];
  }
  
  function displayResults(path, fares, totalTravelTime) {
    var flightResults = document.getElementById("flightResults");
    var fareElement = document.getElementById("fare");
    var travelTimeElement = document.getElementById("travelTime");
  
    if (path.length > 1) {
      flightResults.innerHTML = "Shortest path found: " + path.join(" -> ");
      fareElement.textContent = "Total Fare: $" + fares.reduce((a, b) => a + b, 0);
      travelTimeElement.textContent = "Total Travel Time: " + totalTravelTime + " hours";
    } else {
      flightResults.innerHTML = "No flights found.";
      fareElement.textContent = "";
      travelTimeElement.textContent = "";
    }
  }
  