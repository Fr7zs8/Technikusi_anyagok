/// <reference types="cypress" />

import { response } from "express";

describe('Root get teszt', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains("Fut a szerver")
  })
});

describe('GET /dogs token nélkül tiltva van-e', () => {
  beforeEach(() => {
    cy.task("resetDb");
  });

  it('403-at dob token nélkül', () => {
    cy.request({
      method: "GET",
      url: "/dogs",
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(403);
    });
  });
});

describe("JWT tokenes /dogs végpont tesztelése", () => {
  before(() => {
    cy.task("resetDb");

    cy.request("POST", "/user/login", {
      email: "teszt1@gmail.com",
      password: "titok"
    }).then((response) => {
      console.log("LOGIN RESPONSE:", response.body);
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("token");
      cy.wrap(response.body.token).as("jwtToken");
    });
  });

  it("sikeres lekérés JWT tokennel", function () {
    cy.request({
      method: "GET",
      url: "/dogs",
      headers: {
        "x-access-token": `${this.jwtToken}`
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
    });
  });
});

//GET getDataFromId() összes végkimenetel
describe('GET lekérések a dogra csak egy elemnél', () => {
  before(() => {
    cy.task("resetDb");
  });

  it('Lekérem a dogot az 1 es id-val ami létezik', () => {
    cy.request('/dogs/1').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body[0]).to.have.property('id', 1)
    })
  });

  it('Lekérem a dogot a 89-es rossz id-val', () => {
    cy.request({
      method: "GET",
      url: "/dogs/89",
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404)
      expect(response.body).to.contain("Nincs ilyen elem")
    })
  });

  it('Lekérem a dogot a szöveges-es id-val', () => {
    cy.request({
      method: "GET",
      url: "/dogs/abch",
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body).to.have.property(
        "message",
        "Hibás formátumú azonosító!"
      );
    })
  });
})

describe("POST töltés a dogs-ba", () => {
  before(() => {
    cy.task("resetDb");
  });

  it("Sikeres adatrögzités", () => {
    cy.request({
      method: "POST",
      url: "/dogs",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body:{
        name: "Kutyika",
        breed: "keverék",
        gender: 1,
        age: 3,
        picurl: "xyz"
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(201);
    })
  })
})

// describe("File lekérések", () => {
//   before(() => {
//     cy.request("POST", "/user/login", {
//       email: "teszt1@gmail.com",
//       password: "titok"
//     }).then((response) => {
//       console.log("LOGIN RESPONSE:", response.body);
//       expect(response.status).to.eq(200);
//       expect(response.body).to.have.property("token");
//       cy.wrap(response.body.token).as("jwtToken");
//     });
//   });
//   })

//   it("Sikeresen fel tölt egy filet", function () {
//     cy.fixture('tesztfile.txt', 'utf-8').then(fileContent => {
//       cy.request({
//         method: 'POST',
//         url: '/file/upload',
//         body: fileContent,
//         headers: {
//           "x-access-token": `${this.jwtToken}`,
//           'Content-Type': 'multipart/form-data'
//         },
//         encoding: 'binary'
//       }).then((response) => {
//         expect(response.status).to.eq(201);
//       })
//       })
    
//   })

//   it('Lekérem a fileokat helyesen', function () {
//     cy.request({
//       method: "GET",
//       url: "/files",
//       failOnStatusCode: false,
//       headers: {
//         "x-access-token": `${this.jwtToken}`
//       }
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//       expect(response.body[0]).to.have.property('name')
//       expect(response.body[0]).to.have.property('url')
//     })
//   });

//   it('Fileok letöltése', function () {
//     cy.request({
//       method: "GET",
//       url: "/file/1",
//       failOnStatusCode: false,
//       headers: {
//         "x-access-token": `${this.jwtToken}`
//       }
//     }).then((response) => {
//       expect(response.status).to.eq(500);
//       expect(response.body).to.have.property('error');
//       expect(response.body.error).to.include('A file nem tölthető le.');
//     })
//   })

//   it('Sikeresen letölti a fájlt', function () {
//     const filename = 'test.txt'; 

//     cy.request({
//       method: 'GET',
//       url: `/file/${filename}`,
//       encoding: 'binary',
//       headers:{
//         "x-access-token": `${this.jwtToken}`
//       }
//     }).then((res) => {
//       expect(res.status).to.eq(200);
//       expect(res.body.length).to.be.greaterThan(0);
//     });
//   });

  
