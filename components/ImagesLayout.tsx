import Image from 'next/image'
import React from 'react'

type Props = {
    images: string[] 
}

const ImagesLayout = ({images}: Props) => {
  

     switch(images.length) {
        case 1:
            return <Image 
                alt=''
                src={images[0]}
                width={500}
                height={500}
                className='w-full h-fit rounded-xl'
            />
        case 2: 
            return <div className='flex aspect-video'>
                <Image 
                    alt=''
                    src={images[0]}
                    width={500}
                    height={500}
                    className='w-1/2 h-full object-cover rounded-l-xl'
                />
                <Image 
                    alt=''
                    src={images[1]}
                    width={500}
                    height={500}
                    className='w-1/2 h-full object-cover rounded-r-xl'
                />
            </div>
        case 3: 
            return <div className='flex w-full aspect-video'>
                <Image 
                    alt=''
                    src={images[0]}
                    width={500}
                    height={500}
                    className='w-1/2 h-full object-cover rounded-l-xl'
                />
                <div className='w-1/2 flex-col'>
                    <Image 
                        alt=''
                        src={images[1]}
                        width={500}
                        height={500}
                        className='w-full overflow-clip h-1/2 rounded-tr-xl'
                    />
                    <Image 
                        alt=''
                        src={images[2]}
                        width={500}
                        height={500}
                        className='w-full overflow-clip h-1/2 rounded-br-xl'
                    />
                </div>
             </div>
        case 4: 
            return <div className='flex aspect-video'>
                <div className='w-1/2 flex flex-col'>
                <Image 
                        alt=''
                        src={images[0]}
                        width={500}
                        height={500}
                        className='w-full overflow-clip h-1/2 rounded-tl-xl'
                    />
                    <Image 
                        alt=''
                        src={images[1]}
                        width={500}
                        height={500}
                        className='w-full overflow-clip h-1/2 rounded-bl-xl'
                    />
                </div>
                <div className='w-1/2 flex flex-col'>
                <Image 
                        alt=''
                        src={images[2]}
                        width={500}
                        height={500}
                        className='w-full overflow-clip h-1/2 rounded-tr-xl'
                    />
                    <Image 
                        alt=''
                        src={images[3]}
                        width={500}
                        height={500}
                        className='w-full overflow-clip h-1/2 rounded-br-xl'
                    />
                </div>
            </div>
     }
     

}

export default ImagesLayout