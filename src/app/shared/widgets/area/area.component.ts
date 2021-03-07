import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
    selector: 'app-widgets-area',
    templateUrl: './area.component.html',
    styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

    
    Highcharts = Highcharts;
    chartOptions = {};

    constructor() { }

    ngOnInit() {
        this.chartOptions = {
            chart: {
                type: 'area'
            },
            title: {
                text: 'DATOS DEL SENSOR'
            },
            subtitle: {
                text: 'Demo'
            },
            tooltip: {
                split: true,
                valueSuffix: '°C'
            },
            plotOptions: {
                columnrange: {
                    dataLabels: {
                        enabled: true,
                        format: '{y}°C'
                    }
                }
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: true,
            },
            series: [{
                name: 'Temperatures',
                data: [19, 25, 22, 26, 13, 30, 46]
            }]
        };

        // Para exportar las graficas
        HC_exporting(Highcharts);

        setTimeout(() => {
            window.dispatchEvent(
                new Event('resize')
            );
        }, 300);

    }

}
