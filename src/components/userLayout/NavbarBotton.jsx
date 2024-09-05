import React from 'react'

export const NavbarBotton = () => {
    return (
        <div className="fixed bottom-0 w-full h-[94px] p-6 bg-soft-green flex justify-around py-2 shadow-navbar-b md:hidden lg:hidden">
            <div className='group flex flex-col justify-center items-center'>
                <button className="h-[30px] w-[30px] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path className=' stroke-dark-green group-hover:stroke-medium-soft-green group-active:stroke-medium-soft-green group-enabled:stroke-gray stroke-2' d="m3.486 9.943.07-.043.063-.053 7.926-6.738a1 1 0 0 1 .91 0l7.926 6.738.063.053.07.043a1 1 0 0 1 .486.837l-.279 5.61c-.122 2.465-2.184 4.264-4.707 4.565L16 18.668v-.003a4 4 0 0 0-8 .003v2.289c-2.53-.296-4.599-2.097-4.721-4.568L3 10.78a1 1 0 0 1 .486-.836Z" />
                    </svg>
                </button>
                <p className='text-paragraphs text-dark-green group-active:font-bold group-active:text-medium-soft-green group-hover:font-bold group-hover:text-medium-soft-green'> Home </p>
            </div>
            <div className='group flex flex-col justify-center items-center'>
                <button className="h-[30px] w-[30px] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path className='fill-dark-green group-hover:fill-medium-soft-green group-active:fill-medium-soft-green' d="M8 14.992a1.001 1.001 0 0 0 0 2.002h7.997c.555 0 1-.446 1-1a.998.998 0 0 0-1-1.002H8Zm0-3.995a1.001 1.001 0 0 0 0 2h7.997a1.001 1.001 0 0 0 0-2.001H8Zm0-4.002a1.001 1.001 0 0 0 0 2h7.997a1.001 1.001 0 0 0 0-2.001H8Zm-.22 12.78a4.006 4.006 0 0 1-3.563-3.562 41.488 41.488 0 0 1 0-8.438A4.006 4.006 0 0 1 7.78 4.213a40.764 40.764 0 0 1 8.437 0 4.006 4.006 0 0 1 3.563 3.562c.286 2.8.286 5.637 0 8.438a4.006 4.006 0 0 1-3.563 3.563c-1.397.14-2.818.213-4.215.213a39.208 39.208 0 0 1-4.222-.213Zm-.2-17.55a6.007 6.007 0 0 0-5.35 5.35 42.874 42.874 0 0 0 0 8.846 6.007 6.007 0 0 0 5.35 5.35c1.476.153 2.946.226 4.423.226 1.47 0 2.946-.073 4.422-.226a6.001 6.001 0 0 0 5.35-5.35c.147-1.403.22-2.812.226-4.216v-.408a44.356 44.356 0 0 0-.226-4.216 6.007 6.007 0 0 0-5.35-5.35 42.947 42.947 0 0 0-4.422-.226 41.287 41.287 0 0 0-4.423.22Z" />
                    </svg>
                </button>
                <p className='text-paragraphs text-dark-green group-active:font-bold group-active:text-medium-soft-green group-hover:font-bold group-hover:text-medium-soft-green'> Diario </p>
            </div>
            <div className='group flex flex-col justify-center items-center'>
                <button className="h-[30px] w-[30px] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path className='fill-dark-green group-hover:fill-medium-soft-green group-active:fill-medium-soft-green' d="M4.892 19.926a.933.933 0 0 1-.818-.817 17.75 17.75 0 0 1 0-3.22.927.927 0 0 1 .818-.818 17.773 17.773 0 0 1 3.22 0c.42.037.774.396.817.817a17.75 17.75 0 0 1 0 3.22.933.933 0 0 1-.817.818 17.773 17.773 0 0 1-3.22 0Zm-.183-6.843a2.925 2.925 0 0 0-2.623 2.622 19.57 19.57 0 0 0 0 3.587 2.925 2.925 0 0 0 2.623 2.623c.597.055 1.195.085 1.793.085.597 0 1.195-.03 1.793-.085a2.925 2.925 0 0 0 2.622-2.623c.11-1.196.11-2.391 0-3.587a2.925 2.925 0 0 0-2.622-2.622 19.634 19.634 0 0 0-1.793-.086c-.598.006-1.196.03-1.793.086Zm11.18 6.843a.927.927 0 0 1-.818-.817 17.748 17.748 0 0 1 0-3.22.927.927 0 0 1 .817-.818 17.675 17.675 0 0 1 3.22 0 .928.928 0 0 1 .818.817 17.748 17.748 0 0 1 0 3.22.933.933 0 0 1-.818.818 17.772 17.772 0 0 1-3.22 0Zm-.184-6.843a2.925 2.925 0 0 0-2.622 2.622 19.566 19.566 0 0 0 0 3.587 2.925 2.925 0 0 0 2.622 2.623c.598.055 1.196.085 1.793.085.598 0 1.196-.03 1.793-.085a2.925 2.925 0 0 0 2.623-2.623c.11-1.196.11-2.391 0-3.587a2.925 2.925 0 0 0-2.623-2.622 19.634 19.634 0 0 0-1.793-.086 22.09 22.09 0 0 0-1.793.086ZM4.892 8.929a.933.933 0 0 1-.818-.817 17.75 17.75 0 0 1 0-3.22.927.927 0 0 1 .818-.818 17.773 17.773 0 0 1 3.22 0c.42.036.774.396.817.817a17.75 17.75 0 0 1 0 3.22.921.921 0 0 1-.817.818 17.773 17.773 0 0 1-3.22 0Zm-.183-6.844a2.925 2.925 0 0 0-2.623 2.623 19.57 19.57 0 0 0 0 3.587 2.925 2.925 0 0 0 2.623 2.622c.597.055 1.195.086 1.793.086.597 0 1.195-.03 1.793-.086a2.925 2.925 0 0 0 2.622-2.622c.11-1.196.11-2.391 0-3.587a2.925 2.925 0 0 0-2.622-2.623A19.602 19.602 0 0 0 6.502 2a22.05 22.05 0 0 0-1.793.085Zm11.18 6.844a.927.927 0 0 1-.818-.817 17.748 17.748 0 0 1 0-3.22.927.927 0 0 1 .817-.818 17.675 17.675 0 0 1 3.22 0 .927.927 0 0 1 .818.817 17.748 17.748 0 0 1 0 3.22.921.921 0 0 1-.818.818 17.772 17.772 0 0 1-3.22 0Zm-.184-6.844a2.925 2.925 0 0 0-2.622 2.623 19.566 19.566 0 0 0 0 3.587 2.925 2.925 0 0 0 2.622 2.622c.598.055 1.196.086 1.793.086.598 0 1.196-.03 1.793-.086a2.925 2.925 0 0 0 2.623-2.622c.11-1.196.11-2.391 0-3.587a2.925 2.925 0 0 0-2.623-2.623A19.602 19.602 0 0 0 17.498 2a22.05 22.05 0 0 0-1.793.085Z" />
                    </svg>
                </button>
                <p className='text-paragraphs text-dark-green group-active:font-bold group-active:text-medium-soft-green group-hover:font-bold group-hover:text-medium-soft-green'> Habitos </p>
            </div>
            <div className='group flex flex-col justify-center items-center'>
                <button className="group h-[30px] w-[30px] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path className='fill-dark-green group-hover:fill-medium-soft-green group-active:fill-medium-soft-green' d="M14.752 16.25a1.001 1.001 0 0 0 0 2.001h2a.998.998 0 0 0 1.002-1 .998.998 0 0 0-1.001-1.001h-2.001Zm0-3.496a1.001 1.001 0 0 0 0 2h4.002a1.001 1.001 0 0 0 0-2h-4.002Zm0-3.503c-.55 0-1 .452-1 1 0 .55.45 1.002 1 1.002h5.997a1.001 1.001 0 0 0 0-2.001h-5.997Zm-2.44-4.07C11.175 3.84 9.455 3.003 7.655 3.003 4.483 3.003 2 5.463 2 8.604c0 3.314 2.648 5.821 6.656 9.629a212.16 212.16 0 0 1 2.587 2.483 1.004 1.004 0 0 0 1.416-.012 1.002 1.002 0 0 0-.012-1.416c-.922-.903-1.782-1.72-2.612-2.507-3.63-3.448-6.034-5.73-6.034-8.177 0-2.056 1.574-3.6 3.655-3.6 1.55 0 3.075.977 3.697 2.374.165.378.543.622.958.622.415 0 .787-.244.958-.622.622-1.397 2.142-2.374 3.697-2.374 1.349 0 2.532.653 3.173 1.752A.999.999 0 0 0 22 6.28v-.061a1.06 1.06 0 0 0-.134-.476c-1-1.72-2.831-2.746-4.9-2.746-1.8 0-3.52.836-4.655 2.184Z" />
                    </svg>
                </button>
                <p className='text-paragraphs text-dark-green group-active:font-bold group-active:text-medium-soft-green group-hover:font-bold group-hover:text-medium-soft-green'> Gratitud </p>
            </div>
        </div>
    )
}
