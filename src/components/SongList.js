import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from '../actions';

class SongList extends Component {  

  renderList = () => {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.selectSong(song)}>Show Detail</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };

  render() {      
    return (
      <div className="ui middle aligned divided list">{this.renderList()}</div>
    );
  }
}

const mapsStateToProps = (state) => {
    
  return { songs: state.songs };
};

export default connect(mapsStateToProps, {
    selectSong
})(SongList);
