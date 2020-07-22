import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  console.log(props);
  if (props.song) {
    return (
      <div className="ui card">
        <div class="content">
          <div class="header">Details For: </div>
        </div>
        <div className="content">
          <h4 class="ui sub header">Title: {props.song.title}</h4>
          <div class="summary">
          <p>Duration: {props.song.duration}</p>
        </div>
        </div>
        
      </div>
    );
  }
  return (
    <div>Select a Song</div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
