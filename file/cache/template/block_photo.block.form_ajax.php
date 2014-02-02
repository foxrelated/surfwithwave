<?php defined('PHPFOX') or exit('NO DICE!'); ?>
<?php /* Cached: January 31, 2014, 6:34 pm */ ?>
<?php 
/**
 * [PHPFOX_HEADER]
 * 
 * @copyright		[PHPFOX_COPYRIGHT]
 * @author  		Raymond Benc
 * @package  		Module_Photo
 * @version 		$Id: form.html.php 5477 2013-03-11 07:15:40Z Raymond_Benc $
 */
 
 

?>
<?php if (isset ( $this->_aVars['aForms']['view_id'] ) && $this->_aVars['aForms']['view_id'] == 1): ?>
		<div class="message" style="width:85%;">
<?php echo Phpfox::getPhrase('photo.image_is_pending_approval'); ?>
		</div>
<?php endif; ?>
<?php if (isset ( $this->_aVars['aForms']['server_id'] )): ?>
		<div><input type="hidden" name="val<?php if (isset ( $this->_aVars['aForms']['photo_id'] )): ?>[<?php echo $this->_aVars['aForms']['photo_id']; ?>]<?php endif; ?>[server_id]" value="<?php echo $this->_aVars['aForms']['server_id']; ?>" /></div>
<?php endif; ?>
		<div class="table">
			<div class="table_left">
				<label for="title"><?php echo Phpfox::getPhrase('photo.title'); ?></label>:
			</div>
			<div class="table_right">
				<input type="text" name="val<?php if (isset ( $this->_aVars['aForms']['photo_id'] )): ?>[<?php echo $this->_aVars['aForms']['photo_id']; ?>]<?php endif; ?>[title]" value="<?php if (isset ( $this->_aVars['aForms']['title'] )):  echo Phpfox::getLib('phpfox.parse.output')->clean($this->_aVars['aForms']['title']);  else:  $aParams = (isset($aParams) ? $aParams : Phpfox::getLib('phpfox.request')->getArray('val')); echo (isset($aParams['title']) ? Phpfox::getLib('phpfox.parse.output')->clean($aParams['title']) : (isset($this->_aVars['aForms']['title']) ? Phpfox::getLib('phpfox.parse.output')->clean($this->_aVars['aForms']['title']) : ''));  endif; ?>" size="30" maxlength="150" onfocus="this.select();" />
			</div>			
		</div>
		<div class="table">
			<div class="table_left">
<?php echo Phpfox::getPhrase('photo.description'); ?>:
			</div>
			<div class="table_right">
				<textarea cols="30" rows="4" name="val<?php if (isset ( $this->_aVars['aForms']['photo_id'] )): ?>[<?php echo $this->_aVars['aForms']['photo_id']; ?>]<?php endif; ?>[description]"><?php if (isset ( $this->_aVars['aForms']['description'] )):  echo Phpfox::getLib('phpfox.parse.output')->clean($this->_aVars['aForms']['description']);  else:  $aParams = (isset($aParams) ? $aParams : Phpfox::getLib('phpfox.request')->getArray('val')); echo (isset($aParams['description']) ? Phpfox::getLib('phpfox.parse.output')->clean($aParams['description']) : (isset($this->_aVars['aForms']['description']) ? Phpfox::getLib('phpfox.parse.output')->clean($this->_aVars['aForms']['description']) : ''));  endif; ?></textarea>
			</div>			
		</div>		
		
<?php if (isset ( $this->_aVars['aForms']['group_id'] ) && $this->_aVars['aForms']['group_id'] != '0'): ?>
		
<?php else: ?>
<?php if (Phpfox ::getService('photo.category')->hasCategories()): ?>
		<div class="table">
			<div class="table_left">
<?php echo Phpfox::getPhrase('photo.category'); ?>:
			</div>
			<div class="table_right js_category_list_holder">
<?php if (isset ( $this->_aVars['aForms']['photo_id'] )): ?><div class="js_photo_item_id" style="display:none;"><?php echo $this->_aVars['aForms']['photo_id']; ?></div><?php endif; ?>
<?php if (isset ( $this->_aVars['aForms']['category_list'] )): ?><div class="js_photo_active_items" style="display:none;"><?php echo $this->_aVars['aForms']['category_list']; ?></div><?php endif; ?>
<?php Phpfox::getBlock('photo.drop-down', array()); ?>
			</div>			
		</div>	
<?php endif; ?>
<?php endif; ?>
	
<?php if (isset ( $this->_aVars['aForms']['group_id'] ) && $this->_aVars['aForms']['group_id'] != '0'): ?>
		
