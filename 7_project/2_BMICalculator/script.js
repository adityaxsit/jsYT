const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');
    const mess=document.querySelector('#messages')

    if(height==="" || height<0 || isNaN(height)){
        results.innerHTML=`enter valid height ${height}`
    }else if(weight==="" || weight<0 || isNaN(weight)){
        results.innerHTML=`enter valid weight ${weight}`
    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        results.innerHTML= `<span>${bmi}</span>`;
        if(bmi<=18.6){
            mess.innerHTML=`<span>Your BMI is ${bmi} and you are underWeight</span>`
        } else if(bmi > 18.6 && bmi<=24.9){
            mess.innerHTML=`<span>Your BMI is ${bmi} and you are in normal range</span>`
        }else{
            mess.innerHTML=`<span>Your BMI is ${bmi}<span> and you are overWeight</span></span>`
        }
    }



    
})