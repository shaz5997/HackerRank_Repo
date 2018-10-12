 var nums =["","one","two","three","four","five","six","seven",
       "eight","nine","ten","eleven","twelve","thirteen","fourteen",
       "quarter","sixteen","seventeen","eighteen","nineteen", "twenty",
       "twenty one", "twenty two", "twenty three", "twenty four", "twenty five",
       "twenty six", "twenty seven", "twenty eight", "twenty nine"];
          
           var result =""; 
    if(m == 0) {
        result = nums[h] + " o\' clock";
    }else if(m > 30) {
        if(m == 45){
            result = ("quarter to " + nums[h + 1]);
        }
        else{
            result = (nums[(60 - m)] + " minutes to " + nums[h + 1]);
        }
    }else if(m < 30){
        if(m == 15){
            result = ("quarter past " + nums[h]);
        }
        else{
            if(m<10){
            result = (nums[m] + " minute past " + nums[h]);    
            }
            else{
            result = (nums[m] + " minutes past " + nums[h]);
            }
        }
    }else{
        result = ("half past " + nums[h]);
    }
        return result;