import React from "react";
import { MapPin, Mail, Clock } from "lucide-react";
const Location = () => {
    return (
        <div className="lg:grid lg:grid-cols-2 lg:h-[40vw]  mt-[13vw]  ">
            <div className="lg:border lg:border-l-0 lg:border-r-0 lg:block flex lg:mb-0 mb-[5vw] ">
                <div>
                    <h1 className="text-[7vw] leading-[8vw]">Live Location</h1>
                    <p className="text-[1.25vw] w-[35vw] mt-[2vw] text-black/60 leading-[2.2vw] ">
                        Step into our little corner in Solan, Himachal Pradesh, where every creation is freshly made with care, warmth, and a homemade touch. Wondering where the magic happens?
                    </p>
                </div>
                <div className=" mt-[10vw] space-y-[0.7vw] text-[1.1vw] text-black/70">
                    <div className="flex items-center gap-[0.7vw]  pb-[0.7vw]">
                        <MapPin className="w-[1.2vw] h-[1.2vw] text-black/50" />
                        <span className="text-black">Address:</span>
                        <span>Priority Homemades, Solan, Himachal Pradesh 173212</span>
                    </div>

                    <div className="flex items-center gap-[0.7vw]  pb-[0.7vw]">
                        <Mail className="w-[1.2vw] h-[1.2vw] text-black/50" />
                        <span className="text-black">Email:</span>
                        <span>priorityhomemades@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-[0.7vw]">
                        <Clock className="w-[1.2vw] h-[1.2vw] text-black/50" />
                        <span className="text-black">Business Hours:</span>
                        <span>8:00 AM – 8:00 PM</span>
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