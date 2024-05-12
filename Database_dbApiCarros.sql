-- Criando a database
create database dbApiCarros;

-- Colocando a database em uso
use dbApiCarros;

-- Criando a tabela de carro com os campos codigo que sera auto preenchido pelo mySql, modelo e placa do carro.
create table carros (
	codigo int primary key auto_increment,
    modelo varchar(30),
    placa varchar(7)
);

-- Inserindo dados na tabela
INSERT INTO carros (modelo, placa) VALUES 
('Toyota Corolla', 'ABC1234'),
('Ford Fiesta', 'XYZ5678'),
('Chevrolet Cruze', 'JKL9012'),
('Volkswagen Golf', 'MNO3456'),
('Hyundai Sonata', 'PQR7890'),
('Nissan Sentra', 'STU2468'),
('BMW 3 Series', 'VWX1357'),
('Mercedes-Benz C-Class', 'YZA8642'),
('Audi A4', 'BCD9753'),
('Kia Optima', 'EFG3184');

-- Verificando o conteúdo insrido na tabela carros
select * from carros;

-- Selecionado por conteúdo especifico para teste somente
SELECT * FROM carros WHERE placa = 'EVA4931';

