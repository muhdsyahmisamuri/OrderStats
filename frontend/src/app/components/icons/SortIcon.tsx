import Image from "next/image";
import SVGIMG from "../../../../public/sort.svg";

export default function SortIcon() {
    return (
       <Image src={SVGIMG} alt={"SortIcon"}/>
    )
}