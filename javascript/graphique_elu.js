const ctx = document.getElementById("chartDeplacements");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Voiture", "Vélo", "Marche", "Bus", "Covoiturage"],
    datasets: [
      {
        label: "Nombre de réponses",
        data: [62, 18, 32, 21, 9], // données inventées
        backgroundColor: [
          "#3c8dbc",
          "#00a65a",
          "#f39c12",
          "#dd4b39",
          "#605ca8",
        ],
        borderRadius: 8,
        borderWidth: 0,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#1e1e1e",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 12,
        borderColor: "#fff",
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#333",
          font: {
            size: 14,
            weight: "600",
          },
        },
        grid: {
          color: "#ddd",
        },
      },
      x: {
        ticks: {
          color: "#333",
          font: {
            size: 14,
            weight: "600",
          },
        },
        grid: {
          display: false,
        },
      },
    },
    animation: {
      duration: 1200,
      easing: "easeOutQuart",
    },
  },
});

const ctx3 = document.getElementById("chartEvolution");

new Chart(ctx3, {
  type: "line",
  data: {
    labels: [
      "Jan", "Fév", "Mar", "Avr", "Mai", "Juin", 
      "Juil", "Août", "Sep", "Oct", "Nov", "Déc"
    ],
    datasets: [
      {
        label: "Fréquentation (en centaines)",
        data: [12, 14, 15, 17, 20, 22, 24, 23, 26, 30, 31, 35], // données inventées
        fill: false,
        borderColor: "#3c8dbc",
        tension: 0.3,
        pointBackgroundColor: "#3c8dbc",
        pointBorderColor: "#fff",
        pointRadius: 5,
        pointHoverRadius: 8,
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#333",
          font: {
            size: 14,
            weight: "600",
          },
        },
      },
      tooltip: {
        backgroundColor: "#1e1e1e",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 12,
        borderColor: "#fff",
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          color: "#333",
          font: {
            size: 13,
          },
        },
        grid: {
          color: "#ddd",
        },
      },
      x: {
        ticks: {
          color: "#333",
          font: {
            size: 13,
          },
        },
        grid: {
          display: false,
        },
      },
    },
    animation: {
      duration: 1200,
      easing: "easeOutQuart",
    },
  },
});
