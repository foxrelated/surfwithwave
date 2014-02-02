<?php defined('PHPFOX') or exit('NO DICE!'); ?>
<?php /* Cached: January 31, 2014, 6:34 pm */ ?>
<?php 
/**
 * [PHPFOX_HEADER]
 * 
 * @copyright		[PHPFOX_COPYRIGHT]
 * @author  		Raymond Benc
 * @package 		Phpfox
 * @version 		$Id: edit-photo.html.php 6871 2013-11-11 12:19:49Z Miguel_Espinoza $
 */
 
 

 if (isset ( $this->_aVars['bSingleMode'] )): ?>
<form method="post" action="#" onsubmit="$(this).ajaxCall('photo.updatePhoto'); return false;">
<?php echo '<div><input type="hidden" name="' . Phpfox::getTokenName() . '[security_token]" value="' . Phpfox::getService('log.session')->getToken() . '" /></div>'; ?>
	<div><input type="hidden" name="photo_id" value="<?php echo $this->_aVars['aForms']['photo_id']; ?>" /></div>
	<div><input type="hidden" name="val<?php if (isset ( $this->_aVars['aForms']['photo_id'] )): ?>[<?php echo $this->_aVars['aForms']['photo_id']; ?>]<?php endif; ?>[photo_id]" id="photo_id" value="<?php echo $this->_aVars['aForms']['photo_id']; ?>" /></div>
	<div><input type="hidden" name="val<?php if (isset ( $this->_aVars['aForms']['photo_id'] )): ?>[<?php echo $this->_aVars['aForms']['photo_id']; ?>]<?php endif; ?>[album_id]" value="<?php echo $this->_aVars['aForms']['album_id']; ?>" /></div>
	<div><input type="hidden" name="val<?php if (isset ( $this->_aVars['aForms']['photo_id'] )): ?>[<?php echo $this->_aVars['aForms']['photo_id']; ?>]<?php endif; ?>[server_id]" value="<?php echo $this->_aVars['aForms']['server_id']; ?>" /></div>
	<div id="js_custom_privacy_input_holder">
<?php if ($this->_aVars['aForms']['album_id'] == '0' && $this->_aVars['aForms']['group_id'] == '0'): ?>
<?php Phpfox::getBlock('privacy.build', array('privacy_item_id' => $this->_aVars['aForms']['photo_id'],'privacy_module_id' => 'photo')); ?>
<?php else: ?>
		<div><input type="hidden" name="val<?php if (isset ( $this->_aVars['aForms']['photo_id'] )): ?>[<?php echo $this->_aVars['aForms']['photo_id']; ?>]<?php endif; ?>[privacy]" value="<?php echo $this->_aVars['aForms']['privacy']; ?>" /></div>
		<div><input type="hidden" name="val<?php if (isset ( $this->_aVars['aForms']['photo_id'] )): ?>[<?php echo $this->_aVars['aForms']['photo_id']; ?>]<?php endif; ?>[privacy_comment]" value="<?php echo $this->_aVars['aForms']['privacy_comment']; ?>" /></div>
<?php endif; ?>
	</div>	
<?php if ($this->_aVars['bIsInline']): ?>
	<div><input type="hidden" name="inline" value="1" /></div>
<?php endif;  endif; ?>
<div id="photo_edit_item_id_<?php echo $this->_aVars['aForms']['photo_id']; ?>" class="<?php if (! isset ( $this->_aVars['bSingleMode'] )): ?>row1 <?php endif; ?>photo_edit_row">
	<div class="photo_edit_holder">
		<div class="t_center">
<?php echo Phpfox::getLib('phpfox.image.helper')->display(array('server_id' => $this->_aVars['aForms']['server_id'],'path' => 'photo.url_photo','file' => $this->_aVars['aForms']['destination'],'suffix' => '_150','max_width' => 150,'max_height' => 150,'title' => $this->_aVars['aForms']['title'],'class' => 'js_mp_fix_width photo_holder')); ?>
		</div>
		<div class="p_4">
<?php if (! isset ( $this->_aVars['bIsEditMode'] ) && $this->_aVars['aForms']['album_id'] > 0): ?>
			<div class="photo_edit_input"><label><input type="radio" name="val[set_album_cover]" value="<?php echo $this->_aVars['aForms']['photo_id']; ?>" class="v_middle"<?php if ($this->_aVars['aForms']['is_cover']): ?> checked="checked"<?php endif; ?> /> <?php echo Phpfox::getPhrase('photo.set_as_the_album_cover'); ?></label></div>
