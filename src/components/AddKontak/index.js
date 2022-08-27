import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addListKontak,
  getListKontak,
  updateListKontak,
} from "../../actions/kontakAct";

export default function AddKontak() {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [id, setId] = useState("");
  const [mode, setMode] = useState("Add");

  const { addKontakResult, detailKontakResult, updateKontakResult } =
    useSelector((state) => state.kontakReducers);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateListKontak({ id: id, nama: nama, nohp: nohp }));
    } else {
      dispatch(addListKontak({ nama: nama, nohp: nohp }));
    }
  };

  useEffect(() => {
    if (addKontakResult) {
      dispatch(getListKontak());
      setNama("");
      setNohp("");
    }
  }, [addKontakResult, dispatch]);

  useEffect(() => {
    if (updateKontakResult) {
      dispatch(getListKontak());
      setNama("");
      setNohp("");
      setId("");
      setMode("add");
    }
  }, [updateKontakResult, dispatch]);

  useEffect(() => {
    if (detailKontakResult) {
      setNama(detailKontakResult.nama);
      setNohp(detailKontakResult.nohp);
      setId(detailKontakResult.id);
      setMode("Update");
    }
  }, [detailKontakResult, dispatch]);

  return (
    <div>
      <h1>{mode} Kontak</h1>
      <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          name="nohp"
          placeholder="nama mu"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <br></br>
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          name="nohp"
          placeholder="no hp mu"
          value={nohp}
          onChange={(e) => setNohp(e.target.value)}
        />
        <br></br>
        <button type="submit">Gass</button>
      </form>
    </div>
  );
}
