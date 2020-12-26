const videosArr = [2020, 2020, 2020]

function playVideo(i) {
  console.log(i);
  if (i == videosArr.length) {
    i = 0;
  }

  // $('.vid').each(function() {
  //   $(this).get(0).pause();
  //   $(this).get(0).currentTime = 0;
  // });

  $(".video-interaction-wrap").removeClass("selected");
  $(`.video-interaction-wrap.i-${i}`).addClass('selected');
  $(`.video-wrapper`).removeClass('show');
  $(`.video-wrapper.wrap-${i}`).addClass('show');
  // $(`.video-wrapper.wrap-${i} .vid${i}`).play();


  setTimeout(function() {
    playVideo(i + 1);    
  }, videosArr[i]);
}

playVideo(0)