import { createSlide } from './createSlide.js';

export default function slide02() {
    return createSlide({
        agendaItem: '0',
        content: /* html */`
            <div class="kicker">Nuestra Hoja de Ruta</div>
            <h2>Agenda de la Reunión</h2>
            <ol class="agenda-list">
                <li>Introducción y contexto</li>
                <li>Estado actual del programa</li>
                <li>Análisis Conjunto y Sinergias Dx y Tx</li>
                <li>Mejores Prácticas y Aprendizajes</li>
                <li>Próximos pasos</li>
            </ol>
        `,
    });
}
