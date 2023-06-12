import Chart from "chart.js/auto";

const chart1 = async ()=>{
  const canvas = document.getElementById("chart1");
  const data = [
     { day: 1, count: 10 },
     { day: 2, count: 20 },
     { day: 3, count: 15 },
     { day: 4, count: 25 },
     { day: 5, count: 22 },
     { day: 6, count: 30 },
     { day: 7, count: 28 },
  ];
  const ctx = canvas.getContext("2d");
  
  const myChart = new Chart(ctx, {
     type: "bar",
  
  
  
     data: {
        // days
        labels: data.map((row) => row.day),
        datasets: [
           {
              label: "تعداد بازدید ها در روز",
              data: data.map((row) => row.count),
              backgroundColor: "#0070bb81",
              borderColor: '#0070BB',
              borderWidth: 1,
              barThickness: 50
              
           },
        ],
     },
     options: {
      responsive: true,
        plugins: {
           title: {
              display: true,
              text: "تعداد بازدید ها در روز",
           },
        },
        layout:{
          padding: 10
        }
     },
  });
  
  
  // myChart();
  
  canvas.onclick = (evt) => {
     const res = myChart.getElementsAtEventForMode(
        evt,
        "nearest",
        { intersect: true },
        true
     );
     // If didn't click on a bar, `res` will be an empty array
     if (res.length === 0) {
        return;
     }
     // Alerts "You clicked on A" if you click the "A" chart
     // Define the onclick function
     alert("You clicked on " + data[res[0].index].day);
  };

}
const chart2 = async ()=>{
  const canvas = document.getElementById("chart2");
  const data = [
     { day: 1, count: 10 },
     { day: 2, count: 20 },
     { day: 3, count: 15 },
     { day: 4, count: 25 },
     { day: 5, count: 22 },
     { day: 6, count: 30 },
     { day: 7, count: 28 },
  ];
  const ctx = canvas.getContext("2d");
  
  const myChart = new Chart(ctx, {
     type: "bar",
  
  
  
     data: {
        // days
        labels: data.map((row) => row.day),
        datasets: [
           {
              label: "تعداد بازدید ها در روز",
              data: data.map((row) => row.count),
              backgroundColor: "#00bbb581",
              borderColor: '#00bb9c',
              borderWidth: 1,
              barThickness: 50
              
           },
        ],
     },
     options: {
      responsive: true,
        plugins: {
           title: {
              display: true,
              text: "تعداد بازدید ها در روز",
           },
        },
        layout:{
          padding: 10
        }
     },
  });
  
  
  // myChart();
  
  canvas.onclick = (evt) => {
     const res = myChart.getElementsAtEventForMode(
        evt,
        "nearest",
        { intersect: true },
        true
     );
     // If didn't click on a bar, `res` will be an empty array
     if (res.length === 0) {
        return;
     }
     // Alerts "You clicked on A" if you click the "A" chart
     // Define the onclick function
     alert("You clicked on " + data[res[0].index].day);
  };

}
const chart3 = async ()=>{
  const canvas = document.getElementById("chart3");
  const data = [
     { day: 1, count: 10 },
     { day: 2, count: 20 },
     { day: 3, count: 15 },
     { day: 4, count: 25 },
     { day: 5, count: 22 },
     { day: 6, count: 30 },
     { day: 7, count: 28 },
  ];
  const ctx = canvas.getContext("2d");
  
  const myChart = new Chart(ctx, {
     type: "bar",
  
  
  
     data: {
        // days
        labels: data.map((row) => row.day),
        datasets: [
           {
              label: "تعداد بازدید ها در روز",
              data: data.map((row) => row.count),
              backgroundColor: "#3bbb0081",
              borderColor: '#00bb25',
              borderWidth: 1,
              barThickness: 50
              
           },
        ],
     },
     options: {
      responsive: true,
        plugins: {
           title: {
              display: true,
              text: "تعداد بازدید ها در روز",
           },
        },
        layout:{
          padding: 10
        }
     },
  });
  
  
  // myChart();
  
  canvas.onclick = (evt) => {
     const res = myChart.getElementsAtEventForMode(
        evt,
        "nearest",
        { intersect: true },
        true
     );
     // If didn't click on a bar, `res` will be an empty array
     if (res.length === 0) {
        return;
     }
     // Alerts "You clicked on A" if you click the "A" chart
     // Define the onclick function
     alert("You clicked on " + data[res[0].index].day);
  };

}
const chart4 = async ()=>{
  const canvas = document.getElementById("chart4");
  const data = [
     { day: 1, count: 10 },
     { day: 2, count: 20 },
     { day: 3, count: 15 },
     { day: 4, count: 25 },
     { day: 5, count: 22 },
     { day: 6, count: 30 },
     { day: 7, count: 28 },
  ];
  const ctx = canvas.getContext("2d");
  
  const myChart = new Chart(ctx, {
     type: "bar",
  
  
  
     data: {
        // days
        labels: data.map((row) => row.day),
        datasets: [
           {
              label: "تعداد بازدید ها در روز",
              data: data.map((row) => row.count),
              backgroundColor: "#bba80081",
              borderColor: '#bb8600',
              borderWidth: 1,
              barThickness: 50
              
           },
        ],
     },
     options: {
      responsive: true,
        plugins: {
           title: {
              display: true,
              text: "تعداد بازدید ها در روز",
           },
        },
        layout:{
          padding: 10
        }
     },
  });
  
  
  // myChart();
  
  canvas.onclick = (evt) => {
     const res = myChart.getElementsAtEventForMode(
        evt,
        "nearest",
        { intersect: true },
        true
     );
     // If didn't click on a bar, `res` will be an empty array
     if (res.length === 0) {
        return;
     }
     // Alerts "You clicked on A" if you click the "A" chart
     // Define the onclick function
     alert("You clicked on " + data[res[0].index].day);
  };

}

