const header = document.createElement('header')

header.innerHTML = `<header id="header" class="mar-bottom1">
<nav>
    <div class="navbar-flex bgc-petrol">
    <a class="logo" href="index.html"><h1>Octavio Frangipani</h1></a>
        <ul class="ul-flex" >
            <a class="pale" href="index.html"><li>Home</li></a>
            <a class="pale" href="cv.html"><li>CV</li></a>
            <a class="pale" href="box-model.html"><li>Box-Model</li></a>
            <a class="pale" href="notes.html"><li>Notes</li></a>
            <a class="pale" href="tech-news.html"><li>TechNews</li></a>
            <a class="pale" href="pictures-grid.html"><li>Pictures-Grid</li></a>
            <a class="pale" href="https://proshop-app-177.herokuapp.com/"><li>Proshop</li></a>
        </ul>
    </div>
</nav>
</header>`

document.body.appendChild(header)
