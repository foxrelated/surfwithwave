<?php defined('PHPFOX') or exit('NO DICE!'); ?>
<?php /* Cached: January 21, 2014, 8:44 pm */ ?>
<?php 
/**
 * [PHPFOX_HEADER]
 * 
 * @copyright		[PHPFOX_COPYRIGHT]
 * @author  		Raymond Benc
 * @package  		Module_Search
 * @version 		$Id: index.html.php 6569 2013-09-03 06:48:49Z Miguel_Espinoza $
 */
 
 

 if (! PHPFOX_IS_AJAX): ?>
<div class="main_search_bar">
	<form method="post" action="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('search'); ?>">
<?php echo '<div><input type="hidden" name="' . Phpfox::getTokenName() . '[security_token]" value="' . Phpfox::getService('log.session')->getToken() . '" /></div>'; ?>
		<input type="text" name="q" value="<?php if (isset ( $this->_aVars['sQuery'] )):  echo Phpfox::getLib('phpfox.parse.output')->clean($this->_aVars['sQuery']);  endif; ?>" class="main_search_bar_input" /><input type="submit" value="Search" class="main_search_bar_button" />
	
</form>

</div>
<?php endif; ?>

<?php if (isset ( $this->_aVars['aSearchResults'] ) && count ( $this->_aVars['aSearchResults'] )):  if (PHPFOX_IS_AJAX): ?>
<div class="search_result_new"></div>
<?php endif;  if (count((array)$this->_aVars['aSearchResults'])):  foreach ((array) $this->_aVars['aSearchResults'] as $this->_aVars['aSearchResult']): ?>
<div class="search_result">
	<div class="search_result_image">
<?php if (isset ( $this->_aVars['aSearchResult']['profile_image'] )): ?>
<?php echo Phpfox::getLib('phpfox.image.helper')->display(array('user' => $this->_aVars['aSearchResult']['profile_image'],'suffix' => '_50_square','max_width' => 50,'max_height' => 50)); ?>
<?php else: ?>
<?php echo Phpfox::getLib('phpfox.image.helper')->display(array('user' => $this->_aVars['aSearchResult'],'suffix' => '_50_square','max_width' => 50,'max_height' => 50)); ?>
<?php endif; ?>
	</div>
	<div class="search_result_info">
		<div class="search_result_title">
			<a href="<?php echo $this->_aVars['aSearchResult']['item_link']; ?>" title="<?php echo Phpfox::getLib('phpfox.parse.output')->clean($this->_aVars['aSearchResult']['item_title']); ?>"><?php echo Phpfox::getLib('phpfox.parse.output')->shorten(Phpfox::getLib('phpfox.parse.output')->clean($this->_aVars['aSearchResult']['item_title']), '60', '...'); ?></a>
		</div>
		<div class="extra_info">
			<ul class="extra_info_middot"><li><?php echo $this->_aVars['aSearchResult']['item_name']; ?></li><li>&middot;</li><li><?php echo Phpfox::getLib('date')->convertTime($this->_aVars['aSearchResult']['item_time_stamp']); ?></li></ul>
		</div>
<?php if (isset ( $this->_aVars['aSearchResult']['item_display_photo'] )): ?>
		<div class="search_result_photo">
			<a href="<?php echo $this->_aVars['aSearchResult']['item_link']; ?>"><?php echo $this->_aVars['aSearchResult']['item_display_photo']; ?></a>
		</div>	
<?php endif; ?>
	</div>
</div>
<?php endforeach; endif; ?>
<div id="feed_view_more">
		<a href="#" onclick="$(this).html($.ajaxProcess('<?php echo Phpfox::getPhrase('feed.loading'); ?>')); $.ajaxCall('search.viewMore', '<?php echo $this->_aVars['sNextPage']; ?>', 'GET'); return false;" class="global_view_more no_ajax_link"><?php echo Phpfox::getPhrase('search.view_more'); ?></a>
</div>
<?php else:  if (PHPFOX_IS_AJAX):  echo Phpfox::getPhrase('search.no_more_search_results_to_show');  else:  echo Phpfox::getPhrase('search.no_search_results_found');  endif;  endif;  if (! PHPFOX_IS_AJAX): ?>
	<div id="js_feed_content" class="js_feed_content"></div>
<?php endif; ?>
