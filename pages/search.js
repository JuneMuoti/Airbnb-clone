import Footer from "../components/Footer"
import Header from "../components/Header"

function Search() {
    return (
        <div>
            <Header />
                <main className="flex">
                    <section className="flex-grow pt-14 px-6">
                        <p className="text-xs">300+ Stays for 5 number of guests</p>
                        <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>
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
