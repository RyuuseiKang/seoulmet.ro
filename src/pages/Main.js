import React from "react";

import AutosizeInput from 'react-input-autosize';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import "../App.css";

import "../Style.css";
import "./css/Main.css"

class Main extends React.Component {
  constructor (props) {
		super(props);
		this.state = {
      startStation: '',
      viaStation: [],
      endStation: '',
		};
  }

  updateInputValue = (input, event) => {
		const newState = {};
		newState[input] = event.target.value;
		this.setState(newState);
	};
  
  render() {
    return (
      <div>
        <AutosizeInput
          class="inputBox"
          value={this.state.startStation}
          placeholder="강남"
          name="startStation"
          onChange={this.updateInputValue.bind(this, 'startStation')}
          inputStyle={{ borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 2.5, borderColor: '#00000000'}}
        />
        <span class="inputTextBlock">역 </span>
        <FontAwesomeIcon icon={faArrowRight} style={{backgroundColor: '#00000000', paddingLeft: 15, paddingRight: 10, fontSize: 30}}/>
        <AutosizeInput
          class="inputBox"
          value={this.state.endStation}
          placeholder="서울"
          name="endStation"
          onChange={this.updateInputValue.bind(this, 'endStation')}
          inputStyle={{ borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 2.5, borderColor: '#00000000'}}
        /><span class="inputTextBlock">역 </span>
        <div>
          <input type="submit" value="경로 검색"/>
        </div>
      </div>
    );
  }
}

export default Main;
