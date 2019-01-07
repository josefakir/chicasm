# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: localhost (MySQL 5.7.19)
# Database: chicasm
# Generation Time: 2018-11-12 15:02:59 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table pastillas
# ------------------------------------------------------------

DROP TABLE IF EXISTS `pastillas`;

CREATE TABLE `pastillas` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `id_registro` int(11) DEFAULT NULL,
  `pastilla` varchar(20) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table registros
# ------------------------------------------------------------

DROP TABLE IF EXISTS `registros`;

CREATE TABLE `registros` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `comienzo_periodo` tinyint(4) DEFAULT NULL,
  `fin_periodo` tinyint(4) DEFAULT NULL,
  `temperatura` varchar(5) DEFAULT NULL,
  `flujo_menstrual` varchar(10) DEFAULT NULL,
  `flujo_cervical` varchar(20) DEFAULT NULL,
  `peso` varchar(10) DEFAULT NULL,
  `sintoma` varchar(20) DEFAULT NULL,
  `pms` tinyint(4) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fecha_usuario` (`id_usuario`,`fecha`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table relaciones
# ------------------------------------------------------------

DROP TABLE IF EXISTS `relaciones`;

CREATE TABLE `relaciones` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `id_registro` int(11) DEFAULT NULL,
  `hora` varchar(10) DEFAULT NULL,
  `condon` tinyint(4) DEFAULT NULL,
  `orgasmo` tinyint(4) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table sintomas
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sintomas`;

CREATE TABLE `sintomas` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `id_registro` int(11) DEFAULT NULL,
  `sintoma` varchar(20) DEFAULT NULL,
  `intensidad` varchar(20) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table usuarios
# ------------------------------------------------------------

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL DEFAULT '',
  `paterno` varchar(255) NOT NULL DEFAULT '',
  `materno` varchar(255) NOT NULL DEFAULT '',
  `correo` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `activo` tinyint(1) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `apikey` varchar(255) NOT NULL DEFAULT '',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `correo` (`correo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;

INSERT INTO `usuarios` (`id`, `nombre`, `paterno`, `materno`, `correo`, `password`, `activo`, `avatar`, `apikey`, `created_at`, `updated_at`)
VALUES
	(27,'José Antonio','Becerra','Romero','jbecerraromero@gmail.com','5140106451340684a8beddcfae8ccb37',1,NULL,'dec2c79d8b488dce2b55fef2d0f94a68','2018-10-22 16:03:03','2018-10-22 16:03:03');

/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
