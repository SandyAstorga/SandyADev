import { handleUp } from "../../helpers/utils"


export const ButtonScroll = () => {
  return (
    <div style={{background: 'blue', width: '50px' , height: '50px', cursor: 'pointer', translate: '1s'}} onClick={handleUp}>
        ✅
    </div>
  )
}
