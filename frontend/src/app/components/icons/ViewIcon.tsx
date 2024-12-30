import Image from "next/image";
import SVGIMG from "../../../../public/view.svg";

export default function ViewIcon() {
    return (
       <Image src={SVGIMG} alt={"ViewIcon"}/>
    )
}