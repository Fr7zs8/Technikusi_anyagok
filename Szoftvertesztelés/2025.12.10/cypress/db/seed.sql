SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS userFiles;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS files;
DROP TABLE IF EXISTS dog;

SET FOREIGN_KEY_CHECKS = 1;


create table dog (id int AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100) not null, breed VARCHAR(100) not null, gender BOOLEAN default false, age INT, picurl VARCHAR(255));

INSERT INTO dog  VALUES
(NULL, 'Mendy', 'keverék', 0, 3, 'https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/mendy20251.jpg'),
(NULL, 'Zsazsa', 'keverék', 0, 11, 'https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/zsazsa20251.jpg'),
(NULL, 'Bobi', 'pekingi palotakutya', 1, 11, 'https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/bobi20251.jpg'),
(NULL, 'Figura', 'mudi keverék', 1, 1, 'https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/figura20251.jpg'),
(NULL, 'Harcos', 'németjuhász keverék', 1, 1, 'https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/harcos20242.jpg'),
(NULL, 'Liza', 'rottweiler keverék', 0, 12, 'https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/liza20251.jpg'),
(NULL, 'Csöpi', 'keverék', 1, 8, 'https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/csopi20244.jpg'),
(NULL, 'Briós', 'keverék', 0, 7, 'https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/brios20245.jpg');


CREATE Table files (
    fileId VARCHAR(255) not NULL PRIMARY KEY UNIQUE,
    fileName VARCHAR(255) not NULL,
    uploadTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
    mineType VARCHAR(100),
    fileSize INTEGER not NULL
);

create table users (id int AUTO_INCREMENT PRIMARY key,
email varchar(100) not null UNIQUE,
password varchar(255) not null, avatar Varchar(255),
FOREIGN KEY (avatar) REFERENCES files(fileId) on delete CASCADE);

CREATE Table userFiles(
    userId INT not NULL,
    fileId VARCHAR(255),
    Foreign Key (fileId) REFERENCES files(fileId) on delete CASCADE,
    Foreign Key (userId) REFERENCES users(id) on delete CASCADE
);

DROP Function IF EXISTS pwd_encrypt;

create FUNCTION pwd_encrypt(pwd varchar(100))
RETURNS VARCHAR(255) DETERMINISTIC
RETURN SHA2(concat(pwd,'sozas'),256);

DROP TRIGGER IF EXISTS insert_user;

create trigger insert_user BEFORE insert on users
for each row set new.password = pwd_encrypt(new.password);


DROP FUNCTION IF EXISTS login;

create function login(email VARCHAR(100),pwd VARCHAR(100))
RETURNS integer DETERMINISTIC
BEGIN
declare ok integer;
set ok = 0;
select id into ok from users where users.email = email and users.password =  pwd_encrypt(pwd);
RETURN ok;
End;


INSERT INTO users
VALUES(null, "teszt1@gmail.com", "titok", null),
(null, "teszt2@gmail.com", "jelszo", null);

