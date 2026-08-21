class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(let y of strs){
            map.set([...y].sort().join(""),[]);            
        }
        for(let k of strs){
            const temp = [...k].sort().join("");
            map.get(temp).push(k);
        }
        return [...map.values()];
    }
}
