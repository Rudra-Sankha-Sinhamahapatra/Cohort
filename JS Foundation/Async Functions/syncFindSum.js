function findSum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans+=i;
    }
    return ans;
    }
    
    function findTill100(){
        console.log(findSum(100));
    }

    //busy waiting
    function syncSleep(){
        let a=1;
        for(let i=0;i<1000000000;i++){
            a++;
        }
        // console.log(a);
    }

    syncSleep();
    findTill100();
    
    // setTimeout(findTill100,1000);
    console.log("Hello World");