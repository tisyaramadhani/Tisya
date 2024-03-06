-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 06, 2024 at 11:09 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recruitment-sumitomo-test`
--

-- --------------------------------------------------------

--
-- Table structure for table `applicants`
--

CREATE TABLE `applicants` (
  `id` int(11) NOT NULL,
  `nik` varchar(20) NOT NULL,
  `name` varchar(70) DEFAULT NULL,
  `place_of_birth` varchar(100) NOT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` enum('Laki-laki','Perempuan') DEFAULT NULL,
  `height` int(11) NOT NULL,
  `weight` int(11) NOT NULL,
  `marital_status` enum('Belum Menikah','Sudah Menikah') DEFAULT NULL,
  `address_ktp` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `religion` varchar(50) NOT NULL,
  `biological_mother_name` varchar(130) NOT NULL,
  `father_name` varchar(130) NOT NULL,
  `mother_name` varchar(130) NOT NULL,
  `npwp` varchar(50) NOT NULL,
  `last_education` varchar(100) NOT NULL,
  `school_name` varchar(100) NOT NULL,
  `major` varchar(100) NOT NULL,
  `graduation_year` int(4) NOT NULL,
  `ipk` varchar(5) NOT NULL,
  `work_experience_pt` varchar(100) NOT NULL,
  `work_experience` varchar(100) NOT NULL,
  `total_work_experience` varchar(50) NOT NULL,
  `company_name` varchar(130) NOT NULL,
  `experience_description` varchar(255) NOT NULL,
  `skills` varchar(255) NOT NULL,
  `certification` varchar(200) NOT NULL,
  `expected_salary` varchar(50) NOT NULL,
  `expected_working_time` varchar(50) NOT NULL,
  `ready_shift` enum('Ya','Tidak') DEFAULT NULL,
  `ready_any_department` enum('Ya','Tidak') NOT NULL,
  `is_studying` enum('Ya','Tidak') DEFAULT NULL,
  `is_working` enum('Ya','Tidak') DEFAULT NULL,
  `vehicle` varchar(100) NOT NULL,
  `have_sim` enum('Ya','Tidak') DEFAULT NULL,
  `nail_long` enum('Ya','Tidak') DEFAULT NULL,
  `hospitalized` enum('Ya','Tidak') DEFAULT NULL,
  `have_disease` varchar(130) NOT NULL,
  `smoking` enum('Ya','Tidak') DEFAULT NULL,
  `left_handed` enum('Ya','Tidak') DEFAULT NULL,
  `distinguish_colors` enum('Ya','Tidak') DEFAULT NULL,
  `is_worked_sbi` enum('Ya','Tidak') NOT NULL,
  `ever_worked_sbi` varchar(255) NOT NULL,
  `ready_follow_rulles` enum('Ya','Tidak') DEFAULT NULL,
  `hobby` varchar(255) NOT NULL,
  `special_achievements` varchar(255) NOT NULL,
  `motivation` varchar(255) NOT NULL,
  `tribe` varchar(100) NOT NULL,
  `no_hp` varchar(13) NOT NULL,
  `no_wa` varchar(13) NOT NULL,
  `email` varchar(50) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `applicants`
--

