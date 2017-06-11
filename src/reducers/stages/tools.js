let SUCCESS = 1;
let FAILURE = -1;
let UNUSED = 0;
let USED = 1;

export { SUCCESS };
export { FAILURE };
export { UNUSED };
export { USED };

isAlive = (character, state) => {
  for(let card of state.cards){
    if(card.role === character){
      return card.alive;
    }
  }
  return false;
}

export { isAlive }

isWakeable = (character, state) => {
  return isAlive(character, state) && (state.inPrison === undefined || state.inPrison.role !== character);
}

export { isWakeable }

isCardWakeable = (card, state) => {
  return card.alive && (state.inPrison === undefined || state.inPrison.role !== card.role);
}

export { isCardWakeable }

factionMembersAlive = (faction, state) => {
  let counter = 0;
  for(let card of state.cards){
    if(card.faction === faction && card.alive){
      counter++;
    }
  }
  return counter;
}

export { factionMembersAlive }

factionMembersWakeable = (faction, state) => {
  let counter = 0;
  for(let card of state.cards){
    if(card.faction === faction && card.alive && state.inPrison !== card.role){
      counter++;
    }
  }
  return counter;
}

export { factionMembersWakeable }

banditsAlive = (state) => {
  return factionMembersAlive('bandits', state);
}

export { banditsAlive }

indiansAlive = (state) => {
  return factionMembersAlive('indians', state);
}

export { indiansAlive }

citizensAlive = (state) => {
  return factionMembersAlive('citizens', state);
}

export { citizensAlive }

banditsWakeable = (state) => {
  return factionMembersWakeable('bandits', state);
}

export { banditsWakeable }

indiansWakeable = (state) => {
  return factionMembersWakeable('indians', state);
}

export { indiansWakeable }

citizensWakeable = (state) => {
  return factionMembersWakeable('citizens', state);
}

export { citizensWakeable }

getFactionMembers = (faction, state) => {
  let array = []
  for(let card of state.cards){
    if(card.faction === faction && card.alive && (state.inPrison === undefined || state.inPrison.role !== card.role)){
      array.push(card);
    }
  }
  return array;
}

export { getFactionMembers }

let getMenu = (state) => {
  return {
    ...state,
    step: 'MENU',
    last_state: state
  }
}

export { getMenu }

let menu = (state, action) => {
  switch (action.type) {
    case 'RETURN':
      return {
        ...state.last_state
      }
    default:
      return state
  }
}

export { menu }


let isInExcept = (character, except) => {
  for(let e of except){
    if(e.role === character){
      return true;
    }
  }
  return false;
}

export { isInExcept }

let selectFromWakeableExcept = (except, state) => {
  return state.cards.filter((card) => {
    return isCardWakeable(card, state) && !isInExcept(card.role, except);
  });
  //return selectFrom;
}

export { selectFromWakeableExcept }

let getCardByRole = (cards, role) => {
  for(let card of cards){
    if(card.role === role){
      return card;
    }
  }
}

export { getCardByRole }

let killByRole = (role, state) => {
  return {
    ...state,
    cards: state.cards.map((card) => {
      if (card.role === role) {
        return {
          ...card,
          alive: false
        }
      } else {
        return card
      }
    })
  }
}

export { killByRole }
