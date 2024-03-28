import Image from "next/image"
import searchIcon from "@/assets/img/searchIcon.svg"

export default function Search() {
    return (
        <div className="flex items-center justify-between search ">
            <Image src={searchIcon} alt="Ara" />
            <input type="text" placeholder="Ara" />
        </div>
    )
}