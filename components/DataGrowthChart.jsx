"use client"
import { useState } from 'react'

export default function DataGrowthChart() {
  const data = [
    { year: 2000, volume: 1 },
    { year: 2005, volume: 2 },
    { year: 2010, volume: 5 },
    { year: 2015, volume: 10 },
    { year: 2020, volume: 20 },
    { year: 2025, volume: 30 }
  ]

  const maxVolume = Math.max(...data.map(d => d.volume))
  const chartHeight = 200
  const chartWidth = 400

  return (
    <div className="card">
      <h2>Data Volume Growth Over Time</h2>
      <p>This chart illustrates the exponential growth of data, highlighting why data mining has become essential.</p>
      <svg width={chartWidth} height={chartHeight} style={{ border: '1px solid var(--border)', margin: '1rem 0', background:'var(--card)' }}>
        {data.map((d, i) => {
          const barHeight = (d.volume / maxVolume) * (chartHeight - 40)
          const barWidth = chartWidth / data.length - 10
          const x = i * (chartWidth / data.length) + 5
          const y = chartHeight - barHeight - 20
          return (
            <g key={i}>
              <rect x={x} y={y} width={barWidth} height={barHeight} fill="var(--brand)" />
              <text x={x + barWidth / 2} y={y - 5} textAnchor="middle" fontSize="12">{d.volume}TB</text>
              <text x={x + barWidth / 2} y={chartHeight - 5} textAnchor="middle" fontSize="12">{d.year}</text>
            </g>
          )
        })}
      </svg>
      <p><strong>Key Insight:</strong> Data volume has grown exponentially, from 1TB in 2000 to an estimated 30TB in 2025. This explosion necessitates automated methods to extract valuable insights.</p>
    </div>
  )
}
