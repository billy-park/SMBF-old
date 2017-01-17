$(document).ready(function() {

//Graph API
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '449462748775879',
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
    function getEvents() {
      FB.api('/920754984725976', function(response) {
        console.log(response)
      }
    })
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/all.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  var events = document.getElementById('eventsList').getElementsByTagName('img');
  var heroTitle = document.getElementById('mainEvent');
  var title = document.getElementById('eventDescTitle');
  var desc = document.getElementById('currentEventDesc');
  var mapFrame = $('#map');
  var eventDescription = $('#eventListDesc');
  var mw = $('#mapHolder').width();
  var elh = $('#eventsList').height() + 10;

  //initialise titles, sizes and descriptions for the page
  heroTitle.innerHTML = ("Upcoming Event: " + events[0].dataset.eventtitle);
  title.innerHTML = (events[0].dataset.eventtitle);
  desc.innerHTML = (events[0].dataset.eventdesc);
  events[0].className += (" activeBanner");
  mapFrame.css({'min-height': mw + 'px'});
  eventDescription.css({'min-height': elh + 'px'});

  //resize listener for fixing ratios
  $(window).resize(function() {
    mw = $('#mapHolder').width();
    elh = $('#eventsList').height() + 10;
    mapFrame.css({'min-height': mw + 'px'});
    eventDescription.css({'min-height': elh + 'px'});
  });

  //assign on click listeners for the images in the event list
  for (i = 0; i < events.length; i++){
    events[i].addEventListener("click", updateDesc);
   }

   //update title, description and class for event clicked on
  function updateDesc(){
    for (i = 0; i < events.length; i++){
      events[i].className = ("eventBanner");
    }
    this.className += (" activeBanner");
    title.innerHTML = (this.dataset.eventtitle);
    desc.innerHTML = (this.dataset.eventdesc);
  }

});

