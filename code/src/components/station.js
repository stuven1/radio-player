import React from "react"

class Station extends React.Component {
  render() {
    return (
      <div className="big-box" style={{ backgroundColor: `#${this.props.stationColor}` }}>
        <div className="box-left">
          <img src={this.props.stationImg} alt="my radiostations" />
        </div>
        <div className="box-right">
          <h1>{this.props.stationsName}</h1>

          <audio className="controls" controls>
            <source src={this.props.stationLiveAudioUrl} type="audio/mp3" />
            <track kind="captions" />
          </audio>
        </div>
      </div>
    )
  }
}

export default Station
