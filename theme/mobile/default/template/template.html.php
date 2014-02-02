<?php 
/**
 * [PHPFOX_HEADER]
 * 
 * @copyright		[PHPFOX_COPYRIGHT]
 * @author			Raymond Benc
 * @package 		Phpfox
 * @version 		$Id: template.html.php 1458 2010-01-29 19:28:49Z Raymond_Benc $
 */
 
defined('PHPFOX') or exit('NO DICE!'); 

?>
{if !PHPFOX_IS_AJAX_PAGE}
<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN"
"http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="{$sLocaleDirection}" lang="{$sLocaleCode}">
	<head>
		<title>{title}</title>	
		{header}
                <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
                <link rel="stylesheet" type="text/css" href="http://www.wavetele.info/css/font-awesome.css">
                <link rel="stylesheet" type="text/css" href="http://www.wavetele.info/css/custom-wave.css">
				<link rel="stylesheet" type="text/css" href="http://www.surfwithwave.com/css/test.css">
				
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1/css/font-awesome.min.css" media="all" rel="stylesheet" type="text/css">
                <style>
                    body {
                        background: #49c8f5;
                    }
				</style>
	</head>
	<body style="background:#49c8f5;overflow-x: hidden;">
         
		{plugin call='theme_template_body__start'}
		{if Phpfox::getParam('core.site_is_offline') && Phpfox::getUserParam('core.can_view_site_offline')}
			<div id="site_offline">
				{phrase var='core.the_site_is_currently_in_offline_mode'}
			</div>
		{/if}
                <div id="custom-mobile-header" {if !Phpfox::isUser()}style="background: white;"{/if}>
                    {if Phpfox::isUser()}
                    <p id="mobile-menu-left-toggle"  onclick="$('#mobile_holder').removeClass('mobile-right-menu-active').toggleClass('mobile-left-menu-active');">&#xf0c9;</p>
                    <a href="/index.php?do=/mobile/feed/">
					<img id="wave_logo_1" class="tops" src="/demo/waves.svg" />
					</a>     
                    
                    <p id="mobile-menu-right-toggle" onclick="$('#mobile_holder').removeClass('mobile-left-menu-active').toggleClass('mobile-right-menu-active');">&#xf075;</p>
                 {/if}
                </div>
                
                <script>
                    $x = $(window).height();
                    $("#wave-menu").css("max-height", "10px");
                    console.log($x);
                </script>
                
                <div id="mobile-menu-left">
                    
                    <div id="header_sub_menu_search">
                            <form method="post" id='header_search_form' action="{url link='search'}">																													
                                    <input type="text" name="q" value="{phrase var='core.mobile_search'}" id="header_sub_menu_search_input" autocomplete="off" class="js_temp_friend_search_input" />											
                                    <div id="div_header_sub_menu_search_input"></div>
                                    <a href="#" onclick='$("#header_search_form").submit(); return false;' id="header_search_button">{phrase var='core.search'}</a>
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
				{if Phpfox::getParam('core.site_is_offline') && !Phpfox::getUserParam('core.can_view_site_offline')}
				{else}
				<a href="{url link=''}" id="mobile_header_home">Home</a>
				{if Phpfox::isUser()}
				<a href="{url link='notification'}" id="mobile_header_notification" onclick="$('#js_total_new_notifications').html('0').hide();"><div class="holder"><div id="js_total_new_notifications">0</div><div class="inner">{phrase var='mobile.notifications'}</div></div></a>
				{/if}
				{/if}
				{param var='core.site_title'}
			</div>
			{if Phpfox::getParam('core.site_is_offline') && !Phpfox::getUserParam('core.can_view_site_offline')}
			{else}
			{if Phpfox::isUser()}
			<div id="mobile_search"{if isset($bIsMobileIndex)} style="display:block;"{/if}>
				<div id="header_search">	
					<div id="header_menu_space">
						<div id="header_sub_menu_search">
							<form method="post" id='header_search_form' action="{url link='search'}">																													
								<input type="text" name="q" value="{phrase var='core.mobile_search'}" id="header_sub_menu_search_input" autocomplete="off" class="js_temp_friend_search_input" />											
								<div id="div_header_sub_menu_search_input"></div>
								<a href="#" onclick='$("#header_search_form").submit(); return false;' id="header_search_button">{phrase var='core.search'}</a>
							</form>
						</div>
					</div><!-- // header_menu_space -->
				</div>	
			</div>			
			{/if}
			{/if}
			<div id="holder">
				<div id="main_content_holder">				
				{/if}			
						{if isset($aFilterMenus) && is_array($aFilterMenus) && count($aFilterMenus)}
						<a href="" class="mobile_main_sub_menu" onclick="$('.sub_section_menu').toggle(); return false;"><span class="font_icon">&#xf078;</span></a>
						<div class="sub_section_menu">
							<ul>
							{foreach from=$aFilterMenus name=filtermenu item=aFilterMenu}
								{if !isset($aFilterMenu.name)}
								<li class="menu_line">&nbsp;</li>
								{else}
								<li class="{if $aFilterMenu.active}active{/if}"><a href="{$aFilterMenu.link}">{$aFilterMenu.name}</a></li>
								{/if}
							{/foreach}
							</ul>
						</div>
						{/if}				
				
					{breadcrumb}
					{if isset($aBreadCrumbTitle) && count($aBreadCrumbTitle)}
					<div id="mobile_h1_main">
						<h1><a href="{$aBreadCrumbTitle[1]}">{$aBreadCrumbTitle[0]|clean}</a></h1>
					</div>
					{/if}				
					<div id="content">
						{search}
						<div id="mobile_content">
							{error}				
							{if Phpfox::isUser() 
							|| (!Phpfox::isUser() && Phpfox::getLib('module')->getFullControllerName() == 'user.register') 
							|| (!Phpfox::isUser() && Phpfox::getLib('module')->getFullControllerName() == 'user.login')
							|| (!Phpfox::isUser() && Phpfox::getLib('module')->getFullControllerName() == 'user.password/request')
							|| (!Phpfox::isUser() && Phpfox::getLib('module')->getFullControllerName() == 'janrain.login')
							}			
							{if defined('PHPFOX_IS_USER_PROFILE')}
							{module name='profile.mobile'}
							{/if}
							{block location='2'}
							{content}
							{block location='4'}				
							{else}
							{module name='user.login-block'}
							{/if}
						</div>
					</div>
				{if !PHPFOX_IS_AJAX_PAGE}
				</div>
			</div>					
			<div id="mobile_footer">
				<ul>
					<li><a href="{url link='go-to-full-site'}" class="first">{phrase var='mobile.full_site'}</a></li>					
					<li>&middot;</li>			
					<li><a href="{url link='user.setting'}">{$sLocaleName}</a></li>					
					{if Phpfox::isUser()}
						<li>&middot;</li>			
						<li><a href="{url link='logout'}">{phrase var='mobile.logout'}</a></li>
					{/if}
				</ul>
			</div>		
		</div>
		{footer}
	</body>
</html>
{/if}