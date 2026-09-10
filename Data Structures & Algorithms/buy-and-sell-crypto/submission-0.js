class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit=Number.MIN_VALUE;
        for(let i=0;i<prices.length-1;i++){
            if(prices[i+1]>prices[i]){
                let curr=prices[i];
                for(let j=i+1;j<prices.length;j++){
                    profit=Math.max(profit,prices[j]-curr);
                }
            }                                
        }
        return (profit!==Number.MIN_VALUE)?profit:0;
    }
}
