const { checkOperator, FormatNumbers } = require('../src/index')
const chai = require('chai');
const expect = chai.expect

describe("Test Formatting", function(){
    it("Test Format Phone Numbers", function(){
        expect(FormatNumbers('0111123123')).to.be.equal('254111123123')
    })
    it("Test Invalid Format Phone Numbers", function(){
        expect(FormatNumbers('1111123123')).to.be.equal('Invalid Phone Number 1111123123')
    })
})

describe("Test ISP/MVNO", function(){
    it("Test Safaricom", function(){
        expect(checkOperator(FormatNumbers('0711123123'))).to.be.equal('Safaricom')
    })
    it("Test Airtel", function(){
        expect(checkOperator(FormatNumbers('0735123123'))).to.be.equal('Airtel')
    })
    it("Test Telkom", function(){
        expect(checkOperator(FormatNumbers('0773123123'))).to.be.equal('Telkom')
    })
    it("Test Equitel", function(){
        expect(checkOperator(FormatNumbers('0763123123'))).to.be.equal('Equitel')
    })
    it("Test Faiba4g", function(){
        expect(checkOperator(FormatNumbers('0747123123'))).to.be.equal('Faiba4g')
    })
})

describe("Test Failing Phone Formatting", function(){
    it("Test Failing on Invalid Format Phone Numbers", function(){
        expect(FormatNumbers('1111123123')).to.be.equal('Invalid Phone Number 1111123123')
    })
})

describe("Failing ISP/MVNO", function(){
    it("Test Invalid Safaricom Phone Numbers", function(){
        expect(FormatNumbers('5111123123')).to.be.equal('Invalid Phone Number 5111123123')
    })
    it("TestInvalid Telkom Phone Numbers", function(){
        expect(FormatNumbers('1773123123')).to.be.equal('Invalid Phone Number 1773123123')
    })
    it("Test Invalid Airtel Phone Numbers", function(){
        expect(FormatNumbers('1733123123')).to.be.equal('Invalid Phone Number 1733123123')
    })
    it("Test Invalid Equitel Phone Numbers", function(){
        expect(FormatNumbers('1763123123')).to.be.equal('Invalid Phone Number 1763123123')
    })
    it("Test Invalid Faiba4g Phone Numbers", function(){
        expect(FormatNumbers('2747111123123')).to.be.equal('Invalid Phone Number 2747111123123')
    })
})