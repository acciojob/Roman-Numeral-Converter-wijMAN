function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
  let s="";
  while(num!=0){
    if(num>=1000){
      num-=1000;
      s=s+'M';
    }
    else if(num>=500){
      num-=500;
      s=s+'D';
    }
    else if(num>=100){
      num-=100;
      s=s+'C';
    }
    else if(num>=50){
      num-=50;
      s=s+'L';
    }
    else if(num>=10){
      num-=10;
      s=s+'X';
    }
    else if(num>=5){
      num-=5;
      s=s+'V';
    }
    else if(num>=1){
      num-=1;
      s=s+'I';
    }
  }
  return s;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(0));





// do not edit below this line
module.exports = convertToRoman
