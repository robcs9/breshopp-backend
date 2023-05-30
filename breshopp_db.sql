create table HISTORICO (
	
);
create table USUARIO(
	id int auto_increment primary key not null,
    email varchar(30) UNIQUE not null,
    cargo varchar(15) not null,
    nome varchar(30) not null,
    sobrenome varchar(30) not null,
    cpf int UNIQUE not null,
    celular int not null,
    senha varchar(30) not null,
    biografia varchar(150),
    localizacao varchar(30),
    especialidades varchar(50),
    anotacoes varchar(200),
    foto blob
    -- contadores para vendas e trocas?
);

-- create table MEMBRO();
-- create table ADMINISTRADOR();
create table PUBLICACAO(
	id int auto_increment
	titulo varchar(20) not null,
    
);
create table CATEGORIA();