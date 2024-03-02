import React from "react";
import test from "/images/home/testimonials/testimonials.png";

const  serviceLists =[
    {id:"1", title:"Catering",des:"Delight your guests with our flavors and  present", image:"/images/home/services/icon1.png"},
    {id:"1", title:"Fast delivery",des:"We deliver your order promptly to your door", image:"/images/home/services/icon2.png"},
    {id:"1", title:"Online Ordering",des:"Explore menu & order with ease using our Online Ordering ", image:"/images/home/services/icon3.png"},
    {id:"1", title:"Gift Cards",des:"Give the gift of exceptional dining with Foodi Gift Cards", image:"/images/home/services/icon4.png"}
]


const OurServices = () => {


  return (
    <div className="section-container py-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* text */}
        <div className=" md:w-1/2">
          <div className=" text-left md:w-4/5 ">
            <p className=" subtitle">Our Story & Services</p>
            <h2 className=" title md:w-[520px]">
              Our Culinary Journey And Services{" "}
            </h2>
            <p className=" my-5 text-secondary leading-[30px]">
              Rooted in passion, we curate unforgettable dining experiences and
              offer exceptional services, blending culinary artistry with warm
              hospitality.
            </p>
            <button className=" btn bg-green rounded-full px-8 py-3 text-white flex items-center gap-2 border-none hover:text-green  font-semibold">
           Explore
          </button>
          </div>
        </div>

        {/*  Image*/}
        <div className=" md:w-1/2 ">
          <div className=" grid sm:grid-cols-2 grid-cols-1 items-center gap-8 ">
            {
                serviceLists.map((service)=>(
                    <div key={service.id} className=" shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border-indigo-600 transition-all duration-200 hover:border">
                        <img src={service.image} alt="" className=" mx-auto"/>
                        <h5 className=" pt-3 font-medium">{service.title}</h5>
                        <p className=" text-[#90BD95]">{service.des}</p>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
