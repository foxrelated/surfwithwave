<?php defined('PHPFOX') or exit('NO DICE!'); ?>
<?php /* Cached: January 21, 2014, 7:11 pm */ ?>
<?php 
/**
 * [PHPFOX_HEADER]
 * 
 * @copyright		[PHPFOX_COPYRIGHT]
 * @author			Raymond Benc
 * @package 		Phpfox
 * @version 		$Id: pager.html.php 1195 2009-10-19 10:35:24Z Raymond_Benc $
 */
 
 

 if (isset ( $this->_aVars['aPager'] ) && $this->_aVars['aPager']['totalPages'] > 1):  if (isset ( $this->_aVars['aPager']['nextUrl'] )): ?><a href="<?php echo $this->_aVars['aPager']['nextUrl']; ?>" class="view_more"><?php echo Phpfox::getPhrase('core.view_more'); ?></a><?php endif; ?>
<div>
<?php echo Phpfox::getPhrase('core.page_x_of_x', array('current' => $this->_aVars['aPager']['current'],'total' => $this->_aVars['aPager']['totalPages'])); ?>
</div>
<?php endif; ?>
