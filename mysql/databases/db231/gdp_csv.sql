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

-- 테이블 db231.gdp_csv 구조 내보내기
CREATE TABLE IF NOT EXISTS `gdp_csv` (
  `year` year(4) NOT NULL COMMENT '"시점"',
  `korea` decimal(4,1) DEFAULT 0.0 COMMENT '대한민국',
  `china` decimal(4,1) DEFAULT 0.0 COMMENT '일본',
  `japan` decimal(4,1) DEFAULT 0.0 COMMENT '중국',
  `usa` decimal(4,1) DEFAULT 0.0 COMMENT '미국',
  `brazil` decimal(4,1) DEFAULT 0.0 COMMENT '브라질',
  `peru` decimal(4,1) DEFAULT 0.0 COMMENT '페루',
  `finland` decimal(4,1) DEFAULT 0.0 COMMENT '핀란드',
  `france` decimal(4,1) DEFAULT 0.0 COMMENT '프랑스',
  `germany` decimal(4,1) DEFAULT 0.0 COMMENT '독일',
  `sweden` decimal(4,1) DEFAULT 0.0 COMMENT '스웨덴',
  `england` decimal(4,1) DEFAULT 0.0 COMMENT '영국',
  `south_africa` decimal(4,1) DEFAULT 0.0 COMMENT '남아프리카공화국',
  `australia` decimal(4,1) DEFAULT 0.0 COMMENT '오스트레일리아',
  PRIMARY KEY (`year`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='_20250110104927.csv (1인당 GDP 국제)\r\n\r\n''시점'', ''대한민국'', ''중국'', ''일본'', ''미국'', ''브라질'', ''페루'', ''핀란드'', ''프랑스'', ''독일'', ''스웨덴'',\r\n       ''영국'', ''남아프리카공화국'', ''오스트레일리아''';

-- 테이블 데이터 db231.gdp_csv:~23 rows (대략적) 내보내기
DELETE FROM `gdp_csv`;
INSERT INTO `gdp_csv` (`year`, `korea`, `china`, `japan`, `usa`, `brazil`, `peru`, `finland`, `france`, `germany`, `sweden`, `england`, `south_africa`, `australia`) VALUES
	('2001', 4.7, 8.3, 0.4, 1.0, 1.4, 0.6, 2.6, 2.0, 1.7, 1.4, 2.6, 2.7, 2.0),
	('2002', 7.7, 9.1, 0.0, 1.7, 3.1, 5.5, 1.7, 1.1, -0.2, 2.2, 1.8, 3.7, 4.0),
	('2003', 3.1, 10.0, 1.5, 2.8, 1.1, 4.2, 2.0, 0.8, -0.7, 2.3, 3.1, 2.9, 3.1),
	('2004', 5.2, 10.1, 2.2, 3.8, 5.8, 5.0, 4.0, 2.8, 1.2, 4.3, 2.4, 4.6, 4.2),
	('2005', 4.4, 11.4, 1.8, 3.5, 3.2, 6.3, 2.8, 1.7, 0.7, 2.9, 2.7, 5.3, 3.2),
	('2006', 5.2, 12.7, 1.4, 2.8, 4.0, 7.5, 4.0, 2.4, 3.8, 4.7, 2.4, 5.6, 2.8),
	('2007', 5.8, 14.2, 1.5, 2.0, 6.1, 8.5, 5.3, 2.4, 3.0, 3.4, 2.6, 5.4, 3.8),
	('2008', 3.0, 9.7, -1.2, 0.1, 5.1, 9.1, 0.8, 0.3, 1.0, -0.5, -0.2, 3.2, 3.6),
	('2009', 0.8, 9.4, -5.7, -2.6, -0.1, 1.1, -8.1, -2.9, -5.7, -4.3, -4.6, -1.5, 1.9),
	('2010', 7.0, 10.6, 4.1, 2.7, 7.5, 8.3, 3.2, 1.9, 4.2, 6.0, 2.2, 3.0, 2.2),
	('2011', 3.7, 9.6, 0.0, 1.6, 4.0, 6.3, 2.5, 2.2, 3.9, 3.2, 1.1, 3.2, 2.4),
	('2012', 2.5, 7.9, 1.4, 2.3, 1.9, 6.1, -1.4, 0.3, 0.4, -0.6, 1.5, 2.4, 3.9),
	('2013', 3.3, 7.8, 2.0, 2.1, 3.0, 5.9, -0.9, 0.6, 0.4, 1.2, 1.8, 2.5, 2.6),
	('2014', 3.2, 7.4, 0.3, 2.5, 0.5, 2.4, -0.4, 1.0, 2.2, 2.7, 3.2, 1.4, 2.6),
	('2015', 2.9, 7.0, 1.6, 2.9, -3.5, 3.3, 0.5, 1.1, 1.5, 4.5, 2.2, 1.3, 2.2),
	('2016', 3.2, 6.8, 0.8, 1.8, -3.3, 4.0, 2.8, 1.1, 2.2, 2.1, 1.9, 0.7, 2.8),
	('2017', 3.4, 6.9, 1.7, 2.5, 1.3, 2.5, 3.2, 2.3, 2.7, 2.6, 2.7, 1.2, 2.3),
	('2018', 3.2, 6.7, 0.6, 3.0, 1.8, 4.0, 1.1, 1.9, 1.0, 2.0, 1.4, 1.6, 2.9),
	('2019', 2.3, 6.0, -0.4, 2.5, 1.2, 2.2, 1.2, 1.8, 1.1, 2.0, 1.6, 0.3, 2.2),
	('2020', -0.7, 2.2, -4.1, -2.2, -3.3, -10.9, -2.4, -7.5, -3.8, -2.2, -10.4, -6.0, -0.3),
	('2021', 4.6, 8.4, 2.6, 5.8, 4.8, 13.4, 2.8, 6.4, 3.2, 6.1, 8.7, 4.7, 2.1),
	('2022', 2.7, 3.0, 1.0, 1.9, 3.0, 2.7, 1.3, 2.5, 1.8, 2.7, 4.3, 1.9, 4.3),
	('2023', 1.4, 5.2, 1.9, 2.5, 2.9, -0.6, -1.0, 0.7, -0.3, -0.2, 0.1, 0.6, 3.0);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
