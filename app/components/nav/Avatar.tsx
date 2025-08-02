interface Props {
  src: string;
}

const Avatar = ({ src }: Props) => {
  return (
    <div>
      <img
        src={src}
        alt="Avatar"
        className="rounded-circle"
        style={{ width: "40px", height: "40px" }}
      />
    </div>
  );
};

export default Avatar;
