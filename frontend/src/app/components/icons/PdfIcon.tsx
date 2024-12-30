import Image from "next/image";
import SVGIMG from "../../../../public/pdf.svg";

export default function PdfIcon() {
    return (
       <Image src={SVGIMG} alt={"PdfIcon"}/>
    )
}