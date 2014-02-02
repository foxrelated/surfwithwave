<?php defined('PHPFOX') or exit('NO DICE!'); ?>
<?php /* Cached: January 27, 2014, 11:35 am */ ?>
<?php 
/**
 * [PHPFOX_HEADER]
 * 
 * @copyright		[PHPFOX_COPYRIGHT]
 * @author			Raymond Benc
 * @package 		Phpfox
 * @version 		$Id: template.html.php 1458 2010-01-29 19:28:49Z Raymond_Benc $
 */
 
 

 if (! PHPFOX_IS_AJAX_PAGE): ?>
<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN"
"http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="<?php echo $this->_aVars['sLocaleDirection']; ?>" lang="<?php echo $this->_aVars['sLocaleCode']; ?>">
	<head>
		<title><?php echo $this->getTitle(); ?></title>	
<?php echo $this->getHeader(); ?>
                <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
                <link rel="stylesheet" type="text/css" href="http://www.wavetele.info/css/font-awesome.css">
                <link rel="stylesheet" type="text/css" href="http://www.wavetele.info/css/custom-wave.css">
				<link rel="stylesheet" type="text/css" href="http://www.surfwithwave.com/css/test.css">
				
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1/css/font-awesome.min.css" media="all" rel="stylesheet" type="text/css">
                <style>
                    body 				</style>
	</head>
	<body style="background:#49c8f5;overflow-x: hidden;">
            
<?php (($sPlugin = Phpfox_Plugin::get('theme_template_body__start')) ? eval($sPlugin) : false); ?>
<?php if (Phpfox ::getParam('core.site_is_offline') && Phpfox ::getUserParam('core.can_view_site_offline')): ?>
			<div id="site_offline">
<?php echo Phpfox::getPhrase('core.the_site_is_currently_in_offline_mode'); ?>
			</div>
<?php endif; ?>
                <div id="custom-mobile-header" <?php if (! Phpfox ::isUser()): ?>style="background: white;"<?php endif; ?>>
<?php if (Phpfox ::isUser()): ?>
                    <p id="mobile-menu-left-toggle"  onclick="$('#mobile_holder').removeClass('mobile-right-menu-active').toggleClass('mobile-left-menu-active');">&#xf0c9;</p>
                    <a href="/index.php?do=/mobile/feed/">
					<img id="wave_logo_1" class="tops" src="/demo/waves.svg" />
					<!--<img src="https://dl.dropboxusercontent.com/u/47807983/wavetele.com/images/waves.svg" height="100%" alt="nm" class="top" style="margin-top:-10px;">-->
					</a>     
                    
                    <p id="mobile-menu-right-toggle" onclick="$('#mobile_holder').removeClass('mobile-left-menu-active').toggleClass('mobile-right-menu-active');">&#xf075;</p>
<?php endif; ?>
                </div>
                
                <script>
                    $x = $(window).height();
                    $("#wave-menu").css("max-height", "10px");
                    console.log($x);
                </script>
                
                <div id="mobile-menu-left">
                    
                    <div id="header_sub_menu_search">
                            <form method="post" id='header_search_form' action="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('search'); ?>">
<?php echo '<div><input type="hidden" name="' . Phpfox::getTokenName() . '[security_token]" value="' . Phpfox::getService('log.session')->getToken() . '" /></div>'; ?>
                                    <input type="text" name="q" value="<?php echo Phpfox::getPhrase('core.mobile_search'); ?>" id="header_sub_menu_search_input" autocomplete="off" class="js_temp_friend_search_input" />											
                                    <div id="div_header_sub_menu_search_input"></div>
                                    <a href="#" onclick='$("#header_search_form").submit(); return false;' id="header_search_button"><?php echo Phpfox::getPhrase('core.search'); ?></a>
                            
