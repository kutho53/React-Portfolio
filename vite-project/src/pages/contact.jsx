
export default function Contact(){

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Your message has been sent.`);
        console.log("Form Data Submitted: ", formData);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    return(
        <section id='contact'>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input 
                    type='text'
                    id='name'
                    name='name'
                    className='formControl'
                    value={FormData.nam} 
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    />
                </label>
                <label>Email Address:
                    <input 
                    type='text'
                    id='emailAddress'
                    name='emailAddress'
                    className='formControl'
                    value={FormData.emailAddress} 
                    onChange={handleChange}
                    required
                    placeholder="Enter a valid email address"
                    />
                </label>
                <label>Message:
                    <input 
                    type='text'
                    id='message'
                    name='message'
                    className='formControl'
                    value={FormData.message} 
                    onChange={handleChange}
                    required
                    placeholder="Enter your message"
                    />
                </label>
                <input type='submit' />
            </form>
        </section>
    )
}