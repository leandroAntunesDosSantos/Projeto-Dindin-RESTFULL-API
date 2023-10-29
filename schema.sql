create database dindin;

create table usuarios (
  id serial primary key,
  nome text,
  email text unique,
  senha text
  );

create table categorias (
	id serial primary key, 
	descricao text
);

create table transacoes (
  id serial primary key, 
  descricao text, 
  valor integer, 
  data text,
  categoria_id integer not null references categorias(id), 
  usuario_id integer not null references usuarios(id), 
  tipo text
);

insert into categorias 
(descricao)
values
('Alimentação'),
('Assinaturas e Serviços'),
('Casa'),
('Mercado'),
('Cuidados Pessoais'),
('Educação'),
('Família'),
('Lazer'),
('Pets'),
('Presentes'),
('Roupas'),
('Saúde'),
('Transporte'),
('Salário'),
('Vendas'),
('Outras receitas'),
('Outras despesas');


