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
    <section className="card" id="historico">
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
        <div className="chart-state">
          <div className="loading-circle"></div>

          <p>Carregando cotações...</p>
        </div>
      )}

      {!loading && error && (
        <div className="chart-state error-state">
          <div className="state-icon">!</div>

          <strong>Não foi possível carregar os dados.</strong>

          <p>Tente novamente mais tarde.</p>
        </div>
      )}

      {!loading && !error && chartData.length === 0 && (
        <div className="chart-state">
          <div className="empty-icon">▤</div>

          <strong>Nenhum dado disponível.</strong>

          <p>Não há histórico de cotações para o período selecionado.</p>
        </div>
      )}

      {!loading && !error && chartData.length > 0 && (
        <div className="chart-container">
          <div className="chart-pair">
            {fromCurrency} → {toCurrency}
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={chartData}
              margin={{
                top: 10,
                right: 20,
                left: 5,
                bottom: 5,
              }}
            >
              <CartesianGrid
                stroke="#e5e7eb"
                strokeDasharray="3 3"
                vertical={true}
              />

              <XAxis
                dataKey="date"
                tick={{
                  fontSize: 11,
                  fill: "#64748b",
                }}
                axisLine={{
                  stroke: "#cbd5e1",
                }}
                tickLine={false}
              />

              <YAxis
                domain={["auto", "auto"]}
                tick={{
                  fontSize: 11,
                  fill: "#64748b",
                }}
                axisLine={false}
                tickLine={false}
                width={65}
              />

              <Tooltip
                formatter={(value) => [Number(value).toFixed(4), "Cotação"]}
              />

              <Line
                type="monotone"
                dataKey="rate"
                stroke="#2563eb"
                strokeWidth={3}
                dot={{
                  r: 4,
                  fill: "#ffffff",
                  stroke: "#2563eb",
                  strokeWidth: 3,
                }}
                activeDot={{
                  r: 6,
                  fill: "#2563eb",
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
