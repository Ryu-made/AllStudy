-- --------------------------------------------------------
-- 호스트:                          175.126.37.21
-- 서버 버전:                        10.8.2-MariaDB-1:10.8.2+maria~focal - mariadb.org binary distribution
-- 서버 OS:                        debian-linux-gnu
-- HeidiSQL 버전:                  12.9.0.6999
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb3 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- 테이블 db231.particip_rate_csv 구조 내보내기
CREATE TABLE IF NOT EXISTS `particip_rate_csv` (
  `index` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type1` varchar(3) COLLATE utf8mb4_unicode_ci DEFAULT '연령별',
  `type2` varchar(7) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `2003` decimal(4,1) unsigned DEFAULT NULL,
  `2006` decimal(4,1) unsigned DEFAULT NULL,
  `2008` decimal(4,1) unsigned DEFAULT NULL,
  `2009` decimal(4,1) unsigned DEFAULT NULL,
  `2012` decimal(4,1) unsigned DEFAULT NULL,
  `2014` decimal(4,1) unsigned DEFAULT NULL,
  `2015` decimal(4,1) unsigned DEFAULT NULL,
  `2016` decimal(4,1) unsigned DEFAULT NULL,
  `2017` decimal(4,1) unsigned DEFAULT NULL,
  `2018` decimal(4,1) unsigned DEFAULT NULL,
  `2019` decimal(4,1) unsigned DEFAULT NULL,
  `2020` decimal(4,1) unsigned DEFAULT NULL,
  `2021` decimal(4,1) unsigned DEFAULT NULL,
  `2022` decimal(4,1) unsigned DEFAULT NULL,
  `2023` decimal(4,1) unsigned DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='규칙적_체육활동_참여율_주_1회_이상__연도별_비교_20250114092534.csv';

-- 테이블 데이터 db231.particip_rate_csv:~9 rows (대략적) 내보내기
DELETE FROM `particip_rate_csv`;
INSERT INTO `particip_rate_csv` (`index`, `type1`, `type2`, `2003`, `2006`, `2008`, `2009`, `2012`, `2014`, `2015`, `2016`, `2017`, `2018`, `2019`, `2020`, `2021`, `2022`, `2023`) VALUES
	(1, '성별', '남자', 63.6, 64.2, 46.4, 55.2, 46.6, 57.5, 58.2, 62.3, 60.1, 61.6, 68.1, 59.9, 60.1, 60.4, 62.8),
	(2, '성별', '여자', 55.1, 52.0, 38.3, 45.3, 40.0, 52.0, 53.8, 56.7, 58.4, 62.8, 65.1, 60.3, 61.4, 62.0, 61.9),
	(3, '연령별', '10대', 57.8, 52.1, 38.8, 44.7, 36.6, 54.7, 49.0, 63.1, 60.4, 57.2, 50.1, 52.0, 55.0, 52.6, 47.9),
	(4, '연령별', '20대', 49.5, 61.7, 38.0, 44.3, 35.9, 56.0, 54.9, 57.3, 55.2, 59.3, 69.2, 60.9, 63.6, 62.1, 57.6),
	(5, '연령별', '30대', 56.2, 56.1, 40.9, 46.5, 39.6, 53.1, 53.2, 56.8, 60.7, 61.9, 70.3, 58.6, 57.5, 65.3, 64.7),
	(6, '연령별', '40대', 71.2, 66.0, 47.4, 55.7, 50.0, 56.1, 61.2, 61.1, 60.4, 65.7, 70.3, 61.3, 63.7, 65.1, 64.1),
	(7, '연령별', '50대', 65.7, 68.0, 48.6, 58.1, 50.8, 57.4, 60.0, 60.8, 60.4, 64.5, 70.8, 64.4, 61.0, 63.9, 66.5),
	(8, '연령별', '60대', 58.7, 46.5, 46.1, 57.5, 47.3, 58.0, 59.6, 61.4, 61.7, 63.6, 69.0, 62.1, 63.2, 59.6, 68.0),
	(9, '연령별', '70세이상', 0.0, 30.3, 32.8, 46.0, 41.4, 45.0, 49.7, 55.3, 54.6, 59.8, 57.8, 57.0, 58.3, 54.3, 60.6);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
