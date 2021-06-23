-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-06-2021 a las 20:13:50
-- Versión del servidor: 10.4.18-MariaDB-
-- Versión de PHP: 8.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `adopcion`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `cedula_admin` int(30) NOT NULL,
  `correo_admin` varchar(45) NOT NULL,
  `contrasena_admin` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas_revision`
--

CREATE TABLE `citas_revision` (
  `Id_Mascotas` int(11) NOT NULL,
  `documento` int(11) NOT NULL,
  `fecha_cita` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascotas`
--

CREATE TABLE `mascotas` (
  `Id_mascotas` int(11) NOT NULL,
  `nombre_mascota` varchar(20) NOT NULL,
  `raza` varchar(20) NOT NULL,
  `sexo_mascota` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascotas_estraviadas`
--

CREATE TABLE `mascotas_estraviadas` (
  `id_mascotas_estraviadas` int(155) NOT NULL,
  `nombre_mascotas_estraviadas` varchar(30) NOT NULL,
  `raza_mascotas_estraviadas` varchar(50) NOT NULL,
  `sexo_mascotas_estraviadas` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `documento` int(11) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `telefono` int(10) NOT NULL,
  `correo_electronico` varchar(60) NOT NULL,
  `fecha_de_nacimiento` date NOT NULL,
  `direccion` varchar(40) NOT NULL,
  `contrasena` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`documento`, `nombre`, `telefono`, `correo_electronico`, `fecha_de_nacimiento`, `direccion`, `contrasena`) VALUES
(0, '', 0, '', '0000-00-00', '', '$2a$08$m0BxIzpqcKMPC8bMZ9KovOXuBUroiN5tMe4jcLfO0hyDvDs7EcVcW'),
(12323, '', 0, 'feasa@gmail.com', '0000-00-00', '', '$2a$08$VjTMAsSbGBIHn8ieCZJlUOzMCxqZUMwej2OaqZlpeZRAh8AP2TYNG'),
(3232323, 'mlosss', 544545, 'fwfwf@hbhbc.com', '2000-02-01', 'wefef', '$2a$08$0gbSOtQrsyZwSZEEZAxGROb5r/r2AytvIrS/uu.t9GIbIpPld8/UK');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`cedula_admin`);

--
-- Indices de la tabla `citas_revision`
--
ALTER TABLE `citas_revision`
  ADD KEY `Id_Mascotas` (`Id_Mascotas`),
  ADD KEY `documento` (`documento`);

--
-- Indices de la tabla `mascotas`
--
ALTER TABLE `mascotas`
  ADD PRIMARY KEY (`Id_mascotas`);

--
-- Indices de la tabla `mascotas_estraviadas`
--
ALTER TABLE `mascotas_estraviadas`
  ADD PRIMARY KEY (`id_mascotas_estraviadas`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`documento`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrador`
--
ALTER TABLE `administrador`
  MODIFY `cedula_admin` int(30) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mascotas`
--
ALTER TABLE `mascotas`
  MODIFY `Id_mascotas` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `citas_revision`
--
ALTER TABLE `citas_revision`
  ADD CONSTRAINT `citas_revision_ibfk_1` FOREIGN KEY (`Id_Mascotas`) REFERENCES `mascotas` (`Id_mascotas`) ON UPDATE CASCADE,
  ADD CONSTRAINT `citas_revision_ibfk_2` FOREIGN KEY (`documento`) REFERENCES `usuario` (`documento`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
