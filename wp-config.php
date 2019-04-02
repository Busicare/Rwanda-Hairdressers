<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'rwandahair');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '_gx.mVt~o<Se{{$lQ aydJOYbf~QXXy=#`s?C6kmRY9YU|l#Gt9z^{o90Om5jv%(');
define('SECURE_AUTH_KEY',  'l=x7f^aephyWm]$RLG|&x/Y{)I>1C}%.=lrCKU|^6UjM05^~jo61OxQ+3[g45^P?');
define('LOGGED_IN_KEY',    '_oW(fQp{1B:O#D+a1x9+pMH@sqXNhi+4VF?{y/CcQs_]0Qev%U&.t`C>MMN1EvCC');
define('NONCE_KEY',        '@x?7|p0CjiU[Gwl#~!lka[ietD4JUWRStL/z,fZTRzj#;W-/n&nI4e9;f Y;k(&?');
define('AUTH_SALT',        '<bN.>}v(i57Pd#h+=-3hkU ngMDxRv~VtX5q9<#x-t4Mn/ +^seg`myfljaVJJ4/');
define('SECURE_AUTH_SALT', '7fmui$|`|7dPG}AX3oJL32 Z.D$cU>~i,3?z/-BV(!<yG3TT>b&ds#n/V]L>B+wO');
define('LOGGED_IN_SALT',   'q.,6)^kFZ,v/ErF61nT|]i)oJ6]4qw<o0<z4#G_z,QI}-YAu`*E(Pj2;,.6%VpLB');
define('NONCE_SALT',       '$2R.,&MUTMRZLXTP]7 }+M.7Db:+Al-g_%0Qhv9H0&UmNF`3drN(1 YYzX|i+n.4');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
