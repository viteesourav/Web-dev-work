insert into user_details(id, name, birth_date)
values(10001, 'tester1', current_date());

insert into user_details(id, name, birth_date)
values(10002, 'tester2', current_date());

insert into user_details(id, name, birth_date)
values(10003, 'tester3', current_date());

insert into post(id, description, user_id) values
(20001, 'This is a test desc1', 10001),
(20002, 'This is a test desc2', 10001),
(20003, 'This is a test desc3', 10001),
(20004, 'This is a test desc4', 10002),
(20005, 'This is a test desc5', 10002);