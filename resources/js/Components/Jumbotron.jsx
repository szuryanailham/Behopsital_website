import React, { useEffect, useState } from "react";
import Modal from "@/Components/items_LandingPAge/Modal_Login";
import { usePage } from "@inertiajs/react";
import Modal_Login from "@/Components/items_LandingPAge/Modal_Login";

export default function Jumbotron({ backgroundImage, text1, text2, action }) {
    const { auth } = usePage().props;
    const [showModal, setShowModal] = useState(false);

    const jumbotronStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <>
            <Modal_Login show={showModal} />
            <div
                className="jumbotron h-[425px] flex justify-start items-center"
                style={jumbotronStyle}
            >
                {/* box text-jumbotron */}
                <div className=" p-3">
                    <p className="font-montserrat text-white font-thin text-md italic text-shadow">
                        {text1}
                    </p>
                    <div className="w-64 p-2">
                        <h2 className="font-roboto font-semibold text-white text-3xl text-shadow2">
                            {text2}
                        </h2>
                    </div>
                    {/* jumbotron button  */}
                    {action === "login" && !auth.user ? (
                        <button
                            onClick={() =>
                                document
                                    .getElementById("modal_login")
                                    .showModal()
                            }
                            className="bg-[#1279FF] hover:active:bg-[#273b55] active:bg-[#273b55] w-24 h-9 mt-3.5 text-white rounded-md border-none font-extrabold drop-shadow-xl "
                        >
                            Login
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
}
