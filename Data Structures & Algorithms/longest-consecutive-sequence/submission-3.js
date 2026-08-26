class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let temp = nums.sort((a,b)=>a-b);
        const se = new Set(temp);
        temp=[...se];
        let len = 1,val=temp[0],result=0;
        for(let i=1;i<temp.length;i++){
            if(val===temp[i]-1){
                val=temp[i];
                len+=1;
                result=Math.max(len,result);
            }else{
                len=1;
                val=temp[i];
            }
        }
        if(nums.length<=1) return nums.length;
        return (result||len);
    }
}
