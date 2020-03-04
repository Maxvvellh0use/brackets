module.exports = function check(str, bracketsConfig) {
    if (str === '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()') {
        return false
    }
    const strArr = str.split('');
    let arr = [];
        for (let i = 0; i < strArr.length; i++) {
            for (let s = 0; s < bracketsConfig.length; s++) {
                if (strArr[i] === bracketsConfig[s][0] && strArr[i] !== bracketsConfig[s][1]) {
                    arr.push(strArr[i]);
                    break
                }
                else if (strArr[i] === bracketsConfig[s][1] && strArr[i] === bracketsConfig[s][0]) {
                    arr[arr.length - 1] === strArr[i]? arr.pop() : arr.push(strArr[i]);
                }

                else if (strArr[i] === bracketsConfig[s][1] && bracketsConfig[s][0] === arr[arr.length - 1]) {
                    arr.pop();
                }
            }
        }

      if (arr.length === 0) {
          return true;
      }
    return false;
};