INSERT INTO `applicants` (`id`, `nik`, `name`, `place_of_birth`, `date_of_birth`, `gender`, `height`, `weight`, `marital_status`, `address_ktp`, `address`, `religion`, `biological_mother_name`, `father_name`, `mother_name`, `npwp`, `last_education`, `school_name`, `major`, `graduation_year`, `ipk`, `work_experience_pt`, `work_experience`, `total_work_experience`, `company_name`, `experience_description`, `skills`, `certification`, `expected_salary`, `expected_working_time`, `ready_shift`, `ready_any_department`, `is_studying`, `is_working`, `vehicle`, `have_sim`, `nail_long`, `hospitalized`, `have_disease`, `smoking`, `left_handed`, `distinguish_colors`, `is_worked_sbi`, `ever_worked_sbi`, `ready_follow_rulles`, `hobby`, `special_achievements`, `motivation`, `tribe`, `no_hp`, `no_wa`, `email`, `foto`, `createdAt`, `updatedAt`) VALUES
(92, '2102020202020202', 'Tisya Ramadhani', 'kundur', '2003-10-28', 'Perempuan', 165, 45, 'Belum Menikah', 'Kundur Karimun', 'Teluk Tering', 'Islam', 'xxx', 'xxx', 'xxx', '-', 'S1', 'Politeknik Negeri Batam', 'Teknik Informatika', 2024, '4.00', 'Development', 'Kasir', '1-3 Tahun', 'PT Telemecanique Sensors', 'Development system', 'Programmer', 'Mobile', 'Rp 20.000.000.000', '1-3 tahun', 'Ya', 'Ya', 'Ya', 'Tidak', 'Mobil', 'Ya', 'Tidak', 'Tidak', '-', 'Tidak', 'Tidak', 'Ya', 'Ya', '523119', 'Ya', 'Nonton', '-', 'Uang', 'Melayu', '083124508650', '083124508650', 'tisyarizkiramadhani28@gmail.com', '', '2024-03-04', '2024-03-05');

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `id` int(11) NOT NULL,
  `no_test` varchar(6) NOT NULL,
  `jobs_id` int(11) NOT NULL,
  `applicants_nik` varchar(20) NOT NULL,
  `name` varchar(130) NOT NULL,
  `documents_nik` varchar(20) NOT NULL,
  `status` varchar(100) NOT NULL,
  `medical_check` varchar(50) NOT NULL,
  `grade` int(11) NOT NULL,
  `next_selection` varchar(100) DEFAULT NULL,
  `time_selection` date DEFAULT NULL,
  `time` varchar(20) NOT NULL,
  `place` varchar(225) NOT NULL,
  `timetable` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  `tahap_seleksi` varchar(100) DEFAULT NULL,
  `interviewer_id` int(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `position` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`id`, `no_test`, `jobs_id`, `applicants_nik`, `name`, `documents_nik`, `status`, `medical_check`, `grade`, `next_selection`, `time_selection`, `time`, `place`, `timetable`, `createdAt`, `updatedAt`, `tahap_seleksi`, `interviewer_id`, `email`, `position`) VALUES
(194, 'S4WFHI', 62, '2102020202020202', 'Tisya Ramadhani', '2102020202020202', 'Lulus', '', 0, 'Tes Tahap 1', '2024-03-08', '14:37', 'PT. Sumitomo Wiring Systems Batam Lot 8', '<p>ttt</p>', '2024-03-05', '2024-03-05', 'Administrasi', 0, 'tisyarizkiramadhani28@gmail.com', 'Operator');

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `id` int(11) NOT NULL,
  `no_test` varchar(6) NOT NULL,
  `name` varchar(150) NOT NULL,
  `email` varchar(100) NOT NULL,
  `position` varchar(100) DEFAULT NULL,
  `next_selection` varchar(100) DEFAULT NULL,
  `gender` enum('Laki-laki','Perempuan') DEFAULT NULL,
  `domisili` enum('Ya','Tidak') DEFAULT NULL,
  `kehadiran` enum('Ya','Tidak') DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `certifications`
--

CREATE TABLE `certifications` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `certifications`
--

INSERT INTO `certifications` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(3, 'Google', '2023-03-17', '2023-03-20'),
(6, 'Adobe', '2023-03-20', '2023-03-20'),
(11, 'Mobile', '2023-10-17', '2023-10-17');

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `id` int(11) NOT NULL,
  `nik` varchar(20) NOT NULL,
  `jobs_id` int(11) NOT NULL,
  `application_letter` varchar(255) NOT NULL,
  `cv` varchar(255) DEFAULT NULL,
  `ktp` varchar(255) NOT NULL,
  `ijazah` varchar(255) NOT NULL,
  `transkip` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `skck` varchar(255) NOT NULL,
  `health_certificate` varchar(255) NOT NULL,
  `kk` varchar(255) DEFAULT NULL,
  `sim` varchar(255) DEFAULT NULL,
  `work_experience_letter` varchar(255) DEFAULT NULL,
  `npwp_letter` varchar(255) DEFAULT NULL,
  `bpjs_kesehatan` varchar(255) DEFAULT NULL,
  `bpjs_ketenagakerjaan` varchar(255) DEFAULT NULL,
  `achievements_certificate` varchar(255) DEFAULT NULL,
  `competency_certificate` varchar(255) DEFAULT NULL,
  `follow_rulles_letter` varchar(255) DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`id`, `nik`, `jobs_id`, `application_letter`, `cv`, `ktp`, `ijazah`, `transkip`, `photo`, `skck`, `health_certificate`, `kk`, `sim`, `work_experience_letter`, `npwp_letter`, `bpjs_kesehatan`, `bpjs_ketenagakerjaan`, `achievements_certificate`, `competency_certificate`, `follow_rulles_letter`, `createdAt`, `updatedAt`) VALUES
