CREATE TABLE USERS (id int not null auto_increment, first_name varchar(255), last_name varchar(255), primary key (id), unique key (first_name, last_name), password varchar(255), email varchar(255);
