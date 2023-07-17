function getbmivalue(){
  var height = document.getElementById('height').value;
  var weight = document.getElementById('weight').value;
  height = height*12*0.025;
  

  var bmi = weight/(Math.pow(height,2));
  bmi = Math.round(bmi);
  

      if(bmi<19){
        document.getElementById('bmivalue').value = bmi + " (You are underweight)";
        
      }
      else if(bmi>25){
        document.getElementById('bmivalue').value = bmi + " (you are overweight)";
        
      }
      else{
        document.getElementById('bmivalue').value = bmi + " (Yeah,you are fit)";
     }
 }