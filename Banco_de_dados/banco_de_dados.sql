create database dbz;
use dbz;
drop database dbz;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
confirmar_senha varchar(45)
);

select * from usuario;