
-- -----------------------------------------------------
-- Schema qztech_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema qztech_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `qztech_db` DEFAULT CHARACTER SET utf8 ;
USE `qztech_db` ;

-- -----------------------------------------------------
-- Table `qztech_db`.`usersRol`
-- -----------------------------------------------------


CREATE TABLE `usersRol` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roltype` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) 



-- -----------------------------------------------------
-- Table `qztech_db`.`image`
-- -----------------------------------------------------


CREATE TABLE `image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(45) NOT NULL,
  `description` varchar(600) DEFAULT NULL,
  PRIMARY KEY (`id`)
) 

-- -----------------------------------------------------
-- Table `qztech_db`.`users`
-- -----------------------------------------------------



CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(400) NOT NULL,
  `isverified` tinyint(4) DEFAULT NULL,
  `userrolid` int(11) DEFAULT NULL,
  `socialid` int(11) DEFAULT NULL,
  `provider` varchar(45) DEFAULT NULL,
  `imageid` int(11) DEFAULT NULL,
  `active` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userrolid_idx` (`userrolid`),
  KEY `imageid_idx` (`imageid`),
  CONSTRAINT `imageid` FOREIGN KEY (`imageid`) REFERENCES `image` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `userrolid` FOREIGN KEY (`userrolid`) REFERENCES `usersrol` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) 


-- -----------------------------------------------------
-- Table `qztech_db`.`usersContact`
-- -----------------------------------------------------
CREATE TABLE `userscontact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `country` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `street` varchar(45) NOT NULL,
  `number` int(11) NOT NULL,
  `floor` varchar(45) DEFAULT NULL,
  `phonenumber` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userid_idx` (`userid`),
  CONSTRAINT `userid` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) 


-- -----------------------------------------------------
-- Table `qztech_db`.`productsType`
-- -----------------------------------------------------

CREATE TABLE `productstype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(45) NOT NULL,
  `detail` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) 

-- -----------------------------------------------------
-- Table `qztech_db`.`products`
-- -----------------------------------------------------


CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `productstypeid` int(11) DEFAULT NULL,
  `description` varchar(600) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `potency` int(11) DEFAULT NULL,
  `autonomy` int(11) DEFAULT NULL,
  `security` varchar(45) DEFAULT NULL,
  `active` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `producttypeid_idx` (`productstypeid`),
  CONSTRAINT `producttypeid` FOREIGN KEY (`productstypeid`) REFERENCES `productstype` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) 



-- -----------------------------------------------------
-- Table `qztech_db`.`orders`
-- -----------------------------------------------------



CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderuserid` int(11) NOT NULL,
  `orderproductid` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `datecreated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orderproductid_idx` (`orderproductid`),
  KEY `orderuserid_idx` (`orderuserid`),
  CONSTRAINT `orderproductid` FOREIGN KEY (`orderproductid`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `orderuserid` FOREIGN KEY (`orderuserid`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) 


-- -----------------------------------------------------
-- Table `qztech_db`.`ordersState`
-- -----------------------------------------------------



CREATE TABLE `ordersstate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ordersid` int(11) NOT NULL,
  `confirmed` int(11) DEFAULT NULL,
  `departure` int(11) DEFAULT NULL,
  `delivery` int(11) DEFAULT NULL,
  `payed` int(11) DEFAULT NULL,
  `cancel` int(11) DEFAULT NULL,
  `departuredate` datetime DEFAULT NULL,
  `confirmationdate` datetime DEFAULT NULL,
  `deliverydate` datetime DEFAULT NULL,
  `canceldate` datetime DEFAULT NULL,
  `methodpayment` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ordersid_idx` (`ordersid`),
  CONSTRAINT `ordersid` FOREIGN KEY (`ordersid`) REFERENCES `orders` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) 



-- -----------------------------------------------------
-- Table `qztech_db`.`productsStock`
-- -----------------------------------------------------



CREATE TABLE `productsstock` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stockproductid` int(11) NOT NULL,
  `availability` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `stockproductid_idx` (`stockproductid`),
  CONSTRAINT `stockproductid` FOREIGN KEY (`stockproductid`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) 


-- -----------------------------------------------------
-- Table `qztech_db`.`productImage`
-- -----------------------------------------------------



CREATE TABLE `productimage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prodid` int(11) NOT NULL,
  `type` varchar(45) NOT NULL,
  `imagid` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `prodid` (`prodid`),
  KEY `imagid` (`imagid`),
  CONSTRAINT `imagid` FOREIGN KEY (`imagid`) REFERENCES `image` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `prodid` FOREIGN KEY (`prodid`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) 



