var ans='';
    a += 'z',b += 'z';
    for (;;) {
        if (a<b) {
            var charA=a.charAt(0);
            ans += charA;
            a=a.slice(1);
        }
        else {
            var charB=b.charAt(0);
            ans += charB;
            b=b.slice(1);
        }
        if (a=='z') {
            b=b.slice(0,-1)
            ans += b;
            break;
        }
        if (b=='z') {
            a=a.slice(0,-1)
            ans += a;
            break;
        }
        
       // var val = "AAz" < "Az"
       //  if(val)
       //      console.log("here")
       //  else
       //      console.log("no")
    }
    return ans;