describe('Root get teszt', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains("Fut a szerver")
  })
})

describe('dog get teszt', () => {
  it('passes', () => {
    cy.request('http://localhost:3000/dogs').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an("array")
    })
    
  })
})

describe('dog get by id teszt', () => {
  it('passes', () => {
    cy.request('http://localhost:3000/dogs/1').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body[0]).to.have.property('id', 1)
    })
  })
})

describe('dog delete', () => {
  it('passes', () => {
    cy.request('http://localhost:3000/dogs/1').then((response) => {
      expect(response.status).to.eq(200)
      
    })
  })
})

describe('dog put', () => {
  it('passes', () => {
    cy.request('http://localhost:3000/dogs/1').then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})

describe('dog patch', () => {
  it('passes', () => {
    cy.request('http://localhost:3000/dogs/1').then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})

describe('dog post', () => {
  it('passes', () => {
    cy.request('http://localhost:3000/dogs').then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})