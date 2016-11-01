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

insert into mms.cities (name, region_id, latitude, longitude) values ('Blagoevgrad', 1, '42.0209', '23.0943'),('Burgas', 2, '42.5048', '27.4626'),('Dobrich', 3, '43.5726', '27.8273'),('Gabrovo', 4, '42.8742', '25.3187'),('Haskovo', 5, '41.9344', '25.5554'),('Kardzhali', 6, '41.6338', '25.3777'),('Kyustendil', 7, '42.2869', '22.6939'),('Lovech', 8, '43.1370', '24.7142'),('Montana', 9, '46.8797', '110.3626'),('Pazardzhik', 10, '42.1928', '24.3336'),('Pernik', 11, '42.6052', '23.0378'),('Pleven', 12, '43.4170', '24.6067'),('Plovdiv', 13, '42.1354', '24.7453'),('Razgrad', 14, '43.5337', '26.5411'),('Ruse', 15, '43.8356', '25.9657'),('Shumen', 16, '43.2712', '26.9361'),('Silistra', 17, '44.1147', '27.2672'),('Sliven', 18, '42.6817', '26.3229'),('Smolyan', 19, '41.5774', '24.7011'),('Sofia', 20, '42.6977', '23.3219'),('Samokov', 21, '42.3370', '23.5528'),('Botevgrad', 21, '42.9077', '23.7934'),('Svoge', 21, '42.9621', '23.3439'),('Stara Zagora', 22, '42.4258', '25.6345'),('Targovishte', 23, '43.2494', '26.5727'),('Varna', 24, '43.2141', '27.9147'),('Veliko Tarnovo', 25, '43.0757', '25.6172'),('Vidin', 26, '43.9962', '22.8679'),('Vratsa', 27, '43.2102', '23.5529'),('Yambol', 28, '42.4842', '26.5035');

insert into mms.skills (name) values ('First Aid'), ('Rope Rescue'), ('GPS'), ('Logistics'), ('Planning'), ('Team Leader');

insert into mms.gear (name) values ('tent'), ('sleeping bag'), ('pots and pans'), ('head light'), ('rope'), ('car'), ('compass');