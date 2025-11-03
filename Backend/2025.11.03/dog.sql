CREATE Table dog(id int AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50) NOT NULL, breed VARCHAR(100) not NULL, gender BOOLEAN DEFAULT false, age int, picurl VARCHAR(255))


INSERT INTO dog
VALUES (null, "Mendy", "keverék", false, 3, "https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/mendy20251.jpg")

DELETE from dog

Alter Table dog AUTO_INCREMENT = 1

INSERT INTO dog
VALUES (null, "Mendy", "keverék", false, 3, "https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/mendy20251.jpg")

INSERT INTO dog
VALUES (null, "Zsazsa", "keverék", false, 11, "https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/zsazsa20251.jpg")

INSERT INTO dog
VALUES (null, "Bobi", "pekingi palotakutya", true, 11, "https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/bobi20251.jpg")

INSERT INTO dog
VALUES (null, "Figura", "mudi keverék", true, 1, "https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/figura20251.jpg")

INSERT INTO dog
VALUES (null, "Harcos", "németjuhász keverék", true, 1, "https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/harcos20242.jpg")

INSERT INTO dog
VALUES (null, "Liza", "rottweiler keverék", false, 12, "https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/liza20251.jpg")

INSERT INTO dog
VALUES (null, "Csöpi", "keverék", TRUE, 8, "https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/csopi20244.jpg")

INSERT INTO dog
VALUES (null, "Briós", "keverék", false, 7, "https://www.tappancs.hu/sites/default/files/styles/full_width_gallery/public/media/brios20245.jpg")