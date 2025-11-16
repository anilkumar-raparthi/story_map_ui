import React from 'react'


export default function Header(){
return (
<header className="header" role="banner">
<div style={{width:64}} aria-hidden>
{/* tiny sun inline svg */}
<svg width="64" height="64" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="28" fill="#ffd76a" stroke="#ffb84a" strokeWidth="4"/></svg>
</div>
<div>
<h1 className="title">The Life Story of Butterflies</h1>
<div style={{color:'#6b6b6b', fontSize:13}}>Interactive, playful infographic — click a stage to learn more</div>
</div>
</header>
)
}