<?php defined('PHPFOX') or exit('NO DICE!'); ?>
<?php /* Cached: January 24, 2014, 4:53 pm */ ?>
<?php 
/**
 * [PHPFOX_HEADER]
 * 
 * @copyright		[PHPFOX_COPYRIGHT]
 * @author  		Raymond Benc
 * @package  		Module_Share
 * @version 		$Id: bookmark.html.php 4154 2012-05-07 14:32:57Z Raymond_Benc $
 */
 
 

?>
<div>
<?php if (count ( $this->_aVars['aPostBookmarks'] )): ?>
<?php if (count((array)$this->_aVars['aPostBookmarks'])):  $this->_aPhpfoxVars['iteration']['bookmark'] = 0;  foreach ((array) $this->_aVars['aPostBookmarks'] as $this->_aVars['aBookmark']):  $this->_aPhpfoxVars['iteration']['bookmark']++; ?>

	<div class="go_left p_4" style="width:45%;">
		<a href="<?php echo $this->_aVars['aBookmark']['url']; ?>" target="_blank"><img src="<?php echo $this->_aVars['sUrlStaticImage'];  echo $this->_aVars['aBookmark']['icon']; ?>" alt="" style="vertical-align:middle;" /></a> <a href="<?php echo $this->_aVars['aBookmark']['url']; ?>" target="_blank"><?php echo $this->_aVars['aBookmark']['title']; ?></a>
	</div>
<?php if (is_int ( $this->_aPhpfoxVars['iteration']['bookmark'] / 2 )): ?>
	<div class="clear"></div>
<?php endif; ?>
<?php endforeach; endif; ?>
	<div class="clear"></div>	
<?php endif; ?>
<?php if (count ( $this->_aVars['aBookmarks'] )): ?>
<?php if (count((array)$this->_aVars['aBookmarks'])):  $this->_aPhpfoxVars['iteration']['bookmark'] = 0;  foreach ((array) $this->_aVars['aBookmarks'] as $this->_aVars['aBookmark']):  $this->_aPhpfoxVars['iteration']['bookmark']++; ?>

	<div class="go_left p_4" style="width:45%;">
		<a href="<?php echo $this->_aVars['aBookmark']['url']; ?>" target="_blank"><img src="<?php echo $this->_aVars['sUrlStaticImage'];  echo $this->_aVars['aBookmark']['icon']; ?>" alt="" style="vertical-align:middle;" /></a> <a href="<?php echo $this->_aVars['aBookmark']['url']; ?>" target="_blank"><?php echo $this->_aVars['aBookmark']['title']; ?></a>
	</div>
<?php if (is_int ( $this->_aPhpfoxVars['iteration']['bookmark'] / 2 )): ?>
	<div class="clear"></div>
<?php endif; ?>
<?php endforeach; endif; ?>
	<div class="clear"></div>
<?php endif; ?>
</div>
