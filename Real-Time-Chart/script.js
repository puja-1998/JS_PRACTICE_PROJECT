const ctx = document.getElementById('myCanvas').getContext('2d');
        let chart;
        
        // Initial data
        const initialData = {
            labels: [],
            datasets: [{
                label: 'Value',
                data: [],
                borderColor: 'rgb(11, 80, 80)',
                borderWidth: 1,
                fill: false,
            }],
        };

        // Chart configuration
        const chartConfig = {
            type: 'line',
            data: initialData,
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                        title: {
                            display: true,
                            text: 'Time',
                        },
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Value',
                        },
                    },
                },
                animation: false,
            },
        };

        // Initialize the chart
        chart = new Chart(ctx, chartConfig);

        // Function to add random data
        function addData() {
            const newData = Math.random() * 100; // Generate random data
            chart.data.labels.push(chart.data.labels.length);
            chart.data.datasets[0].data.push(newData);
            chart.update(); // Update the chart
        }

        // Add data at regular intervals (e.g., every 1 second)
        setInterval(addData, 1000);