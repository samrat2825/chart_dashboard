import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../styles/createChart.css";
import Button from "@mui/material/Button";

const createChart = (props) => {
  const state = {
    labels: [...props.data.elements],
    datasets: [
      {
        label: props.index,
        backgroundColor: `rgba(${
          props.data.elements[0]
            ? props.data.elements[0]
            : 0 + Math.floor(Math.random() * 155 + 1)
        },${
          props.data.elements[1]
            ? props.data.elements[1]
            : 0 + Math.floor(Math.random() * 205 + 1)
        },${
          props.data.elements[2]
            ? props.data.elements[2]
            : 0 + Math.floor(Math.random() * 100 + 1)
        },1)`,
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [...props.data.elements],
      },
    ],
  };

  return (
    <div container="diagram">
      {props.data.type === "Bar" && (
        <div className="graph">
          <Bar
            data={state}
            options={{
              title: {
                display: true,
                text: `Index: ${props.index}`,
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
          <div className="edit">
            <Button
              variant="contained"
              onClick={() => {
                props.setChangeGraphIndex(props.index);
                props.handleDataChange();
              }}
            >
              Edit
            </Button>
          </div>
        </div>
      )}
      {props.data.type === "Pie" && (
        <div className="graph">
          <Pie
            data={state}
            options={{
              title: {
                display: true,
                text: `Index: ${props.index}`,
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
          <div className="edit">
            <Button
              variant="contained"
              onClick={() => {
                props.setChangeGraphIndex(props.index);
                props.handleDataChange();
              }}
            >
              Edit
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default createChart;
