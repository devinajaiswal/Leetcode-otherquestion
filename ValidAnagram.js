/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length){
        return false;
    }
    var map = new Map();
    for (let i of s){
        if(map.has(i))
            {
                map.set(i,map.get(i)+1)
            }
        else{
            map.set(i,1);
        }
    }

      var map1 = new Map();
    for (let i of t){
        if(map1.has(i))
            {
                map1.set(i,map1.get(i)+1)
            }
        else{
            map1.set(i,1);
        }
    }

    for(let i of t){
        if(map1.get(i) == map.get(i)){
          continue;
        }
        else if(!map.has(i)){
            return false;
        }
        else if( map1.get(i) != map.get(i)){
            return false;
        }
        
 
    }
return true;
};