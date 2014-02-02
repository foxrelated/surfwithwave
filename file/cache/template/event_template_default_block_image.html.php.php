<?php defined('PHPFOX') or exit('NO DICE!'); ?>
<?php /* Cached: January 31, 2014, 10:32 pm */ ?>
<?php 
/**
 * [PHPFOX_HEADER]
 * 
 * @copyright		[PHPFOX_COPYRIGHT]
 * @author  		Raymond Benc
 * @package 		Phpfox
 * @version 		$Id: image.html.php 5844 2013-05-09 08:00:59Z Raymond_Benc $
 */
 
 

?>
<div class="t_center" style="margin-bottom:10px;">
<?php echo Phpfox::getLib('phpfox.image.helper')->display(array('thickbox' => true,'server_id' => $this->_aVars['aEvent']['server_id'],'title' => $this->_aVars['aEvent']['title'],'path' => 'event.url_image','file' => $this->_aVars['aEvent']['image_path'],'suffix' => '_200','max_width' => '200','max_height' => '200','itemprop' => 'image')); ?>
</div>
