import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/Main/Home";
import Dashboard from "../layout/Dashboard/Dashboard";
import ProductList from "../pages/Dashboard/ProductList/ProductList";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import Update from "../pages/Dashboard/Update/Update";
import ProductDetails from "../pages/Main/ProductDetails";
import ReadingHistory from "../pages/Main/ReadingHistory";

const route= createBrowserRouter([{
    path:'/',
    element:<Main></Main>,
    children:[{
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/productDetails/:id',
        element:<ProductDetails></ProductDetails>
    },
    {
        path:'/readingHistory',
        element:<ReadingHistory></ReadingHistory>
    }
]

},

{
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[{
        path:'/dashboard',
        element:<ProductList></ProductList>
    },
    {
        path:'/dashboard/addProduct',
        element:<AddProduct></AddProduct>
    },
    {
        path:'/dashboard/update/:id',
        element:<Update></Update>
    }
]
}
])

export default route;