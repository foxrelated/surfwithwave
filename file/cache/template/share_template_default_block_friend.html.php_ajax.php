<?php defined('PHPFOX') or exit('NO DICE!'); ?>
<?php /* Cached: January 21, 2014, 7:11 pm */ ?>
<?php 
/**
 * [PHPFOX_HEADER]
 * 
 * @copyright		[PHPFOX_COPYRIGHT]
 * @author  		Raymond Benc
 * @package 		Phpfox
 * @version 		$Id: friend.html.php 4154 2012-05-07 14:32:57Z Raymond_Benc $
 */
 
 

?>
<script type="text/javascript">
<?php echo '
	function shareFriendContinue()
	{
		var iCnt = 0;
		$(\'.js_cached_friend_name\').each(function()
		{
			iCnt++;
		});
		
		if (!iCnt)
		{
			'; ?>

			alert('<?php echo Phpfox::getPhrase('share.need_to_select_some_friends_before_we_try_to_send_the_message', array('phpfox_squote' => true)); ?>');
			<?php echo '
			return false;
		}
		
		$(\'#js_friend_search\').hide();
		$(\'#js_friend_mail\').show();
		
		return false;
	}
'; ?>

</script>
<div>	
	<div id="js_friend_search">
<?php Phpfox::getBlock('friend.search', array('friend_share' => true,'input' => 'to')); ?>
		<div class="main_break t_right">
			<input type="button" value="<?php echo Phpfox::getPhrase('share.continue'); ?>" class="button" onclick="return shareFriendContinue();" />
		</div>		
	</div>
	<div id="js_friend_mail" style="display:none;">
		<form method="post" action="#" onsubmit="$(this).ajaxCall('share.sendFriends'); return false;">
<?php echo '<div><input type="hidden" name="' . Phpfox::getTokenName() . '[security_token]" value="' . Phpfox::getService('log.session')->getToken() . '" /></div>'; ?>
			<div id="js_selected_friends" style="display:none;"></div>
			<div class="p_4">
				<div class="table">
					<div class="table_left">
<?php echo Phpfox::getPhrase('share.subject'); ?>:
					</div>
					<div class="table_right">
						<input type="text" name="val[subject]" size="30" value="<?php echo Phpfox::getPhrase('share.check_out'); ?> <?php echo Phpfox::getLib('phpfox.parse.output')->clean($this->_aVars['sTitle']); ?>" />
					</div>
				</div>	
				<div class="table">
					<div class="table_left">
<?php echo Phpfox::getPhrase('share.message'); ?>:
					</div>
					<div class="table_right">
						<textarea cols="30" rows="10" name="val[message]" style="width:95%;"><?php echo $this->_aVars['sMessage']; ?></textarea>
					</div>
				</div>
				<div class="table_clear">
					<input type="submit" value="<?php echo Phpfox::getPhrase('share.send'); ?>" class="button" />
				</div>
			</div>
		
</form>

	</div>	
</div>
