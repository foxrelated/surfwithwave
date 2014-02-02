<?php defined('PHPFOX') or exit('NO DICE!'); ?>
<?php /* Cached: February 1, 2014, 8:37 pm */ ?>
<?php 
/**
 * [PHPFOX_HEADER]
 * 
 * @copyright		[PHPFOX_COPYRIGHT]
 * @author  		Raymond Benc
 * @package  		Module_Photo
 * @version 		$Id: album-entry.html.php 6999 2013-12-18 19:40:00Z Fern $
 */
 
 

?>
<div class="t_center photo_row <?php if (! Phpfox ::getParam('photo.show_info_on_mouseover')): ?>album_entry<?php endif; ?>" id="js_photo_album_id_<?php echo $this->_aVars['aAlbum']['album_id']; ?>">
	<div class="js_outer_photo_div js_mp_fix_holder photo_row_holder">	
		<div class="photo_row_height image_hover_holder<?php if (Phpfox ::getParam('photo.show_info_on_mouseover')): ?>_dynamic<?php endif; ?>">
<?php if (Phpfox ::getParam('photo.auto_crop_photo') && false): ?>
			<div class="photo_clip_holder_main<?php if (Phpfox ::getParam('photo.show_info_on_mouseover')): ?>_big<?php endif; ?>">
<?php endif; ?>

<?php if (( $this->_aVars['aAlbum']['profile_id'] == '0' && ( ( Phpfox ::getUserId() == $this->_aVars['aAlbum']['user_id'] && Phpfox ::getUserParam('photo.can_delete_own_photo_album')) || Phpfox ::getUserParam('photo.can_delete_other_photo_albums'))) || ( $this->_aVars['aAlbum']['profile_id'] == '0' && Phpfox ::getUserId() == $this->_aVars['aAlbum']['user_id'] ) || ( ( Phpfox ::getUserId() == $this->_aVars['aAlbum']['user_id'] && Phpfox ::getUserParam('photo.can_edit_own_photo_album')) || Phpfox ::getUserParam('photo.can_edit_other_photo_albums'))): ?>
				<a href="#" class="image_hover_menu_link"><?php echo Phpfox::getPhrase('photo.link'); ?></a>				
				<div class="image_hover_menu">
					<ul>
<?php if ($this->_aVars['aAlbum']['profile_id'] == '0' && ( ( Phpfox ::getUserId() == $this->_aVars['aAlbum']['user_id'] && Phpfox ::getUserParam('photo.can_delete_own_photo_album')) || Phpfox ::getUserParam('photo.can_delete_other_photo_albums'))): ?>
						<li class="item_delete"><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('photo.albums', array('delete' => $this->_aVars['aAlbum']['album_id'])); ?>" id="js_delete_this_album" class="sJsConfirm"><?php echo Phpfox::getPhrase('photo.delete'); ?></a></li>
<?php endif; ?>
<?php if ($this->_aVars['aAlbum']['profile_id'] == '0' && Phpfox ::getUserId() == $this->_aVars['aAlbum']['user_id']): ?>
						<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('photo.add', array('album' => $this->_aVars['aAlbum']['album_id'])); ?>"><?php echo Phpfox::getPhrase('photo.upload_photo_s'); ?></a></li>
<?php endif; ?>
<?php if (( Phpfox ::getUserId() == $this->_aVars['aAlbum']['user_id'] && Phpfox ::getUserParam('photo.can_edit_own_photo_album')) || Phpfox ::getUserParam('photo.can_edit_other_photo_albums')): ?>
						<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('photo.edit-album', array('id' => $this->_aVars['aAlbum']['album_id'])); ?>" id="js_edit_this_album"><?php echo Phpfox::getPhrase('photo.edit'); ?></a></li>
<?php endif; ?>
					</ul>
				</div>
<?php endif; ?>

