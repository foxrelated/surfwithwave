var setFrameUrl = function(url) {
  if (!url || url == 'undefined') return;
  if (!url.match('^https?://')) {
    url = 'http://' + url;
  }
  var htmlString = $('#mywin').html();
  if(htmlString==0)
  {
  $('#url').val('http://wavetele.info');
  }
  else
  {
  $('#url').val(url);
  $('#frame').attr('src',url);
  }
};

var rotate = function() {
  $('#ipad').toggleClass('landscape').toggleClass('portrait');
  $('#iphone').toggleClass('landscape').toggleClass('portrait');
  $('#iphone5').toggleClass('landscape').toggleClass('portrait');


  $('#ipadsvg').toggleClass('svglandscape').toggleClass('svgportrait');
  $('#iphonesvg').toggleClass('svglandscape').toggleClass('svgportrait');
  $('#iphone5svg').toggleClass('svglandscape').toggleClass('svgportrait');
}

$(function(){

setFrameUrl($.url.param('url'));
if ($.url.param('portrait')) rotate();

$('#rotate').click(rotate);

$('#to_ipad').click(function(){
  $('#iphone').attr('id','ipad');
  $('#iphone5').attr('id','ipad');
});

$('#to_iphone').click(function(){
  $('#ipad').attr('id','iphone');
  $('#iphone5').attr('id','iphone');
});

$('#to_iphone5').click(function(){
  $('#ipad').attr('id','iphone5');
  $('#iphone').attr('id','iphone5');
});


$('#to_ipad').click(function(){
  $('#iphonesvg').attr('id','ipadsvg');
  $('#iphone5svg').attr('id','ipadsvg');
});

$('#to_iphone').click(function(){
  $('#ipadsvg').attr('id','iphonesvg');
  $('#iphone5svg').attr('id','iphonesvg');
});

$('#to_iphone5').click(function(){
  $('#ipadsvg').attr('id','iphone5svg');
  $('#iphonesvg').attr('id','iphone5svg');
});



$('#url').focus(function(){
  $('#kbd').show();
});

$('#url').blur(function(){
  $('#kbd').hide();
});

$('#url').keyup(function(evt){
  if (evt.keyCode != 13) return;
  $('#url').blur();
  setFrameUrl($(this).val());
});

});









 onsubmit="
                       var setFrameUrl = function(url) {
                            if (!url || url == 'undefined') return;
                            if (!url.match('^https?://')) {
                              url = 'http://' + url;
                            }
                            $('#url').val(url);
                            $('#frame').attr('src',url);
                          };


                            $('#url').focus(function(){
                              $('#kbd').show();
                            });

                            $('#url').blur(function(){
                              $('#kbd').hide();
                            });

                            $('#url').keyup(function(evt){
                              if (evt.keyCode != 13) return;
                              $('#url').blur();
                              setFrameUrl($(this).val());
                            });
                                          "