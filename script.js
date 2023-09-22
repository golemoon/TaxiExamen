let santeMentale = 10;
let nbEssais = 0;
var TableauMusic = ['Melodie', 'Napoli', 'Loves', 'Sonorité', 'Flashback', 'Anissa'];

function Feuxrouges(Rouge){
    nbEssais++;
    var rand = Math.random()*Rouge.length | 0;
    var rValue = Rouge[rand];

  if (rValue === 'Melodie' && 'Napoli' && 'Loves' && 'Sonorité' && 'Flashback') {
    santeMentale += 0; 
  } else if (rValue === 'Anissa') {
    santeMentale -= 1; 
  } 
  console.log(`La musique qui passe a la radio est`+ ' ' + rValue +'.');
}
  
  
  while (santeMentale > 0 && nbEssais < 30) {
    const porte = Feuxrouges(TableauMusic);
    console.log(`. Alexandre il vous reste ${30 - nbEssais} feux rouge.`);
  }
  
  if (santeMentale > 0) {
    console.log(`. Il vous a donc fallut ${10 - santeMentale} changements de taxi pour y arriver.`);}
    else if (santeMentale <= 0){
            console.log('explosion')
        }