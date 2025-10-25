import { createSlide } from './createSlide.js';

export default function slide06() {
    return createSlide({
        agendaItem: '2',
        content: /* html */`
            <div class="kicker">2. Estado Actual: Impacto del Piloto</div>
            <h2>Reducción de Costos Proyectada (Y1)</h2>
            <p>Simulación basada en el piloto del Q3.</p>
            <div class="chart-container">
                <svg viewBox="0 0 500 300" preserveAspectRatio="xMidYMid meet" aria-labelledby="chart-title" role="img">
                    <title id="chart-title">Gráfico de barras de reducción de costos</title>
                    <g class="grid" stroke="#e0e0e0" stroke-width="1">
                        <line x1="50" y1="250" x2="480" y2="250"></line>
                        <line x1="50" y1="250" x2="50" y2="50"></line>
                        <line x1="50" y1="50" x2="480" y2="50" stroke-dasharray="2,2"></line>
                        <line x1="50" y1="150" x2="480" y2="150" stroke-dasharray="2,2"></line>
                    </g>
                    <g class="labels y-labels" fill="#6c757d" font-size="12" font-family="var(--font-main)" text-anchor="end">
                        <text x="40" y="255">0%</text>
                        <text x="40" y="155">5%</text>
                        <text x="40" y="55">10%</text>
                    </g>
                    <g class="labels x-labels" fill="#6c757d" font-size="12" font-family="var(--font-main)" text-anchor="middle">
                        <text x="105" y="270">Q1</text>
                        <text x="205" y="270">Q2</text>
                        <text x="305" y="270">Q3 (Piloto)</text>
                        <text x="405" y="270">Q4 (Proy.)</text>
                    </g>
                    <g class="bars" transform="translate(0, 250) scale(1, -1)">
                        <rect class="bar bar-1" x="80" y="0" width="50" height="60" fill="rgba(79, 31, 255, 0.4)"></rect>
                        <rect class="bar bar-2" x="180" y="0" width="50" height="80" fill="rgba(79, 31, 255, 0.6)"></rect>
                        <rect class="bar bar-3" x="280" y="0" width="50" height="140" fill="var(--color-text-secondary)"></rect>
                        <rect class="bar bar-4" x="380" y="0" width="50" height="180" fill="var(--color-primary)"></rect>
                    </g>
                </svg>
            </div>
        `,
    });
}
