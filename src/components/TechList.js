import React, { Component } from "react";

class TechList extends Component {
  state = {
    newTech: "",
    techs: ["Node.js", "ReactJS", "React Native"]
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  handleDelete = techs => {
    this.setState({ techs: this.state.techs.filter(t => t !== techs) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(techs => (
            <li key={techs}>
              {techs}
              <button type="button" onClick={() => this.handleDelete(techs)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
