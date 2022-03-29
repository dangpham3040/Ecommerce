
const initProduct = {
    name: '',
    numberCart: 0,
    Carts: [],
    _products: [
        {
            id: 0,
            title: 'Minimal Chair ',
            price: 235,
            dec: 'lorem Ipsum',
            pic: 'https://jusdialogus.com/wp-content/uploads/2019/09/p1.jpg',
        },
        {
            id: 1,
            title: 'Elegant White Chair',
            price: 124,
            dec: 'lorem Ipsum',
            pic: 'https://lh3.googleusercontent.com/2o4Zp9_zvsh_BIlNo2s3WwOb-zZrlhDNuC43SDaGRQp_fWBoRJPL27JWH3at40jk52IY=s85',

        },
        {
            id: 2,
            title: 'Vintage Chair',
            price: 89,
            dec: 'lorem Ipsum',
            pic: 'https://decosy.com/web/image/product.template/379/image',

        },]
}
class product {
    constructor(id, title, price, dec, pic) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.dec = dec;
        this.pic = pic;
        this.check = "false";
        this.quantity = 1;
    }
}
export const counterReducer = (state = initProduct, action) => {
    const p = new product(action.id, action.title, action.price, action.dec, action.pic);
    switch (action.type) {
        case "ADD_CART":
            if (state.numberCart == 0) {
                state.Carts.push(p);
                state.numberCart++;
            }
            else {
                let check = false;
                state.Carts.map((item, key) => {
                    if (item.id == action.id) {
                        state.Carts[key].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    state.Carts.push(p);
                    state.numberCart++;
                }
            }
            console.log("cong : " + state.numberCart);
            return state;
        case 'REMOVE_CART':
            state.Carts.slice(p, 1);
            state.numberCart - 1;
            return state;
        case 'ADD_quantity':
            state.Carts.map((item, key) => {
                if (item.id == action.id) {
                    state.Carts[key].quantity++;
                }
            });
            return {
                ...state,
                numberCart: state.numberCart + 1
            }
            return state;
        case 'DEC_quantity':
            state.Carts.map((item, key) => {
                if (item.id == action.id) {
                    state.Carts[key].quantity--;
                }
            });
            return {
                ...state,
                numberCart: state.numberCart - 1
            }
            return state;
        case 'GET_product':
            return {
                ...state,
            }
        case 'GET_numbercart':
            return {
                ...state
            }
        case 'SET_name':
            state.name = action.name;
            return state;
        default:
            return state;

    }
}
export default counterReducer;