<?php if (Phpfox ::getParam('photo.auto_crop_photo') && false && ! Phpfox ::getParam('photo.show_info_on_mouseover')): ?>
				<div class="photo_clip_holder_border">
					<a href="<?php echo $this->_aVars['aAlbum']['link']; ?>" style="background:url('<?php if (Phpfox ::isMobile()):  echo Phpfox::getLib('phpfox.image.helper')->display(array('server_id' => $this->_aVars['aAlbum']['server_id'],'path' => 'photo.url_photo','file' => $this->_aVars['aAlbum']['destination'],'suffix' => '_50','max_width' => 75,'max_height' => 75,'return_url' => true)); ?> <?php else:  echo Phpfox::getLib('phpfox.image.helper')->display(array('server_id' => $this->_aVars['aAlbum']['server_id'],'path' => 'photo.url_photo','file' => $this->_aVars['aAlbum']['destination'],'suffix' => '_240','max_width' => 240,'max_height' => 240,'return_url' => true));  endif; ?>') no-repeat 25% center;" class="photo_clip_holder"><?php echo Phpfox::getLib('phpfox.parse.output')->split(Phpfox::getLib('phpfox.parse.output')->shorten(Phpfox::getLib('phpfox.parse.output')->clean($this->_aVars['aAlbum']['name']), 45, '...'), 20); ?></a>
				</div>			
<?php else: ?>
				<a 
				    href="<?php echo $this->_aVars['aAlbum']['link']; ?>" 
				    title="<?php echo Phpfox::getPhrase('photo.name_by_full_name', array('name' => Phpfox::getLib('phpfox.parse.output')->clean($this->_aVars['aAlbum']['name']),'full_name' => Phpfox::getLib('phpfox.parse.output')->clean($this->_aVars['aAlbum']['full_name']))); ?>" 
				    id="js_album_inner_title_link_<?php echo $this->_aVars['aAlbum']['album_id']; ?>"
				    style="background-image:url('<?php echo Phpfox::getLib('phpfox.image.helper')->display(array('server_id' => $this->_aVars['aAlbum']['server_id'],'path' => 'photo.url_photo','file' => $this->_aVars['aAlbum']['destination'],'suffix' => '_240','max_width' => 196,'max_height' => 196,'return_url' => true)); ?>')"
				    class="album_a_img_holder"
				    >
				</a>
<?php endif; ?>
<?php if (Phpfox ::getParam('photo.auto_crop_photo') && false): ?>
			</div>
<?php endif; ?>
			
<?php if (Phpfox ::getParam('photo.show_info_on_mouseover')): ?>
				<?php
						Phpfox::getLib('template')->getBuiltFile('photo.block.hoverinfo');						
						?>
<?php endif; ?>
		</div>
			
<?php if (! Phpfox ::getParam('photo.show_info_on_mouseover')): ?>
			<div class="photo_row_info photo_row_info_album">
				<a href="<?php echo Phpfox::permalink('photo.album', $this->_aVars['aAlbum']['album_id'], $this->_aVars['aAlbum']['name'], false, null, (array) array (
)); ?>" id="js_album_inner_title_<?php echo $this->_aVars['aAlbum']['album_id']; ?>" class="row_sub_link"><?php echo Phpfox::getLib('phpfox.parse.output')->split(Phpfox::getLib('phpfox.parse.output')->shorten(Phpfox::getLib('phpfox.parse.output')->clean($this->_aVars['aAlbum']['name']), 150, '...'), 40); ?></a>	
				<div class="extra_info">
<?php if (! empty ( $this->_aVars['aAlbum']['total_photo'] )): ?>
<?php if ($this->_aVars['aAlbum']['total_photo'] == '1'): ?>
						1 photo
<?php else: ?>
<?php echo number_format($this->_aVars['aAlbum']['total_photo']); ?> photos
<?php endif; ?>
<?php endif; ?>
<?php if (! defined ( 'PHPFOX_IS_USER_PROFILE' )): ?>
					<div><?php echo Phpfox::getLib('phpfox.parse.output')->split('<span class="user_profile_link_span" id="js_user_name_link_' . $this->_aVars['aAlbum']['user_name'] . '"><a href="' . Phpfox::getLib('phpfox.url')->makeUrl('profile', array($this->_aVars['aAlbum']['user_name'], ((empty($this->_aVars['aAlbum']['user_name']) && isset($this->_aVars['aAlbum']['profile_page_id'])) ? $this->_aVars['aAlbum']['profile_page_id'] : null))) . '">' . Phpfox::getLib('phpfox.parse.output')->shorten(Phpfox::getService('user')->getCurrentName($this->_aVars['aAlbum']['user_id'], $this->_aVars['aAlbum']['full_name']), 50, '...') . '</a></span>', 10); ?></div>
<?php endif; ?>
<?php (($sPlugin = Phpfox_Plugin::get('photo.template_block_album_entry_extra_info')) ? eval($sPlugin) : false); ?>
				</div>
			</div>
<?php endif; ?>
	</div>
</div>

