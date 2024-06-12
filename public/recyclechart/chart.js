function drawInitialChart() {
    var data1 = google.visualization.arrayToDataTable([
        ['Task', 'Percentage'],
        ['재활용 가능', 30],
        ['재활용 불가능', 70]
    ]);

    var options1 = {
        title: '재활용 통계',
        titleTextStyle: { fontSize: 24 },
        pieSliceText: 'label',
        pieSliceTextStyle: { fontSize: 12 },
        slices: {
            0: { color: '#235B36' },
            1: { color: '#558E65' }
        },
        animation: {
            duration: 1000,
            startup: true,
            easing: 'out'
        },
        chartArea: { width: '85%', height: '70%' },
        legend: 'none',
        tooltip: { trigger: 'none' }
    };

    var chart1 = new google.visualization.PieChart(document.getElementById('piechart1'));
    google.visualization.events.addListener(chart1, 'select', function() {
        var selectedItem = chart1.getSelection()[0];
        if (selectedItem) {
            var selectedValue = data1.getValue(selectedItem.row, 0);
            if (selectedValue === '재활용 가능') {
                document.getElementById('piechart2').style.display = 'block';
                document.getElementById('piechart3').style.display = 'none';
                drawSecondChart();
            } else if (selectedValue === '재활용 불가능') {
                document.getElementById('piechart3').style.display = 'block';
                document.getElementById('piechart2').style.display = 'none';
                drawThirdChart();
            }
        }
    });

    chart1.draw(data1, options1);
}

function drawSecondChart() {
    var data2 = google.visualization.arrayToDataTable([
        ['Task', 'Percentage'],
        ['종이', 30],
        ['플라스틱', 18],
        ['금속', 6],
        ['유리', 7],
        ['비닐', 10],
        ['음식물', 5],
        ['기타', 10]
    ]);

    var options2 = {
        title: '재활용 가능 통계',
        titleTextStyle: { fontSize: 24 },
        pieSliceText: 'label',
        pieSliceTextStyle: { fontSize: 10},
        slices: {
            0: { color: '#5cb85c' }, 
            1: { color: '#52a552' },
            2: { color: '#499349' }, 
            3: { color: '#408040' }, 
            4: { color: '#376e37' }, 
            5: { color: '#2e5c2e' }, 
            6: { color: '#244924' }, 
            7: { color: '#1b371b' }  
        },
        animation: {
            duration: 1000,
            startup: true,
            easing: 'out'
        },
        chartArea: { width: '85%', height: '70%' },
        legend: 'none',
        tooltip: { trigger: 'focus' }
    };

    var chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));
    chart2.draw(data2, options2);
}

function drawThirdChart() {
    var data3 = google.visualization.arrayToDataTable([
        ['Task', 'Percentage'],
        ['종이', 22],
        ['플라스틱', 31],
        ['금속', 4],
        ['유리', 5],
        ['비닐', 7],
        ['음식물', 8],
        ['의약품', 20],
        ['기타', 25]
    ]);

    var options3 = {
        title: '재활용 불가능 통계',
        titleTextStyle: { fontSize: 24 },
        pieSliceText: 'label',
        pieSliceTextStyle: { fontSize: 10 },
        slices: {
            0: { color: '#5cb85c' }, 
            1: { color: '#66b749' }, 
            2: { color: '#69ab4f' }, 
            3: { color: '#5fbc66' }, 
            4: { color: '#4cb84c' }, 
            5: { color: '#6fc258' }, 
            6: { color: '#61a54f' },
            7: { color: '#51bb6b' }  
        },
        animation: {
            duration: 1000,
            startup: true,
            easing: 'out'
        },
        chartArea: { width: '85%', height: '70%' },
        legend: 'none',
        tooltip: { trigger: 'focus' }
    };

    var chart3 = new google.visualization.PieChart(document.getElementById('piechart3'));
    chart3.draw(data3, options3);
}

document.addEventListener('DOMContentLoaded', function () {
    const showMapButton = document.getElementById('showMapButton');
    const mapContainer = document.querySelector('.map-container');
    const chartContainer = document.querySelector('.chart-container');
    const infoBox1 = document.getElementById('showMapButton');
    const pinTableContainer = document.querySelector('.pin-table-container');
    const regionName = document.getElementById('region-name');
    const info1 = document.getElementById('info1');
    const info2 = document.getElementById('info2');
    const info3 = document.getElementById('info3');
    const info4 = document.getElementById('info4');
    const info5 = document.getElementById('info5');
    const info6 = document.getElementById('info6');
    const info7 = document.getElementById('info7');
    const info8 = document.getElementById('info8');

    showMapButton.addEventListener('click', function() {
        if (mapContainer.style.display === 'block') {
            mapContainer.style.display = 'none'; // 지도가 표시되어 있다면 숨깁니다.
            chartContainer.style.display = 'flex'; // 차트를 표시합니다.
            infoBox1.style.marginTop = '10px'; // info-box1의 위치를 원래대로
            pinTableContainer.style.display = 'none'; // 표를 숨깁니다.
        } else {
            mapContainer.style.display = 'block'; // 지도가 숨겨져 있다면 표시합니다.
            chartContainer.style.display = 'none'; // 차트를 숨깁니다.
            infoBox1.style.marginTop = '-430px'; // info-box1의 위치를 아래로
        }
    });

    const pins = document.querySelectorAll('.pin');

    pins.forEach(pin => {
        pin.addEventListener('click', function () {
            const info = this.getAttribute('data-info').split('|');
            regionName.textContent = info[0];
            info1.textContent = info[1];
            info2.textContent = info[2];
            info3.textContent = info[3];
            info4.textContent = info[4];
            info5.textContent = info[5];
            info6.textContent = info[6];
            info7.textContent = info[7];
            info8.textContent = info[8];
            pinTableContainer.style.display = 'block';
        });
    });
});