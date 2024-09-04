import { gsap } from "gsap";

const ToDo = () => {

    const tl = gsap.timeline();

    tl.to(".proOne", { x: 200, yoyo: true, duration: 3, } )
        .to(".proTwo", { x: 200, yoyo: true, duration: 3, } )
        .to(".proThree", { x: 200, yoyo: true, duration: 3, } )
        .to(".proFour", { x: 200, yoyo: true, duration: 3, } )

    // tl.to(".proOne", { x: 200, yoyo: true, duration: 3, } )
    //     .to(".proOne", { x: 200, yoyo: true, duration: 3, } )
    //     .to(".proOne", { x: 200, yoyo: true, duration: 3, } )
    //     .to(".proOne", { x: 200, yoyo: true, duration: 3, } )
return (
    <div>
        <h1> :كل الى عليك كونك </h1>
        <div className="provider todo">
            <p> مشتفل </p>
            <span className="proOne"> اكتشف نفسك! </span>
            <span className="proTwo"> أبرز مهاراتك! </span>
            <span className="proThree"> استقبل طلباتك! </span>
            <span className="proFour"> استلم فلوسك! </span>
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