import Image from "next/image";

interface Props {
  src: string;
}

const Avatar = ({ src }: Props) => {
  return (
    <div>
      <Image
        src={src}
        alt="Avatar"
        className="rounded-circle"
        style={{ width: "40px", height: "40px" }}
      />
    </div>
  );
};

export default Avatar;
