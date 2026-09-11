class Solution {
    public int maxArea(int[] heights) {
        int space=Integer.MIN_VALUE;        
        int left=0,right=heights.length-1;        
        while(left<right){
            int min = Math.min(heights[left],heights[right]);
            int area = (min)*(right-left);
            space=Math.max(area,space);
            if(heights[left]<heights[right]){
                left++;
            }else{
                right--;
            }
        }
        return space;
    }
}
