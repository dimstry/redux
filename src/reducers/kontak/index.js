import { GET_LIST_KONTAK } from "../../actions/kontakAct";
import { ADD_KONTAK } from "../../actions/kontakAct";
const initialState = {
  getListKontakResult: false,
  getListKontakLoading: false,
  getListKontakErr: false,

  addKontakResult: false,
  addKontakLoading: false,
  addKontakErr: false,
};

const kontak = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_KONTAK:
      console.log("4. masuk reducers");
      return {
        ...state,
        getListKontakResult: action.payload.data,
        getListKontakLoading: action.payload.loading,
        getListKontakErr: action.payload.errorMassage,
      };
    case ADD_KONTAK:
      console.log("4. masuk reducers");
      return {
        ...state,
        addKontakResult: action.payload.data,
        addKontakLoading: action.payload.loading,
        addKontakErr: action.payload.errorMassage,
      };
    default:
      return state;
  }
};
export default kontak;
