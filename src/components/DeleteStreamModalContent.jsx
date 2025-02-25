// Redux
import { useSelector } from "react-redux";

const DeleteStreamModalContent = () => {
  const { name } = useSelector((state) => state.modal?.data?.stream);

  return (
    <div className="pb-5">
      <span>Siz haqiqatdan ham</span>
      <b className="font-semibold"> {name} </b>
      <span>nomli oqimni o'chirmoqchimisiz?</span>
    </div>
  );
};

export default DeleteStreamModalContent;
