const ctx = document.getElementById('myChart').getContext('2d');
const ctx_export = document.getElementById('myExportChart').getContext('2d');
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Xuất kho', 'Nhập kho'],
        datasets: [{
            data: [37, 63],
            backgroundColor: ['#000066', '#00CCFF'],
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.label + ': ' + context.parsed + '%';
                    }
                }
            }
        },
        cutout: '60%'
    }
});
new Chart(ctx_export, {
    type: 'doughnut',
    data: {
        labels: ['Tươi mới', 'Bình thường', 'Hết hạn'],
        datasets: [{
            data: [37, 52, 11 ],
            backgroundColor: ['#CCFFCC', '#00CC00','#004400'],
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.label + ': ' + context.parsed + '%';
                    }
                }
            }
        },
        cutout: '60%'
    }
});