import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELATE_KONTAK = "DELATE_KONTAK";
export const DETAIL_KONTAK = "DETAIL_KONTAK";
export const UPDATE_KONTAK = "UPDATE_KONTAK";

export const getListKontak = () => {
  console.log("2. masuk action");
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_LIST_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });
    // get api
    axios({
      method: "GET",
      url: "http://localhost:3000/kontak",
      timeout: 120000,
    })
      .then((respone) => {
        console.log("3. berhasil dapat data ", respone.data);
        //berhasil get api
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: respone.data,
            errorMassage: false,
          },
        });
      })
      .catch((err) => {
        console.log("3. gagal dapat data ", err);
        // kalau gagal get api
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMassage: err.data,
          },
        });
      });
  };
};

export const addListKontak = (data) => {
  console.log("2. masuk action");
  return (dispatch) => {
    // loading
    dispatch({
      type: ADD_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });
    // get api
    axios({
      method: "POST",
      url: "http://localhost:3000/kontak",
      timeout: 120000,
      data: data,
    })
      .then((respone) => {
        console.log("3. berhasil dapat data ", respone.data);
        //berhasil get api
        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: respone.data,
            errorMassage: false,
          },
        });
      })
      .catch((err) => {
        console.log("3. gagal dapat data ", err);
        // kalau gagal get api
        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMassage: err.data,
          },
        });
      });
  };
};
export const delateKontak = (id) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: DELATE_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });
    // get api
    axios({
      method: "DELETE",
      url: "http://localhost:3000/kontak/" + id,
      timeout: 120000,
    })
      .then((respone) => {
        console.log("3. berhasil dapat data ", respone.data);
        //berhasil get api
        dispatch({
          type: DELATE_KONTAK,
          payload: {
            loading: false,
            data: respone.data,
            errorMassage: false,
          },
        });
      })
      .catch((err) => {
        console.log("3. gagal dapat data ", err);
        // kalau gagal get api
        dispatch({
          type: DELATE_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMassage: err.data,
          },
        });
      });
  };
};

export const detailKontak = (kontak) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_KONTAK,
      payload: {
        data: kontak,
      },
    });
  };
};

export const updateListKontak = (data) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: UPDATE_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });
    // get api
    axios({
      method: "PUT",
      url: "http://localhost:3000/kontak/" + data.id,
      timeout: 120000,
      data: data,
    })
      .then((respone) => {
        console.log("3. berhasil dapat data ", respone.data);
        //berhasil get api
        dispatch({
          type: UPDATE_KONTAK,
          payload: {
            loading: false,
            data: respone.data,
            errorMassage: false,
          },
        });
      })
      .catch((err) => {
        console.log("3. gagal dapat data ", err);
        // kalau gagal get api
        dispatch({
          type: UPDATE_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMassage: err.data,
          },
        });
      });
  };
};
