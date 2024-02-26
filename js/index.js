// no Bluebird library use:

async function getCountryPopulation(country){

    try {
      const url = `https://countriesnow.space/api/v0.1/countries/population`;
        const options = {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({country})
        };
        const res = await fetch(url, options);
          const json = await res.json();
           
                if (json?.data?.populationCounts) 
                return json.data.populationCounts.at(-1).value;
                 throw new Error(`My Error: no data for ${country}`);


            }catch(err){
            console.log('Error: ', err.message);
            throw err;
    
    }
}



//--------------------------------------------------------
//  Manual - call one by one...
//--------------------------------------------------------
// async function manual() {
//     try {
//         let population = await getCountryPopulation("France");
//             console.log(`population of France is ${population}`);
//             population = await getCountryPopulation("Germany");
//         console.log(`population of Germany is ${population}`);

//     }catch(err){
//         console.log('Error in manual: ',err.message);
//     }

// }
// manual();
//------------------------------
//   Sequential processing 
//------------------------------
const countries = ["France", "Russia", "Germany", "United Kingdom", "Portugal", "Spain", "Netherlands", "Sweden", "Greece", "Czechia", "Romania", "Israel"];

// async function sequence() {
//   try {
//   //  Promise.all to fetch population data for all countries sequentially:
//       const populations = await Promise.all(
//   //  map over each country to fetch its population data:
//             countries.map(async country => {
//           try {
//   //  attemt to fetch population data for the current country:
//               return await getCountryPopulation(country);
//           } catch (err) {
//   //  handle errors for individual country population fetch:
//               // console.error(`${country} failed: ${err.message}`);
//               return err; // or handle the error in another way
//           }
//       }));
//       // iterate over population results:
//       populations.forEach((population, index) => {
//         // ck if population is not null, has valid data:
//           if (population !== null) {
//               console.log(`population of ${countries[index]} is ${population}`);
//           }
//       });
//       console.log(`Sequence All Done!`);
//   } catch (err) {
//     // handle any errors that occur during sequence process:
//       console.error('Error in sequence:', err.message);
//   }
// }
// sequence();



//--------------------------------------------------------
//  Parallel processing 
//--------------------------------------------------------
// async function parallel() {
//   try {
//     // Promise.all to concurrently fetch population data for all countries:
//       const populations = await Promise.all(countries.map(async country => {
//         // Attempting to fetch population data for each country:
//           return await getCountryPopulation(country)
//           .catch(err => {
//               // console.error(err.message);
//                // handling errors for individual country population fetch
//           // returning the error object if an error occurs
//               return err;
//           });
//       }));
//       // iterate over population results:
//       populations.forEach((population, index) => {
//           // ck if population is not null = population variable holds a valid value for a country's population:
//           if (population !== null) {
//               console.log(`population of ${countries[index]} is ${population}`);
//           }
//       });
//   } catch (err) {
//       // console.error(err.message);
//       throw err;
//       // return null; // handle the error in another way
//   }

//   console.log(`Parallel All Done!`);
// }

// parallel();









