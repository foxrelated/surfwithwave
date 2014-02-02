<?php defined('PHPFOX') or exit('NO DICE!'); ?>
<?php /* Cached: January 31, 2014, 10:32 pm */ ?>
<?php 
/**
 * [PHPFOX_HEADER]
 * 
 * @copyright		[PHPFOX_COPYRIGHT]
 * @author  		Raymond Benc
 * @package 		Phpfox
 * @version 		$Id: view.html.php 3342 2011-10-21 12:59:32Z Raymond_Benc $
 */
 
 

 if ($this->_aVars['aEvent']['view_id'] == '1'): ?>
<div class="message js_moderation_off">
<?php echo Phpfox::getPhrase('event.event_is_pending_approval'); ?>
</div>
<?php endif; ?>

<?php if (( $this->_aVars['aEvent']['user_id'] == Phpfox ::getUserId() && Phpfox ::getUserParam('event.can_edit_own_event')) || Phpfox ::getUserParam('event.can_edit_other_event') || ( $this->_aVars['aEvent']['view_id'] == 0 && ( $this->_aVars['aEvent']['user_id'] == Phpfox ::getUserId() && Phpfox ::getUserParam('event.can_edit_own_event')) || Phpfox ::getUserParam('event.can_edit_other_event')) || ( $this->_aVars['aEvent']['user_id'] == Phpfox ::getUserId() && Phpfox ::getUserParam('event.can_edit_own_event')) || Phpfox ::getUserParam('event.can_edit_other_event') || ( $this->_aVars['aEvent']['user_id'] == Phpfox ::getUserId() && Phpfox ::getUserParam('event.can_delete_own_event')) || Phpfox ::getUserParam('event.can_delete_other_event')): ?>
<div class="item_bar">
	<div class="item_bar_action_holder">
<?php if (( Phpfox ::getUserParam('event.can_approve_events') && $this->_aVars['aEvent']['view_id'] == '1' )): ?>
		<a href="#" class="item_bar_approve item_bar_approve_image" onclick="return false;" style="display:none;" id="js_item_bar_approve_image"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'ajax/add.gif')); ?></a>			
		<a href="#" class="item_bar_approve" onclick="$(this).hide(); $('#js_item_bar_approve_image').show(); $.ajaxCall('event.approve', 'inline=true&amp;event_id=<?php echo $this->_aVars['aEvent']['event_id']; ?>'); return false;"><?php echo Phpfox::getPhrase('event.approve'); ?></a>
<?php endif; ?>
		<a href="#" class="item_bar_action"><span><?php echo Phpfox::getPhrase('event.actions'); ?></span></a>	
		<ul>
			<?php
						Phpfox::getLib('template')->getBuiltFile('event.block.menu');						
						?>
		</ul>			
	</div>
</div>
<?php endif;  (($sPlugin = Phpfox_Plugin::get('event.template_default_controller_view_extra_info')) ? eval($sPlugin) : false); ?>
