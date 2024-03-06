-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 31, 2023 at 01:53 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

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
  `nik` varchar(20) DEFAULT NULL,
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
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `applicants`
--

INSERT INTO `applicants` (`id`, `nik`, `name`, `place_of_birth`, `date_of_birth`, `gender`, `height`, `weight`, `marital_status`, `address_ktp`, `address`, `religion`, `biological_mother_name`, `father_name`, `mother_name`, `npwp`, `last_education`, `school_name`, `major`, `graduation_year`, `ipk`, `work_experience_pt`, `work_experience`, `total_work_experience`, `company_name`, `experience_description`, `skills`, `certification`, `expected_salary`, `expected_working_time`, `ready_shift`, `ready_any_department`, `is_studying`, `is_working`, `vehicle`, `have_sim`, `nail_long`, `hospitalized`, `have_disease`, `smoking`, `left_handed`, `distinguish_colors`, `is_worked_sbi`, `ever_worked_sbi`, `ready_follow_rulles`, `hobby`, `special_achievements`, `motivation`, `tribe`, `no_hp`, `no_wa`, `email`, `createdAt`, `updatedAt`) VALUES
(24, '1111111111111111', 'restu yulia syahfitri', 'Loteng', '2002-02-12', 'Perempuan', 172, 55, 'Belum Menikah', 'bengkong', 'Loteng', 'islam', 'Siti', 'udin', 'situ', '123123123', 'smk', 'Politeknik Negeri Surabaya', 'Teknik Informatika', 2019, '3.6', 'Maintenance', 'Kasir', 'lebih 5 tahun', 'PT Siix', '2002-assyembly', 'Programmer', 'Adobe', '15000000', ' kurang 6 bulan', 'Tidak', 'Ya', 'Tidak', 'Tidak', 'Mobil', 'Tidak', 'Ya', 'Ya', 'tidak ada', 'Ya', 'Ya', 'Ya', 'Ya', '217100 assyembly', 'Tidak', 'main musik', 'juara 1 pbl polibatam', 'hedon hedon hedon', 'padang', '089505525267', '089505525267', 'restuyuliasyahfitri@gmail.com', '2023-01-18', '2023-03-30'),
(27, '1231231231231233', 'Angga Patrio', 'batam', '2022-06-07', 'Laki-laki', 170, 85, 'Sudah Menikah', 'batam', 'batam', 'Islam', 'Ibu Kandung', 'Ayah', 'Ibu', '123123', 'SMK', 'Sekolah', 'Teknik Informatika', 2023, '', 'belum berpengalaman', 'Tidak Ada', '-', '-', '-', '-', '', '4200000', '2 tahun', 'Ya', 'Ya', 'Ya', 'Tidak', 'motor', 'Ya', 'Tidak', 'Tidak', '-', 'Tidak', 'Tidak', 'Ya', 'Ya', '-', 'Ya', 'main', '-', 'cuan', 'kerinci', '085200839381', '085200839381', 'anggapatriopratama@gmail.com', '2023-01-27', '2023-02-08'),
(28, '3333333333333333', 'Muhammad Ramadhan', 'Batam', '2000-01-03', 'Laki-laki', 171, 55, 'Belum Menikah', 'Batu Ampar', 'Batu Ampar', 'Islam', 'Ibu Kandung', 'Ayah', 'Ibu', '123123123', 'SMK', 'Politeknik Negeri Batam', 'Teknik Informatika', 2023, '', 'belum berpengalaman', 'Tidak Ada', '-', '-', '-', 'Junior web programmer', '', '70000000', '6 Bulan', 'Tidak', 'Tidak', 'Ya', 'Ya', 'Skate', 'Ya', 'Tidak', 'Ya', '-', 'Tidak', 'Tidak', 'Ya', 'Ya', '-', 'Ya', 'Tidur', 'Juara', 'Cuan', 'Flores', '089521772168', '089521772168', 'madanmr86@gmail.com', '2023-02-09', '2023-02-09'),
(29, '1221223221414552', 'Putra Gabriel Sigalingging', 'elm street', '2001-09-27', 'Laki-laki', 168, 69, 'Belum Menikah', 'Elm Street', 'new york', 'Kristen', 'Bu purba', 'pak sigalingging', 'purba', '122133412231', 'SMA', 'SMA 1 Sidikalang', 'Bachelor Degree informatic enginnering', 2023, '3.5', 'belum berpengalaman', 'lainnya', '0', 'Shopee Singapore', 'tidak ada', 'bernyanyi', '', '1.000.000.000.000.000', 'permanen', 'Tidak', 'Tidak', 'Ya', 'Ya', 'Lamborgini', 'Ya', 'Ya', 'Ya', 'tidak', 'Tidak', 'Ya', 'Ya', 'Ya', 'Tidak', 'Ya', 'nyanyi, dance, badminton, reading, learn', 'nyanyi dikamar mandi 5 jam', 'keluarga', 'batak amerika', '081233471131', '081233471131', 'putra.gabriell27@gmail.com', '2023-03-14', '2023-03-14'),
(31, '1231231234567890', 'Putra Gabriel', 'asd', '2023-03-15', 'Laki-laki', 12, 23, 'Belum Menikah', 'batu aji', 'batu aji', 'kristen', 'reni', 'dedi', 'runi', '-', 'smk', 'Universitas Maritim Raja Ali Haji', 'Teknik Mesin', 24, '3.5', 'Inspector/QAQC Operator', 'Helper Bangunan', '3-5 Tahun', '-', '-', 'Editing', 'BNSP', '12000000', '1-3 tahun', 'Tidak', 'Ya', 'Tidak', 'Tidak', 'motor', 'Ya', 'Ya', 'Tidak', '-', 'Ya', 'Ya', 'Ya', 'Ya', '-', 'Ya', 'main', '-', 'duit', 'batak', '089505515151', '089505515151', 'putra.gabriell27@gmail.com', '2023-03-14', '2023-03-20'),
(32, '0909090909090909', 'Mad', '', NULL, NULL, 0, 0, NULL, '', '', '', '', '', '', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', NULL, 'Ya', NULL, NULL, '', NULL, NULL, NULL, '', NULL, NULL, NULL, 'Ya', '', NULL, '', '', '', '', '', '', 'madanmr86@gmail.com', '2023-03-15', '2023-03-15'),
(33, '1231231231231212', 'Muhammad Ramadhan', 'batam', '2000-12-08', 'Laki-laki', 173, 55, 'Belum Menikah', 'Batam', 'batam', 'Islam', 'Ibu', 'bapak', 'Ibu', '-', 'SMK', 'Politeknik Negeri Surabaya', 'Teknik Informatika', 2019, '3', 'lainnya', 'lainnya', 'Kurang dari 1 Tahun', 'Alteko', '2019-Engineer-Alteko', 'Programmer', 'Google', '12000000', ' kurang 6 bulan', 'Tidak', 'Tidak', 'Tidak', 'Tidak', 'Motor', 'Ya', 'Tidak', 'Tidak', '-', 'Tidak', 'Tidak', 'Ya', 'Ya', 'Tidak', 'Ya', 'Main musik', 'Juara 1 Linear', 'Cuan cuan cuan', 'Flores', '089674645342', '089674645342', 'madanmr68@gmail.com', '2023-03-15', '2023-03-30');

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
  `grade` int(11) NOT NULL,
  `next_selection` varchar(100) DEFAULT NULL,
  `time_selection` date NOT NULL,
  `time` varchar(20) NOT NULL,
  `place` varchar(225) NOT NULL,
  `timetable` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`id`, `no_test`, `jobs_id`, `applicants_nik`, `name`, `documents_nik`, `status`, `grade`, `next_selection`, `time_selection`, `time`, `place`, `timetable`, `createdAt`, `updatedAt`) VALUES
