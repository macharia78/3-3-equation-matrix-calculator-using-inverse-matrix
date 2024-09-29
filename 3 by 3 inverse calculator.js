
/*
pseudocode = >

pick the values in the input boxes and find the determinant first

start
print "fill in the values of your question a b c d e f g h i"
 
these alphabets represent the values to be filled in the input boxes from the 1st row 1st column to the third row third column

input a b c d e f g h i


process = > take the first row and use it to find the det


print determinant

*/ 

function timecont(){

setTimeout(()=>{
  calculateMatrix();
    },1500)
  }
function calculateMatrix(){



/**Start */

/* this code is for the first column in the input area in the html */
const  num1 =    document.querySelector('.st-row-1st-column').value;
const  num2 =    document.querySelector('.nd-row-1st-column').value;
const  num3 =   document.querySelector('.rd-row-1st-column').value;

/* this code is for the second column of the input area in the html */
const  num4 =   document.querySelector('.st-row-2nd-column').value;
const  num5 =   document.querySelector('.nd-row-2nd-column').value;
const  num6 =   document.querySelector('.rd-row-2nd-column').value;

/* this code here is for the third column of the input area in the html */
const  num7 =   document.querySelector('.st-row-3rd-column').value;
const  num8 =   document.querySelector('.nd-row-3rd-column').value;
const  num9 =   document.querySelector('.rd-row-3rd-column').value;


 let negativeMult =  (num4 * -1);
  
 let A = num1 * ((num5  * num9) - (num8 * num6))
 let B = negativeMult * ((num2 * num9) - (num8 * num3))
 let C = num7 * ((num2 * num6) - (num5 * num3))

let determinant = A + B + C;





let det1 = 1 *  ((num5 * num9)  - (num8 * num6));
let det2 = -1 * ((num2 * num9) - (num8 * num3));
let det3 = 1 *  ((num2 * num6)  - (num5 * num3));
let det4 = -1 * ((num4 * num9) - (num7 * num6));
let det5 = 1 *  ((num1 * num9)  - (num7 * num3));
let det6 = -1 * ((num1 * num6) - (num4 * num3));
let det7 = 1 *  ((num4 * num8)  - (num7 * num5));
let det8 = -1 * ((num1 * num8) - (num7 * num2));
let det9 = 1 *  ((num1 * num5)  - (num4 * num2));




document.querySelector('.js-determinant')
  .innerHTML = `1/${determinant}`;






document.querySelector('.statement').innerHTML = 'The determinants for the co-factors  are:'





document.querySelector('.inverse-1').innerHTML = det1;
document.querySelector('.inverse-2').innerHTML = det2;
document.querySelector('.inverse-3').innerHTML = det3;
document.querySelector('.inverse-4').innerHTML = det4;
document.querySelector('.inverse-5').innerHTML = det5;
document.querySelector('.inverse-6').innerHTML = det6;
document.querySelector('.inverse-7').innerHTML = det7;
document.querySelector('.inverse-8').innerHTML = det8;
document.querySelector('.inverse-9').innerHTML = det9;

document.querySelector('.nom-det').innerHTML= `The determinant is: ${determinant}`
/**the code below helps to convert the inverse matrix to transpose / A raised to T */
document.querySelector('.transpose-statement').innerHTML=
'the inverse matrix is :'

document.querySelector('.transpose-1').innerHTML=det1;
document.querySelector('.transpose-2').innerHTML=det4;
document.querySelector('.transpose-3').innerHTML=det7;
document.querySelector('.transpose-4').innerHTML=det2;
document.querySelector('.transpose-5').innerHTML=det5;
document.querySelector('.transpose-6').innerHTML=det8;
document.querySelector('.transpose-7').innerHTML=det3;
document.querySelector('.transpose-8').innerHTML=det6;
document.querySelector('.transpose-9').innerHTML=det9;
}


document.querySelector('.js-calculate-button').addEventListener('click',()=>{


  if(document.querySelector('.statement').innerHTML===''){
    document.querySelector('.statement').innerHTML='calculating...'
  }
  timecont();

})

document.querySelector('.js-cancel-button')
  .addEventListener('click',()=>{
document.querySelector('.statement').innerHTML = '';
document.querySelector('.js-determinant').innerHTML = '';
document.querySelectorAll('.input').forEach((values)=>{
  values.value = '';
});
  });
 /**stop*/
 
  
  
  
  
  
  
  








































































