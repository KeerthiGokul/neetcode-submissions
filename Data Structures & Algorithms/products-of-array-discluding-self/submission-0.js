class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let total=1,oc=0;
        for(let k of nums){
            if(k===0){
                oc+=1;
                continue;            
            }else if(oc>=2){
                total=0;
                break;
            }
            total*=k;
        }
        console.log(total);
        let result=[];
        if(oc===1){
        for(let g of nums){
            if(g===0){
            result.push(total);
            }else{
                result.push(0);
            }            
        }
        return result;
        }else if(oc>1){
            for(let g of nums){
                result.push(0);
            }
            return result;
        }else{
            for(let g of nums){
                result.push(Math.floor(total/g));
            }
        }
        return result;
    }
}
