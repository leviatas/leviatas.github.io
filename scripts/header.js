const header = document.createElement('header')

header.innerHTML = `<header>
<nav>
    <div class="container-flex"><a id="logo" href="index.html"><h1>Octavio Frangipani</h1></a>
        <ul class="ul-flex">
            <li><a href="index.html">Home</a></li>
            <li><a href="cv.html">CV</a></li>
            <li><a href="box-model.html">Box-Model</a></li>
            <li><a href="https://proshop-app-177.herokuapp.com/">Proshop</a></li>
        </ul>
    </div>
</nav>
</header>`

document.body.appendChild(header)
