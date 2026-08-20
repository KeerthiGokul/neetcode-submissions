class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let result=[];
        for(let i=0;i<nums.length;i++){
            let check = target-nums[i];
            for(let j=0;j<nums.length;j++){
                if(i!=j&&check===nums[j]){
                    result.push(i);
                    result.push(j);
                    return result;
                }
            }        
        }
        return result;
    }
}
