var autoBasics ={}
module.exports ={
    beforeEach: browser => {
        autoBasics = browser.page.autoBasicsObjects()
        autoBasics.navigate()
    },
    after: browser => {
        autoBasics.end()
    },
    '': browser => {
        autoBasics
            
    }
}