import {validateSave} from './engine.js';
export const SAVE_KEY='fake-it-afternoon-save-v1';
export function load(storage){try{const raw=storage.getItem(SAVE_KEY);if(!raw)return {state:null,error:null};const state=JSON.parse(raw);return validateSave(state)?{state,error:null}:{state:null,error:'This save belongs to an unknown version or is damaged. Your original data has been kept.'};}catch{return {state:null,error:'Saved progress could not be read. Your original data has been kept.'};}}
export function save(storage,state){try{storage.setItem(SAVE_KEY,JSON.stringify(state));return true;}catch{return false;}}
export function erase(storage){try{storage.removeItem(SAVE_KEY);return true;}catch{return false;}}
