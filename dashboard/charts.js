const entryPages = ['/home', '/products'];
const entryCounts = [3, 2];

const exitPages = ['/cart', '/contact', '/blog'];
const exitCounts = [2, 1, 1];

const devices = ['Mobile', 'Desktop', 'Tablet'];
const deviceCounts = [2, 2, 1];

const locations = ['India', 'USA', 'UK', 'Canada'];
const locationCounts = [2, 1, 1, 1];

// Entry Pages Chart
new Chart(document.getElementById('entryPagesChart'), {
  type: 'bar',
  data: {
    labels: entryPages,
    datasets: [{
      label: 'Entry Page Visits',
      data: entryCounts,
      backgroundColor: 'rgba(54, 84, 235, 0.6)'
    }]
  }
});

// Exit Pages Chart
new Chart(document.getElementById('exitPagesChart'), {
  type: 'pie',
  data: {
    labels: exitPages,
    datasets: [{
      label: 'Exit Page Visits',
      data: exitCounts,
      backgroundColor: ['#ff6384', '#c2c053ff', '#36a2eb']
    }]
  }
});

// Device Chart
new Chart(document.getElementById('deviceChart'), {
  type: 'doughnut',
  data: {
    labels: devices,
    datasets: [{
      label: 'Sessions by Device',
      data: deviceCounts,
      backgroundColor: ['#4bc0c0', '#9966ff', '#ff9f40']
    }]
  }
});

// Location Chart
new Chart(document.getElementById('locationChart'), {
  type: 'bar',
  data: {
    labels: locations,
    datasets: [{
      label: 'Sessions by Location',
      data: locationCounts,
      backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }]
  }
});
