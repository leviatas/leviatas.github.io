const header = document.createElement('header')

header.innerHTML = `<header id="header">
<nav>
    <div class="navbar-flex bgc-petrol"><a class="no-txt-dec logo" href="index.html"><h1>Octavio Frangipani</h1></a>
        <ul class="ul-flex no-list-style">
            <li><a class="no-txt-dec pale" href="index.html">Home</a></li>
            <li><a class="no-txt-dec pale" href="cv.html">CV</a></li>
            <li><a class="no-txt-dec pale" href="box-model.html">Box-Model</a></li>
            <li><a class="no-txt-dec pale" href="notes.html">Notes</a></li>
            <li><a class="no-txt-dec pale" href="https://proshop-app-177.herokuapp.com/">Proshop</a></li>
        </ul>
    </div>
</nav>
</header>`

document.body.appendChild(header)
