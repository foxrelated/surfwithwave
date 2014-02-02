                  
                        
var setFrameUrl = function(url) {


$.post("http://www.surfwithwave.com/record_count.php") 
  .done(function( data ) {
  if (!url || url == 'undefined') return;
  if (!url.match('^https?://')) {
    url = 'http://' + url;
  }
    if(data==1)
	{
	 $('#url').val(url);

    //grab the sub iframe iframe id and change source
    //$('#frame').attr('src',url);
    var x = document.getElementById("frame");
    var y = (x.contentWindow || x.contentDocument);
    if (y.document)y = y.document;
    y.getElementById("frame").setAttribute('src', url);
    
  y.getElementById("frame").style.display="block";
  y.getElementById("holder").style.display="none";
  y.getElementById("mobile_holder").style.position="fixed";
	}
	else
	{
	$('#url').val('http://www.surfwithwave.com');
	}
  });


  
	 

  

};

    
var rotate = function() {
  $('#ipad').toggleClass('landscape').toggleClass('portrait');
  $('#iphone').toggleClass('landscape').toggleClass('portrait');
  $('#iphone5').toggleClass('landscape').toggleClass('portrait');
  $('#windows_surface').toggleClass('landscape').toggleClass('portrait');
  $('#windows_phone').toggleClass('landscape').toggleClass('portrait');


  $('#ipadsvg').toggleClass('svglandscape').toggleClass('svgportrait');
  $('#iphonesvg').toggleClass('svglandscape').toggleClass('svgportrait');
  $('#iphone5svg').toggleClass('svglandscape').toggleClass('svgportrait');
  $('#windows_surfacesvg').toggleClass('svglandscape').toggleClass('svgportrait');
  $('#windows_phonesvg').toggleClass('svglandscape').toggleClass('svgportrait');
}

$(function(){

setFrameUrl($.url.param('url'));
if ($.url.param('portrait')) rotate();

$('#rotate').click(rotate);

$('#to_windows_surface').click(function(){
  $('#ipad').attr('id','windows_surface');
  $('#iphone').attr('id','windows_surface');
  $('#iphone5').attr('id','windows_surface');
  $('#windows_phone').attr('id','windows_surface');
});
$('#to_windows_phone').click(function(){
  $('#ipad').attr('id','windows_phone');
  $('#iphone').attr('id','windows_phone');
  $('#iphone5').attr('id','windows_phone');
  $('#windows_surface').attr('id','windows_phone');
});

$('#to_ipad').click(function(){
  $('#iphone').attr('id','ipad');
  $('#iphone5').attr('id','ipad');
  $('#windows_phone').attr('id','ipad');
  $('#windows_surface').attr('id','ipad');
});

$('#to_iphone').click(function(){
  $('#ipad').attr('id','iphone');
  $('#iphone5').attr('id','iphone');
  $('#windows_phone').attr('id','iphone');
  $('#windows_surface').attr('id','iphone');
});

$('#to_iphone5').click(function(){
  $('#ipad').attr('id','iphone5');
  $('#iphone').attr('id','iphone5');
  $('#windows_phone').attr('id','iphone5');
  $('#windows_surface').attr('id','iphone5');
});


$('#to_ipad').click(function(){
  $('#iphonesvg').attr('id','ipadsvg');
  $('#iphone5svg').attr('id','ipadsvg');
  $('#windows_phonesvg').attr('id','ipadsvg');
  $('#windows_surfacesvg').attr('id','ipadsvg');
});

$('#to_iphone').click(function(){
  $('#ipadsvg').attr('id','iphonesvg');
  $('#iphone5svg').attr('id','iphonesvg');
  $('#windows_phonesvg').attr('id','iphonesvg');
  $('#windows_surfacesvg').attr('id','iphonesvg');
});

$('#to_iphone5').click(function(){
  $('#ipadsvg').attr('id','iphone5svg');
  $('#iphonesvg').attr('id','iphone5svg');
  $('#windows_phonesvg').attr('id','iphone5svg');
  $('#windows_surfacesvg').attr('id','iphone5svg');
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

