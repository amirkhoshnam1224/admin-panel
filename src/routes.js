import Home from "./pages/home/Home"
import NewUser from "./pages/newuser/NewUser.jsx"
import Products from "./pages/products.js/Products.jsx"
import UserList from "./pages/userlist/UserList.js"
import Product from "./pages/product/Product.jsx"
let Routes=[
    {path:'/',element:<Home/>},
    {path:'/user',element:<UserList/>},
    {path:'/newuser',element:<NewUser/>},
    {path:'/products',element:<Products/>},
    {path:'/products/:productID',element:<Product/>}
]
export default Routes