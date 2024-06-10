
// เพื่อหลีกเลี่ยงการทับซ้อน URL และให้ router ทำงานได้อย่างถูกต้อง คุณสามารถเพิ่ม prop exact 
// ใน <Route> ที่มี path ที่ซ้ำกัน หรือใช้ <Redirect> ในการกำหนดหน้าหลักเมื่อไม่มี path ที่ตรงกับทุกเงื่อนไขของ <Switch>:
import PageOne from "../components/pageone"
import Home from "../components/home"
import PageTwo from "../components/pagetwo"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import con1 from '../components/contant/con1'
import Con1 from "../components/contant/con1"
import Con2 from "../components/contant/con2"
import Con3 from "../components/contant/con3"
import Con4 from "../components/contant/con4"
import Con5 from "../components/contant/con5"
import Con6 from "../components/contant/con6"
import Con7 from "../components/contant/con7"
import Con8 from "../components/contant/con8"
import Con9 from "../components/contant/con9"
import Con10 from "../components/contant/con10"
import Con11 from "../components/contant/con11"
import Con12 from "../components/contant/con12"
import LoginLogout from "../components/login-logout/login-logout"
import Singup from "../components/login-logout/singup"

const Routed = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home"><Home /></Route>
                <Route path="/pageone"><PageOne /></Route>
                <Route path="/pagetwo"><PageTwo /></Route>
                <Route path="/con1"><Con1 /></Route>
                <Route path="/con2"><Con2 /></Route>
                <Route path="/con3"><Con3 /></Route>
                <Route path="/con4"><Con4 /></Route>
                <Route path="/con5"><Con5 /></Route>
                <Route path="/con6"><Con6 /></Route>
                <Route path="/con7"><Con7 /></Route>
                <Route path="/con8"><Con8 /></Route>
                <Route path="/con9"><Con9 /></Route>
                <Route path="/con10"><Con10 /></Route>
                <Route path="/con11"><Con11 /></Route>
                <Route path="/con12"><Con12 /></Route>
                <Route path="/login"><LoginLogout /></Route>
                <Route path="/singup"><Singup /></Route>
                <Redirect from="/" to="/home"/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routed