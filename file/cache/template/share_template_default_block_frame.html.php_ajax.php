<?php defined('PHPFOX') or exit('NO DICE!'); ?>
<?php /* Cached: January 21, 2014, 7:11 pm */ ?>
<?php 
/**
 * [PHPFOX_HEADER]
 * 
 * @copyright		[PHPFOX_COPYRIGHT]
 * @author  		Raymond Benc
 * @package  		Module_Share
 * @version 		$Id: frame.html.php 6769 2013-10-11 09:08:02Z Miguel_Espinoza $
 */
 
 

?>
<div class="label_flow_menu">	
	<ul>
<?php if (Phpfox ::isUser() && $this->_aVars['iFeedId'] > 0): ?>
		<li class="label_flow_menu_active">
			<a href="#" onclick="$.ajaxCall('share.post', 'type=<?php echo $this->_aVars['sBookmarkType']; ?>&amp;url=<?php echo urlencode($this->_aVars['sBookmarkUrl']); ?>&amp;title=<?php echo $this->_aVars['sBookmarkTitle']; ?>&amp;feed_id=<?php echo $this->_aVars['iFeedId']; ?>&amp;is_feed_view=1&amp;sharemodule=<?php echo $this->_aVars['sShareModule']; ?>'); return false;"><?php echo Phpfox::getPhrase('share.post'); ?></a></li>
<?php endif; ?>
<?php if (! Phpfox ::isMobile()): ?>
<?php if (Phpfox ::isUser()): ?>
<?php if (Phpfox ::isModule('friend')): ?>
			<li <?php if (Phpfox ::isUser() && $this->_aVars['iFeedId'] <= 0): ?>class="label_flow_menu_active"<?php endif; ?>><a href="#share.friend?type=<?php echo $this->_aVars['sBookmarkType']; ?>&amp;url=<?php echo urlencode($this->_aVars['sBookmarkUrl']); ?>&amp;title=<?php echo $this->_aVars['sBookmarkTitle']; ?>"><?php echo Phpfox::getPhrase('share.message'); ?></a></li>
<?php endif; ?>
<?php if (Phpfox ::getUserParam('share.can_send_emails')): ?>
		<li<?php if (! Phpfox ::getParam('share.enable_social_bookmarking')): ?> class="last"<?php endif; ?>><a href="#share.email?type=<?php echo $this->_aVars['sBookmarkType']; ?>&amp;url=<?php echo urlencode($this->_aVars['sBookmarkUrl']); ?>&amp;title=<?php echo $this->_aVars['sBookmarkTitle']; ?>"><?php echo Phpfox::getPhrase('share.e_mail'); ?></a></li>
<?php endif; ?>
<?php endif; ?>
<?php endif; ?>
<?php if (Phpfox ::getParam('share.enable_social_bookmarking') && $this->_aVars['bShowSocialBookmarks']): ?>
		<li <?php if (! Phpfox ::isUser() && $this->_aVars['iFeedId'] <= 0): ?>class="label_flow_menu_active"<?php else: ?>class="last"<?php endif; ?>><a href="#share.bookmark?type=<?php echo $this->_aVars['sBookmarkType']; ?>&amp;url=<?php echo urlencode($this->_aVars['sBookmarkUrl']); ?>&amp;title=<?php echo $this->_aVars['sBookmarkTitle']; ?>"><?php echo Phpfox::getPhrase('share.social_bookmarks'); ?></a></li>
<?php endif; ?>
	</ul>
	<br class="clear" />
</div>	
<div class="labelFlowContent" id="js_share_content">
<?php if (Phpfox ::isUser() && $this->_aVars['iFeedId'] > 0): ?>
<?php Phpfox::getBlock('feed.share', array('type' => $this->_aVars['sBookmarkType'],'url' => $this->_aVars['sBookmarkUrl'])); ?>
<?php else: ?>
<?php Phpfox::getBlock('share.friend', array('type' => $this->_aVars['sBookmarkType'],'url' => $this->_aVars['sBookmarkUrl'],'title' => $this->_aVars['sBookmarkTitle'])); ?>
<?php endif; ?>
</div>
<script type="text/javascript">$Core.loadStaticFile('<?php echo $this->getStyle('static_script', 'switch_legend.js'); ?>');</script>
<script type="text/javascript">$Core.loadStaticFile('<?php echo $this->getStyle('static_script', 'switch_menu.js'); ?>');</script>
<script type="text/javascript">$Core.loadInit();</script>
