// https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const map = new Map()
    const arr = []
    groupSizes.forEach((e,i) => {
        if (!map.has(e) || arr[map.get(e)].length === e) {
            arr.push([])
            map.set(e, arr.length - 1)
        }
        arr[map.get(e)].push(i)
    })
    return arr
};
