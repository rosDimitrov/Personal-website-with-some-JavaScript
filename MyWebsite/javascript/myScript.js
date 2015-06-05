
    //create the coming soon text
    var bookCover = document.getElementById('cover');
    var bookText = document.getElementById('coverText');
    bookCover.addEventListener('mouseover', function (ev) {
        bookText.innerHTML = 'Coming Soon';
    });
    bookCover.addEventListener('mouseout', function (ev) {
        bookText.innerHTML = '';
    });

  

    var article = document.getElementById('articlesLi'),
        ul = document.getElementById('secondUl');

    article.addEventListener('mouseover', function (e) {

        ul.style.visibility = 'visible';

    });

    article.addEventListener('mouseout', function (e) {
        ul.style.visibility = 'hidden';
    });

    function validateForm() {
        
        var mail = document.forms["subscribe"]["mail"].value;
        if (mail == null || mail == "") {
            alert("Please Enter Your Email Address");
            return false;
        }
    }

   




       
        

     

              
        
        


        

      
     
        

 
       
    

