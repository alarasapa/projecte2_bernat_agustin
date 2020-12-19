-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-12-2020 a las 16:05:14
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pr02_agustín_bernat`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserves`
--

CREATE TABLE `reserves` (
  `idReserva` int(10) UNSIGNED NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `persones` varchar(4) DEFAULT NULL,
  `telefon` char(9) DEFAULT NULL,
  `preu` float DEFAULT NULL,
  `data` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reserves`
--

INSERT INTO `reserves` (`idReserva`, `nom`, `persones`, `telefon`, `preu`, `data`) VALUES
(1, 'prova', '1', '123456789', 100, '2020-12-03'),
(2, 'otrapurbue', '2', '123456789', 200, '2020-12-09'),
(3, 'qqqqqqqqq', '1', '123456789', 100, '2020-12-10'),
(4, 'qa', '1', '123456789', 100, '2020-12-10'),
(5, 'q', '1', '123456789', 100, '2020-12-01'),
(6, 'cdcd', '1', '123456789', 100, '2020-11-19'),
(7, 'qqqqeeghtrbrtbvrtr', '1', '123456789', 80, '2020-09-17'),
(8, '11q1q1', '1', '123456789', 100, '2020-12-30'),
(9, 'otraaaaaa', '1', '123456789', 80, '2020-12-02');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `reserves`
--
ALTER TABLE `reserves`
  ADD PRIMARY KEY (`idReserva`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `reserves`
--
ALTER TABLE `reserves`
  MODIFY `idReserva` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
