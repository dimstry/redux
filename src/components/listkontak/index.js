import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListKontak } from "../../actions/kontakAct";

export default function ListKontak() {
  const { getListKontakResult, getListKontakLoading, getListKontakErr } =
    useSelector((state) => state.kontakReducers);

  const dispatch = useDispatch();

  useEffect(() => {
    // panggil action Ge list kontak
    console.log("1. use effect commponent did mount");
    dispatch(getListKontak());
  }, [dispatch]);
  return (
    <div>
      <h3>List Kontak</h3>
      <hr />
      {getListKontakResult ? (
        getListKontakResult.map((kontak) => {
          return (
            <p key={kontak.id}>
              Nama : {kontak.nama} - No HP : {kontak.nohp}
            </p>
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
