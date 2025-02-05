export default function Contact(){

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Your message has been sent.`)
    }
    return(
        <section id='contact'>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input 
                    type='text'
                    // value={name} 
                    />
                </label>
                <label>Email Address:
                    <input 
                    type='text'
                    // value={emailAddress} 
                    />
                </label>
                <label>Message:
                    <input 
                    type='text'
                    // value={message} 
                    />
                </label>
                <input type='submit' />
            </form>
        </section>
    )
}