import floorsString from './input2';
import _ from 'lodash';

const floors = floorsString.split('');

const getResult = (thing) => {
    if (thing === '(') {
        return 1;
    } else {
        return -1;
    }
};

const findIt = (arr) => {
    let result = 0;
    let finished = 0;
    _.map(arr, (item, idx) => {
        if (finished != 0) {
            return;
        }
        result = result + getResult(item);
        if (result === -1) {
            console.log(idx);
            finished = idx;
        }
    });
};

export default () => {return findIt(floors)};