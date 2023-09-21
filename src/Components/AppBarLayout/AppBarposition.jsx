
import { AppBarPositioning } from "./MakingAppBarStatic"

export const AppbarStatic=({children})=>{
    return (
        <div>
            <AppBarPositioning/>
            {children}
        </div>
    )
}