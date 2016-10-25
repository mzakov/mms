insert into mms.users (first_name, family_name, login, password, e_mail, phone, language, enabled) values ('Martin', 'ZAKOV', 'Martin', 'password', 'steve.jobs@apple.com', '0033 1 23 45 67 89', 'en', true);
insert into mms.users (first_name, family_name, login, password, e_mail, phone, language, enabled) values ('test', 'TEST', 'test', 'test', 'bill.gates@microsoft.com', '0033 1 23 45 67 89', 'fr', true);

insert into mms.authority (name) values ('admin');
insert into mms.authority (name) values ('technical user');
insert into mms.authority (name) values ('user');

insert into mms.users_authority (id_user, id_authority) values (1, 1);
insert into mms.users_authority (id_user, id_authority) values (1, 2);
insert into mms.users_authority (id_user, id_authority) values (1, 3);
insert into mms.users_authority (id_user, id_authority) values (2, 3);

insert into mms.members (first_name, middle_name, last_name) values ('Martin', ' ', 'Zakov'), ('Vasil', ' ', 'Gourev'), ('Ivan', ' ', 'Slavchev'), ('Denica', ' ', 'Nikolaeva'), ('Plamen', ' ', 'Veselinov'), ('Martin', ' ', 'Jordanov'), ('Viktoria', ' ', 'Antonova');

insert into mms.regions (name) values ('Blagoevgrad'),('Burgas'),('Dobrich'),('Gabrovo'),('Haskovo'),('Kardzhali'),('Kyustendil'),('Lovech'),('Montana'),('Pazardzhik'),('Pernik'),('Pleven'),('Plovdiv'),('Razgrad'),('Ruse'),('Shumen'),('Silistra'),('Sliven'),('Smolyan'),('Sofia City'),('Sofia (province)'),('Stara Zagora'),('Targovishte'),('Varna'),('Veliko Tarnovo'),('Vidin'),('Vratsa'),('Yambol');

insert into mms.cities (name, region_id) values ('Blagoevgrad', 1),('Burgas', 2),('Dobrich', 3),('Gabrovo', 4),('Haskovo', 5),('Kardzhali', 6),('Kyustendil', 7),('Lovech', 8),('Montana', 9),('Pazardzhik', 10),('Pernik', 11),('Pleven', 12),('Plovdiv', 13),('Razgrad', 14),('Ruse', 15),('Shumen', 16),('Silistra', 17),('Sliven', 18),('Smolyan', 19),('Sofia', 20),('Samokov', 21),('Botevgrad', 21),('Svoge', 21),('Stara Zagora', 22),('Targovishte', 23),('Varna', 24),('Veliko Tarnovo', 25),('Vidin', 26),('Vratsa', 27),('Yambol', 28);

insert into mms.skills (name) values ('First Aid'), ('Rope Rescue'), ('GPS'), ('Logistics'), ('Planning'), ('Team Leader');

insert into mms.gear (name) values ('tent'), ('sleeping bag'), ('pots and pans'), ('head light'), ('rope'), ('car'), ('compass');