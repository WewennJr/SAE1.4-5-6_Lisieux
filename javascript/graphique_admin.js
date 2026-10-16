new Chart(document.getElementById("chartAdminDeplacements"), {
  type: "bar",
  data: {
    labels: ["Voiture", "Bus", "Vélo", "Marche"],
    datasets: [
      {
        label: "Nombre de réponses",
        data: [58, 27, 14, 36],
        backgroundColor: ["#3c8dbc", "#dd4b39", "#00a65a", "#f39c12"],
        borderRadius: 8,
      },
    ],
  },
  options: { responsive: true },
});

new Chart(document.getElementById("chartAdminSatisfaction"), {
  type: "pie",
  data: {
    labels: ["Très satisfait", "Satisfait", "Moyen", "Insatisfait"],
    datasets: [
      {
        data: [12, 44, 28, 16],
        backgroundColor: ["#00a65a", "#3c8dbc", "#f39c12", "#dd4b39"],
      },
    ],
  },
  options: { responsive: true },
});

new Chart(document.getElementById("chartElusPriorites"), {
  type: "bar",
  data: {
    labels: [
      "Pistes cyclables",
      "Lignes de bus",
      "Sécurisation",
      "Stationnement",
    ],
    datasets: [
      {
        label: "Priorité",
        data: [42, 35, 50, 28],
        backgroundColor: ["#3c8dbc", "#00a65a", "#f39c12", "#605ca8"],
      },
    ],
  },
  options: {
    indexAxis: "y",
    responsive: true,
  },
});

new Chart(document.getElementById("chartElusBudget"), {
  type: "line",
  data: {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Budget idéal (en millions €)",
        data: [3.2, 3.8, 4.1, 4.5, 5.0],
        borderColor: "#3c8dbc",
        borderWidth: 3,
        tension: 0.3,
      },
    ],
  },
  options: { responsive: true },
});
