import React from 'react'
import { Button } from 'react-bootstrap';

const WhyUs = () => {
return (
    <div className='whyus w-75 mx-auto py-5'>
        <div className="why-content d-flex gap-4 flex-column">
            <h2 className='text-[#02385A]'> لماذا طلب عرض سعر أفضل؟ </h2>
            <hr className='mx-auto my-0'/>
            <div className="sec1 d-flex justify-content-between">
                <div className="info">
                    <h2 className='text-[#1EAAAD] text-end'> معلومات </h2>
                    <h1 className='text-[#37383B]'> لماذا طلب عرض السعر..؟ </h1>
                    <hr /> <hr className='mx-3'/>
                    <p> أولا : ستطلب ولن تبحث وتوفر عناء البحث </p>
                    <p> ثانيا : ستكشف سعر السوق للخدمة التى تبحث عنها </p>
                    <p> ثالثا : ستتصفح السيرة الذكية للمشتغلين الجاهزين لخدمتك </p>
                    <p> رابعا : ستختار السعر والمشتغل المناسب لك بكل ثقة وراحة بال </p>
                </div>
                    <form action="#" className='why-form bg-[#F8FAFC] p-3 d-flex flex-column w-50'>
                        <label htmlFor="address"> عنوان الطلب </label>
                        <input type="text" id='address' className='p-2'/>
                        <label htmlFor="details"> تفاصيل الطلب </label>
                        <textarea className='resize-none' rows={3} id="details" style={{outline: 'none'}}></textarea>
                        <Button className='w-25 mt-4 text-white border-0 rounded p-2 align-self-end' style={{backgroundColor: '#1EAAAD'}}> ارسال </Button>
                    </form>
            </div>
            <div className="sec2 d-flex justify-content-between">
                <div className="yt-vid w-5/12 h-60">
                    <iframe src="https://www.youtube.com/watch?v=l-aV3qt6dKw" frameborder="0" title='buisness' className='w-100 h-full'></iframe>
                </div>
                <div className="two-items d-flex gap-3 w-50">
                    <div className="item">
                        <i class="fa-solid fa-file-invoice-dollar"></i>
                        <p> اكتشف أسعار السوق </p>
                    </div>
                    <div className="item">
                        <i class="fa-regular fa-clock"></i>
                        <p> اكتشف أسعار السوق </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default WhyUs;