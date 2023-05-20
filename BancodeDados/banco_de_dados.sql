create database dbz;
use dbz;
drop database dbz;

create table personagemFavorito(
idpersonagemFavorito int primary key auto_increment,
nome varchar(20)
);

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
confirmar_senha varchar(45),
fkpersonagemFavorito int,
constraint fkpersonagemFavorito foreign key (fkpersonagemFavorito) 
references personagemFavorito(idpersonagemFavorito)
);


select * from usuario;

select * from personagemFavorito;

