import{u as d,C as h,D as r,j as e,F as m,E as g,G as p,H as l,A as a,a as f,W as b,I as u,J as w}from"./index-0c2f0482.js";import{b as j,a as y,c as S,d as k}from"./bottle_desk_2x-0e16256e.js";const N=d.div`
@media screen and (min-width: 320px) {
.form {
    margin-top: 16px;
}
.label {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33333;
    color: #2f2f2f;   
}
.input-container {
    position: relative;
    width: 280px;
}
.input {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: #000;

    border: 1px solid #d7e3ff;
    border-radius: 6px;
    padding: 12px 10px;
    margin-top: 8px;
    width: 280px;
    height: 44px;
}
.input::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: #9ebbff;
}
.watchPasswordIcon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translate(0%, -50%);
    z-index: 10
}
.buttonSignUp {
    border-radius: 10px;
    padding: 8px 30px;
    margin-bottom: 16px;
    width: 280px;
    height: 36px;
    box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
    background: #407bff;

    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    text-align: center;
    color: #fff;
}
.error {
    color: red
}
}
@media screen and (min-width: 768px) {
    .input-container {    
        width: 336px;
    }
    .input {    
        width: 336px;        
        height: 44px;
    }
    .buttonSignUp {
        width: 336px;
        height: 44px;
    }
}

@media screen and (min-width: 1440px) {
    
    .input-container {    
        width: 384px;
    }
    .input {    
        width: 384px;        
        height: 44px;
    }
    .buttonSignUp {
        width: 384px;
        height: 44px;
    }
}

`,v=({submitFunc:s})=>{const o=h({email:r().email().required(),password:r().min(6).max(64).required()}),n={email:"",password:""};function c(i,t){s(i),t.resetForm()}function x(i){const t=i.target.closest(".watchPasswordIcon").previousSibling;if(t.type==="password"){t.type="text",i.target.closest("SVG").firstChild.href.baseVal=a+"#eye-opened";return}if(t.type==="text"){t.type="password",i.target.closest("SVG").firstChild.href.baseVal=a+"#eye-closed";return}}return e.jsx(e.Fragment,{children:e.jsx(N,{children:e.jsx(m,{initialValues:n,validationSchema:o,onSubmit:c,children:e.jsxs(g,{className:"form",autoComplete:"off",children:[e.jsxs("label",{className:"label",htmlFor:"email",children:["Enter your email",e.jsx("br",{}),e.jsx("div",{className:"input-container",children:e.jsx(p,{className:"input",type:"text",name:"email",placeholder:"Email"})}),e.jsx(l,{className:"error",name:"email",component:"div"})]}),e.jsx("br",{}),e.jsxs("label",{className:"label",htmlFor:"password",children:["Enter your password",e.jsxs("div",{className:"input-container",children:[e.jsx(p,{className:"input",type:"password",name:"password",placeholder:"Password"}),e.jsx("svg",{className:"watchPasswordIcon",onClick:x,width:"16",height:"14",stroke:"#9ebbff",fill:"none",children:e.jsx("use",{href:a+"#eye-closed"})})]}),e.jsx(l,{className:"error",name:"password",component:"div"})]}),e.jsx("br",{}),e.jsx("button",{className:"buttonSignUp",type:"submit",children:"Sign In"})]})})})})},F=d.div`
background-size: 100vw, contain;
background-position: 0, 10px ;
background-repeat: no-repeat;
background-image: url(${j});


@media screen and (min-width: 320px){

.title {   
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 26px;
    line-height: 1.23077;
    color: #2f2f2f;
    margin-top: 20px;
    
}
.link {
    font-family: "Roboto", sans-serif;
font-weight: 400;
font-size: 16px;

line-height: 1.25;
color: #407bff;
}
.bottle {
    // margin-top: 40px;
    position: relative;
    width: 280px;
    z-index: -10;
}
}
@media screen and (min-width: 768px) {
    background-image: url(${y});
    .wrapper {
        width: 100%;
        position: relative;
    }
    .bottle {    
        width: 736px; 
        position: absolute;
        top: 0;
        left: 100px;
    }

}
@media screen and (min-width: 1440px) {
    background-image: url(${S});
    background-size: 1404px, 582px;    
    background-position-y: 0px;
    background-position-x: -30px;
    .bottle {    
        width: 916px; 
        position: absolute;
        top: 30px;
        left: -100px;
    }
    .formCont {
        position: absolute;
        top: 120px;
        right: 90px;
    }
    .wrapper {
        width: 100%;
        position: relative;
    }
}
`,z=()=>{const s=f();function o(n){s(w(n))}return e.jsx(e.Fragment,{children:e.jsx(F,{children:e.jsx(b,{children:e.jsxs("div",{className:"wrapper",children:[e.jsxs("div",{className:"formCont",children:[e.jsx("h2",{className:"title",children:"Sign In"}),e.jsx(v,{submitFunc:o}),e.jsx(u,{className:"link",to:"/signup",children:"Sign Up"})]}),e.jsx("img",{className:"bottle",alt:"bottle of water",src:k})]})})})})};export{z as default};