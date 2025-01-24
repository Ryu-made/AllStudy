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

-- 테이블 db231.member 구조 내보내기
CREATE TABLE IF NOT EXISTS `member` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '회원아이디',
  `password` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '회원비밀번호',
  `username` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '사용자명',
  `address` tinytext COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '회원주소',
  `profile` mediumblob DEFAULT NULL COMMENT '자기소개사진',
  `regdate` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '회원가입일',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='회원 정보';

-- 테이블 데이터 db231.member:~8 rows (대략적) 내보내기
DELETE FROM `member`;
INSERT INTO `member` (`id`, `password`, `username`, `address`, `profile`, `regdate`) VALUES
	('', '', '', '', NULL, '2025-01-22 14:41:48'),
	('a', '1111', 'name01', 'Busan', NULL, '2025-01-22 09:47:04'),
	('a1', 'a1', 'c', '부산', NULL, '2025-01-22 09:48:21'),
	('aaa', '1234', 'name001', 'BusanSuyeong', NULL, '2025-01-22 14:05:41'),
	('b', '1111', 'name02', 'Seoul', NULL, '2025-01-22 09:48:13'),
	('b1', 'b1', 'b1', 'b31', NULL, '2025-01-22 14:01:18'),
	('c', '1111', 'name03', NULL, NULL, '2025-01-22 09:49:26'),
	('cccc', 'cccc', 'cccc', 'cccc', NULL, '2025-01-22 14:20:01');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
