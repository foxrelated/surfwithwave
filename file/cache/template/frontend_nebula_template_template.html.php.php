<?php defined('PHPFOX') or exit('NO DICE!'); ?>
<?php /* Cached: January 27, 2014, 8:38 am */ ?>
<?php
/**
 * [PHPFOX_HEADER]
 * 
 * @copyright		[PHPFOX_COPYRIGHT]
 * @author			Raymond Benc
 * @package 		Phpfox
 * @version 		$Id: template.html.php 6620 2013-09-11 12:10:20Z Miguel_Espinoza $
 */
 
 

 if (Phpfox ::getLib('module')->getFullControllerName()=="page.view" && ( $this->_aVars['aPage']['title'] == 'moreinfo' )):  if ($this->_aVars['aPage']['title'] == 'moreinfo'): ?>
<!DOCTYPE html>
<html>

<!-- Mirrored from wavetele.com/bottom.htm by HTTrack Website Copier/3.x [XR&CO'2013], Wed, 18 Dec 2013 04:21:16 GMT -->
<meta http-equiv="content-type" content="text/html;charset=UTF-8">
<link href="http://www.surfwithwave.com/newpage/css/colors2.css" rel="stylesheet" type="text/css" media="print">

<head>
<title>Free Internet</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta content="#161616" name="msapplication-TileColor">
<meta content="https://dl.dropboxusercontent.com/u/47807983/wavetele.com/images/glass_favicon.png" name="msapplication-TileImage">
<meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" name="viewport">
<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
<meta name="title" content="" />
<meta name="description" content="" />
<meta name="keywords" content="" />
<?php echo '<link rel="image_src" href="https://dl.dropboxusercontent.com/u/47807983/wavetele.com/images/nbw_facebook.jpg" />
<!--[if lt IE 9]>
      <script src="http://www.surfwithwave.com/newpage/js/html5.js"></script>
      <script src="http://www.surfwithwave.com/newpage/js/innershiv.min.js"></script>
      <script src="http://www.surfwithwave.com/newpage/js/excanvas.js"></script>
    <![endif]-->

<link rel="stylesheet" media="all" href="http://www.surfwithwave.com/newpage/css/base779c779c.css?0.0.6.0" />
<link rel="stylesheet" media="all" href="http://www.surfwithwave.com/newpage/css/basea7e0a7e0.css?0.0.5.0" />
<link rel="stylesheet" media="all" href="http://www.surfwithwave.com/newpage/css/stories4b1b4b1b.css?0.0.4.0" />
<link rel="stylesheet" media="all" href="http://www.surfwithwave.com/newpage/css/stories4b1a4b1b.css?0.0.4.0" />
<!--[if IE 7]>
      <link rel="stylesheet" media="all" href="lib/http://www.surfwithwave.com/newpage/css/ie7.css?0.0.3.0" />
    <![endif]-->
<script src="http://www.surfwithwave.com/newpage/js/jquery-1.4.1.min.js"></script>
<script src="http://www.surfwithwave.com/newpage/js/jquery-plugins35723572.js?0.0.0.1"></script>
<script src="http://www.surfwithwave.com/newpage/js/htmlcanvas37d737d7.js?0.0.0.8"></script>
<script type="text/javascript">
      var com_nbw_lang = \'en-us\';
    </script>
<script type="text/javascript">
     var com_nbw_lang = \'en-us\';
    </script>
<script src="http://www.surfwithwave.com/newpage/js/com.nikebetterworlda5baa5ba.js?0.1.0.0"></script>
<script type="javascript:void(0)"
onclick="window.open(\'erms40x/404.php\',\'welcome\',
\'width=100,height=200,menubar=yes,status=yes,location=yes,toolbar=yes,scrollbars=no)"></script>
<!-- Start VideoLightBox.com HEAD section -->
<link rel="stylesheet" href="http://www.surfwithwave.com/newpage/css/videolightbox.css" type="text/css" />
<style type="text/css">
<link rel="shortcut icon" href="https://dl.dropboxusercontent.com/u/47807983/wavetele.com/images/favicon_128.png" type="image/x-icon">
#videogallery a#videolb {
	display:none
}
.style1 {
	color: #FFFFFF
}
.style3 {
	font-size: 18px
}
</style>
<link rel="stylesheet" type="text/css" href="http://www.surfwithwave.com/newpage/css/overlay-minimal.css"/>
<script src="http://www.surfwithwave.com/newpage/js/jquery.tools.min.js" type="text/javascript"></script>
<script src="http://www.surfwithwave.com/newpage/js/swfobject.js" type="text/javascript"></script>
<!-- make all links with the \'rel\' attribute open overlays -->
<script src="http://www.surfwithwave.com/newpage/js/videolightbox.js" type="text/javascript"></script>
<!-- End VideoLightBox.com HEAD section -->

