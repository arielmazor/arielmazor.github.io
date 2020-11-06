var templateData = {
  name: "ariel1",
  title: "ariel2",
  discordLink: null,
  instagramLink: null,
  behanceLink: null,
  about: "ariel2",
};

/* -----------------------------------------------
nextStep
----------------------------------------------- */
function nextStep(stepNum) {
  var _id = `step${stepNum}`
  $(".step .step-title").removeClass("active");
  $(".step .wrapper").removeClass("active");
  $(`#${_id} .step-title`).addClass("active");
  $(`#${_id} .wrapper`).addClass("active");
  console.log(_id)

}

function ajaxPost() {

  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "http://localhost:9393/api/test",
    data: JSON.stringify({}),
    dataType: 'json',
    success: function(data) {
      debugger
      alert("success!")
    },
    error: function(e) {
      alert("Error!")
      console.log("ERROR: ", e);
    }
  });


}


function showPreview() {
  templateData.name = $("#input1").val();
  templateData.title = $("#input2").val();
  templateData.discordLink = $("#discord-link-input").val();
  templateData.instagramLink = $("#instagram-link-input").val();
  templateData.behanceLink = $("#behance-link-input").val();
  templateData.about = $(".field .textarea").val();


  var compiled_template = Handlebars.compile(templateStr);
  var html = compiled_template(templateData);
  var ifrm = document.querySelector("#template-iframe")
  let doc = ifrm.contentDocument ? ifrm.contentDocument : ifrm.contentWindow.document;

  doc.open();
  doc.write(html);
  doc.close();


  $(".iframe-wrapper").addClass("show")
  $("body").css("overflow", "hidden")
  $("#template-iframe").css("border", "none")
  $(".iframe-body ").css("background", "#E7E7E7")
    // setTimeout(function() {
    //   if (templateData.discordLink == "") {
    //     console.log(templateData.discordLink == "")
    //     $(".discord-icon").addClass("close");
    //   } else {
    //     $(".discord-icon").removeClass("close");
    //   }
    //   if (templateData.instagramLink == "") {
    //     $(".instagram-icon").addClass("close");
    //   } else {
    //     $(".instagram-icon").removeClass("close");
    //   }
    //   if (templateData.behanceLink == "") {
    //     $(".behance-icon").addClass("close");
    //   } else {
    //     $(".behance-icon").removeClass("close");
    //   }
    //   $(".discord-icon").addClass("close");

  // }, 1000);
}



function valueCheck() {
  if (!$("#input1").val() == "") {
    if (!$("#input2").val() == "") {
      $("#step1 ._btn").removeClass("disable")
      $("#step2 .step-title").removeClass("_disable")
    }
  } else {
    $("#step1 ._btn").addClass("disable")
    $("#step2 .step-title").addClass("_disable")
  }
  if (!$(".textarea").val() == "") {
    $("#step2 ._btn").removeClass("disable")
    $("#step3 .step-title").removeClass("_disable")

  } else {
    $("#step2 ._btn").addClass("disable")
    $("#step3 .step-title").addClass("_disable")
  }


}

jQuery(document).ready(function() {
  nextStep(1);
})