var searchYouTube = (options, callback) => {
  // TODO
  console.log(options);
  
  $.get({
    url:'https://www.googleapis.com/youtube/v3/search',
    data: _.extend(options, { part: 'snippet'}),
    success: callback    
  });
};

export default searchYouTube;
