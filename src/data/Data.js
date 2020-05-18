
    function letData(){
        fetch('http://storpad.com/out/parse2.php')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
    }
   let data = letData();

export default data;