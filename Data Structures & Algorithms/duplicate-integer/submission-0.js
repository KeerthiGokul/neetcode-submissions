class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const c = new Map();
        for(let y of nums){
            c.set(y,(c.get(y)||0)+1);
            if(c.get(y)>1) return true;
        }
        return false;
    }
}
