// Data
const entryPages = ['/home', '/products'];
const entryCounts = [3, 2];

const exitPages = ['/cart', '/contact', '/blog'];
const exitCounts = [2, 1, 1];

const devices = ['Mobile', 'Desktop', 'Tablet'];
const deviceCounts = [2, 2, 1];

const locations = ['India', 'USA', 'UK', 'Canada'];
const locationCounts = [2, 1, 1, 1];

// Common hover interaction settings
const commonOptions = {
  responsive: true,
  interaction: {
    mode: 'nearest',
    intersect: true
  },
  hover: {
    mode: 'nearest',
    intersect: true,
    onHover: (event, elements) => {
      event.native.target.style.cursor = elements.length ? 'pointer' : 'default';
    }
  }
};

// Entry Pages Chart (Bar)
new Chart(document.getElementById('entryPagesChart'), {
  type: 'bar',
  data: {
    labels: entryPages,
    datasets: [{
      label: 'Entry Page Visits',
      data: entryCounts,
      backgroundColor: 'rgba(54, 84, 235, 0.6)',
      borderColor: 'rgba(54, 84, 235, 1)',
      borderWidth: 1,
      borderRadius: 8,
      hoverBackgroundColor: 'rgba(54, 84, 235, 0.9)'
    }]
  },
  options: {
    ...commonOptions,
    plugins: {
      title: {
        display: true,
        text: 'Most Visited Entry Pages',
        font: { size: 18, weight: 'bold' },
        color: '#333'
      },
      legend: { display: false }
    },
    scales: {
      y: { beginAtZero: true }
    },
    animations: {
      active: {
        duration: 400,
        easing: 'easeOutElastic',
        properties: ['scale'],
        from: 1,
        to: 1.30 // Slight enlarge on hover
      }
    }
  }
});

// Exit Pages Chart (Pie)
new Chart(document.getElementById('exitPagesChart'), {
  type: 'pie',
  data: {
    labels: exitPages,
    datasets: [{
      label: 'Exit Page Visits',
      data: exitCounts,
      backgroundColor: ['#ff6384', '#c2c053ff', '#36a2eb'],
      hoverOffset: 25 // Enlarges slice on hover
    }]
  },
  options: {
    ...commonOptions,
    plugins: {
      title: {
        display: true,
        text: 'Most Common Exit Pages',
        font: { size: 18, weight: 'bold' },
        color: '#333'
      },
      legend: { position: 'bottom' }
    }
  }
});

// Device Chart (Doughnut)
new Chart(document.getElementById('deviceChart'), {
  type: 'doughnut',
  data: {
    labels: devices,
    datasets: [{
      label: 'Sessions by Device',
      data: deviceCounts,
      backgroundColor: ['#4bc0c0', '#9966ff', '#ff9f40'],
      hoverOffset: 18
    }]
  },
  options: {
    ...commonOptions,
    plugins: {
      title: {
        display: true,
        text: 'Sessions by Device',
        font: { size: 18, weight: 'bold' },
        color: '#333'
      },
      legend: { position: 'bottom' }
    }
  }
});

// Location Chart (Bar)
new Chart(document.getElementById('locationChart'), {
  type: 'bar',
  data: {
    labels: locations,
    datasets: [{
      label: 'Sessions by Location',
      data: locationCounts,
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      borderRadius: 8,
      hoverBackgroundColor: 'rgba(75, 192, 192, 0.9)'
    }]
  },
  options: {
    ...commonOptions,
    plugins: {
      title: {
        display: true,
        text: 'Sessions by Location',
        font: { size: 18, weight: 'bold' },
        color: '#333'
      },
      legend: { display: false }
    },
    scales: {
      y: { beginAtZero: true }
    },
    animations: {
      active: {
        duration: 400,
        easing: 'easeOutElastic',
        properties: ['scale'],
        from: 1,
        to: 1.30
      }
    }
  }
});
