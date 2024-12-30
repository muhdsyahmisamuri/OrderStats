import Image from "next/image";
import SVGIMG from "../../../../public/visibility.svg";

export default function VisibilityIcon() {
    return (
       <Image src={SVGIMG} alt={"VisibilityIcon"}/>
    )
}