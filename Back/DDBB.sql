DROP SCHEMA IF EXISTS registre;
CREATE SCHEMA registre;

USE registre;


CREATE TABLE IF NOT EXISTS `registre`.`usuari` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(63) NOT NULL,
  `creat_date` DATETIME(1)  DEFAULT CURRENT_TIMESTAMP,
  `modificat_date` DATETIME(1) ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
  )
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `registre`.`tasques` (
  `id_tasca` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,

  `dades` VARCHAR(255) ,
  
  `creat_date` DATETIME(1)  DEFAULT CURRENT_TIMESTAMP,
  `modificat_date` DATETIME(1) ON UPDATE CURRENT_TIMESTAMP,
  
  PRIMARY KEY (`id_tasca`)
  CONSTRAINT `foreign_key`
    FOREIGN KEY (`user_id`)
    REFERENCES `registre`.`usuari` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)

  )
ENGINE = InnoDB;

