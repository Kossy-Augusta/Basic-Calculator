import getELement from "./utils/get-element.js";
import {pressNumber} from "./utils/dedicated-functions.js";

const display = getELement(".display");
const btns = [...document.querySelectorAll(".button")];

btns.forEach((btn)=>{
 btn.addEventListener('click', (e)=>{
  const type = e.target.dataset.type;
  const value = e.target.textContent;
  if(type === "number"){   
   pressNumber(value)
  }
 })
})