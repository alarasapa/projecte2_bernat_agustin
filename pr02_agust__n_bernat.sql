-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-12-2020 a las 16:32:00
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
CREATE DATABASE IF NOT EXISTS `pr02_agustín_bernat` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `pr02_agustín_bernat`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `continents`
--

CREATE TABLE `continents` (
  `idContinent` int(10) UNSIGNED NOT NULL,
  `nom` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paisos`
--

CREATE TABLE `paisos` (
  `idPais` int(11) NOT NULL,
  `nom` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserves`
--

CREATE TABLE `reserves` (
  `idReserva` int(10) UNSIGNED NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `persones` varchar(4) DEFAULT NULL,
  `telefon` char(9) DEFAULT NULL,
  `preu` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `continents`
--
ALTER TABLE `continents`
  ADD PRIMARY KEY (`idContinent`);

--
-- Indices de la tabla `reserves`
--
ALTER TABLE `reserves`
  ADD PRIMARY KEY (`idReserva`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `continents`
--
ALTER TABLE `continents`
  MODIFY `idContinent` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reserves`
--
ALTER TABLE `reserves`
  MODIFY `idReserva` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
