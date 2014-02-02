<?php defined('PHPFOX') or exit('NO DICE!'); ?>
<?php /* Cached: January 31, 2014, 10:32 pm */ ?>
<?php 
/**
 * [PHPFOX_HEADER]
 * 
 * @copyright		[PHPFOX_COPYRIGHT]
 * @author  		Raymond Benc
 * @package 		Phpfox
 * @version 		$Id: menu.html.php 3737 2011-12-09 07:50:12Z Raymond_Benc $
 */
 
 

?>
<?php if (( $this->_aVars['aEvent']['user_id'] == Phpfox ::getUserId() && Phpfox ::getUserParam('event.can_edit_own_event')) || Phpfox ::getUserParam('event.can_edit_other_event')): ?>
		<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('event.add', array('id' => $this->_aVars['aEvent']['event_id'])); ?>"><?php echo Phpfox::getPhrase('event.edit_event'); ?></a></li>	
<?php endif; ?>
<?php if ($this->_aVars['aEvent']['view_id'] == 0 && ( $this->_aVars['aEvent']['user_id'] == Phpfox ::getUserId() && Phpfox ::getUserParam('event.can_edit_own_event')) || Phpfox ::getUserParam('event.can_edit_other_event')): ?>
		<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('event.add.invite', array('id' => $this->_aVars['aEvent']['event_id'])); ?>"><?php echo Phpfox::getPhrase('event.invite_people_to_come'); ?></a></li>	
		<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('event.add.email', array('id' => $this->_aVars['aEvent']['event_id'])); ?>"><?php echo Phpfox::getPhrase('event.mass_email_guests'); ?></a></li>	
<?php endif; ?>
<?php if (( $this->_aVars['aEvent']['user_id'] == Phpfox ::getUserId() && Phpfox ::getUserParam('event.can_edit_own_event')) || Phpfox ::getUserParam('event.can_edit_other_event')): ?>
		<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('event.add.manage', array('id' => $this->_aVars['aEvent']['event_id'])); ?>"><?php echo Phpfox::getPhrase('event.manage_guest_list'); ?></a></li>	
<?php endif; ?>
	
<?php if ($this->_aVars['aEvent']['view_id'] == 0 && Phpfox ::getUserParam('event.can_feature_events')): ?>
		<li id="js_feature_<?php echo $this->_aVars['aEvent']['event_id']; ?>"<?php if ($this->_aVars['aEvent']['is_featured']): ?> style="display:none;"<?php endif; ?>><a href="#" title="<?php echo Phpfox::getPhrase('event.feature_this_event'); ?>" onclick="$(this).parent().hide(); $('#js_unfeature_<?php echo $this->_aVars['aEvent']['event_id']; ?>').show(); $(this).parents('.js_event_parent:first').addClass('row_featured').find('.js_featured_event').show(); $.ajaxCall('event.feature', 'event_id=<?php echo $this->_aVars['aEvent']['event_id']; ?>&amp;type=1'); return false;"><?php echo Phpfox::getPhrase('event.feature'); ?></a></li>				
		<li id="js_unfeature_<?php echo $this->_aVars['aEvent']['event_id']; ?>"<?php if (! $this->_aVars['aEvent']['is_featured']): ?> style="display:none;"<?php endif; ?>><a href="#" title="<?php echo Phpfox::getPhrase('event.un_feature_this_event'); ?>" onclick="$(this).parent().hide(); $('#js_feature_<?php echo $this->_aVars['aEvent']['event_id']; ?>').show(); $(this).parents('.js_event_parent:first').removeClass('row_featured').find('.js_featured_event').hide(); $.ajaxCall('event.feature', 'event_id=<?php echo $this->_aVars['aEvent']['event_id']; ?>&amp;type=0'); return false;"><?php echo Phpfox::getPhrase('event.unfeature'); ?></a></li>				
<?php endif; ?>
	
<?php if (Phpfox ::getUserParam('event.can_sponsor_event')): ?>
		<li id="js_event_sponsor_<?php echo $this->_aVars['aEvent']['event_id']; ?>" <?php if ($this->_aVars['aEvent']['is_sponsor']): ?>style="display:none;"<?php endif; ?>><a href="#" onclick="$.ajaxCall('event.sponsor', 'event_id=<?php echo $this->_aVars['aEvent']['event_id']; ?>&type=1', 'GET'); return false;"><?php echo Phpfox::getPhrase('event.sponsor_this_event'); ?></a></li>
		<li id="js_event_unsponsor_<?php echo $this->_aVars['aEvent']['event_id']; ?>" <?php if (! $this->_aVars['aEvent']['is_sponsor']): ?>style="display:none;"<?php endif; ?>><a href="#" onclick="$.ajaxCall('event.sponsor', 'event_id=<?php echo $this->_aVars['aEvent']['event_id']; ?>&type=0', 'GET'); return false;"><?php echo Phpfox::getPhrase('event.unsponsor_this_event'); ?></a></li>				
<?php elseif (Phpfox ::getUserParam('event.can_purchase_sponsor') && ! defined ( 'PHPFOX_IS_GROUP_VIEW' ) && $this->_aVars['aEvent']['user_id'] == Phpfox ::getUserId() && $this->_aVars['aEvent']['is_sponsor'] != 1): ?>
		<li> 
			<a href="<?php echo Phpfox::permalink('ad.sponsor', $this->_aVars['aEvent']['event_id'], $this->_aVars['aEvent']['title'], false, null, (array) array (
  'section' => 'event',
)); ?>"> 
<?php echo Phpfox::getPhrase('event.sponsor_this_event'); ?>
			</a>
		</li>
<?php endif; ?>
	
<?php if (( ( $this->_aVars['aEvent']['user_id'] == Phpfox ::getUserId() && Phpfox ::getUserParam('event.can_delete_own_event')) || Phpfox ::getUserParam('event.can_delete_other_event')) || ( defined ( 'PHPFOX_IS_PAGES_VIEW' ) && Phpfox ::getService('pages')->isAdmin('' . $this->_aVars['aPage']['page_id'] . '' ) )): ?>
		<li class="item_delete"><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('event', array('delete' => $this->_aVars['aEvent']['event_id'])); ?>" class="sJsConfirm"><?php echo Phpfox::getPhrase('event.delete_event'); ?></a></li>
<?php endif; ?>
