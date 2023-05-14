 const tab1 = document.querySelector('.tab-1');
 const tab2 = document.querySelector('.tab-2');
 const tab3 = document.querySelector('.tab-3');
 const tab4 = document.querySelector('.tab-4');
 const list1 = document.querySelector('.list-1');
 const list2 = document.querySelector('.list-2');
 const list3 = document.querySelector('.list-3');
 const list4 = document.querySelector('.list-4');
 const lists = document.querySelectorAll('.tab-links');

//  const input1 = document.getElementsByTagName('input');
 const submit = document.querySelector('#btn');
 const input1 = document.querySelector('.in-1');
 const input2 = document.querySelector('.in-2');
 const input3 = document.querySelector('.in-3');

    


    // tabs.forEach(function(tabs){
         
    //         tabs.classList.remove('active-link');
         
    // })


    
   tab1.addEventListener('click' , function(){
       tab1.classList.add('active-link');
       tab2.classList.remove('active-link');
       tab3.classList.remove('active-link');
       tab4.classList.remove('active-link');

        // remove hidden form list item
        list1.classList.remove('hidden');
        list2.classList.add('hidden');
        list3.classList.add('hidden');
        list4.classList.add('hidden');
         
    })


          
   tab2.addEventListener('click' , function(){

          
       tab2.classList.add('active-link');
         tab3.classList.remove('active-link');
         tab1.classList.remove('active-link');
         tab4.classList.remove('active-link');



         list2.classList.remove('hidden');
        list1.classList.add('hidden');
        list3.classList.add('hidden');
        list4.classList.add('hidden');
     })
   tab3.addEventListener('click' , function(){

          
        tab3.classList.add('active-link');
        tab1.classList.remove('active-link');
         tab2.classList.remove('active-link');
         tab4.classList.remove('active-link');



         list3.classList.remove('hidden');
        list2.classList.add('hidden');
        list1.classList.add('hidden');
        list4.classList.add('hidden');
    })
   tab4.addEventListener('click' , function(){

          
         tab4.classList.add('active-link');
         tab1.classList.remove('active-link');
         tab2.classList.remove('active-link');
         tab3.classList.remove('active-link');


        list4.classList.remove('hidden');
        list2.classList.add('hidden');
        list1.classList.add('hidden');
        list3.classList.add('hidden');
    })

    // submit.addEventListener('click' ,  function(){
    //     input1.value=" "
    //    // input1.ariaPlaceholder= " your Name "

    // })

   




   
      