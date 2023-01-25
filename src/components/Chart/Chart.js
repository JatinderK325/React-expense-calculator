import React from "react";
import './Chart.css';
import ChartBar from './ChartBar';
//component
function Chart(props){
    // we are getting an array of values(i.e one of the properties of the object in dataPoints array) from an array of objects named dataPoints.
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValues); // used spread operator to get elements of an above array becoz Math.max works on attributes not arrays directly. hence it will receive 12 arguments which are 12 values from our array.
    return(
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (<ChartBar
            key = {dataPoint.label}
            value = {dataPoint.value}
            maxValue = {totalMaximum}
            label = {dataPoint.label}
            />
            ))}
        </div>
    );
}

export default Chart;