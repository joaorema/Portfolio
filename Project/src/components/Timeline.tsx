function Timeline()
{
    return(
        <ol className="relative border-s border-default">                  
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
                <time className="text-sm font-normal leading-none text-body">March 2016 - Dezember 2016</time>
                <h3 className="text-lg font-semibold text-heading my-2">Walking Tour & Tuk Tuk Tours</h3>
                <p className="mb-4 text-base font-normal text-body">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
                <time className="text-sm font-normal leading-none text-body">January 2017 - July 2024</time>
                <h3 className="text-lg font-semibold text-heading my-2">Travel Consultant at Living Tours</h3>
                <p className="text-base font-normal text-body">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
            </li>
            <li className="ms-4">
                <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
                <time className="mb-1 text-sm font-normal leading-none text-body">During Covid</time>
                <h3 className="text-lg font-semibold text-heading my-2">Tech Support line at NOS</h3>
                <p className="text-base font-normal text-body">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
            </li>
        </ol>
    );
}

export default Timeline