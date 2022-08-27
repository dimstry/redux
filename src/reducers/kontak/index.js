import { GET_LIST_KONTAK } from "../../actions/kontakAct";
import { ADD_KONTAK } from "../../actions/kontakAct";
import { DELATE_KONTAK } from "../../actions/kontakAct";
const initialState = {
  getListKontakResult: false,
  getListKontakLoading: false,
  getListKontakErr: false,

  addKontakResult: false,
  addKontakLoading: false,
  addKontakErr: false,

  delateKontakResult: false,
  delateKontakLoading: false,
  delateKontakErr: false,
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

    case DELATE_KONTAK:
      console.log("4. masuk reducers");
      return {
        ...state,
        delateKontakResult: action.payload.data,
        delateKontakLoading: action.payload.loading,
        delateKontakErr: action.payload.errorMassage,
      };
    default:
      return state;
  }
};
export default kontak;
