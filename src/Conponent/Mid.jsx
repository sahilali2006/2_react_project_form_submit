const Mid = ()=>{


    const chat = ()=>{
        alert("If You Want Chat With Us than Connect On '8858446039' ")
    
    }

    const call = ()=>{
        alert("If You Want to Call than Connect On '8858446039' ")
    
    }

    const mail = ()=>{
        alert("If You Want to Chat VIA Email than Connect on 'sahil@gmail.com'")
    }

    const submit = ()=>{
         alert("Submited 'ThankYou'")
  
    }


    return(
<div className="mid">

<div className="left">

    <div className="but">
        <button className="support" onClick={chat} >   VIA Support Chat</button>
        <button className="support" onClick={call}> VIA Call</button>
    </div>

<button className="mail" onClick={mail}> VIA Email Form </button>

<br />


<input type="text" placeholder="Name" className="name" />

<input type="email" placeholder="Email" className="name" />

<input type="name" placeholder="" className="text" />

<br />

<button className="submit" onClick={submit}>Submit</button>

</div>

<div className="right">
    <img src="https://raw.githubusercontent.com/anshuopinion/React-10-Projects/f3baadbbaca5c4dab15b4a811e8649d1f9f79473/project-2/public/images/contact.svg" alt="" />
</div>

</div>
    )
}

export default Mid;