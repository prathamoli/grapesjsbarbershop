export function navbar(editor) {
    editor.BlockManager.add('navbar 1', {
        label: 'Navbar 1',
        content: 
            `<header  class="flex flex-wrap flex-row justify-between md:items-center md:space-x-4 bg-white py-6 px-6 relative">
            <a href="#" class="block">
              <span class="sr-only">themes.dev</span>
              <img class="h-6 md:h-8" src="/images/themesdev-logo-dark.svg" alt="Themes.dev Logo" title="Themes.dev Logo">
            </a>
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="inline-block md:hidden w-8 h-8 bg-gray-200 text-gray-600 p-1">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <nav class="absolute md:relative top-16 left-0 md:top-0 z-20 md:flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0"
            >
              <a href="#" class="block py-1 text-indigo-600 hover:underline">Home</a>
              <a href="#" class="block py-1 text-gray-600 hover:underline">About us</a>
              <a href="#" class="block py-1 text-gray-600 hover:underline">Services</a>
              <a href="#" class="block py-1 text-gray-600 hover:underline">Blog</a>
              <a href="#" class="block py-1 text-gray-600 hover:underline">Contact</a>
            </nav>
          </header>`,
          category : 'Navbar'
      })

      editor.BlockManager.add('navbar 2', {
        label: 'Navbar 2',
        content: 
            `<nav class="navbar navbar-expand-lg  navbar-dark bg-primary">
            <div class="container">
              <a class="navbar-brand" href="#">Brand</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Contact</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Download</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>`,
          category : 'Navbar'
      })

      editor.BlockManager.add('navbar 3', {
        label: 'Navbar 3',
        content: 
            `<div id="iwd5" class="row"><div id="iwko" class="cell">
            <img id="i21e" src="" alt=""/></div><div id="iru6" class="cell">
            <div data-gjs="navbar" id="iuyfh" class="navbar">
            <div id="ilmqf" class="navbar-container">
            <div id="ioi5h" class="navbar-burger">
            <div class="navbar-burger-line"></div>
            <div class="navbar-burger-line"></div>
            <div class="navbar-burger-line"></div>
            </div>
            <div data-gjs="navbar-items" id="ilzko" class="navbar-items-c">
            <nav data-gjs="navbar-menu" id="ig1gv" class="navbar-menu">
            <a href="#" id="ix89j" class="navbar-menu-link">Home</a>
            <a href="#" id="iqqff" class="navbar-menu-link">About</a>
            <a href="#" id="i7l3z" class="navbar-menu-link">Locations</a>
            <a href="#" id="iftwu" class="navbar-menu-link">Services</a>
            <a href="#" id="i5tvs" class="navbar-menu-link">Book</a>
            <a href="#" id="i7fsl" class="navbar-menu-link">Contact</a>
            </nav></div></div></div></div></div>`,
          category : 'Navbar'
      })
}
