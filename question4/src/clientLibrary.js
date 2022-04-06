import React from "react";
import "./clientLib.css";
import data from "./data";
import darkModeIcon from "./darkmode-removebg-preview.png";
import lightModeIcon from "./lightmode-removebg-preview.png";
import codeCopy from "./codeCopy-removebg-preview.png";

class clientLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      clinetSelection: {
        Language: "C#",
        moreInformation: "For more information, ",
        Link: {
          Link: "https://cloud.google.com/dotnet/docs/setup",
          content: "Setting Up a C# Development Environment.",
        },
        Condition:
          "If you are using Visual Studio 2017 or higher, open nuget package manager window and type the following:",
        Commad: "Install-Package Google.Apis",
        Condition_second:
          "If you are using .NET Core command-line interface tools to install your dependencies, run the following command:",
        Commad_seocnd: "dotnet add package Google.Apis",
        darkmode: false,
      },
    };
  }

  changeDarkmode = () => {
    let statusCopy = Object.assign({}, this.state);

    if (statusCopy.clinetSelection.darkmode) {
      statusCopy.clinetSelection.darkmode = false;
    } else {
      statusCopy.clinetSelection.darkmode = true;
    }
    this.setState(statusCopy);
  };

  changeState = (object) => {
    // console.log(object);
  };

  render() {
    let allLanguages = Object.entries(data).map(([index, objects]) => {
      return (
        <td>
          <button onClick={() => this.changeState(objects)}>
            {objects.Language}
          </button>
        </td>
      );
    });

    return (
      <div>
        <div className="centrecontent">
          <div className="container">
            <div className="border_down">
              {console.log(this.state.clinetSelection.darkmode)}
              <table>
                <tr>{allLanguages}</tr>
              </table>
            </div>
            <table>
              <tr>
                {this.state.clinetSelection.moreInformation}
                <a href={this.state.clinetSelection.Link.Link}>
                  {this.state.clinetSelection.Link.content}
                </a>
              </tr>
              <br></br>
              <tr>
                {this.state.clinetSelection.Condition != null
                  ? this.state.clinetSelection.Condition
                  : null}
              </tr>
              <br></br>
              <div
                style={
                  this.state.clinetSelection.darkmode
                    ? { backgroundColor: "#283142", color: "white" }
                    : { backgroundColor: "#F1F3F4" }
                }
                className="commandlenght"
              >
                <div className="commandCopy">
                  <tr>{this.state.clinetSelection.Commad}</tr>
                </div>
                <div className="Modes">
                  <div
                    className="inline_div"
                    onClick={() => this.changeDarkmode()}
                  >
                    <img
                      src={
                        this.state.clinetSelection.darkmode
                          ? lightModeIcon
                          : darkModeIcon
                      }
                      alt="darkModeButton"
                    />
                  </div>
                  <div className="inline_div">
                    <img src={codeCopy} alt="codeCopy" />
                  </div>
                </div>
              </div>
              <br></br>
              <tr>
                {this.state.clinetSelection.Condition_second != null
                  ? this.state.clinetSelection.Condition_second
                  : null}
              </tr>
              <br></br>
              <div
                style={
                  this.state.clinetSelection.darkmode
                    ? { backgroundColor: "#283142", color: "white" }
                    : { backgroundColor: "#F1F3F4" }
                }
                className={
                  this.state.clinetSelection.Condition_second != null
                    ? "commandlenght"
                    : "block"
                }
              >
                <div className="commandCopy">
                  <tr>
                    {this.state.clinetSelection.Commad_seocnd != null
                      ? this.state.clinetSelection.Commad_seocnd
                      : null}
                  </tr>
                </div>
                <div className="Modes">
                  <div
                    className="inline_div"
                    onClick={() => this.changeDarkmode()}
                  >
                    <img
                      src={
                        this.state.clinetSelection.darkmode
                          ? lightModeIcon
                          : darkModeIcon
                      }
                      alt="darkModeButton"
                    />
                  </div>
                  <div className="inline_div">
                    <img src={codeCopy} alt="codeCopy" />
                  </div>
                </div>
              </div>
              <br></br>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default clientLibrary;
