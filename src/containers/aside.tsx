import TextInput from "../atoms/textinput"

export default function Aside () {
    return (
        <aside>
            <h1 className="text-gray-600 font-bold">Offices</h1>
            <p className="text-gray-500 mt-4">united states<br/>500 5th avenue suit 400, nt 10110</p>
            <p className="text-gray-500 mt-3">United Kingdom<br/>High St, Bromley BR1 1DN</p>
            <p className="text-gray-500 mt-3">France<br/>80 avenue des Terroirs de France, Paris</p>
            <h1 className="font-bold text-gray-600 mt-5">For Quick Inquiries</h1>
            <p className="mt-2">🇬🇧 +44 7777777777</p>
            <p className="mt-1">🇺🇸 +1 3333333330</p>
            <TextInput label="Would you like to join our newsletter?" id="newsletter" className="rounded-r-none" divClassName="inline-block w-[80%] mr-1 mt-5"/>
            <button className="bg-green-500 py-[4.5px] px-3 text-white cursor-pointer font-bold">✓</button>
        </aside>
    )
}