import AsyncStorage from '@react-native-community/async-storage';
import GlobalConst from '../config/GlobalConst';

const _keys = [
  GlobalConst.STORAGE_KEYS['PLAYER'],
  GlobalConst.STORAGE_KEYS['PLACE'],
  GlobalConst.STORAGE_KEYS['GAME_TYPE'],
  GlobalConst.STORAGE_KEYS['COMPETITION_TYPE'],
  GlobalConst.STORAGE_KEYS['LIMIT_TYPE'],
  GlobalConst.STORAGE_KEYS['BIG_BLIND'],
  GlobalConst.STORAGE_KEYS['SMALL_BLIND'],
  GlobalConst.STORAGE_KEYS['EFFECTIVE_STACK'],
  GlobalConst.STORAGE_KEYS['STANDARD_OPENING'],
  GlobalConst.STORAGE_KEYS['TIME_IN_GAME'],
  GlobalConst.STORAGE_KEYS['MENTAL_STATUS'],
  GlobalConst.STORAGE_KEYS['POSITION'],
  GlobalConst.STORAGE_KEYS['BET_SIZE_IN'],
  GlobalConst.STORAGE_KEYS['NOTE_TYPE'],
  GlobalConst.STORAGE_KEYS['WHICH_BET'],
  GlobalConst.STORAGE_KEYS['LAST_BET_SIZE'],
  GlobalConst.STORAGE_KEYS['LIMPERS_CALLERS'],
  GlobalConst.STORAGE_KEYS['STREET'],
  GlobalConst.STORAGE_KEYS['BET_PURPOSE'],
  GlobalConst.STORAGE_KEYS['BET_SIZE'],
  GlobalConst.STORAGE_KEYS['HAND_SEEN'],
  GlobalConst.STORAGE_KEYS['COMMENTS'],
  GlobalConst.STORAGE_KEYS['HEADLINE'],
  GlobalConst.STORAGE_KEYS['POT_SIZE']
];

export async function _storeData(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('Storage error:' + error);
  }
}

export async function _retrieveData(key){
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log('Error in retrieving:'+ error);
  }
};

export async function _retrieveMultipleData(){
  var keys = [];
  var values = [];
  for (let i = 0; i < arguments.length; ++i) keys[i] = arguments[i];
  try {
    const value = await AsyncStorage.multiGet(keys);
    if (value !== null) {
      for (let i = 0; i < value.length; ++i) {
        values.push( value[i][1] );
      }
      return values;
    }
  } catch (error) {
    console.log('Error in retrieving:'+ error);
  }
};

export async function _removeKeys(keys){
  try {
    const value = await AsyncStorage.multiRemove(_keys);
  } catch (error) {
    console.log('Error in retrieving:'+ error);
  }
};




export async function getSavedFlowData(index){
  const values = await _retrieveMultipleData(
    GlobalConst.STORAGE_KEYS['PLAYER'],
    GlobalConst.STORAGE_KEYS['PLACE'],
    GlobalConst.STORAGE_KEYS['GAME_TYPE'],
    GlobalConst.STORAGE_KEYS['COMPETITION_TYPE'],
    GlobalConst.STORAGE_KEYS['LIMIT_TYPE'],
    GlobalConst.STORAGE_KEYS['BIG_BLIND'],
    GlobalConst.STORAGE_KEYS['SMALL_BLIND'],
    GlobalConst.STORAGE_KEYS['EFFECTIVE_STACK'],
    GlobalConst.STORAGE_KEYS['STANDARD_OPENING'],
    GlobalConst.STORAGE_KEYS['TIME_IN_GAME'],
    GlobalConst.STORAGE_KEYS['MENTAL_STATUS'],
    GlobalConst.STORAGE_KEYS['POSITION'],
    GlobalConst.STORAGE_KEYS['BET_SIZE_IN'],
    GlobalConst.STORAGE_KEYS['NOTE_TYPE'],
    GlobalConst.STORAGE_KEYS['WHICH_BET'],
    GlobalConst.STORAGE_KEYS['LAST_BET_SIZE'],
    GlobalConst.STORAGE_KEYS['LIMPERS_CALLERS'],
    GlobalConst.STORAGE_KEYS['STREET'],
    GlobalConst.STORAGE_KEYS['BET_PURPOSE'],
    GlobalConst.STORAGE_KEYS['BET_SIZE'],
    GlobalConst.STORAGE_KEYS['HAND_SEEN'],
    GlobalConst.STORAGE_KEYS['COMMENTS'],
    GlobalConst.STORAGE_KEYS['HEADLINE'],
    GlobalConst.STORAGE_KEYS['POT_SIZE'],
  );

  let userFlowData = {
     dataFlow: true,
    'Player': values[0],
    'Place': values[1],
    'GameType': values[2],
    'CompeitionType': values[3],
    'LimitType': values[4],
    'BigBlind': values[5],
    'SmallBlind': values[6],
    'EffectiveStack': values[7],
    'StandardOpening': values[8],
    'TimeInGame': values[9],
    'MentalStatus': values[10],
    'Position': values[11],
    'BetSizeIn': values[12],
    'NoteType': values[13],
    'WhichBet': values[14],
    'LastBetSize': values[15],
    'LimpersCaller': values[16],
    'Street': values[17],
    'BetPurpose': values[18],
    'BetSize': values[19],
    'HandSeen': values[20],
    'Comments': values[21],
    'Headline': values[22],
    'PotSize': values[23],
  }

  return ( userFlowData )
}


export async function getAllKeys(){
  return([
    GlobalConst.STORAGE_KEYS['PLAYER'],
    GlobalConst.STORAGE_KEYS['PLACE'],
    GlobalConst.STORAGE_KEYS['GAME_TYPE'],
    GlobalConst.STORAGE_KEYS['COMPETITION_TYPE'],
    GlobalConst.STORAGE_KEYS['LIMIT_TYPE'],
    GlobalConst.STORAGE_KEYS['BIG_BLIND'],
    GlobalConst.STORAGE_KEYS['SMALL_BLIND'],
    GlobalConst.STORAGE_KEYS['EFFECTIVE_STACK'],
    GlobalConst.STORAGE_KEYS['STANDARD_OPENING'],
    GlobalConst.STORAGE_KEYS['TIME_IN_GAME'],
    GlobalConst.STORAGE_KEYS['MENTAL_STATUS'],
    GlobalConst.STORAGE_KEYS['POSITION'],
    GlobalConst.STORAGE_KEYS['BET_SIZE_IN'],
    GlobalConst.STORAGE_KEYS['NOTE_TYPE'],
    GlobalConst.STORAGE_KEYS['WHICH_BET'],
    GlobalConst.STORAGE_KEYS['LAST_BET_SIZE'],
    GlobalConst.STORAGE_KEYS['LIMPERS_CALLERS'],
    GlobalConst.STORAGE_KEYS['STREET'],
    GlobalConst.STORAGE_KEYS['BET_PURPOSE'],
    GlobalConst.STORAGE_KEYS['BET_SIZE'],
    GlobalConst.STORAGE_KEYS['HAND_SEEN'],
    GlobalConst.STORAGE_KEYS['COMMENTS'],
    GlobalConst.STORAGE_KEYS['HEADLINE'],
    GlobalConst.STORAGE_KEYS['POT_SIZE']
  ])
};
