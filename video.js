video = "https://www.youtube.com/watch?v=WQ_Q3JLlxbQ"
auth = {'login': 'stass0710@gmail.com', 'password': 'Rssqv312'}

function makeAuthorizeCall(auth) {
  console.log("Calling video.list...")

  youtube.videos.list({
   auth: auth,
   id: "WQ_Q3JLlxbQ",
   part: "viewCount", 
  }, function(err, response) {
    if (err) {
      console.log(err)
      return
    }
    if (response.data.items) {
      if (response.data.items[0]) {
        console.log("Fond video. Update title...")
        updateVideo(response.data.items[0], auth)
      } else {
        console.log("0 items in list.")
      }
    } else {
      console.log("No items found\n" + response)
      return
    }
  })
}

function updateVideo(video, auth) {
  var viewText = video.statistics.viewCount.toLocaleString()
  video.snippet.title = viewText + "лайков и удалю канал!!!"
  console.log("Updating tittle to '" + video.snippet.title + "'")
  console.log(video)
  youtube.videos.update({
    auth: auth,
    part: 'viewCount',
    resource: video,   
  }, 
  function(err, response) {
    if (err) {
      console.log(err)
      return
    }
    if (response.data.items) {
      if (response.data.items[0]) {
        console.log("Complete!")
      } else {
        console.log("0 items in list.")      
    }
  }  else {
    console.log("No items found\n")
    return
  }
 })
}
