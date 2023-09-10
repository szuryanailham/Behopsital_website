import React from "react";
import NavbarForUser from "@/Components/Specialist_item/NavbarForUser";
import iconSuccess from "@/images/approved.gif";
import Footer from "@/Components/Footer";
function Success_page() {
    return (
        <>
            <NavbarForUser />
            <div className="flex flex-col justify-center items-center mt-20">
                <div className="w-full flex  items-center justify-center ">
                    <img src={iconSuccess} alt="icon" className="w-3/4" />
                </div>
                {/* text */}
                <h1 className="text-xl font-montserrat font-bold ">
                    We have received your form
                </h1>
                <p className=" font-montserrat text-lg w-5/6 text-center mt-5">
                    please come to the clinic according to the appointment time
                </p>
                <button className="btn mt-3 bg-base-color">Home</button>
                <h2 className="mt-[300px] italic  ">
                    thank you for using our service
                </h2>
            </div>

            <Footer />
        </>
    );
}

export default Success_page;
