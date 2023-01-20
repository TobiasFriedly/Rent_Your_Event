-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Erstellungszeit: 20. Jan 2023 um 14:03
-- Server-Version: 10.3.31-MariaDB-0+deb10u1
-- PHP-Version: 7.0.33-57+0~20211119.61+debian10~1.gbp5d8ba5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `110018_2_1`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `event`
--

CREATE TABLE `event` (
  `ID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `bild` varchar(400) NOT NULL,
  `preis` varchar(100) NOT NULL,
  `ort` varchar(100) NOT NULL,
  `beschreibung` text NOT NULL,
  `user` int(11) NOT NULL,
  `timestamp` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Daten für Tabelle `event`
--

INSERT INTO `event` (`ID`, `name`, `bild`, `preis`, `ort`, `beschreibung`, `user`, `timestamp`) VALUES
(117, '80m2 Keller + stühle (Lärmgeschützt)', 'https://phx02pap002files.storage.live.com/y4maAT8akIH5BkXVPbzGvvOW7dptB3tWonROCF3hCBkKdJQIM7sRWSgvrO6coAoJvyp1Xt41LHCgOn6eAot0sd6DwNWwKrCUjOTZ83BLVWx6qGhPIxB7szR3o4EeJ8xqDCyG4apVoaMyBt4pmEBDiZxzjg53cH2aYXI6_9gUDVhdyjBZ2MjUdLFVEfQCTF8cjct?width=440&height=660&cropmode=none', '250', 'Zürich', ' Tis es quo moluptibus consecto odiata ', 52, '2023-01-15 21:39:42'),
(118, 'Gemütlicher Garten im Herzen von Bern', 'https://am3pap003files.storage.live.com/y4mjiZRn0y34hmps3qM5cB6d1CkHFG1yJ4ZNzuF3aTbZtzW4EbM4pF3-Jlhqvr9PQ0znpnCaJXNZYDfrz6b6_z-0bTU7Vk0JZ40AsPGqfAPuoh0tuxq3MH1kshWFu6cPjmw2r-nH3eEZlPKr2kuF4fZbVUCKrOS9ieMesr3kQd3kNDof6KadV8VggXAtD98P6DW?width=1024&height=683&cropmode=none', '145', 'Bern', 'Das ist die perfekte Location für dein Gartenfest. Mit einer Fläche von 50 Quadratmeter bietet der Garten genug Platz für eine grössere Gesellschaft. Ein Grill ist zur Mitbenutzung vorhanden.', 53, '2023-01-15 23:08:35'),
(119, 'Dein perfekter Rave-Keller', 'https://img.zeit.de/kultur/2020-09/berghain-ausstellungshalle-berlin-neu/wide__1300x731', '450', 'Uster', ' In diesem Keller steht deinem Rave nichts mehr im Wege. Mit LED-Lichtern an der Decke und grossen Musikboxen hast du das perfekte Rave-Starter-Kit. Die nächsten Nachbarn sind etwas entfernt, die Lautstärke ist also kein Problem.', 54, '2023-01-15 23:14:39');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `session`
--

CREATE TABLE `session` (
  `ID` int(11) NOT NULL,
  `User_ID` int(11) NOT NULL,
  `Token` varchar(42) NOT NULL,
  `Timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `session`
--

INSERT INTO `session` (`ID`, `User_ID`, `Token`, `Timestamp`) VALUES
(172, 55, 'uP7MCBELPbbms5QkilmU1Z2kKyT2RBHWLHsBZtLfjU', '2023-01-19 21:45:36');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `user`
--

CREATE TABLE `user` (
  `ID` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `user`
--

INSERT INTO `user` (`ID`, `username`, `email`, `password`) VALUES
(52, 'Tobi', 'tobimail', '$2y$10$bc9axLLTOLl2ZnyTwfqHoeY5bu8p6tPbpyEEZN.rmJaFY2Wiw.eKW'),
(53, 'pingu', 'pingu@wasser.net', '$2y$10$zGit09HAcKWbRjx.TLtfuu3.wy1YSr21VQbPbwX1ctFTdNiyTMOwe'),
(54, 'Baum', 'baum@baum.net', '$2y$10$AcHPx/qCyl.rTamAUXuGEuXqiAWHd/cT.PGsEu2w48cp2TcqMR.B6'),
(55, 'tobii', 'tobimail1', '$2y$10$mkMbY/P4M5C8aaqEfpJFS.dEd2psIC5zwN5vBmmXzgebqmINo/0iK');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `stadt` (`ort`),
  ADD KEY `user` (`user`);

--
-- Indizes für die Tabelle `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `session_userid` (`User_ID`);

--
-- Indizes für die Tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `event`
--
ALTER TABLE `event`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;
--
-- AUTO_INCREMENT für Tabelle `session`
--
ALTER TABLE `session`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=173;
--
-- AUTO_INCREMENT für Tabelle `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
