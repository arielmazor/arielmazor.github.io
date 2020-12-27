const videosArr = [7020, 7020, 7020]
var playTimeOut;
var inAction = false;

function playVideo(i) {
  if (i == videosArr.length) {
    i = 0;
  }

  $('.vid').each(function () {
    $(this).get(0).pause();
    $(this).get(0).currentTime = 0;
  });

  $(".video-interaction-wrap").removeClass("selected");
  $(`.video-interaction-wrap.i-${i}`).addClass('selected');
  $(`.video-wrapper`).removeClass('show');
  $(`.video-wrapper.wrap-${i}`).addClass('show');
  $(`.video-wrapper.wrap-${i} .vid`).get(0).play();


  playTimeOut = setTimeout(function () {
    playVideo(i + 1);
  }, videosArr[i]);
}

function onInteractionClick(i) {
  runPlayVideo(i);
}

function runPlayVideo(i) {
  if (playTimeOut) {
    clearTimeout(playTimeOut);
  }
  playVideo(i);
}

$(document).on('scroll', function () {
  console.log($(window).scrollTop())
  if ($(window).scrollTop() >= 700) {
    runPlayVideo(0);
  }
})

$(document).ready(function () {
  if (playTimeOut)

    if ($(window).scrollTop() >= 700) {
      runPlayVideo(0)
    }
});