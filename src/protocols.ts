type Type = {
    id: number,
    name: string,
    image: string
}

type MenuItemData = {
    id: number;
    name: string;
    desc: string;
    sdesc: string;
    price: number;
    image: string;
    typeId: number;
    selled: number;
    extra: {
        id: number;
        name: string;
        image: string;
        price: number;
        desc: string;
    }[];
    type: {
        id: number;
        name: string;
        image: string;
    };
}