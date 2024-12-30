import Image from "next/image";
import SVGIMG from "../../../../public/filter.svg";

export default function FilterIcon() {
    return (
       <Image src={SVGIMG} alt={"FilterIcon"}/>
    )
}