import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListKontak, delateKontak } from "../../actions/kontakAct";

export default function ListKontak() {
  const {
    getListKontakResult,
    getListKontakLoading,
    getListKontakErr,
    delateKontakResult,
  } = useSelector((state) => state.kontakReducers);

  const dispatch = useDispatch();

  useEffect(() => {
    // panggil action Ge list kontak
    console.log("1. use effect commponent did mount");
    dispatch(getListKontak());
  }, [dispatch, delateKontakResult]);
  return (
    <div>
      <h3>List Kontak</h3>
      <hr />
      {getListKontakResult ? (
        getListKontakResult.map((kontak) => {
          return (
            <>
              <p key={kontak.id}>
                Nama : {kontak.nama} - No HP : {kontak.nohp}
                <button onClick={() => dispatch(delateKontak(kontak.id))}>
                  Hapus
                </button>
              </p>
            </>
          );
        })
      ) : getListKontakLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{getListKontakErr ? getListKontakErr : "data kosong"}</p>
      )}
    </div>
  );
}
