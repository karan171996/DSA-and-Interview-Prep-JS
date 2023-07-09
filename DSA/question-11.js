// Top K Frequent elements

var topKFrequent = function(words, k) {
    const map = new Map();

    words.forEach(item => {
        if(map.has(item)){
            map.set(item, map.get(item) + 1);
        }else{
            map.set(item, 1);
        }
    })
    const data = [...map.entries()].sort((a, b) => b[1] !== a[1] ? b[1] - a[1] : a[0].localeCompare(b[0]));
    return data.slice(0, k).map(item => item[0]);
};

//Input: words = ["i","love","leetcode","i","love","coding"], k = 2
