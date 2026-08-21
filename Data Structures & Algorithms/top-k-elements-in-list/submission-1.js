class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for(let f of nums){
            map.set(f,(map.get(f)||0)+1);
        }
        let result=[];
        const temp = [...map];
        temp.sort((a,b)=>b[1]-a[1]);     
        for(let i=0;i<k;i++){
            result.push(temp[i][0]);
        }        
        return result;
    }
}
