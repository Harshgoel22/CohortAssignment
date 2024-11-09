/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length) return false;
  str1 = str1.toLowerCase(), str2 = str2.toLowerCase();
  let list = {};
  for(var i=0; i<str1.length; i++){
    if(!list[str1[i]]) list[str1[i]]=1;
    else list[str1[i]]+=1;
  };

  for(var i=0; i<str2.length; i++){
    if(list[str2[i]]==0 || !list[str2[i]]) return false;
    else list[str2[i]]-=1;
  };

  return true;
}

module.exports = isAnagram;
