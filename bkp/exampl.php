<?php
set_time_limit(3600);
/*
Copyright (c) 2011 http://ramui.com. All right reserved.
This product is protected by copyright and distributed under licenses restricting copying, distribution. Permission is granted to the public to download and use this script provided that this Notice and any statement of authorship are reproduced in every page on all copies of the script.
*/


include "recurseZip.php";

//Source file or directory to be compressed.
$src='/home/wavetele/public_html';

if(is_dir($src)){

//Destination folder where we create Zip file.
$dst=$src.'/backup';
$z=new recurseZip();
echo $z->compress($src,$dst);
}else{
	echo 'ttt';
}
?>