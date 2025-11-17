CREATE TABLE pet (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nev VARCHAR(30),
    leiras VARCHAR(100),
    ar INT,
    raktaron INT,
    kep VARCHAR(100)
)

INSERT INTO pet (nev, leiras, ar, raktaron, kep)
VALUES("Hörcsög", "Ez meg rágcsál", 10500, 5, "./pictures/horcsog.jpg ")

INSERT INTO pet (nev, leiras, ar, raktaron, kep)
VALUES("Tengeri malac", "Tengeri röfi", 6300, 8, "./pictures/tmalac.jpg "),
("Madárpók", "Veszélyes madárpók", 80000, 3, "./pictures/madarpok.jpg "),
("Aranyhal", "Széparanyhal", 3500, 1, "./pictures/aranyhal.jpg ")

DELETE FROM pet WHERE id = 1

INSERT INTO pet (nev, leiras, ar, raktaron, kep)
VALUES("Tengeri malac", "Tengeri röfi", 6300, 8, "./pictures/tmalac.jpg ")

UPDATE pet SET nev = "Kutyus", raktaron = 3 WHERE id = 9