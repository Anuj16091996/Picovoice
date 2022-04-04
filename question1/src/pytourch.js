import React from "react";
import "./pytourch.css";
import allPossiblities from "./data";

class pytourch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: {
        build: "Stable (1.11.0)",
        OS: "Linux",
        Package: "Conda",
        Language: "Python",
        Compute: "CUDA 10.2",
        Message:
          "conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch",
      },
    };
  }

  handleChange = (event) => {
    const keydata = event.target.name;
    const value = event.target.value;
    let statusCopy = Object.assign({}, this.state);
    statusCopy.selection[keydata] = value;
    if (statusCopy.selection.Package === "LibTorch") {
      statusCopy.selection.Language = "C++/Java";
    }

    Object.entries(allPossiblities).map(([number, objects]) => {
      if (
        statusCopy.selection.build === objects.build &&
        statusCopy.selection.OS === objects.OS &&
        statusCopy.selection.Package === objects.Package &&
        statusCopy.selection.Language === objects.Language &&
        statusCopy.selection.Compute === objects.Compute
      ) {
        statusCopy.selection["Message"] = objects.Message;
      }
    });

    this.setState(statusCopy);
  };

  render() {
    return (
      <div className="centrecontent">
        <div className="container">
          <div className="parentbox">
            <div className="childbox_one">
              <h4>PyTorch Build</h4>
            </div>
            <div className="childbox_two">
              <label
                className="radiobox selectedbox"
                style={
                  this.state.selection.build === "Stable (1.11.0)"
                    ? { width: "20%", background: "#EE4C2C", color: "white" }
                    : { width: "20%" }
                }
              >
                <input
                  type="radio"
                  value="Stable (1.11.0)"
                  name="build"
                  checked={this.state.selection.build === "Stable (1.11.0)"}
                  onClick={this.handleChange}
                />
                Stable (1.11.0)
                <span class="checkmark"></span>
              </label>

              <label
                className="radiobox selectedbox"
                style={
                  this.state.selection.build === "Preview(Nightly)"
                    ? { width: "20%", background: "#EE4C2C", color: "white" }
                    : { width: "20%" }
                }
              >
                <input
                  type="radio"
                  value="Preview(Nightly)"
                  name="build"
                  checked={this.state.selection.build === "Preview(Nightly)"}
                  onClick={this.handleChange}
                />{" "}
                Preview(Nightly)
                <span class="checkmark"></span>
              </label>
              <label
                className="radiobox selectedbox"
                style={
                  this.state.selection.build === "LTS(1.8.2)"
                    ? { width: "20%", background: "#EE4C2C", color: "white" }
                    : { width: "20%" }
                }
              >
                LTS(1.8.2)
                <input
                  type="radio"
                  value="LTS(1.8.2)"
                  name="build"
                  checked={this.state.selection.build === "LTS(1.8.2)"}
                  onClick={this.handleChange}
                />{" "}
                <span class="checkmark"></span>
              </label>
            </div>
          </div>

          <div className="parentbox">
            <div className="childbox_one">
              <h4>Your OS</h4>
            </div>
            <div className="childbox_two">
              <label
                className="radiobox selectedbox"
                style={
                  this.state.selection.OS === "Linux"
                    ? { width: "20%", background: "#EE4C2C", color: "white" }
                    : { width: "20%" }
                }
              >
                <input
                  type="radio"
                  value="Linux"
                  checked={this.state.selection.OS === "Linux"}
                  name="OS"
                  onClick={this.handleChange}
                />{" "}
                Linux
                <span class="checkmark"></span>
              </label>
              <label
                className="radiobox selectedbox"
                style={
                  this.state.selection.OS === "MAC"
                    ? { width: "20%", background: "#EE4C2C", color: "white" }
                    : { width: "20%" }
                }
              >
                <input
                  type="radio"
                  value="MAC"
                  name="OS"
                  checked={this.state.selection.OS === "MAC"}
                  onClick={this.handleChange}
                />{" "}
                MAC
                <span class="checkmark"></span>
              </label>
              <label
                className="radiobox selectedbox"
                style={
                  this.state.selection.OS === "Windows"
                    ? { width: "20%", background: "#EE4C2C", color: "white" }
                    : { width: "20%" }
                }
              >
                Windows
                <input
                  type="radio"
                  value="Windows"
                  name="OS"
                  checked={this.state.selection.OS === "Windows"}
                  onClick={this.handleChange}
                />{" "}
                <span class="checkmark"></span>
              </label>
            </div>
          </div>

          <div className="parentbox">
            <div className="childbox_one">
              <h4>Package</h4>
            </div>
            <div className="childbox_two">
              <label
                className="radiobox selectedbox"
                style={
                  this.state.selection.Package === "Conda"
                    ? { width: "12%", background: "#EE4C2C", color: "white" }
                    : { width: "12%" }
                }
              >
                <input
                  type="radio"
                  value="Conda"
                  name="Package"
                  checked={this.state.selection.Package === "Conda"}
                  onClick={this.handleChange}
                />{" "}
                Conda
                <span class="checkmark"></span>
              </label>
              <label
                className="radiobox selectedbox"
                style={
                  this.state.selection.Package === "Pip"
                    ? { width: "12%", background: "#EE4C2C", color: "white" }
                    : { width: "12%" }
                }
              >
                <input
                  type="radio"
                  value="Pip"
                  name="Package"
                  onClick={this.handleChange}
                  checked={this.state.selection.Package === "Pip"}
                />{" "}
                Pip
                <span class="checkmark"></span>
              </label>

              <label
                className="radiobox selectedbox"
                style={
                  this.state.selection.Package === "LibTorch"
                    ? { width: "12%", background: "#EE4C2C", color: "white" }
                    : { width: "12%" }
                }
              >
                <input
                  type="radio"
                  value="LibTorch"
                  name="Package"
                  checked={this.state.selection.Package === "LibTorch"}
                  onClick={this.handleChange}
                />{" "}
                LibTorch
                <span class="checkmark"></span>
              </label>
              <label
                className="radiobox selectedbox"
                style={
                  this.state.selection.Package === "Source"
                    ? { width: "12%", background: "#EE4C2C", color: "white" }
                    : { width: "12%" }
                }
              >
                Source
                <input
                  type="radio"
                  value="Source"
                  name="Package"
                  checked={this.state.selection.Package === "Source"}
                  onClick={this.handleChange}
                />{" "}
                <span class="checkmark"></span>
              </label>
            </div>
          </div>

          <div className="parentbox">
            <div className="childbox_one">
              <h4>Language</h4>
            </div>
            <div className="childbox_two">
              <label
                className="radiobox selectedbox"
                style={
                  this.state.selection.Language === "Python"
                    ? { width: "36%", background: "#EE4C2C", color: "white" }
                    : { width: "36%" }
                }
              >
                <input
                  type="radio"
                  value="Python"
                  name="Language"
                  checked={this.state.selection.Language === "Python"}
                  onClick={this.handleChange}
                />{" "}
                Python
                <span class="checkmark"></span>
              </label>
              <label
                className="radiobox selectedbox"
                style={
                  this.state.selection.Language === "C++/Java"
                    ? { width: "36%", background: "#EE4C2C", color: "white" }
                    : { width: "36%" }
                }
              >
                <input
                  type="radio"
                  value="C++/Java"
                  name="Language"
                  checked={this.state.selection.Language === "C++/Java"}
                  onClick={this.handleChange}
                />{" "}
                C++/Java
                <span class="checkmark"></span>
              </label>
            </div>
          </div>

          <div className="parentbox">
            <div className="childbox_one">
              <h4>Compute Platform</h4>
            </div>
            <div className="childbox_two">
              <label
                className="radiobox selectedbox"
                style={
                  this.state.selection.Compute === "CUDA 10.2"
                    ? { width: "12%", background: "#EE4C2C", color: "white" }
                    : { width: "12%" }
                }
              >
                <input
                  type="radio"
                  value="CUDA 10.2"
                  name="Compute"
                  checked={this.state.selection.Compute === "CUDA 10.2"}
                  onClick={this.handleChange}
                />{" "}
                CUDA 10.2
                <span class="checkmark"></span>
              </label>
              <label
                className="radiobox selectedbox"
                style={
                  this.state.selection.Compute === "CUDA 11.3"
                    ? { width: "12%", background: "#EE4C2C", color: "white" }
                    : { width: "12%" }
                }
              >
                <input
                  type="radio"
                  value="CUDA 11.3"
                  name="Compute"
                  checked={this.state.selection.Compute === "CUDA 11.3"}
                  onClick={this.handleChange}
                />{" "}
                CUDA 11.3
                <span class="checkmark"></span>
              </label>

              <label
                className="radiobox selectedbox"
                style={
                  this.state.selection.Compute === "ROCm 4.2 (beta)"
                    ? {
                        width: "19%",
                        background: "#EE4C2C",
                        color: "white",
                        textDecorationLine: "line-through",
                      }
                    : { width: "19%", textDecorationLine: "line-through" }
                }
              >
                <input
                  type="radio"
                  value="ROCm 4.2 (beta)"
                  name="Compute"
                  checked={this.state.selection.Compute === "ROCm 4.2 (beta)"}
                  onClick={this.handleChange}
                />
                ROCm 4.2 (beta)
                <span class="checkmark"></span>
              </label>
              <label
                className="radiobox selectedbox"
                style={
                  this.state.selection.Compute === "CPU"
                    ? { width: "5%", background: "#EE4C2C", color: "white" }
                    : { width: "5%" }
                }
              >
                CPU
                <input
                  type="radio"
                  value="CPU"
                  name="Compute"
                  checked={this.state.selection.Compute === "CPU"}
                  onClick={this.handleChange}
                />{" "}
                <span class="checkmark"></span>
              </label>
            </div>
          </div>

          <div className="parentbox">
            <div className="childbox_one">
              <h4>Run this Command:</h4>
            </div>
            <div className="childbox_two">
              {console.log(this.state.selection.Message)}
              <textarea
                readOnly={true}
                className="radiobox"
                value={this.state.selection.Message}
                style={{ width: "82%", padding: "10mm", fontSize: "3.5mm" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default pytourch;
