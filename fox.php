<?php
define('PHPFOX', true); 
define('PHPFOX_DS', DIRECTORY_SEPARATOR); 
define('PHPFOX_DIR', dirname(__FILE__) . PHPFOX_DS); 
define('PHPFOX_START_TIME', array_sum(explode(' ', microtime()))); 
require_once(PHPFOX_DIR . 'include' . PHPFOX_DS . 'init.inc.php'); 
$sRequest='moreinfo';
$aPage = Phpfox::getService('page')->getPage($sRequest, true);
echo $aPage['text_parsed'];
?> 