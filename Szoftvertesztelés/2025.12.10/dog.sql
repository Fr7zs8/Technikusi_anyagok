USE dog;
DROP Table dog;

CREATE Table dog(id int AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50) NOT NULL, breed VARCHAR(100) not NULL, gender BOOLEAN DEFAULT false, age int, picurl VARCHAR(255));
Alter Table dog AUTO_INCREMENT = 1;
alter Table dog MODIFY COLUMN gender TINYINT(1);
INSERT INTO dog 
VALUES (null, "Mendy", "keverék", false, 3, "https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/mendy20251.jpg"),
(null, "Zsazsa", "keverék", false, 11, "https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/zsazsa20251.jpg"),
(null, "Bobi", "pekingi palotakutya", true, 11, "https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/bobi20251.jpg"),
(null, "Figura", "mudi keverék", true, 1, "https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/figura20251.jpg"),
(null, "Harcos", "németjuhász keverék", true, 1, "https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/harcos20242.jpg"),
(null, "Liza", "rottweiler keverék", false, 12, "https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/liza20251.jpg"),
(null, "Csöpi", "keverék", TRUE, 8, "https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/csopi20244.jpg"),
(null, "Briós", "keverék", false, 7, "https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/brios20245.jpg");


CREATE Table users(id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(100) not null UNIQUE,
password VARCHAR(255) not null,
avatar Varchar(255),
FOREIGN KEY (avatar) REFERENCES files(fileId) on delete CASCADE);

drop table users;

ALTER TABLE users AUTO_INCREMENT = 1;



CREATE Table files (
    fileId VARCHAR(255) not NULL PRIMARY KEY UNIQUE,
    fileName VARCHAR(255) not NULL,
    uploadTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
    mineType VARCHAR(100),
    fileSize INTEGER not NULL
);

DROP Table files;

DELETE FROM files;

ALTER TABLE files ADD COLUMN mimeType VARCHAR(100);



CREATE Table userFiles(
    userId INT not NULL,
    fileId VARCHAR(255),
    Foreign Key (fileId) REFERENCES files(fileId) on delete CASCADE,
    Foreign Key (userId) REFERENCES users(id) on delete CASCADE
);

DROP Table userFiles;



CREATE Trigger inser_user BEFORE INSERT ON users
for each row set new.password = pwd_encrypt(new.password);

CREATE Function pwd_encrypt(pwd VARCHAR(100))
RETURNS VARCHAR(255) DETERMINISTIC
RETURN SHA2(concat(pwd, 'sozas'), 256);

CREATE Function login(email VARCHAR(100), pwd VARCHAR(100))
RETURNS INT DETERMINISTIC
BEGIN
    DECLARE ok INTEGER;
    SET ok = 0;
    SELECT id INTO ok FROM users WHERE users.email = email and users.password = pwd_encrypt(pwd);
    RETURN ok;
END;

drop TRIGGER inser_user;

SELECT login("teszt2@gmail.com", "jelszo")



INSERT INTO users
VALUES(null, "teszt1@gmail.com", "titok", null),
(null, "teszt2@gmail.com", "jelszo", null);