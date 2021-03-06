import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

import YOUTUBE_API_KEY from '../config/youtube.example.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super();
    
    this.state = {
      videos: [],
      currentVideo: exampleVideoData[0]
    };  
  }
  
  
  playVideo(video) {
    this.setState({ currentVideo: video });
  }
  
  searchUpdate(e) {
    let ev = e.nativeEvent;
    
    searchYouTube({
      q: ev.target.value,
      maxResults: 5,
      key: YOUTUBE_API_KEY
    }, (data) => {
      console.log(data);
      this.setState(
        {
          videos: data.items,
          currentVideo: data.items[0]
        });
    });
    
  }
  
  
  componentDidMount() {
    searchYouTube({
      q: 'kittens',
      maxResults: 5,
      key: YOUTUBE_API_KEY
    }, (data) => {
      console.log(data);
      this.setState(
        {
          videos: data.items,
          currentVideo: data.items[0]
        });
    });/*this.state.videos = data;
    this.state.currentVideo = this.state.videos[0];*/
  }
  
  
  
  render() {
    //console.log(this.state.currentVideo);
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onType={this.searchUpdate.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onClickPlay={this.playVideo.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }

}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