<script src="http://www.surfwithwave.com/newpage/js/ga.js"></script>
<script>
if(Function(\'/*@cc_on return document.documentMode===10@*/\')()){document.documentElement.className+=\' ie10\';}
    </script>

	   <script type="text/javascript">
function onYouTubePlayerReady(playerId) { 
ytplayer = document.getElementById("video_overlay"); 
ytplayer.setVolume(100); 
} 
</script>
<script language="JavaScript" type="text/javascript" src="www.surfwithwave.com/newpage/js/s_code.js"></script> 
	'; ?>

	</head>
	<body data-controller="SiteScroll" class="what-it-does">
<?php if (Phpfox ::getUserParam('page.can_manage_custom_pages') && Phpfox ::getUserParam('admincp.has_admin_access')): ?>
<div class="p_4 t_right">
	<a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('admincp.page.add', array('id' => $this->_aVars['aPage']['page_id'])); ?>"><?php echo Phpfox::getPhrase('page.edit'); ?></a>	
	- <a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('admincp.page', array('delete' => $this->_aVars['aPage']['page_id'])); ?>" class="sJsConfirm"><?php echo Phpfox::getPhrase('page.delete'); ?></a>
</div>
<?php endif;  if (!$this->bIsSample): ?><div id="site_content"><?php if (isset($this->_aVars['bSearchFailed'])): ?><div class="message">Unable to find anything with your search criteria.</div><?php else:  $sController = "core.index-visitor";  if ( Phpfox::getLib("template")->shouldLoadDelayed("core.index-visitor") == true ): ?>
<div id="delayed_block_image" style="text-align:center; padding-top:20px;"><img src="http://www.surfwithwave.com/theme/frontend/default/style/default/image/ajax/add.gif" alt="" /></div>
<div id="delayed_block" style="display:none;"><?php echo Phpfox::getLib('phpfox.module')->getFullControllerName(); ?></div>
<?php else:  Phpfox::getLib('phpfox.module')->getControllerTemplate();  endif;  endif; ?></div><?php endif; ?>
</body>
</html>
<?php endif;  else: ?>

<?php if (! PHPFOX_IS_AJAX_PAGE): ?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" dir="<?php echo $this->_aVars['sLocaleDirection']; ?>" lang="<?php echo $this->_aVars['sLocaleCode']; ?>">
	<head>
		<title><?php echo $this->getTitle(); ?></title>	
<?php echo $this->getHeader(); ?>
		<link rel="shortcut icon" href="https://dl.dropboxusercontent.com/u/47807983/wavetele.com/images/favicon_128.png" type="image/x-icon">
	</head>
	<body>
		<div<?php if (! Phpfox ::isUser()): ?> id="nb_body_holder_guest"<?php elseif (defined ( 'PHPFOX_IN_DESIGN_MODE' )): ?> id="nb_in_design"<?php endif; ?>>
<?php Phpfox::getBlock('core.template-body'); ?>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 9)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('9'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 9<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("9"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 9)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('9');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('9', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_9"> <div class="block js_sortable dnd_block_info">Position '9'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('9', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_9">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('9', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '9'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('9', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 9));  endif;  endif; ?>
		
			<div id="header">
			
<?php if (! Phpfox ::isUser()): ?>
<?php if (Phpfox ::getParam('user.hide_main_menu')): ?>

<?php else: ?>
				<div id="nb_header_menu">
					<div class="holder">
<?php Phpfox::getBlock('core.template-menu'); ?>
						<div class="clear"></div>
					</div>
				</div>
<?php endif; ?>
<?php endif; ?>
			
				<div class="holder">
						
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 10)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('10'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 10<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("10"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 10)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('10');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('10', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_10"> <div class="block js_sortable dnd_block_info">Position '10'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('10', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_10">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('10', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '10'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('10', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 10));  endif;  endif; ?>
					<div id="header_holder" <?php if (! Phpfox ::isUser()): ?> class="header_logo"<?php endif; ?>>				
						<div id="header_left">
<?php Phpfox::getBlock('core.template-logo'); ?>
						</div>
						<div id="header_right">
							<div id="header_top">
<?php if (Phpfox ::isUser() && ! Phpfox ::getUserBy('profile_page_id')): ?>
								<div id="holder_notify">																	
<?php Phpfox::getBlock('core.template-notification'); ?>
									<div class="clear"></div>
								</div>
<?php endif; ?>
<?php if (Phpfox ::isUser() && ! Phpfox ::getUserBy('profile_page_id')): ?>
								<div id="nb_features">
									<a href="#" id="nb_features_link">Features</a>
									<div id="nb_features_holder">
<?php $this->assign('bNoAppsMenu', true); ?>
<?php Phpfox::getBlock('core.template-menu'); ?>
									</div>								
								</div>
<?php endif; ?>
								<div id="header_menu_holder">
<?php if (Phpfox ::isUser()): ?>
<?php Phpfox::getBlock('core.template-menuaccount'); ?>
									<div class="clear"></div>	
<?php else: ?>
<?php Phpfox::getBlock('user.login-header', array()); ?>
<?php endif; ?>
								</div>							
<?php if (Phpfox ::isUser() && ! Phpfox ::getUserBy('profile_page_id') && Phpfox ::isModule('search')): ?>
								<div id="header_search">	
									<div id="header_menu_space">
										<div id="header_sub_menu_search">
											<form method="post" id='header_search_form' action="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('search'); ?>">
<?php echo '<div><input type="hidden" name="' . Phpfox::getTokenName() . '[security_token]" value="' . Phpfox::getService('log.session')->getToken() . '" /></div>'; ?>
												<input type="text" name="q" value="<?php echo Phpfox::getPhrase('core.search_dot'); ?>" id="header_sub_menu_search_input" autocomplete="off" class="js_temp_friend_search_input" />											
												<div id="header_sub_menu_search_input"></div>
												<a href="#" onclick='$("#header_search_form").submit(); return false;' id="header_search_button"><?php echo Phpfox::getPhrase('core.search'); ?></a>											
											
</form>

										</div>
									</div>
								</div>	
<?php endif; ?>
							</div>					
						</div>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 6)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('6'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 6<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("6"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 6)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('6');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('6', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_6"> <div class="block js_sortable dnd_block_info">Position '6'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('6', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_6">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('6', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '6'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('6', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 6));  endif;  endif; ?>
					</div>
				</div>		
			</div>
			
			<div id="nb_body">		
				<div id="<?php if (Phpfox ::isUser()): ?>main_core_body_holder<?php else: ?>main_core_body_holder_guest<?php endif; ?>">		
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 11)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('11'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 11<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("11"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 11)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('11');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('11', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_11"> <div class="block js_sortable dnd_block_info">Position '11'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('11', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_11">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('11', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '11'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('11', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 11));  endif;  endif; ?>
					<div id="main_content_holder">	
<?php endif; ?>
						<div <?php Phpfox::getBlock('core.template-holdername'); ?>>		
							<div <?php echo (defined('PHPFOX_IS_PAGES_VIEW') ? 'id="js_is_page"' : ''); ?> class="holder<?php if (( defined ( 'PHPFOX_IS_USER_PROFILE_INDEX' ) || defined ( 'PHPFOX_IS_PAGES_IS_INDEX' ) ) && Phpfox ::getService('profile')->timeline()): ?> js_is_profile_timeline<?php endif; ?>">	
								
<?php Phpfox::getBlock('profile.logo', array()); ?>
								
								<div id="content_holder"<?php if (isset ( $this->_aVars['sMicroPropType'] )): ?> itemscope itemtype="http://schema.org/<?php echo $this->_aVars['sMicroPropType']; ?>"<?php endif; ?>>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 13)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('13'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 13<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("13"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 13)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('13');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('13', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_13"> <div class="block js_sortable dnd_block_info">Position '13'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('13', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_13">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('13', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '13'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('13', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 13));  endif;  endif; ?>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 7)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('7'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 7<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("7"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 7)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('7');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('7', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_7"> <div class="block js_sortable dnd_block_info">Position '7'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('7', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_7">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('7', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '7'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('7', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 7));  endif;  endif; ?>
<?php if (! defined ( 'PHPFOX_IS_USER_PROFILE' ) && ! defined ( 'PHPFOX_IS_PAGES_VIEW' )): ?>
									
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 12)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('12'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 12<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("12"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 12)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('12');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('12', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_12"> <div class="block js_sortable dnd_block_info">Position '12'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('12', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_12">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('12', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '12'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('12', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 12));  endif;  endif; ?>
<?php endif; ?>
		
<?php if (! $this->_aVars['bUseFullSite']): ?>
<?php if (defined ( 'PHPFOX_IN_DESIGN_MODE' ) && Phpfox ::getService('profile')->timeline()): ?>
									
<?php else: ?>
									<div id="left" class="content_column">
									
<?php if (defined ( 'PHPFOX_IS_USER_PROFILE' ) || defined ( 'PHPFOX_IS_PAGES_VIEW' ) || ! Phpfox ::isUser()): ?>
<?php Phpfox::getBlock('core.template-menusub'); ?>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 1)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('1'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 1<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("1"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 1)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('1');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('1', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_1"> <div class="block js_sortable dnd_block_info">Position '1'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('1', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_1">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('1', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '1'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('1', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 1));  endif;  endif; ?>
<?php else: ?>
										<div id="nb_name">
											<div class="nb_name_image">
<?php echo $this->_aVars['sUserProfileImage']; ?>
											</div>
											<div class="nb_name_info">
												<a href="<?php echo $this->_aVars['sUserProfileUrl']; ?>" class="nb_name_link"><?php echo $this->_aVars['sCurrentUserName']; ?></a>
												<div class="nb_name_edit">
													<a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('user.profile'); ?>"><?php echo Phpfox::getPhrase('theme.edit_profile'); ?></a>
												</div>
											</div>
										</div>
										
										<div id="nb_favorites" class="block">
											<div class="title">
												<a href="#" class="nb_edit_block_title"><?php echo Phpfox::getPhrase('theme.edit'); ?></a>
<?php echo Phpfox::getPhrase('theme.favorites'); ?>
											</div>
											<div id="nb_main_menu">
<?php $this->assign('iTotalHide', 8); ?>
<?php Phpfox::getBlock('core.template-menu'); ?>
											</div>		
										</div>
										
<?php if (Phpfox ::getLib('module')->getFullControllerName() == 'core.index-member'): ?>
<?php Phpfox::getBlock('core.template-menusub'); ?>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 1)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('1'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 1<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("1"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 1)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('1');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('1', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_1"> <div class="block js_sortable dnd_block_info">Position '1'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('1', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_1">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('1', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '1'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('1', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 1));  endif;  endif; ?>
										
										<a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('core.index-member.customize'); ?>" class="no_ajax_link nb_customize_dash"><?php echo Phpfox::getPhrase('core.customize_dashboard'); ?></a>
										
<?php endif; ?>
															
<?php endif; ?>
										
									</div>	
<?php endif; ?>
<?php endif; ?>
		
									<div id="main_content">
												
<?php if (! defined ( 'PHPFOX_IS_USER_PROFILE' ) && ! defined ( 'PHPFOX_IS_PAGES_VIEW' )): ?>
<?php if (!$this->bIsSample):  $this->getLayout('breadcrumb');  endif; ?>
<?php if (!$this->bIsSample):  $this->getLayout('search');  endif; ?>
<?php endif; ?>
										<div id="main_content_padding">
		
<?php if (defined ( 'PHPFOX_IS_USER_PROFILE' ) || defined ( 'PHPFOX_IS_PAGES_VIEW' ) || ( isset ( $this->_aVars['aPage'] ) && isset ( $this->_aVars['aPage']['use_timeline'] ) && $this->_aVars['aPage']['use_timeline'] )): ?>
<?php if ($this->_aVars['bLoadedProfileHeader'] = true):  endif; ?>
<?php Phpfox::getBlock('profile.header', array()); ?>
<?php endif; ?>
<?php if (defined ( 'PHPFOX_IS_PAGES_VIEW' ) && ! isset ( $this->_aVars['bLoadedProfileHeader'] )): ?>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 12)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('12'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 12<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("12"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 12)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('12');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('12', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_12"> <div class="block js_sortable dnd_block_info">Position '12'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('12', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_12">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('12', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '12'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('12', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 12));  endif;  endif; ?>
<?php Phpfox::getBlock('pages.header', array()); ?>
<?php endif; ?>
		
											<div id="content_load_data">
<?php if (isset ( $this->_aVars['bIsAjaxLoader'] ) || defined ( 'PHPFOX_IS_USER_PROFILE' ) || defined ( 'PHPFOX_IS_PAGES_VIEW' )): ?>
<?php if (!$this->bIsSample):  $this->getLayout('search');  endif; ?>
<?php endif; ?>
		
<?php if (isset ( $this->_aVars['aBreadCrumbTitle'] ) && count ( $this->_aVars['aBreadCrumbTitle'] )): ?>
												<h1><a href="<?php echo $this->_aVars['aBreadCrumbTitle'][1]; ?>"><?php echo Phpfox::getLib('phpfox.parse.output')->split(Phpfox::getLib('phpfox.parse.output')->clean($this->_aVars['aBreadCrumbTitle'][0]), 30); ?></a></h1>
<?php endif; ?>
		
												<div id="content" <?php Phpfox::getBlock('core.template-contentclass'); ?>>
													
<?php if (!$this->bIsSample):  $this->getLayout('error');  endif; ?>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 2)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('2'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 2<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("2"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 2)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('2');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('2', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_2"> <div class="block js_sortable dnd_block_info">Position '2'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('2', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_2">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('2', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '2'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('2', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 2));  endif;  endif; ?>
<?php if (!$this->bIsSample): ?><div id="site_content"><?php if (isset($this->_aVars['bSearchFailed'])): ?><div class="message">Unable to find anything with your search criteria.</div><?php else:  $sController = "core.index-visitor";  if ( Phpfox::getLib("template")->shouldLoadDelayed("core.index-visitor") == true ): ?>
<div id="delayed_block_image" style="text-align:center; padding-top:20px;"><img src="http://www.surfwithwave.com/theme/frontend/default/style/default/image/ajax/add.gif" alt="" /></div>
<div id="delayed_block" style="display:none;"><?php echo Phpfox::getLib('phpfox.module')->getFullControllerName(); ?></div>
<?php else:  Phpfox::getLib('phpfox.module')->getControllerTemplate();  endif;  endif; ?></div><?php endif; ?>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 4)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('4'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 4<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("4"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 4)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('4');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('4', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_4"> <div class="block js_sortable dnd_block_info">Position '4'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('4', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_4">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('4', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '4'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('4', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 4));  endif;  endif; ?>
															
												</div>
		
<?php if (! $this->_aVars['bUseFullSite']): ?>
												
												<div id="right" class="content_column">
<?php if (! Phpfox ::isUser() || Phpfox ::getLib('module')->getFullControllerName() == 'core.index-member' || defined ( 'PHPFOX_IS_USER_PROFILE' ) || defined ( 'PHPFOX_IS_PAGES_VIEW' )): ?>
													
<?php else: ?>
<?php Phpfox::getBlock('core.template-menusub'); ?>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 1)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('1'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 1<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("1"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 1)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('1');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('1', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_1"> <div class="block js_sortable dnd_block_info">Position '1'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('1', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_1">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('1', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '1'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('1', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 1));  endif;  endif; ?>
<?php endif; ?>
<?php unset($this->_aVars['aMenu']); ?>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 3)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('3'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 3<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("3"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 3)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('3');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('3', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_3"> <div class="block js_sortable dnd_block_info">Position '3'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('3', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_3">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('3', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '3'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('3', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 3));  endif;  endif; ?>
												</div>
												
<?php endif; ?>
		
												<div class="clear"></div>							
											</div>												
										</div>				
									</div>
									<div class="clear"></div>			
								</div>		
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 8)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('8'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 8<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("8"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 8)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('8');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('8', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_8"> <div class="block js_sortable dnd_block_info">Position '8'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('8', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_8">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('8', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '8'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('8', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 8));  endif;  endif; ?>
								
								<div class="holder<?php if ($this->_aVars['bUseFullSite']): ?> nb_footer_full<?php else:  if (defined ( 'PHPFOX_IS_USER_PROFILE_INDEX' ) && Phpfox ::getService('profile')->timeline()): ?> js_is_profile_timeline<?php endif;  endif; ?>">
									<div id="nb_footer">
<?php Phpfox::getBlock('core.template-menufooter'); ?>
									<div id="nb_copyright">
<?php Phpfox::getBlock('core.template-copyright'); ?>
									</div>				
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 5)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('5'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 5<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("5"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 5)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('5');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('5', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_5"> <div class="block js_sortable dnd_block_info">Position '5'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('5', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_5">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('5', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '5'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('5', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 5));  endif;  endif; ?>
									</div>				
								</div>
							</div>							
						</div>			
<?php if (! PHPFOX_IS_AJAX_PAGE): ?>
					</div>				
                                        
<?php Phpfox::getBlock('core.template-footer'); ?>
				</div>		
			</div>		
		</div>		
	</body>
</html>
<?php endif;  endif; ?>
