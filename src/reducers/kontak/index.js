import {
  DELATE_KONTAK,
  UPDATE_KONTAK,
  DETAIL_KONTAK,
  ADD_KONTAK,
  GET_LIST_KONTAK,
} from "../../actions/kontakAct";

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

  detailKontakResult: false,

  updateKontakResult: false,
  updateKontakLoading: false,
  updateKontakErr: false,
};

const kontak = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_KONTAK:
      return {
        ...state,
        getListKontakResult: action.payload.data,
        getListKontakLoading: action.payload.loading,
        getListKontakErr: action.payload.errorMassage,
      };
    case ADD_KONTAK:
      return {
        ...state,
        addKontakResult: action.payload.data,
        addKontakLoading: action.payload.loading,
        addKontakErr: action.payload.errorMassage,
      };

    case DELATE_KONTAK:
      return {
        ...state,
        delateKontakResult: action.payload.data,
        delateKontakLoading: action.payload.loading,
        delateKontakErr: action.payload.errorMassage,
      };
    case DETAIL_KONTAK:
      return {
        ...state,
        detailKontakResult: action.payload.data,
      };
    case UPDATE_KONTAK:
      console.log("4. masuk reducers");
      return {
        ...state,
        updateKontakResult: action.payload.data,
        updateKontakLoading: action.payload.loading,
        updateKontakErr: action.payload.errorMassage,
      };
    default:
      return state;
  }
};
export default kontak;
