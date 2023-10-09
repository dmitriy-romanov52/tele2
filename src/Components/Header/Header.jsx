"use client"
import Image from "next/image"
import NavLink from "../UI-Kit/NavLink/NavLink"
import Link from "next/link"
import { useState } from "react"

export default function Header(){
    const navigation = [
        {href: "/advantages", title:"Преимущества Tele2"},
        {href: "/rates", title:"Тарифы"},
        {href: "/actions", title:"Акции и спецпредложения"},
        {href: "/promo", title:"Промотариф Tele2"},
        {href: "/technology", title:"Технология eSIM"},
        {href: "/new-client", title:"Подключение нового абонента"}
    ]
    let [location, setLocation] = useState("Москва и область")
    let [gamburgerState, setGamburgerState] = useState(false)
    let gamburgerIsActive = gamburgerState ? "header__gamburger-opened" : ""
    let headerNavigationState = gamburgerState ? "header__navigation-opened" : ""
    function gamburgerHeandler (){
        setGamburgerState(!gamburgerState)
    }
    return(
        <header className="header">
            <div className="header__top">
                <div className="header__wrapper wrapper">
                    <Link href="/">
                        <Image
                            src="/img/logo.svg"
                            alt="logo"
                            width={58}
                            height={22}
                        />
                    </Link>
                    <div className="header__info">
                        <button className="header__location">
                            <Image 
                                className="location-icon"
                                src="/img/location-icon.svg"
                                alt="notification"
                                width={22}
                                height={22}
                            />
                            <span className="location-value">
                                {location}
                            </span>
                        </button>
                        <div className="header__btns">
                            <button className="header__notifications">
                                <Image 
                                    src="/img/notification.svg"
                                    alt="notification"
                                    width={27}
                                    height={27}
                                />
                            </button>
                            <button className={`header__gamburger ${gamburgerIsActive}`} onClick={gamburgerHeandler}>
                                <div className="line"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__bottom">
                <nav className={`header__navigation ${headerNavigationState} wrapper`}>
                    <ul className="header__navigation__list">
                        {navigation.map((item, index)=>{
                            return(
                                <li className="header__navigation-item" onClick={gamburgerHeandler} key={index}>
                                    <NavLink href={item.href} title={item.title}/>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    )
}