<?php else: ?>
<?php if (Phpfox ::isModule('tag') && Phpfox ::getUserParam('photo.can_add_tags_on_photos')):  if (isset ( $this->_aVars['aForms']['photo_id'] )):  Phpfox::getBlock('tag.add', array('sType' => 'photo','separate' => false,'id' => $this->_aVars['aForms']['photo_id']));  else:  Phpfox::getBlock('tag.add', array('sType' => 'photo','separate' => false));  endif;  endif; ?>
<?php endif; ?>
<?php if (Phpfox ::getUserParam('photo.can_add_mature_images')): ?>
			<div class="table">
				<div class="table_left">
<?php echo Phpfox::getPhrase('photo.mature_content'); ?>:
				</div>
				<div class="table_right">
					<label><input type="radio" name="val<?php if (isset ( $this->_aVars['aForms']['photo_id'] )): ?>[<?php echo $this->_aVars['aForms']['photo_id']; ?>]<?php endif; ?>[mature]" value="2" style="vertical-align:middle;" class="checkbox"<?php $aParams = (isset($aParams) ? $aParams : Phpfox::getLib('phpfox.request')->getArray('val'));
if (isset($this->_aVars['aForms']) && is_numeric('mature') && in_array('mature', $this->_aVars['aForms']) ){echo ' checked="checked"';}
if ((isset($aParams['mature']) && $aParams['mature'] == '2'))
{echo ' checked="checked" ';}
else
{
 if (isset($this->_aVars['aForms']) && isset($this->_aVars['aForms']['mature']) && !isset($aParams['mature']) && $this->_aVars['aForms']['mature'] == '2')
 {
    echo ' checked="checked" ';}
 else
 {
 }
}
?> 
/> <?php echo Phpfox::getPhrase('photo.yes_strict'); ?></label>
					<label><input type="radio" name="val<?php if (isset ( $this->_aVars['aForms']['photo_id'] )): ?>[<?php echo $this->_aVars['aForms']['photo_id']; ?>]<?php endif; ?>[mature]" value="1" style="vertical-align:middle;" class="checkbox"<?php $aParams = (isset($aParams) ? $aParams : Phpfox::getLib('phpfox.request')->getArray('val'));
if (isset($this->_aVars['aForms']) && is_numeric('mature') && in_array('mature', $this->_aVars['aForms']) ){echo ' checked="checked"';}
if ((isset($aParams['mature']) && $aParams['mature'] == '1'))
{echo ' checked="checked" ';}
else
{
 if (isset($this->_aVars['aForms']) && isset($this->_aVars['aForms']['mature']) && !isset($aParams['mature']) && $this->_aVars['aForms']['mature'] == '1')
 {
    echo ' checked="checked" ';}
 else
 {
 }
}
?> 
/> <?php echo Phpfox::getPhrase('photo.yes_warning'); ?></label>
					<label><input type="radio" name="val<?php if (isset ( $this->_aVars['aForms']['photo_id'] )): ?>[<?php echo $this->_aVars['aForms']['photo_id']; ?>]<?php endif; ?>[mature]" value="0" style="vertical-align:middle;" class="checkbox"<?php $aParams = (isset($aParams) ? $aParams : Phpfox::getLib('phpfox.request')->getArray('val'));
if (isset($this->_aVars['aForms']) && is_numeric('mature') && in_array('mature', $this->_aVars['aForms']) ){echo ' checked="checked"';}
if ((isset($aParams['mature']) && $aParams['mature'] == '0'))
{echo ' checked="checked" ';}
else
{
 if (isset($this->_aVars['aForms']) && isset($this->_aVars['aForms']['mature']) && !isset($aParams['mature']) && $this->_aVars['aForms']['mature'] == '0')
 {
    echo ' checked="checked" ';}
 else
 {
 if (!isset($this->_aVars['aForms']) || ((isset($this->_aVars['aForms']) && !isset($this->_aVars['aForms']['mature']) && !isset($aParams['mature']))))
{
 echo ' checked="checked"';
}
 }
}
?> 
/> <?php echo Phpfox::getPhrase('photo.no'); ?></label>
				</div>			
			</div>
<?php endif; ?>
			
<?php if (Phpfox ::getParam('photo.can_rate_on_photos') && Phpfox ::getUserParam('photo.can_add_to_rating_module')): ?>
			<div class="table js_public_rating">
				<div class="table_left">
<?php echo Phpfox::getPhrase('photo.public_rating'); ?>:
				</div>
				<div class="table_right">
					<label><input type="radio" name="val<?php if (isset ( $this->_aVars['aForms']['photo_id'] )): ?>[<?php echo $this->_aVars['aForms']['photo_id']; ?>]<?php endif; ?>[allow_rate]" value="1" style="vertical-align:middle;" class="checkbox"<?php $aParams = (isset($aParams) ? $aParams : Phpfox::getLib('phpfox.request')->getArray('val'));
