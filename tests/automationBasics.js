var autoBasics = {}

var evenTitle = 'Evens and Odds'
var filObTitle = 'Filter Object'
var filStrTitle = 'Filter String'
var palTitle = 'Palindrome'
var sumTitle = 'Sum'

module.exports = {
    beforeEach: browser => {
        autoBasics = browser.page.autoBasicsObjects()
        autoBasics.navigate()
    },
    after: browser => {
        autoBasics.end()
    },

    //Verifies Titles for Each Feature
    'Title Verification Test': browser => {
        autoBasics
            .verify.containsText('@evenOddTitle', evenTitle)

            .verify.containsText('@filterObjTitle', filObTitle)

            .verify.containsText('@nameFiltTitle', filStrTitle)

            .verify.containsText('@palTitle', palTitle)

            .verify.containsText('@sumTitle', sumTitle)
    },

    //Verifies text can be inputed for each feature
    'Input Field Test': browser => {
        autoBasics
            .setValue('@evenOddInput', '5')

            .setValue('@filterObjInput', 'name')

            .setValue('@nameFiltInput', 'James')

            .setValue('@palInput', 'racecar')

            .setValue('@sumInput1', '1')
            .setValue('@sumInput2', '2')

            .verify.valueContains('@evenOddInput', '5')
            .verify.valueContains('@filterObjInput', 'name')
            .verify.valueContains('@nameFiltInput', 'James')
            .verify.valueContains('@palInput', 'racecar')
            .verify.valueContains('@sumInput1', '1')
            .verify.valueContains('@sumInput2', '2')
    },
    //Verifies buttons submit text into the results field 
    'Button Test': browser => {
        autoBasics
            .setValue('@evenOddInput', '5')
            .click('@evenOddBtn')
            .verify.containsText('@oddRslt', '5')

            .setValue('@filterObjInput', 'name')
            .click('@filterObjBtn')
            .verify.containsText('@filterObjRslt', 'name')

            .setValue('@nameFiltInput', 'James')
            .click('@nameFiltBtn')
            .verify.containsText('@nameFiltRslt', 'James')

            .setValue('@palInput', 'racecar')
            .click('@palBtn')
            .verify.containsText('@palRslt', 'true')

            .setValue('@sumInput1', '1')
            .setValue('@sumInput2', '2')
            .click('@sumBtn')
            .verify.containsText('@sumRslt', '3')
    },
    //Verifies invalid inputs will be not be accepted
    'Invalid Input Test': browser => {
        autoBasics
            .setValue('@evenOddInput', 'b')
            .click('@evenOddBtn')
            .verify.not.containsText('@oddRslt', 'b')
            .verify.not.containsText('@evenRslt', 'b')
            .verify.containsText('@oddRslt', 'NaN')
            .verify.containsText('@evenRslt', 'NaN')

            .setValue('@filterObjInput', 'brown')
            .click('@filterObjBtn')
            .verify.not.containsText('@filterObjRslt', 'brown')

            .setValue('@nameFiltInput', 'sock')
            .click('@nameFiltBtn')
            .verify.not.containsText('@nameFiltRslt', 'sock')

            .setValue('@palInput', 'firetruck')
            .click('@palBtn')
            .verify.not.containsText('@palRslt', 'true')

            .setValue('@sumInput1', '2')
            .setValue('@sumInput2', '2')
            .click('@sumBtn')
            .verify.not.containsText('@sumRslt', '3')

            .clearValue('@sumInput1')
            .clearValue('@sumInput2')
            .setValue('@sumInput1', '2.2.2')
            .setValue('@sumInput2', '2.3')
            .click('@sumBtn')
            .verify.containsText('@sumRslt', 'NaN')
    },

    //Verifies Numeric Inputs with decimals for Evens and Odds and Sum
    'Decimal Input Test': browser => {
        autoBasics
            //BUG numbers with decimals cannot be odd or even
            //2 show in Even results
            .setValue('@evenOddInput', '2.5')
            .click('@evenOddBtn')
            .verify.not.containsText('@oddRslt', '2')
            .verify.not.containsText('@oddRslt', '2.5')
            .verify.not.containsText('@evenRslt', '2')
            .verify.not.containsText('@evenRslt', '2.5')

            .clearValue('@evenOddInput')
            .setValue('@evenOddInput', '4.4')
            .click('@evenOddBtn')
            .verify.not.containsText('@oddRslt', '4')
            .verify.not.containsText('@oddRslt', '4.4')
            .verify.not.containsText('@evenRslt', '4')
            .verify.not.containsText('@evenRslt', '4.4')

            //BUG Only adds the whole numbers and doesn't show decimal
            .setValue('@sumInput1', '1.5')
            .setValue('@sumInput2', '2')
            .click('@sumBtn')
            .verify.containsText('@sumRslt', '3.5')
            .verify.not.containsText('@sumRslt', '2')

            .clearValue('@sumInput1')
            .setValue('@sumInput1', '1.5')
            .clearValue('@sumInput2')
            .setValue('@sumInput2', '1.5')
            .click('@sumBtn')
            .verify.containsText('@sumRslt', '3')
            .verify.not.containsText('@sumRslt', '2')
    },

    //Verifies if capitalzation rules are in effect
    'Capitalization Test': browser => {
        autoBasics
            .setValue('@filterObjInput', 'Name')
            .click('@filterObjBtn')
            .expect.element('@filterObjRslt').text.equal('Filtered: []')

        autoBasics
            .setValue('@nameFiltInput', 'james')
            .click('@nameFiltBtn')
            .expect.element('@nameFiltRslt').text.equal('Filtered Names: []')
    },

    //Verifies empty input fields should result in empty results
    'Empty Fields Test': browser => {
        autoBasics
            //BUG Evens results show 'null' when empty field is submitted
            .click('@evenOddBtn')
            .expect.element('@evenRslt').text.equal('Evens: []')
        autoBasics
            .expect.element('@oddRslt').text.equal('Odds: []')

        autoBasics
            .click('@filterObjBtn')
            .expect.element('@filterObjRslt').text.equal('Filtered: []')

        autoBasics
            //BUG shows full list of names when empty input field is submitted
            .click('@nameFiltBtn')
            .expect.element('@nameFiltRslt').text.equal('Filtered Names: []')

        autoBasics
            //BUG results show true when empty field is submitted
            .click('@palBtn')
            .expect.element('@palRslt').text.equal('Palindrome: ')

        autoBasics
            //BUG results shows Sum: 0 when empty field is submited
            .click('@sumBtn')
            .expect.element('@sumRslt').text.equal('Sum: ')
    },

    //Verifies that only input field needs to be filled in Sum
    'Single Input Sum Test': broswer => {
        autoBasics
            .setValue('@sumInput1', '5')
            .click('@sumBtn')
            .pause(5000)
            .expect.element('@sumRslt').text.equal('Sum: 5')
        //BUG Automation test shows that first sum result gets added to the 2nd input
        //Manual test shows when 1st input is cleared and 2nd input is set, Results: NaN
        autoBasics
            .clearValue('@sumInput1')
            .pause(5000)
            .setValue('@sumInput2', '2')
            .click('@sumBtn')
            .pause(5000)
            .expect.element('@sumRslt').text.equal('Sum: 5')
    }
}