import { gsap } from "gsap";

const ToDo = () => {

    const tl = gsap.timeline();

    tl.to(".pro", { x: 200, yoyo: true, duration: 3, stagger: 0.5})

return (
    <div>
        <h1> :كل الى عليك كونك </h1>
        <div className="provider todo">
            <p> مشتفل </p>
            <span className="pro"> اكتشف نفسك! </span>
            <span className="pro"> أبرز مهاراتك! </span>
            <span className="pro"> استقبل طلباتك! </span>
            <span className="pro"> استلم فلوسك! </span>
        </div>
        <div className="user todo">
            <p> مستخدم </p>
            <span> اكتشف نفسك! </span>
            <span> !أبرز مهاراتك </span>
            <span> !استقبل طلباتك </span>
            <span> استلم فلوسك! </span>
        </div>
    </div>
)}

export default ToDo