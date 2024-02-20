// // sorting the array 
// let arr = ["ronak","jimish","satish","bihari","ek"];
// // let p = arr.sort();
// let p = arr.reverse();
// console.log(p)

// let arr2 = [5,3,7,23,32,43,12,11,31,3,6,8,9,0,2]
// let k = arr2.sort(function(a,b){
    //     return a-b;
    // });
    // console.log(arr2[0]);//lowest value
    // console.log(arr2[arr2.length-1]);//highetvalue
    // console.log(k)
    // console.log(myfun(arr2))
    
    
    // function myfun(ar){
        //     return Math.max.apply(null,ar);
        
        // }
        let arr2 = [5,3,7,23,32,43,12,11,31,3,6,8,9,0,2]
        console.log(arrmin(arr2));

    // function arrmin(arr){
    //     let len  = arr.length;
    //     let min = Infinity;
    //     while(len--){
    //         if(arr[len] < min){
    //             min = arr[len];
    //         }
    //     }
    //        return min;
    // }
    function arrmin(arr){
        let len  = arr.length;
        let min = -Infinity;
        while(len--){
            if(arr[len] > min){
                min = arr[len];
            }
        }
           return min;
    }
