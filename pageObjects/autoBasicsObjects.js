module.exports ={
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
        //Evens and Odds
        evenOddBox: {
            selector: '//*[@class="puzzleBox evenAndOddPB"]',
            locateStrategy: 'xpath'
        },
        evenOddTitle: {
            selector: '(//h4)[1]',
            locateStrategy: 'xpath'
        },
        evenOddInput: '[name="evenOddInput"]',
        evenOddBtn: '[name="evenOddButton"]',
        evenRslt: '[name="evenResults"]',
        oddRslt: '[name="oddResults"]',


        //Filter Object
        filterObjBox: {
            selector: '//*[@class="puzzleBox filterObjectPB"]',
            locateStrategy: 'xpath'
        },
        filterObjTitle: {
            selector: '(//h4)[2]',
            locateStrategy: 'xpath'
        },
        filterObjText: '[name="objectFilterObjects"]',
        filterObjInput: '[name="objectFilterInput"]',
        filterObjBtn: '[name="objectFilterButton"]',
        filterObjRslt: '[name="objectFilterResults"]',


        //Filter String
        nameFiltBox: {
            selector: '//*[@class="puzzleBox filterStringPB"]',
            locateStrategy: 'xpath'
        },
        nameFiltTitle: {
            selector: '(//h4)[3]',
            locateStrategy: 'xpath'
        },
        nameFiltText: '[name="nameFilterNames"]',
        nameFiltInput: '#nameFilterInput',
        nameFiltBtn: '#nameFilterButton',
        nameFiltRslt: '[name="nameFilterResults"]',


        //Palindrome
        palBox: {
            selector: '//*[@class="puzzleBox palindromePB"]',
            locateStrategy: 'xpath'
        },
        palTitle: {
            selector: '(//h4)[4]',
            locateStrategy: 'xpath'
        },
        palInput: '[name="palindromeInput"]',
        palBtn: '[name="palindromeButton"]',
        palRslt: '[name="palindromeResults"]',


        //Sum
        sumBox: {
            selector: '//*[@class="puzzleBox sumPB"]',
            locateStrategy: 'xpath'
        },
        sumTitle: {
            selector: '(//h4)[5]',
            locateStrategy: 'xpath'
        },
        sumInput1: '[name="sumInput1"]',
        sumInput2: '[name="sumInput2"]',
        sumBtn: '[name="sumButton"]',
        sumRslt: '[name="sumResults"]',

        //Puzzle Field (Contains all puzzles)
        puzzleField: '.puzzleFeed',

        //Contains Root
        root: '#root'
    }
}