</form>

                    </div>
                    <nav id="wave-menu">
                        <div id="logged-in-menu" onload="$(this).load('/index.php?do=/mobile/ #mobile_main_menu');"></div>
                        <ul>
                            <li><a href="/index.php?do=/mobile/feed/"><span class="font_icon">&#xf09e;</span>Activity Feed</a></li>
                            <li><a href="/phone.html" target="frame2"  onclick="$('iframe').css('display','block');$('#holder').css('display','none');$('window').scrollTop('0px','0px');$('#mobile_holder').removeClass('mobile-left-menu-active');$('#mobile_holder').css('position','fixed');"><span class="font_icon">&#xf095;</span>Phone</a></li>   
                            <li><a href="/svg_house.svg" target="frame2" onclick="$('iframe').css('display','block');$('#holder').css('display','none');$('window').scrollTop('0px','0px');$('#mobile_holder').removeClass('mobile-left-menu-active');$('#mobile_holder').css('position','fixed');"><span class="font_icon">&#xf015;</span>SVG House</a></li>                         
                            <li><a style="text-indent: 28px;overflow: hidden;" href="http://pbskids.org/" target="frame2" onclick="$('iframe').css('display','block');$('#holder').css('display','none');$('window').scrollTop('0px','0px');$('#mobile_holder').removeClass('mobile-left-menu-active');$('#mobile_holder').css('position','fixed');"><span class="font_icon"><img src="http://pbskids.org/shell/images/content/pbs-kids-logo.svg"/></span>PBS Kids</a></li>
                            <li><a href="https://developer.cdn.mozilla.net/media/uploads/demos/s/p/spite/35a3de017b01ae2e91d928a979a8703f/cross-hatching-glsl-_1372642697_demo_package/index.html" target="frame2" onclick="$('iframe').css('display','block');$('#holder').css('display','none');$('#mobile_holder').removeClass('mobile-left-menu-active');$('#mobile_holder').css('position','fixed');"><span class="font_icon">&#xf140;</span>Interactive Art</a></li>
                            <li><a href="http://blackicemedia.com/presentations/2013-02-hires/img/awesome_tiger.svg" target="frame2" onclick="$('iframe').css('display','block');$('#mobile_holder').removeClass('mobile-left-menu-active');$('#mobile_holder').css('position','fixed');"><span class="font_icon">&#xf03e;</span>Static Art</a></li>
                        </ul>
                    </nav>
                </div>
		<div id="mobile_holder" onclick="$('#mobile_holder').removeClass('mobile-left-menu-active');$('#mobile_holder').removeClass('mobile-right-menu-active');">
                    <div style="background: white;background: white;position: absolute;top: -1px;bottom: 0px;left: 0px;right: 0px;">
                        <iframe style="display: none;" src="https://duckduckgo.com/" width="100%" height="100%" name="frame2" scrolling="yes" id="frame" wmode="transparent" overflow="no" onclick="$('#mobile_holder').removeClass('mobile-left-menu-active');$('#mobile_holder').removeClass('mobile-right-menu-active');"></iframe>
                    </div>
                        <div id="mobile_header">	
<?php if (Phpfox ::getParam('core.site_is_offline') && ! Phpfox ::getUserParam('core.can_view_site_offline')): ?>
<?php else: ?>
				<a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl(''); ?>" id="mobile_header_home">Home</a>
<?php if (Phpfox ::isUser()): ?>
				<a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('notification'); ?>" id="mobile_header_notification" onclick="$('#js_total_new_notifications').html('0').hide();"><div class="holder"><div id="js_total_new_notifications">0</div><div class="inner"><?php echo Phpfox::getPhrase('mobile.notifications'); ?></div></div></a>
<?php endif; ?>
<?php endif; ?>
<?php echo Phpfox::getParam('core.site_title'); ?>
			</div>
<?php if (Phpfox ::getParam('core.site_is_offline') && ! Phpfox ::getUserParam('core.can_view_site_offline')): ?>
<?php else: ?>
<?php if (Phpfox ::isUser()): ?>
			<div id="mobile_search"<?php if (isset ( $this->_aVars['bIsMobileIndex'] )): ?> style="display:block;"<?php endif; ?>>
				<div id="header_search">	
					<div id="header_menu_space">
						<div id="header_sub_menu_search">
							<form method="post" id='header_search_form' action="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('search'); ?>">
<?php echo '<div><input type="hidden" name="' . Phpfox::getTokenName() . '[security_token]" value="' . Phpfox::getService('log.session')->getToken() . '" /></div>'; ?>
								<input type="text" name="q" value="<?php echo Phpfox::getPhrase('core.mobile_search'); ?>" id="header_sub_menu_search_input" autocomplete="off" class="js_temp_friend_search_input" />											
								<div id="div_header_sub_menu_search_input"></div>
								<a href="#" onclick='$("#header_search_form").submit(); return false;' id="header_search_button"><?php echo Phpfox::getPhrase('core.search'); ?></a>
							
</form>

						</div>
					</div><!-- // header_menu_space -->
				</div>	
			</div>			
<?php endif; ?>
<?php endif; ?>
			<div id="holder">
				<div id="main_content_holder">				
<?php endif; ?>
<?php if (isset ( $this->_aVars['aFilterMenus'] ) && is_array ( $this->_aVars['aFilterMenus'] ) && count ( $this->_aVars['aFilterMenus'] )): ?>
						<a href="" class="mobile_main_sub_menu" onclick="$('.sub_section_menu').toggle(); return false;"><span class="font_icon">&#xf078;</span></a>
						<div class="sub_section_menu">
							<ul>
