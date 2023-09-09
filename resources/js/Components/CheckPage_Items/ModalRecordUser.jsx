import React from "react";

function ModalRecordUser() {
    return (
        <>
            <dialog id="record_modal" className="modal">
                <form action=""></form>
                <div className="modal-box w-11/12 max-w-5xl">
                    {/*  menu record by date ..... */}
                    <ul className="menu menu-horizontal m-auto bg-base-200 w-auto p-2 flex justify-evenly">
                        <li>
                            <button className="btn-info">
                                <a>record 1 </a>
                            </button>
                        </li>
                        <li>
                            <button className="btn-info">
                                <a>record 2 </a>
                            </button>
                        </li>
                        <li>
                            <button className="btn-info">
                                <a>record 3 </a>
                            </button>
                        </li>
                    </ul>
                    {/*  name of docter .......... */}
                    <div className="mt-2">
                        <span className="label-text">name of Docter</span>
                        <input
                            type="text"
                            placeholder="dokter ..."
                            className="input input-bordered w-full"
                            disabled
                        />
                    </div>
                    {/*  date of check  .......... */}
                    <div className="mt-2">
                        <span className="label-text">date of check </span>
                        <input
                            type="date"
                            placeholder="dokter ....."
                            className="input input-bordered w-full"
                            disabled
                        />
                    </div>
                    {/*  content .......... */}
                    <div className="mt-2">
                        <span className="label-text">date of check </span>
                        <input
                            type="text"
                            placeholder="dokter ....."
                            className="input input-bordered w-full"
                            disabled
                        />
                    </div>
                    {/* content of history record */}
                    {/* box */}
                    <span className="label-text mt-5">date of check </span>
                    <textarea
                        disabled
                        placeholder="Bio"
                        className="textarea textarea-bordered textarea-lg w-full "
                    ></textarea>

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}
export default ModalRecordUser;
