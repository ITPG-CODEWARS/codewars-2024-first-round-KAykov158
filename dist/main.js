const navBar = `          <nav  class="flex bg-cyan-700 items-center w-full">
                <img class="w-14 h-14" src="/Image/logo.png">
                <ul class="flex gap-24 items-center justify-center w-full font-bold text-2xl text-white">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="trains.html">Trains</a></li>
                </ul>
            </nav>`

            window.addEventListener('DOMContentLoaded', () => {
                document.body.insertAdjacentHTML("afterbegin",navBar)
            });


