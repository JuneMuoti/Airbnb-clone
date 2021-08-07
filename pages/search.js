import { useRouter } from "next/dist/client/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import {format} from "date-fns"

function Search() {
    const router=useRouter();
    
     const{location,startDate,endDate,guestNumber}=router.query;
     const formattedStartDate=format(new Date(startDate),"dd MMM yy");
     const formattedEndDate=format(new Date(endDate),"dd MMM yy");
     const range=`${formattedStartDate}-${formattedEndDate}`;
     console.log(formattedStartDate);
    return (
        <div>
            <Header />
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
                    </section>
                    
                </main>
          <h1>I am the search page</h1>  
          <Footer />
        </div>
    )
}

export default Search
