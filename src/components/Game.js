import React, { Component } from 'react';
import Starts from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';
import DoneFrame from './DoneFrame';
import _ from 'lodash';
import possibleCombinationSum from './possibleCombinationSum';

class Game extends Component {

  static randomNumber= ()=>1 + Math.floor(Math.random()*9);

  static initialState =()=>({
    selectedNumbers:[],
    ramdonNumberOfStars: Game.randomNumber(),
    usedNumbers: [],
    answerIsCorret: null,
    redraws: 5,
    doneStatus: null,
  });

  state = Game.initialState();

  resetGame= ()=>{
    this.setState(Game.initialState());
  };

  selectNumber = (clickNumber)=>{
    if(this.state.selectedNumbers.indexOf(clickNumber)>=0){return;}
    this.setState(prevState =>({
      answerIsCorret: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickNumber)
    }));
  };

  unselectNumber= (clickNumber)=>{
    this.setState(prevState =>({
      answerIsCorret: null,
      selectedNumbers: prevState.selectedNumbers.filter(number=>number !== clickNumber)
    }));
  };

  checkAnswer = ()=> {
    this.setState(prevState=>({
      answerIsCorret: prevState.ramdonNumberOfStars ===
        prevState.selectedNumbers.reduce((acc,n)=>acc+n,0)
    }));
  };

  acceptAnswer=()=>{
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorret: null,
      ramdonNumberOfStars: Game.randomNumber(),
    }), this.updateDoneStatus);
  };

  redraw=()=>{
    if(this.state.redraws===0){return;}
    this.setState(prevState=>({
      selectedNumbers: [],
      answerIsCorret: null,
      ramdonNumberOfStars: Game.randomNumber(),
      redraws: prevState.redraws -1,

    }),this.updateDoneStatus);
  };

  possibleSolutions=({ramdonNumberOfStars, usedNumbers})=>{
    const possibleNumbers= _.range(1,10).filter(number =>
      usedNumbers.indexOf(number) === -1
    );

    return possibleCombinationSum(possibleNumbers,ramdonNumberOfStars);
  };

  updateDoneStatus = () =>{
    this.setState(prevState => {
      if(prevState.usedNumbers.length === 9){
        return {doneStatus: 'Done. Nice'};
      }
      if(prevState.redraws === 0 && !this.possibleSolutions(prevState)){
        return {doneStatus: 'Game Over!'};
      }

    });
  };


  render() {
    const {
        selectedNumbers,
        ramdonNumberOfStars,
        answerIsCorret,
        usedNumbers,
        redraws,
        doneStatus} = this.state;
    return (
      <div className="container">
        <h3>Play nine</h3>
        <div className="row">
            <Starts numberOfStars={ramdonNumberOfStars}/>
            <Button selectedNumbers={selectedNumbers}
              redraws={redraws}
              checkAnswer={this.checkAnswer}
              acceptAnswer={this.acceptAnswer}
              redraw= {this.redraw}
              answerIsCorret={answerIsCorret}

              />
            <Answer selectedNumbers={selectedNumbers}
              unselectNumber={this.unselectNumber}
              />
        </div>
        {doneStatus ?
            <DoneFrame doneStatus={doneStatus}
              resetGame={this.resetGame}/>:
            <Numbers selectedNumbers={selectedNumbers}
                selectNumber = {this.selectNumber}
                usedNumbers = {usedNumbers}
                />
        }
    </div>
    );
  }
}

export default Game;
