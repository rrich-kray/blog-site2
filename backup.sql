-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: blog_db
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `user_id` int DEFAULT NULL,
  `post_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `post_id` (`post_id`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.',2,2,'2022-03-21 23:20:12','2022-03-21 23:20:12'),(2,'Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.',3,5,'2022-03-21 23:20:12','2022-03-21 23:20:12'),(3,'Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.',5,10,'2022-03-21 23:20:12','2022-03-21 23:20:12'),(4,'Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.',1,2,'2022-03-21 23:20:12','2022-03-21 23:20:12'),(5,'Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.',4,1,'2022-03-21 23:20:12','2022-03-21 23:20:12'),(6,'Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.',3,8,'2022-03-21 23:20:12','2022-03-21 23:20:12'),(7,'Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.',4,8,'2022-03-21 23:20:12','2022-03-21 23:20:12'),(8,'Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.',3,2,'2022-03-21 23:20:12','2022-03-21 23:20:12'),(9,'Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.',1,10,'2022-03-21 23:20:12','2022-03-21 23:20:12'),(10,'Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.',2,4,'2022-03-21 23:20:12','2022-03-21 23:20:12'),(11,'Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.',5,7,'2022-03-21 23:20:12','2022-03-21 23:20:12'),(12,'Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.',3,2,'2022-03-21 23:20:12','2022-03-21 23:20:12'),(13,'Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.',3,2,'2022-03-21 23:20:12','2022-03-21 23:20:12'),(14,'Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.',1,2,'2022-03-21 23:20:12','2022-03-21 23:20:12'),(15,'Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.',5,1,'2022-03-21 23:20:12','2022-03-21 23:20:12');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `user_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'Commodo ipsum est cillum consectetur duis aute ex est enim.','Occaecat non pariatur et pariatur. Esse laboris est non qui est incididunt sit sunt sunt ipsum ipsum reprehenderit non commodo. Quis minim excepteur nisi reprehenderit ut. Consectetur minim ullamco aute ullamco ea in.','https://www.teahub.io/photos/full/52-526204_4k-hd-wallpapers-technology.jpg',3,'2022-03-21 23:20:12','2022-03-21 23:20:12'),(2,'Ullamco laboris esse minim qui.','\"Deserunt consectetur laborum Lorem veniam voluptate. Duis nostrud non magna eu eiusmod veniam cupidatat aute enim fugiat. Cupidatat incididunt ad non amet quis eu nostrud labore commodo aute eu fugiat eiusmod sint. Qui exercitation fugiat est qui commodo ad irure.\n    Sunt velit officia esse consequat reprehenderit do non irure eu consequat. Ea ea ullamco aliquip velit minim consectetur tempor dolore adipisicing duis reprehenderit deserunt. Irure cupidatat consequat adipisicing veniam Lorem. Ea eu mollit sunt esse eiusmod nulla et est irure est exercitation. Ut officia qui mollit ullamco aliquip pariatur ut. Et laboris velit incididunt reprehenderit excepteur esse adipisicing consectetur exercitation nostrud et velit aute dolor.\n    Minim est laboris anim ea duis nostrud magna non exercitation laborum cillum duis do ut. Dolor qui laboris voluptate culpa exercitation pariatur. Est est tempor est quis laborum duis fugiat ex deserunt excepteur consequat occaecat aliqua excepteur. Ex officia eiusmod mollit nisi pariatur ea minim duis tempor veniam enim Lorem. Fugiat sit laboris ut nulla.\n    Consectetur eiusmod laboris id nisi aliquip. Fugiat in laborum ipsum anim veniam aliquip ut ut magna anim Lorem labore nostrud do. Aliquip deserunt elit minim reprehenderit fugiat non ea cillum voluptate qui commodo et. Enim qui magna aliquip ipsum minim aute ex aliqua adipisicing minim tempor pariatur sint. Consequat reprehenderit minim ipsum aliqua nostrud.','https://www.teahub.io/photos/full/52-526204_4k-hd-wallpapers-technology.jpg',3,'2022-03-21 23:20:12','2022-03-21 23:20:12'),(3,'Ea officia tempor laboris esse qui.','Aliquip laborum ipsum amet exercitation ea ex nisi dolore Lorem. Commodo voluptate aliqua ex deserunt fugiat aliquip qui aliquip reprehenderit reprehenderit. Laboris ea commodo id do. Voluptate velit adipisicing duis incididunt officia irure. Est duis qui amet ut. Proident aute enim fugiat aliqua adipisicing eu nisi amet. Aliqua exercitation id elit occaecat deserunt veniam.','https://www.teahub.io/photos/full/52-526204_4k-hd-wallpapers-technology.jpg',5,'2022-03-21 23:20:12','2022-03-21 23:20:12'),(4,'Ex magna voluptate excepteur proident.','Ex anim minim sint mollit eu velit occaecat Lorem anim in aliquip voluptate magna et. Anim ea ullamco adipisicing in voluptate officia in. Non non aliquip sunt eu consequat reprehenderit commodo tempor deserunt dolor sint consequat. Voluptate id fugiat minim amet amet aliquip eiusmod cillum in proident exercitation. Commodo non labore velit voluptate duis occaecat officia non aliqua enim laboris consectetur ut. Laborum occaecat aliqua nostrud quis ullamco aute et elit esse esse velit. Ut dolore adipisicing incididunt sit.\nFugiat do sunt eiusmod amet irure consectetur. Irure pariatur mollit laboris cupidatat esse mollit ullamco eu deserunt nisi irure. Est adipisicing id anim sint exercitation ex cillum nulla. Voluptate veniam nisi ea occaecat cillum cillum aliquip veniam. Aliqua tempor voluptate laboris exercitation aliquip dolore Lorem labore sit velit.\nIrure commodo cillum nisi irure laborum veniam dolor culpa ea. Aute voluptate anim dolore elit ullamco nostrud commodo excepteur. Occaecat do in minim commodo ex exercitation. Nisi officia nisi voluptate laborum voluptate consectetur. Cupidatat dolor non labore dolore minim tempor ut nulla do laborum aliqua qui. Consectetur exercitation exercitation commodo velit mollit esse nulla tempor consectetur mollit eiusmod velit officia. Ullamco ipsum adipisicing ipsum exercitation culpa esse tempor magna do.\nQui reprehenderit non magna amet mollit sit. Enim ipsum labore Lorem ut irure pariatur do elit velit proident nulla amet. Eu elit ut officia nostrud dolore ea deserunt anim ipsum sit nulla. Quis consequat reprehenderit commodo sint laboris irure exercitation. Proident ex eiusmod labore exercitation incididunt culpa culpa veniam eiusmod ad excepteur ex Lorem proident.\nSit aute velit id ea occaecat. Ad culpa fugiat enim laboris ad culpa consequat. Mollit culpa proident veniam labore in elit culpa. Pariatur do irure et occaecat do reprehenderit sunt incididunt mollit adipisicing ea dolore et. Pariatur consequat et ad quis.\nNostrud do sit occaecat non mollit aute enim elit non qui. Tempor eu excepteur non aliqua non veniam fugiat elit. Sunt qui consequat eiusmod eiusmod excepteur magna labore sint nostrud. Irure culpa incididunt eu labore nulla consequat eiusmod deserunt ullamco ut magna consectetur. Irure esse tempor velit aliqua velit in duis fugiat amet et ex. Culpa enim duis aute Lorem cupidatat anim proident. Lorem id labore et velit aliquip laboris in magna labore veniam in.\nNisi veniam ullamco do ex nostrud elit ex do. Nostrud est qui incididunt irure. Ullamco nulla voluptate nisi elit anim dolore culpa incididunt. Veniam reprehenderit aliquip quis nostrud velit tempor cupidatat aute laborum Lorem amet minim cillum aute. Fugiat nisi Lorem consequat consectetur. Reprehenderit enim do aute incididunt culpa consequat quis aliqua ut. Est velit est mollit do cillum non et excepteur pariatur eiusmod nostrud ullamco mollit dolor.\nDolor qui culpa deserunt laborum mollit consequat incididunt. Minim ex esse occaecat ad amet. Qui sit commodo pariatur velit ea. Non proident tempor excepteur mollit dolore voluptate excepteur. Excepteur exercitation pariatur nulla culpa veniam sunt consequat cupidatat culpa exercitation proident. Irure amet incididunt in mollit occaecat aliqua nulla anim enim. Ex consequat consectetur magna laboris irure.','https://www.teahub.io/photos/full/52-526204_4k-hd-wallpapers-technology.jpg',2,'2022-03-21 23:20:12','2022-03-21 23:20:12'),(5,'Cupidatat duis excepteur consequat esse anim ea minim aute consectetur.','Dolor consectetur fugiat sit ex reprehenderit laborum laboris dolor Lorem incididunt non officia duis nisi. Consectetur commodo incididunt pariatur magna. Esse reprehenderit in sit sint tempor consequat eu dolor ut magna est tempor. Sint duis eiusmod consequat elit tempor fugiat sint qui aliquip et. Mollit aliqua ex commodo cillum amet sunt ut enim tempor. Duis exercitation mollit sunt eiusmod ea exercitation ipsum tempor esse dolore exercitation.','https://www.teahub.io/photos/full/52-526204_4k-hd-wallpapers-technology.jpg',4,'2022-03-21 23:20:12','2022-03-21 23:20:12'),(6,'Ex ad est aliqua commodo nisi culpa occaecat ea nostrud ad cupidatat.','Officia nulla amet dolore dolore. Exercitation laboris reprehenderit esse excepteur ipsum occaecat ea dolore. Ea enim deserunt in minim. Et incididunt aliquip veniam consequat consectetur reprehenderit voluptate exercitation minim. Tempor esse reprehenderit ipsum aliqua adipisicing ullamco ipsum. Nostrud proident quis minim quis nisi exercitation eiusmod anim Lorem mollit qui duis commodo. Aliquip elit culpa dolore elit.\nEnim anim ut officia laboris velit aute excepteur ea magna cupidatat excepteur. Elit est enim incididunt aliqua sint amet. Sint ut et deserunt dolor est.\nAdipisicing exercitation dolor magna in qui eiusmod eu minim duis nisi in Lorem reprehenderit cupidatat. Adipisicing occaecat dolor in laborum eiusmod sint aliquip anim. In minim ut mollit veniam. Exercitation Lorem consequat nulla ex amet eiusmod minim cupidatat est nostrud in quis nisi voluptate. Labore irure duis nulla duis amet aute nostrud veniam laboris qui incididunt culpa nostrud culpa. Duis eiusmod amet nisi excepteur proident aute. Adipisicing veniam veniam ipsum incididunt anim tempor irure eu.\nEa consectetur esse ipsum est laboris occaecat esse ipsum esse anim aute. Id eu Lorem enim do in pariatur quis enim tempor exercitation non. Dolore anim sunt magna ut mollit tempor irure velit ex do deserunt id id.','https://www.teahub.io/photos/full/52-526204_4k-hd-wallpapers-technology.jpg',1,'2022-03-21 23:20:12','2022-03-21 23:20:12'),(7,'Nisi ex consectetur ea dolor mollit pariatur consequat incididunt magna occaecat veniam adipisicing.','Excepteur enim aliquip aliqua ipsum tempor mollit aliqua aute duis qui exercitation do sunt. Aliquip do fugiat dolor non aute cillum duis. Voluptate minim et laboris anim anim. Ea est cillum aliqua non eu nostrud mollit velit in dolore nostrud elit non amet. Laborum exercitation anim deserunt aliquip ex qui magna tempor. Elit nostrud excepteur ullamco irure nostrud culpa culpa mollit amet aute incididunt. Exercitation pariatur laboris cillum aliqua.\nLorem irure quis id voluptate ea velit cupidatat ut elit. Laboris irure velit sunt sit consequat id veniam sit nisi eu Lorem. Anim deserunt aute commodo officia dolor tempor.\nVoluptate dolore pariatur incididunt amet deserunt pariatur aliqua. Sit enim proident aliqua velit incididunt Lorem aute exercitation eiusmod et non quis. Mollit amet elit incididunt sit sit amet. Qui ut sit ut amet. Ad in deserunt laborum veniam Lorem.\nNostrud nulla nisi commodo est cillum. Id qui deserunt ea labore consequat dolore. Occaecat fugiat mollit labore esse ex. Aute ullamco non magna id est eu. Laboris nostrud non ullamco elit sunt aliquip qui nisi commodo occaecat reprehenderit irure. Fugiat dolore magna velit id velit cillum. Eiusmod est proident laboris anim occaecat excepteur ad dolor duis consequat.\nLaborum sint anim in magna. Qui ut consectetur mollit sint esse culpa deserunt enim duis amet. Irure cupidatat duis id incididunt.','https://www.teahub.io/photos/full/52-526204_4k-hd-wallpapers-technology.jpg',3,'2022-03-21 23:20:12','2022-03-21 23:20:12'),(8,'Proident consequat est magna nulla incididunt et quis cupidatat.','Non ex non esse ad enim proident ipsum mollit cupidatat ullamco minim voluptate. Exercitation exercitation nostrud qui excepteur amet. Enim duis occaecat eiusmod consequat est dolor aliqua culpa mollit fugiat sint.','https://www.teahub.io/photos/full/52-526204_4k-hd-wallpapers-technology.jpg',5,'2022-03-21 23:20:12','2022-03-21 23:20:12'),(9,'In occaecat ut irure cillum sit excepteur duis aliqua in id veniam minim.','Esse cupidatat non minim occaecat ex in do ut aliqua.','https://www.teahub.io/photos/full/52-526204_4k-hd-wallpapers-technology.jpg',3,'2022-03-21 23:20:12','2022-03-21 23:20:12'),(10,'Occaecat ea et ex proident amet.','Voluptate et sunt aliqua irure irure ea exercitation ut. Labore adipisicing tempor duis esse et nulla est. Magna mollit cupidatat magna proident occaecat nulla esse nulla id. Velit incididunt nulla non exercitation nisi nulla aliquip. Id deserunt amet ea aute do aute id cillum reprehenderit proident mollit quis excepteur.','https://www.teahub.io/photos/full/52-526204_4k-hd-wallpapers-technology.jpg',3,'2022-03-21 23:20:12','2022-03-21 23:20:12');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('_oJqNWEyR1HvYQSnM7G8uPM_8t2VVata','2022-03-22 00:20:10','{\"cookie\":{\"originalMaxAge\":60000,\"expires\":\"2022-03-22T00:19:37.521Z\",\"httpOnly\":true,\"path\":\"/\"},\"user_id\":3,\"username\":\"user3\",\"loggedIn\":true}','2022-03-22 00:18:33','2022-03-22 00:19:10'),('I5rFDSsnNk8Bnt6Dh1X3Y7W31_o8dTnf','2022-03-22 01:25:30','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-03-19 00:53:03','2022-03-21 01:25:30'),('iTMPDZ698ntX2CoM9KlRQjrKCQDmxgFB','2022-03-22 00:19:33','{\"cookie\":{\"originalMaxAge\":60000,\"expires\":\"2022-03-22T00:19:33.640Z\",\"httpOnly\":true,\"path\":\"/\"}}','2022-03-22 00:18:33','2022-03-22 00:18:33'),('PRRGzCJiwvgYteodSKCjpM8ZJeeVv_17','2022-03-22 00:18:12','{\"cookie\":{\"originalMaxAge\":60000,\"expires\":\"2022-03-22T00:18:12.187Z\",\"httpOnly\":true,\"path\":\"/\"}}','2022-03-22 00:17:12','2022-03-22 00:17:12'),('Rjcc0keyM6WITltNQ9cUU0N7s7tqnrSQ','2022-03-22 00:17:04','{\"cookie\":{\"originalMaxAge\":60000,\"expires\":\"2022-03-22T00:16:57.599Z\",\"httpOnly\":true,\"path\":\"/\"},\"user_id\":3,\"username\":\"user3\",\"loggedIn\":true}','2022-03-22 00:15:47','2022-03-22 00:16:04'),('wC1xaILfPG-BmtwV9bwFnlfTE0XfBPox','2022-03-22 00:18:19','{\"cookie\":{\"originalMaxAge\":60000,\"expires\":\"2022-03-22T00:18:16.646Z\",\"httpOnly\":true,\"path\":\"/\"},\"user_id\":3,\"username\":\"user3\",\"loggedIn\":true}','2022-03-22 00:17:12','2022-03-22 00:17:19'),('yb4B-lYEVvNgDFvbELiwI4sJz1dZviRG','2022-03-22 00:26:07','{\"cookie\":{\"originalMaxAge\":60000,\"expires\":\"2022-03-22T00:26:07.814Z\",\"httpOnly\":true,\"path\":\"/\"}}','2022-03-22 00:25:07','2022-03-22 00:25:07');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `bio` text NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'user1','user1@gmail.com','password','Exercitation sunt sit ipsum fugiat elit sit. Adipisicing ut exercitation reprehenderit Lorem incididunt cupidatat ipsum. Minim nisi eu velit cillum amet quis aliquip deserunt voluptate deserunt ut. Deserunt ex aute pariatur cillum occaecat pariatur commodo laborum fugiat ut eiusmod exercitation esse consectetur. Non minim Lorem elit enim et aliqua culpa cupidatat exercitation cillum quis Lorem. Do velit quis nisi voluptate sunt voluptate consectetur.','2022-03-21 23:20:12','2022-03-21 23:20:12'),(2,'user2','user2@gmail.com','password','Laboris amet commodo est dolore dolor officia ad eiusmod reprehenderit veniam aute minim ut. Ullamco officia reprehenderit est eu qui. Voluptate anim culpa velit adipisicing enim ipsum qui enim ea duis. Est esse minim quis incididunt dolor quis voluptate nisi culpa excepteur aliquip. Minim laborum irure proident id nulla proident ullamco excepteur dolor nostrud. Irure adipisicing dolor consectetur deserunt.','2022-03-21 23:20:12','2022-03-21 23:20:12'),(3,'user3','user3@gmail.com','password','Commodo pariatur officia et magna aliqua ut tempor consequat. Tempor elit deserunt ea pariatur. Duis cupidatat in non labore amet tempor reprehenderit et nulla laboris cupidatat pariatur mollit ad. Quis consectetur ad nisi labore quis culpa deserunt consequat tempor excepteur aliqua anim. Magna et commodo ipsum enim sunt consequat. Cupidatat ipsum quis eu dolore cillum officia et sint exercitation mollit sint non non.','2022-03-21 23:20:12','2022-03-21 23:20:12'),(4,'user4','user4@gmail.com','password','Ut dolor pariatur aliqua consequat in culpa anim pariatur voluptate adipisicing pariatur laborum cupidatat. Do do eiusmod ea voluptate reprehenderit officia. Id ipsum esse ipsum non elit ut labore ipsum magna in. Do aliqua duis sit dolor est reprehenderit sunt adipisicing labore laborum ipsum qui velit. Nisi aliqua reprehenderit aliquip ut velit consequat exercitation sint id labore irure laborum. Mollit proident incididunt ad in dolore sunt officia dolore mollit esse anim mollit magna.','2022-03-21 23:20:12','2022-03-21 23:20:12'),(5,'user5','user5@gmail.com','password','Laborum ut ad labore eu nisi cupidatat fugiat sunt duis. Sint proident nisi minim duis labore voluptate nisi amet ullamco. Ullamco qui fugiat laborum excepteur incididunt minim magna. Est duis dolor cupidatat occaecat consectetur laboris commodo eiusmod mollit Lorem voluptate irure. Deserunt ad commodo tempor non sunt exercitation.','2022-03-21 23:20:12','2022-03-21 23:20:12');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-22  7:25:41
