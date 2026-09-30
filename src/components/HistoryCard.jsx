function HistoryCard({
  historyDays,
  onHistoryDaysChange,
  loading,
  error,
  data,
}) {
  return (
    <section className="card">
      <div className="section-header">
        <h2>Histórico da Cotação</h2>

        <select
          className="period-select"
          value={historyDays}
          onChange={(event) => onHistoryDaysChange(Number(event.target.value))}
        >
          <option value={7}>Últimos 7 dias</option>
          <option value={30}>Últimos 30 dias</option>
          <option value={90}>Últimos 90 dias</option>
        </select>
      </div>

      <div className="chart-placeholder">
        {loading && <p>Carregando histórico...</p>}

        {!loading && error && <p className="error-message">{error}</p>}

        {!loading && !error && data.length === 0 && (
          <p>Não há dados disponíveis.</p>
        )}

        {!loading && !error && data.length > 0 && (
          <p>{data.length} cotações carregadas. O gráfico será exibido aqui.</p>
        )}
      </div>
    </section>
  );
}

export default HistoryCard;
