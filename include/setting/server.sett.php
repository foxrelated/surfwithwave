<?php
/**
 * [PHPFOX_HEADER]
 * 
 * @copyright		[PHPFOX_COPYRIGHT]
 * @author			natio
 * @package 		PhpFox
 * @version 		$Id: server.sett.php.new 6092 2013-06-20 13:24:17Z Raymond_Benc $
 */

defined('PHPFOX') or exit('NO DICE!');

/**
 * Database Driver
 * Support: mysql, mysqli, mssql, postgres or sqlite
 * 
 * @example mysql
 */
$_CONF['db']['driver'] = 'mysqli';
$_CONF['db']['host'] = 'localhost'; 
$_CONF['db']['user'] = 'surfgwto_wav';
$_CONF['db']['pass'] = 'wav@123@';
$_CONF['db']['name'] = 'surfgwto_fox';
$_CONF['db']['prefix'] = 'phpfox_';
$_CONF['db']['port'] = '';

/*
$_CONF['db']['driver'] = 'mysqli';
$_CONF['db']['host'] = 'localhost'; 
$_CONF['db']['user'] = 'wavetele_foxuser';
$_CONF['db']['pass'] = 'foxuser123';
$_CONF['db']['name'] = 'wavetele_fox';
$_CONF['db']['prefix'] = 'phpfox_';
$_CONF['db']['port'] = '';*/

$_CONF['db']['slave'] = false;
$_CONF['db']['slave_servers'] = array();

$_CONF['balancer']['enabled'] = false;
$_CONF['balancer']['servers'] = array();

#$_CONF['core.host'] = 'www.wavetele.info';
$_CONF['core.host'] = 'www.surfwithwave.com';

$_CONF['core.folder'] = '/';

$_CONF['core.url_rewrite'] = '2';

$_CONF['core.salt'] = '4400a5688c6e3f08315d1c50becd153b';

// Storage Engine (file, memcache)
$_CONF['core.cache_storage'] = 'file';

// Add salt
$_CONF['core.cache_add_salt'] = false;

// Cache suffix (file only)
$_CONF['core.cache_suffix'] = '.php';

// Memcache Hosts
$_CONF['core.memcache_hosts'] = array();

// Memcahe persistent
$_CONF['core.memcache_persistent'] = false;

// Should we skip the cache check and display live content
$_CONF['core.cache_skip'] = false;

// Check we run to find out if the script has been installed
$_CONF['core.is_installed'] = true;

// Check we run when the database tables have been installed
$_CONF['core.db_table_installed'] = false;

// AdminCP time out in minutes
$_CONF['core.admincp_timeout'] = '60';

// Define if AdminCP should have a time out
$_CONF['core.admincp_do_timeout'] = true;

$_CONF['core.is_auto_hosted'] = false;

?>