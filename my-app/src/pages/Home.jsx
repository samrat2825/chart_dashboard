import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CreateChart from "../components/CreateChart";
import "../styles/home.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import { data_updated } from "../redux/Actions/actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Home = (props) => {
  const [chartData, setChartData] = useState([]);
  const [modalVisivle, setModalVisible] = useState(false);
  const [alignment, setAlignment] = useState("Bar");
  const [newElements, setNewElements] = useState([]);
  const [changeGraphIndex, setChangeGraphIndex] = useState(null);

  const handleDataChange = () => {
    setModalVisible(true);
  };

  const hadleChartInput = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const hadleElemetsInput = (event) => {
    setNewElements(event.target.value.split(" "));
  };

  const handleSubmit = () => {
    setModalVisible(false);
    let newChartData = chartData;
    newChartData[changeGraphIndex] = {
      type: alignment,
      elements: newElements,
    };
    setChartData(newChartData);
    data_updated(newChartData);
  };

  const fetchDatahandler = () => {
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json"
    )
      .then((res) => res.json())
      .then((json) => {
        setChartData(json);
      });
  };

  useEffect(() => {
    fetchDatahandler();
    data_updated(chartData);
  }, []);

  return (
    <div className="container">
      {chartData?.map((item, index) => {
        return (
          <div className="chart" key={index}>
            <CreateChart
              data={item}
              index={index}
              handleDataChange={handleDataChange}
              setChangeGraphIndex={setChangeGraphIndex}
            />
          </div>
        );
      })}
      {modalVisivle && (
        <Modal
          open={modalVisivle}
          onClose={() => {
            setModalVisible(false);
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Change Chart Data
            </Typography>
            <br />
            <br />
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={hadleChartInput}
            >
              <ToggleButton value="Bar">Bar Graph</ToggleButton>
              <ToggleButton value="Pie">Pie Graph</ToggleButton>
            </ToggleButtonGroup>
            <br />
            <br />
            Enter Elements Space Seperated
            <br />
            Eg: 1 20 56
            <br />
            <br />
            <TextField
              variant="outlined"
              label="Elements"
              onChange={hadleElemetsInput}
            />
            <br />
            <br />
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default Home;
