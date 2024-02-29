function calculatePetrolCost() {
    // Get input values
    var mileage = parseFloat(document.getElementById("mileage").value);
    var petrolRate = parseFloat(document.getElementById("petrolRate").value);
    var tankCapacity = parseFloat(document.getElementById("tankCapacity").value);

    // Calculate total distance and petrol cost for a full tank
    var totalDistance = mileage * tankCapacity;
    var petrolCost = tankCapacity * petrolRate;

    // Display the results
    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `
        <p>Mileage: ${mileage} km per liter</p>
        <p>Petrol Rate: ₹${petrolRate} per liter</p>
        <p>Tank Capacity: ${tankCapacity} liters</p>
        <p>Total Distance that can be traveled: ${totalDistance} km</p>
        <p>Petrol Cost for a full tank: ₹${petrolCost.toFixed(2)}</p>
    `;
}
