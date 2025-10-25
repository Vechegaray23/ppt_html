import { createSlide } from './createSlide.js';

export default function slide10() {
    return createSlide({
        classes: ['end-slide'],
        agendaItem: '0',
        content: /* html */`
            <h2>Gracias.</h2>
            <p>Abrimos el espacio para preguntas.</p>
        `,
    });
}
