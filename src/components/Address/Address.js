import { useState } from "react";

import useFetch from "../../@common/hooks/useFetch";

export const Address = () => {
  const [error, setError] = useState(false);
  const [code, setCode] = useState(0);

  const { loading, result } = useFetch({
    url: `https://blackisp.herokuapp.com/postalCodes/${code}`,
    options: {},
  });

  const handleOnChange = (e) => {
    console.log(e.target.value.length);
    console.log(
      e.target.value.length === 5 && parseInt(e.target.value) === 11000
    );
    console.log(
      e.target.value.length === 5 && parseInt(e.target.value) === 89000
    );
    if (
      (e.target.value.length === 5 && parseInt(e.target.value) === 11000) ||
      (e.target.value.length === 5 && parseInt(e.target.value) === 89000)
    ) {
      setCode(e.target.value);
    } else {
      setError(true);
    }
  };

  return (
    <div className="address">
      <div className="address__nav">DIRECCION DE ENVÍO</div>
      {error && <h4>Elija un código postal</h4>}
      <div className="address__form">
        <div className="box-input">
          <div className="icon">
            <i className="fas fa-user"></i>
          </div>
          <div className="input-field">
            <input type="text" placeholder="Nombre" />
          </div>
        </div>

        <div className="box-input">
          <div className="icon">
            <i className="fas fa-user"></i>
          </div>
          <div className="input-field">
            <input type="text" placeholder="Apellidos" />
          </div>
        </div>

        <div className="box-input">
          <div className="icon">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="input-field">
            <input type="text" placeholder="Correo electrónico" />
          </div>
        </div>

        <div className="box-input">
          <div className="icon">
            <i className="fas fa-phone-alt"></i>
          </div>
          <div className="input-field">
            <input type="text" placeholder="Número de teléfono" />
          </div>
        </div>

        <div className="box-input">
          <div className="icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="input-field">
            <select
              name="Codigo Postal"
              id="cp"
              className="slt-cp"
              onClick={handleOnChange}
            >
              <option value="">Código postal</option>
              <option value="11000">11000</option>
              <option value="89000">89000</option>
            </select>
          </div>
        </div>

        <div className="box-input">
          <div className="icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="input-field">
            <select
              name="colonies"
              id="clns"
              className="slt-cp"
              onClick={handleOnChange}
            >
              {!loading && result.colonies?.length>1 && (<option>Seleccione colonia</option>)}
              {!loading && result.colonies?.map((item, key) => (
                <option value={item} key={key}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="box-input">
          <div className="icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder={!loading && result.state}
              disabled
            />
          </div>
        </div>

        <div className="box-input">
          <div className="icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="input-field">
            <input type="text" placeholder={!loading && result.city} disabled />
          </div>
        </div>

        <div className="box-input">
          <div className="icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="input-field">
            <input type="text" placeholder={!loading && result.town} disabled />
          </div>
        </div>

        <div className="box-input">
          <div className="icon">
            <i className="fas fa-map-marked-alt"></i>
          </div>
          <div className="input-field">
            <input type="text" placeholder={!loading && result.city} disabled />
          </div>
        </div>

        <div className="btns">
          <button className="adrs-btn">Libreta de direcciones</button>
          <button className="btn-save">Guardar</button>
        </div>
        <div className="chk">
          <input type="checkbox" id="cbox2" value="checkbox"></input>
          <label htmlFor="cbox2">Utilizar como dirección de facturación</label>
        </div>
      </div>
    </div>
  );
};
