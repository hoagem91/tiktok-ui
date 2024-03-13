import Home from "~/pages/home/Home"
import Following from "~/pages/Following/Following"
import Profile from "~/pages/Profile"
import Upload from "~/pages/Upload"
import Search from "~/pages/Search/Home"
import { HeaderOnly } from "~/components/Layout"
const publicRoute = [
    {path:'/',component:Home},
    {path:'/following',component:Following},
    {path:'/profile',component:Profile},
    {path:'/upload',component:Upload , layout:HeaderOnly},
    {path:'/search',component:Search , layout:null}
]
const privateRoute = [

]
export {publicRoute,privateRoute}