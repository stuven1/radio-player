import React from "react"
import Station from "./station"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      radioStations: []
    }
  }

  componentDidMount() {
    fetch("https://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        radioStations: [json.channels[0], json.channels[9], json.channels[18],
          json.channels[35], json.channels[12]]
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.radioStations.map((item) => {
          return <Station
            stationColor={item.color}
            stationImg={item.image}
            stationLiveAudio={item.liveaudio}
            stationLiveAudioUrl={item.liveaudio.url}
            stationsName={item.name}
            channelType={item.type} />
        })}
      </div>
    )
  }
}

export default App
