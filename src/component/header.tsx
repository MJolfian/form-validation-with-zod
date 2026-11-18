import { useState, useEffect } from "react"

export default function Header(){
    const [situation, setSit] = useState(false);
    
    function switchMenu (event:MouseEvent){
        let eventTarget = event.target as HTMLElement;
        const opt = eventTarget.closest('#opt');
        const menu = eventTarget.closest('#menu');
        const close = eventTarget.closest('#close');
        // console.log(situation);
        if((close || !menu) && situation) return setSit(!situation);
        if(opt && !situation) return setSit(prev => !prev);
        
    }
    // document.addEventListener('click', switchMenu);
    // استفاده از useEffect برای مدیریت امن EventListener
    useEffect(() => {
        document.addEventListener('click', switchMenu);
        
        // پاکسازی هنگام حذف کامپوننت از صفحه
        return () => {
            document.removeEventListener('click', switchMenu);
        }
    },[situation])

    return (
        <header className="bg-[#F9F9F9]">
            <div className="flex justify-between md:max-lg:justify-start items-center md:gap-x-30 px-10 py-5 container mx-auto">
            <img src="favicon.svg" alt="logo" className='' />
            <section className="text-gray-600 font-medium hidden md:flex gap-x-4">
                <span className="cursor-pointer">Company</span>
                <span className="cursor-pointer">Services</span>
                <span className="cursor-pointer">FinTech Solution</span>
                <span className="cursor-pointer">Products</span>
                <span className="cursor-pointer">Portfolio</span>
                <span className="cursor-pointer border-b-2 border-green-400 pb-1">Contact us</span>
            </section>
            <section id="menu" className={`text-white font-medium h-full fixed right-0 top-0 bg-slate-500 flex flex-col text-center py-5 px-3 rounded-l-lg shadow-2xl transition-transform duration-300 ease-in-out ${situation ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col gap-y-4 grow">
                    <span className="py-1 px-6 rounded-lg cursor-pointer hover:bg-slate-200 hover:text-gray-600">Company</span>
                    <span className="py-1 px-6 rounded-lg cursor-pointer hover:bg-slate-200 hover:text-gray-600">Services</span>
                    <span className="py-1 px-6 rounded-lg cursor-pointer hover:bg-slate-200 hover:text-gray-600">FinTech Solution</span>
                    <span className="py-1 px-6 rounded-lg cursor-pointer hover:bg-slate-200 hover:text-gray-600">Products</span>
                    <span className="py-1 px-6 rounded-lg cursor-pointer hover:bg-slate-200 hover:text-gray-600">Portfolio</span>
                    <span className="py-1 px-6 rounded-lg cursor-pointer hover:bg-slate-200 hover:text-gray-600">Contact us</span>
                </div>
                <button id="close" className="bg-red-500 flex justify-center items-center pb-1 font-black rounded-lg cursor-pointer hover:bg-red-900">×</button>
            </section>
            
            <img src="opt.svg" alt="options" id="opt" className={`${situation ? 'hidden' : 'block'} md:hidden cursor-pointer`}/>
            </div>
        </header>
    )
}


// ai version

// chatgpt

// import { useState } from "react";

// export default function Header() {
//   const [situation, setSit] = useState(false);

//   return (
//     <header className="flex justify-between md:justify-center items-center bg-[#F9F9F9] gap-x-40 px-5 py-5">

//       <img src="favicon.svg" alt="logo" />

//       {/* Desktop Menu */}
//       <section className="text-gray-600 font-medium hidden md:flex gap-x-4">
//         <span className="cursor-pointer">Company</span>
//         <span className="cursor-pointer">Services</span>
//         <span className="cursor-pointer">FinTech Solution</span>
//         <span className="cursor-pointer">Products</span>
//         <span className="cursor-pointer">Portfolio</span>
//         <span className="cursor-pointer border-b-2 border-green-400 pb-1">
//           Contact us
//         </span>
//       </section>

//       {/* Mobile Menu Button */}
//       <button
//         onClick={() => setSit(prev => !prev)}
//         className="md:hidden cursor-pointer"
//         aria-label="Open menu"
//         aria-expanded={situation}
//       >
//         <img src="opt.svg" alt="" />
//       </button>

//       {/* Mobile Menu */}
//       {situation && (
//         <div
//           className="fixed inset-0 z-50 bg-black/30 md:hidden"
//           onClick={() => setSit(false)}
//         >
//           <section
//             className="absolute right-0 top-0 h-full bg-slate-500 text-white font-medium flex flex-col text-center py-5 px-3 rounded-l-lg shadow-2xl"
//             onClick={(event) => event.stopPropagation()}
//           >
//             <div className="flex flex-col gap-y-4 grow">
//               <span className="py-1 px-6 rounded-lg cursor-pointer hover:bg-slate-200 hover:text-gray-600">
//                 Company
//               </span>
//               <span className="py-1 px-6 rounded-lg cursor-pointer hover:bg-slate-200 hover:text-gray-600">
//                 Services
//               </span>
//               <span className="py-1 px-6 rounded-lg cursor-pointer hover:bg-slate-200 hover:text-gray-600">
//                 FinTech Solution
//               </span>
//               <span className="py-1 px-6 rounded-lg cursor-pointer hover:bg-slate-200 hover:text-gray-600">
//                 Products
//               </span>
//               <span className="py-1 px-6 rounded-lg cursor-pointer hover:bg-slate-200 hover:text-gray-600">
//                 Portfolio
//               </span>
//               <span className="py-1 px-6 rounded-lg cursor-pointer hover:bg-slate-200 hover:text-gray-600">
//                 Contact us
//               </span>
//             </div>

//             <button
//               onClick={() => setSit(false)}
//               className="bg-red-500 flex justify-center items-center pb-1 font-black rounded-lg cursor-pointer hover:bg-red-900"
//             >
//               ×
//             </button>
//           </section>
//         </div>
//       )}

//     </header>
//   );
// }


// gap gpt ↓

// import { useState, useEffect } from "react";

// export default function Header() {
//     const [situation, setSit] = useState(false);

//     // بستن منو با کلیک در هر جای صفحه (به جز خود منو و دکمه باز کردن)
//     useEffect(() => {
//         function handleOutsideClick(event: MouseEvent) {
//             const target = event.target as HTMLElement;
            
//             // اگر منو باز نیست، نیازی به بررسی نیست
//             if (!situation) return;

//             const menu = target.closest('#menu');
//             const optButton = target.closest('#opt');

//             // اگر کلیک نه روی منو بود و نه روی دکمه باز کردن منو، ببندش
//             if (!menu && !optButton) {
//                 setSit(false);
//             }
//         }

//         // اضافه کردن لیسنر به کل سند صفحه
//         document.addEventListener('click', handleOutsideClick);

//         // پاکسازی لیسنر هنگام از بین رفتن کامپوننت (برای جلوگیری از Memory Leak)
//         return () => {
//             document.removeEventListener('click', handleOutsideClick);
//         };
//     }, [situation]);

//     return (
//         <header className="flex justify-between md:justify-center items-center bg-[#F9F9F9] gap-x-40 px-5 py-5">
//             <img src="favicon.svg" alt="logo" />
            
//             <section className="text-gray-600 font-medium hidden md:flex gap-x-4">
//                 <span className="cursor-pointer">Company</span>
//                 <span className="cursor-pointer">Services</span>
//                 <span className="cursor-pointer">FinTech Solution</span>
//                 <span className="cursor-pointer">Products</span>
//                 <span className="cursor-pointer">Portfolio</span>
//                 <span className="cursor-pointer border-b-2 border-green-400 pb-1">Contact us</span>
//             </section>

//             {/* موبایل منو */}
//             <section 
//                 id="menu" 
//                 className={`text-white font-medium h-full fixed right-0 top-0 bg-slate-500 flex flex-col text-center py-5 px-3 rounded-l-lg shadow-2xl transition-transform duration-300 ease-in-out z-50 ${situation ? 'translate-x-0' : 'translate-x-full'}`}
//             >
//                 <div className="flex flex-col gap-y-4 grow">
//                     <span className="py-1 px-6 rounded-lg cursor-pointer hover:bg-slate-200 hover:text-gray-600">Company</span>
//                     <span className="py-1 px-6 rounded-lg cursor-pointer hover:bg-slate-200 hover:text-gray-600">Services</span>
//                     <span className="py-1 px-6 rounded-lg cursor-pointer hover:bg-slate-200 hover:text-gray-600">FinTech Solution</span>
//                     <span className="py-1 px-6 rounded-lg cursor-pointer hover:bg-slate-200 hover:text-gray-600">Products</span>
//                     <span className="py-1 px-6 rounded-lg cursor-pointer hover:bg-slate-200 hover:text-gray-600">Portfolio</span>
//                     <span className="py-1 px-6 rounded-lg cursor-pointer hover:bg-slate-200 hover:text-gray-600">Contact us</span>
//                 </div>
                
//                 {/* دکمه بستن داخلی منو */}
//                 <button 
//                     id="close" 
//                     onClick={() => setSit(false)}
//                     className="bg-red-500 flex justify-center items-center pb-1 font-black rounded-lg cursor-pointer hover:bg-red-900"
//                 >
//                     ×
//                 </button>
//             </section>
            
//             {/* دکمه باز کردن منو */}
//             <img 
//                 src="opt.svg" 
//                 alt="options" 
//                 id="opt" 
//                 onClick={() => setSit(prev => !prev)}
//                 className={`${situation ? 'hidden' : 'block'} md:hidden cursor-pointer`}
//             />
//         </header>
//     );
// }

