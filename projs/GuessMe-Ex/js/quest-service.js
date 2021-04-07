const KEY = 'quest';
var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;

function createQuestsTree() {
    gQuestsTree = getFromStorage();
    if (!gQuestsTree) initQuestsTree();
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
}

function initQuestsTree() {
    gQuestsTree = createQuest('Male?');
    gQuestsTree.yes = createQuest('Gandhi');
    gQuestsTree.no = createQuest('Rita');
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    gPrevQuest = gCurrQuest;
    gCurrQuest = gCurrQuest[res];
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
    gPrevQuest[lastRes] = {
        txt: newGuessTxt,
        yes: createQuest(newQuestTxt),
        no: gCurrQuest,
    }
    gCurrQuest = gQuestsTree
    gPrevQuest = null
    _saveQuestsToStorage()
}

function getCurrQuest() {
    return gCurrQuest;
}

function _saveQuestsToStorage() {
    saveToStorage(KEY, gQuestsTree);
}