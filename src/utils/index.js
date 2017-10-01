export default {
    valueToNegativeAmount: str => {
        if (str && Number(`-${str}`)) {
            return Number(`-${str}`).toString();
        }
        else return str.toString();
    },
    valueToPositiveAmount: str => {
        if (str && str.toString() && str.includes('-')) {
            return str.substring(1);
        }
        else return str.toString();
    },
    checkObjectOnFilled: (object, exceptions) => {
        if (object && object instanceof Object) {
            let result = true;
            if (exceptions && exceptions instanceof Array && exceptions.length > 0) {
                let
                    tmpArr = [],
                    objectKeys = Object.keys(object),
                    objectLength = objectKeys.length
                ;
                for (let i = 0; i < objectLength; i++) {
                    if (exceptions.some(item => item === objectKeys[i])) {
                        continue;
                    }
                    tmpArr.push(objectKeys[i]);
                }
                let tmpArrlength = tmpArr.length;
                for (let i = 0; i < tmpArrlength; i++) {
                    if (!object[tmpArr[i]]) result = false;
                }
                return result;
            }
            for (let prop in object) {
                if (!object[prop]) result = false;
            }
            return result;
        }
    }
}