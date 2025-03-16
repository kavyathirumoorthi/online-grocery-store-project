class NumArray {
    private int[] prefixSum;

    public NumArray(int[] nums) {
        int n = nums.length;
        prefixSum = new int[n + 1]; // One extra space for easier calculations
        for (int i = 0; i < n; i++) {
            prefixSum[i + 1] = prefixSum[i] + nums[i]; // Store cumulative sum
        }
    }

    public int sumRange(int left, int right) {
        return prefixSum[right + 1] - prefixSum[left]; // Efficient O(1) query
    }
}
