-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2019 at 02:34 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbo_eng`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `account_id` int(10) NOT NULL,
  `username` varchar(30) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `f_name` varchar(100) DEFAULT NULL,
  `m_name` varchar(100) DEFAULT NULL,
  `l_name` varchar(100) DEFAULT NULL,
  `campus` varchar(100) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`account_id`, `username`, `password`, `f_name`, `m_name`, `l_name`, `campus`, `type`) VALUES
(1, 'admin', '123', 'admin', 'admin', 'admin', 'Lingayen', 'admin'),
(2, 'user', '123', 'John', 'Doe', 'Dela Cruz', 'PSU', 'user'),
(3, 'standar', '123', 'John', 'Doe', 'Stark', 'Lingayen', 'user'),
(4, 'stardddddd', '123', 'star', 'star', 'stark', 'Lingayen', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `activity`
--

CREATE TABLE `activity` (
  `activity_id` int(10) NOT NULL,
  `proj_id` int(10) DEFAULT NULL,
  `start_date` varchar(200) DEFAULT NULL,
  `phase` varchar(200) DEFAULT NULL,
  `activity_name` varchar(200) DEFAULT NULL,
  `target_date` varchar(200) DEFAULT NULL,
  `finish_date` varchar(200) DEFAULT NULL,
  `progress` varchar(200) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `activity`
--

INSERT INTO `activity` (`activity_id`, `proj_id`, `start_date`, `phase`, `activity_name`, `target_date`, `finish_date`, `progress`) VALUES
(1, 1, '2019-01-10', '1', 'demo', '2019-07-15', '2019-01-10', '100'),
(2, 2, '2017-01-10', '1', 'clearing', '2017-01-30', '2019-01-10', '100'),
(3, 2, '2017-03-10', '2', 'done', '2017-04-10', '2019-01-10', '100');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `gallery_id` int(10) NOT NULL,
  `proj_id` int(10) DEFAULT NULL,
  `dir` varchar(500) DEFAULT NULL,
  `caption` varchar(2000) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`gallery_id`, `proj_id`, `dir`, `caption`) VALUES
(1, 1, 'photos/proj_image/1552829472924.jpg', '');

-- --------------------------------------------------------

--
-- Table structure for table `gantt_tasks`
--

CREATE TABLE `gantt_tasks` (
  `final_id` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `text` varchar(255) NOT NULL,
  `start_date` datetime NOT NULL,
  `duration` int(11) DEFAULT NULL,
  `progress` float DEFAULT NULL,
  `parent` int(11) NOT NULL,
  `proj_id` int(11) NOT NULL,
  `updated` datetime NOT NULL,
  `activity_img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gantt_tasks`
--

INSERT INTO `gantt_tasks` (`final_id`, `id`, `text`, `start_date`, `duration`, `progress`, `parent`, `proj_id`, `updated`, `activity_img`) VALUES
(1, 1, 'PHASE 1', '2019-03-18 00:00:00', 0, 1, 0, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(2, 2, 'CLEARING WORKS', '2019-03-18 00:00:00', 0, 0, 1, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(3, 3, 'EXCAVATION AND BACK FILL', '2019-03-18 00:00:00', 0, 0, 1, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(4, 4, 'REINFORCING STILLBARS', '2019-03-18 00:00:00', 0, 0, 1, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(5, 5, 'CONCRETE WORKS', '2019-03-18 00:00:00', 0, 0, 1, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(6, 6, 'a. FOOTING', '2019-03-18 00:00:00', 0, 0, 5, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(7, 7, 'b. COLUMN', '2019-03-18 00:00:00', 0, 0, 5, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(8, 6, 'c. FOOTING TIEBEAM', '2019-03-18 00:00:00', 0, 0, 5, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(9, 7, 'd. FLOOR SLAB', '2019-03-18 00:00:00', 0, 0, 5, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(10, 8, 'e. BEAM', '2019-03-18 00:00:00', 0, 0, 5, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(11, 9, 'FORM WORKS', '2019-03-18 00:00:00', 0, 0, 1, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(12, 10, 'MANSONRY WORKS', '2019-03-18 00:00:00', 0, 0, 1, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(13, 11, 'a. EXTERIOR AND INTERIOR WALLS', '2019-03-18 00:00:00', 0, 0, 10, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(14, 12, 'PHASE 2', '2019-03-18 00:00:00', 0, 1, 0, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(15, 13, 'STEEL WORKS', '2019-03-18 00:00:00', 0, 0, 12, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(16, 14, 'STEEL TRUSS', '2019-03-18 00:00:00', 0, 0, 13, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(17, 15, 'ROOFING WORKS', '2019-03-18 00:00:00', 0, 0, 12, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(18, 16, 'PLASTERING', '2019-03-18 00:00:00', 0, 0, 12, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(19, 17, 'PHASE 3', '2019-03-18 00:00:00', 0, 1, 0, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(20, 18, 'TILE WORKS', '2019-03-20 00:00:00', 11, 0.1, 17, 1, '2019-03-17 00:00:00', 'photos/proj_image/1552829594781.jpg'),
(21, 19, 'PAINTING WORKS', '2019-03-18 00:00:00', 0, 0, 17, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(22, 20, 'CEILING WORKS', '2019-03-18 00:00:00', 0, 0, 17, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(23, 21, 'PHASE 4', '2019-03-18 00:00:00', 0, 1, 0, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(24, 22, 'ELECTRICAL WORKS', '2019-03-18 00:00:00', 0, 0, 21, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(25, 23, 'a. LIGHTING WORKS', '2019-03-18 00:00:00', 0, 0, 22, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(26, 24, 'b.POWER LAYOUT', '2019-03-18 00:00:00', 0, 0, 22, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(27, 25, 'c. MECHANICAL LAYOUT', '2019-03-18 00:00:00', 0, 0, 22, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(28, 26, 'PLUMBING WORKS', '2019-03-18 00:00:00', 0, 0, 21, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(29, 27, 'a. SANITARY', '2019-03-18 00:00:00', 0, 0, 26, 1, '0000-00-00 00:00:00', 'photos/default.jpg'),
(30, 28, 'b. WATER LAYOUT', '2019-03-18 00:00:00', 0, 0, 26, 1, '0000-00-00 00:00:00', 'photos/default.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `progress`
--

CREATE TABLE `progress` (
  `prog_id` int(10) NOT NULL,
  `activity_id` int(10) DEFAULT NULL,
  `proj_id` int(10) DEFAULT NULL,
  `date_checked` varchar(200) DEFAULT NULL,
  `progress` varchar(200) DEFAULT NULL,
  `remarks` varchar(4000) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `progress`
--

INSERT INTO `progress` (`prog_id`, `activity_id`, `proj_id`, `date_checked`, `progress`, `remarks`) VALUES
(1, 1, NULL, '2019-01-10', '90', 'demo'),
(2, 1, NULL, '2019-01-10', '100', 'demo'),
(3, 2, NULL, '2017-01-04', '30', 'nahollowblockasan la age'),
(4, 2, NULL, '2019-01-10', '100', '1qwqq'),
(5, 3, NULL, '2019-01-10', '100', '100');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `proj_id` int(10) NOT NULL,
  `proj_name` varchar(30) DEFAULT NULL,
  `start_date` varchar(100) DEFAULT NULL,
  `target_date` varchar(100) DEFAULT NULL,
  `finish_date` varchar(100) DEFAULT NULL,
  `contractor` varchar(100) DEFAULT NULL,
  `campus` varchar(100) DEFAULT NULL,
  `duration` varchar(100) DEFAULT NULL,
  `src_fund` varchar(100) DEFAULT NULL,
  `model_img` varchar(100) DEFAULT NULL,
  `init_fund` varchar(100) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  `progress` float DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`proj_id`, `proj_name`, `start_date`, `target_date`, `finish_date`, `contractor`, `campus`, `duration`, `src_fund`, `model_img`, `init_fund`, `status`, `progress`) VALUES
(1, 'PSU Canteen Extension', '2019-03-18', '2020-01-09', NULL, 'ZYASADZASD', 'Lingayen', '297', 'Income', 'photos/proj_image/1552829472924.jpg', '5000', 'ongoing', 10);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`account_id`);

--
-- Indexes for table `activity`
--
ALTER TABLE `activity`
  ADD PRIMARY KEY (`activity_id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`gallery_id`);

--
-- Indexes for table `gantt_tasks`
--
ALTER TABLE `gantt_tasks`
  ADD PRIMARY KEY (`final_id`);

--
-- Indexes for table `progress`
--
ALTER TABLE `progress`
  ADD PRIMARY KEY (`prog_id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`proj_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `account_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `activity`
--
ALTER TABLE `activity`
  MODIFY `activity_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `gallery_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `gantt_tasks`
--
ALTER TABLE `gantt_tasks`
  MODIFY `final_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `progress`
--
ALTER TABLE `progress`
  MODIFY `prog_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `proj_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