const chart5 = async ()=>{
  const canvas = document.getElementById("chart5");
  const data = [
     { day: 1, count: 10 },
     { day: 2, count: 20 },
     { day: 3, count: 15 },
     { day: 4, count: 25 },
     { day: 5, count: 22 },
     { day: 6, count: 30 },
     { day: 7, count: 28 },
  ];
  const ctx = canvas.getContext("2d");
  
  const myChart = new Chart(ctx, {
     type: "doughnut",
  
  
  
     data: {
        // days
        labels: data.map((row, index) => row.day),
        datasets: [
           {
              label: "تعداد بازدید ها در روز",
              data: data.map((row) => row.count),
              backgroundColor: data.map((row, index)=>{
                if(index%3 === 0){
                return `rgba(0, ${1 + (index*50)}, 187, 0.8)`
                }else if(index%3 ===1 ){
                  return `rgba(${1 + (index*50)}, 76 , 187, 0.8)`
                }else if(index%3 === 2){
                  return `rgba(0, 76 , ${1 + (index*50)}, 0.8)`

                }
              }),
              borderColor: '#0070BB',
              borderWidth: 1,
              barThickness: 50
              
           },
        ],
     },
     options: {
      responsive: true,
        plugins: {
           title: {
              display: true,
              text: "نمودار خرید کاربران",
           },
        },
        layout:{
          padding: 10
        }
     },
  });
  
  
  // myChart();
  
  canvas.onclick = (evt) => {
     const res = myChart.getElementsAtEventForMode(
        evt,
        "nearest",
        { intersect: true },
        true
     );
     // If didn't click on a bar, `res` will be an empty array
     if (res.length === 0) {
        return;
     }
     // Alerts "You clicked on A" if you click the "A" chart
     // Define the onclick function
     alert("You clicked on " + data[res[0].index].day);
  };

}

(function(){
  chart1()
  chart2()
  chart3()
  chart4()
  chart5()

})()

