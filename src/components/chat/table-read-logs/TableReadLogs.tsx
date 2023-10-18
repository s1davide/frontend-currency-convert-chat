export default function TableReadLogs() {
  const Head = () => (
    <head>
      <th>Tipo de conversión</th>
      <th>Mensaje</th>
      <th>Usuario</th>
      <th>Conversión Seleccionada</th>
      <th>Remitente</th>
      <th>Fecha</th>
    </head>
  );
  

  return <table>
    <Head/>
  </table>;
}
