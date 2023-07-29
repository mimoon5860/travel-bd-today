"use client";
import { useState } from "react";
import Rodal from "rodal";
import { useSession } from "next-auth/react";
import { updateSinglePlace } from "@/utils/actions/place";
interface IProps {
  status: boolean;
  id: number;
}
export default function UpdateArticle({ status, id }: IProps) {
  const [modalState, setModalState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newStatus, setNewStatus] = useState<string>();
  const { data } = useSession();

  const show = () => {
    setModalState(true);
  };
  const hide = () => {
    setModalState(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newStatus) {
      alert("Please change status!");
      return;
    }
    setLoading(true);
    const res = await updateSinglePlace(id, { status: newStatus });

    if (res.success) {
      alert(res.message);
      hide();
      setLoading(false);
    } else {
      alert(res.message);
      setLoading(false);
    }
  };

  return (
    <>
      {data.user?.role === "User" ? (
        <button
          onClick={show}
          className="cursor-pointer text-white rounded-md px-4 py-3 text-center text-sm font-semibold bg-primary uppercase transition duration-200 ease-in-out "
        >
          Update
        </button>
      ) : (
        ""
      )}
      <Rodal width={250} height={250} visible={modalState} onClose={hide}>
        <div>
          <h3 className="font-bold text-xl">Update Status</h3>
          <hr />
          <form onSubmit={handleSubmit} className="mt-2" action="">
            <label className="block mb-2 text-gray-700" htmlFor="status">
              Status:
            </label>
            <select
              id="status"
              name="status"
              onChange={(e) => setNewStatus(e.target.value)}
              defaultValue={status ? "active" : "inactive"}
              className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="active" className="text-green-500 font-bold">
                Active
              </option>
              <option value="inactive" className="text-red-500 font-bold">
                Inactive
              </option>
            </select>
            <input
              className="cursor-pointer text-white rounded-md px-5 py-2 text-center text-sm font-semibold bg-primary uppercase transition duration-200 ease-in-out mt-3"
              type="submit"
              name="submit"
              id=""
              value={loading ? "Please wait..." : "Submit"}
              disabled={loading}
            />
          </form>
        </div>
      </Rodal>
    </>
  );
}
