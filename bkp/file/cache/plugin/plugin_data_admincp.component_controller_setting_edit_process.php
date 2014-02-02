<?php defined('PHPFOX') or exit('NO DICE!'); ?>
<?php $aContent = 'if(($this->request()->get(\'module-id\') == "iflychat")||($this->request()->get(\'product-id\') == "iflychat")) {
    Phpfox::getService(\'iflychat\')->saveSettings();
  } '; ?>