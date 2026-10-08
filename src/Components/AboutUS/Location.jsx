import React from "react";
import { MapPin, Mail, Clock } from "lucide-react";
const Location = () => {

    const LocationData = [
        {
            icon: MapPin,
            label: "Address",
            value: "Priority Homemades, Solan, Himachal Pradesh 173212",
        },
        {
            icon: Mail,
            label: "Email",
            value: "priorityhomemades@gmail.com",
        },
        {
            icon: Clock,
            label: "Business Hours",
            value: "8:00 AM – 8:00 PM",
        },
    ];

    return (
        <div className="lg:grid lg:grid-cols-2 lg:h-[40vw]  mt-[13vw]  ">
            <div className="lg:border lg:border-l-0 lg:border-r-0   lg:mb-0 mb-[5vw] ">
                <div>
                    <h1 className="lg:text-[7vw] text-[14vw] lg:leading-[8vw] leading-[12vw]">Live Location</h1>

                </div>
                <div className="flex flex-col lg:mt-0 mt-[8vw] lg:justify-between items-start">
                    <p className="lg:text-[1.25vw] text-[3vw] lg:w-[35vw]  text-black/60 lg:leading-[2.2vw] leading-[3.5vw] ">
                        Step into our little corner in Solan, Himachal Pradesh, where every creation is freshly made with care, warmth, and a homemade touch. Wondering where the magic happens?
                    </p>
                    <div className="space-y-[0.7vw] lg:text-[1.1vw] lg:mt-[10vw] mt-[4vw] text-[3vw] text-black/70">
                        {
                            LocationData.map((elem, idx) => {
                                return (
                                    <div key={idx} className="flex  items-center gap-[0.8vw]  pb-[0.7vw]">
                                        <elem.icon className="lg:w-[1.2vw] w-[3vw] h-[3vw] lg:h-[1.2vw] text-black/50" />
                                        <div className="flex items-center">
                                            <span className="text-black">{elem.label}:</span>
                                            <span className="pl-[0.8vw] lg:pl-[0.2vw]">{elem.value}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
            <div className=" lg:h-[40vw] h-[80vw] overflow-hidden lg:border lg:border-r-0 p-[1vw]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.345745961089!2d77.10446857526209!3d30.9049585772894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f8119d78bcfa3%3A0x67e3ddcab88b4043!2sPriority%20Homemades!5e0!3m2!1sen!2sin!4v1783267111871!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Subscribe to Priority Homemades by Meenakshi 😋 on YouTube">
                </iframe>
            </div>
        </div>
    );
};

export default Location;