<?php endif; ?>
<?php if (! isset ( $this->_aVars['bSingleMode'] )): ?>
			<div class="photo_edit_input"><label><input type="checkbox" name="val[<?php echo $this->_aVars['aForms']['photo_id']; ?>][delete_photo]" value="<?php echo $this->_aVars['aForms']['photo_id']; ?>" class="v_middle" /> <?php echo Phpfox::getPhrase('photo.delete_this_photo_lowercase'); ?></label></div>
<?php endif; ?>
			
<?php if ($this->_aVars['aForms']['album_id'] == '0' && $this->_aVars['aForms']['group_id'] == '0'): ?>
			<div class="photo_edit_input">				
				<div class="table">
					<div class="table_left">
<?php echo Phpfox::getPhrase('photo.privacy'); ?>:
					</div>
					<div class="table_right">
					<div id="js_custom_privacy_input_holder_<?php echo $this->_aVars['aForms']['photo_id']; ?>">
<?php if (isset ( $this->_aVars['bIsEditMode'] )): ?>
<?php Phpfox::getBlock('privacy.build', array('privacy_item_id' => $this->_aVars['aForms']['photo_id'],'privacy_module_id' => 'photo','privacy_array' => $this->_aVars['aForms']['photo_id'])); ?>
<?php else: ?>
<?php Phpfox::getBlock('privacy.build', array('privacy_item_id' => $this->_aVars['aForms']['photo_id'],'privacy_module_id' => 'photo')); ?>
<?php endif; ?>
					</div>						
<?php if (isset ( $this->_aVars['bIsEditMode'] )): ?>
<?php Phpfox::getBlock('privacy.form', array('privacy_name' => 'privacy','privacy_info' => 'photo.control_who_can_see_this_photo','privacy_array' => $this->_aVars['aForms']['photo_id'],'privacy_custom_id' => 'js_custom_privacy_input_holder_'.$this->_aVars['aForms']['photo_id'].'')); ?>
<?php else: ?>
<?php Phpfox::getBlock('privacy.form', array('privacy_name' => 'privacy','privacy_info' => 'photo.control_who_can_see_this_photo')); ?>
<?php endif; ?>
					</div>			
				</div>
				<div class="table">
					<div class="table_left">
<?php echo Phpfox::getPhrase('photo.comment_privacy'); ?>:
					</div>
					<div class="table_right">
<?php if (isset ( $this->_aVars['bIsEditMode'] )): ?>
<?php Phpfox::getBlock('privacy.form', array('privacy_name' => 'privacy_comment','privacy_info' => 'photo.control_who_can_comment_on_this_photo','privacy_no_custom' => true,'privacy_array' => $this->_aVars['aForms']['photo_id'])); ?>
<?php else: ?>
<?php Phpfox::getBlock('privacy.form', array('privacy_name' => 'privacy_comment','privacy_info' => 'photo.control_who_can_comment_on_this_photo','privacy_no_custom' => true)); ?>
<?php endif; ?>
					</div>			
				</div>						
			</div>
<?php endif; ?>
			
<?php if (count ( $this->_aVars['aAlbums'] )): ?>
			<div class="photo_edit_input">
<?php echo Phpfox::getPhrase('photo.move_to'); ?>:
				<div class="p_top_4">
					<select name="val[<?php echo $this->_aVars['aForms']['photo_id']; ?>][move_to]" style="width:180px;">	
						<option value=""><?php echo Phpfox::getPhrase('photo.select'); ?>:</option>
<?php if (count((array)$this->_aVars['aAlbums'])):  foreach ((array) $this->_aVars['aAlbums'] as $this->_aVars['aAlbum']): ?>
						<option value="<?php echo $this->_aVars['aAlbum']['album_id']; ?>"><?php if ($this->_aVars['aAlbum']['profile_id'] > 0):  echo Phpfox::getPhrase('photo.profile_pictures');  else:  echo Phpfox::getLib('phpfox.parse.output')->clean($this->_aVars['aAlbum']['name']);  endif; ?></option>
<?php endforeach; endif; ?>
					</select>
				</div>
			</div>			
<?php endif; ?>
			
		</div>
	</div>
	<?php
						Phpfox::getLib('template')->getBuiltFile('photo.block.form');						
						?>
<?php if (isset ( $this->_aVars['bSingleMode'] )): ?>
		<div class="table_clear">
			<input type="submit" value="<?php echo Phpfox::getPhrase('photo.update'); ?>" class="button" />
		</div>
<?php endif; ?>
</div>
<?php if (isset ( $this->_aVars['bSingleMode'] )): ?>

</form>

<?php endif; ?>
