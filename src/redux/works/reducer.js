import { WORKS_SET_VALUE } from './action';
import { worksContents } from '../../data';

const init = worksContents;
console.log(init);

const worksReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case WORKS_SET_VALUE:
      return payload;
    default:
      return state;
  }
};

export default worksReducer;
