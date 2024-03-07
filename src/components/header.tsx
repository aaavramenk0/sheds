import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NextImage from "next/image";
import logo from "../images/logo1.png"

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    }

    const menuItems = [
        { label: "Головна", href: "#home" },
        { label: "Каталог", href: "#sheds" },
        { label: "Про нас", href: "#about" },
        { label: "Ціни", href: "#sizes" },
        { label: "Поширені питання", href: "#faq" },
        { label: "Контакти", href: "#contact" }
    ]
    
    return (
        <Navbar isBordered disableAnimation position="sticky" onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
            <NavbarContent className="lg:hidden" justify="center">
                <NavbarBrand>
                    <NextImage src={logo} width={48} alt="Logo of the company" />
                    <Link href="#home" color="foreground"><span className="font-semibold text-[26px] pl-2 xxs:text-[14px] xs:text-[22px]">Sheds For Everyone</span></Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="lg:hidden" justify="end">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>
            </NavbarContent>

            <NavbarContent className="hidden lg:flex gap-8" justify="center">
                <NavbarBrand>
                    <NextImage src={logo} width={48} alt="Logo of the company" />
                    <Link href="#home" color="foreground"><span className="font-bold lg:text-red-500 text-xl pl-3">Sheds For Everyone</span></Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden lg:flex gap-8" justify="end">
                {menuItems.map((item, index) => (
                    <NavbarItem isActive={pathname == `${item.href}` ? true : false} key={index}>
                        <Link color="foreground" onClick={handleMenuClose} href={item.href} className="text-[18px] lg:text-red-500 font-semibold">
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link className="w-full" onClick={handleMenuClose} color="foreground" href={item.href} size="lg">{item.label}</Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
} 