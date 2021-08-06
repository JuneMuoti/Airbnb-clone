import Image from "next/image"
function SmallCard({img,location,distance}) {
    return (
        <div>
            {/* Leftside of the card */}
            <div className="relative h-16 w-16 grid grid-cols-4" >
                <Image 
                src={img}
                layout="fill"
                className="rounded-lg"
                />
            </div>
    
        </div>
    )
}

export default SmallCard

