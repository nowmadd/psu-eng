-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 25, 2019 at 02:51 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `psu_eng`
--

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
  `proj_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gantt_tasks`
--

INSERT INTO `gantt_tasks` (`final_id`, `id`, `text`, `start_date`, `duration`, `progress`, `parent`, `proj_id`) VALUES
(1, 1, 'PHASE 1', '2019-02-25 00:00:00', 60, 0.2, 0, 1),
(2, 2, 'CLEANING WORKS', '2019-02-25 00:00:00', 3, 0.1, 1, 1),
(3, 3, 'EXCAVATION AND BACK FILL', '2019-02-28 00:00:00', 3, 0.1, 1, 1),
(4, 4, 'REINFORCING STILLBARS', '2019-03-12 00:00:00', 3, 0.8, 1, 1),
(5, 5, 'CONCRETE WORKS', '2019-03-10 00:00:00', 18, 0.8, 1, 1),
(6, 6, 'a. FOOTING', '2019-03-10 00:00:00', 3, 0.8, 5, 1),
(7, 7, 'b. COLUMN', '2019-03-14 00:00:00', 3, 0.1, 5, 1),
(8, 6, 'c. FOOTING TIEBEAM', '2019-03-16 00:00:00', 3, 0.2, 5, 1),
(9, 7, 'd. FLOOR SLAB', '2019-03-13 00:00:00', 3, 0.7, 5, 1),
(10, 8, 'e. BEAM', '2019-03-15 00:00:00', 5, 0.7, 5, 1),
(11, 9, 'FORM WORKS', '2019-03-12 00:00:00', 14, 0.8, 1, 1),
(12, 10, 'MANSONRY WORKS', '2019-03-15 00:00:00', 30, 0.4, 1, 1),
(13, 11, 'a. EXTERIOR AND INTERIOR WALLS', '2019-03-15 00:00:00', 15, 0.1, 10, 1),
(14, 12, 'PHASE 2', '2019-03-25 00:00:00', 45, 0.1, 0, 1),
(15, 13, 'STEEL WORKS', '2019-03-25 00:00:00', 0, 0, 12, 1),
(16, 14, 'STEEL TRUSS', '2019-03-25 00:00:00', 0, 0, 13, 1),
(17, 15, 'ROOFING WORKS', '2019-03-25 00:00:00', 0, 0, 12, 1),
(18, 16, 'PLASTERING', '2019-03-25 00:00:00', 0, 0, 12, 1),
(19, 17, 'PHASE 3', '2019-03-25 00:00:00', 45, 0.1, 0, 1),
(20, 18, 'TILE WORKS', '2019-03-25 00:00:00', 0, 0, 17, 1),
(21, 19, 'PAINTING WORKS', '2019-03-25 00:00:00', 0, 0, 17, 1),
(22, 20, 'CEILING WORKS', '2019-03-25 00:00:00', 0, 0, 17, 1),
(23, 21, 'PHASE 4', '2019-03-25 00:00:00', 45, 0.1, 0, 1),
(24, 22, 'ELECTRICAL WORKS', '2019-03-25 00:00:00', 0, 0, 21, 1),
(25, 23, 'a. LIGHTING WORKS', '2019-03-25 00:00:00', 0, 0, 22, 1),
(26, 24, 'b.POWER LAYOUT', '2019-03-25 00:00:00', 0, 0, 22, 1),
(27, 25, 'c. MECHANICAL LAYOUT', '2019-03-25 00:00:00', 0, 0, 22, 1),
(28, 26, 'PLUMBING WORKS', '2019-03-25 00:00:00', 0, 0, 21, 1),
(29, 27, 'a. SANITARY', '2019-03-25 00:00:00', 0, 0, 26, 1),
(30, 28, 'b. WATER LAYOUT', '2019-03-25 00:00:00', 0, 0, 26, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gantt_tasks`
--
ALTER TABLE `gantt_tasks`
  ADD PRIMARY KEY (`final_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gantt_tasks`
--
ALTER TABLE `gantt_tasks`
  MODIFY `final_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
