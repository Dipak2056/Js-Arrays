//here we are trying to solve all the problems from the js challengers Javascript-Arrays
// Question 1
        // Write a function that takes an array of numbers as argument
        // Return the number of negative values in the array
        function getNegativeNumbers(array) {

            var negatives = [];
           for (var i = 0; i < array.length; i++) {
                if (array[i] < 0) {
                    negatives.push(array[i]);
                }
            }
            return negatives.length;
        
        }
        console.log('number of negative values in the array are '+getNegativeNumbers([1,2,-3]));
        //for this we can also use filter method 
                    // function countNegative(a){
                    //     return a.filter((el)=>el<0).length;
                    // }

//Question 2
        // Write a function that takes an array (a) as argument
        // Remove the first 3 elements of 'a'
        // Return the result
        function removeFirst(array){
             array.splice(0,3);
             return array;
        }
        console.log(removeFirst([1,2,3,4,5,6]));
        //for this we can also do 
        // function removeFirst(a){
        //     return a.slice(3);
        // }

//Question 3
        // Write a function that takes an array (a) and a value (n) as argument
        // Return the nth element a
        function nOfa (a,n){
            return a[n-1];
        }
        console.log(nOfa([1,2,3,4,5],3));
//Question 4
        // Write a function that takes an array (a) as argument
        // Return the number of elements in a
        function elCount(a){
            return a.length
        }
        console.log(elCount([1,2,2,4]));
//Question 5
        // Write a function that takes an array (a) as argument
        // Extract the first 3 elements of a
        // Return the resulting array
        function firstThree(a){
            return a.slice(0,3);
        }
        console.log(firstThree([1,2,3,4]));
//Question 6
        // Write a function that takes an array (a) as argument
        // Extract the last 3 elements of a
        // Return the resulting array
        function getLast(a){
            return a.slice(-3);
        }
        console.log(getLast([1,2,3]));

//Question 7
        // Write a function that takes an array (a) and a number (n) as arguments
        // It should return the last n elements of a
        function lastN(a,n){
            return a.slice(-n);
        }
        console.log(lastN([1,2,3,4,5],2));

//Question 8 
        // Write a function that takes an array (a) and a value (b) as argument
        // The function should clean a from all occurrences of b
        // Return the filtered array
        function removeB (a,b){
            return a.filter((el)=>el!==b);
             }
        console.log(removeB([1,2,4,2,3],'2'));
//Question 9
        // Write a function that takes an array of numbers as argument
        // It should return an array with the numbers sorted in descending order
        function sortArray(arr){
            return arr.sort((a,b)=>b-a);
        }
        console.log(sortArray([1,3,2]));
//Question 10
        // Write a function that takes an array of strings as argument
        // Sort the array elements alphabetically
        // Return the result
        function sortAlphabetically(arr){
            return arr.sort();
        }
        console.log(sortAlphabetically(['b','d','c','apple']));
//Question 11
        // Write a function that takes an array of numbers as argument
        // It should return the average of the numbers
        function returnAverage(arr){
            return arr.reduce((a,b)=>a+b) / arr.length
        }
        console.log(returnAverage([10,100,40]));
//Question 12
        // Write a function that takes an array of strings as argument
        // Return the longest string
        function longString(a) {
            for (let i = 0; i<a.length;i++){
                if(a[i].length > a[i+1].length){
                    return a[i];
                }
            }
        }
        console.log(longString(['i','need','Candy','help','me']));
//Question 13
        // Write a function that takes an array as argument
        // It should return true if all elements in the array are equal
        // It should return false otherwise
        function valuetypeChecker(arr){
            for(let i=0;i<arr.length;i++){
               return ((arr[i])===(arr[i+1]) ? true : false); 
            }
        
        }
        console.log(valuetypeChecker(['1',1,1]));
//Question 14
        // Write a function that takes arguments an arbitrary number of arrays
        // It should return an array containing the values of all arrays
        function concatArray(...arrays){
            return  newarray =  arrays.concat.apply([],arrays);
             }
 //Solution-II
             //we can use arrays.flat() method to get the same thing done with very small line of code
            //  function concatArray(...arrays){
            //      return arrays.flat();
            //  }
        
        console.log(concatArray([1,2,3],[4,5,6],[true,false],['hello']));
//Question 15
        // Write a function that takes an array of objects as argument
        // Sort the array by property b in ascending order
        // Return the sorted array
        function sortObjectproperty(array){
            return array.sort((a,b)=>(a.b>b.b)? 1:-1);
        }
        console.log(sortObjectproperty([{a:5,b:10},{a:2,b:4}]));
 //solution-II
        //we cand do it like this as well
        // function myFunction(arr) {
        //     const sort = (x, y) => x.b - y.b;
        //     return arr.sort(sort);
        //  }

        //this is the method i have learnt in code with mosh website where he says that we cannot sort the property of the object the way we have sorted string and number what we can do is access those property with dotnotation and if true pass 1 if not pass -1;
//Question 16
        // Write a function that takes two arrays as arguments
        // Merge both arrays and remove duplicate values
        // Sort the merge result in ascending order
        // Return the resulting array
        function newUniqueArray(a,b){
           let jointArray = [...a,...b];
           let uniqueArray = jointArray.filter((item,i)=>{
               jointArray.indexOf(item) === i;
           })
           console.log(uniqueArray)
            
        }
        console.log(newUniqueArray([1, 2, 4], [4, 5]));