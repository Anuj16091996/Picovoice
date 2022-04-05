import React from "react";
import "./clientLib.css";
import data from "./data";

class clientLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      clinetSelection: {},
    };
  }

  changeState = (object) => {
    console.log(object);
  };

  render() {
    let dataBaseArrayItems = Object.entries(data).map(([index, objects]) => {
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
              {console.log(data)}
              <table>
                <tr>{dataBaseArrayItems}</tr>
              </table>
            </div>
            <table>
              <tr>
                <tr>asd</tr>
                <tr>asd</tr>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default clientLibrary;
