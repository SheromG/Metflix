setTimeout(function()
{ 
    window.location.href = 'index2.php';
},3000);

const m_tl = gsap.timeline();
m_tl
    .to("#M1-shadow", {opacity: 0, duration: 0.5}, 0.3)
    .to("#M3-shadow", {opacity: 0, duration: 1.5}, 0.3)

const e_ogShape = "M255.1 171.6V208.2L250.5 208.5L250 172L255.1 171.6Z";
const e_tl = gsap.timeline();
e_tl
    .from("#E1-base", {morphSVG:{shape: e_ogShape, type: "linear"}, opacity: 0, duration: 0.15}, 0)
    .from("#E2-base", {scaleY: 0, transformOrigin: "50% 100%", duration: 0.1}, 0.11)
    .from("#E3", {scaleX: 0, duration: 0.06}, 0.21)
    .from("#E4", {scaleX: 0, duration: 0.18}, 0.27)
    .to("#E1-shadow, #E2-shadow", {opacity: 0, duration: 0.8}, 0)

const t_tl = gsap.timeline();
t_tl
    .from("#T1", {scaleX: 0, duration: 0.1}, 0)
    .from("#T2-base", {scaleY: 0, duration: 0.25}, 0.1)
    .to("#T2-shadow", {opacity: 0, duration: 0.82})

const f_tl = gsap.timeline();
f_tl
    .from("#F1", {scaleX: 0, duration: 0.15}, 0)
    .from("#F2-base", {scaleY: 0, duration: 0.33}, 0.1)
    .from("#F3", {scaleX: 0, duration: 0.15}, 0.28)
    .to("#F2-shadow", {opacity: 0, duration: 0.86})

const l_ogShape = "M540.5 167.5L546 167.781V204.371L540.5 204.1V167.5Z";
const l_tl = gsap.timeline();
l_tl
    .from("#L1-base", {scaleY: 0, duration: 0.22}, 0)
    .from("#L2", {morphSVG:{shape: l_ogShape, type: "linear"}, opacity: 0, duration: 0.1}, 0.2)
    .to("#L1-shadow", {opacity: 0, duration: 0.83})

const i_tl = gsap.timeline();
i_tl
    .from("#I", {scaleY: 0, transformOrigin: "50% 100%", duration: 0.18}, 0)

const x1_ogShape = "M733.1 216.8L771.5 220.8L772.5 218.5L734.5 213.5L733.1 216.8Z";
const x2_ogShape = "M737 0L738 2.5H777.5L776.5 0H737Z";
const x_tl = gsap.timeline();
x_tl
    .from("#X1", {morphSVG:{shape: x1_ogShape, type: "linear", shapeIndex: 2}, duration: 0.63}, 0)
    .from("#X1", {opacity: 0, duration: 0.1,}, 0)
    .from("#X2-base", {morphSVG:{shape: x2_ogShape, type: "linear", shapeIndex: 2}, duration: 0.53}, 0.11)
    .from("#X2-base", {opacity: 0, duration: 0.01,}, 0.11)
    .to("#X2-shadow", {opacity: 0, duration: 1.3}, 0)

 //Movement Timeline
const movement_tl = gsap.timeline();
movement_tl
    .from("svg", {opacity: 0, duration: 0.7}, 0)
    .from("svg", {xPercent:50, left:"50%",  duration: 1.9,  ease: CustomEase.create("custom", "M0,0,C0.358,0.144,0.098,1,1,1")}, 0.7)

 //Exit Timeline
const exit_tl = gsap.timeline();
exit_tl
    .to("svg", {opacity: 0, duration: 0.5})

 //Master Timeline
const master_tl = gsap.timeline({repeat: -1, repeatDelay: 1});
master_tl
    .add((movement_tl), 0)
    .add((m_tl), 0.7)
    .add((e_tl), 0.8)
    .add((t_tl), 1.08)
    .add((f_tl), 1.18)
    .add((l_tl), 1.33)
    .add((i_tl), 1.63)
    .add((x_tl), 1.7)
    .add((exit_tl), 6)
