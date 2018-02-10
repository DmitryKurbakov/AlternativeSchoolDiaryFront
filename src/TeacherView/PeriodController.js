import React, { Component } from 'react';



const loadPeriods = () => {
  return {
    id: "1",
    name: "1 Семестр"
  }
}

class PeriodController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      periodid: 1

    }

    //дефолтны значение периода 
    this.props.setPeriod(this.state.periodid)

    // change сможет ссылаться по this к компоненту   
    this.change = this.change.bind(this);
  }


  change(event) {
    this.props.setPeriod(event.target.value)
    this.setState({
      periodid: event.target.value
    })
  }

  render() {
    return (
      <div className='period-controller'>
      <p id='choose-period-paragraph'>Выбрать дату:</p>
       <select className="form-control period-controller" onChange={this.change} value={this.state.periodid}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>

        </div>
      );
  }
}

export default PeriodController;