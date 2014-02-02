<?php
// Make sure we are running PHP5.
if (version_compare(phpversion(), '5', '<') === true)
{
	exit('phpFox 2 or higher requires PHP 5 or newer.');
}

ob_start();

/**
 * Key to include phpFox
 *
 */
define('PHPFOX', true);

/**
 * Directory Seperator
 *
 */
define('PHPFOX_DS', DIRECTORY_SEPARATOR);

/**
 * phpFox Root Directory
 *
 */
define('PHPFOX_DIR', dirname(dirname(__FILE__)) . PHPFOX_DS."public_html". PHPFOX_DS);

define('PHPFOX_START_TIME', array_sum(explode(' ', microtime())));

// Require phpFox Init
require(PHPFOX_DIR . 'include' . PHPFOX_DS . 'init.inc.php');


function replacer(& $item, $key) {
    if ($item === null) {
        $item = '';
    }
}

	$aAds = Phpfox::getService('ad')->getForBlock(500, true);

	foreach ($aAds as $iKey => $aAd)
	{
		if (!is_array($aAd))
		{
			$aAds = array($aAds);
			break;
		}
	}
		
	$bBlockIdForAds = false;
	
	foreach ($aAds as $iKey => $aAd)
	{
		if (!empty($aAd['disallow_controller']))
		{
			$sControllerName = Phpfox::getLib('module')->getFullControllerName();
			$aParts = explode(',', $aAd['disallow_controller']);
			foreach ($aParts as $sPart)
			{
				$sPart = trim($sPart);
				// str_replace for marketplace.invoice/index
				// str_replace for music.browse/album 
				if ($sControllerName == $sPart || (str_replace('/index','', $sControllerName) == $sPart) || (str_replace('/','.', $sControllerName) == $sPart))
				{
					unset($aAds[$iKey]);
					//return false;
				}
			}
		}
		if (!empty($aAd[$iKey]['html_code']))
		{
			$aAds[$iKey]['html_code'] = str_replace('target="_blank"', 'target="_blank" class="no_ajax_link"', $aAd['html_code']);
		}
		if (PHPFOX_IS_AJAX && $this->getParam('block_id') == 'photo_theater'
			&& ($aGetRequest = $this->request()->get('core')) 
			&& isset($aGetRequest['call'])
			&& $aGetRequest['call'] == 'photo.view'
		)
		{
			$bBlockIdForAds = true;
		}
		
		if ($aAd['is_active'] != 1)
		{
			unset($aAds[$iKey]);
		}
	}
		
	//var_dump($aAds);
	foreach($aAds as $k=>$ad)
	{
	
		$sImagePath = Phpfox::getLib('image.helper')->display(array(
					'server_id' => $ad['server_id'],
					'path' => 'ad.url_image',
					'file' => $ad['image_path'],
					'suffix' => '',
					'max_width' => '120',
					'max_height' => '120',
					'return_url' => true
				)
		);
		$sLink = Phpfox::getLib('url')->makeUrl('ad', array('id' => $ad['ad_id']));
		if($ad['type_id'] == 1)
		{
			echo '<a href="'.$sLink.'" target="_blank" class="no_ajax_link">
				<img src="'.$sImagePath.'" alt="'. $ad['ad_id'].'"/>
			</a>';
			
		}
		elseif($ad['type_id'] == 2)
		{
			
			echo $ad["html_code"];
		}
	}		
?>

