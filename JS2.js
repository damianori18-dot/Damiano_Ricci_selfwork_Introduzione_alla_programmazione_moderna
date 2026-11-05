export const aggiungiContatti = (oggetto, listaNomi) => {
    oggetto.contatti = listaNomi;
    return oggetto;
};

export const Contatti = ({ contatti = 'Nessun contatto' }) => `I contatti sono: ${contatti}`;


