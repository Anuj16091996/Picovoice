import React from "react";
import "./clientLib.css";
import data from "./data";

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
      },
    };
  }

  changeState = (object) => {};

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
              <table>
                <tr>{allLanguages}</tr>
              </table>
            </div>
            <table>
              {console.log(this.state.clinetSelection)}
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
              <div className="commandCopy">
                <tr>{this.state.clinetSelection.Commad}</tr>
              </div>
              <br></br>
              <tr>
                {this.state.clinetSelection.Condition_second != null
                  ? this.state.clinetSelection.Condition_second
                  : null}
              </tr>
              <br></br>
              <div
                className={
                  this.state.clinetSelection.Commad_seocnd != null
                    ? "commandCopy"
                    : ""
                }
              >
                <tr>
                  {this.state.clinetSelection.Commad_seocnd != null
                    ? this.state.clinetSelection.Commad_seocnd
                    : null}
                </tr>
              </div>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default clientLibrary;
