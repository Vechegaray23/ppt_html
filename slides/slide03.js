import { createSlide } from './createSlide.js';

export default function slide03() {
    return createSlide({
        classes: ['warning-icon'],
        agendaItem: '1',
        content: /* html */`
            <div class="slide-content-split">
                <div class="text-content">
                    <div class="kicker">1. Contexto: El Desafío</div>
                    <h2>La Fricción Oculta que Cuesta Millones</h2>
                    <p>Nuestros procesos manuales de logística y asignación de recursos generan un <strong>15% de ineficiencia</strong> medible.</p>
                    <p>Esto se traduce en retrasos, aumento de costos operativos y una capacidad de respuesta lenta ante la demanda del mercado.</p>
                </div>
                <div class="visual-content">
                    <svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                </div>
            </div>
        `,
    });
}
