import { Accordion, AccordionItem, Button, Input, Link, Modal, ModalBody, ModalContent, ModalHeader, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure } from "@nextui-org/react";
import NextImage from "next/image";
import small from "../images/shedCatalog/small1.png"
import medium from "../images/shedCatalog/medium1.png"
import large from "../images/shedCatalog/large1.png"
import heroImage from "../images/heroSection/hero1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faDollarSign, faHouseCircleCheck, faUsers } from "@fortawesome/free-solid-svg-icons";
import Form from "@/components/Form";

export default function Home() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    
    const shedCatalog = [
        {
            size: "Теплиця мінімум (2.04м х 1.32м x 1.85м)",
            image: small,
            price: "3500 грн."
        },
        {
            size: "Теплиця середня (2.05м x 2.57м х 1.78м)",
            image: medium,
            price: "5200 грн."
        },
        {
            size: "Теплиця квадрат (1.9м x 1.21м х 1.8м)",
            image: large,
            price: "4200 грн."
        }
    ]

    const socialLinks = [
        {
            href: "sms:+380506521564",
            icon: faComments,
            heading: "Текстові повідомлення",
            description: "050 652 1564"
        },
        {
            href: "mailto:shed-building@gmail.com",
            icon: faEnvelope,
            heading: "Email",
            description: "shed-buiding@gmail.com"
        },
        {
            href: "https://wa.me/10506521564",
            icon: faWhatsapp,
            heading: "WhatsApp",
            description: "050 652 1564"
        }
    ]
    
    return (
        <div>
            {/* HERO section */}
            <section className="bg-white" id="home">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-16 xl:gap-0 lg:pt-16 lg:pb-5 lg:grid-cols-12 ">
                {/* <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-16 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-primary-300"> */}
                    <div className="mr-auto place-self-center lg:col-span-6 xl:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl text-heading font-semibold tracking-tight leading-none md:text-6xl">Вітаємо у світі теплиць!</h1>
                        <p className="max-w-2xl mb-6 text-lg text-subheading lg:mb-8 md:text-xl lg:text-2xl">Не переплачуйте - Зробіть правильний вибір і замовте теплицю для вашого дому прямо сьогодні!</p>
                        
                        <Button as={Link} onPress={onOpen} className="m-auto inline-flex items-center justify-center px-10 py-5 text-xl text-center font-semibold text-white rounded-lg bg-red-700 md:text-2xl md:px-10 md:py-8">Напишіть нам</Button>
                    </div>   
                    <div className="hidden lg:mt-0 lg:col-span-6 xl:col-span-5 lg:flex">
                        <NextImage src={heroImage} alt="Shed image" className="rounded-xl"/>
                    </div>
                </div>
            </section>
            

            {/* SHED CATALOG section */}
            <section className="bg-white" id="sheds">
                <div className="pb-8 px-4 mx-auto max-w-screen-xl lg:py-8">
                    <div className="mx-auto max-w-screen-xl mb-8">
                        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-heading md:text-5xl lg:text-center">Каталог теплиць</h2>
                        <p className="text-lg text-subheading sm:text-xl lg:text-2xl lg:text-center">Наші теплиці містять усе необхідне для зберігання і правильного розвитку ваших розсад і є ідеальним рішенням для тих, хто цінує функціональність</p>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        {shedCatalog.map((shed, index) => (
                            <div key={index} className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow">
                                <NextImage src={shed.image} alt={`${shed.size} shed image`} className="mb-4 rounded-lg my-auto" />
                                <h3 className="text-2xl font-semibold">{shed.size}</h3>
                                <div className="flex justify-center items-baseline my-5">
                                    <span className="mr-2 text-4xl font-semibold text-red-600">{shed.price}</span>
                                </div>
                                <ul role="list" className="mb-8 space-y-4 text-left">
                                    <li className="flex items-center space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Атмосферостійкі матеріали</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Доставка та встановка теплиці включені у вартість</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Індивідуальний вибір кольору</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Безкоштовне обслуговування</span>
                                    </li>
                                </ul>
                                <Button as={Link} onPress={onOpen} className="text-white bg-red-700 font-medium rounded-lg text-xl px-3 py-2 text-center mt-auto">Напишіть нам</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ABOUT section */}
            <section className="bg-white" id="about">
                <div className="pt-8 px-4 mx-auto max-w-screen-xl">
                    <div className="max-w-screen-lg mb-8">
                        <h2 className="mb-4 text-3xl tracking-tight font-semibold text-heading md:text-5xl">Ми будуємо довіру, а не тільки теплиці</h2>
                        <p className="text-subheading text-lg lg:text-2xl">Наша місія — надихати наших клієнтів, роблячи ваше життя зручнішим і кращим. Ми завжди унікально обслуговуємо кожного клієнта. Ми гарантуємо якість продукції та забезпечуємо безкоштовне обслуговування</p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2  md:gap-12 md:space-y-0">
                        <div>
                            <div className="flex justify-center mx-auto items-center mb-4 w-20 h-20 rounded-full bg-red-200">
                                <FontAwesomeIcon icon={faHouseCircleCheck} className="fa-2x" />    
                            </div>
                            <h3 className="mb-2 text-2xl font-semibold text-center">Персональна увага до кожного клієнта</h3>
                            <p className="text-subheading text-lg">Ми розуміємо, що кожен клієнт має унікальну історію та специфічні вимоги. Наша команда приділяє час, щоб вислухати ваші потреби, гарантуючи, що кожен проект відображає вашу особистість і спосіб життя</p>
                        </div>
                        <div >
                            <div className="flex justify-center mx-auto items-center mb-4 w-20 h-20 rounded-full bg-red-200">
                                <FontAwesomeIcon icon={faDollarSign} className="fa-2x" />    
                            </div>
                            <h3 className="mb-2 text-2xl font-semibold text-center">Прагнення до якості та доступності</h3>
                            <p className="text-subheading text-lg">Прагнення до якості та доступності при будівництві теплиць є очевидним завдяки використанню високоякісних матеріалів та ретельному будівництву, щоб забезпечити міцність конструкції та довговічність. При цьому увага приділяється доступності матеріалів і технологій, щоб зробити будівництво теплиць доступним для широкого кола людей без шкоди для якості та безпеки.</p>
                        </div>
                    </div>
                    <div className="mt-12" id="sizes">
                        <h2 className="mb-7 text-3xl font-semibold tracking-tight text-heading md:text-5xl lg:text-center">Розміри теплиць</h2>
                        <Table isStriped aria-label="Shed sizes and price table">
                            <TableHeader>
                                <TableColumn className="text-md xl:text-xl bg-red-200 text-heading"> РОЗМІР </TableColumn>
                                <TableColumn className="text-md xl:text-xl bg-red-200 text-heading"> ЦІНА </TableColumn>
                            </TableHeader>
                            <TableBody>
                                <TableRow key="1"> 
                                    <TableCell className="text-md xl:text-xl">1.9м x 1.21м х 1.8м </TableCell>
                                    <TableCell className="text-md xl:text-xl">3500 грн.</TableCell>
                                </TableRow>
                                <TableRow key="2"> 
                                    <TableCell className="text-md xl:text-xl">2.04м х 1.32м x 1.85м</TableCell>
                                    <TableCell className="text-md xl:text-xl">4200 грн.</TableCell>
                                </TableRow>
                                <TableRow key="3"> 
                                    <TableCell className="text-md xl:text-xl">2.05м x 2.57м х 1.78м</TableCell>
                                    <TableCell className="text-md xl:text-xl">5200 грн.</TableCell>
                                </TableRow>
                                <TableRow key="4"> 
                                    <TableCell className="text-md xl:text-xl">2.14м х 1.5м x 2.12м</TableCell>
                                    <TableCell className="text-md xl:text-xl">5750 грн.</TableCell>
                                </TableRow>
                                <TableRow key="5"> 
                                    <TableCell className="text-md xl:text-xl">2м х 1.5м x 2.5м</TableCell>
                                    <TableCell className="text-md xl:text-xl">5900 грн.</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </section>

            {/* FAQ section */}
            <section className="bg-white" id="faq">
                <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
                    <h2 className="mb-8 text-3xl text-center tracking-tight font-semibold text-heading md:text-5xl">Поширені запитання</h2>
                    <div className="grid pt-8 text-left border-t gap-4 border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                        <Accordion variant="bordered"> 
                            <AccordionItem key="1" aria-label="Accordion 1" title="Скільки часу займає будівництво та встановлення теплиці?">
                                Терміни будівництва та встановлення теплиці можуть змінюватись залежно від складності конструкції та рівня налаштування. Як правило, теплиця може бути побудована і встановлена протягом 5-7 днів з моменту замовлення.
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Accordion 2" title="Чи надаєте ви гарантію на свої сараї?">
                                Ми відстоюємо якість нашої роботи і надаємо гарантію, яка покриває всі дефекти. Тривалість гарантії - 3 роки.
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Accordion 3" title="Ваші теплиці стійкі до погодних умов?">
                                Так, усі наші теплиці побудовані з високоякісних матеріалів, які вибрано за їх довговічністю та стійкістю до погодних умов. Ми також наносимо захисне покриття для захисту від стихій.
                            </AccordionItem>
                        </Accordion>
                        <Accordion variant="bordered">
                            <AccordionItem key="4" aria-label="Accordion 4" title="Чи потрібен мені дозвіл на встановлення теплиці на своїй території?">
                                Дозволи не потрібні для встановлення теплиці на вашій території.
                            </AccordionItem>    
                            <AccordionItem key="5" aria-label="Accordion 5" title="Як я можу отримати ціну на сарай?">
                                Ви можете отримати цінову пропозицію, зв'язавшись з нами безпосередньо через наш сайт або по телефону. Ми обговоримо ваші потреби, вподобання та особливості вашої нерухомості, щоб надати вам детальний кошторис.
                            </AccordionItem>  
                            <AccordionItem key="6" aria-label="Accordion 6" title="Які можливі розміри та ціни теплиць, які ви можете побудувати?">
                                <Table isStriped aria-label="Shed sizes and price table">
                                    <TableHeader>
                                        <TableColumn className="text-md xl:text-xl bg-red-200 text-heading"> РОЗМІР </TableColumn>
                                        <TableColumn className="text-md xl:text-xl bg-red-200 text-heading"> ЦІНА </TableColumn>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow key="1"> 
                                            <TableCell className="text-md xl:text-xl">1.9м x 1.21м х 1.8м </TableCell>
                                            <TableCell className="text-md xl:text-xl">3500 грн.</TableCell>
                                        </TableRow>
                                        <TableRow key="2"> 
                                            <TableCell className="text-md xl:text-xl">2.04м х 1.32м x 1.85м</TableCell>
                                            <TableCell className="text-md xl:text-xl">4200 грн.</TableCell>
                                        </TableRow>
                                        <TableRow key="3"> 
                                            <TableCell className="text-md xl:text-xl">2.05м x 2.57м х 1.78м</TableCell>
                                            <TableCell className="text-md xl:text-xl">5200 грн.</TableCell>
                                        </TableRow>
                                        <TableRow key="4"> 
                                            <TableCell className="text-md xl:text-xl">2.14м х 1.5м x 2.12м</TableCell>
                                            <TableCell className="text-md xl:text-xl">5750 грн.</TableCell>
                                        </TableRow>
                                        <TableRow key="5"> 
                                            <TableCell className="text-md xl:text-xl">2м х 1.5м x 2.5м</TableCell>
                                            <TableCell className="text-md xl:text-xl">5900 грн.</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>


            {/* CONTACT section */}
            <section className="bg-white" id="contact">
                {/* FORM div */}
                <Form />

                <div className="max-w-screen-lg mb-4 md:flex md:justify-around md:align-middle md:m-auto md:mb-6 text-center">
                    {socialLinks.map((link, index) => (
                        <div key={index}>
                            <a href={link.href} target="blank"><FontAwesomeIcon icon={link.icon} className="fa-4x" /></a>
                            <a href={link.href} target="blank"><h4 className="text-2xl font-semibold font-heading">{link.heading}</h4></a>
                            <Link href={link.href} target="blank" color="danger" className="mb-4 text-xl font-semibold text-red-600" isBlock showAnchorIcon>{link.description}</Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal window */}
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" className="pb-7" >
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">Зв'язатись з нами</ModalHeader>
                    <ModalBody>
                        <Button as={Link} color="primary" target="blank" startContent={<FontAwesomeIcon icon={faComments} />} href="sms:+14044165745" className="text-lg font-bold text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-primary-300">Текстові повідомлення</Button>
                        <Button as={Link} color="danger" target="blank" startContent={<FontAwesomeIcon icon={faEnvelope} />} href="mailto:armaxrenovation@gmail.com" className="text-lg font-bold text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-primary-300">Email</Button>
                        <Button as={Link} color="success" target="blank" startContent={<FontAwesomeIcon icon={faWhatsapp} />} href="https://wa.me/14044165745" className="text-lg font-bold text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-primary-300">WhatsApp</Button>        
                    </ModalBody>
                    </>
                )}
                </ModalContent>
            </Modal>
        </div>   
    )
}