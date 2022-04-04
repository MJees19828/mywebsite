import React from "react"

function Footer() {
    return(
        <footer>
        <div className="yison">
        <h1>Yison Tech Hub</h1>
        <p>A Ghanaian based MGO dedicated to promoting tech innovation for repid prototyping of ideas budding  local innovations impact, startupps  support</p>
        <p> we are located behind Tampalpani Clinic Opposite Jahan College of Education Wa, Upper West Region-Ghana,West Africa</p>
        <h5> Working Hours :<br/> <mark>mon</mark>-<mark>friday</mark> : 8:30am-5:00pm</h5>
        </div>
        <div className="sub-container">
        <h1>subscribe to our news letter</h1>
        <input type="email" placeholder="email address"required />
        <button> Subscribe </button>

        </div>
        </footer>
    )
}