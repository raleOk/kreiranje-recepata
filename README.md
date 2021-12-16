Programerski zadatak.
Od dependencies pored react koristim json-server i random-token.
Oba su u package.json file-u, i instalirace se preko npm install.
Takodje uneti komande:
json-server --watch db.json --port 3000
json-server --watch db.recipe-db.json --port 8080
Da bi server znao da prati i salje pozive bazi.

Aplikacija koristi json-server library na kom se nalaze 2 baze podataka, na jednoj su korisnici a na drugoj su recepti.
Kada se registruje nov korisnik, automacki se doda u bazu podataka, i login proverava da li korisnik koji pokusava da se uloguje u njoj postoji.
Menjanje lozinke radi, ali informacije o novoj lozinki se ne salju i ne menjaju u bazi, vec ih samo prikazujem na ekranu.
Random token library koristim samo da dodam string slican tokenu u headers.

Recepte koji su u bazi izlistavam na ekranu, forma za nov recept skupi sve informaciju u formatu u kojem treba da se nalaze, i te informacije stavljam u state i console.log()-ujem.
Forma za dodavanje recepata i menjanje vec postojecih su ista komponenta koja se conditionally renderuje u edit ili new recipe modu.
Zbog limitacija laznog servera, ne mogu da udjem u bazu i update-ujem editovan recept, i imao sam problema sa renderovanjem strane nakon sto dodam nov.
Ima logike koju nisam stigao da uradim, delete recipe, iz istih razloga. Nisam uspeo da laznom server-u kazem da izbaci podatak iz baze.
