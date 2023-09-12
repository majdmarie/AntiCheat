import React, {useState} from "react";
import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

export default function EnrolledExams() {

    const [approvedReports, setApprovedReports] = useState(3);
    const [neutralReports, setNeutralReports] = useState(10);
    const [disapprovedReports, setDisapprovedReports] = useState(2);
    
    const [chartData, setChartData] = useState(
        {
            labels: ["Approved", "Neutral", "Disapproved"],
            datasets: [
                {
                data: [approvedReports, neutralReports, disapprovedReports],
                backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
                hoverBackgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
                },
            ],
        });



    return (
        <div>
            <h1>Statistics Dashboard</h1>
            <h2>Statistics Chart</h2>
            <Doughnut data={chartData} />
            <p>Total Reports: {10}</p>
        </div>
    );
}
