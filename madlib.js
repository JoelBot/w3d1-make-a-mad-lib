// BZZZZ.  The scene is set on a dreary Monday morning at predawn.  (Pan from empty coffee pot to dirty dishes in a disheveled stack next to sink.)  Lighting is faint, but the image is clear.  BZZZZ.  Our hero flails to find the enemy, the source of this misery.  (Pan opposite directino across toothbrush/shaving equipment, past bathroom sink, to bathtub with curtain drawn partway.) BZZZZ.  Dilemma crosses their mind, from "dismiss" to "snooze"? (pan across cloths hanging in closet with hung shirts at odd angles and in conflicting directions) BZZZZ.  Finger hovers from one choice to the other (left to right, pause, right to left, pause).  BZZZZ.  (Pan past shuttered window with barely visible light creaping in as sun considers rising) ... (finger swipe, silence) ... (cut to loose hand with open palm, pan to phone displaying 10 minute snooze timer.  Pan and fade) ...


var sound = 'fart'
var dayOfWeek = 'Tuesday'
var aTimeOfDay = '11am'
var noun1 = 'car'
var noun2 = 'beer'
var noun3 = 'house'
var wordLikeNemesis = 'Genesis'
var wordForPainOrTorment = 'tickle'
var bathroomItem1 = 'toilet'
var bathroomItem2 = 'sink'
var bathroomItem3 = 'bath robe'
var bathroomItem4 = 'razor'
var toEndOrTerminate = 'quit'
var postponeOrDelay = 'wait'
var noun4 = 'boy'
var noun5 = 'Trump'
var noun6 = 'pussycat'
var action = 'fire'
var exclamation = 'America is Great!'
var isTrue = true;

//
// var sound = 'BZZZZ'
// var dayOfWeek = 'Monday'
// var aTimeOfDay = 'morning'
// var noun1 = 'coffee pot'
// var noun2 = 'dirty dishes'
// var noun3 = 'sink'
// var wordLikeNemesis = 'enemy'
// var wordForPainOrTorment = 'misery'
// var bathroomItem1 = 'toothbrush'
// var bathroomItem2 = 'shaving'
// var bathroomItem3 = 'bathroom sink'
// var bathroomItem4 = 'bathtub'
// var toEndOrTerminate = 'dismiss'
// var postponeOrDelay = 'snooze'
// var noun4 = 'clothes'
// var noun5 = 'shirts'
// var noun6 = 'window'
// var action = 'high-five'
// var isTrue = true;
// var isTrue = false; //for testing

var chooseAdventure = (isTrue ? `(cut to steamed mirror, past new ${noun2}, to sunlit sidewalk and our heroes back as they ${action} a passing stranger.) End scene with a shout, "${exclamation}"` : `(cut to loose hand with open palm, pan to phone displaying 10 minute snooze timer.  Pan and fade)`);

var story = `${sound}.  The scene is set on a dreary ${dayOfWeek} ${aTimeOfDay} at predawn.  (Pan from empty ${noun1} to ${noun2} in a disheveled stack next to ${noun3}.)  The lighting is faint, but the image is clear.  ${sound}.  Our hero flails to find the ${wordLikeNemesis}, the source of this ${wordForPainOrTorment}.  (Pan opposite direction across ${bathroomItem1}/${bathroomItem2} equipment, past ${bathroomItem3} sink, to ${bathroomItem4} with curtain drawn partway.) ${sound}.  Dilemma crosses their mind, from "${toEndOrTerminate}" to "${postponeOrDelay}"? (pan across ${noun4} hanging in closet with hung ${noun5} at odd angles and in conflicting directions) ${sound}.  Finger hovers from one choice to the other (left to right, pause, right to left, pause).  ${sound}.  (Pan past shuttered ${noun6} with barely visible light creaping in as sun considers rising) ... (finger swipe, silence) ... ${chooseAdventure}`

console.log(story)
