<?php
define('PHPFOX', true); 
define('PHPFOX_DS', DIRECTORY_SEPARATOR); 
define('PHPFOX_DIR', dirname(__FILE__) . PHPFOX_DS); 
define('PHPFOX_START_TIME', array_sum(explode(' ', microtime()))); 
require_once(PHPFOX_DIR . 'include' . PHPFOX_DS . 'init.inc.php'); 

?>  

<?PHP 
function checkStatus() 
{ 
return Phpfox::isUser(); 
}
if (checkStatus()) 
{ 

echo '<div id="mywin">1</div>';

} else {
echo '<div id="mywin">0</div>';
//echo '';
  // redirect user to login

}




?>
             
              
           