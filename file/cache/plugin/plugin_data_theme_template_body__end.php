<?php defined('PHPFOX') or exit('NO DICE!'); ?>
<?php $aContent = 'if (Phpfox::getParam(\'facebook.enable_facebook_connect\'))
{
	// echo \'<div id="fb-root"></div>\';
} $settings = Phpfox::getService(\'iflychat\')->loadSettings();

if($settings!=false) {
  if(!Phpfox::isAdminPanel()) {
    echo \'<script src="\' . Phpfox::getLib(\'url\')->getDomain() . \'module/iflychat/static/js/ba-emotify.js"></script>\';
    echo \'<script src="\' . Phpfox::getLib(\'url\')->getDomain() . \'module/iflychat/static/js/jquery.titlealert.min.js"></script>\';
    echo \'<script src="\' . Phpfox::getLib(\'url\')->getDomain() . \'module/iflychat/static/js/iflychat.js"></script>\';
  }
  else {
    echo \'<script type = "text/javascript">window.onload = function() {var _body = document.getElementsByTagName(\\\'body\\\') [0];var s = document.createElement("script");s.type = "text/javascript";s.src = "\' . Phpfox::getLib(\'url\')->getDomain() . \'module/iflychat/static/js/ba-emotify.js";_body.appendChild(s);s = document.createElement("script");s.type = "text/javascript";s.src = "\' . Phpfox::getLib(\'url\')->getDomain() . \'module/iflychat/static/js/jquery.titlealert.min.js";_body.appendChild(s);s = document.createElement("script");s.type = "text/javascript";s.src = "\' . Phpfox::getLib(\'url\')->getDomain() . \'module/iflychat/static/js/iflychat.js";_body.appendChild(s);};</script>\';
  }
    echo \'<script>var Drupal={};Drupal.settings={};Drupal.settings.drupalchat=\' . json_encode($settings) . \';</script>\';
} if (Phpfox::getParam(\'janrain.enable_janrain_login\'))
{
	echo "


<script type=\\"text/javascript\\">
(function() {
    if (typeof window.janrain !== \'object\') window.janrain = {};
    if (typeof window.janrain.settings !== \'object\') window.janrain.settings = {};
    
    janrain.settings.tokenUrl = \'" . Phpfox::getLib(\'url\')->makeUrl(\'janrain.rpx\') . "\';

    function isReady() { janrain.ready = true; };
    if (document.addEventListener) {
      document.addEventListener(\\"DOMContentLoaded\\", isReady, false);
    } else {
      window.attachEvent(\'onload\', isReady);
    }

    var e = document.createElement(\'script\');
    e.type = \'text/javascript\';
    e.id = \'janrainAuthWidget\';

    if (document.location.protocol === \'https:\') {
      e.src = \'https://rpxnow.com/js/lib/" . Phpfox::getService(\'janrain\')->getName() . "/engage.js\';
    } else {
      e.src = \'http://widget-cdn.rpxnow.com/js/lib/" . Phpfox::getService(\'janrain\')->getName() . "/engage.js\';
    }

    var s = document.getElementsByTagName(\'script\')[0];
    s.parentNode.insertBefore(e, s);
})();
</script>

			
			
			";
} '; ?>