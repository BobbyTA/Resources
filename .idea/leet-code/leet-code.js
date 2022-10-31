function twoSum(nums, target) {
    let numObj = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (numObj[complement] !== undefined) {
            return [numObj[complement], i];
        }
        numObj[nums[i]] = i;
    }
}
//two sum problem 1

//adding two objects
const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },{//create new object ot add on below
        "artist": "The Beatles",
        "title": "Don't let me down",
        "release_year": 1970,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
    }
];