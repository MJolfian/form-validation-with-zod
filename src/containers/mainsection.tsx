import Aside from "./aside";
import Form from "./form";

export default function MainSection () {
    return(
        <main className="px-10 container mx-auto">
            <h1 className="text-gray-600 text-5xl font-semibold mt-5 text-center md:text-left">Contact us</h1>
            <p className="text-gray-500 mt-5 text-center md:text-left">need an experienced and skilled hand with custom it projects? <br /> fill out the form to get a free consultion.</p>
            <section className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-x-20 gap-y-5">
                <Form/>
                <Aside/>
            </section>
        </main>
    )
}