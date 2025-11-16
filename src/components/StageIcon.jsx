import React from 'react'
import { motion } from 'framer-motion'


export default function StageIcon({stage, onClick, tabIndex}){
return (
<motion.button
className="stageIcon"
style={{left: stage.position.x, top: stage.position.y}}
onClick={()=> onClick(stage)}
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.98 }}
initial={{ opacity:0, y:8 }}
animate={{ opacity:1, y:0 }}
transition={{ duration:0.45, delay:0.12 }}
aria-label={stage.title}
tabIndex={tabIndex}
>
<img src={stage.image} alt={stage.title} style={{width:'100%', height:'100%'}} />
</motion.button>
)
}