(192, '2102026810030003', 62, 'application_letter-1709262855114-Tes.pdf', 'cv-1709262855114-Tes.pdf', 'ktp-1709262855114-Tes.pdf', 'ijazah-1709262855115-Tes.pdf', 'transkip-1709262855115-Tes.pdf', 'photo-1709262855115-poto.jpg', '', 'health_certificate-1709262855115-Tes.pdf', 'kk-1709262855116-Tes.pdf', '', '', '', '', '', '', '', 'follow_rulles_letter-1709262855116-Tes.pdf', '2024-03-01', '2024-03-01'),
(193, '2102026810030003', 63, 'application_letter-1709264075157-Tes.pdf', 'cv-1709264075157-Tes.pdf', 'ktp-1709264075157-Tes.pdf', 'ijazah-1709264075157-Tes.pdf', 'transkip-1709264075157-Tes.pdf', 'photo-1709264075158-Tisya Ramadhani.jpg', '', 'health_certificate-1709264075160-Tes.pdf', 'kk-1709264075160-Tes.pdf', '', '', '', '', '', '', '', 'follow_rulles_letter-1709264075160-Tes.pdf', '2024-03-01', '2024-03-01'),
(194, '2102020202020202', 62, 'application_letter-1709608876514-UAS_Tisya Ramadhani_3312101021_Pendidikan Kewarganegaraan.pdf', 'cv-1709608876515-UAS_Tisya Ramadhani_3312101021_Pendidikan Kewarganegaraan.pdf', 'ktp-1709608876516-UAS_Tisya Ramadhani_3312101021_Pendidikan Kewarganegaraan.pdf', 'ijazah-1709608876516-UAS_Tisya Ramadhani_3312101021_Pendidikan Kewarganegaraan.pdf', 'transkip-1709608876517-UAS_Tisya Ramadhani_3312101021_Pendidikan Kewarganegaraan.pdf', 'photo-1709608876517-presiden.png', 'skck-1709608876582-UAS_Tisya Ramadhani_3312101021_Pendidikan Kewarganegaraan.pdf', 'health_certificate-1709608876583-UAS_Tisya Ramadhani_3312101021_Pendidikan Kewarganegaraan.pdf', 'kk-1709608876583-UAS_Tisya Ramadhani_3312101021_Pendidikan Kewarganegaraan.pdf', 'sim-1709608876583-UAS_Tisya Ramadhani_3312101021_Pendidikan Kewarganegaraan.pdf', 'work_experience_letter-1709608876584-UAS_Tisya Ramadhani_3312101021_Pendidikan Kewarganegaraan.pdf', 'npwp_letter-1709608876586-UAS_Tisya Ramadhani_3312101021_Pendidikan Kewarganegaraan.pdf', 'bpjs_kesehatan-1709608876586-UAS_Tisya Ramadhani_3312101021_Pendidikan Kewarganegaraan.pdf', 'bpjs_ketenagakerjaan-1709608876587-UAS_Tisya Ramadhani_3312101021_Pendidikan Kewarganegaraan.pdf', 'achievements_certificate-1709608876587-UAS_Tisya Ramadhani_3312101021_Pendidikan Kewarganegaraan.pdf', 'competency_certificate-1709608876587-UAS_Tisya Ramadhani_3312101021_Pendidikan Kewarganegaraan.pdf', 'follow_rulles_letter-1709608876587-UAS_Tisya Ramadhani_3312101021_Pendidikan Kewarganegaraan.pdf', '2024-03-05', '2024-03-05');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `position` varchar(100) NOT NULL,
  `section` varchar(100) NOT NULL,
  `qualification` text NOT NULL,
  `estimated_joining` date NOT NULL,
  `timeline` text NOT NULL,
  `application_open` date NOT NULL,
  `application_close` date NOT NULL,
  `about_company` text NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `create_by` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `position`, `section`, `qualification`, `estimated_joining`, `timeline`, `application_open`, `application_close`, `about_company`, `status`, `create_by`, `createdAt`, `updatedAt`) VALUES
(62, 'Operator', 'Production Control', '<ul><li>Sehat Jasmani dan Rohani</li><li>Pendidikan minimal SMK</li><li>Fasih berbahasa Jepang min level N4</li><li>Bisa berbahasa inggris dan memiliki kemampuan berkomunikasi yang baik</li><li>Disiplin, adaptif, bertanggungjawab dan berintegritas tinggi</li></ul>', '2024-03-25', '<p>wwwww</p>', '2024-03-04', '2024-03-08', '<p>wwwwww</p>', 1, 'ADMINISTRATOR', '2024-03-01 09:29:58', '2024-03-01 09:35:19'),
(63, 'tes', 'Production Control', '<p>sss</p>', '2024-03-28', '<p>sss</p>', '2024-03-04', '2024-03-15', '<p>sss</p>', 1, 'ADMINISTRATOR', '2024-03-01 10:30:26', '2024-03-01 10:30:26');

