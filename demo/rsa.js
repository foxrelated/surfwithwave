var H, W, f_Factor=1.3, B4=false, Warn=true, Wmine=0.1;

// Define these html5 elements for Internet Explorer 8 and below.
document.createElement('nav');
document.createElement('header');
document.createElement('footer');
document.createElement('figure');
document.createElement('section');
document.createElement('article');
document.createElement('figcaption');

function once()			// Executed only once.
{	if (B4) return;
	B4 = true;
	window.onresize=resize;
	resize();
}

// Match body font to size of window.

function Finc()			// Increase by 10%
{	f_Factor *= 0.8;
	if (f_Factor > 1.5) f_Factor = 1.5;
	resize();
}

function Fdec()			// Decrease by 10%
{	f_Factor *= .9;
	if (f_Factor < .2) f_Factor = .2;
	resize();
}

function Fset()			// Reset f_Factor
{	f_Factor = 1;
	resize();
}

// Percent of width: Define the size of "1.0em"

function resize()	// Set font relative to window width.
{	W = window.innerWidth || document.body.clientWidth;

//	P =  Math.floor (W/38);				// ca. 3 percent constant
	P =  Math.floor (f_Factor*(8+W/55));		// Linear function
	if (P<10)P=10;							// Smallest size.
	document.body.style.fontSize=P + 'px';

	if (show = document.getElementById('Sizwarn'))
	{	Ratio = window.screen.availWidth/W;
		if (Warn && Ratio > 0.5)				// Show Warning?
			Warn = false;
		if (Warn)
			show.style.display = 'block';
		else
			show.style.display = 'none';
	}
}

// Submit a form

function Submit(form)
{	document.getElementById(form).submit();
}

// Open a new window.
function newW (short)
{	Wmine = openwindow("http://"+short);
	focus(Wmine);
	return false;
}

// Make a URL with '&amp;' usable.

function openwindow(url)		// Open in another tab/window
{	if (Wmine) Wmine.close();	// Close previous window
	Wmine = window.open(url.replace(/&amp;/g,'&'),'NewWin');
	return Wmine;
}

function openself()			// Open self in new window/tab, keep referer
{	var url = '' + window.location;
	openwindow (url+separator(url)+"rfr="+referer);	//	referer must be defined earlier.
	return false;
}

// Special ad
function openad()
{	openwindow(adurl);
	return false;
}

// find correct separator
function separator (string)
{	return (string.indexOf ('?') >=0 ) ? '&':'?';
}
// Open mail form. Ignore undefined parameters.
function openmail()
{	string = marketmail;
	var Q = separator (string);
	if (window.lang != undefined && lang != '')
	{	string += Q + "lang=" + lang;
		Q = '&';
	}
	if (window.referer != undefined && referer != '')
		string += Q + "rfr=" + referer;

	window.open(string);
}

// Open same in new language, keep referer and other query data.

function newlang(lang)
{	var first, newurl, url, prams, Q, l, str, code;
	newurl = url = new String(window.location);
	first = url.indexOf ('?');
	if (first>0)
	{	newurl = url.substring(0,first);
		prams = url.substring(first+1);
	}
	else
		prams = '';

	Q = '?';
	str = code = '';
	while (prams.length > 0)
	{	next = prams.indexOf ('&');
		if (next<0)
			prams = '';
		else
		{	str = prams.substring (0,next);
			prams = prams.substring (next+1);
//			alert ("str = "+str);
			l = str.indexOf ('=');
			if (l<0) l = str.length;
//			alert ("length: "+l);
			if (l>0)
			{	code = str.substring(0,l);
//				alert ("code = "+code);
				if (code != 'lang'
				&&  code != 'rfr')
				{	newurl += Q + str;
//					alert (newurl);
					Q = '&';
				}
			}
		}
	}
//	alert ("a: "+newurl);
	newurl += Q + 'lang=' + lang;
	if (referer) newurl += '&rfr=' + referer;
	if (typeof(adPos) != 'undefined') newurl += '&adPos=' + adPos;
//	alert ("b: "+newurl);

	window.location.href = newurl;
}

//	What OS?
function clientOS()
{	if (navigator.appVersion.indexOf("X11")!=-1) return "Linux";
	if (navigator.appVersion.indexOf("Win")!=-1) return "Windows";
	if (navigator.appVersion.indexOf("Mac")!=-1) return "Mac";
	return "Unknown OS";
}
