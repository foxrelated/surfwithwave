<?php defined('PHPFOX') or exit('NO DICE!'); ?>
<?php /* Cached: January 21, 2014, 7:01 pm */ ?>
<?php 
/**
 * [PHPFOX_HEADER]
 * 
 * @copyright		[PHPFOX_COPYRIGHT]
 * @author  		Raymond Benc
 * @package  		Module_Rss
 * @version 		$Id: index.html.php 3411 2011-11-02 09:27:55Z Raymond_Benc $
 */
 
 

 if (is_array ( $this->_aVars['aGroupFeeds'] )):  if (count((array)$this->_aVars['aGroupFeeds'])):  $this->_aPhpfoxVars['iteration']['feeds'] = 0;  foreach ((array) $this->_aVars['aGroupFeeds'] as $this->_aVars['sGroup'] => $this->_aVars['aFeeds']):  $this->_aPhpfoxVars['iteration']['feeds']++; ?>

<div class="row3">
	<div class="row_title_group"><?php echo Phpfox::getPhrase($this->_aVars['sGroup']); ?></div>
	<ul class="action">
<?php if (count((array)$this->_aVars['aFeeds'])):  foreach ((array) $this->_aVars['aFeeds'] as $this->_aVars['aFeed']): ?>
<?php if (isset ( $this->_aVars['aFeed']['child'] )): ?>
		<li><div class="parent"><?php echo Phpfox::getPhrase($this->_aVars['aFeed']['title_var']); ?></div>
			<ul>
<?php if (count((array)$this->_aVars['aFeed']['child'])):  foreach ((array) $this->_aVars['aFeed']['child'] as $this->_aVars['sLink'] => $this->_aVars['sPhrase']): ?>
				<li><a href="<?php echo $this->_aVars['sLink']; ?>" class="no_ajax_link"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'rss/tiny.png','class' => 'v_middle')); ?> <?php echo Phpfox::getLib('locale')->convert($this->_aVars['sPhrase']); ?></a></li>	
<?php endforeach; endif; ?>
			</ul>
		</li>
<?php else: ?>
		<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('rss', array('id' => $this->_aVars['aFeed']['feed_id'])); ?>" class="no_ajax_link"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'rss/tiny.png','class' => 'v_middle')); ?> <?php echo Phpfox::getPhrase($this->_aVars['aFeed']['title_var']); ?></a></li>
<?php endif; ?>
<?php endforeach; endif; ?>
	</ul>
</div>
<?php endforeach; endif;  else: ?>
<div class="extra_info">
<?php echo Phpfox::getPhrase('rss.no_rss_feeds_are_available'); ?>
</div>
<?php endif; ?>
