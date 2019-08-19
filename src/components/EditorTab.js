import React, { Component } from 'react';
import { connect } from 'react-redux';

class Game extends Component {

    static navigationOptions = {
      gesturesEnabled: false,
    };
  
    constructor(props) {
      super(props);
      this.LevelsFactory = new LevelsFactory();
      this.state = {
        currentLevel: this.props.navigation.getParam('currentLevel', 1),
      };
    }
  
    handleGameWin = () => {
      // Update level and clear move
      const { highestLevel, addHighestLevel, clearMove } = this.props;
      if (this.state.currentLevel === highestLevel) {
        addHighestLevel();
        storageSetHighestLevel(this.state.currentLevel + 1);
      }   
      clearMove();
      this.props.navigation.push('Game', {
        currentLevel: this.state.currentLevel + 1,
      });
    }
  
    render() {
      const { gameMoves, addMove, clearMove } = this.props;
      const { width, height, colors } = this.LevelsFactory.getSetupForLevel(this.state.currentLevel);
  
      return (
        <View style={{ flex: 1 }}>
        </View>
      );
    }
  }
  
  function mapStateToProps(state, props) {
    return {
      highestLevel: state.gameReducer.highestLevel,
      gameMoves: state.gameReducer.gameMoves,
    }
  }
  
  function mapDispatchToProps(dispatch, props) {
    return {
      addHighestLevel: () => {
        dispatch({
          type: 'ADD_HIGHEST_LEVEL',
        });
      },
      addMove: () => {
        dispatch({
          type: 'ADD_GAME_MOVE',
        });
      },
      clearMove: () => {
        dispatch({
          type: 'CLEAR_GAME_MOVE',
        });
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Game);