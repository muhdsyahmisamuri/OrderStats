import Image from "next/image";
import SVGIMG from "../../../../public/print.svg";

export default function PrintIcon() {
  return <Image src={SVGIMG} alt={"PrintIcon"} />;
}
