<?php defined('PHPFOX') or exit('NO DICE!'); ?>
<?php /* Cached: January 31, 2014, 6:34 pm */ ?>
<?php 
/**
 * [PHPFOX_HEADER]
 * 
 * @copyright		[PHPFOX_COPYRIGHT]
 * @author  		Raymond Benc
 * @package  		Module_User
 * @version 		$Id: photo.html.php 6772 2013-10-11 10:44:06Z Fern $
 */
 
 

 if ($this->_aVars['bIsRegistration']): ?>
<div class="t_right p_top_10" style="font-size:10pt; font-weight:bold;">
	<a href="<?php echo $this->_aVars['sNextUrl']; ?>"><?php echo Phpfox::getPhrase('user.skip_this_step'); ?></a>
</div>	
<?php endif; ?>
<div class="main_break">
<?php (($sPlugin = Phpfox_Plugin::get('user.template_controller_photo_1')) ? eval($sPlugin) : false); ?>
	<div id="js_crop_tool">
<?php (($sPlugin = Phpfox_Plugin::get('user.template_controller_photo_2')) ? eval($sPlugin) : false); ?>
<?php if (( ! empty ( $this->_aVars['sProfileImage'] ) && Phpfox ::getUserBy('user_image')) || $this->_aVars['bIsProcess']): ?>
<?php if (! $this->_aVars['bIsProcess']): ?>
				<div style="float:left;">
					<strong><?php echo Phpfox::getPhrase('user.avatar'); ?>:</strong>
					<div class="p_2" id="js_user_avatar">
<?php echo $this->_aVars['sImageAvatar']; ?>
					</div>
				</div>
				<div class="clear"></div>
<?php endif; ?>
			
<?php if (( $this->_aVars['bIsProcess'] ) || ( ! $this->_aVars['bIsProcess'] && $this->_aVars['iImageWidth'] > 75 && $this->_aVars['iImageHeight'] > 75 )): ?>
				<h3><?php echo Phpfox::getPhrase('user.profile_picture_cropping_tool'); ?></h3>
<?php if (( $this->_aVars['bIsProcess'] && ( $this->_aVars['iImageWidth'] <= 75 || $this->_aVars['iImageHeight'] <= 75 ) )): ?>
<?php echo $this->_aVars['sProfileImage']; ?>
					<div class="extra_info">
<?php echo Phpfox::getPhrase('user.the_image_you_uploaded_is_rather_small_so_we_are_unable_to_crop_it_however_you_can_still_save_this_image_if_you_want_to_use_it'); ?>
					</div>	
					<form method="post" action="#" onsubmit="return $Core.photo_crop.save(this);">
<?php echo '<div><input type="hidden" name="' . Phpfox::getTokenName() . '[security_token]" value="' . Phpfox::getService('log.session')->getToken() . '" /></div>'; ?>
<?php (($sPlugin = Phpfox_Plugin::get('user.template_controller_photo_3')) ? eval($sPlugin) : false); ?>
						<div><input type="hidden" name="in_process" value="<?php echo $this->_aVars['sCacheImage']; ?>" /></div>
						<div><input type="hidden" name="val[skip_croping]" value="<?php echo $this->_aVars['sCacheImage']; ?>" /></div>
						
						<input type="submit" value="<?php echo Phpfox::getPhrase('user.save_avatar'); ?>" id="js_save_profile_photo" class="button" /> <span id="js_photo_preview_ajax"></span>		
					
</form>

<?php else: ?>
					<div class="extra_info">
<?php (($sPlugin = Phpfox_Plugin::get('user.template_controller_photo_4')) ? eval($sPlugin) : false); ?>
<?php echo Phpfox::getPhrase('user.click_and_drag_a_box_on_the_original_image_to_create_your_cropped_image'); ?>
					</div>
					<div class="p_4">
						<div style="float:left; margin-right:10px;">
						<strong><?php echo Phpfox::getPhrase('user.original'); ?>:</strong>
							<div class="p_2" style="position:relative;">
<?php echo $this->_aVars['sProfileImage']; ?>
							</div>
						</div>
						<div id="js_photo_preview" style="display:none;">
							<strong><?php echo Phpfox::getPhrase('user.preview'); ?>:</strong>
							<div class="p_2">
								<div style="position:relative; overflow:hidden; width:75px; height:75px; border:1px #000 solid;">
<?php echo $this->_aVars['sProfileImage2']; ?>
								</div>		
							</div>
						</div>
						<br style="clear:both;"/>
						<form method="post" action="#" onsubmit="return $Core.photo_crop.save(this);">
