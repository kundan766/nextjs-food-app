
import Image from 'next/image';
import React ,{useState} from 'react';

export default function Home() {


  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 3; // Number of cards to display per page

  // // Assuming you have an array of cards
  // const allCards = [
  //   // Your card data here...

  //   { title: 'Card 1', content: 'Content for Card 1' },
  // { title: 'Card 2', content: 'Content for Card 2' },
  // { title: 'Card 3', content: 'Content for Card 3' },
  // { title: 'Card 4', content: 'Content for Card 1' },
  // { title: 'Card 5', content: 'Content for Card 2' },
  // { title: 'Card 6', content: 'Content for Card 3' },
  // ];

  // // Calculate the index range for the current page
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const currentCards = allCards.slice(startIndex, endIndex);

  // // Function to handle page change
  // const handlePageChange = (newPage) => {
  //   setCurrentPage(newPage);
  // };
  


  return (
    <main className="flex min-h-screen flex-col justify-between ">
         
          <Image className='flex  flex-col ml-40'
          src="/Screenshot_669 1.png"
         alt="mm image"
        width={120}
        height={120}
            />

          <div className='min-h-screen ml-40 mt-40 mr-60'>
           <h1 className="text-blue-600 text-5xl font-bold">Discover the </h1>
           <h1 className="text-black-600 text-5xl font-bold"> Best Food </h1>
           <h1 className="text-blue-600 text-5xl font-bold"> and Drinks</h1> <br></br>
           <p>Naturally made Healthcare Products for the</p>
           <p>better care & support of your body.</p> <br></br>
           <button className="bg-red-500  text-white font-bold py-2 px-4 rounded-full">
          Explore Now!
      </button>
          </div>


          <div>
             <Image className='float-right  absolute right-0 top-0 '
            src="/Group 289.png"
            alt="vector"
            width={600}
            height={550}
            />
            </div>

          <div>
            <Image className='float-right  absolute right-0 top-0  '
            src="/Vector 1.png"
            alt="vector"
            width={600}
            height={550}
            />
             </div>
             <button className=" border-solid  font-bold py-2 px-4 rounded-full absolute right-0 top-0 ">
               Get In Touch
             </button>

            {/* for second about us */}

            <div className=' flex w-400 h-50 bg-blue-100 p-30'  >

              <Image className='ml-60'
             src="/pharmasict-serving-customer-drug-store 1.png"
             alt="image"
             width={300}
             height={300}
             />
                <div className='flex-col ml-40 mt-20 mr-80 '>
                <h2 className='font-bold  text-2xl text-blue-500'>About Us</h2>  <br></br>
                <p className='flex '>Lorem ispum is simply dummy text of the printing and typetesting industry. Lorem Ispum has been the industry's standard dummy text ever science 
                  the 1500s ,when an unknown printer took  a gllary of type and scrammbled  it to make a type specimen book.It has survived not only five centuries
                </p> <br></br>
                <button className="bg-red-500 text-white font-bold py-2 px-4  ronuded-full">Read More</button>

                </div>
              
            </div>


            <div className='font-bold min-h-screen p-20 '>
            <h1 className='text-blue-500 text-3xl p-20 '>Latest Articles</h1>


           
              <div className="flex justify-between p-4  ">
        {/* Card 1 */}
           {/* {currentCards.map((card,index)=>( */}
        <div  className="w-1/3 p-4 mx-4 border border-black rounded-lg ">
          {/* Card content */}
          <Image
          src="/grilled-tomatoes-1-846x846 1.png"
          alt="image"
          width={400}
          height={200}
          
          />
          <h2 className="text-xl  text-sky-500 font-bold">Grilled Tomatoes at Home</h2>
          <p>Lorem ipsum is simply dummy text of the printing and typesetting industries.Lorem Ispum .Lorem Ispum has been the industries stadard....</p>

             <button className=" text-black bg-blue-500 font-bold py-2 px-4  ronuded-full">Read More</button>
            
        </div>

        {/* Card 2 */}
        <div className="w-1/3 p-4 mx-4 border border-black rounded-lg">
          {/* Card content */}
          <Image
          src="/meal-prep-ideas-846x846 1.png"
          alt="image"
          width={400}
          height={200}
          
          />
          
          <h2 className="text-xl   text-sky-500 font-bold">Snacks for Travel</h2>
          <p>Lorem ipsum is simply dummy text of the printing and typesetting industries.Lorem Ispum .Lorem Ispum has been the industries stadard....</p>
          <button className=" text-black  bg-blue-500 font-bold py-2 px-4  ronuded-full">Read More</button>
        </div>

        {/* Card 3 */}
        <div className="w-1/3 p-4 mx-4 border border-black rounded-lg">
          {/* Card content */}
          <Image
          src="/meal-prep-ideas-846x846 1 (1).png"
          alt="image"
          width={400}
          height={200}
          
          />
          <h2 className="text-xl  text-sky-500 font-bold">Post-workout Recipes</h2>
          <p>Lorem ipsum is simply dummy text of the printing and typesetting industries.Lorem Ispum .Lorem Ispum has been the industries stadard....</p>
          <button className="text-black  bg-blue-500 font-bold py-2 px-4  ronuded-full">Read More</button>
        </div>
           
          
           </div> 
         </div>

         {/* pagination function */}

                 {/* <div className="flex justify-center mt-4">
          <button
            className={`mx-2 p-2 border ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: Math.ceil(allCards.length / itemsPerPage) }, (_, index) => (
            <button
              key={index}
              className={`mx-2 p-2 border ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white'}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`mx-2 p-2 border ${
              currentPage === Math.ceil(allCards.length / itemsPerPage)
                ? 'bg-gray-300'
                : 'bg-blue-500 text-white'
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(allCards.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      </div> */}

           
       {/* </div> */}

           <footer className='p-20 flex flex-row justify-between items-center'>
            
            <Image
             src='/Screenshot_669 1.png'
             alt="image"
            width={100}
            height={100}
            
            />
            
            <div className=' ml-2   text-l p-0 '>
             <h1 className='text-sky-500'>Contact Us</h1>
             <ul>

            <li> <p>Lorem ispum Pvt.Ltd.5/1,Magalton</p></li>
            <li> <p>Road, Phartosh Gate near YTM</p></li>
            <li> <p>Market,XYZ-343434</p> </li>
            <li><p>example 2020@gmail.com</p> </li>
               <li><p>9843889498</p></li>
             </ul>

            </div>
            
            <div  className="flex-row ml-4">

             <ul className='ml-2'>
              <h1 className='font-bold text-sky-500'>More</h1>
              
                <li>About Us</li>
                <li>Products</li>
                <li>Career</li>
                <li>Contact us</li>
              </ul>
            </div>

            <div >
              <h1 className='font-bold text-sky-500 p-0 text-l gap-200  '> Social Links</h1>
              <div className='flex'>
               <Image className='flex item-center'
               src="/Component.png"
               alt="image"
               width={10}
               height={0}
              />

              <Image className='flex item-center'
               src="/Component (1).png"
               alt="image"
               width={50}
               height={50}
              />

             <Image className='flex item-center'
               src="/Component (2).png"
               alt="image"
               width={30}
               height={30}
              />
               </div>

              <h2>@ Food Truck Example</h2>
            </div>
            
            </footer> 
            


    </main>
  );
}
