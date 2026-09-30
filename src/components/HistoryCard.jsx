function HistoryCard() {
  return (
    <section className="card">
      <div className="section-header">
        <h2>Histórico da Cotação</h2>

        <select className="period-select" defaultValue="7">
          <option value="7">Últimos 7 dias</option>
          <option value="30">Últimos 30 dias</option>
          <option value="90">Últimos 90 dias</option>
        </select>
      </div>

      <div className="chart-placeholder">
        <p>Gráfico de cotação</p>
      </div>
    </section>
  );
}

export default HistoryCard;
