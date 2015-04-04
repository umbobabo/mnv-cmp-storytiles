function ecStoryTiles(){
  $.extend(this , ecStoryTilesConfig);
}

ecStoryTiles.prototype = new Widget();

$(document).ready(function(){
  $("[data-mnv='ecStoryTiles']")
    .on('dataProviding', function(){
      //Retrive data from the data attribute
      var widget = $.data(this, 'widget');
      widget.log('Received data');
      var tmp = Handlebars.templates['ec-storytiles'];
      $(this).html(tmp(widget.data));
      window.data = widget.data;



    function checkFormat(target) {
    styleTarget = $(".hero");
    //var extension = $(this).attr("src");
    var extension = target.attr("src");
    var type = extension.substr(extension.length - 3); 
    console.log(type);
    if ((type == "png") || (type == "gif")) {
      styleTarget.addClass('chart');
    } else if (type == "") {
      styleTarget.addClass('textonly');
    } else {
      styleTarget.addClass('photo');
    }
};
checkFormat($(".hero .image img"));





// function openFS(){
//   var expander = $("#expander-container");
//   // add a class;
//   expander.css("width", '100%').css("height", '100%').css("opacity", '1');
// }

// function closeFS(){
//   var expander = $("#expander-container");
//   // add a class;
//   expander.css("width", '0%').css("height", '0%').css("opacity", '0');
// }

// function loadFSContent(opt){
//   var fsImage = data.tiles[opt].img.src;
//   var fsCopy = data.tiles[opt].rubric;
//   var fsTitle = data.tiles[opt].title;
//   var fsFlyTitle = data.tiles[opt].flytitle;

//   $(".expander-image img").attr('src', fsImage);
//   console.log(fsImage);
// }


//       var target = $( ".tile, .hero" );

//       target.bind('touchend', function (e) {

//       // prevent delay and simulated mouse events 
//       e.preventDefault();
//       // trigger the actual behavior we bound to the 'click' event 
//       e.target.click();
//     });

//       target.bind('click', function () {
//       opt = $(this).index();
//       console.log(opt);
//       console.log(data);
//       loadFSContent(opt);
//       openFS();
//     });
//     ///////////////////////////////////////


//       var target = $( "#expander-container" );

//       target.bind('touchend', function (e) {

//       // prevent delay and simulated mouse events 
//       e.preventDefault();
//       // trigger the actual behavior we bound to the 'click' event 
//       e.target.click();
//     });

//       target.bind('click', function () {
//       console.log('clicked');
//       closeFS();
//     });
//     /////////////////////////////////////



    });
});