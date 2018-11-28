var searchYouTube = (options, callback) => {
  
  let parameters = {
    videoEmbeddable: true,
    part: 'snippet',
    type: 'video'
  };
  
  _.extend(options, parameters);  
  
  $.get({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: options,
    success: callback,
  });
};

export default searchYouTube;
