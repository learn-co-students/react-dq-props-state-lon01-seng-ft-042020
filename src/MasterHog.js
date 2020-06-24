import React, { Component } from 'react'
import Master from './assets/master-hog.png'
import BabyHog from './BabyHog'
import offspring from './db.js';

export default class MasterHog extends Component {

  renderBabyHogs = () => {
    // map over offspring array and return an array of the correct JSX
    return offspring.map((offspring) =>
      <BabyHog
        key={offspring.id}
        name={offspring.name}
        hobby={offspring.hobby}
        eyeColor={this.state.eyeColor}
      />
    )
  }

  constructor() {
    super()
    this.state = {
      eyeColor: "blue",
    }
  }


  changeEyeColor = (e) => {
    // debugger
    this.setState({
      eyeColor: e.target.value
    })
  }

  handleFormSubmission = (e) => {
    // debugger
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmission}>
          <input type="text" name="username" />
          <input type="text" name="password" />
          <input type="submit" />
        </form>
        <input type="radio" name="eyeColor" value="blue" onChange={this.changeEyeColor} />
        Blue<br></br>
        <input type="radio" name="eyeColor" value="sun" onChange={this.changeEyeColor} />
        Sun<br></br>
        <input type="radio" name="eyeColor" value="glowing" onChange={this.changeEyeColor} />
        Glowing<br></br>

        <h2>Name: Master Blaster</h2>
        <h3>Weight: 2.54 Tons</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>

        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt="" />
        </div>

        <ul className="hoglist">
          {this.renderBabyHogs()}
        </ul>

      </div>
    )
  }

}
