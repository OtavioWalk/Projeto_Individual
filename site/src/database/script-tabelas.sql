-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE psblog;
USE psblog;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

insert into usuario values (null, 'Marileny','marileny@gmail.com', 54321),
						   (null, 'Carlos','carlos@gmail.com', 54321),
						   (null, 'Arthur','arthur@gmail.com', 12345),
						   (null, 'Otávio', 'otavio@gmail.com', 12345);

select * from usuario;


CREATE TABLE Telefone (
	idtelefone int primary key auto_increment,
	fkUsuario int,
    telefone varchar(45),
    foreign key (fkUsuario) references usuario(id)
);

select* from telefone;


create table Resultado (
	idResultado int primary key auto_increment,
	fkUsuario int,
    Resultado varchar(45),
    foreign key (fkUsuario) references usuario(id)
);

insert into Resultado values (null,1,'Aloy'),
							  (null,2,'Kratos'),
							  (null,3,'Deacon'),
							  (null,4,'Jim Sakai'),
                              (null,1,'Aloy'),
							  (null,2,'Kratos'),
							  (null,3,'Deacon'),
							  (null,4,'Jim Sakai'),
                              (null,1,'Aloy'),
							  (null,2,'Kratos');

select * from Resultado;


SELECT COUNT(*) AS Quantidade FROM Resultado
WHERE Resultado IN ('Aloy', 'Kratos', 'Deacon', 'Jim Sakai')
GROUP BY Resultado;





drop table Resultado;
drop table usuario;
drop table telefone;













-- CREATE TABLE aviso (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	titulo VARCHAR(100),
-- 	descricao VARCHAR(150),
-- 	fk_usuario INT,
-- 	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
-- );

-- create table aquario (
-- /* em nossa regra de negócio, um aquario tem apenas um sensor */
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	descricao VARCHAR(300)
-- );

-- /* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

-- create table medida (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	dht11_umidade DECIMAL,
-- 	dht11_temperatura DECIMAL,
-- 	luminosidade DECIMAL,
-- 	lm35_temperatura DECIMAL,
-- 	chave TINYINT,
-- 	momento DATETIME,
-- 	fk_aquario INT,
-- 	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
-- );


