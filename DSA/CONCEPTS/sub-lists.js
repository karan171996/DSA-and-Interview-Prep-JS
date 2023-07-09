//KMP algorithm

// Here we must match (longest prefix  == longest suffix)
// Only match to that content , that is not matched , the content already matched , do not go back to match them again.
// Time = O(m+n)
// Space = O(n)

// We need to create LPS array (must)


// Text = "abxabcabcaby"
// pattern="abcaby"

const text ="abxabcabcaby";
const pattern ="abcaby"

function LPScompute(text, pattern, lps){
    const m = text.length;
    const n = pattern.length;
    console.log("🚀 ~ file: sub-lists.js:21 ~ KMPSearch ~ lps:", lps)
    let i=0, j=1;
    while(i< n){
        if(pattern[i] == pattern[j]){
            lps[i] =i+1;
            i++;
            j++;

        }else{
            if( i!== 0){
                i = lps[i-1];
            }else{
                lps[i] = 0;
                j++;
            }
        }
    }
    console.log('m', lps);
};

function KMPSearch(text, pattern){
    let textLen = text.length;
    let patternLen = pattern.length;
    let lps = new Array(patternLen).fill(0);
    LPScompute(text, pattern, lps)
    let i =0, j=0;
    while(i < textLen-patternLen+1){
        if(text[i] === pattern[j]){
            i++;
            j++;
        }else{
            if(j!==0){
                j=lps[j-1];
            }else{
                i+=1;
            }
        }

        if(j === patternLen){
            console.log('i-j', i-j);
            j = lps[j-1];
        }
    }
}

KMPSearch(text, pattern)


