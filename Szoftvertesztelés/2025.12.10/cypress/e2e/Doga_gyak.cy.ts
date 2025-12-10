/// <reference types="cypress"/>

describe('Root endpoint teszt', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains("Fut a szerver")
  })
})

describe("Dog endpoint teszts", () => {
  before(() => {
    cy.request("POST", "/user/login", {
      email: "teszt1@gmail.com",
      password: "titok"
    }).then((respoense) => {
      console.log("Login response: ", respoense.body);
      expect(respoense.status).to.eq(200);
      expect(respoense.body).to.have.property("token");
      cy.wrap(respoense.body.token).as("jwtToken");
    });
  });


  it("Get all dogs", function () {
    cy.request({
      method: "GET",
      url: "/dogs",
      headers:{
        "x-access-token": `${this.jwtToken}`
      }
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
    })
  })

  it("Get one dog", function () {
    cy.request({
      method:"GET",
      url:"/dogs/2",
      headers: {
        "x-access-token": `${this.jwtToken}`
      }
    }).then(res => {
      expect(res.status).to.eq(200);
      expect(res.body[0]).to.have.property("id", 2);
    })
  })

  it("Get one dog with string", function () {
    cy.request({
      method: "GET",
      url: "dogs/abcd",
      headers:{
        "x-access-token": `${this.jwtToken}`
      },
      failOnStatusCode: false
    }).then(res => {
      expect(res.status).to.eq(400);
      expect(res.body.message).to.eq("Hibás formátumú azonosító!")
    })
  })

  it("Get dog with not exist id", function () {
    cy.request({
      method: "GET",
      url: "/dogs/455",
      headers:{
        "x-access-token": `${this.jwtToken}`
      },
      failOnStatusCode: false
    }).then(res => {
      expect(res.status).to.eq(404);
      expect(res.body).contains("Nincs ilyen elem")
    })

  })

  it("Post dogs", function () {
    cy.intercept('POST', '/dogs', {
      statusCode: 201,
      body: "Sikeres adatrőgzités az id-ja : 999"
    }).as('postDog')

    cy.request({
      method: "POST",
      url: "/dogs",
      headers:{
        "Content-Type": "application/json",
        "x-access-token": `${this.jwtToken}`
      },
      body:{
        name: "Bodrika",
        breed: false,
        age: 1,
        picurl: "xyz"
      }
    }).then(res => {
      expect(res.status).to.eq(201);
      expect(res.body).include("Sikeres adatrőgzités az id-ja :")
    })
  })

  it("Post dogs with incomplete datas", function () {
    cy.request({
      method: "POST",
      url: "/dogs",
      headers:{
        "Content-Type": "application/json",
        "x-access-token": `${this.jwtToken}`
      },
      body:{
        name: "",
        breed: false,
        age: 1,
        picurl: "xyz"
      },
      failOnStatusCode: false
    }).then(res => {
      expect(res.status).to.eq(400);
      expect(res.body).to.have.property("error", 400, "message")
    })
  })

it("Post and delete dog", function () {
  cy.intercept('POST', '/dogs', {
    statusCode: 201,
    body: "Sikeres adatrőgzités az id-ja : 999"
  }).as('postDog')


  cy.intercept('DELETE', '/dogs/999', {
  statusCode: 204,
  body: "Sikeres törölt 1 elemet"
}).as('deleteDog')


  cy.request({
    method: "POST",
    url: "/dogs",
    headers:{
      "Content-Type": "application/json",
      "x-access-token": `${this.jwtToken}`
    },
    body:{
      name: "Bodrika",
      breed: false,
      age: 1,
      picurl: "xyz"
    }
  }).then(res => {
    expect(res.status).to.eq(201)
    expect(res.body).to.include("Sikeres adatrőgzités az id-ja :")

    cy.request({
      method: "DELETE",
      url: "/dogs/999",
      headers:{
        "x-access-token": `${this.jwtToken}`
      },
      failOnStatusCode: false
    }).then(delRes => {
      expect(delRes.status).to.eq(204)
      expect(delRes.body).to.eq("Sikeres törölt 1 elemet")
    })
  })
})



})