<?php echo '<div><input type="hidden" name="' . Phpfox::getTokenName() . '[security_token]" value="' . Phpfox::getService('log.session')->getToken() . '" /></div>'; ?>
<?php (($sPlugin = Phpfox_Plugin::get('user.template_controller_photo_5')) ? eval($sPlugin) : false); ?>
<?php if ($this->_aVars['bIsProcess']): ?>
							<div><input type="hidden" name="in_process" value="<?php echo $this->_aVars['sCacheImage']; ?>" /></div>
<?php endif; ?>
							<div><input type="hidden" name="val[x1]" value="" id="x1" /></div>
							<div><input type="hidden" name="val[y1]" value="" id="y1" /></div>
							<div><input type="hidden" name="val[x2]" value="" id="x2" /></div>
							<div><input type="hidden" name="val[y2]" value="" id="y2" /></div>
							<div><input type="hidden" name="val[w]" value="" id="w" /></div>
							<div><input type="hidden" name="val[h]" value="" id="h" /></div>
							<div><input type="hidden" name="val[image_width]" value="<?php echo $this->_aVars['iImageWidth']; ?>" /></div>
							<div><input type="hidden" name="val[image_height]" value="<?php echo $this->_aVars['iImageHeight']; ?>" /></div>				
							<div style="margin-top:10px;">
								<input type="submit" value="<?php echo Phpfox::getPhrase('user.save_avatar'); ?>" id="js_save_profile_photo" class="button" /> <span id="js_photo_preview_ajax"></span>
							</div>
						
</form>
			
					</div>
<?php endif; ?>
<?php endif; ?>
<?php endif; ?>
<?php (($sPlugin = Phpfox_Plugin::get('user.template_controller_photo_6')) ? eval($sPlugin) : false); ?>
	</div>
	
<?php if (! $this->_aVars['bIsProcess']): ?>
<?php (($sPlugin = Phpfox_Plugin::get('user.template_controller_photo_7')) ? eval($sPlugin) : false); ?>
<?php if (! empty ( $this->_aVars['sProfileImage'] )): ?>
	<h3><?php echo Phpfox::getPhrase('user.upload_a_new_profile_picture'); ?></h3>
<?php endif; ?>
	<div id="js_upload_photo_form">
<?php (($sPlugin = Phpfox_Plugin::get('user.template_controller_photo_8')) ? eval($sPlugin) : false); ?>
		<div id="js_photo_form_holder">
<?php (($sPlugin = Phpfox_Plugin::get('user.template_controller_photo_9')) ? eval($sPlugin) : false); ?>
			<form method="post" action="<?php if ($this->_aVars['bIsRegistration']):  echo Phpfox::getLib('phpfox.url')->makeUrl('user.photo.register');  else:  echo Phpfox::getLib('phpfox.url')->makeUrl('user.photo');  endif; ?>" id="js_form" enctype="multipart/form-data" onsubmit="return startProcess(true, true);">
<?php echo '<div><input type="hidden" name="' . Phpfox::getTokenName() . '[security_token]" value="' . Phpfox::getService('log.session')->getToken() . '" /></div>'; ?>
				<div class="table">
<?php (($sPlugin = Phpfox_Plugin::get('user.template_controller_photo_10')) ? eval($sPlugin) : false); ?>
					<div class="table_left">
						<label for="image"><?php echo Phpfox::getPhrase('user.select_an_image'); ?>:</label>
					</div>
					<div class="table_right">				
						<div id="js_progress_uploader"></div>
						<div class="extra_info">
<?php echo Phpfox::getPhrase('user.you_can_upload_a_jpg_gif_or_png_file'); ?>
<?php if ($this->_aVars['iMaxFileSize'] !== null): ?>
							<br />
<?php echo Phpfox::getPhrase('user.the_file_size_limit_is_file_size_if_your_upload_does_not_work_try_uploading_a_smaller_picture', array('file_size' => Phpfox::getLib('phpfox.file')->filesize($this->_aVars['iMaxFileSize']))); ?>
<?php endif; ?>
						</div>				
					</div>
					<div class="clear"></div>
				</div>		
				<div class="table_clear">
					<input type="submit" value="<?php echo Phpfox::getPhrase('user.upload_picture'); ?>" class="button" name="val[uploaded]" />
				</div>		
			
</form>

		</div>
		<div id="js_photo_form_holder_loading" class="t_center" style="display:none;">
			<span style="margin-left:4px; margin-right:4px; font-size:9pt; font-weight:normal;">
<?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'ajax/large.gif','alt' => '','class' => 'v_middle')); ?>
<?php echo Phpfox::getPhrase('core.uploading'); ?>
			</span>
		</div>
	</div>	
<?php endif; ?>
	
</div>

