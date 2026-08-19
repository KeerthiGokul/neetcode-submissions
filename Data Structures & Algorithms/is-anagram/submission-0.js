class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length) return false;
        const sm= new Map();
        const tm=new Map();
        for(let i=0;i<s.length;i++){
            sm.set(s[i],(sm.get(s[i])||0)+1);
            tm.set(t[i],(tm.get(t[i])||0)+1);
        }
        console.log(sm,tm);
        for(let j=0;j<s.length;j++){
            if(!tm.get(s[j])||tm.get(s[j])!==sm.get(s[j])){
                return false;
            }
        }        
        return true;
    }
}
