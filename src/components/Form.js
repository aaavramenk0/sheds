/* eslint-disable react/no-unescaped-entities */
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

const formInputs = [
    {
        type: "text",
        id: "name",
        name: "client_name",
        placeholder: "Ім'я та прізвище",
        required: true,
        label: `Ваше ім'я`
    },
    {
        type: "email",
        id: "email",
        name: "client_email",
        placeholder: "name@example.com",
        required: true,
        label: "Ваша електронна пошта"
    },
    {
        type: "tel",
        id: "phone",
        name: "client_phone",
        placeholder: "123 456 7890",
        required: true,
        label: "Ваш номер телефону"
    }
]

const Form = () => {
    const form = useRef();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_60d2ovq', 'template_1v08ovx', form.current, { publicKey: 'c3wYcruUL-Jeg_u2d' })
            .then(
                (result) => {
                    form.current.reset();
                    setIsSuccess(true);
                    setIsModalOpen(true);
                },
                (error) => {
                    setIsSuccess(false);
                }
            )
    }

    return (
        <>
            <div className="py-5 lg:py-8 px-4 mx-auto max-w-screen-lg">
                <h2 className="mb-4 text-3xl tracking-tight font-semibold text-center text-heading md:text-5xl">Зв'язатись з нами</h2>
                <form ref={form} onSubmit={sendEmail} className="space-y-8 text-center">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-lg font-medium text-gray-900 text-left lg:text-xl">Ваше ім'я</label>
                        <input    
                            type='text'
                            id='name'
                            name="client_name"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5 text-md rounded-lg"
                            placeholder="Ім'я та прізвище"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900 text-left lg:text-xl">Ваша електронна пошта</label>
                        <input    
                            type='email'
                            id='email'
                            name="client_email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5 text-md rounded-lg"
                            placeholder="name@example.com"
                            required
                        />
                    </div>
                    <div> 
                        <label htmlFor="phone" className="block mb-2 text-lg font-medium text-gray-900 text-left lg:text-xl">Ваш номер телефону</label>
                        <input    
                            type='tel'
                            id='phone'
                            name="client_phone"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5 text-md rounded-lg"
                            placeholder="+38 234 567 8901"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-900 text-left lg:text-xl">Ваше повідомлення</label>
                        <textarea
                            id="message"
                            name="client_message"
                            rows={6}
                            className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
                            placeholder="Як ми можемо вам допомогти..."
                        />
                    </div>
                    <input type="submit" value="Відправити повідомлення" className="text-white px-10 py-2 bg-red-700 font-medium rounded-lg text-xl text-center hover:cursor-pointer"/>
                </form>
            </div>
            
            <Modal isOpen={isModalOpen} backdrop="blur" hideCloseButton>
                <ModalContent>
                    <ModalHeader>
                        <h2 className={`${isSuccess ? "text-green-700" : "text-red-700"} text-2xl font-semibold m-auto`}>{isSuccess ? "Success" : "Error"}</h2>
                    </ModalHeader>
                    <ModalBody>
                        <p className={`${isSuccess ? "text-green-700" : "text-red-700"} text-lg text-center`}>{isSuccess ? "Your message has been sent successfully." : "An error occurred while sending your message. Please try again later."}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button className={`${isSuccess ? 'bg-green-700' : 'bg-red-700'} text-white text-lg m-auto`} variant="solid" onPress={()=> {setIsModalOpen(false)}}> Close </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>

        
    )
}

export default Form;