/* 
Output: 
['Hello Suzie Summerson!', 'Hello Cacilia Caramuscia', 'Hello Mattie Mungane' etc]
*/

export function greetUsers(customers) {
    return customers
        .map(item => `Hello ${item.first_name} ${item.last_name}!`);
}

/* 
Output: 
['Hello Suzie Summerson!', 'Hello Cacilia Caramuscia', etc]
*/

export function greetUsersOverAge60(customers) {
    return customers
        // first, filter over the user to get the ones over 60
        .filter(item => item.age > 60)
        // then map over them to make a greeting
        .map(item => `Hello ${item.first_name} ${item.last_name}!`);
}


/* 
Output: 
4532
*/

export function addAllAges(customers) {
    return customers
        .reduce((acc, curr) => 
            acc + curr.age, 0);
        
}

/* 
Output: 
4.5
*/

export function getAverageCoolFactor(customers) {
    return customers.reduce((acc, curr) => 
        (acc + curr.cool_factor), 0) / customers.length;
}

/* 
Output: 
{
    female: 4,
    male: 3,
    nonbinary: 2,
    etc . . .
}
*/

export function getTotalOfEachGender(customers) {
    const genderCount = customers
        .reduce((acc, curr) => {
            if(acc[curr.gender]) {
                acc[curr.gender]++;
            }
            else {
                acc[curr.gender] = 1;
            }
            return acc;
        }, {});
    
    return genderCount;
}

/* 
Output: 
 {
    female: 3,
    male: 2,
    nonbinary: 1,
    etc . . .
 }
*/

export function getGenderBreakdownOfFordOwners(customers) {
   
    const genderCount = customers
        .filter((item) => item.car_make === 'Ford')
        .reduce((acc, curr) => {
            acc[curr.gender] 
                ? acc[curr.gender]++
                : acc[curr.gender] = 1;
             
            
            return acc;
        }, {});
    
    return genderCount;
}

//////////////////////////////////////////////////////////
///////////// STRETCH GOALS /////////////////////////////
/////////////////////////////////////////////////////////

/* 
Output: 
{
    ford: {
        female: 3,
        male: 2,
        nonbinary: 1,
    },
    mercedes:  {
        female: 3,
        male: 2,
        nonbinary: 1,
    },
    etc . . .
}
*/

export function getGenderBreakdownOfEachCar(customers) {
    const breakdownsByBrand = customers
        .reduce((acc, curr) => {
            acc[curr.car_make]
                ? acc[curr.car_make][curr.gender] 
                    ? acc[curr.car_make][curr.gender]++
                    : acc[curr.car_make][curr.gender] = 1
                : acc[curr.car_make] = {
                    [curr.gender]: 1
                };
             
            
            return acc;
        }, {});
    return breakdownsByBrand;
}

/* 
Output: 
{
    ford: [3, 5, 4, 4, 7, 5],
    mercedes: [8, 5, 6, 8, 3, 9],
    honda: [2, 4, 4, 3, 7, 1],
    etc. . .
}
*/


export function getAllCoolFactorsOfEachCar(customers) {
    return true;
}

/* 
Output: 
{
    ford: 5.4
    mercedes:  8.5
    honda: 2.3
}
*/

export function getAverageCoolFactorOfEachCar(customers) {
    return true;
}


/* 
Output: 
// break the customers into age demographic blocks. For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: 55,
    20:  38,
    30: 12,
    40: 31,
    50: 62,
    60: 93,
    70: 45,
    80: 32,
    90: 11,
}
*/

export function makeAgeBrackets(customers) {
    return true;
}

/* 
Output: 
// break the customers into age demographic blocks. For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: [3, 5, 4, 4, 7, 5],
    20: [8, 5, 6, 8, 3, 9],
    30: [1, 8, 4, 1, 9, 2],
    40: [2, 4, 4, 3, 7, 1],
    etc . . .
}
*/



// export function getCoolFactorsByAgeBracket(customers) {
//     const ageBracketMap = customers.reduce((acc, curr) => {
//         const bracket = getBracket(curr);

//         if(curr[bracket] {
//             acc[bracket].push(curr.cool_factor);}

//         else {
//             acc[bracket] = [curr.cool_factor];
//     }
//         return acc;
//     }, {});
// }


/* 
Output: 
// break the customers into age demographic blocks. For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: 5.6,
    20: 3.1
    30: 7.8,
    40: 9.5,
    etc . . .
}
*/

export function getAverageCoolFactorByAgeBracket(customers) {
    return true;
}

