import floorsString from './input';

const floors = floorsString.split('');

const isPositive = floor => floor === '(';
const isNegative = floor => floor === ')';
const numberOfFloors = (floors, fn) =>  floors.filter(floor => fn(floor));

export default () => { return (numberOfFloors(floors, isPositive).length - numberOfFloors(floors, isNegative).length)};