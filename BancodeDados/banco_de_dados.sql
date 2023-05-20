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
fkpersonagemFavorito int,
constraint fkpersonagemFavorito foreign key (fkpersonagemFavorito) 
references personagemFavorito(idpersonagemFavorito)
);


select * from usuario;

select * from personagemFavorito;

select count(fkpersonagemFavorito) as qtdPersonagens, personagemFavorito.nome from usuario 
right join personagemFavorito on idpersonagemFavorito = fkpersonagemFavorito group by personagemFavorito.nome order by qtdPersonagens desc;



insert into personagemFavorito values
	(1, 'Goku'),
	(2, 'Vegeta'),
	(3, 'Gohan'),
	(4, 'Piccolo');

INSERT INTO usuario (nome, email, senha, fkpersonagemFavorito) VALUES ('bruno', 'bruno@gmail.com', '123', 1);

truncate table usuario;

