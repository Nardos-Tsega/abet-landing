type ComparisonRow = {
  label: string;
  traditional: string;
  pod: string;
};

const ROWS: ComparisonRow[] = [
  { label: "Time to first commit", traditional: "90+ days", pod: "21 days" },
  { label: "Headcount", traditional: "1", pod: "3 (1 Lead + 2 Senior)" },
  { label: "Recruitment fee", traditional: "~20% of salary", pod: "None" },
  { label: "Equity dilution", traditional: "Yes", pod: "None" },
  { label: "Single point of failure", traditional: "Yes", pod: "No — hot-swap redundancy built in" },
  { label: "Scaling timeline", traditional: "90+ days per hire", pod: "21 days per additional Pod" },
  { label: "Monthly cost", traditional: "1× senior salary + overhead", pod: "Fixed subscription OpEx" },
];

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-[var(--border-subtle)] bg-white shadow-sm">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-[var(--border-subtle)] bg-[var(--surface-section-muted)]">
            <th scope="col" className="px-5 py-4 font-medium text-stone-500">
              Metric
            </th>
            <th scope="col" className="px-5 py-4 font-semibold text-stone-900">
              Traditional Senior Hire
            </th>
            <th scope="col" className="px-5 py-4 font-semibold text-stone-900">
              Sovereign Pod
            </th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.label} className="border-b border-[var(--border-subtle)] last:border-b-0">
              <th scope="row" className="px-5 py-4 font-medium text-stone-700">
                {row.label}
              </th>
              <td className="px-5 py-4 text-stone-600">{row.traditional}</td>
              <td className="px-5 py-4 font-medium text-stone-900">{row.pod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
