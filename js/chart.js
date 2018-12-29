new Chart(document.getElementById("polar-chart"), {
    type: 'polarArea',
    data: {
      labels: ["Notre restaurant", "R1", "R2", "R3", "R4"],
      datasets: [
        {
          label: "Avis favorable",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [8000,5267,3200,2890,2000]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Notre reputation par rapport aux autres réstaurants'
      }
    }
});
new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["Tunisien", "Marocain", "Europien", "Americain", "Mexicain"],
      datasets: [
        {
          label: "Clients",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Nombre des visiteurs'
      }
    }
});