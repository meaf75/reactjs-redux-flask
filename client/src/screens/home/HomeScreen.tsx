import { useEffect, useState } from "react"
import { SimpleTransition } from "../../components/molecules/SimpleTransition"
import { TrendingMatches } from "../../components/organisms/TrendingMatches"
import { UserPresentation } from "../../components/molecules/UserPresentation"
import { HomeHeader } from "../../components/organisms/HomeHeader"
import { HomeSliders } from "./HomeSliders"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { useHistory } from "react-router-dom"

export const HomeScreen = () => {

    const history = useHistory();
    const user = useSelector((state: RootState) => state.app.user);
    const [renderContent, setRenderContent] = useState(false);

    useEffect(() => {
        setRenderContent(true);
    }, [])

    useEffect(() => {
        if(!user)    // Redirect component not working
            history.push('/login')
    }, [user])

    return (        
        <SimpleTransition isOpen={renderContent}>
            <div>
                <HomeHeader />
                <HomeSliders />
                <UserPresentation />
                <TrendingMatches />
            </div>
        </SimpleTransition>
    )
}