<?php if (count((array)$this->_aVars['aFilterMenus'])):  $this->_aPhpfoxVars['iteration']['filtermenu'] = 0;  foreach ((array) $this->_aVars['aFilterMenus'] as $this->_aVars['aFilterMenu']):  $this->_aPhpfoxVars['iteration']['filtermenu']++; ?>

<?php if (! isset ( $this->_aVars['aFilterMenu']['name'] )): ?>
								<li class="menu_line">&nbsp;</li>
<?php else: ?>
								<li class="<?php if ($this->_aVars['aFilterMenu']['active']): ?>active<?php endif; ?>"><a href="<?php echo $this->_aVars['aFilterMenu']['link']; ?>"><?php echo $this->_aVars['aFilterMenu']['name']; ?></a></li>
<?php endif; ?>
<?php endforeach; endif; ?>
							</ul>
						</div>
<?php endif; ?>
				
<?php if (!$this->bIsSample):  $this->getLayout('breadcrumb');  endif; ?>
<?php if (isset ( $this->_aVars['aBreadCrumbTitle'] ) && count ( $this->_aVars['aBreadCrumbTitle'] )): ?>
					<div id="mobile_h1_main">
						<h1><a href="<?php echo $this->_aVars['aBreadCrumbTitle'][1]; ?>"><?php echo Phpfox::getLib('phpfox.parse.output')->clean($this->_aVars['aBreadCrumbTitle'][0]); ?></a></h1>
					</div>
<?php endif; ?>
					<div id="content">
<?php if (!$this->bIsSample):  $this->getLayout('search');  endif; ?>
						<div id="mobile_content">
<?php if (!$this->bIsSample):  $this->getLayout('error');  endif; ?>
<?php if (Phpfox ::isUser() || ( ! Phpfox ::isUser() && Phpfox ::getLib('module')->getFullControllerName() == 'user.register' ) || ( ! Phpfox ::isUser() && Phpfox ::getLib('module')->getFullControllerName() == 'user.login' ) || ( ! Phpfox ::isUser() && Phpfox ::getLib('module')->getFullControllerName() == 'user.password/request' ) || ( ! Phpfox ::isUser() && Phpfox ::getLib('module')->getFullControllerName() == 'janrain.login' )): ?>
<?php if (defined ( 'PHPFOX_IS_USER_PROFILE' )): ?>
<?php Phpfox::getBlock('profile.mobile', array()); ?>
<?php endif; ?>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 2)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('2'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 2<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("2"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 2)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('2');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('2', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_2"> <div class="block js_sortable dnd_block_info">Position '2'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('2', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_2">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('2', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '2'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('2', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 2));  endif;  endif; ?>
<?php if (!$this->bIsSample): ?><div id="site_content"><?php if (isset($this->_aVars['bSearchFailed'])): ?><div class="message">Unable to find anything with your search criteria.</div><?php else:  $sController = "feed.index";  if ( Phpfox::getLib("template")->shouldLoadDelayed("feed.index") == true ): ?>
<div id="delayed_block_image" style="text-align:center; padding-top:20px;"><img src="http://www.surfwithwave.com/theme/frontend/default/style/default/image/ajax/add.gif" alt="" /></div>
<div id="delayed_block" style="display:none;"><?php echo Phpfox::getLib('phpfox.module')->getFullControllerName(); ?></div>
<?php else:  Phpfox::getLib('phpfox.module')->getControllerTemplate();  endif;  endif; ?></div><?php endif; ?>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 4)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('4'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 4<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("4"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 4)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('4');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('4', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_4"> <div class="block js_sortable dnd_block_info">Position '4'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('4', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_4">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('4', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '4'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('4', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 4));  endif;  endif; ?>
<?php else: ?>
<?php Phpfox::getBlock('user.login-block', array()); ?>
<?php endif; ?>
						</div>
					</div>
<?php if (! PHPFOX_IS_AJAX_PAGE): ?>
				</div>
			</div>					
			<div id="mobile_footer">
				<ul>
					<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('go-to-full-site'); ?>" class="first"><?php echo Phpfox::getPhrase('mobile.full_site'); ?></a></li>					
					<li>&middot;</li>			
					<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('user.setting'); ?>"><?php echo $this->_aVars['sLocaleName']; ?></a></li>					
<?php if (Phpfox ::isUser()): ?>
						<li>&middot;</li>			
						<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('logout'); ?>"><?php echo Phpfox::getPhrase('mobile.logout'); ?></a></li>
<?php endif; ?>
				</ul>
			</div>		
		</div>
<?php Phpfox::getBlock('core.template-footer'); ?>
	</body>
</html>
<?php endif; ?>
