import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function HistoryCard({
  historyDays,
  onHistoryDaysChange,
  loading,
  error,
  data,
  fromCurrency,
  toCurrency,
}) {
  const safeData = Array.isArray(data) ? data : [];

  const chartData = safeData.map((item) => ({
    date: item.date,
    rate: Number(item.rate),
  }));

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

      {loading && (
        <div className="chart-placeholder">
          <p>Carregando histórico...</p>
        </div>
      )}

      {!loading && error && (
        <div className="chart-placeholder">
          <p className="error-message">{error}</p>
        </div>
      )}

      {!loading && !error && chartData.length === 0 && (
        <div className="chart-placeholder">
          <p>Não há dados disponíveis para este período.</p>
        </div>
      )}

      {!loading && !error && chartData.length > 0 && (
        <div className="chart-container">
          <p className="chart-title">
            {fromCurrency} → {toCurrency}
          </p>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={chartData}
              margin={{
                top: 10,
                right: 20,
                left: 10,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
                dataKey="date"
                tick={{
                  fontSize: 12,
                }}
              />

              <YAxis
                domain={["auto", "auto"]}
                tick={{
                  fontSize: 12,
                }}
              />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="rate"
                stroke="#2563eb"
                strokeWidth={3}
                dot={{
                  r: 4,
                }}
                activeDot={{
                  r: 6,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </section>
  );
}

export default HistoryCard;
