
function findDuplicate(nums){
    let slow = nums[0];
    let fast = nums[nums[0]];
    while(slow!==fast){
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    slow = 0;
    while(slow!== fast){
        slow = nums[slow];
        fast= nums[fast];
    }
    return slow
}

findDuplicate([1,2,3,1,4,2]);