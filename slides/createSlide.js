export function createSlide({ classes = [], agendaItem = '0', content }) {
    const section = document.createElement('section');
    const extraClasses = Array.isArray(classes)
        ? classes.filter(Boolean)
        : classes
            ? String(classes)
                .split(' ')
                .map(cls => cls.trim())
                .filter(Boolean)
            : [];

    section.classList.add('slide', ...extraClasses);
    section.dataset.agendaItem = agendaItem != null ? String(agendaItem) : '0';
    section.innerHTML = content.trim();

    return section;
}
