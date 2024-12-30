import Image from "next/image";
import SVGIMG from "../../../../public/search.svg";

export default function SearchIcon() {
    return (
       <Image src={SVGIMG} alt={"SearchIcon"}/>
    )
}