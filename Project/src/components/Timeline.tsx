function Timeline()
{
    return(
        <ol className="relative border-s border-default max-w-7xl mx-auto w-full">                  
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
                <time className="text-sm font-normal leading-none text-body">March 2016 - Dezember 2016</time>
                <h3 className="text-lg font-semibold text-heading my-2">Walking Tour & Tuk Tuk Tours</h3>
                <p className="text-base font-normal text-body font-mono text-gray-700">&gt;Led immersive historical tours for diverse international groups, delivering engaging storytelling fluently in three languages.</p >
                <p className="font-mono text-gray-700">&gt;Managed large audiences and adapted communication styles to ensure a high-quality customer experience.</p>
                
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
                <time className="text-sm font-normal leading-none text-body">January 2017 - July 2024</time>
                <h3 className="text-lg font-semibold text-heading my-2">Travel Consultant at Living Tours</h3>
                <p className="text-base font-normal text-body font-mono text-gray-700" >&gt;Welcoming and assisting visitors with information, travel guidance and tailored services.</p>
                <p className="font-mono text-gray-700">&gt;Promoted and sold tourism related products. </p>
                <p className="font-mono text-gray-700">&gt;Ensured excellent customer service in multiple languages.</p>
            </li>
            <li className="ms-4">
                <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
                <time className="mb-1 text-sm font-normal leading-none text-body">During Covid (6 Months)</time>
                <h3 className="text-lg font-semibold text-heading my-2">Tech Support line at NOS</h3>
                <p className="text-base font-normal text-body font-mono text-gray-700">&gt;Performed remote diagnostics to isolate and resolve connectivity issues (Internet, TV, Voice) for a major ISP.</p>
                <p className="font-mono text-gray-700">&gt;Combined technical troubleshooting with commercial goals, successfully upselling products by matching solutions to customer needs.</p>
            </li>
        </ol>
    );
}

export default Timeline