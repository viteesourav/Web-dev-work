//index.js here exports all needed exports from redux folder to outside folders..
export {buyCake, addCake, buySomeCake} from './Cake/actionCreator';
export {buyIce, addIce} from './Ice/actionCreater';
export {fetchUsers, fetchSucess, fetchError, makeCall, resetData} from './User/actionCreater';