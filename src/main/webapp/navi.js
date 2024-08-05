/**
 * 
 */
const navContainer =  document.getElementById("nav")

const navInnerHTML = `

	<section class="menuBar">

    <div class="fixed flex items-center justify-between w-full bg-slate-50 border border-x-0 border-slate-950 h-16 z-10">
      <div>
        <img class="w-[180px] p-1 ml-12 mr-12" src="./logo/logo9.png" alt="">
      </div>

      <div>
        <ul class=" flex space-x-10 font-semibold ">
          <li class=" hover:underline underline-offset-4 ">NEW</li>
          <li class=" hover:underline underline-offset-4 ">BEST SELLERS</li>
          <li class=" hover:underline underline-offset-4 "><a href="item.html">EARRINGS</a></li>
          <li class=" hover:underline underline-offset-4 ">RINGS</li>
          <li class=" hover:underline underline-offset-4 ">NECKLACES</li>
          <li class=" hover:underline underline-offset-4 ">BRACELETS</li>
        </ul>
      </div>

      <div class=" mr-12 flex space-x-8 ">
        <div class=" hover:drop-shadow-xl relative">
          <i class=" group fa-lg far fa-user cursor-pointer">
            <div class="hidden group-hover:flex w-[400px] delay-100 duration-100 bg-slate-50 right-[-163px] top-[25px] shadow-slate-400 shadow-md absolute ">
              <div class="flex flex-col p-10 font-bold font-sans ">
                <div class=" text-2xl text-left mb-4 ">
                  DISCOVER ALL THINGS IN JEWELRY PALACE.
                </div>
                <div class=" text-left mb-4 text-sm font-normal">
                  One account to shop personalized recommendations and exclusive products.
                </div>
                <div id="signInLink" class="cursor-pointer py-3 mb-4 text-center text-xl text-slate-50 bg-slate-950 ">
                  SIGN IN
              	</div>
              	<div class="text-left text-sm font-normal">
                	Don't have an account?
                	<span id="signUpLink" class="font-semibold ml-2 cursor-pointer" >Sign up</span>
              	</div>
              </div>
            </div>
          </i>
          
        </div>
        <a href="userprofile.html">
          <div class=" hover:drop-shadow-xl ">
            <i class="fa-lg far fa-heart cursor-pointer"></i>
          </div>
        </a>
        <div id="shoppingCartIcon" class=" hover:drop-shadow-xl ">
          <i class="fa-lg far fa-shopping-cart cursor-pointer"></i>
        </div>
      </div>

    </div>
  </section>

  <!-- login form for sign up -->
  <div id="loginForm" class="hidden fixed inset-0 bg-slate-900 bg-opacity-50 justify-center items-center">
    <div class="bg-slate-50 p-8 rounded shadow-lg w-1/3 relative">
      <div id="closeLoginForm" class="absolute top-3 right-3 cursor-pointer text-slate-400 hover:text-gray-600">
        <i class="fa-lg fa far fa-times"></i>
      </div>
      <h2 class="text-3xl font-bold mb-6 text-center text-slate-800">Welcome to Jewelry Palace</h2>
      <form method="get" action="">
        <div class="mb-4">
          <label for="userName" class="block text-sm font-medium text-slate-700 mb-1">Enter your name</label>
          <input type="text" id="userName" name="userName" class="w-full px-0 py-2 border-b border-gray-300 focus:border-slate-950 focus:outline-none transition duration-200" required>
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-slate-700 mb-1">Enter your email</label>
          <input type="email" id="email" name="email" class="w-full px-0 py-2 border-b border-slate-300 focus:border-slate-950 focus:outline-none transition duration-200" required>
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-slate-700 mb-1">Enter your password</label>
          <input type="password" id="password" name="password" class="w-full px-0 py-2 border-b border-slate-300 focus:border-slate-950 focus:outline-none transition duration-200" required>
        </div>
        <div>
          <button type="submit" class="w-full bg-slate-500 text-white py-2 rounded-md shadow-lg hover:bg-slate-600 focus:ring-4 focus:ring-slate-300 transition ease-in-out duration-150">SIGN UP</button>
        </div>
      </form>
    </div>
  </div>

  <!-- login form for sign in -->
  <div id="loginFormSignIn" class="hidden fixed inset-0 bg-slate-900 bg-opacity-50 justify-center items-center">
    <div class="bg-slate-50 p-8 rounded shadow-lg w-1/3 relative">
      <div id="closeLoginFormSignIn" class="absolute top-3 right-3 cursor-pointer text-slate-400 hover:text-gray-600">
        <i class="fa-lg fa far fa-times"></i>
      </div>
      <h2 class="text-2xl font-bold mb-6">Welcome Back</h2>
      <form method="POST" action="">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-slate-700 mb-1">Enter your email</label>
          <input type="email" id="email" name="email" class="w-full px-0 py-2 border-b border-slate-300 focus:border-slate-950 focus:outline-none transition duration-200" required>
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-slate-700 mb-1">Enter your password</label>
          <input type="password" id="password" name="password" class="w-full px-0 py-2 border-b border-slate-300 focus:border-slate-950 focus:outline-none transition duration-200" required>
        </div>
        <div class="flex justify-between items-center">
                <button type="submit" class="w-full bg-slate-500 text-white px-6 py-2 rounded-md shadow-sm hover:bg-slate-600 focus:ring-4 focus:ring-slate-300 transition ease-in-out duration-150">SIGN IN</button>
        </div>
      </form>
    </div>
  </div>

  <!-- shopping cart box -->
  <div id="shoppingCartBox" class="fixed top-0 right-0 h-screen w-96 bg-white shadow-xl z-10 transform translate-x-full transition-transform duration-300 ease-in-out">
    <div class="p-4 relative h-full">
        <div id="closeShoppingCart" class="cursor-pointer text-slate-500 hover:text-slate-950 absolute top-4 right-4">
            <i class="fa-lg fa far fa-times"></i>
        </div>
        <h2 class="text-xl font-bold my-8">Shopping Cart</h2>
        <!-- <p>No items in the cart.</p> -->
    </div>
  </div>

`;
navContainer.innerHTML = navInnerHTML;

// login form sign up
const signUpLink = document.getElementById("signUpLink");
const loginForm = document.getElementById("loginForm");
const closeLoginForm = document.getElementById("closeLoginForm");

signUpLink.addEventListener("click", function() {
  loginForm.classList.remove("hidden");
  loginForm.classList.add("flex");
  loginForm.classList.add("z-10");
});

closeLoginForm.addEventListener("click", function() {
  loginForm.classList.add("hidden");
});

// login form sign in
const signInLink = document.getElementById('signInLink');
const loginFormSignIn = document.getElementById("loginFormSignIn");
const closeLoginFormSignIn = document.getElementById("closeLoginFormSignIn");

signInLink.addEventListener("click", function() {
  loginFormSignIn.classList.remove("hidden");
  loginFormSignIn.classList.add("flex");
  loginFormSignIn.classList.add("z-10");
});

closeLoginFormSignIn.addEventListener("click", function() {
  loginFormSignIn.classList.add("hidden");
});

// shopping cart 
const shoppingCartIcon = document.getElementById('shoppingCartIcon');
const shoppingCartBox = document.getElementById('shoppingCartBox');
const closeShoppingCart = document.getElementById('closeShoppingCart');

shoppingCartIcon.addEventListener('click', function () {
    shoppingCartBox.style.transform = 'translateX(0)';
});

closeShoppingCart.addEventListener('click', function () {
    shoppingCartBox.style.transform = 'translateX(100%)';
});