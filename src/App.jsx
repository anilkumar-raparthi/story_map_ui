import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import StageIcon from './components/StageIcon'
import InfoPopup from './components/InfoPopup'
import AnimatedArrow from './components/AnimatedArrow'
import stagesData from './data/stages.json'


export default function App(){
const [stages, setStages] = useState([])
const [active, setActive] = useState(null)


useEffect(()=>{
// load JSON (already imported) and set
setStages(stagesData)
},[])


function handleOpen(stage){
setActive(stage)
}
function handleClose(){ setActive(null) }


// compute arrow pairs
const arrows = stages.slice(0, stages.length-1).map((s,i)=>({from: {x: s.position.x+70, y: s.position.y+40}, to: {x: stages[i+1].position.x+20, y: stages[i+1].position.y+40}}))


return (
<div>
<Header />
<main className="container">
<section className="mapWrap" aria-label="Butterfly life cycle map">
{/* background illustrations */}
<img src="src/assets/sparkle.svg" alt="" style={{position:'absolute', left:24, top:12, width:40, opacity:0.9}} aria-hidden />
<img src="src/assets/sun.svg" alt="Sun" style={{position:'absolute', right:24, top:12, width:84, opacity:0.95}} />


{/* arrows (SVG overlay) */}
{arrows.map((a,idx)=> (
<AnimatedArrow key={idx} from={a.from} to={a.to} />
))}


{/* stage nodes */}
{stages.map((s,idx)=> (
<StageIcon key={s.id} stage={s} onClick={handleOpen} tabIndex={idx+1} />
))}


</section>
</main>


<InfoPopup open={!!active} onClose={handleClose} stage={active} />
</div>
)
}