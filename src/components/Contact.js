import '../style/Contact.css'
import { useForm } from "react-hook-form"
import contactImg from '../assets/img/contact.svg'

function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => console.log(data)

    console.log(watch("example")) // watch input value by passing the name of it


    return (
        <section id="contact">
            <div className="container-contact">
                <h1>Contact</h1>
                <img src={contactImg} alt='contact'/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form'>
                        <div className='form-input'>
                            <input placeholder='name' {...register("example")} />
                            <input placeholder='email' {...register("exampleRequired")} />
                            <input placeholder='phone' {...register("exampleRequired2")} />
                        </div>
                        <div className='form-textarea'>
                            <textarea placeholder='message'/>
                        </div>
                        {/* {errors.exampleRequired && <span>This field is required</span>} */}
                    </div>
                    <button type="submit" className='submit'>SEND EMAIL</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;