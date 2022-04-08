import React from "react";
import "./clientLib.css";
import data from "./data";
import darkModeIcon from "./darkmode-removebg-preview.png";
import lightModeIcon from "./lightmode-removebg-preview.png";
import codeCopy from "./codeCopy-removebg-preview.png";
import lightCodeCopy from "./LightcodeCopy-removebg-preview.png";
import downarrow from "./down.png";

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
  setClipboard(command) {
    navigator.clipboard.writeText(command).then(
      function () {
        setTimeout(function () {
          document.getElementById("clipboard").style.display = "none";
        }, 2000);
        document.getElementById("clipboard").style.display = "block";
      },
      function () {
        throw Error;
      }
    );
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
    let statusCopy = Object.assign({}, this.state);
    statusCopy.clinetSelection.Language = object.Language;
    statusCopy.clinetSelection.Link = object.Link;
    statusCopy.clinetSelection.Condition = object.Condition;
    statusCopy.clinetSelection.Commad = object.Commad;
    statusCopy.clinetSelection.Condition_second = object.Condition_second;
    statusCopy.clinetSelection.Commad_seocnd = object.Commad_seocnd;
    this.setState(statusCopy);
  };

  render() {
    let morelanguageOptions = Object.entries(data).map(([index, objects]) => {
      if (index > 7) {
        return <p>{objects.Language}</p>;
      }
    });
    let allLanguages = Object.entries(data).map(([index, objects]) => {
      if (index < 7) {
        return (
          <td>
            <button onClick={() => this.changeState(objects)}>
              {objects.Language}
            </button>
          </td>
        );
      }
    });

    return (
      <div>
        <div className="clipboard" id="clipboard">
          {" "}
          Code Copied to clipboard
        </div>
        <div className="centrecontent">
          <div className="container">
            <div className="border_down">
              <div className="dropdown">
                <table>
                  <tr>
                    {allLanguages}
                    <div className="moreArrow">
                      <td>
                        <button>More</button>
                        <img
                          className="downarraowcss"
                          src={downarrow}
                          alt="downarraow"
                        />
                      </td>
                      <tr>
                        <div class="dropdown-content">
                          {morelanguageOptions}
                        </div>
                      </tr>
                    </div>
                  </tr>
                </table>
              </div>
            </div>
            <table className="tablebackgroundcolour">
              <div className="trcontent">
                <tr>
                  {this.state.clinetSelection.moreInformation}
                  <a href={this.state.clinetSelection.Link.Link}>
                    {this.state.clinetSelection.Link.content}
                  </a>
                </tr>
              </div>

              <br></br>
              <div className="trcontent">
                <tr>
                  {this.state.clinetSelection.Condition != null
                    ? this.state.clinetSelection.Condition
                    : null}
                </tr>
              </div>

              <br></br>
              <div
                style={
                  this.state.clinetSelection.darkmode
                    ? { backgroundColor: "#283142", color: "white" }
                    : { backgroundColor: "#F1F3F4", display: "block" }
                }
                className="commandlenght"
              >
                <div className="commandCopy">
                  <tr>{this.state.clinetSelection.Commad}</tr>
                </div>
                <div className="Modes">
                  <div
                    className="inline_div img-hover"
                    onClick={() => this.changeDarkmode()}
                  >
                    <div className="img-hover__text">
                      {this.state.clinetSelection.darkmode
                        ? "Light Mode Theme"
                        : "Dark mode theme"}
                    </div>
                    <img
                      src={
                        this.state.clinetSelection.darkmode
                          ? lightModeIcon
                          : darkModeIcon
                      }
                      alt="darkModeButton"
                    />
                  </div>
                  <div
                    className="inline_div img-hover"
                    onClick={() =>
                      this.setClipboard(this.state.clinetSelection.Commad)
                    }
                  >
                    <div className="img-hover__text">Copy Code</div>
                    <img
                      src={
                        this.state.clinetSelection.darkmode
                          ? lightCodeCopy
                          : codeCopy
                      }
                      alt="codeCopy"
                      title="data"
                    />
                  </div>

                  {/* <div className="dropdown_Modes_Hover"> Hello world</div> */}
                </div>
              </div>
              <br></br>
              <div className="trcontent">
                <tr>
                  {this.state.clinetSelection.Condition_second != null
                    ? this.state.clinetSelection.Condition_second
                    : null}
                </tr>
              </div>
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
                    className="inline_div img-hover"
                    onClick={() => this.changeDarkmode()}
                  >
                    <div className="img-hover__text">
                      {this.state.clinetSelection.darkmode
                        ? "Light Mode Theme"
                        : "Dark mode theme"}
                    </div>
                    <img
                      src={
                        this.state.clinetSelection.darkmode
                          ? lightModeIcon
                          : darkModeIcon
                      }
                      alt="darkModeButton"
                    />
                  </div>
                  <div
                    className="inline_div img-hover"
                    onClick={() =>
                      this.setClipboard(
                        this.state.clinetSelection.Commad_seocnd
                      )
                    }
                  >
                    <div className="img-hover__text">Copy Code</div>
                    <img
                      src={
                        this.state.clinetSelection.darkmode
                          ? lightCodeCopy
                          : codeCopy
                      }
                      alt="codeCopy"
                    />
                  </div>
                </div>
              </div>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default clientLibrary;