-- --------------------------------------------------------

--
-- Table structure for table `majors`
--

CREATE TABLE `majors` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `majors`
--

INSERT INTO `majors` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Teknik Informatika', '2023-03-17', '2023-03-17'),
(2, 'Teknik Mesin', '2023-03-17', '2023-03-17'),
(3, 'Teknik Elektronika Manufaktur', '2023-03-17', '2023-03-30'),
(6, 'Manajemen Bisnis Terapan', '2023-03-20', '2023-03-20'),
(8, 'Teknik Geomatika', '2023-03-30', '2023-03-30');

-- --------------------------------------------------------

--
-- Table structure for table `president_text`
--

CREATE TABLE `president_text` (
  `id` int(11) NOT NULL,
  `text` text NOT NULL,
  `photo` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `president_text`
--

INSERT INTO `president_text` (`id`, `text`, `photo`, `createdAt`, `updatedAt`) VALUES
(1, '<p>PT Sumitomo Corporation Group develops businesses in a wide range of industrial fields on a global scale aiming to achieve prosperity and realize dreams through sound business activities. Our corporate mission statement carries out Sumitomo’s business philosophy, represented by one of the credos; “Benefit for self and others, private and public interests are one and the same.”* Since our foundation in 1919, we have continued to grow through enhancing our ability to create new value together with stakeholders such as business partners and clients, across business networks around the world. * This credo underscores the importance that Sumitomo’s business activities should not only benefit Sumitomo, but must also benefit society as a whole in order to achieve sustainable growth together. Today, in line with our Medium-Term Management Plan “SHIFT 2023,” we are steadily implementing various measures to enhance sustainability management while working towards the realization of a sustainable society and an enhancement of corporate value. Through the reinforcement and expansion of businesses by leveraging our strengths, as well as the development of next-generation businesses from a medium- to long-term perspective, we will shift to a highly profitable and resilient business portfolio. We believe that our continuous commitment to create value needed by society, will lead to the Group’s sustainable growth. The world is facing some serious social issues such as climate change, which increases the expectations on the private sector toward solving these issues. We will accomplish our goal, as represented by the Group’s corporate message—“Enriching lives and the world”—to further enrich the world, society, and people’s lives. By living up to our principles, we will unite as one to take on the challenge of creating new value get.</p>', 'photo-1709268046793-presiden (1).png', '2023-01-18', '2024-03-01');

-- --------------------------------------------------------

--
-- Table structure for table `profile_company`
--

CREATE TABLE `profile_company` (
  `id` int(11) NOT NULL,
  `text` text NOT NULL,
  `photo` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `profile_company`
--

INSERT INTO `profile_company` (`id`, `text`, `photo`, `createdAt`, `updatedAt`) VALUES
(17, '<p>Berpusat di Jakarta,<strong> PT Sumitomo Indonesia</strong> telah berkembang menjadi perusahaan bisnis yang terintegrasi dengan perekonomian Indonesia sejak tahun 1999. Fungsi inti dari aktivitas perdagangan kami adalah menangani beraneka ragam rangkaian produk dari berbagai sektor perdagangan melalui lima unit bisnis inti kami. PT Sumitomo Indonesia adalah salah satu dari perusahaan perdagangan terkemuka (dikenal dengan sebutan “Sogo Shosha”).&nbsp;</p><p>Kami merupakan bagian dari Sumitomo Corporation Group yang berpusat di Jepang, yang merupakan pemain kunci dalam pertukaran barang, jasa, dan teknologi kelas dunia dengan jaringan global yang terdiri dari anak-anak perusahaan di berbagai sektor. Oleh karena itu, PT Sumitomo Indonesia juga didukung oleh jaringan global Sumitomo Corporation Group, yang terdiri atas lebih dari 800 perusahaan dari 130 lokasi di 66 negara. * <i>Per 18 Januari 2023</i></p>', 'photo-1709536033667-PT.jpg', '2023-01-18', '2024-03-04');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(15) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '2022-09-21 00:00:00', '2022-09-21 00:00:00'),
(2, 'interviewer', '2022-09-21 00:00:00', '2022-09-21 00:00:00'),
(3, 'applicant', '2022-09-21 00:00:00', '2022-09-21 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `running_text`
--

CREATE TABLE `running_text` (
  `id` int(11) NOT NULL,
  `text` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `running_text`
--

INSERT INTO `running_text` (`id`, `text`, `createdAt`, `updatedAt`) VALUES
(1, 'Dibutuhkan operator segera', '2023-01-12', '2024-03-01');

-- --------------------------------------------------------

--
-- Table structure for table `sections`
--

CREATE TABLE `sections` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sections`
--

INSERT INTO `sections` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(2, 'Training Center', '2023-01-02', '2023-01-02'),
(3, 'Information System', '2023-01-02', '2023-01-02'),
(4, 'Production Control', '2023-01-02', '2023-01-02'),
(6, 'Human Resources', '2023-01-04', '2023-01-04'),
(7, 'General Affairs', '2023-01-04', '2023-01-04'),
(8, 'Material Control', '2023-01-06', '2023-01-06'),
(9, 'Cutting and Crimping', '2023-01-12', '2023-01-12'),
(10, 'Production Engineering', '2023-01-12', '2023-01-12'),
(12, 'Assembly', '2023-01-26', '2023-11-28'),
(13, 'Finance and Accounting', '2023-03-15', '2023-03-15');

-- --------------------------------------------------------

--
-- Table structure for table `selections`
--

CREATE TABLE `selections` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `selections`
--

INSERT INTO `selections` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(295, 'Administrasi', '2023-02-15', '2023-02-15'),
(296, 'Tes Tahap 1', '2023-02-15', '2023-08-09'),
(298, 'Wawancara', '2023-02-15', '2023-08-09'),
(299, 'Medical ChekUp', '2023-02-15', '2023-02-15'),
(302, 'Induction', '2023-03-30', '2023-03-30');

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Programmer', '2023-03-17', '2023-03-17'),
(2, 'Exel', '2023-03-17', '2023-03-17'),
(3, 'Editing', '2023-03-17', '2023-03-17');

-- --------------------------------------------------------

--
-- Table structure for table `universities`
--

CREATE TABLE `universities` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `universities`
--

INSERT INTO `universities` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Politeknik Negeri Batam', '2023-03-17', '2023-09-18'),
(2, 'Universitas Internasional Batam', '2023-03-17', '2023-03-17'),
(3, 'Universitas Maritim Raja Ali Haji', '2023-03-17', '2023-03-17'),
(5, 'Universitas Indonesia', '2023-03-20', '2023-03-20');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nik` varchar(20) NOT NULL,
  `name` varchar(130) NOT NULL,
  `email` varchar(130) NOT NULL,
  `password` varchar(255) NOT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT 0,
  `roles_id` int(11) NOT NULL DEFAULT 3,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nik`, `name`, `email`, `password`, `verified`, `roles_id`, `createdAt`, `updatedAt`) VALUES
(290, '2314567890098765', 'ADMINISTRATOR', 'tisyaramadhani@sbi.sws.co.jp', '$2a$10$2F689wZvdvJeqdyneeQJy.qSPp1tOmi9vu6.j/Vx0nESegTL0NOVC', 1, 1, '2023-07-25 16:20:36', '2023-08-01 12:48:57'),
(374, '2102020202020202', 'Tisya Ramadhani', 'tisyarizkiramadhani28@gmail.com', '$2a$10$q2LrrfkJ8c3m1UlTERz4NeIi7.niY4OktMY8ozyhbTvRWrGbUdQy.', 1, 3, '2024-03-04 14:18:25', '2024-03-04 14:18:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applicants`
--
ALTER TABLE `applicants`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `certifications`
--
ALTER TABLE `certifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `majors`
--
ALTER TABLE `majors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `running_text`
--
ALTER TABLE `running_text`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `selections`
--
ALTER TABLE `selections`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `universities`
--
ALTER TABLE `universities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nik` (`nik`,`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applicants`
--
ALTER TABLE `applicants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=195;

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `certifications`
--
ALTER TABLE `certifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=195;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `majors`
--
ALTER TABLE `majors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `running_text`
--
ALTER TABLE `running_text`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sections`
--
ALTER TABLE `sections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `selections`
--
ALTER TABLE `selections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=306;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `universities`
--
ALTER TABLE `universities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=375;

DELIMITER $$
--
-- Events
--
CREATE DEFINER=`root`@`localhost` EVENT `close_job_posting` ON SCHEDULE EVERY 1 DAY STARTS '2024-02-09 09:18:00' ON COMPLETION NOT PRESERVE ENABLE DO BEGIN
    UPDATE jobs
    SET status = 0,
    updatedAt = CURDATE()
    WHERE application_close < CURDATE() AND status = 1; -- Add semicolon here
END$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