(128, 'A8UQML', 29, '1111111111111111', 'restu yulia syahfitri', '1111111111111111', 'Lulus', 85, 'Wawancara', '2023-03-30', '13:00 WIB', 'Lot 7 Ruang Orchid Lantai 1', '<p>tanggal 03</p>', '2023-03-24', '2023-03-30'),
(129, 'BZAHGL', 29, '1231231234567890', 'Putra Gabriel', '1231231234567890', 'Lulus', 65, 'Wawancara', '2023-03-30', '', '', '<p>asdasd</p>', '2023-03-27', '2023-03-30'),
(130, 'ZDVGVK', 34, '1111111111111111', 'restu yulia syahfitri', '1111111111111111', 'Lulus', 95, 'Induction', '2023-04-02', '13:00 WIB', 'Lot 7 Ruang Orchid Lantai 1', '<p>tanggal 03-05 : tes administrasi</p>', '2023-03-30', '2023-03-30'),
(131, 'XXY9RE', 29, '1231231231231212', 'Muhammad Ramadhan', '1231231231231212', 'Lulus', 0, 'Wawancara', '2023-03-31', '08:00 WIB', 'Lot 7 Ruang Orchid Lantai 1', '<p>tanggal 03</p>', '2023-03-30', '2023-03-30');

