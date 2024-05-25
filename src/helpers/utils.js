
export const postPrincipal = (arr) => {
    
    for (let i = 0; i < arr.length; i++) {
        let data = arr[i].type
        let typePost = data.toLowerCase();

        if(typePost === 'principal'){
            return arr[i];
        }
    }
    return null;
};

export const postsDestacados = (arr) => {
    let newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        let data = arr[i].type
        let typePost = data.toLowerCase();

        if(typePost === 'destacado'){
            newArr.push(arr[i]);
        }
    }
    return newArr.length > 0 ? newArr : null;
};


export const getPosts = (arr) => {
    return Promise.resolve(arr);
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

export const responsiveOptions = [
    {
        breakpoint: '1200px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '1190x',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '790px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '556px',
        numVisible: 1,
        numScroll: 1
    }
];
