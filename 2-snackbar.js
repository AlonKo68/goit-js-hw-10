import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i}from"./assets/vendor-njWUcVeN.js";const l=document.querySelector(".form");l.addEventListener("submit",n);function n(t){t.preventDefault();const e=parseInt(t.target.elements.delay.value);console.log(e);let s=document.querySelector('input[name="state"]:checked').value;console.log(s),new Promise((o,r)=>{setTimeout(()=>{s==="fulfilled"?o(e):r(e)},e)}).then(o=>{i.show({title:"✅ Ok",message:`Fulfilled promise in ${e} ms`,backgroundColor:"#59a10d",messageColor:"#fff",titleColor:"#fff",icon:"",position:"topRight"})}).catch(o=>{i.show({title:"❌ Error",message:`Rejected promise in ${e} ms`,backgroundColor:"#ef4040",messageColor:"#fff",titleColor:"#fff",icon:"",position:"topRight"})})}
//# sourceMappingURL=2-snackbar.js.map
