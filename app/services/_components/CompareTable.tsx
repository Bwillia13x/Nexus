'use client';

import { compareTableData } from '../_content';

export default function CompareTable() {
  return (
    <section
      id="compare"
      className="py-16 md:py-24"
      aria-labelledby="compare-services-heading"
    >
      <div className="mx-auto max-w-container px-4">
        <h2
          id="compare-services-heading"
          className="text-heading text-center mb-12 text-balance text-pretty"
        >
          Compare Services
        </h2>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <div className="rounded-lg overflow-hidden min-w-full border border-glass-border bg-glass-2 backdrop-blur-xl shadow-e3">
            <table className="w-full text-sm">
              <caption className="sr-only">{compareTableData.caption}</caption>
              <thead className="bg-gradient-to-r from-primary/10 to-primary/0">
                <tr>
                  <th
                    scope="col"
                    className="sticky left-0 bg-glass-3 backdrop-blur z-10 p-4 text-left font-semibold min-w-[200px]"
                  >
                    <span className="sr-only">Feature</span>
                  </th>
                  {compareTableData.columns.map((col, index) => (
                    <th
                      key={col}
                      scope="col"
                      className="p-4 text-center font-semibold min-w-[200px]"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="[&_tr:nth-child(even)]:bg-black/2">
                {compareTableData.rows.map((row, rowIndex) => (
                  <tr key={row.label} className="border-t border-gray-100">
                    <th
                      scope="row"
                      className="sticky left-0 bg-glass-3 backdrop-blur z-10 p-4 text-muted-foreground font-medium text-left"
                    >
                      {row.label}
                    </th>
                    {row.values.map((value, colIndex) => (
                      <td key={colIndex} className="p-4 text-center text-muted">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="md:hidden space-y-4">
          {compareTableData.columns.map((service, serviceIndex) => (
            <div key={service} className="card-glass glass-liquid p-4">
              <h3 className="font-semibold mb-4 text-center">{service}</h3>
              <div className="space-y-3">
                {compareTableData.rows.map((row, rowIndex) => (
                  <div key={row.label} className="flex flex-col gap-1">
                    <span className="font-medium text-muted-foreground text-sm">
                      {row.label}
                    </span>
                    <span className="text-muted">
                      {row.values[serviceIndex]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
