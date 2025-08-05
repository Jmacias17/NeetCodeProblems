/**
 * Determines if two strings are anagrams of each other.
 *
 * An anagram is a string that contains the exact same characters 
 * (including frequency) as another string, but possibly in a different order.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export default function isAnagram(s, t) {
    //If s and t don't have same len then false
    if (s.length !== t.length) return false;
    
    // Dict used to gather counts of characters in Strings
    const count = {};

    // Check every character in the string S
    // For every index in the dict of the certain character
    // Adjust the index count to existing count of char + 1
    // If not existing yet, then 0 + 1
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    // Now that all characters fron first string are accounted for
    // Do the same for string T; If the count of the current character in the dict
    // doesn't exist then the character found in T isn't in S so False
    // If the count of that char in the dict does exist reduce the frequency
    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
}

