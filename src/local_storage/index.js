const LS = {
    getData: key => {
        const data = localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }
        else return false;
    },
    setData: (key, data) => {
        if (typeof key === 'string' && data) {
            const currentData = JSON.stringify(data);
            localStorage.setItem(key, currentData);
            return true;
        }
        else return false;
    },
    mergeData: (data, oldDataKey) => {
        if (data && typeof oldDataKey === 'string' && LS.checkData(oldDataKey)) {
            const newData = LS.getData(oldDataKey);
            if (newData instanceof Array) {
                newData.push(data);
                LS.setData(oldDataKey, newData);
                return LS.getData(oldDataKey);
            }
        }
        else {
            throw new Error('New or old data does not exist');
        }
    },
    checkData: key => {
        if (key && typeof key === 'string') {
            return !!LS.getData(key);
        }
        else {
            throw new Error('The key is missing or not a string');
        }
    }
};

export default LS;