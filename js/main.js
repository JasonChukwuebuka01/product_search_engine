window.onload = () => {
   const userInput = document.querySelector(`#userInput`);
   const search = document.querySelector(`#search`);
   const add = document.querySelector(`#add`);
   const buttonGroup = document.querySelector(`.buttonGroup`);
   const productDiv = document.querySelector(`#productDiv`);
   let buttGroup = document.querySelectorAll(`button`);
   let buttAll = document.querySelectorAll(`.buttAll`);

   //Global p tag that contains `No match found`;
   let p = document.createElement(`p`);
   p.style.color = `red`;
   p.classList.add(`ptag`, `hidden`);

   //Global Array. Array.length = 20;
   let arr = [];

   productFilter(`All`);

   //Start Event Delegation;
   buttonGroup.addEventListener(`click`, (e) => {
      if (e.target.id === `butt1`) {
         productFilter(`All`);
      }

      if (e.target.id === `butt2`) {
         productFilter(`TopWears`);
      }

      if (e.target.id === `butt3`) {
         productFilter(`BottomWears`);
      }

      if (e.target.id === `butt4`) {
         productFilter(`Jersey`);
      }

      if (e.target.id === `butt5`) {
         productFilter(`FootWears`);
      }
   }); // End of Event Delegation;

   // Product object containing all product details

   let product = {
      data: [
         {
            productName: `Man utd home Jersey`,
            category: `Jersey`,
            price: 40,
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3EUUO0h4ZPgIJCqHgCTe6KHX3FM2MqWjAgw&usqp=CAU`,
         },

         {
            productName: `Man utd 23/24 Fan Jersey`,
            category: `Jersey`,
            price: 58,
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiFtdlE_yOHCpJD2BtHklGWoT7HPzRyrYFjQ&usqp=CAU`,
         },

         {
            productName: `Psg Away Jersey`,
            category: `Jersey`,
            price: 33,
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgmfQrg6G_uabUhZP0Uw7KExE3Bizo9PHgw&usqp=CAU`,
         },

         {
            productName: `Real Madrid Home Jersey`,
            category: `Jersey`,
            price: 44,
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDy-wfMhD-b7DSNOs-HrZkCecnc7uABHrRcw&usqp=CAU`,
         },

         {
            productName: `Al Nassr Jersey`,
            category: `Jersey`,
            price: 68,
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65q-qWLtDu2pXhBdSB2GudaDa5eMY2KklSg&usqp=CAU`,
         },

         {
            productName: `Inter Miami Home Jersey`,
            category: `Jersey`,
            price: 66,
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ekZC48CfX5X8pDQ1dFM1Clzl6O6LiEStKZsnkJYeKhCQ8fFpAT2GDww&s=10`,
         },

         {
            productName: `Air Force Nike Sneakers`,
            category: `Footwears`,
            price: 440,
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfP5yggq-4862-cCv1zuDrFZQrZgEIGNjayQ&usqp=CAU`,
         },

         {
            productName: `Colorful Sneakers Sport Wear`,
            category: `Footwears`,
            price: 580,
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zYnuc9AVg7QNJUfTpylpQNR365NBpf9OUQ&usqp=CAU`,
         },

         {
            productName: `Sport Sneakers`,
            category: `Footwears`,
            price: 440,
            image: `https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/L/I/104215_1602331898.jpg`,
         },

         {
            productName: ` Blue Sneakers`,
            category: `Footwears`,
            price: 250,
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGn4StY0LhjxsBBqRhiV7f6CfCtQ0BglpMg&usqp=CAU`,
         },

         {
            productName: `Female Shoe`,
            category: `Footwears`,
            price: 92,
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSocofriEdH63-mt-bjNHw4egax88SDTlzFa5By5vObZar34UGKF4Wru2PK&s=10`,
         },

         {
            productName: `T shirt`,
            category: `Topwears`,
            price: 200,
            image: `https://3.imimg.com/data3/YT/VW/MY-6953869/plain-round-neck-t-shirt-250x250.jpg`,
         },

         {
            productName: `T Shirt Designers`,
            category: `Topwears`,
            price: 970,
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLv-xBfDLbWvIgQl4i3lV7JOEwBxbWyKEjDw&usqp=CAU`,
         },

         {
            productName: `Stripped Customized Shirt`,
            category: `Topwears`,
            price: 180,
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKygnC58d9iSJx_O_qhWop7dK3-Fvzzjyfhw&usqp=CAU`,
         },

         {
            productName: `Vintage Shirt`,
            category: `Topwears`,
            price: 88,
            image: `https://ae01.alicdn.com/kf/Scb605d61f2f7406893943951675586f0D.jpg_640x640Q90.jpg_.webp`,
         },

         {
            productName: `Male Lime Trouser`,
            category: `Bottomwears`,
            price: 120,
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ5cbk81J5BLcpiWc1svJ4NWR5UCbpkZgK31km4DdGXB9vk1X9B6eT6AmA&s=10`,
         },

         {
            productName: `Female modern Yellow Trouser`,
            category: `Bottomwears`,
            price: 55,
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8kAPWoyb61d0g93PXmj6EO9m8uRvcOaBtA&usqp=CAU`,
         },

         {
            productName: `Female Pants`,
            category: `Bottomwears`,
            price: 130,
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5uCju7K_TRBGPBdE3fBk-F2mFXUYGz0NhGg&usqp=CAU`,
         },

         {
            productName: `Red Skirt`,
            category: `Bottomwears`,
            price: 67,
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZkcCYlfx3NeCqJwCS9QiukQ9-tylb11b172kYSGBug&s`,
         },

         {
            productName: `Male White Trouser`,
            category: `Bottomwears`,
            price: 210,
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0wp82uaCwREBB8K_SE_9Kwhd7F0C2extnng&usqp=CAU`,
         },
      ],
   }; // End of product object;

   /*CASE 1
   For of Loop
    
  1) times to run = 20times;
  2) creates 20 cards,imgDiv,img,h4 and h5 elements.
  
  3) pushes div card 20 times into global arr[]; this will happen so that i can get the card for manipulation outside this for of loop. i will use the array in productFilter();
  
  4) assigns class to global arr[] values which is
      a) i.category.  
      
      This i.category is from the product object above. This class will need to match the value from productFilter(value);
      
  5) let count; variable used to iterate arr[];
  */
   let count = 0;

   for (let i of product.data) {
      let card = document.createElement(`div`);

      card.classList.add(`card`, i.category.toUpperCase(), `hide`);

      arr.push(card); //pushing created cards to global arr[];

      arr[count].classList.add(i.category.toUpperCase());

      count++;

      let imgDiv = document.createElement(`div`);

      imgDiv.className = `imgDiv`;

      let img = document.createElement(`img`);

      img.setAttribute(`src`, i.image);

      let article = document.createElement(`article`);

      article.className = `article`;

      let h4 = document.createElement(`h4`);

      h4.innerHTML = i.productName;

      let h5 = document.createElement(`h5`);

      h5.innerHTML = `$${i.price}`;

      //Appending everything;
      article.appendChild(h4);

      article.appendChild(h5);

      imgDiv.appendChild(img);

      card.appendChild(imgDiv);

      card.appendChild(article);

      productDiv.appendChild(card);
   } // End of case 1,For of Loop;

   /* CASE 2
  
     LOGIC;
     productFilter(value);
     
      
   
   a) since the () is called immediately at window load, value got from productFilter() MUST be === `ALL`. so that all Div will display. else, if value is found in classList,display but if not found, dont display.
     
   b) value MUST match arr[] classList.
    
     *remember that i assign i.category as a class list above*
   
   */

   function productFilter(value) {
      let buttons = document.querySelectorAll(`.buttAll`);

      buttons.forEach((button) => {
         if (button.innerHTML.toUpperCase() === value.toUpperCase()) {
            button.classList.add(`active`);
         } else {
            button.classList.remove(`active`);
         }
      }); // End of forEach();

      for (let i = 0; i < arr.length; i++) {
         if (value.toUpperCase() === `ALL`) {
            arr[i].style.display = ``;
         } else {
            if (arr[i].classList.contains(value.toUpperCase())) {
               arr[i].style.display = ``;
            } else {
               arr[i].style.display = `none`;
            } //End of inner if/else;
         } // End of outer if/ else;
      } // End of for Loop;

      p.innerHTML = ``;
   } // End of Case 2,productFilter();

   /* Case 3 
  
     LOGIC
   adding Event listener to Search Button.
   
   1) looping though all h4 elements in the page.  
   
   2) userInput MUST match h4.innerHTML to show else hide.
   
   3) p tag is created at the begining of the code so that it will be global. once search is clicked,it writes no match found but will remain hidden until when needed in if /else block of code.
   
   4) countLength = []; This array will hold the number of cards that matches. so that it can be accounted for in number of matches found.
   
   
  */

   search.addEventListener(`click`, () => {
      p.innerHTML = `No match Found`;

      p.style.color = `red`;

      buttonGroup.appendChild(p);

      let value = userInput.value.toUpperCase();

      let card = document.querySelectorAll(`.card`);

      let h4 = document.querySelectorAll(`h4`);

      let countLength = [];

      if (value !== ``) {
         for (let i = 0; i < h4.length; i++) {
            let cardH4 = card[i].querySelector(`h4`);

            let h4Values = cardH4.innerHTML || cardH4.textContent;

            if (h4Values.toUpperCase().includes(value)) {
               countLength.push((card[i].style.display = ``)); //Push into array;

               if (countLength.length === 1) {
                  p.innerHTML = `${countLength.length} match found`;
               } else {
                  p.innerHTML = `${countLength.length} matches found`;
               }

               p.style.color = `lime`;
            } else {
               card[i].style.display = `none`;

               p.classList.remove(`hidden`);
            }
         } //End of for loop;
      } else {
         alert(`Enter product field to search`);

         productFilter(`ALL`);

         p.innerHTML = ``;
      } // End of outer If/else
   }); //End of Case 3, search Event Listener();
}; //End of General()✅
