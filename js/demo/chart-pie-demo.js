// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["ข้าราชการ", "พนักงานมหาวิทยาลัยเงินงบประมาณ", "พนักงานมหาวิทยาลัยเงินรายได้","พนักงานราชการ","ลูกจ้างประจำ","ลูกจ้างของมหาวิทยาลัย"],
    datasets: [{
      data: [9.68 , 63.87 , 2.26 , 0 , 3.87 , 20.32 ],
      backgroundColor: [ '#1cc88a','#f6c23e','#E22323', '#36b9cc', '#235CE2','#DE440C'],
      hoverBackgroundColor: [ '#1cc88a','#f6c23e','#E22323', '#36b9cc', '#235CE2','#DE440C'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
