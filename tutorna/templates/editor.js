var data = {
  titles:{
    tutor: 'Tutor',
    aboutMe: 'Nice To Meet You!',
    studyMaterials:'Study Materials',
    myExpertise: 'MY EXPERTISE',
    testimonials: 'Testimonials',
    pricing: 'Pricing',
    pricingSlogen: 'Build a plan that fits your needs.',
    question: 'Any question?',
    questionTitle: `I'm here for you!`,
    login: 'LOGIN',
    viewMap: 'VIEW MAP',
    buyNow: 'Buy now',
    lessons: 'Lessons',
    offlineWork: 'Offline Work (Minutes)',
    videos:'Videos',
    exercises:'Exercises',
    exams:'Exams',
    copyrights: '©2025 Made with',
    tutorna: 'TUTORNA',
    viewMap: 'View Map'
  },
  content:{
    pageTitle:"Shaul Mazor - Tutor",
    teacherName:'Shaul M.',
    fullName: 'Shaul Mazor',
    phone: '052-4437308',
    email: 'shaul.mazor@gmail.com',
    address:'1000 N West Street,  Suite 1200, Wilmington,  Delaware, 19801',
    subjects:[
      {
        name: 'Mathematics',
        topics:[
          'Algebra I, II, II',
          'Calculus I, II',
          'Geometry'
        ]
      },
      {
        name: 'Computer science',
        topics:[
          'Web Technologies',
          'Java, C#, Python, Node.js',
          'Data Structures, Algorithms'
        ]
      }
    ],  
    aboutMe:'So that you get the maximum benefit from the possibilities of our software: We analyze your business processes and work with you to develop an individual path for maximum added value and benefit of our software in 6 steps. So that you get the maximum benefit from the possibilities of our software: We analyze your business processes and work with you to develop an individual path for maximum added value and benefit of our software in 6 steps.',
    myExpertise:[
      {
        title:`1Over 35 years of Over 35 years of ERP experience ERP experience`,
        desc:`skdhfk sdhf jkdskfhakjsfashfjkhas kdfhkaj sfhkaks zdfasfhks zfashzfkas kjfashzfk asdds fhak sfkhas skdhfk sdhf jkdskfhakjsfashfjkhas kdfhkaj sfhkaks zdfasfhks zfashzfkas kjfashzfk asdds fhak sfkhas skdhfk sdhf jkdskfhakjsfashfjkhas kdfhkaj sfhkaks zdfasfhks zfashzfkas kjfashzfk asdds fhak sfkhas`
      },
      {
        title:`2Over 35 years of Over 35 years of ERP experience ERP experience`,
        desc:`skdhfk sdhf jkdskfhakjsfashfjkhas kdfhkaj sfhkaks zdfasfhks zfashzfkas kjfashzfk asdds fhak sfkhas skdhfk sdhf jkdskfhakjsfashfjkhas kdfhkaj sfhkaks zdfasfhks zfashzfkas kjfashzfk asdds fhak sfkhas skdhfk sdhf jkdskfhakjsfashfjkhas kdfhkaj sfhkaks zdfasfhks zfashzfkas kjfashzfk asdds fhak sfkhas`
      },
      {
        title:`3Over 35 years of Over 35 years of ERP experience ERP experience`,
        desc:`skdhfk sdhf jkdskfhakjsfashfjkhas kdfhkaj sfhkaks zdfasfhks zfashzfkas kjfashzfk asdds fhak sfkhas skdhfk sdhf jkdskfhakjsfashfjkhas kdfhkaj sfhkaks zdfasfhks zfashzfkas kjfashzfk asdds fhak sfkhas skdhfk sdhf jkdskfhakjsfashfjkhas kdfhkaj sfhkaks zdfasfhks zfashzfkas kjfashzfk asdds fhak sfkhas`
      },
      {
        title:`4Over 35 years of Over 35 years of ERP experience ERP experience`,
        desc:`skdhfk sdhf jkdskfhakjsfashfjkhas kdfhkaj sfhkaks zdfasfhks zfashzfkas kjfashzfk asdds fhak sfkhas skdhfk sdhf jkdskfhakjsfashfjkhas kdfhkaj sfhkaks zdfasfhks zfashzfkas kjfashzfk asdds fhak sfkhas skdhfk sdhf jkdskfhakjsfashfjkhas kdfhkaj sfhkaks zdfasfhks zfashzfkas kjfashzfk asdds fhak sfkhas`
      },
      {
        title:`5Over 35 years of Over 35 years of ERP experience ERP experience`,
        desc:`skdhfk sdhf jkdskfhakjsfashfjkhas kdfhkaj sfhkaks zdfasfhks zfashzfkas kjfashzfk asdds fhak sfkhas skdhfk sdhf jkdskfhakjsfashfjkhas kdfhkaj sfhkaks zdfasfhks zfashzfkas kjfashzfk asdds fhak sfkhas skdhfk sdhf jkdskfhakjsfashfjkhas kdfhkaj sfhkaks zdfasfhks zfashzfkas kjfashzfk asdds fhak sfkhas`
      }
    ],
    testimonials:[
      {
        referer:`- 1 MATTHIAS FILKORN, HEAD OF OPERATIONS AESCOLOGIC GMBH`,
        testimonial: `"Who could judge our services better than our customers? Discover what does for companies in our reference reports."`
      },
      {
        referer:`- 2 MATTHIAS FILKORN, HEAD OF OPERATIONS AESCOLOGIC GMBH`,
        testimonial: `"Who could judge our services better than our customers? Discover what does for companies in our reference reports."`
      },
      {
        referer:`- 3 MATTHIAS FILKORN, HEAD OF OPERATIONS AESCOLOGIC GMBH`,
        testimonial: `"Who could judge our services better than our customers? Discover what does for companies in our reference reports."`
      }
    ]
  }
}

//-----------------------------------------

function replaceHead(){
  var txt = $("head").html();
  var template = Handlebars.compile(txt);
  $("head").html(template({ pageTitle: data }));
}

//-------------------------------------------

function replaceBody(){
  var txt = $("body").html();
  var template = Handlebars.compile(txt);
  $("body").html(template(data).replace("../editor.js","scripts/my-script.js"));
}

//-------------------------------------------

$(document).ready(function() {
  $.getScript( "https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js" )
  .done(function( script, textStatus ) {
    replaceHead();
    replaceBody();
  })
});