if (isset($this->_aVars['aForms']) && is_numeric('allow_rate') && in_array('allow_rate', $this->_aVars['aForms']) ){echo ' checked="checked"';}
if ((isset($aParams['allow_rate']) && $aParams['allow_rate'] == '1'))
{echo ' checked="checked" ';}
else
{
 if (isset($this->_aVars['aForms']) && isset($this->_aVars['aForms']['allow_rate']) && !isset($aParams['allow_rate']) && $this->_aVars['aForms']['allow_rate'] == '1')
 {
    echo ' checked="checked" ';}
 else
 {
 if (!isset($this->_aVars['aForms']) || ((isset($this->_aVars['aForms']) && !isset($this->_aVars['aForms']['allow_rate']) && !isset($aParams['allow_rate']))))
{
 echo ' checked="checked"';
}
 }
}
?> 
/> <?php echo Phpfox::getPhrase('photo.yes'); ?></label>
					<label><input type="radio" name="val<?php if (isset ( $this->_aVars['aForms']['photo_id'] )): ?>[<?php echo $this->_aVars['aForms']['photo_id']; ?>]<?php endif; ?>[allow_rate]" value="0" style="vertical-align:middle;" class="checkbox"<?php $aParams = (isset($aParams) ? $aParams : Phpfox::getLib('phpfox.request')->getArray('val'));
if (isset($this->_aVars['aForms']) && is_numeric('allow_rate') && in_array('allow_rate', $this->_aVars['aForms']) ){echo ' checked="checked"';}
if ((isset($aParams['allow_rate']) && $aParams['allow_rate'] == '0'))
{echo ' checked="checked" ';}
else
{
 if (isset($this->_aVars['aForms']) && isset($this->_aVars['aForms']['allow_rate']) && !isset($aParams['allow_rate']) && $this->_aVars['aForms']['allow_rate'] == '0')
 {
    echo ' checked="checked" ';}
 else
 {
 }
}
?> 
/> <?php echo Phpfox::getPhrase('photo.no'); ?></label>				
				</div>
			</div>
<?php endif; ?>
			
			<div class="table">
				<div class="table_left">
<?php echo Phpfox::getPhrase('photo.download_enabled'); ?>:
				</div>
				<div class="table_right">
					<label><input type="radio" name="val<?php if (isset ( $this->_aVars['aForms']['photo_id'] )): ?>[<?php echo $this->_aVars['aForms']['photo_id']; ?>]<?php endif; ?>[allow_download]" value="1" style="vertical-align:middle;" class="checkbox"<?php $aParams = (isset($aParams) ? $aParams : Phpfox::getLib('phpfox.request')->getArray('val'));
if (isset($this->_aVars['aForms']) && is_numeric('allow_download') && in_array('allow_download', $this->_aVars['aForms']) ){echo ' checked="checked"';}
if ((isset($aParams['allow_download']) && $aParams['allow_download'] == '1'))
{echo ' checked="checked" ';}
else
{
 if (isset($this->_aVars['aForms']) && isset($this->_aVars['aForms']['allow_download']) && !isset($aParams['allow_download']) && $this->_aVars['aForms']['allow_download'] == '1')
 {
    echo ' checked="checked" ';}
 else
 {
 if (!isset($this->_aVars['aForms']) || ((isset($this->_aVars['aForms']) && !isset($this->_aVars['aForms']['allow_download']) && !isset($aParams['allow_download']))))
{
 echo ' checked="checked"';
}
 }
}
?> 
/> <?php echo Phpfox::getPhrase('photo.yes'); ?></label>
					<label><input type="radio" name="val<?php if (isset ( $this->_aVars['aForms']['photo_id'] )): ?>[<?php echo $this->_aVars['aForms']['photo_id']; ?>]<?php endif; ?>[allow_download]" value="0" style="vertical-align:middle;" class="checkbox"<?php $aParams = (isset($aParams) ? $aParams : Phpfox::getLib('phpfox.request')->getArray('val'));
if (isset($this->_aVars['aForms']) && is_numeric('allow_download') && in_array('allow_download', $this->_aVars['aForms']) ){echo ' checked="checked"';}
if ((isset($aParams['allow_download']) && $aParams['allow_download'] == '0'))
{echo ' checked="checked" ';}
else
{
 if (isset($this->_aVars['aForms']) && isset($this->_aVars['aForms']['allow_download']) && !isset($aParams['allow_download']) && $this->_aVars['aForms']['allow_download'] == '0')
 {
    echo ' checked="checked" ';}
 else
 {
 }
}
?> 
/> <?php echo Phpfox::getPhrase('photo.no'); ?></label>
					<div class="extra_info">
<?php echo Phpfox::getPhrase('photo.enabling_this_option_will_allow_others_the_rights_to_download_this_photo'); ?>
					</div>				
				</div>
			</div>
