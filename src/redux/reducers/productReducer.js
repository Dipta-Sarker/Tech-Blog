import { Add_To_Store, DELETE_CONTENT, GET_CONTENT, Singleproduct, UPDATE_CONTENT } from "../actionTypes/actionTypes";

const insitialState = {
    products: [],
    product: [],
    store: []
}

const productReducer = (state = insitialState, action) => {
    const oldProduct = state.products.filter(pro => pro._id !== action.payload)
    const storeProduct = state.store.find(pro => pro._id === action.payload._id)

    switch (action.type) {
        case GET_CONTENT:
            return {
                ...state,
                products: action.payload
            }

        case Singleproduct:
            return {
                ...state,
                product: action.payload
            }

        case DELETE_CONTENT:
            return {
                ...state,
                products: state.products.filter(pro => pro._id !== action.payload)
            }

        case UPDATE_CONTENT:
            return {
                ...state,
                products: [...oldProduct]
            }

        case Add_To_Store:
            if (storeProduct) {
                const newStore = state.store.filter(pro => pro._id !== action.payload._id)
                storeProduct.read = storeProduct.read + 1
                return {
                    ...state,
                    store: [...newStore, storeProduct]
                }
            }
            return {
                ...state,
                store: [...state.store, { ...action.payload, read: 1 }]
            }


        default: return state
    }

}

export default productReducer;