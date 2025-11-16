import React from 'react'


export default function AnimatedArrow({from, to, strokeWidth=5}){
// Draw a simple curved path from two points
const midX = (from.x + to.x)/2;
const path = `M ${from.x} ${from.y} Q ${midX} ${Math.min(from.y,to.y)-60} ${to.x} ${to.y}`;
return (
<svg className="arrowSvg" style={{left:0, top:0, width:'100%', height:'100%'}} preserveAspectRatio="none">
<path d={path} fill="none" stroke="#f1a94b" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeOpacity={0.95} />
<path d={path} fill="none" stroke="#ffd76a" strokeWidth={strokeWidth-2} strokeLinecap="round" strokeLinejoin="round" strokeOpacity={0.4} strokeDasharray="8 6"/>
</svg>
)
}