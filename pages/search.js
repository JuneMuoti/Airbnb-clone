import { useRouter } from "next/dist/client/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import {format} from "date-fns"
import InfoCard from "../components/InfoCard";

function Search({searchResults}) {
    const router=useRouter();
    console.log(searchResults);
    
     const{location,startDate,endDate,guestNumber}=router.query;
     const formattedStartDate=format(new Date(startDate),"dd MMM yy");
     const formattedEndDate=format(new Date(endDate),"dd MMM yy");
     const range=`${formattedStartDate}-${formattedEndDate}`;
     console.log(formattedStartDate);
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${guestNumber} guests`}/>
                <main className="flex">
                    <section className="flex-grow pt-14 px-6">
                        <p className="text-xs">300+ Stays -{range}  - for {guestNumber} number of guests</p>
                        <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                        <div className="hidden lg:inline-flex mb-5 space-x-3" >
                            <p className="button">Cancellation flexibility</p>
                            <p className="button"> Type of place</p>
                            <p className="button">Price</p>
                            <p className="button">Instant Book</p>
                            <p className="button">More filters</p>
                        </div>
                        <div className="flex flex-col">
                            {searchResults?.map(({img,location,title,description,star,price,total}) =>(
                           <InfoCard 
                           key={img}
                           img={img}
                           location={location}
                           title={title}
                           description={description}
                           star={star}
                           price={price}
                           total={total}
                           />
                            ))}
                        </div>

                    </section>
                    
                </main>
    
          <Footer />
        </div>
    )
}

export default Search
export async function getServerSideProps(){
    const searchResults=await fetch("https://links.papareact.com/isz").
    then((res) => res.json());
    return {
        props:{
            searchResults
        }
    }
}
