window.templateStr = `
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="https://arielmazor.github.io/site/style/main.css" media="all">
  <link rel="stylesheet" type="text/css" href="https://arielmazor.github.io/site/style/Common.css" media="all ">
  <link rel="stylesheet" type="text/css" href="https://arielmazor.github.io/site/style/gallery.css" media="all ">
  <link rel="stylesheet" type="text/css" href="https://arielmazor.github.io/site/style/modal.css" media="all ">
  <link rel="stylesheet" type="text/css" href="https://arielmazor.github.io/site/style/responsive-tablet.css" media="all ">
  <title>ocean</title>
  <link rel="shortcut icon" href="./site/images/favicon-32x32.png" type="image/x-icon">
</head>

<body class="iframe-body">
  <div class="modal f-c">
    <div class="cancel-wrapper">
      <div onclick="closeModal()" class="cancel-icon">
        <img src="./site/images/cancel.svg" alt="">
      </div>
    </div>
    <div class="wrapper f-c">
      <div id='img1' class="image-wrapper design all">
        <img class="design" src="https://s3.amazonaws.com/plloyd/photography/flex-gallery1.jpg" alt="Image 1">
      </div>
      <div id='img2' class="image-wrapper apps all">
        <img class="apps" src="https://s3.amazonaws.com/plloyd/photography/flex-gallery2.jpg" alt="Image 2">
      </div>
      <div id='img3' class="image-wrapper design all">
        <img class="design" src="https://s3.amazonaws.com/plloyd/photography/flex-gallery3.jpg" alt="Image 3">
      </div>
      <div id='img4' class="image-wrapper design all">
        <img class="design" src="https://s3.amazonaws.com/plloyd/photography/flex-gallery4.jpg" alt="Image 4">
      </div>
      <div id='img5' class="image-wrapper design all">
        <img class="design" src="https://s3.amazonaws.com/plloyd/photography/flex-gallery5.jpg" alt="Image 5">
      </div>
      <div id='img6' class="image-wrapper apps all">
        <img class="apps" src="https://s3.amazonaws.com/plloyd/photography/flex-gallery6.jpg" alt="Image 6">
      </div>
      <div id='img7' class="image-wrapper apps all">
        <img class="apps" src="https://s3.amazonaws.com/plloyd/photography/flex-gallery7.jpg" alt="Image 7">
      </div>
      <div id='img8' class="image-wrapper design all">
        <img class="design" src="https://s3.amazonaws.com/plloyd/photography/flex-gallery8.jpg" alt="Image 8">
      </div>
      <div id='img9' class="image-wrapper apps all">
        <img class="apps" src="https://s3.amazonaws.com/plloyd/photography/flex-gallery9.jpg" alt="Image 9">
      </div>
      <div id='img10' class="image-wrapper design all">
        <img class="design" src="https://s3.amazonaws.com/plloyd/photography/flex-gallery10.jpg" alt="Image 10">
      </div>
      <div id='img11' class="image-wrapper design all">
        <img class="design" src="https://s3.amazonaws.com/plloyd/photography/flex-gallery11.jpg" alt="Image 11">
      </div>
      <div id='img12' class="image-wrapper apps all">
        <img class="apps" src="https://s3.amazonaws.com/plloyd/photography/flex-gallery12.jpg" alt="Image 12">
      </div>
    </div>

  </div>
  <header>
    <nav class="nav">
   
        <div class="pi-pannels f-c ">
        {{#if behanceLink}}
          <a class="link-wrapper behance-icon f-c " href="{{behanceLink}} ">
            <img class="icons  " src="https://arielmazor.github.io/site/images/behance-logo.svg " alt=" ">
          </a>
        {{/if}}
        {{#if instagramLink}}
          <a class="link-wrapper f-c instagram-icon" href="{{instagramLink}} ">
           <img class="icons " src="https://arielmazor.github.io/site/images/instagram-logo.svg" alt=" ">
          </a>
        {{/if}}
        {{#if discordLink}}
        <a class="link-wrapper f-c discord-icon " href="{{discordLink}}">
            <img class="icons " src="https://arielmazor.github.io/site/images/discord.svg " alt=" ">
        </a>
        {{/if}}
      </div>


      <div class=" menu-wrapper">
        <div class="title f-c btn-a">About Me</div>
        <div class="title f-c btn-p">Protfolio</div>
      </div>
      <div class="logo-wrapper f-c ">
        <div class="logo ">Ocean</div>
      </div>

    </nav>
  </header>
  <main class="container">
    <div class="home f-c ">
      <div class="wrapper ">
        <div class="txt-wrapper ">
          <h1 class="title">Hi, I'm {{name}}</h1>
          <h2 class="title">
          {{title}}
          </h2>
          <div class="protfilio-btn f-c ">protfilio →</div>
        </div>
        <div class="img-wrapper f-c">
          <img class="img " src="https://arielmazor.github.io/site/images/home-gif.gif" alt="gif">
        </div>
      </div>
      <div class="background-wrapper f-c ">

        <div class="background "></div>
      </div>
    </div>
    <div class="about">
      <div class="title-wrapper f-c">
        <div class="text f-c">About Me</div>
        <div class="behind-text f-c">About</div>
      </div>
      <div class="f-c wrapper">
        <p class="txt-wrapper f-c">“My name is Lucas Martin, and I enjoy meeting new people and finding ways to help them have an uplifting experience. I have had a variety of customer service opportunities, through which I was able to have fewer returned products and increased
          repeat customers, when compared with co-workers. I am dedicated, outgoing, and a team player. Who could I speak with in your customer service department about your organization’s customer service needs?”
        </p>
        <div class="img-frame f-c">
          <img src="./site/images/my self.png">
        </div>
      </div>
    </div>
    <div class="protfolio">

      <div class="title-wrapper f-c">
        <div class="text f-c">Protfolio</div>
        <div class="behind-text f-c">protfolio</div>
      </div>
      <main class="gallery-main-content">
        <div class="cd-tab-filter-wrapper">
          <div class="cd-tab-filter">
            <ul class="cd-filters f-c">
              <li onclick="setFilter(1)" class="filter" data-filter=".group-1"><a href="#0" data-type="group-1">Design</a></li>
              <li onclick="setFilter(2)" class="filter" data-filter=".group-2"><a href="#0" data-type="group-2">Apps</a></li>
            </ul>
            <!-- cd-filters -->
          </div>
          <!-- cd-tab-filter -->
        </div>
        <!-- cd-tab-filter-wrapper -->

        <section class="cd-gallery">
          <ul class="MixItUp2A9DD8">
            <!-- <img src="site/images/GALLERY-IMG/DESIGN/DESIGN #1.png" alt=""> -->
            <li onclick="showModal('img1')" class="mix group-1 check1 radio2 option3"><img src="https://s3.amazonaws.com/plloyd/photography/flex-gallery1.jpg" alt="Image 1"></li>
            <li onclick="showModal('img2')" class="mix group-2 check2 radio2 option2"><img src="https://s3.amazonaws.com/plloyd/photography/flex-gallery2.jpg" alt="Image 2"></li>
            <li onclick="showModal('img3')" class="mix group-1 check3 radio3 option1"><img src="https://s3.amazonaws.com/plloyd/photography/flex-gallery3.jpg" alt="Image 3"></li>
            <li onclick="showModal('img4')" class="mix group-1 check3 radio2 option4"><img src="https://s3.amazonaws.com/plloyd/photography/flex-gallery4.jpg" alt="Image 4"></li>
            <li onclick="showModal('img5')" class="mix group-1 check1 radio3 option2"><img src="https://s3.amazonaws.com/plloyd/photography/flex-gallery5.jpg" alt="Image 5"></li>
            <li onclick="showModal('img6')" class="mix group-2 check2 radio3 option3"><img src="https://s3.amazonaws.com/plloyd/photography/flex-gallery6.jpg" alt="Image 6"></li>
            <li onclick="showModal('img7')" class="mix group-2 check2 radio2 option1"><img src="https://s3.amazonaws.com/plloyd/photography/flex-gallery7.jpg" alt="Image 7"></li>
            <li onclick="showModal('img8')" class="mix group-1 check1 radio3 option4"><img src="https://s3.amazonaws.com/plloyd/photography/flex-gallery8.jpg" alt="Image 8"></li>
            <li onclick="showModal('img9')" class="mix group-2 check1 radio2 option3"><img src="https://s3.amazonaws.com/plloyd/photography/flex-gallery9.jpg" alt="Image 9"></li>
            <li onclick="showModal('img10')" class="mix group-1 check3 radio2 option4"><img src="https://s3.amazonaws.com/plloyd/photography/flex-gallery10.jpg" alt="Image 10"></li>
            <li onclick="showModal('img11')" class="mix group-1 check3 radio3 option2"><img src="https://s3.amazonaws.com/plloyd/photography/flex-gallery11.jpg" alt="Image 11"></li>
            <li onclick="showModal('img12')" class="mix group-2 check1 radio3 option1"><img src="https://s3.amazonaws.com/plloyd/photography/flex-gallery12.jpg" alt="Image 12"></li>
            <li class="gap"></li>
            <li class="gap"></li>
            <li class="gap"></li>
          </ul>
          <div class="cd-fail-message">No results found</div>
        </section>
        <!-- cd-gallery -->
      </main>

    </div>
  </main>
  <footer>
    <div class="wrapper f-c">
      <h1>any question?</h1>
      <h2>write message</h2>
      <div class="links f-c ">
        <a class="link-wrapper f-c " href="# ">
          <img class="icons " src="https://arielmazor.github.io/site/images/instagram-logo.svg" alt=" ">
        </a>
        <a class="link-wrapper f-c " href="# ">
          <img class="icons " src="https://arielmazor.github.io/site/images/discord.svg" alt=" ">
        </a>
      </div>
    </div>
    <div class="copyright">
      <div class="wrapper f-c">
        <div class="f-c">©2020 Made with <a class="ocean-template">Ocean</a></p>
        </div>
      </div>
    </div>
  </footer>
  <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/mixitup/2.1.11/jquery.mixitup.min.js"></script>
  <script src="https://arielmazor.github.io/site/js/my-script.js "></script>
  <script src="https://arielmazor.github.io/site/js/Gallery.js "></script>
</body>

</html>`