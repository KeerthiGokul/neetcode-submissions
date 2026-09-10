class Solution {
    public int maxProfit(int[] prices) {
        int profit = Integer.MIN_VALUE,min=prices[0];
        for(int j =1;j<prices.length;j++){
            min=Math.min(min,prices[j]);
            profit=Math.max(profit,prices[j]-min);
        }
        if(profit==0||profit==Integer.MIN_VALUE) return 0;
        return profit;
    }
}
