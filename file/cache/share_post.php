<?php defined('PHPFOX') or exit('NO DICE!'); ?>
<?php $aContent = array (
  0 => 
  array (
    'site_id' => '1',
    'type_id' => 'post',
    'title' => 'Facebook',
    'icon' => 'facebook.gif',
    'is_active' => '1',
    'ordering' => '1',
    'url' => 'http://www.facebook.com/share.php?u={URL}',
  ),
  1 => 
  array (
    'site_id' => '3',
    'type_id' => 'post',
    'title' => 'Twitter',
    'icon' => 'twitter.png',
    'is_active' => '1',
    'ordering' => '4',
    'url' => 'http://twitter.com/home?status={TITLE} {URL}',
  ),
  2 => 
  array (
    'site_id' => '5',
    'type_id' => 'post',
    'title' => 'Myspace',
    'icon' => 'myspace.png',
    'is_active' => '1',
    'ordering' => '6',
    'url' => 'http://www.myspace.com/Modules/PostTo/Pages/?l=3&u={URL}&t={TITLE}&c=',
  ),
  3 => 
  array (
    'site_id' => '7',
    'type_id' => 'post',
    'title' => 'Friend Feed',
    'icon' => 'friend_feed.png',
    'is_active' => '1',
    'ordering' => '8',
    'url' => 'http://friendfeed.com/share?url={URL}',
  ),
); ?>