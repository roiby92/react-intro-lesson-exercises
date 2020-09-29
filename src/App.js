import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getStuff() {
    const name = 'roi'
    return (
      <div>{name}</div>
    )
  }

  getMorningGreeting = () => "good morning"

  getEveningGreeting = () => "good eavning"

  showCompany = (name, revenue) => {
    return <div id={name}>{name} makes {revenue} every year</div>
  }

  getClassName(temperature) {
     let name =null 
    if (temperature < 15){
       name = "freezing"
    }
    else if (temperature >=15 && temperature <30){
      name = "fair" 
    }
    else{
      name = "hell-scape"
    }

    return <div id="weatherBox" class={name}></div>
  }

  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]
    const companiesWeaper = companies.map(c => {
      return this.showCompany(c.name, c.revenue)
    })

    return (
      <div>
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <div className="exercise" id="spotcheck-1">
            {this.getStuff()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            {Date.now() < "12:00" ? this.getMorningGreeting() : this.getEveningGreeting()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
            {[
              this.getMorningGreeting(),
              this.getEveningGreeting(),
              <p>some text</p>
            ]}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {companiesWeaper}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {this.getClassName(15)}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
