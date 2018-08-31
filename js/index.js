var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var quoteList = { "quotes": [
    {
        "quote": "If God exists, why are there ugly people in the world?",
        "author": "Derek Zoolander" },

    {
        "quote": "Sometimes cucumber taste better pickeled.",
        "author": "Dave Chappelle" },

    {
        "quote": "Jesus wept.",
        "author": "The Bible" },

    {
        "quote": "The inner machinations of my mind are an enigma.",
        "author": "Patrick" },

    {
        "quote": "What killed the dinosaurs...? THE ICE AGE!",
        "author": "Arnold Schwarzeneggar as Mr. Freeze in THE MEGA SUPER SUMMER MOVIE BLOCKBUSTER SMASH HIT: Batman and Robin" },

    {
        "quote": "Hyou loose.",
        "author": "Mickey Rourke" },

    {
        "quote": "Be assertive NOT INSERTIVE!",
        "author": "Plankton" },

    {
        "quote": "Cool party.",
        "author": "Arnold Scharzenneggar as Mr. Freeze in THE MEGA SUPER SUMMER MOVIE BLOCKBUSTER SMASH HIT: Batman and Robin" },

    {
        "quote": "You miss a hundred percent of the shots you don't take.",
        "author": "An Alcoholic" },

    {
        "quote": "Nothing means nothing.",
        "author": "The Macho Man Randy Savage" },

    {
        "quote": "If everybody love each other, the world would be a better place.",
        "author": "Tommy Wiseau" },

    {
        "quote": "Well that's just like your opinion, man.",
        "author": "Jeff Bridges" },

    {
        "quote": "I don't want no trouble",
        "author": "Jackie Chan" },

    {
        "quote": "Remember, licking doorknobs can be illegal on other planets.",
        "author": "SpongeBob" },

    {
        "quote": "FINLAND!",
        "author": "Patrick" },

    {
        "quote": "I said she was the bomb!",
        "author": "Chris Tucker" },

    {
        "quote": "They're breakdance fighting!",
        "author": "Mugatu" },

    {
        "quote": "Ocelot.",
        "author": "Ashley Schaeffer" },

    {
        "quote": "Please clap.",
        "author": "Jeb Bush" },

    {
        "quote": "I'm talking about a place called Aspen.",
        "author": "Jim Carrey" },

    {
        "quote": "You're not sending me to the cooler.",
        "author": "Arnold Schwarzeneggar as Mr. Freeze in THE MEGA SUPER SUMMER MOVIE BLOCKBUSTER SMASH HIT: Batman and Robin" }] };




function getQuote() {
    var randomNumber = Math.floor(Math.random() * quoteList.quotes.length);
    var randomQuote = quoteList.quotes[randomNumber].quote;
    var randomAuthor = quoteList.quotes[randomNumber].author;
    document.getElementById('text').innerHTML = '\"' + randomQuote + '\"';
    document.getElementById('author').innerHTML = '-' + randomAuthor;
    var tweetQuote = randomQuote.split(' ').join('%20');
    tweetQuote = tweetQuote.split('<br>').join('');
    tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('\"').join('"');
    $('.twitter').attr('href', tweetQuote + ' -' + randomAuthor);
}

//React Component for Random Quote Generator Free Code Camp Project
var Title = function (_React$Component) {_inherits(Title, _React$Component);function Title() {_classCallCheck(this, Title);return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).apply(this, arguments));}_createClass(Title, [{ key: "render", value: function render()
        {
            return (
                React.createElement("div", null,
                    React.createElement("h1", { className: "title" }, "The Best Quotes Generator"),


                    React.createElement("hr", null)));

        } }]);return Title;}(React.Component);
;
ReactDOM.render(React.createElement(Title, null), document.getElementById('title'));var


QuoteBox = function (_React$Component2) {_inherits(QuoteBox, _React$Component2);function QuoteBox() {_classCallCheck(this, QuoteBox);return _possibleConstructorReturn(this, (QuoteBox.__proto__ || Object.getPrototypeOf(QuoteBox)).apply(this, arguments));}_createClass(QuoteBox, [{ key: "render", value: function render()
        {
            return (
                React.createElement("div", { id: "textBox" },
                    React.createElement("div", { id: "text", className: "quoteDisplay" }),


                    React.createElement("div", { id: "author", className: "quoteDisplay" })));




        } }]);return QuoteBox;}(React.Component);
;

ReactDOM.render(React.createElement(QuoteBox, null), document.getElementById('content'));var

Twitter = function (_React$Component3) {_inherits(Twitter, _React$Component3);function Twitter() {_classCallCheck(this, Twitter);return _possibleConstructorReturn(this, (Twitter.__proto__ || Object.getPrototypeOf(Twitter)).apply(this, arguments));}_createClass(Twitter, [{ key: "render", value: function render()
        {
            return (
                React.createElement("a", { id: "tweet-quote", className: "twitter", href: "https://twitter.com/intent/tweet?text=", "data-size": "large", target: "_blank" },
                    React.createElement("i", { className: "fa fa-twitter" })));


        } }]);return Twitter;}(React.Component);
;

ReactDOM.render(React.createElement(Twitter, null), document.getElementById('twitter'));


$(document).ready(function () {
    getQuote();
});