
export const postPrincipal = (arr) => {
    
    for (let i = 0; i < arr.length; i++) {
        let data = arr[i].type
        let typePost = data.toLowerCase();

        if(typePost === 'destacado'){
            return arr[i];
        }
    }
    return null;
};


export const getPosts = (arr) => {
    return arr;
};

export const categories = [
    { label: 'Programación' },
    { label: 'Tecnología' },
    { label: 'VideoJuegos' },
];

export const handleUp = () => {
    window.scrollTo(0, 0);
};

export const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};