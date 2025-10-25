import { createSlide } from './createSlide.js';

export default function slide01() {
    return createSlide({
        classes: ['title-slide'],
        agendaItem: '0',
        content: /* html */`
            <div class="kicker">Confidencial // Comité Ejecutivo</div>
            <h1>Proyecto Centauri: Redefiniendo la Eficiencia Operativa</h1>
            <p class="subtitle">Una nueva era de optimización impulsada por IA y Data.</p>
            <p style="margin-top: 2rem; color: #6c757d;">Octubre 2025</p>
        `,
    });
}
