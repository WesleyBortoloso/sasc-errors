import { useEffect, useState } from "react";

const PlotTable = ({ tableJson, stepMarker, stepError }) => {
  const [headerTable, setHeaderTable] = useState([]);
  const [bodyTable, setBodyTable] = useState([]);

  useEffect(() => {
    const auxTable = Object.keys(tableJson).map((key) => [key, tableJson[key]]);
    const aux = [];

    auxTable.map((element) => {
      let aux1 = [];
      Object.keys(element[1]).map((key) => {
        aux1.push(element[1][key]);
      });
      let aux2 = [element[0], aux1];
      aux.push(aux2);
    });

    const header = [];
    const aux3 = [];
    for (let i = 0; i < aux.length; i++) {
      header.push(aux[i][0]);
      aux3.push(aux[i][1]);
    }

    const aux4 = [];
    for (let i = 0; i < aux3[0].length; i++) {
      for (let j = 0; j < aux3.length; j++) {
        aux4.push(aux3[j][i]);
      }
    }

    const body = [];
    for (let i = 0; i < aux4.length; i = i + header.length) {
      body.push(aux4.slice(i, i + header.length));
    }

    setHeaderTable(header);
    setBodyTable(body);
  }, [tableJson]);

  function Td(element, indexTd, indexTr) {
    const marker = [];
    let toMark = false;
  
    for (let i = 0; i < headerTable.length; i++) {
      if (headerTable[i] === stepMarker[0]) {
        marker.push(i);
        marker.push(stepMarker[1]);
        toMark = true;
      }
    }
  
    const isErroCell =
      toMark &&
      indexTd === marker[0] &&
      indexTr === marker[1] &&
      element === "ERRO!" &&
      stepError;
  
    const isActiveMarker =
      toMark && indexTd === marker[0] && indexTr === marker[1] && !isErroCell;
  
    const isInactiveErro = element === "ERRO!" && !isErroCell;
  
    const className = isErroCell
      ? "destak error-cell"
      : isActiveMarker
      ? "destak"
      : isInactiveErro
      ? "inactive-cell"
      : "";
  
    const tooltip =
      isErroCell && stepError
        ? `Erro: símbolo '${stepError.unexpected}' inesperado no estado ${stepError.state}.\nEsperado: ${stepError.expected.join(", ")}.`
        : null;
  
    return (
      <td key={indexTd} className={className} title={tooltip || undefined}>
        {element}
      </td>
    );
  }

  return (
    <>
      <table className="table table-bordered border-primary">
        <thead className="table-secondary table-bordered border-primary">
          <tr>
            <th className="col-index">#</th>
            {headerTable.map((element, index) => (
              <th key={index}>{element}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyTable.map((aux, indexTr) => (
            <tr key={indexTr}>
              <td>{indexTr}</td>
              {aux.map((element, indexTd) => Td(element, indexTd, indexTr))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PlotTable;
