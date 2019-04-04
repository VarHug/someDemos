var eCardSuit;
(function (eCardSuit) {
    eCardSuit[eCardSuit["Clubs"] = 1] = "Clubs";
    eCardSuit[eCardSuit["Diamonds"] = 3] = "Diamonds";
    eCardSuit[eCardSuit["Hearts"] = 4] = "Hearts";
    eCardSuit[eCardSuit["Spades"] = 7] = "Spades";
})(eCardSuit || (eCardSuit = {}));
var eCard = eCardSuit.Clubs;
var eLie = 0 /* False */;
var multipleEnum;
(function (multipleEnum) {
    multipleEnum[multipleEnum["A"] = 0] = "A";
    multipleEnum[multipleEnum["B"] = 1] = "B";
    multipleEnum[multipleEnum["C"] = 2] = "C";
})(multipleEnum || (multipleEnum = {}));
(function (multipleEnum) {
    multipleEnum[multipleEnum["D"] = 1] = "D";
})(multipleEnum || (multipleEnum = {}));
