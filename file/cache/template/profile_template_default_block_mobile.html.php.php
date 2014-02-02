<?php defined('PHPFOX') or exit('NO DICE!'); ?>
<?php /* Cached: January 21, 2014, 6:51 pm */ ?>
<?php 
/**
 * [PHPFOX_HEADER]
 * 
 * @copyright		[PHPFOX_COPYRIGHT]
 * @author  		Raymond_Benc
 * @package 		Phpfox
 * @version 		$Id: mobile.html.php 6719 2013-10-03 10:35:48Z Fern $
 */
 
 

?>
<div id="mobile_profile_header">
	<div id="mobile_profile_photo">
	
<?php if (defined ( 'PHPFOX_IS_USER_PROFILE' ) && $this->_aVars['aUser']['is_online']): ?><span class="profile_online_status">(<?php echo Phpfox::getPhrase('profile.online'); ?>)</span><?php endif; ?>
	
		<div id="mobile_profile_photo_image">
<?php echo $this->_aVars['sProfileImage']; ?>
		</div>
<?php if (defined ( 'PHPFOX_IS_USER_PROFILE' )): ?>
		<div id="mobile_profile_photo_name">
<?php echo Phpfox::getLib('phpfox.parse.output')->split(Phpfox::getLib('phpfox.parse.output')->clean($this->_aVars['aUser']['full_name']), 50); ?>
			<ul>
<?php if (Phpfox ::getUserId() != $this->_aVars['aUser']['user_id']): ?>
<?php if (Phpfox ::isModule('mail') && Phpfox ::getService('user.privacy')->hasAccess('' . $this->_aVars['aUser']['user_id'] . '' , 'mail.send_message' )): ?>
					<li><a href="#" onclick="$Core.composeMessage({user_id: <?php echo $this->_aVars['aUser']['user_id']; ?>}); return false;"><?php echo Phpfox::getPhrase('profile.message'); ?></a></li>
<?php endif; ?>
<?php if (Phpfox ::isModule('friend') && ! $this->_aVars['aUser']['is_friend']): ?>
					<li id="js_add_friend_on_profile"><a href="#" onclick="return $Core.addAsFriend('<?php echo $this->_aVars['aUser']['user_id']; ?>');" title="<?php echo Phpfox::getPhrase('profile.add_to_friends'); ?>"><?php echo Phpfox::getPhrase('profile.add_to_friends'); ?></a></li>
<?php endif; ?>
<?php if ($this->_aVars['bCanPoke'] && Phpfox ::getService('user.privacy')->hasAccess('' . $this->_aVars['aUser']['user_id'] . '' , 'poke.can_send_poke' )): ?>
					<li id="liPoke">
						<a href="#" id="section_poke" onclick="$Core.box('poke.poke', 400, 'user_id=<?php echo $this->_aVars['aUser']['user_id']; ?>'); return false;"><?php echo Phpfox::getPhrase('poke.poke', array('full_name' => '')); ?></a>
					</li>
<?php endif; ?>
<?php endif; ?>
			</ul>
			<div class="clear"></div>				
		</div>
<?php endif; ?>
<?php if (defined ( 'PHPFOX_IS_PAGES_VIEW' )): ?>
		<div id="mobile_profile_photo_name">
			<ul>
<?php if (! isset ( $this->_aVars['aUser']['is_liked'] ) && $this->_aVars['aUser']['is_liked'] != true): ?>
					<li>
						<a href="#" id="pages_like_join" onclick="$(this).parent().hide(); <?php if ($this->_aVars['aUser']['page_type'] == '1' && $this->_aVars['aUser']['reg_method'] == '1'): ?> $.ajaxCall('pages.signup', 'page_id=<?php echo $this->_aVars['aUser']['page_id']; ?>'); <?php else: ?>$.ajaxCall('like.add', 'type_id=pages&amp;item_id=<?php echo $this->_aVars['aUser']['page_id']; ?>');<?php endif; ?> return false;">
<?php if ($this->_aVars['aPage']['page_type'] == '1'): ?>
<?php echo Phpfox::getPhrase('pages.join'); ?>
<?php else: ?>
<?php echo Phpfox::getPhrase('pages.like'); ?>
<?php endif; ?>
						</a>
					</li>
<?php endif; ?>
			</ul>
			<div class="clear"></div>				
		</div>
<?php endif; ?>
	</div>
	<ul class="mobile_profile_header_menu">
<?php if (defined ( 'PHPFOX_IS_USER_PROFILE' )): ?>
		<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl($this->_aVars['aUser']['user_name'].'.wall'); ?>"<?php if (! $this->_aVars['bIsInfo']): ?> class="active"<?php endif; ?>><?php echo Phpfox::getPhrase('profile.wall'); ?></a></li>
		<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl($this->_aVars['aUser']['user_name'].'.info'); ?>"<?php if ($this->_aVars['bIsInfo']): ?> class="active"<?php endif; ?>><?php echo Phpfox::getPhrase('profile.info'); ?></a></li>
<?php else: ?>
<?php if (! empty ( $this->_aVars['aUser']['vanity_url'] )): ?>
			<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl($this->_aVars['aUser']['vanity_url'].'.wall'); ?>"<?php if (! $this->_aVars['bIsInfo']): ?> class="active"<?php endif; ?>><?php echo Phpfox::getPhrase('profile.wall'); ?></a></li>
			<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl($this->_aVars['aUser']['vanity_url'].'.info'); ?>"<?php if ($this->_aVars['bIsInfo']): ?> class="active"<?php endif; ?>><?php echo Phpfox::getPhrase('profile.info'); ?></a></li>
<?php else: ?>
			<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('pages.'.$this->_aVars['aUser']['page_id'].'.wall'); ?>"<?php if (! $this->_aVars['bIsInfo']): ?> class="active"<?php endif; ?>><?php echo Phpfox::getPhrase('profile.wall'); ?></a></li>
			<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('pages.'.$this->_aVars['aUser']['page_id'].'.info'); ?>"<?php if ($this->_aVars['bIsInfo']): ?> class="active"<?php endif; ?>><?php echo Phpfox::getPhrase('profile.info'); ?></a></li>
<?php endif; ?>
<?php endif; ?>
	</ul>
	<div class="clear"></div>
</div>