-- --------------------------------------------------------

--
-- Table structure for table `certifications`
--

CREATE TABLE `certifications` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `certifications`
--

INSERT INTO `certifications` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(3, 'Google', '2023-03-17', '2023-03-20'),
(6, 'Adobe', '2023-03-20', '2023-03-20');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`id`, `nik`, `jobs_id`, `application_letter`, `cv`, `ktp`, `ijazah`, `transkip`, `photo`, `skck`, `health_certificate`, `kk`, `sim`, `work_experience_letter`, `npwp_letter`, `bpjs_kesehatan`, `bpjs_ketenagakerjaan`, `achievements_certificate`, `competency_certificate`, `follow_rulles_letter`, `createdAt`, `updatedAt`) VALUES
(128, '1111111111111111', 29, 'application_letter-1679628187435-kucing lucuu.jpg', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-03-24', '2023-03-24'),
(129, '1231231234567890', 29, 'application_letter-1679882599162-kucing lucuu.jpg', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-03-27', '2023-03-27'),
(130, '1111111111111111', 34, 'application_letter-1680162280760-BPJ_Vol_11_No_1_p_531-537.pdf', 'cv-1680162280780-BPJ_Vol_11_No_1_p_531-537.pdf', 'ktp-1680162280817-BPJ_Vol_11_No_1_p_531-537.pdf', 'ijazah-1680162280857-BPJ_Vol_11_No_1_p_531-537.pdf', 'transkip-1680162280929-BPJ_Vol_11_No_1_p_531-537.pdf', 'photo-1680162280955-BPJ_Vol_11_No_1_p_531-537.pdf', 'skck-1680162280976-BPJ_Vol_11_No_1_p_531-537.pdf', 'health_certificate-1680162281000-BPJ_Vol_11_No_1_p_531-537.pdf', 'kk-1680162281022-BPJ_Vol_11_No_1_p_531-537.pdf', 'sim-1680162281044-BPJ_Vol_11_No_1_p_531-537.pdf', 'work_experience_letter-1680162281065-BPJ_Vol_11_No_1_p_531-537.pdf', 'npwp_letter-1680162281080-BPJ_Vol_11_No_1_p_531-537.pdf', 'bpjs_kesehatan-1680162281097-BPJ_Vol_11_No_1_p_531-537.pdf', 'bpjs_ketenagakerjaan-1680162281116-BPJ_Vol_11_No_1_p_531-537.pdf', 'achievements_certificate-1680162281135-BPJ_Vol_11_No_1_p_531-537.pdf', 'competency_certificate-1680162281151-BPJ_Vol_11_No_1_p_531-537.pdf', 'follow_rulles_letter-1680162281168-BPJ_Vol_11_No_1_p_531-537.pdf', '2023-03-30', '2023-03-30'),
(131, '1231231231231212', 29, 'application_letter-1680164401691-BPJ_Vol_11_No_1_p_531-537.pdf', 'cv-1680164401742-BPJ_Vol_11_No_1_p_531-537.pdf', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-03-30', '2023-03-30');

-- --------------------------------------------------------

--
-- Table structure for table `interviewer`
--

CREATE TABLE `interviewer` (
  `id` int(11) NOT NULL,
  `nik` varchar(20) NOT NULL,
  `name` varchar(130) NOT NULL,
  `password` varchar(255) NOT NULL,
  `selfie` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `position`, `section`, `qualification`, `estimated_joining`, `timeline`, `application_open`, `application_close`, `about_company`, `status`, `createdAt`, `updatedAt`) VALUES
(23, 'it support', 'Production Control', '<ul><li>keren</li><li>good looking</li></ul>', '2023-01-08', '<p>jjjj</p>', '2023-01-05', '2023-01-07', '<p>jjjj</p>', 2, '2023-01-05 10:54:32', '2023-01-20 13:19:54'),
(27, 'bos', 'Information System', '<p><i>321</i></p>', '2023-01-26', '<p><i>321</i></p>', '2023-01-05', '2023-01-26', '<p><i>321</i></p>', 2, '2023-01-05 11:47:54', '2023-01-20 13:19:57'),
(28, 'clerk', 'Human Resources', '<p>rapi</p><p>baik</p><p>good looking</p><p>pintar</p>', '2023-01-28', '<p>12 - 14 : bla bla</p><p>12 - 14 : bla bla<br>12 - 14 : bla bla<br>12 - 14 : bla bla</p>', '2023-01-06', '2023-01-12', '<p>PT Sumitomo WIring System Batam Indonesia, adalah pt yang berpusat di jepang.</p>', 2, '2023-01-06 09:56:16', '2023-01-23 10:46:13'),
(29, 'operator', 'Production Control', '<ul><li>memiliki pengalaman yang luar biasa</li><li>baik</li><li>bisa baca pikiran</li><li>good looking</li><li>pandai</li><li>pintar</li><li>bijak</li><li>cerdas</li><li>jago</li><li>keren</li><li>bisa bernyanyi</li><li>berisi</li><li>sixpack</li></ul>', '2023-01-06', '<ul><li>12 - 15 : administrasi</li><li>16 - 20 : tes tertulis</li><li>21 - 25 : tes keahlian</li><li>26 - 30 : wawancara</li></ul>', '2023-01-06', '2023-01-27', '<p><strong>PT Sumitomo</strong> Indonesia mengelola lima unit bisnis yang terdiri dari produk logam, sistem transportasi dan konstruksi, lingkungan dan infrastruktur, barang dan jasa terkait media, jaringan, dan gaya hidup, serta sumber daya mineral, energi, kimia, dan produk elektronik.&nbsp;</p><p><strong>PT Sumitomo Indonesia</strong> mengelola lima unit bisnis yang terdiri dari produk logam, sistem transportasi dan konstruksi, lingkungan dan infrastruktur, barang</p>', 1, '2023-01-06 10:06:06', '2023-03-08 14:18:38'),
(30, 'it support', 'Information System', '<p>123</p>', '2023-01-27', '<p>321</p>', '2023-01-06', '2023-01-19', '<p>123</p>', 2, '2023-01-06 14:57:06', '2023-01-16 08:18:48'),
(31, 'programmer', 'Information System', '<ul><li>jago</li><li>gg</li><li>pintar</li><li>cerdas</li><li>menguasai semua bahasa pemrograman</li></ul>', '2023-02-03', '<blockquote><p>20 - 23 :<i> administ</i><strong>rasi</strong></p><figure class=\"table\"><table><tbody><tr><td>&nbsp;</td></tr></tbody></table></figure></blockquote><ol><li><strong>24 -25 : wawancara</strong></li></ol>', '2023-01-20', '2023-01-27', '<p><strong>PT Sumitomo</strong> Indonesia mengelola lima unit bisnis yang terdiri dari produk logam, sistem transportasi dan konstruksi, lingkungan dan infrastruktur, barang dan jasa terkait media, jaringan, dan gaya hidup, serta sumber daya mineral, energi, kimia, dan produk elektronik.</p>', 1, '2023-01-20 13:22:14', '2023-03-08 16:02:39'),
(32, 'clerk', 'Training Center', '<p>Wanita</p>', '2023-03-11', '<ul><li>13-14 Tes</li></ul>', '2023-02-28', '2023-03-05', '<p><strong>PT Sumitomo</strong> Indonesia mengelola lima unit bisnis yang terdiri dari produk logam, sistem transportasi dan konstruksi, lingkungan dan infrastruktur, barang dan jasa terkait media, jaringan, dan gaya hidup, serta sumber daya mineral, energi, kimia, dan produk elektronik.</p>', 2, '2023-02-28 09:11:37', '2023-03-08 10:55:09'),
(33, 'Nurse', 'Human Resources', '<ul><li>Pendidikan minimal S1 Keperawatan</li><li>STR aktif</li><li>Berpengalaman minimal 3 tahun</li></ul>', '2023-03-27', '<figure class=\"table\"><table><tbody><tr><td>No</td><td>Tangal</td><td>Activity</td><td>Remark</td></tr><tr><td>1</td><td>17-21</td><td>Administrasi</td><td>&nbsp;</td></tr><tr><td>2</td><td>23</td><td>Selection Tahap 1</td><td>&nbsp;</td></tr><tr><td>3</td><td>25</td><td>Interview</td><td>&nbsp;</td></tr><tr><td>4</td><td>26</td><td>Medical</td><td>&nbsp;</td></tr></tbody></table></figure>', '2023-03-17', '2023-03-20', '<p>PMA Jepang yang memproduksi wire harnes untuk mobil</p>', 1, '2023-03-15 14:36:18', '2023-03-15 14:36:18'),
(34, 'Senior Clerk', 'Training Center', '<ul><li>Pandai Exel</li><li>Lulusan D3/S1</li></ul>', '2023-04-06', '<p>tanggal 03-04 : Tes Administrasi</p><p>tanggal 05-06 : Tes Tahap Pertama</p><p>tanggal 06 : Join</p>', '2023-03-31', '2023-04-05', '<p>PT Sumitomo wiring Adalah perusahan</p>', 1, '2023-03-30 14:36:03', '2023-03-30 14:36:03');

-- --------------------------------------------------------

--
-- Table structure for table `majors`
--

CREATE TABLE `majors` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `president_text`
--

INSERT INTO `president_text` (`id`, `text`, `photo`, `createdAt`, `updatedAt`) VALUES
(1, '<p>PT Sumitomo Corporation Group develops businesses in a wide range of industrial fields on a global scale aiming to achieve prosperity and realize dreams through sound business activities. Our corporate mission statement carries out Sumitomo’s business philosophy, represented by one of the credos; “Benefit for self and others, private and public interests are one and the same.”* Since our foundation in 1919, we have continued to grow through enhancing our ability to create new value together with stakeholders such as business partners and clients, across business networks around the world. * This credo underscores the importance that Sumitomo’s business activities should not only benefit Sumitomo, but must also benefit society as a whole in order to achieve sustainable growth together. Today, in line with our Medium-Term Management Plan “SHIFT 2023,” we are steadily implementing various measures to enhance sustainability management while working towards the realization of a sustainable society and an enhancement of corporate value. Through the reinforcement and expansion of businesses by leveraging our strengths, as well as the development of next-generation businesses from a medium- to long-term perspective, we will shift to a highly profitable and resilient business portfolio. We believe that our continuous commitment to create value needed by society, will lead to the Group’s sustainable growth. The world is facing some serious social issues such as climate change, which increases the expectations on the private sector toward solving these issues. We will accomplish our goal, as represented by the Group’s corporate message—“Enriching lives and the world”—to further enrich the world, society, and people’s lives. By living up to our principles, we will unite as one to take on the challenge of creating new value get.</p>', 'photo-1678440790375-sachok.png', '2023-01-18', '2023-03-10');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `profile_company`
--

INSERT INTO `profile_company` (`id`, `text`, `photo`, `createdAt`, `updatedAt`) VALUES
(17, '<p>Berpusat di Jakarta,<strong> PT Sumitomo Indonesia</strong> telah berkembang menjadi perusahaan bisnis yang terintegrasi dengan perekonomian Indonesia sejak tahun 1999. Fungsi inti dari aktivitas perdagangan kami adalah menangani beraneka ragam rangkaian produk dari berbagai sektor perdagangan melalui lima unit bisnis inti kami. PT Sumitomo Indonesia adalah salah satu dari perusahaan perdagangan terkemuka (dikenal dengan sebutan “Sogo Shosha”).&nbsp;</p><p>Kami merupakan bagian dari Sumitomo Corporation Group yang berpusat di Jepang, yang merupakan pemain kunci dalam pertukaran barang, jasa, dan teknologi kelas dunia dengan jaringan global yang terdiri dari anak-anak perusahaan di berbagai sektor. Oleh karena itu, PT Sumitomo Indonesia juga didukung oleh jaringan global Sumitomo Corporation Group, yang terdiri atas lebih dari 800 perusahaan dari 130 lokasi di 66 negara. * <i>Per 18 Januari 2023</i></p>', 'photo-1678440777765-img-1.jpg', '2023-01-18', '2023-03-10');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(15) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `running_text`
--

INSERT INTO `running_text` (`id`, `text`, `createdAt`, `updatedAt`) VALUES
(1, 'Ada Lowongan Baru', '2023-01-12', '2023-03-23');

-- --------------------------------------------------------

--
-- Table structure for table `sections`
--

CREATE TABLE `sections` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(12, 'Assyembly', '2023-01-26', '2023-01-26'),
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `selections`
--

INSERT INTO `selections` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(295, 'Administrasi', '2023-02-15', '2023-02-15'),
(296, 'Tes MTK', '2023-02-15', '2023-02-15'),
(297, 'Tes Tertulis', '2023-02-15', '2023-02-15'),
(298, 'Wawancara', '2023-02-15', '2023-02-15'),
(299, 'Medical ChekUp', '2023-02-15', '2023-02-15'),
(300, 'Interview Bahasa Inggris', '2023-03-08', '2023-03-08'),
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Programmer', '2023-03-17', '2023-03-17'),
(2, 'Exel', '2023-03-17', '2023-03-17'),
(3, 'Editing', '2023-03-17', '2023-03-17');

-- --------------------------------------------------------

--
-- Table structure for table `sws`
--

CREATE TABLE `sws` (
  `id` int(11) NOT NULL,
  `photo` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sws`
--

INSERT INTO `sws` (`id`, `photo`, `createdAt`, `updatedAt`) VALUES
(1, 'photo-1678440804150-swsways.jpg', '2023-01-19', '2023-03-10');

-- --------------------------------------------------------

--
-- Table structure for table `universities`
--

CREATE TABLE `universities` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `universities`
--

INSERT INTO `universities` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Politeknik Negeri Surabaya', '2023-03-17', '2023-03-20'),
(2, 'Universitas Internasional Batam', '2023-03-17', '2023-03-17'),
(3, 'Universitas Maritim Raja Ali Haji', '2023-03-17', '2023-03-17'),
(5, 'Universitas Indonesia', '2023-03-20', '2023-03-20'),
(6, 'Universitas Ibnu Sina', '2023-03-24', '2023-03-24');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nik`, `name`, `email`, `password`, `verified`, `roles_id`, `createdAt`, `updatedAt`) VALUES
(219, '1111111111111111', 'restu yulia syahfitri', 'restuyuliasyahfitri@gmail.com', '$2a$10$h4nve7qmPp/Iwcekv1.UNOR.yPsek9YNJPvJHha.d4J.QBCNwquFK', 1, 3, '2023-01-18 10:32:49', '2023-02-06 14:41:58'),
(222, '1231231231231233', 'Angga Patrio', 'anggapatrio@gmail.com', '$2a$10$3q.xbZqUBQ8MPKFTB1mDG.HIzKem5lvJYm3u6/6nVihf8WK80pLGy', 1, 3, '2023-01-27 09:58:44', '2023-03-10 14:26:37'),
(223, '2123123123123123', 'Arjuna', 'arjunawibowo6@gmail.com', '$2a$10$XhNskpOgnCQtOvkc5nYhauva2Miw.VutXOD0/MVf.1jO1JBcwuwyi', 1, 2, '2023-02-03 13:52:33', '2023-02-03 13:52:33'),
(228, '1231231234567890', 'Putra Gabriel', 'putra.gabriell27@gmail.com', '$2a$10$HFRsuWW83pueUITWiME1NeNpxjivn1bb5JGs9FmXchpG.sDHe8l4S', 1, 3, '2023-03-14 11:07:38', '2023-03-14 11:08:56'),
(229, '0909090909090909', 'Mad', 'madanmr86@gmail.com', '$2a$10$/ZMmePKDU1FXnMdRJrEbW.bG413lnLrvzSsqBYLoWpfGLgIR4UvPi', 1, 1, '2023-03-15 10:49:48', '2023-03-15 11:25:24'),
(230, '1231231231231212', 'Muhammad Ramadhan', 'madanmr68@gmail.com', '$2a$10$ZUZc445dyJrYXGnIPr/YqOHps3YfFKVGokbVqdWDDSPV153zgl6Oa', 1, 3, '2023-03-15 14:43:34', '2023-03-30 15:19:00'),
(232, '2222222222222222', 'madan', 'madanmr48@gmail.com', '$2a$10$zyE/F.1flQysuJllZX54Yu1GWnckGtX/eTbzyk9gv6nJQfZCcEKzy', 1, 2, '2023-03-30 14:39:00', '2023-03-30 14:39:00');

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
-- Indexes for table `interviewer`
--
ALTER TABLE `interviewer`
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
-- Indexes for table `president_text`
--
ALTER TABLE `president_text`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profile_company`
--
ALTER TABLE `profile_company`
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
-- Indexes for table `sws`
--
ALTER TABLE `sws`
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
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applicants`
--
ALTER TABLE `applicants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT for table `certifications`
--
ALTER TABLE `certifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT for table `interviewer`
--
ALTER TABLE `interviewer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `majors`
--
ALTER TABLE `majors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `president_text`
--
ALTER TABLE `president_text`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `profile_company`
--
ALTER TABLE `profile_company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `selections`
--
ALTER TABLE `selections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=303;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `sws`
--
ALTER TABLE `sws`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `universities`
--
ALTER TABLE `universities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=233;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
